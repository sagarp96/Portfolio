import fs from "node:fs";
import * as pdfjsLib from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.js";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const pdfPath = "/Users/sagarpanwar/Desktop/Sagar-Resume(2025).pdf";

async function extractText(filePath) {
  const data = new Uint8Array(fs.readFileSync(filePath));
  const loadingTask = pdfjsLib.getDocument({ data });
  const pdfDoc = await loadingTask.promise;
  let text = "";
  for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
    const page = await pdfDoc.getPage(pageNum);
    const content = await page.getTextContent();
    const strings = content.items.map((item) => item.str);
    text += strings.join(" ") + "\n\n";
  }
  return text;
}

extractText(pdfPath)
  .then((txt) => {
    console.log("\n--- RESUME TEXT START ---\n");
    console.log(txt);
    console.log("\n--- RESUME TEXT END ---\n");
  })
  .catch((err) => {
    console.error("Failed to extract text:", err);
    process.exit(1);
  });
