const bcrypt = require("bcrypt");

/** 비밀번호 암호화 */
const hashPassword = async (password:any) => {
    const hashedPassword = bcrypt.hash(password, 10);
    return hashedPassword;
  };

const comparePassword = async (password:any, hashedPassword:any) => {
    const match = bcrypt.compare(password, hashedPassword);
    return match;
  };
  
module.exports = { hashPassword, comparePassword };