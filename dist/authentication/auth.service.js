"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../entities/user/user.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
let AuthService = exports.AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async validateUser(email, password) {
        const user = await this.userService.userCredential({ username: email });
        if (!user)
            return null;
        const passwordValid = await bcrypt.compare(password, user.password);
        if (!user) {
            throw new common_1.NotAcceptableException('could not find the user');
        }
        if (user && passwordValid) {
            return user;
        }
        return null;
    }
    async login(user) {
        var _a;
        const payload = {
            userPayload: {
                id: user.user.id,
                username: user.user.username,
                password: user.user.password,
                firstName: user.user.first_name,
                middleName: user.user.middle_name,
                lastName: user.user.last_name,
                position: user.user.position,
                status: user.user.status,
                dailyRental: user.user.daily_rental,
                created_at: user.user.created_at,
            },
        };
        return {
            access_token: this.jwtService.sign(payload),
            Branch_Id: (_a = user.user.branch) === null || _a === void 0 ? void 0 : _a.id,
        };
    }
    async create(data) {
        data.password = await bcrypt.hash(data.password, 10);
        const response = await this.userService.create(data);
        if (response) {
            const { password } = response, result = __rest(response, ["password"]);
            return result;
        }
    }
    decodeToken(token) {
        return this.jwtService.decode(token);
    }
};
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map