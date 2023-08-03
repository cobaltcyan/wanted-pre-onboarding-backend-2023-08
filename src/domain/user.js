class User {
    constructor(nickName, userName, password, role, phoneNumber, email) {
      this.id = null;
      this.nickname = nickName;
      this.userName = userName;
      this.password = password;
      this.role = role;
      this.phoneNumber = phoneNumber;
      this.email = email;
      this.intro = intro;
      this.createdAt = new Date();
      this.updatedAt = new Date();
      this.deletedAt = null;
    }
}

module.exports = { User };
