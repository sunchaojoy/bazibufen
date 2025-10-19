import fs from "fs";
import path from "path";
import * as pdf from "pdf-parse";

const folderPath = "E:\\wanwanAI\\erjie1018\\③\\xx\\AllFiles";
const outputFile = "E:\\wanwanAI\\erjie1018\\③\\xx\\AllFiles_text.txt";

async function extractTextFromPDF(filePath) {
  const dataBuffer = fs.readFileSync(filePath);
  const data = await pdf(dataBuffer);
  return data.text;
}

async function processAllPDFs() {
  const files = fs.readdirSync(folderPath).filter(f => f.toLowerCase().endsWith(".pdf"));

  if (files.length === 0) {
    console.log("❌ 没有找到 PDF 文件。");
    return;
  }

  let allText = "";

  for (const file of files) {
    const fullPath = path.join(folderPath, file);
    console.log(`📖 正在读取：${file}`);
    try {
      const text = await extractTextFromPDF(fullPath);
      allText += `\n\n===== ${file} =====\n\n` + text;
    } catch (err) {
      console.error(`⚠️ 解析 ${file} 出错：`, err.message);
    }
  }

  fs.writeFileSync(outputFile, allText, "utf8");
  console.log(`✅ 提取完成，已保存到：${outputFile}`);
}

processAllPDFs();