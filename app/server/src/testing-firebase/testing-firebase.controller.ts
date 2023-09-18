import { Body, Controller, Logger, Post, UseGuards } from '@nestjs/common';
import { TestingFirebaseGuard } from './testing-firebase.guard';

@Controller('testing-firebase')
export class TestingFirebaseController {
    private readonly logger = new Logger(TestingFirebaseController.name);
    @Post()
    @UseGuards(TestingFirebaseGuard)
    async testingFirebase(@Body() body: any): Promise<string> {
        // console.log(body);
        this.logger.debug(JSON.stringify(body, null, 2));
        return 'testing-firebase';
    }
}
