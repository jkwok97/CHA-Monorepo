import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    console.log('hello');
  }

  @Get('/:email')
  getUser(@Param('email') email: string) {}

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
