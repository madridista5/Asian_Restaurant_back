import { Injectable } from "@nestjs/common";
import { Response } from "express";
import { v4 as uuid } from "uuid";
import { JwtPayload } from "./jwt.strategy";
import { sign } from "jsonwebtoken";
import { User } from "../user/user.entity";
import { AuthLoginDto } from "./dto/auth-login.dto";
import { hashPwd } from "../utils/hash-pwd";

@Injectable()
export class AuthService {

  private createToken(currentTokenId: string): { accessToken: string, expiresIn: number } {
    const payload: JwtPayload = { idToken: currentTokenId };
    const expiresIn = 60 * 60 * 24;
    const accessToken = sign(payload, process.env.SECRET_OR_KEY, { expiresIn });
    return {
      accessToken,
      expiresIn
    };
  }

  private async generateToken(user: User): Promise<string> {
    let token;
    let userWithThisToken = null;
    do {
      token = uuid();
      userWithThisToken = await User.findOne({ where: { currentTokenId: token } });
    } while (!!userWithThisToken);
    user.currentTokenId = token;
    await user.save();
    return token;
  }

  async login(req: AuthLoginDto, res: Response): Promise<any> {
    try {
      const user = await User.findOne({
        where: {
          email: req.email,
          pwdHash: hashPwd(req.pwd)
        }
      });
      if (!user) {
        return res.json({ error: "Nieprawidłowy email lub hasło!" });
      }
      const token = this.createToken(await this.generateToken(user));

      return res
        .cookie("jwt", token.accessToken, {
          secure: false, // w wersji produkcyjnej (https) ustawiamy true
          domain: process.env.DOMAIN,
          httpOnly: true
        })
        .json({ role: user.role });
    } catch (e) {
      return res.json({ error: e.message });
    }
  }

  async logout(user: User, res: Response) {
    try {
      user.currentTokenId = null;
      await user.save();
      res.clearCookie(
        "jwt",
        {
          secure: false, // w wersji produkcyjnej (https) ustawiamy true
          domain: process.env.DOMAIN,
          httpOnly: true
        }
      );
      return res.json({ ok: true });
    } catch (e) {
      return res.json({ error: e.message });
    }
  }

}
