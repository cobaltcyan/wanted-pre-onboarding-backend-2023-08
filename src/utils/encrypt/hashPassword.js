const bcrypt = require("bcrypt");

/** 비밀번호 암호화 */
const hashPassword = async (password) => {
    const hashedPassword = bcrypt.hash(password, 10);
    return hashedPassword;
  };

const comparePassword = async (password, hashedPassword) => {
    const match = bcrypt.compare(password, hashedPassword);
    return match;
  };
  
module.exports = { hashPassword, comparePassword };