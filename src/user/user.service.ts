import { Injectable } from '@nestjs/common';
import { RegisterDto } from "./dto/register.dto";
import { RegisterUserResponse, UserRole } from "../types";
import { User } from "./user.entity";
import { hashPwd } from "../utils/hash-pwd";
import { ValidationError } from "../utils/validation-error";

@Injectable()
export class UserService {

  async register(newUser: RegisterDto): Promise<RegisterUserResponse> {
    const users = await this.getAllUsers();
    const checkEmail = users.some(user => user.email === newUser.email);
    if(checkEmail) {
      throw new ValidationError(`Użytkownik z adresem email: ${newUser.email} posiada już konto.`);
    }

    const user = new User();
    user.email = newUser.email;
    user.role = UserRole.USER;
    user.pwdHash = hashPwd(newUser.pwd);
    await user.save();

    return Promise.resolve(undefined);
  }

  async getAllUsers(): Promise<User[]> {
    return await User.find();
  }
}
