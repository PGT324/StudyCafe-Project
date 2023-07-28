import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { IContext } from './interfaces/auth.interface';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './guards/auth.guard';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => String)
  login(
    @Args('phone') phone: string,
    @Args('password') password: string,
    @Context() context: IContext,
  ): Promise<string> {
    return this.authService.login(phone, password, context);
  }

  @UseGuards(GqlAuthGuard('refresh'))
  @Mutation(() => String)
  restoreAccessToken(@Context() context: IContext): string {
    const user = context.req.user;
    return this.authService.restoreAccessToken(user);
  }
}
