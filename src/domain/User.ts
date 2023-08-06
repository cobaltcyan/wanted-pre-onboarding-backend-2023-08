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
  id: bigint | null;
  nickname: string;
  userName: string;
  password: string;
  adminYn: string;
  phoneNumber: string;
  email: string;
  intro: string | null;
  createdAt: Date;
  createdId: string | null;
  updatedAt: Date;
  updatedId: string | null;
  deletedAt: Date | null;
  deletedId: string | null;
  
  constructor(
    id: bigint | null,
    nickname: string,
    userName: string,
    password: string,
    adminYn: string,
    phoneNumber: string,
    email: string,
    intro: string | null,
    createdAt: Date = new Date(),
    createdId: string | null,
    updatedAt: Date | null = new Date(),
    updatedId: string | null,
    deletedAt: Date | null = new Date(),
    deletedId: string | null
  ) {
      this.id = id || null;
      this.nickname = nickname;
      this.userName = userName;
      this.password = password;
      this.adminYn = adminYn;
      this.phoneNumber = phoneNumber;
      this.email = email;
      this.intro = intro || null,
      this.createdAt = new Date();
      this.createdId = createdId;
      this.updatedAt = new Date() || null;
      this.updatedId = updatedId || null;
      this.deletedAt = new Date() || null;
      this.deletedId = deletedId || null;
  }
}

export default User;

