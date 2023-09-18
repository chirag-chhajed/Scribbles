import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getHello(): string {
        // console.log(this.firebaseAdmin.auth.verifyIdToken('token'));

        return 'Hello World!';
    }
}
