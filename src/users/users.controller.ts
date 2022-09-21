import { Body, Post, Controller, Get} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

  constructor(private userService:UsersService) {

  }
  
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this
  }

  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }
}
