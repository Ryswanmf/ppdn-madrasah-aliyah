const cp = require('child_process');
const fs = require('fs');
const tempDir = 'C:/Users/MyBook Hype AMD/AppData/Local/Temp/chrome_fullpage_mob';
const proc = cp.spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', [
  '--headless=new',
  '--remote-debugging-port=9237',
  '--user-data-dir=' + tempDir,
  '--window-size=375,812',
  'http://localhost/Madrasah-Aliyah-Darun-Najah/'
]);

setTimeout(async () => {
  try {
    const res = await fetch('http://localhost:9237/json');
    const tabs = await res.json();
    const tab = tabs.find(t => t.url.includes('Madrasah')) || tabs[0];
    const ws = new WebSocket(tab.webSocketDebuggerUrl);
    ws.onopen = () => {
      ws.send(JSON.stringify({
        id: 1,
        method: 'Emulation.setDeviceMetricsOverride',
        params: {
          width: 375,
          height: 812,
          deviceScaleFactor: 2,
          mobile: true
        }
      }));
      setTimeout(() => {
        ws.send(JSON.stringify({
          id: 2,
          method: 'Page.captureScreenshot',
          params: {
            format: 'png',
            captureBeyondViewport: true
          }
        }));
      }, 800);
    };
    ws.onmessage = (msg) => {
      const data = JSON.parse(msg.data);
      if (data.id === 2) {
        fs.writeFileSync('assets/images/mobile_fullpage.png', Buffer.from(data.result.data, 'base64'));
        console.log('Fullpage mobile screenshot captured!');
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
