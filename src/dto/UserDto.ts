class UserDto {
  // id: bigint | null;
  email: string;
  constructor(
    email: string,
  ) {
      // this.id = null;
      this.email = email;
  }
}

export default UserDto;