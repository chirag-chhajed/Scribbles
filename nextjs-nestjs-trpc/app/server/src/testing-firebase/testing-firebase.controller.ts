import { Body, Controller, Logger, Post } from '@nestjs/common';

@Controller('testing-firebase')
export class TestingFirebaseController {
    private readonly logger = new Logger(TestingFirebaseController.name);
    @Post()
    async testingFirebase(@Body() body: any): Promise<string> {
        // console.log(body);
        this.logger.debug(JSON.stringify(body, null, 2));
        return 'testing-firebase';
    }
}
