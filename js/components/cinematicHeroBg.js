/**
 * FreshFind — Cinematic Farmers Market Hero Background Engine
 * Premium 15-second looping canvas animation
 * Scenes: Sunrise | Market Stalls | Macro Produce | Map Pins | Outro
 */
export class CinematicHeroBg {
  constructor() {
    this.bgCanvas   = document.getElementById("cinematicHeroBgCanvas");
    this.cardCanvas = document.getElementById("heroHarvestCanvas");
    this.paused  = false;
    this.t       = 0;
    this.scene   = 0;
    this.SCENE_DUR  = 3;
    this.TOTAL_DUR  = 15;
    this.lastTs  = null;
    this.rafId   = null;
    this.pollen  = [];
    this.bokeh   = [];
    this.godRays = [];
    this.produce = [
      { emoji:"🍅", label:"Heirloom Tomato", x:0.25, y:0.45, r:72, color:"#e53935" },
      { emoji:"🥕", label:"Organic Carrot",  x:0.55, y:0.60, r:60, color:"#f57c00" },
      { emoji:"🍋", label:"Meyer Lemon",      x:0.75, y:0.35, r:65, color:"#f9a825" },
      { emoji:"🫑", label:"Bell Pepper",      x:0.40, y:0.70, r:58, color:"#2e7d32" },
      { emoji:"🍓", label:"Strawberry",       x:0.65, y:0.55, r:62, color:"#c62828" },
      { emoji:"🧅", label:"Sweet Onion",      x:0.20, y:0.65, r:55, color:"#bf360c" },
    ];
    this.stalls = [
      { x:0.08, w:0.20, color:"#5d4037", roofColor:"#8d6e63", shade:"#a1887f" },
      { x:0.30, w:0.22, color:"#4e342e", roofColor:"#795548", shade:"#8d6e63" },
      { x:0.54, w:0.20, color:"#37474f", roofColor:"#546e7a", shade:"#78909c" },
      { x:0.76, w:0.21, color:"#33691e", roofColor:"#558b2f", shade:"#7cb342" },
    ];
    this.mapPins = [
      { x:0.22, y:0.38, label:"Green Valley Market", open:true,  dist:"0.3 km", delay:0   },
      { x:0.55, y:0.52, label:"Sunrise Farmers Co.", open:true,  dist:"1.1 km", delay:0.6 },
      { x:0.74, y:0.30, label:"Herb Garden Stand",   open:false, dist:"2.4 km", delay:1.2 },
      { x:0.38, y:0.65, label:"Highland Fresh Farm", open:true,  dist:"3.7 km", delay:1.8 },
    ];
  }

  init() {
    // If canvases are not present in DOM, exit immediately to save 100% CPU/GPU
    if (!this.bgCanvas && !this.cardCanvas) {
      this.paused = true;
      return;
    }
    this._seed();
    this._resize();
    window.addEventListener("resize", () => this._resize(), { passive:true });
    document.getElementById("heroVideoPlayPauseBtn")?.addEventListener("click", () => {
      this.paused = !this.paused;
      const icon = document.getElementById("heroVideoPlayIcon");
      if (icon) icon.textContent = this.paused ? "▶ Play" : "⏸ Pause";
      if (!this.paused) this._loop(performance.now());
    });
    this._loop(performance.now());
  }

