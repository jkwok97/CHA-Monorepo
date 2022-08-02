"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDto = void 0;
const tslib_1 = require("tslib");
const class_transformer_1 = require("class-transformer");
class UserDto {
}
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    tslib_1.__metadata("design:type", Number)
], UserDto.prototype, "id", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    tslib_1.__metadata("design:type", String)
], UserDto.prototype, "email", void 0);
exports.UserDto = UserDto;
//# sourceMappingURL=user.dto.js.map