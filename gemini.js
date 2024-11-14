const { GoogleGenerativeAI } = require("@google/generative-ai");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const genAI = new GoogleGenerativeAI("AIzaSyDVa9AZHBahUJ1TBU5Vc0xnxEIq6yj5yR0");

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
