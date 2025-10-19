@echo off
echo 八字学习网站启动脚本
echo ====================

echo 正在检查 Node.js 是否安装...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo 错误: 未检测到 Node.js，请先安装 Node.js
    echo 下载地址: https://nodejs.org/
    pause
    exit /b 1
)

echo Node.js 已安装
echo.

echo 正在安装依赖包...
call npm install
if %errorlevel% neq 0 (
    echo 错误: 依赖安装失败
    pause
    exit /b 1
)

echo 依赖安装成功！
echo.

echo 正在启动开发服务器...
echo 请等待编译完成...
echo.
echo 网站启动后会自动打开浏览器，或手动访问: http://localhost:3000
echo 按 Ctrl+C 停止服务器
echo.

call npm run dev