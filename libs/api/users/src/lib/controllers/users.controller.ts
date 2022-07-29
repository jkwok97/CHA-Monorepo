import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from '../services';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers() {
    console.log('hello');
  }

  @Get('/email/:email')
  async getUserByEmail(@Param('email') email: string) {
    console.log('the email param is:', email);
    const user = await this.usersService.findUserByEmail(email);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return JSON.stringify(user);
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
