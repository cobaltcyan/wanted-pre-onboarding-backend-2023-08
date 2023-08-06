import bcrypt from 'bcrypt';

/** 회원가입 - 비밀번호, 비밀번호확인 값 비교 */
const checkPassword = async (password: string, passwordCheck: string): Promise<boolean> => {
  return password === passwordCheck;
};

/** 회원가입 - 비밀번호 8자 이상 확인 */
const checkLengthPassword = async (password: string): Promise<true | string> => {
  if (password.length < 8) {
    return '비밀번호는 8자 이상이어야 합니다.'
  } else {
    return true;
  }
};

/** 비밀번호 암호화 */
const hashPassword = async (password: string): Promise<string> => {
    const hashedPassword = bcrypt.hash(password, 10);
    return hashedPassword;
};

/** 로그인 - 비밀번호 비교 */
const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
    const match = bcrypt.compare(password, hashedPassword);
    return match;
};

export {
  checkPassword,
  checkLengthPassword,
  hashPassword,
  comparePassword
};