  _resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    if (this.bgCanvas) {
      this.bgCanvas.width  = window.innerWidth  * dpr;
      this.bgCanvas.height = window.innerHeight * dpr;
      this.bgCanvas.getContext("2d").scale(dpr, dpr);
    }
    if (this.cardCanvas) {
      const r = this.cardCanvas.getBoundingClientRect();
      this.cardCanvas.width  = (r.width  || 560) * dpr;
      this.cardCanvas.height = (r.height || 460) * dpr;
      this.cardCanvas.getContext("2d").scale(dpr, dpr);
    }
    this.W  = this.bgCanvas   ? this.bgCanvas.width   / dpr : window.innerWidth;
    this.H  = this.bgCanvas   ? this.bgCanvas.height  / dpr : window.innerHeight;
    this.CW = this.cardCanvas ? this.cardCanvas.width  / dpr : 560;
    this.CH = this.cardCanvas ? this.cardCanvas.height / dpr : 460;
  }

  _seed() {
    this.pollen  = Array.from({length:55}, () => ({
      x:Math.random(), y:Math.random(),
      r:Math.random()*2.5+0.8,
      vx:(Math.random()-0.5)*0.0006, vy:-(Math.random()*0.0005+0.0002),
      alpha:Math.random()*0.55+0.15, flicker:Math.random()*Math.PI*2
    }));
    this.bokeh   = Array.from({length:22}, () => ({
      x:Math.random(), y:Math.random(),
      r:Math.random()*55+20, alpha:Math.random()*0.07+0.02,
      color:Math.random()>0.5 ? "#a5d6a7" : "#fff9c4",
      speed:(Math.random()-0.5)*0.00015
    }));
    this.godRays = Array.from({length:7}, (_, i) => ({
      angle:-0.55+i*0.18+(Math.random()-0.5)*0.08,
      alpha:Math.random()*0.06+0.02, width:Math.random()*60+30
    }));
  }

  _loop(ts) {
    if (this.paused) return;
    if (this.lastTs === null) this.lastTs = ts;
    const dt = Math.min((ts - this.lastTs) / 1000, 0.05);
    this.lastTs = ts;
    this.t = (this.t + dt) % this.TOTAL_DUR;
    this.scene = Math.floor(this.t / this.SCENE_DUR);
    const sceneT = (this.t % this.SCENE_DUR) / this.SCENE_DUR;
    this._drawBg(this.t, this.scene, sceneT);
    this._drawCard(this.t, this.scene, sceneT);
    this._updateParticles(dt);
    this.rafId = requestAnimationFrame(ts2 => this._loop(ts2));
  }

  _drawBg(t, scene, sceneT) {
    const c = this.bgCanvas; if (!c) return;
    const ctx = c.getContext("2d");
    const W = this.W, H = this.H;
    ctx.clearRect(0,0,W,H);
    this._drawSky(ctx,W,H,scene,sceneT);
    if (scene===0) this._scene0(ctx,W,H,t,sceneT);
    if (scene===1) this._scene1(ctx,W,H,t,sceneT);
    if (scene===2) this._scene2(ctx,W,H,t,sceneT);
    if (scene===3) this._scene3(ctx,W,H,t,sceneT);
    if (scene===4) this._scene4(ctx,W,H,t,sceneT);
    this._godRays(ctx,W,H,t);
    this._pollenDraw(ctx,W,H);
    this._bokehDraw(ctx,W,H,t);
    this._vignette(ctx,W,H);
    this._grain(ctx,W,H,t);
  }

  _drawSky(ctx,W,H,scene,sceneT) {
    const s = [
      {top:"#1a0a00",mid:"#c25a00",bot:"#f4a435"},
      {top:"#0d2117",mid:"#1a4a2e",bot:"#c8e6c9"},
      {top:"#1b3326",mid:"#2e7d52",bot:"#e8f5e9"},
      {top:"#0a1628",mid:"#1565c0",bot:"#42a5f5"},
      {top:"#1a2e1e",mid:"#2d5a3d",bot:"#f1f8f3"},
    ][Math.min(scene,4)];
    const g = ctx.createLinearGradient(0,0,0,H);
    g.addColorStop(0,s.top); g.addColorStop(0.45,s.mid); g.addColorStop(1,s.bot);
    ctx.fillStyle = g; ctx.fillRect(0,0,W,H);
    const hg = ctx.createRadialGradient(W*.5,H*.65,0,W*.5,H*.65,W*.7);
    hg.addColorStop(0, scene===0?"rgba(255,160,30,0.45)":scene===3?"rgba(66,165,245,0.18)":"rgba(56,175,80,0.22)");
    hg.addColorStop(1,"rgba(0,0,0,0)");
    ctx.fillStyle=hg; ctx.fillRect(0,0,W,H);
  }

  _scene0(ctx,W,H,t,sT) {
    const hor = H*0.62;
    ["#1b4332","#2d6a4f","#40916c","#74c69d"].reverse().forEach((col,i) => {
      const yOff = hor - i*H*0.07;
      const par  = Math.sin(t*0.04+i*0.5)*8;
      ctx.fillStyle=col; ctx.beginPath(); ctx.moveTo(-20,H);
      for (let x=-20;x<=W+20;x+=18) {
        ctx.lineTo(x+par, yOff+Math.sin((x+t*12+i*60)*0.006)*28+Math.sin((x+t*8+i*80)*0.012)*14);
      }
      ctx.lineTo(W+20,H); ctx.closePath(); ctx.fill();
    });
    const sy=H*(0.65-sT*0.08), sx=W*.5;
    const sg=ctx.createRadialGradient(sx,sy,0,sx,sy,200);
    sg.addColorStop(0,"rgba(255,250,200,0.95)"); sg.addColorStop(0.1,"rgba(255,200,50,0.85)");
    sg.addColorStop(0.35,"rgba(255,130,20,0.45)"); sg.addColorStop(0.7,"rgba(255,100,0,0.12)"); sg.addColorStop(1,"rgba(0,0,0,0)");
    ctx.fillStyle=sg; ctx.beginPath(); ctx.arc(sx,sy,200,0,Math.PI*2); ctx.fill();
    const mist=ctx.createLinearGradient(0,hor-30,0,hor+60);
    mist.addColorStop(0,"rgba(255,255,255,0)"); mist.addColorStop(0.4,"rgba(255,252,240,0.28)"); mist.addColorStop(1,"rgba(255,255,255,0)");
    ctx.fillStyle=mist; ctx.fillRect(0,hor-30,W,90);
  }

  _scene1(ctx,W,H,t,sT) {
    const gy=H*0.72;
    ctx.fillStyle="#2d5a2e";
    for (let tx=0;tx<W;tx+=90) { ctx.beginPath(); ctx.ellipse(tx+45,H*0.25,37+Math.sin(tx*.05)*10,(H*0.28+Math.sin(tx*.04+t*.1)*20)/2,0,0,Math.PI*2); ctx.fill(); }
    const gg=ctx.createLinearGradient(0,gy,0,H);
    gg.addColorStop(0,"#8d6e63"); gg.addColorStop(1,"#5d4037");
    ctx.fillStyle=gg; ctx.fillRect(0,gy,W,H-gy);
    ctx.strokeStyle="rgba(0,0,0,0.12)"; ctx.lineWidth=1;
    for (let r=0;r<5;r++) for (let c=0;c<12;c++) ctx.strokeRect(c*(W/11)-(r%2)*(W/22), gy+r*28, W/11, 28);
    const ep=["🍅","🫑","🥕","🌽","🍋","🧅"];
    this.stalls.forEach((st,i) => {
      const x=st.x*W, sw=st.w*W, sH=H*0.38, sy=gy-sH, sw2=Math.sin(t*.3+i*1.2)*1.5;
      ctx.fillStyle=st.color; ctx.fillRect(x+sw2,sy,sw,sH);
      for (let s=0;s<6;s++) {
        ctx.fillStyle=s%2===0?st.roofColor:st.shade;
        const ax=x+(s*sw/6)+sw2;
        ctx.beginPath(); ctx.moveTo(ax,sy-18); ctx.lineTo(ax+sw/6,sy-18);
        ctx.lineTo(ax+sw/6+12,sy+10); ctx.lineTo(ax-12,sy+10); ctx.closePath(); ctx.fill();
      }
      ctx.font=`${22+Math.sin(t+i)*3|0}px serif`; ctx.textAlign="center";
      for (let p=0;p<3;p++) ctx.fillText(ep[(i*3+p)%ep.length], x+sw*(0.2+p*0.28)+sw2, sy+30+Math.sin(t*.5+p*1.4+i)*5);
      ctx.fillStyle=`rgba(255,230,120,${0.06+Math.sin(t*.8+i*.7)*.03})`;
      ctx.beginPath(); ctx.ellipse(x+sw*.5,gy+15,sw*.4,15,0,0,Math.PI*2); ctx.fill();
      ctx.fillStyle="#fff8e1"; ctx.fillRect(x+sw2+8,sy+10,sw-16,22);
      ctx.fillStyle="#4e342e"; ctx.font="bold 10px 'Plus Jakarta Sans',sans-serif";
      ctx.fillText(["Green Valley","Fresh Harvest","Herb Garden","Local Roots"][i], x+sw*.5+sw2, sy+25);
    });
    [0.18,0.42,0.62,0.84].forEach((px,i) => {
      this._person(ctx,px*W+Math.sin(t*.4+i*1.8)*12, gy, H*.16, i%2===0);
    });
  }

  _scene2(ctx,W,H,t,sT) {
    const tg=ctx.createLinearGradient(0,H*.3,0,H);
    tg.addColorStop(0,"#6d4c41"); tg.addColorStop(0.5,"#4e342e"); tg.addColorStop(1,"#3e2723");
    ctx.fillStyle=tg; ctx.fillRect(0,0,W,H);
    for (let r=0;r<8;r++) { ctx.strokeStyle="rgba(0,0,0,0.15)"; ctx.lineWidth=1.5; ctx.beginPath(); ctx.moveTo(0,H*(r/8)); ctx.lineTo(W,H*(r/8)); ctx.stroke(); }
    ctx.fillStyle="#fafafa"; ctx.fillRect(W*.08,H*.35,W*.84,H*.55);
    ctx.strokeStyle="#e0e0e0"; ctx.lineWidth=2; ctx.strokeRect(W*.08,H*.35,W*.84,H*.55);
    this.produce.forEach((p,i) => {
      const px=p.x*W, py=p.y*H, puls=Math.sin(t*.6+i*1.1)*4;
      const ap=Math.min((sT*6-i*.4),1); if (ap<=0) return;
      ctx.globalAlpha=ap;
      ctx.fillStyle="rgba(0,0,0,0.18)"; ctx.beginPath(); ctx.ellipse(px+4,py+p.r*.6+puls,p.r*.7,p.r*.18,0,0,Math.PI*2); ctx.fill();
      const gw=ctx.createRadialGradient(px-p.r*.25,py-p.r*.22,0,px,py,p.r*1.1);
      gw.addColorStop(0,p.color+"ff"); gw.addColorStop(0.7,p.color+"bb"); gw.addColorStop(1,p.color+"00");
      ctx.fillStyle=gw; ctx.beginPath(); ctx.arc(px,py+puls,p.r*1.12,0,Math.PI*2); ctx.fill();
      ctx.font=`${p.r*1.1|0}px serif`; ctx.textAlign="center"; ctx.textBaseline="middle"; ctx.fillText(p.emoji,px,py+puls);
      if (ap>0.6) {
        const la=(ap-0.6)/0.4; ctx.globalAlpha=la;
        const tw=ctx.measureText(p.label).width+24;
        ctx.fillStyle="rgba(255,255,255,0.92)"; this._rrect(ctx,px-tw/2,py+p.r+puls+10,tw,24,12); ctx.fill();
        ctx.fillStyle="#1b4332"; ctx.font="bold 11px 'Plus Jakarta Sans',sans-serif"; ctx.fillText(p.label,px,py+p.r+puls+22);
      }
      ctx.globalAlpha=1; ctx.textBaseline="alphabetic";
    });
    ["🌿","🌱","🍃","🌾"].forEach((h,i) => {
      ctx.font="28px serif"; ctx.textAlign="center"; ctx.globalAlpha=0.7+Math.sin(t+i)*.15;
      ctx.fillText(h, W*(0.1+i*0.22)+Math.sin(t*.3+i)*8, H*.88+Math.cos(t*.4+i)*4);
    });
    ctx.globalAlpha=1;
  }

  _scene3(ctx,W,H,t,sT) {
    const cg=ctx.createLinearGradient(0,0,0,H);
    cg.addColorStop(0,"#0a1628"); cg.addColorStop(0.5,"#0d3b2f"); cg.addColorStop(1,"#1b5e20");
    ctx.fillStyle=cg; ctx.fillRect(0,0,W,H);
    ctx.strokeStyle="rgba(100,180,120,0.14)"; ctx.lineWidth=1;
    for (let gx=0;gx<W;gx+=55) { ctx.beginPath(); ctx.moveTo(gx,0); ctx.lineTo(gx,H); ctx.stroke(); }
    for (let gy=0;gy<H;gy+=55) { ctx.beginPath(); ctx.moveTo(0,gy); ctx.lineTo(W,gy); ctx.stroke(); }
    for (let bx=0;bx<W;bx+=110) for (let by=0;by<H;by+=110) { ctx.fillStyle="rgba(22,90,50,0.07)"; ctx.fillRect(bx+8,by+8,94,94); }
    [0.15,0.5,0.8].forEach((px,i) => { ctx.fillStyle=`rgba(46,160,67,${0.12+Math.sin(t*.4+i)*.04})`; ctx.beginPath(); ctx.arc(px*W,(0.3+i*.22)*H,55+Math.sin(t*.3+i)*8,0,Math.PI*2); ctx.fill(); });
    this.mapPins.forEach((pin,i) => {
      const ap=Math.max(0,Math.min((sT-pin.delay/this.SCENE_DUR)*4,1)); if (ap<=0) return;
      const px=pin.x*W, py=pin.y*H, fl=Math.sin(t*.7+i*1.3)*6;
      ctx.globalAlpha=ap;
      const pulse=(t*.5+i*.25)%1;
      ctx.strokeStyle=pin.open?`rgba(76,175,80,${0.5-pulse*.5})`:`rgba(244,67,54,${0.4-pulse*.4})`; ctx.lineWidth=2;
      ctx.beginPath(); ctx.arc(px,py+fl,20+pulse*40,0,Math.PI*2); ctx.stroke();
      ctx.fillStyle=pin.open?"#4caf50":"#f44336";
      ctx.beginPath(); ctx.arc(px,py-20+fl,14,0,Math.PI*2); ctx.fill();
      ctx.beginPath(); ctx.moveTo(px-7,py-10+fl); ctx.lineTo(px+7,py-10+fl); ctx.lineTo(px,py+4+fl); ctx.closePath(); ctx.fill();
      ctx.font="13px serif"; ctx.textAlign="center"; ctx.fillText("🌿",px,py-13+fl);
      if (ap>0.5) {
        const ca=(ap-0.5)*2; ctx.globalAlpha=ca;
        const cw=175, ch=58, cx=Math.min(Math.max(px-87,10),W-185), cy=py-92+fl;
        ctx.fillStyle="rgba(255,255,255,0.96)"; this._rrect(ctx,cx,cy,cw,ch,10); ctx.fill();
        ctx.strokeStyle=pin.open?"#4caf50":"#f44336"; ctx.lineWidth=2; ctx.stroke();
        ctx.fillStyle="#1b4332"; ctx.font="bold 11px 'Plus Jakarta Sans',sans-serif"; ctx.textAlign="left"; ctx.fillText(pin.label,cx+10,cy+18);
        ctx.fillStyle=pin.open?"#2e7d32":"#c62828"; ctx.font="10px 'Plus Jakarta Sans',sans-serif";
        ctx.fillText(pin.open?"● Open Now":"○ Closed",cx+10,cy+34);
        ctx.fillStyle="#546e7a"; ctx.fillText("📍 "+pin.dist+" away",cx+10,cy+48);
      }
      ctx.globalAlpha=1;
    });
    const ba=Math.max(0,sT-.7)*3.3;
    if (ba>0) { ctx.globalAlpha=ba*.7; ctx.font=`bold ${W*.028|0}px 'Plus Jakarta Sans',sans-serif`; ctx.textAlign="center"; ctx.fillStyle="#a5d6a7"; ctx.fillText("FreshFind — Discover Nearby Markets",W/2,H*.92); ctx.globalAlpha=1; }
  }

  _scene4(ctx,W,H,t,sT) {
    const og=ctx.createLinearGradient(0,0,0,H);
    og.addColorStop(0,"#f1f8f3"); og.addColorStop(0.4,"#e8f5e9"); og.addColorStop(1,"#c8e6c9");
    ctx.fillStyle=og; ctx.fillRect(0,0,W,H);
    ctx.globalAlpha=0.06;
    for (let lx=0;lx<W;lx+=65) for (let ly=0;ly<H;ly+=65) { ctx.font="28px serif"; ctx.textAlign="center"; ctx.fillText("🌿",lx+32,ly+32+Math.sin(t*.2+lx*.01)*3); }
    ctx.globalAlpha=1;
    const cg=ctx.createRadialGradient(W/2,H/2,0,W/2,H/2,W*.4);
    cg.addColorStop(0,"rgba(165,214,167,0.35)"); cg.addColorStop(1,"rgba(0,0,0,0)");
    ctx.fillStyle=cg; ctx.fillRect(0,0,W,H);
    ctx.strokeStyle="rgba(46,160,67,0.25)"; ctx.lineWidth=1;
    [0.45,0.58].forEach(y => { ctx.beginPath(); ctx.moveTo(W*.2,H*y); ctx.lineTo(W*.8,H*y); ctx.stroke(); });
    const fi=Math.min(sT*3,1); ctx.globalAlpha=fi;
    ctx.fillStyle="#1b4332"; ctx.font=`800 ${W*.065|0}px 'Plus Jakarta Sans',sans-serif`; ctx.textAlign="center"; ctx.textBaseline="middle"; ctx.fillText("FreshFind",W/2,H*.48);
    ctx.fillStyle="#2d6a4f"; ctx.font=`500 ${W*.022|0}px 'Plus Jakarta Sans',sans-serif`; ctx.fillText("Fresh All Along",W/2,H*.555);
    ctx.globalAlpha=1; ctx.textBaseline="alphabetic";
  }

  _drawCard(t,scene,sT) {
    const c=this.cardCanvas; if (!c) return;
    const ctx=c.getContext("2d"); const W=this.CW, H=this.CH;
    ctx.clearRect(0,0,W,H);
    const cs=(scene+1)%5;
    this._drawSky(ctx,W,H,cs,sT);
    if (cs===0) this._scene0(ctx,W,H,t+3,sT);
    if (cs===1) this._scene1(ctx,W,H,t+3,sT);
    if (cs===2) this._scene2(ctx,W,H,t+3,sT);
    if (cs===3) this._scene3(ctx,W,H,t+3,sT);
    if (cs===4) this._scene4(ctx,W,H,t+3,sT);
    this._bokehDraw(ctx,W,H,t+1.5);
    this._pollenDraw(ctx,W,H,0.6);
    this._vignette(ctx,W,H,0.6);
  }

  _person(ctx,x,y,h,fwd) {
    const w=h*.28, d=fwd?1:-1;
    ctx.fillStyle="rgba(30,20,10,0.65)";
    ctx.beginPath(); ctx.arc(x,y-h*.88,h*.1,0,Math.PI*2); ctx.fill();
    ctx.fillRect(x-w/2,y-h*.78,w,h*.45);
    ctx.fillRect(x-w/2-w*.55,y-h*.75,w*.5,h*.35);
    ctx.fillRect(x+w/2,y-h*.75,w*.5,h*.35);
    ctx.fillRect(x-w*.35,y-h*.33,w*.28,h*.33);
    ctx.fillRect(x+w*.07,y-h*.33,w*.28,h*.33);
    ctx.fillStyle="rgba(80,120,60,0.65)";
    ctx.fillRect(x+d*w*.6,y-h*.4,w*.32,h*.28);
  }

  _godRays(ctx,W,H,t) {
    ctx.save();
    this.godRays.forEach((ray,i) => {
      const a=ray.alpha*(0.7+Math.sin(t*.3+i)*.3);
      const sx=W*.5, sy=H*.05;
      const g=ctx.createLinearGradient(sx,sy,sx+Math.cos(ray.angle)*W,sy+Math.sin(ray.angle)*H*1.4);
      g.addColorStop(0,`rgba(255,230,120,${a})`); g.addColorStop(1,"rgba(255,230,120,0)");
      ctx.fillStyle=g; ctx.beginPath(); ctx.moveTo(sx,sy);
      ctx.lineTo(sx+Math.cos(ray.angle-.05)*W+ray.width,sy+Math.sin(ray.angle)*H*1.4);
      ctx.lineTo(sx+Math.cos(ray.angle+.05)*W+ray.width,sy+Math.sin(ray.angle)*H*1.4);
      ctx.closePath(); ctx.fill();
    });
    ctx.restore();
  }

  _pollenDraw(ctx,W,H,as=1) {
    this.pollen.forEach(p => {
      const a=p.alpha*as*(0.6+Math.sin(p.flicker)*.4);
      ctx.beginPath(); ctx.arc(p.x*W,p.y*H,p.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(255,240,150,${a})`; ctx.fill();
    });
  }

  _bokehDraw(ctx,W,H,t) {
    this.bokeh.forEach((b,i) => {
      const bx=((b.x+t*b.speed*.5+i*.12)%1.2-.1)*W, by=b.y*H;
      ctx.beginPath(); ctx.arc(bx,by,b.r,0,Math.PI*2);
      const g=ctx.createRadialGradient(bx,by,0,bx,by,b.r);
      const ah=Math.floor(b.alpha*255).toString(16).padStart(2,"0");
      g.addColorStop(0,b.color+ah); g.addColorStop(1,b.color+"00");
      ctx.fillStyle=g; ctx.fill();
    });
  }

  _vignette(ctx,W,H,s=1) {
    const g=ctx.createRadialGradient(W/2,H/2,H*.2,W/2,H/2,H*.85);
    g.addColorStop(0,"rgba(0,0,0,0)"); g.addColorStop(1,`rgba(0,0,0,${0.65*s})`);
    ctx.fillStyle=g; ctx.fillRect(0,0,W,H);
  }

  _grain(ctx,W,H,t) {
    const seed=Math.floor(t*24);
    ctx.fillStyle="rgba(255,255,255,0.018)";
    for (let n=0;n<400;n++) { ctx.fillRect(((seed*1234+n*5678)%W+W)%W, ((seed*8765+n*4321)%H+H)%H, 1, 1); }
  }

  _updateParticles(dt) {
    this.pollen.forEach(p => {
      p.x=(p.x+p.vx+1)%1; p.y=(p.y+p.vy+1)%1; p.flicker+=0.04;
    });
  }

  _rrect(ctx,x,y,w,h,r) {
    ctx.beginPath();
    ctx.moveTo(x+r,y); ctx.lineTo(x+w-r,y); ctx.quadraticCurveTo(x+w,y,x+w,y+r);
    ctx.lineTo(x+w,y+h-r); ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);
    ctx.lineTo(x+r,y+h); ctx.quadraticCurveTo(x,y+h,x,y+h-r);
    ctx.lineTo(x,y+r); ctx.quadraticCurveTo(x,y,x+r,y); ctx.closePath();
  }

  destroy() { if (this.rafId) cancelAnimationFrame(this.rafId); }
}
