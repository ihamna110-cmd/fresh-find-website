import { dataService } from '../dataService.js';
import { audioManager } from '../audioManager.js';

export class Chatbot {
  constructor(app) {
    this.app = app;
    this.launcherBtn = document.getElementById('chatbotLauncher');
    this.chatWindow = document.getElementById('chatbotWindow');
    this.closeBtn = document.getElementById('chatCloseBtn');
    this.clearBtn = document.getElementById('chatClearBtn');
    this.messagesContainer = document.getElementById('chatMessages');
    this.quickRepliesContainer = document.getElementById('chatQuickReplies');
    this.inputField = document.getElementById('chatInputField');
    this.sendBtn = document.getElementById('chatSendBtn');
    this.micBtn = document.getElementById('chatMicBtn');
    this.voiceToggleBtn = document.getElementById('chatVoiceToggleBtn');
    this.tooltipPill = document.getElementById('botTooltipPill');

    this.speechRecognition = null;
    this.speechSynth = window.speechSynthesis || null;
    this.isListening = false;
    this.voiceEnabled = true;
  }

  init() {
    this.setupListeners();
    this.setupSpeechRecognition();
    this.renderWelcome();
    this.setupTooltipPill();
  }

  setupTooltipPill() {
    // Show after 3 seconds on page, auto fade after 12 seconds
    if (this.tooltipPill) {
      setTimeout(() => {
        if (!this.chatWindow?.classList.contains('open')) {
          this.tooltipPill.style.opacity = '1';
        }
      }, 2500);

      setTimeout(() => {
        if (this.tooltipPill) this.tooltipPill.style.opacity = '0';
      }, 15000);
    }
  }

