import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: 'user@email.email', description: 'User email', required:true })
  @IsString({ message: 'Must be string' })
  @IsEmail({}, { message: 'Incorrect email' })
  readonly email: string

  @ApiProperty({ example: '123456', description: 'User password', required:true })
  @IsString({ message: 'Must be string' })
  @Length(4, 16, { message: 'must be more than 4 and less then 16' })
  readonly password: string
}