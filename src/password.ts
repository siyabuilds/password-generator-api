const generatePassword = (
  length: number,
  useUppercase: boolean,
  useNumbers: boolean,
  useSpecialChars: boolean
): string => {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  let characters = lowercaseChars;
  if (useUppercase) characters += uppercaseChars;
  if (useNumbers) characters += numberChars;
  if (useSpecialChars) characters += specialChars;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
};

const passwordStrength = (password: string): string => {
  const length = password.length;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChars = /[!@#$%^&*()_+[\]{}|;:,.<>?]/.test(password);

  if (
    length >= 12 &&
    hasUppercase &&
    hasLowercase &&
    hasNumbers &&
    hasSpecialChars
  ) {
    return "Strong";
  } else if (
    length >= 8 &&
    ((hasUppercase && hasLowercase) || (hasNumbers && hasSpecialChars))
  ) {
    return "Medium";
  } else {
    return "Weak";
  }
};

module.exports = { generatePassword, passwordStrength };
