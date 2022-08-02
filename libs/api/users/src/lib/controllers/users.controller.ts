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
    const user = await this.usersService.findUserById(parseInt(param.id));
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }

  @Put('/userId/:id')
  updateUserById(@Param() param, @Body() body) {
    console.log(body);
    return this.usersService.updateUserById(parseInt(param.id), body);
  }

  @Post('/add')
  addUser(@Body() body: any) {}

  @Delete('/delete/:id')
  deleteUserById(@Param('id') id: string) {}
}
