"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoConfig = void 0;
const mongoConfig = async (configService) => ({
    uri: configService.get('MONGO_URI'),
    dbName: 'xwear'
});
exports.mongoConfig = mongoConfig;
//# sourceMappingURL=mongo.config.js.map