import { Injectable } from '@nestjs/common';
import { RegisterDto } from "./dto/register.dto";
import { RegisterUserResponse } from "../types";

@Injectable()
export class UserService {

  async register(newUser: RegisterDto): Promise<RegisterUserResponse> {
    return Promise.resolve(undefined);
  }
}
