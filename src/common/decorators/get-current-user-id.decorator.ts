import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtPayload } from '../../auth/types';

export const GetCurrentUserId = createParamDecorator(
  async (_: undefined, context: ExecutionContext): Promise<number> => {
        const request = context.switchToHttp().getRequest();
        console.log("userr")
        
    const user =await request.user as JwtPayload;
        return user.sub;
  },
);
