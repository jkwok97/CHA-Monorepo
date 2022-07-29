import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { UsersService } from '../services';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getUsers() {
    console.log('hello');
    const users = await this.usersService.getAll();

    if (!users || users.length < 1) {
      throw new NotFoundException('user not found');
    }
    return users;
  }

  @Get('/:email')
  async getUserByEmail(@Param() param) {
    console.log('the email param is:', param.email);
    return `${param.email}`;
    // const user = await this.usersService.findUserByEmail(param.email);
    // if (!user) {
    //   throw new NotFoundException('user not found');
    // }
    // return JSON.stringify(user);
  }

  @Get('/userId/:id')
  getUserById(@Param('id') id: string) {}

  @Put('/userId/:id')
  updateUserById(@Body() body: any): void {
    console.log(body);
  }

  @Post('/add')
  addUser(@Body() body: any): void {}

  @Delete('/delete/:id')
  deleteUserById(@Param('id') id: string): void {}
}
