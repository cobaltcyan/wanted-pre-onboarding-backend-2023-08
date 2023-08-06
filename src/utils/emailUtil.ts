/** 이메일 형식 유효성 검사 */
function isValidateEmail (email: string) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

export {
    isValidateEmail
};