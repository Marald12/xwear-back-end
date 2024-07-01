"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMailConfig = void 0;
const ejs_adapter_1 = require("@nestjs-modules/mailer/dist/adapters/ejs.adapter");
const getMailConfig = async (configService) => {
    const transport = configService.get('MAIL_TRANSPORT');
    const mailFromName = configService.get('MAIL_FROM_NAME');
    const mailFromAddress = transport.split(':')[1].split('//')[1];
    return {
        transport,
        defaults: {
            from: `"${mailFromName}" <${mailFromAddress}>`
        },
        template: {
            adapter: new ejs_adapter_1.EjsAdapter(),
            options: {
                strict: false
            }
        }
    };
};
exports.getMailConfig = getMailConfig;
//# sourceMappingURL=mail.config.js.map