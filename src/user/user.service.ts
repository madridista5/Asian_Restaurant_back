import { Injectable } from '@nestjs/common';
import { RegisterDto } from "./dto/register.dto";
import { RegisterUserResponse, UserRole } from "../types";
import { User } from "./user.entity";
import { hashPwd } from "../utils/hash-pwd";
import { ValidationError } from "../utils/validation-error";

@Injectable()
export class UserService {
  filterRegisterResponse(newUser: User): RegisterUserResponse {
    const {id, email} = newUser;
    return {id, email};
  }

  async register(newUser: RegisterDto): Promise<RegisterUserResponse> {
    if(newUser.pwd.length < 8) {
      throw new ValidationError('Hasło musi zawierać conajmniej 8 znaków.');
    }

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

    return this.filterRegisterResponse(user);
  }

  async getAllUsers(): Promise<User[]> {
    return await User.find();
  }
}
