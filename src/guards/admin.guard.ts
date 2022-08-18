import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { User } from "../user/user.entity";

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const user: User = context.switchToHttp().getRequest().user;
    console.log(user);
    return user.role === 'ADMIN';
  }
}