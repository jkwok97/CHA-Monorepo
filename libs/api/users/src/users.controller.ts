import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers();

  @Get('/:email')
  getUser();

  @Get('/userId/:id')
  getUserById();

  @Put('/userId/:id')
  updateUserById();

  @Post('/add')
  addUser();

  @Delete('/delete/:id')
  deleteUserById();
}
