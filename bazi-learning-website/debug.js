// 简单的调试页面，用于测试网站是否正常工作
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write(`
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>调试页面 - 八字学习网站</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
        .success { color: green; font-weight: bold; }
        .error { color: red; font-weight: bold; }
        .info { background: #f0f8ff; padding: 15px; border-radius: 5px; margin: 10px 0; }
      </style>
    </head>
    <body>
      <h1>🔧 八字学习网站调试页面</h1>

      <div class="info">
        <p><strong>当前时间:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>访问路径:</strong> ${req.url}</p>
        <p><strong>用户代理:</strong> ${req.headers['user-agent']}</p>
      </div>

      <div class="success">
        ✅ 基础 HTTP 服务器运行正常！
      </div>

      <h2>📋 检查清单</h2>
      <ul>
        <li>✅ Node.js 环境正常</li>
        <li>✅ HTTP 服务器响应正常</li>
        <li>✅ 中文字符显示正常</li>
      </ul>

      <h2>🚀 下一步</h2>
      <p>如果此页面显示正常，说明基础环境没问题。现在请：</p>
      <ol>
        <li>关闭此调试服务器 (Ctrl+C)</li>
        <li>运行 <code>npm run dev</code> 启动 Next.js 网站</li>
        <li>访问 http://localhost:3000</li>
      </ol>

      <div class="info">
        <p><strong>常见问题解决:</strong></p>
        <ul>
          <li>如果页面空白，检查浏览器控制台错误</li>
          <li>如果无法访问，检查端口是否被占用</li>
          <li>如果样式异常，检查 Tailwind CSS 配置</li>
        </ul>
      </div>

      <p><small>此调试页面由简单的 Node.js HTTP 服务器提供，用于测试基础环境。</small></p>
    </body>
    </html>
  `);
  res.end();
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`🔧 调试服务器运行在: http://localhost:${PORT}`);
  console.log('请在浏览器中打开此地址进行基础测试');
  console.log('测试完成后按 Ctrl+C 关闭服务器');
});