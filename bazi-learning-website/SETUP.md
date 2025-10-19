# 八字学习网站 - 安装运行指南

## ✅ 问题已修复！

Next.js 14 使用 App Router 结构，已将页面文件移动到正确的 `app/` 目录。

## 🚀 快速开始

### 1. 安装依赖
在项目根目录运行：
```bash
npm install
```

### 2. 启动开发服务器
```bash
npm run dev
```

### 3. 访问网站
在浏览器中打开：**http://localhost:3000**

## 🔧 故障排除

### 如果页面空白或无法加载，请尝试以下解决方案：

#### 方案1：检查依赖版本
```bash
# 删除 node_modules 和 package-lock.json
rm -rf node_modules package-lock.json

# 重新安装依赖
npm install

# 启动服务器
npm run dev
```

#### 方案2：检查端口占用
如果3000端口被占用，Next.js会自动使用3001、3002等其他端口，请查看终端输出的实际地址。

#### 方案3：清除浏览器缓存
- 按 Ctrl+F5 (Windows) 或 Cmd+Shift+R (Mac) 强制刷新
- 或者在开发者工具中右键刷新按钮选择"清空缓存并硬性重新加载"

#### 方案4：检查控制台错误
1. 在浏览器中按 F12 打开开发者工具
2. 查看 Console 标签页是否有红色错误信息
3. 如有错误，请截图联系技术支持

## 📁 新的文件结构（已修复）
现在网站使用 Next.js 14 App Router 结构：

```
bazi-learning-website/
├── app/
│   ├── layout.js          ✅ 根布局
│   ├── page.js           ✅ 首页
│   ├── basics/
│   │   └── page.js       ✅ 八字基础
│   ├── elements/
│   │   └── page.js       ✅ 五行说明
│   ├── shishen/
│   │   └── page.js       ✅ 十神说明
│   └── example/
│       └── page.js       ✅ 命盘示例
├── styles/
│   └── globals.css       ✅ 全局样式
├── package.json           ✅ 依赖配置
├── next.config.js        ✅ Next.js配置
├── tailwind.config.js    ✅ Tailwind配置
├── postcss.config.js     ✅ PostCSS配置
├── start.bat             ✅ 启动脚本
├── debug.js              ✅ 调试工具
└── SETUP.md              ✅ 安装指南
```

## 🌐 访问地址

启动成功后，你可以访问以下页面：

- **首页**: http://localhost:3000/
- **八字基础**: http://localhost:3000/basics
- **五行说明**: http://localhost:3000/elements
- **十神说明**: http://localhost:3000/shishen
- **命盘示例**: http://localhost:3000/example

## 💡 常见问题

### Q: 页面显示"Cannot GET /xxx"
A: 确保文件名正确，应该是 `basics.js` 而不是 `basic.js`

### Q: 样式显示异常
A: 检查 `styles/globals.css` 文件是否存在，确保 Tailwind CSS 正确配置

### Q: 中文字符显示异常
A: 确保浏览器编码设置为 UTF-8，现代浏览器通常会自动处理

## 📞 技术支持

如果以上方法都无法解决问题，请提供以下信息：
1. 完整的错误信息截图
2. 使用的操作系统和浏览器版本
3. `npm run dev` 运行时的终端输出

---

**提示**: 首次运行可能需要1-2分钟来编译和启动，请耐心等待。