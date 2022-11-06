import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { AuthService } from './auth.service';
import {  SigninDTO } from './dto/singin.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  async signup(@Body() data: CreateUserDto) {
    return await this.authService.signup(data);
  }

  @Post('/signin')
  async signin(@Body() data: SigninDTO) {
    return this.authService.signin(data);
  }
}
