export class UserDto {
  id!: number;
  email!: string;
  firstname!: string;
  lastname!: string;
  isactive!: boolean;
  isadmin!: boolean;
  authdata?: string;
}
