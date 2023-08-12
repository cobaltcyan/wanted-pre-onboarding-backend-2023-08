// class UserDTO {
//   constructor(nickName, userName, password, role, phoneNumber, email) {
//     this.nickname = nickName;
//     this.userName = userName;
//     this.password = password;
//     this.role = role;
//     this.phoneNumber = phoneNumber;
//     this.email = email;
//   }
// }

// module.exports = { UserDTO };

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

//userDTO

class UserDto {
  email: string;
  password: string;

  constructor(
    email: string,
    password: string,
  ) {
      this.email = email;
      this.password = password;
  }
}

export default UserDto;

// class UserDto {
  // id: bigint | null;
  // email: string;
  // nickname: string;
  // userName: string;
  // password: string;
  // phoneNumber: string;
  // intro: string;
  // adminYn: string;
  // createdAt: Date;
  // createdId: string | null;
  // updatedAt: Date;
  // updatedId: string | null;
  // deletedAt: Date | null;
  // deletedId: string | null;

  // constructor(
  //   email: string,
    // nickName: string,
    // userName: string,
    // password: string,
    // phoneNumber: string,
    // intro: string,
    // adminYn: string,
    // createdAt: Date = new Date(),
    // createdId: string | null,
    // updatedAt: Date | null = new Date(),
    // updatedId: string | null,
    // deletedAt: Date | null = new Date(),
    // deletedId: string | null
  // ) {
      // this.id = null;
      // this.email = email;
      // this.nickname = nickName;
      // this.userName = userName;
      // this.password = password;
      // this.phoneNumber = phoneNumber;
      // this.intro = intro;
      // this.adminYn = adminYn;
      // this.createdAt = new Date();
      // this.createdId = createdId;
      // this.updatedAt = new Date() || null;
      // this.updatedId = updatedId || null;
      // this.deletedAt = new Date() || null;
      // this.deletedId = deletedId || null;
//   }
// }

// export default UserDto;