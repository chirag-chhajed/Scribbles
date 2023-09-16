import { Inject, Injectable, Logger } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';
import { AuthService } from '../auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
    private readonly logger = new Logger(GoogleStrategy.name);

    constructor(
        @Inject('AUTH_SERVICE') private readonly authService: AuthService,
    ) {
        super({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK_URL, // Change to callbackURL
            scope: ['profile', 'email'],
        });
    }

    async validate(
        accessToken: string,
        refreshToken: string,
        profile: Profile,
    ) {
        this.logger.debug(`accessToken: ${accessToken}`);
        this.logger.debug(`refreshToken: ${refreshToken}`);
        this.logger.debug(`profile:`, JSON.stringify(profile, null, 2));

        const user = this.authService.validateUser({
            email: profile.emails?.[0]?.value!,
            displayName: profile.displayName,
        });
        this.logger.debug(`user:`, JSON.stringify(user, null, 2));
        return user || null;
    }
}
