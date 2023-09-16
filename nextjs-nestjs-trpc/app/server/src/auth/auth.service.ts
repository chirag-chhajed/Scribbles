import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@server/typeorm/entities/User';
import { Repository } from 'typeorm';

export type UserDetails = {
    email: string;
    displayName: string;
};

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}
    private readonly logger = new Logger(AuthService.name);
    async validateUser(details: UserDetails) {
        this.logger.debug(`validateUser: ${JSON.stringify(details, null, 2)}`);

        const user = await this.userRepository.findOne({
            where: {
                email: details.email,
            },
        });
        this.logger.log(user);
        if (user) {
            return user;
        }
        this.logger.log('User not found. Creating new user.');
        const newUser = this.userRepository.create(details);
        return this.userRepository.save(newUser);
    }

    async findUser(id: number) {
        const user = await this.userRepository.findOne({
            where: {
                id,
            },
        });
        return user;
    }
}
