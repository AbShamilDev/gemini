const { GoogleGenerativeAI } = require("@google/generative-ai");
const readline = require("readline");
require("dotenv").config({ path: "./.env" });

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const run = () => {
  rl.question("Введите запрос к Gemini: ", async (question) => {
    if (question !== "close") {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent([question]);
      console.log(result.response.text());
      run();
    }
  });
};
run();