  setupListeners() {
    this.launcherBtn?.addEventListener('click', () => {
      audioManager.playClick();
      this.toggleWindow();
    });

    this.closeBtn?.addEventListener('click', () => {
      audioManager.playClick();
      this.closeWindow();
    });

    this.clearBtn?.addEventListener('click', () => {
      audioManager.playClick();
      this.renderWelcome();
    });

    this.voiceToggleBtn?.addEventListener('click', () => {
      audioManager.playClick();
      this.voiceEnabled = !this.voiceEnabled;
      if (this.voiceToggleBtn) {
        this.voiceToggleBtn.textContent = this.voiceEnabled ? '🔊' : '🔇';
        this.voiceToggleBtn.title = this.voiceEnabled ? 'Voice is ON' : 'Voice is MUTED';
      }
      if (!this.voiceEnabled && this.speechSynth) {
        this.speechSynth.cancel();
      }
      this.app.showToast(this.voiceEnabled ? 'FreshBot Voice Enabled 🔊' : 'FreshBot Voice Muted 🔇');
    });

    this.sendBtn?.addEventListener('click', () => this.handleUserSend());

    this.inputField?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        this.handleUserSend();
      }
    });

    this.micBtn?.addEventListener('click', () => this.toggleSpeechListening());
  }

  toggleWindow() {
    const isOpen = this.chatWindow.classList.toggle('open');
    if (isOpen) {
      audioManager.playChime();
      this.inputField?.focus();
      // Remove beacon and pill
      const beacon = this.launcherBtn?.querySelector('.chat-ping-beacon');
      if (beacon) beacon.style.display = 'none';
      if (this.tooltipPill) this.tooltipPill.style.display = 'none';
    }
  }

  closeWindow() {
    this.chatWindow.classList.remove('open');
  }

  setupSpeechRecognition() {
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRec) {
      this.speechRecognition = new SpeechRec();
      this.speechRecognition.continuous = false;
      this.speechRecognition.interimResults = false;
      this.speechRecognition.lang = 'en-US';

      this.speechRecognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        if (this.inputField) {
          this.inputField.value = transcript;
          this.handleUserSend();
        }
      };

      this.speechRecognition.onerror = () => {
        this.isListening = false;
        this.micBtn?.classList.remove('listening');
      };

      this.speechRecognition.onend = () => {
        this.isListening = false;
        this.micBtn?.classList.remove('listening');
      };
    } else {
      if (this.micBtn) this.micBtn.style.display = 'none';
    }
  }

  toggleSpeechListening() {
    if (!this.speechRecognition) return;

    if (this.isListening) {
      this.speechRecognition.stop();
      this.isListening = false;
      this.micBtn?.classList.remove('listening');
    } else {
      audioManager.playClick();
      this.speechRecognition.start();
      this.isListening = true;
      this.micBtn?.classList.add('listening');
      this.app.showToast('Listening... Speak now 🎙️');
    }
  }

  speak(text) {
    if (!this.speechSynth || !this.voiceEnabled || audioManager.isMuted()) return;
    try {
      this.speechSynth.cancel();
      // Strip markdown asterisks and emojis for speech
      const clean = text.replace(/[*_#]/g, '').replace(/[\u{1F600}-\u{1F64F}]/gu, '');
      const utterance = new SpeechSynthesisUtterance(clean);
      utterance.rate = 1.05;
      this.speechSynth.speak(utterance);
    } catch (e) {}
  }

  showTypingIndicator() {
    this.hideTypingIndicator();
    const ind = document.createElement('div');
    ind.id = 'chatTypingIndicator';
    ind.className = 'chat-bubble bot typing-indicator-bubble';
    ind.innerHTML = `
      <div class="typing-dots">
        <span></span><span></span><span></span>
      </div>
      <span class="typing-text">FreshBot is thinking...</span>
    `;
    this.messagesContainer.appendChild(ind);
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
  }

  hideTypingIndicator() {
    const ind = document.getElementById('chatTypingIndicator');
    if (ind) ind.remove();
  }

  renderWelcome() {
    const data = dataService.getChatbotData();
    this.messagesContainer.innerHTML = '';

    const welcomeMsg = data?.welcomeMessage || "Hello! I am FreshBot, your intelligent farmers market guide 🌱. Ask me about nearby markets, seasonal produce, operating hours, or click one of the quick suggestions below:";
    this.appendMessage('bot', welcomeMsg);

    this.renderQuickReplies(data?.quickReplies || []);
  }

  renderQuickReplies(replies) {
    this.quickRepliesContainer.innerHTML = '';
    replies.forEach(r => {
      const btn = document.createElement('button');
      btn.className = 'chat-pill-btn';
      btn.textContent = r.label || r;
      btn.addEventListener('click', () => {
        audioManager.playClick();
        const text = r.query || r.label || r;
        this.processQuery(text);
      });
      this.quickRepliesContainer.appendChild(btn);
    });
  }

  handleUserSend() {
    const query = this.inputField?.value.trim();
    if (!query) return;

    this.inputField.value = '';
    this.processQuery(query);
  }

  processQuery(userQuery) {
    audioManager.playClick();
    this.appendMessage('user', userQuery);

    // Show realistic typing animation
    this.showTypingIndicator();

    setTimeout(() => {
      this.hideTypingIndicator();
      const responseObj = this.matchIntent(userQuery);
      this.appendMessage('bot', responseObj.response, responseObj.actionCard);
      this.speak(responseObj.response);
      audioManager.playChime();

      if (responseObj.quickReplies) {
        this.renderQuickReplies(responseObj.quickReplies);
      }

      // Execute associated action if present
      if (responseObj.action) {
        this.executeAction(responseObj.action, responseObj.relatedMarketId);
      }
    }, 650);
  }

  matchIntent(query) {
    const data = dataService.getChatbotData();
    if (!data) {
      return { response: "I'm having trouble accessing my database right now. Please try again later!" };
    }

    const lowerQuery = query.toLowerCase();
    let bestMatch = null;
    let maxScore = 0;

    for (const intent of data.intents) {
      let score = 0;
      for (const kw of intent.keywords) {
        if (lowerQuery.includes(kw.toLowerCase())) {
          score += kw.length;
        }
      }
      if (score > maxScore) {
        maxScore = score;
        bestMatch = intent;
      }
    }

    if (bestMatch && maxScore > 0) {
      let actionCard = null;
      if (bestMatch.relatedMarketId) {
        const m = dataService.getMarketById(bestMatch.relatedMarketId);
        if (m) {
          actionCard = {
            title: m.name,
            sub: `${m.area} • ${m.hours}`,
            btnText: 'Open Details',
            marketId: m.id
          };
        }
      }

      return {
        response: bestMatch.response,
        quickReplies: bestMatch.quickReplies || data.defaultQuickReplies,
        action: bestMatch.action,
        relatedMarketId: bestMatch.relatedMarketId,
        actionCard
      };
    }

    return {
      response: data.defaultResponse,
      quickReplies: data.defaultQuickReplies
    };
  }

  executeAction(action, marketId) {
    if (action === 'FILTER_OPEN_TODAY') {
      document.getElementById('filterOpenNow')?.classList.add('active');
      this.app.marketDirectory?.render();
      document.getElementById('directory')?.scrollIntoView({ behavior: 'smooth' });
    } else if (action === 'NAVIGATE_PRODUCE_FRUITS' || action === 'NAVIGATE_PRODUCE_VEG' || action === 'NAVIGATE_PRODUCE_DAIRY') {
      document.getElementById('produce')?.scrollIntoView({ behavior: 'smooth' });
    } else if (action === 'OPEN_BOOKMARKS') {
      this.app.bookmarks?.open();
    } else if (action === 'OPEN_ECO_CALC') {
      document.getElementById('eco-calculator')?.scrollIntoView({ behavior: 'smooth' });
    } else if (action === 'NAVIGATE_CONTACT') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  appendMessage(sender, text, actionCard = null) {
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${sender}`;

    // Safely format markdown bold and links
    let formattedText = (text || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');

    // Enhance text with clickable section jump links if relevant pages are mentioned
    formattedText = formattedText
      .replace(/\[(.*?)\]\((#(.*?))\)/g, '<a href="$2" class="chat-section-link">$1</a>');

    if (sender === 'bot') {
      bubble.innerHTML = `
        <div style="display:flex; align-items:flex-start; gap:0.6rem;">
          <img src="assets/images/robot_avatar.png" alt="FreshBot AI" style="width:26px; height:26px; border-radius:50%; object-fit:cover; flex-shrink:0; margin-top:2px; border:1px solid rgba(74, 222, 128, 0.5);">
          <div style="flex:1;">${formattedText}</div>
        </div>
      `;
    } else {
      bubble.innerHTML = `<div>${formattedText}</div>`;
    }

    // Attach click events on in-chat section jump links
    bubble.querySelectorAll('.chat-section-link').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const targetEl = document.querySelector(href);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });

    if (actionCard) {
      const cardEl = document.createElement('div');
      cardEl.style.cssText = 'background:var(--bg-surface); border:1px solid var(--border-medium); border-radius:var(--radius-sm); padding:0.6rem 0.8rem; margin-top:0.5rem; font-size:0.85rem;';
      cardEl.innerHTML = `
        <div style="font-weight:700; color:var(--primary);">${actionCard.title}</div>
        <div style="font-size:0.75rem; color:var(--text-muted); margin-bottom:0.35rem;">${actionCard.sub}</div>
        <button class="btn-primary" style="padding:0.25rem 0.65rem; font-size:0.78rem; width:100%; justify-content:center;">${actionCard.btnText}</button>
      `;
      cardEl.querySelector('button').addEventListener('click', () => {
        this.app.openMarketDetail(actionCard.marketId);
      });
      bubble.appendChild(cardEl);
    }

    this.messagesContainer.appendChild(bubble);
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
  }
}
