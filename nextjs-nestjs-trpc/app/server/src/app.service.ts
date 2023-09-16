import { Injectable } from '@nestjs/common';
import { FirebaseAdmin, InjectFirebaseAdmin } from 'nestjs-firebase';

@Injectable()
export class AppService {
    constructor(
        @InjectFirebaseAdmin() private readonly firebaseAdmin: FirebaseAdmin,
    ) {}
    getHello(): string {
        console.log(this.firebaseAdmin.auth);
        return 'Hello World!';
    }
}
