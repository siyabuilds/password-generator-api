const { passwordStrength, generatePassword } = require("./password");
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post("/generate-password", (req, res) => {
  const { length, useUppercase, useNumbers, useSpecialChars } = req.body;
  const password = generatePassword(
    length,
    useUppercase,
    useNumbers,
    useSpecialChars
  );
  res.json({ password });
});

app.post("/password-strength", (req, res) => {
  const { password } = req.body;
  const strength = passwordStrength(password);
  res.json({ strength });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
