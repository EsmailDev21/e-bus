import { Injectable ,UnauthorizedException , NotFoundException} from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { SigninDTO } from './dto/singin.dto';
import {User} from "@prisma/client"

@Injectable()
export class AuthService {
  /**
   *
   */
  constructor(private readonly userService:UserService) { 
  }

  async  signup(data:CreateUserDto):Promise<User> {
    try {
      return await this.userService.create(data);
    } catch (error) {
      throw new UnauthorizedException(error)
    }
  }
  async  signin(data:SigninDTO):Promise<User> {
    try {
      const user = await this.userService.findByPhoneNumber(data.phoneNumber);
      if(!user) throw new NotFoundException();
      if(user.password != data.password) throw new UnauthorizedException();
      return user;
    } catch (error) {
      throw new UnauthorizedException(error)
    }
  }
}
