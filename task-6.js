// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

const crypto = require("crypto");

function generatePasswordString(Chars, length) {
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = crypto.randomInt(0, Chars.length);
    password += Chars[randomIndex];
  }
  return password;
}

function generateRandomPassword(length) {
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()-_=+[{]}|;:,.<>?";

  const charsArray = [
    uppercaseChars,
    lowercaseChars,
    numberChars,
    specialChars,
  ];
  let password = "";

  for (let i = 0; i < length; i++) {
    const charSet = charsArray[crypto.randomInt(0, charsArray.length)];
    password += charSet[crypto.randomInt(0, charSet.length)];
  }

  return password;
}

const passwordLength = 20;
const randomPassword = generateRandomPassword(passwordLength);
console.log("Random Password:", randomPassword);
