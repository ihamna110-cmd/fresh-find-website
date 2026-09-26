import os
import subprocess

# Read the pages content from build_documentation.py
with open(r"c:\Users\RB Tech\OneDrive\Desktop\GLOBAL CHALLENGE\documentation\build_documentation.py", "r", encoding="utf-8") as f:
    code = f.read()

# Execute build_documentation in a namespace to extract pages_content
ns = {}
exec(code, ns)
pages_content = ns.get("pages_content", [])

print(f"Extracted {len(pages_content)} pages.")

# Create the print-optimized HTML
print_html_template = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>FreshFind — VIP Technical Documentation (42 Pages)</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
  <style>
    @page {
      size: 297mm 210mm; /* A4 Landscape */
      margin: 0;
    }
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      background: #07130c;
      color: #f0fdf4;
      font-family: 'Inter', system-ui, sans-serif;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    .pdf-page {
      width: 297mm;
      height: 210mm;
      page-break-after: always;
      page-break-inside: avoid;
      overflow: hidden;
      padding: 16mm 20mm;
      position: relative;
      background: radial-gradient(circle at 10% 10%, #0e2e1c 0%, #07130c 70%);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border: 1px solid rgba(74, 222, 128, 0.15);
    }
    .pdf-page::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #15803d, #22c55e, #f59e0b, #06b6d4);
    }
    .page-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      border-bottom: 1px solid rgba(74, 222, 128, 0.2);
      padding-bottom: 10px;
      margin-bottom: 14px;
    }
    .page-header-left {
      display: flex;
      flex-direction: column;
      gap: 3px;
    }
    .page-category-tag {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.1em;
      color: #4ade80;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .page-category-tag::before {
      content: '';
      display: inline-block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #4ade80;
    }
    .page-title {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 24px;
      font-weight: 800;
      letter-spacing: -0.02em;
      color: #ffffff;
      line-height: 1.15;
    }
    .page-subtitle {
      font-size: 12px;
      color: #bbf7d0;
      line-height: 1.3;
    }
    .page-meta-badge {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 3px;
    }
    .page-num-pill {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      font-weight: 800;
      color: #22c55e;
      background: #040d08;
      padding: 4px 10px;
      border-radius: 6px;
      border: 1px solid rgba(74, 222, 128, 0.3);
    }
    .page-read-time {
      font-size: 9px;
      color: #86efac;
      font-family: 'JetBrains Mono', monospace;
    }
    .page-body {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 12px;
      justify-content: center;
    }
    .grid-2 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 14px;
    }
    .grid-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
    }
    .grid-4 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
    }
    .vip-card {
      background: rgba(16, 44, 29, 0.75);
      border: 1px solid rgba(74, 222, 128, 0.22);
      border-radius: 12px;
      padding: 14px 16px;
      position: relative;
    }
    .card-icon {
      font-size: 20px;
      margin-bottom: 6px;
    }
    .card-title {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 14px;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 5px;
    }
    .card-desc {
      font-size: 11px;
      line-height: 1.5;
      color: #d1fae5;
    }
    .metric-box {
      background: rgba(16, 44, 29, 0.75);
      border: 1px solid rgba(74, 222, 128, 0.22);
      border-radius: 12px;
      padding: 12px 16px;
      display: flex;
      flex-direction: column;
    }
    .metric-val {
      font-family: 'JetBrains Mono', monospace;
      font-size: 24px;
      font-weight: 800;
      color: #4ade80;
      line-height: 1.1;
    }
    .metric-label {
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #86efac;
      margin-top: 3px;
    }
    .metric-sub {
      font-size: 9.5px;
      color: #a7f3d0;
      margin-top: 3px;
    }
    .badge-list {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-top: 8px;
    }
    .tag-badge {
      background: rgba(34, 197, 94, 0.15);
      border: 1px solid rgba(34, 197, 94, 0.35);
      padding: 3px 8px;
      border-radius: 20px;
      font-size: 9.5px;
      font-weight: 600;
      color: #86efac;
    }
    .code-block {
      background: #040d08;
      border: 1px solid rgba(34, 197, 94, 0.25);
      border-radius: 8px;
      overflow: hidden;
      font-family: 'JetBrains Mono', monospace;
    }
    .code-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 10px;
      background: rgba(255, 255, 255, 0.04);
      border-bottom: 1px solid rgba(34, 197, 94, 0.2);
    }
    .code-dots {
      display: flex;
      gap: 4px;
    }
    .dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
    }
    .dot-red { background: #ef4444; }
    .dot-yellow { background: #f59e0b; }
    .dot-green { background: #10b981; }
    .code-title {
      font-size: 9px;
      color: #86efac;
    }
    .code-copy-btn {
      display: none;
    }
    .code-content {
      padding: 10px 12px;
      font-size: 9.5px;
      line-height: 1.45;
      color: #a7f3d0;
      white-space: pre-wrap;
    }
    .data-table-wrapper {
      background: rgba(16, 44, 29, 0.75);
      border: 1px solid rgba(74, 222, 128, 0.22);
      border-radius: 10px;
      overflow: hidden;
    }
    .data-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 10px;
    }
    .data-table th {
      background: rgba(34, 197, 94, 0.15);
      padding: 7px 10px;
      text-align: left;
      font-family: 'JetBrains Mono', monospace;
      font-weight: 700;
      color: #4ade80;
      border-bottom: 1px solid rgba(74, 222, 128, 0.2);
    }
    .data-table td {
      padding: 6px 10px;
      border-bottom: 1px solid rgba(74, 222, 128, 0.1);
      color: #d1fae5;
    }
    .diagram-canvas {
      background: rgba(16, 44, 29, 0.75);
      border: 1px solid rgba(74, 222, 128, 0.22);
      border-radius: 10px;
      padding: 12px;
    }
    .flow-row {
      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: 10px;
    }
    .flow-node {
      background: #040d08;
      border: 1px solid rgba(74, 222, 128, 0.3);
      padding: 8px 14px;
      border-radius: 8px;
      text-align: center;
      min-width: 120px;
    }
    .flow-node-title {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-weight: 700;
      font-size: 11px;
      color: #ffffff;
    }
    .flow-node-sub {
      font-size: 9px;
      color: #4ade80;
      font-family: 'JetBrains Mono', monospace;
      margin-top: 2px;
    }
    .flow-arrow {
      color: #4ade80;
      font-size: 14px;
    }
    .pdf-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid rgba(74, 222, 128, 0.18);
      padding-top: 8px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      color: #86efac;
    }
    .pdf-footer-brand {
      display: flex;
      align-items: center;
      gap: 6px;
    }
  </style>
</head>
<body>
"""

pages_html_list = []
for i, page_html in enumerate(pages_content, start=1):
    page_block = f"""
  <section class="pdf-page" id="pdf-page-{i}">
    <div>
{page_html}
    </div>
    <div class="pdf-footer">
      <div class="pdf-footer-brand">
        <span>🌱 FreshFind</span> • <span>Theme: eGreen Basket</span> • <span>World Tech Championship Global Challenge SRS 1.0</span>
      </div>
      <div>
        <span>Page {i:02d} of 42</span> • <span>Confidential & Proprietary</span>
      </div>
    </div>
  </section>
"""
    pages_html_list.append(page_block)

full_print_html = print_html_template + "".join(pages_html_list) + "\n</body>\n</html>"

print_html_path = r"c:\Users\RB Tech\OneDrive\Desktop\GLOBAL CHALLENGE\documentation\print_deck.html"
with open(print_html_path, "w", encoding="utf-8") as f:
    f.write(full_print_html)

print(f"Generated {print_html_path} ({len(full_print_html)} bytes).")

# Now invoke Chrome headless to render to PDF
chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
if not os.path.exists(chrome_path):
    chrome_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

pdf_output_path = r"c:\Users\RB Tech\OneDrive\Desktop\GLOBAL CHALLENGE\documentation\FreshFind_VIP_Documentation_42_Pages.pdf"

cmd = [
    chrome_path,
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    "--run-all-compositor-stages-before-draw",
    "--virtual-time-budget=8000",
    f"--print-to-pdf={pdf_output_path}",
    f"file:///{print_html_path.replace(os.sep, '/')}"
]

print("Executing Chrome headless PDF generation...")
res = subprocess.run(cmd, capture_output=True, text=True)
print("Return code:", res.returncode)
if os.path.exists(pdf_output_path):
    size_mb = os.path.getsize(pdf_output_path) / (1024 * 1024)
    print(f"SUCCESS: PDF created at {pdf_output_path} ({size_mb:.2f} MB)")
else:
    print("FAILED to create PDF:", res.stderr)
