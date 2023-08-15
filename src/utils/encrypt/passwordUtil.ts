import bcrypt from 'bcrypt';

/** 회원가입 - 비밀번호 8자 이상 확인 */
const checkLengthPassword = async (password: string): Promise<boolean> => {
  if (password.length < 8) {
    return false;
  } else {
    return true;
  }
};

/** 비밀번호 암호화 */
const hashPassword = async (password: string): Promise<string> => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
};

/** 로그인 - 비밀번호 비교 */
const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
    const match = await bcrypt.compare(password, hashedPassword);
    return match;
};

export {
  checkLengthPassword,
  hashPassword,
  comparePassword
};