import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { RestoreUserDto } from '../user/dto/restore-user.dto';
export declare class MailService {
    private readonly mailerService;
    private readonly configService;
    constructor(mailerService: MailerService, configService: ConfigService);
    sendConfirmMail(user: RestoreUserDto, token: string): Promise<any>;
}
