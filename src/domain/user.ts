// class User {
//     constructor(nickName, userName, password, role, phoneNumber, email) {
//       this.id = null;
//       this.nickname = nickName;
//       this.userName = userName;
//       this.password = password;
//       this.role = role;
//       this.phoneNumber = phoneNumber;
//       this.email = email;
//       this.intro = intro;
//       this.createdAt = new Date();
//       this.updatedAt = new Date();
//       this.deletedAt = null;
//     }
// }

// module.exports = { User };
// export default User;

class User {
  id: number | null;
  nickname: string;
  userName: string;
  password: string;
  role: string;
  phoneNumber: string;
  email: string;
  intro: string | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;

  constructor(
    nickName: string,
    userName: string,
    password: string,
    role: string,
    phoneNumber: string,
    email: string,
    intro: string
  ) {
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

export default User;

