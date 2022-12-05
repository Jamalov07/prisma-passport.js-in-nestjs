import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtPayload } from '../../auth/types';

export const GetCurrentUserId = createParamDecorator(
  async (_: undefined, context: ExecutionContext): Promise<number> => {
        const request = context.switchToHttp().getRequest();
        console.log(context)
        
    const user = request.user as JwtPayload;
    console.log(user);
        return user.sub;
  },
);
