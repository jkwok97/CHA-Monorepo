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
  async getUsers() {
    const users = await this.usersService.getAll();

    if (!users || users.length < 1) {
      throw new NotFoundException('users not found');
    }
    return users;
  }

  @Get('/:email')
  async getUserByEmail(@Param() param) {
    const user = await this.usersService.findUserByEmail(param.email);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }

  @Get('/userId/:id')
  async getUserById(@Param() param) {
    console.log(parseInt(param.id));
    const user = await this.usersService.findUserById(parseInt(param.id));
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }

  @Put('/userId/:id')
  updateUserById(@Body() body: any): void {
    console.log(body);
  }

  @Post('/add')
  addUser(@Body() body: any): void {}

  @Delete('/delete/:id')
  deleteUserById(@Param('id') id: string): void {}
}
