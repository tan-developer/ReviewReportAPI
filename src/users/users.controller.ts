import { SerializeInterceptor } from './../interceptors/serialize.interceptor';
import { CreateUserDTO } from './DTO/create-user.dto';
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  NotFoundException,
  Delete,
  ClassSerializerInterceptor,
  UseInterceptors
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(private userService: UsersService) {}
 
  @Post('/signup')
  cerateUser(@Body() body: CreateUserDTO) {
    this.userService.create(body.email, body.password);
  }

  @UseInterceptors(SerializeInterceptor)
  @Get(`/:id`)
  async findUser(@Param('id') id: string) {
    console.log('handler is coming')
    const user = await this.userService.findOne(parseInt(id));
    if (!user) {
      throw new NotFoundException('User not found!');
    }
    return user;
  }

  @Get() 
  findAllUsers(@Param('email') email: string) {
    return this.userService.find(email);
  }

  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.userService.remove(parseInt(id));
  }
}
