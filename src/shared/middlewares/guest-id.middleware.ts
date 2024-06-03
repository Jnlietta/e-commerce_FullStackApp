import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class GuestIdMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (req.method === 'OPTIONS') {
      return next();
    }

    if (!req.cookies['guestId']) {
      const guestId = uuidv4();
      console.log(`Cookie guestId: ${guestId} has been setted`);
      res.cookie('guestId', guestId, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
        sameSite: 'lax',
      }); // 1 dzień
    } else {
      console.log(`Existing cookie guestId: ${req.cookies['guestId']}`);
    }
    next();
  }
}
