class User {
  id: bigint | null;
  email: string;
  nickname: string;
  userName: string;
  password: string;
  phoneNumber: string;
  intro: string;
  adminYn: string;
  createdAt: Date;
  // createdId: bigint | string | null;   // 회원가입시 id 값과 동일하게 업데이트
  updatedAt: Date | null;
  // updatedId: bigint | string | null;
  // deletedAt: Date | null;
  // deletedId: bigint | string | null;
  
  constructor(
    id: bigint | null,
    email: string,
    nickname: string,
    userName: string,
    password: string,
    phoneNumber: string,
    intro: string,
    adminYn: string,
    createdAt: Date = new Date(),
    // createdId: string | bigint | null,
    updatedAt: Date | null = new Date(),
    // updatedId: string | bigint | null,
    // deletedAt: Date | null = new Date(),
    // deletedId: string | bigint | null
  ) {
      this.id = id || null;
      this.email = email;
      this.nickname = nickname;
      this.userName = userName;
      this.password = password;
      this.phoneNumber = phoneNumber;
      this.intro = intro,
      this.adminYn = adminYn;
      this.createdAt = new Date();
      // this.createdId = createdId || null;
      this.updatedAt = new Date() || null;
      // this.updatedId = updatedId || null;
      // this.deletedAt = new Date() || null;
      // this.deletedId = deletedId || null;
  }
}

export default User;

