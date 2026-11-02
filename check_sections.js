const cp = require('child_process');
const tempDir = 'C:/Users/MyBook Hype AMD/AppData/Local/Temp/chrome_fullpage_mob';
const proc = cp.spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', [
  '--headless=new',
  '--remote-debugging-port=9238',
  '--user-data-dir=' + tempDir,
  '--window-size=375,812',
  'http://localhost/Madrasah-Aliyah-Darun-Najah/'
]);

setTimeout(async () => {
  try {
    const res = await fetch('http://localhost:9238/json');
    const tabs = await res.json();
    const tab = tabs.find(t => t.url.includes('Madrasah')) || tabs[0];
    const ws = new WebSocket(tab.webSocketDebuggerUrl);
    ws.onopen = () => {
      ws.send(JSON.stringify({
        id: 1,
        method: 'Emulation.setDeviceMetricsOverride',
        params: { width: 375, height: 812, deviceScaleFactor: 2, mobile: true }
      }));
      setTimeout(() => {
        ws.send(JSON.stringify({
          id: 2,
          method: 'Runtime.evaluate',
          params: {
            expression: `
              JSON.stringify(Array.from(document.querySelectorAll('section, header, footer, .navbar')).map(s => ({
                tag: s.tagName,
                id: s.id,
                cls: s.className,
                h: Math.round(s.getBoundingClientRect().height),
                w: Math.round(s.getBoundingClientRect().width)
              })))
            `,
            returnByValue: true
          }
        }));
      }, 500);
    };
    ws.onmessage = (msg) => {
      const data = JSON.parse(msg.data);
      if (data.id === 2) {
        console.log(JSON.parse(data.result.result.value));
        ws.close();
        proc.kill();
        process.exit(0);
      }
    };
  } catch (err) {
    console.error(err);
    proc.kill();
    process.exit(1);
  }
}, 2000);
