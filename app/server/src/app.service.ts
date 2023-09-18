import { Injectable } from '@nestjs/common';
import { FirebaseAdmin, InjectFirebaseAdmin } from 'nestjs-firebase';
import { getAuth } from 'firebase-admin/auth';

@Injectable()
export class AppService {
    constructor(
        @InjectFirebaseAdmin() private readonly firebaseAdmin: FirebaseAdmin,
    ) {}
    getHello(): string {
        console.log(this.firebaseAdmin.auth.verifyIdToken('token'));

        return 'Hello World!';
    }
}
