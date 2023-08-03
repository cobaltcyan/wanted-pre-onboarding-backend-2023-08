class UserDTO {
  constructor(nickName, userName, password, role, phoneNumber, email) {
    this.nickname = nickName;
    this.userName = userName;
    this.password = password;
    this.role = role;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }
}

module.exports = { UserDTO };