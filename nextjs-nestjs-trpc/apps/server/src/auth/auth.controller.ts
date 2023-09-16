import { Controller, Get, Logger, Req, Res, UseGuards } from '@nestjs/common';
// import { AuthService } from './auth.service';
import { GoogleAuthGuard } from './utils/Guards';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
    private readonly logger = new Logger(AuthController.name);
    // constructor(private readonly authService: AuthService) {}
    @Get('google/login')
    @UseGuards(GoogleAuthGuard)
    handleLogin() {
        return { msg: 'Google Authentication' };
    }

    // api/auth/google/redirect
    @Get('google/redirect')
    @UseGuards(GoogleAuthGuard)
    handleRedirect(@Res() res: Response) {
        res.redirect('http://localhost:3000');
        return { msg: 'OK' };
    }

    @Get('status')
    user(@Req() request: Request) {
        this.logger.debug(request.user);
        if (request.user) {
            return { msg: 'Authenticated' };
        } else {
            return { msg: 'Not Authenticated' };
        }
    }

    @Get('logout')
    async logout(@Req() request: Request, @Res() response: Response) {
        request.logout((err) => {
            if (err) {
                this.logger.error(err);
            }
        });
    }
}
