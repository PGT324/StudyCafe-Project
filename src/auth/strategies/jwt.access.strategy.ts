import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

export class JwtAccessStrategy extends PassportStrategy(Strategy, 'access') {
  constructor() {
    super({
      // jwtFromRequest: (req) => {
      //   const temp = req.headers.Authorization;
      //   const accessToken = temp.toLowercase().replace('bearer ', '');
      //   console.log(accessToken);
      //   return accessToken;
      // },
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET_KEY,
    });
  }

  validate(payload) {
    console.log(payload);

    return {
      id: payload.sub,
    };
  }
}
