import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-jwt";
import { User } from "../user/user.entity";

export interface JwtPayload {
  idToken: string;
}

function cookieExtractor(req: any): null | string {
  return (req && req.cookies) ? (req.cookies?.jwt ?? null) : null;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: cookieExtractor,
      secretOrKey: process.env.SECRET_OR_KEY
    });
  }

  async validate(payload: JwtPayload, done: (error, user) => void) {
    if (!payload || !payload.idToken) {
      return done(new UnauthorizedException(), false);
    }
    const user = await User.findOne({ where: { currentTokenId: payload.idToken } });
    if (!user) {
      return done(new UnauthorizedException(), false);
    }
    done(null, user);
  }
}