import {
  IsEmail,
  MinLength,
  MaxLength,
  Matches,
  IsStrongPasswordOptions,
  IsString,
} from 'class-validator';

const passWordOptions: IsStrongPasswordOptions = {
  minLength: 8,
};

export class CreateUserDTO {
  @IsEmail()
  @IsString()
  email: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;
}
