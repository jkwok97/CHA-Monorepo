/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("path");

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(5);
const core_1 = __webpack_require__(6);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const config_1 = __webpack_require__(272);
const typeorm_1 = __webpack_require__(32);
const app_controller_1 = __webpack_require__(273);
const app_service_1 = __webpack_require__(274);
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: `.env.${process.env.NODE_ENV}`,
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                url: process.env.DATABASE_URL,
                // database: 'defaultdb',
                // host: process.env.DATABASE_HOST,
                // username: process.env.DATABASE_USER,
                // password: process.env.DATABASE_PASSWORD,
                // port: parseInt(process.env.DATABASE_PORT),
                synchronize: false,
                entities: [
                    entities_1.Users_V2,
                    entities_1.Teams_V2,
                    entities_1.Award_Type_V2,
                    entities_1.Awards_V2,
                    entities_1.Draft_Order_V2,
                    entities_1.Drafts_V2,
                    entities_1.Conferences_V2,
                    entities_1.Current_Season_V2,
                    entities_1.Divisions_V2,
                    entities_1.Players_V2,
                    entities_1.Goalie_Ratings_V2,
                    entities_1.Player_Ratings_V2,
                    entities_1.Salaries_V2,
                    entities_1.Schedule_V2,
                    entities_1.Goalies_Stats_V2,
                    entities_1.Players_Stats_V2,
                    entities_1.Team_Stats_V2,
                    entities_1.Transactions_V2,
                    entities_1.Waivers_V2,
                ],
                ssl: {
                    rejectUnauthorized: false,
                },
            }),
            core_1.ApiCoreModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);


/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(7), exports);


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiCoreModule = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
const awards_1 = __webpack_require__(8);
const users_1 = __webpack_require__(119);
const draft_table_1 = __webpack_require__(127);
const entry_draft_1 = __webpack_require__(135);
const goalie_stats_1 = __webpack_require__(143);
const league_1 = __webpack_require__(154);
const nhl_1 = __webpack_require__(161);
const player_info_1 = __webpack_require__(171);
const player_ratings_1 = __webpack_require__(179);
const player_stats_1 = __webpack_require__(187);
const salaries_1 = __webpack_require__(198);
const schedule_1 = __webpack_require__(206);
const team_stats_1 = __webpack_require__(214);
const teams_1 = __webpack_require__(224);
const transactions_1 = __webpack_require__(231);
const waivers_1 = __webpack_require__(240);
const divisions_1 = __webpack_require__(248);
const goalie_ratings_1 = __webpack_require__(256);
const conferences_1 = __webpack_require__(264);
let ApiCoreModule = exports.ApiCoreModule = class ApiCoreModule {
};
exports.ApiCoreModule = ApiCoreModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            users_1.ApiUsersModule,
            awards_1.ApiAwardsModule,
            draft_table_1.ApiDraftTableModule,
            entry_draft_1.ApiEntryDraftModule,
            goalie_stats_1.ApiGoalieStatsModule,
            league_1.ApiLeagueModule,
            nhl_1.ApiNhlModule,
            player_info_1.ApiPlayerInfoModule,
            player_ratings_1.ApiPlayerRatingsModule,
            player_stats_1.ApiPlayerStatsModule,
            salaries_1.ApiSalariesModule,
            schedule_1.ApiScheduleModule,
            team_stats_1.ApiTeamStatsModule,
            teams_1.ApiTeamsModule,
            transactions_1.ApiTransactionsModule,
            waivers_1.ApiWaiversModule,
            divisions_1.ApiDivisionsModule,
            goalie_ratings_1.ApiGoalieRatingsModule,
            conferences_1.ApiConferencesModule,
        ],
        controllers: [],
        providers: [],
        exports: [],
    })
], ApiCoreModule);


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(9), exports);


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiAwardsModule = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(32);
const controllers_1 = __webpack_require__(33);
const middlewares_1 = __webpack_require__(117);
const services_1 = __webpack_require__(114);
let ApiAwardsModule = exports.ApiAwardsModule = class ApiAwardsModule {
    configure(consumer) {
        consumer.apply(middlewares_1.AwardsMiddleware).forRoutes('*');
    }
};
exports.ApiAwardsModule = ApiAwardsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                entities_1.Awards_V2,
                entities_1.Players_Stats_V2,
                entities_1.Goalies_Stats_V2,
                entities_1.Team_Stats_V2,
                entities_1.Award_Type_V2,
            ]),
        ],
        controllers: [controllers_1.AwardsController],
        providers: [services_1.ApiAwardsService, services_1.ApiUserAwardsService],
    })
], ApiAwardsModule);


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(11), exports);


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(12), exports);
tslib_1.__exportStar(__webpack_require__(14), exports);
tslib_1.__exportStar(__webpack_require__(20), exports);
tslib_1.__exportStar(__webpack_require__(26), exports);
tslib_1.__exportStar(__webpack_require__(19), exports);
tslib_1.__exportStar(__webpack_require__(27), exports);
tslib_1.__exportStar(__webpack_require__(17), exports);
tslib_1.__exportStar(__webpack_require__(21), exports);
tslib_1.__exportStar(__webpack_require__(22), exports);
tslib_1.__exportStar(__webpack_require__(23), exports);
tslib_1.__exportStar(__webpack_require__(15), exports);
tslib_1.__exportStar(__webpack_require__(16), exports);
tslib_1.__exportStar(__webpack_require__(24), exports);
tslib_1.__exportStar(__webpack_require__(28), exports);
tslib_1.__exportStar(__webpack_require__(29), exports);
tslib_1.__exportStar(__webpack_require__(18), exports);
tslib_1.__exportStar(__webpack_require__(30), exports);
tslib_1.__exportStar(__webpack_require__(25), exports);
tslib_1.__exportStar(__webpack_require__(31), exports);


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Award_Type_V2 = void 0;
const tslib_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(13);
let Award_Type_V2 = exports.Award_Type_V2 = class Award_Type_V2 {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Award_Type_V2.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Award_Type_V2.prototype, "award_type", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Award_Type_V2.prototype, "display_name", void 0);
exports.Award_Type_V2 = Award_Type_V2 = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Award_Type_V2);


/***/ }),
/* 13 */
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Awards_V2 = void 0;
const tslib_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(13);
const award_type_entity_1 = __webpack_require__(12);
const player_stats_entity_1 = __webpack_require__(15);
const player_entity_1 = __webpack_require__(16);
const team_entity_1 = __webpack_require__(18);
const user_entity_1 = __webpack_require__(25);
let Awards_V2 = exports.Awards_V2 = class Awards_V2 {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Awards_V2.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Awards_V2.prototype, "display_season", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToOne)(() => player_stats_entity_1.Players_Stats_V2, (playerStats) => playerStats.playing_year),
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Awards_V2.prototype, "cha_season", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToOne)(() => award_type_entity_1.Award_Type_V2, (award) => award.id),
    (0, typeorm_1.JoinColumn)({ name: 'award_type' }),
    tslib_1.__metadata("design:type", typeof (_a = typeof award_type_entity_1.Award_Type_V2 !== "undefined" && award_type_entity_1.Award_Type_V2) === "function" ? _a : Object)
], Awards_V2.prototype, "award_type", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.Users_V2, (user) => user.id),
    (0, typeorm_1.JoinColumn)({ name: 'users_id' }),
    tslib_1.__metadata("design:type", typeof (_b = typeof user_entity_1.Users_V2 !== "undefined" && user_entity_1.Users_V2) === "function" ? _b : Object)
], Awards_V2.prototype, "users_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => team_entity_1.Teams_V2, (team) => team.id),
    (0, typeorm_1.JoinColumn)({ name: 'team_id' }),
    tslib_1.__metadata("design:type", typeof (_c = typeof team_entity_1.Teams_V2 !== "undefined" && team_entity_1.Teams_V2) === "function" ? _c : Object)
], Awards_V2.prototype, "team_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => player_entity_1.Players_V2, (player) => player.id),
    (0, typeorm_1.JoinColumn)({ name: 'player_id' }),
    tslib_1.__metadata("design:type", typeof (_d = typeof player_entity_1.Players_V2 !== "undefined" && player_entity_1.Players_V2) === "function" ? _d : Object)
], Awards_V2.prototype, "player_id", void 0);
exports.Awards_V2 = Awards_V2 = tslib_1.__decorate([
    (0, typeorm_1.Entity)({
        orderBy: {
            display_season: 'DESC',
        },
    })
], Awards_V2);


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Players_Stats_V2 = void 0;
const tslib_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(13);
const award_entity_1 = __webpack_require__(14);
const player_entity_1 = __webpack_require__(16);
let Players_Stats_V2 = exports.Players_Stats_V2 = class Players_Stats_V2 {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Players_Stats_V2.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => player_entity_1.Players_V2, (player) => player.id, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'player_id' }),
    tslib_1.__metadata("design:type", typeof (_a = typeof player_entity_1.Players_V2 !== "undefined" && player_entity_1.Players_V2) === "function" ? _a : Object)
], Players_Stats_V2.prototype, "player_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Players_Stats_V2.prototype, "team_name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Players_Stats_V2.prototype, "position", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Players_Stats_V2.prototype, "games_played", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Players_Stats_V2.prototype, "goals", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Players_Stats_V2.prototype, "assists", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Players_Stats_V2.prototype, "points", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Players_Stats_V2.prototype, "plus_minus", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Players_Stats_V2.prototype, "penalty_minutes", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Players_Stats_V2.prototype, "pp_goals", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Players_Stats_V2.prototype, "sh_goals", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Players_Stats_V2.prototype, "gw_goals", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Players_Stats_V2.prototype, "gt_goals", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Players_Stats_V2.prototype, "shots", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Players_Stats_V2.prototype, "shooting_pct", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Players_Stats_V2.prototype, "minutes_played", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Players_Stats_V2.prototype, "minutes_per_game", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Players_Stats_V2.prototype, "fo_won", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Players_Stats_V2.prototype, "fo_lost", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Players_Stats_V2.prototype, "fo_tied", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Players_Stats_V2.prototype, "fo_pct", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Players_Stats_V2.prototype, "pass_complete", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Players_Stats_V2.prototype, "pass_incomplete", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Players_Stats_V2.prototype, "pass_attempts", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Players_Stats_V2.prototype, "pass_pct", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Players_Stats_V2.prototype, "corner_won", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Players_Stats_V2.prototype, "corner_lost", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Players_Stats_V2.prototype, "corner_total", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Players_Stats_V2.prototype, "corner_pct", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Players_Stats_V2.prototype, "fights_won", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Players_Stats_V2.prototype, "fights_lost", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Players_Stats_V2.prototype, "fights_tied", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Players_Stats_V2.prototype, "fights_pct", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Players_Stats_V2.prototype, "hits", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Players_Stats_V2.prototype, "hit_per_game", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Players_Stats_V2.prototype, "blocked_shots", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Players_Stats_V2.prototype, "blocked_shot_per_game", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Players_Stats_V2.prototype, "current_points_streak", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Players_Stats_V2.prototype, "longest_points_streak", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Players_Stats_V2.prototype, "penalty_minor", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Players_Stats_V2.prototype, "penalty_minor_coincidental", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Players_Stats_V2.prototype, "penalty_major", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Players_Stats_V2.prototype, "penalty_fighting_major", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Players_Stats_V2.prototype, "penalty_match", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Players_Stats_V2.prototype, "penalty_misconduct", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Players_Stats_V2.prototype, "penalty_game_misconduct", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Players_Stats_V2.prototype, "penalty_gross_misconduct", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToOne)(() => award_entity_1.Awards_V2, (award) => award.cha_season),
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Players_Stats_V2.prototype, "playing_year", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Players_Stats_V2.prototype, "season_type", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Players_Stats_V2.prototype, "player_status", void 0);
exports.Players_Stats_V2 = Players_Stats_V2 = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Players_Stats_V2);


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Players_V2 = void 0;
const tslib_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(13);
const draft_entity_1 = __webpack_require__(17);
const goalie_rating_entity_1 = __webpack_require__(21);
const goalie_stats_entity_1 = __webpack_require__(22);
const player_rating_entity_1 = __webpack_require__(23);
const player_stats_entity_1 = __webpack_require__(15);
const salary_entity_1 = __webpack_require__(24);
let Players_V2 = exports.Players_V2 = class Players_V2 {
    logInsert() {
        console.log('Inserted Player with id', this.id);
    }
    logUpdate() {
        console.log('Updated Player with id', this.id);
    }
    logRemove() {
        console.log('Removed Player');
    }
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Players_V2.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Players_V2.prototype, "firstname", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Players_V2.prototype, "lastname", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Players_V2.prototype, "nhl_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Players_V2.prototype, "sportsnet_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Boolean)
], Players_V2.prototype, "isactive", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Boolean)
], Players_V2.prototype, "isgoalie", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Boolean)
], Players_V2.prototype, "isdefense", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Boolean)
], Players_V2.prototype, "isforward", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Boolean)
], Players_V2.prototype, "is_protected", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Players_V2.prototype, "primary_position", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Players_V2.prototype, "alt_position", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => player_stats_entity_1.Players_Stats_V2, (playerStats) => playerStats.player_id),
    tslib_1.__metadata("design:type", typeof (_a = typeof player_stats_entity_1.Players_Stats_V2 !== "undefined" && player_stats_entity_1.Players_Stats_V2) === "function" ? _a : Object)
], Players_V2.prototype, "playerStats", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => goalie_stats_entity_1.Goalies_Stats_V2, (goalieStats) => goalieStats.player_id),
    tslib_1.__metadata("design:type", typeof (_b = typeof goalie_stats_entity_1.Goalies_Stats_V2 !== "undefined" && goalie_stats_entity_1.Goalies_Stats_V2) === "function" ? _b : Object)
], Players_V2.prototype, "goalieStats", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToOne)(() => salary_entity_1.Salaries_V2, (salary) => salary.player_id),
    tslib_1.__metadata("design:type", typeof (_c = typeof salary_entity_1.Salaries_V2 !== "undefined" && salary_entity_1.Salaries_V2) === "function" ? _c : Object)
], Players_V2.prototype, "salary", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => draft_entity_1.Drafts_V2, (draft) => draft.player_id),
    tslib_1.__metadata("design:type", typeof (_d = typeof draft_entity_1.Drafts_V2 !== "undefined" && draft_entity_1.Drafts_V2) === "function" ? _d : Object)
], Players_V2.prototype, "draft", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => goalie_rating_entity_1.Goalie_Ratings_V2, (goalieRating) => goalieRating.player_id),
    tslib_1.__metadata("design:type", typeof (_e = typeof goalie_rating_entity_1.Goalie_Ratings_V2 !== "undefined" && goalie_rating_entity_1.Goalie_Ratings_V2) === "function" ? _e : Object)
], Players_V2.prototype, "goalieRating", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => player_rating_entity_1.Player_Ratings_V2, (playerRating) => playerRating.player_id),
    tslib_1.__metadata("design:type", typeof (_f = typeof player_rating_entity_1.Player_Ratings_V2 !== "undefined" && player_rating_entity_1.Player_Ratings_V2) === "function" ? _f : Object)
], Players_V2.prototype, "playerRating", void 0);
tslib_1.__decorate([
    (0, typeorm_1.AfterInsert)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], Players_V2.prototype, "logInsert", null);
tslib_1.__decorate([
    (0, typeorm_1.AfterUpdate)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], Players_V2.prototype, "logUpdate", null);
tslib_1.__decorate([
    (0, typeorm_1.AfterRemove)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], Players_V2.prototype, "logRemove", null);
exports.Players_V2 = Players_V2 = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Players_V2);


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Drafts_V2 = void 0;
const tslib_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(13);
const player_entity_1 = __webpack_require__(16);
const team_entity_1 = __webpack_require__(18);
let Drafts_V2 = exports.Drafts_V2 = class Drafts_V2 {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Drafts_V2.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => player_entity_1.Players_V2, (player) => player.id),
    (0, typeorm_1.JoinColumn)({ name: 'player_id' }),
    tslib_1.__metadata("design:type", typeof (_a = typeof typeorm_1.Relation !== "undefined" && typeorm_1.Relation) === "function" ? _a : Object)
], Drafts_V2.prototype, "player_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Drafts_V2.prototype, "draft_year", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Drafts_V2.prototype, "draft_round", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Drafts_V2.prototype, "draft_overall", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => team_entity_1.Teams_V2, (team) => team.id),
    (0, typeorm_1.JoinColumn)({ name: 'team_id' }),
    tslib_1.__metadata("design:type", typeof (_b = typeof team_entity_1.Teams_V2 !== "undefined" && team_entity_1.Teams_V2) === "function" ? _b : Object)
], Drafts_V2.prototype, "team_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => team_entity_1.Teams_V2, (team) => team.id),
    (0, typeorm_1.JoinColumn)({ name: 'pick_team_id' }),
    tslib_1.__metadata("design:type", typeof (_c = typeof team_entity_1.Teams_V2 !== "undefined" && team_entity_1.Teams_V2) === "function" ? _c : Object)
], Drafts_V2.prototype, "pick_team_id", void 0);
exports.Drafts_V2 = Drafts_V2 = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Drafts_V2);


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Teams_V2 = void 0;
const tslib_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(13);
const division_entity_1 = __webpack_require__(19);
let Teams_V2 = exports.Teams_V2 = class Teams_V2 {
    logInsert() {
        console.log('Inserted Team with id', this.id);
    }
    logUpdate() {
        console.log('Updated Team with id', this.id);
    }
    logRemove() {
        console.log('Removed Team');
    }
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Teams_V2.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Teams_V2.prototype, "shortname", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Teams_V2.prototype, "city", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Teams_V2.prototype, "nickname", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Boolean)
], Teams_V2.prototype, "isactive", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Teams_V2.prototype, "users_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Teams_V2.prototype, "teamlogo", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Teams_V2.prototype, "teamaltlogo", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Teams_V2.prototype, "teamcolor", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Teams_V2.prototype, "teamtextcolor", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToOne)(() => division_entity_1.Divisions_V2, (division) => division.id, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'divisions_id' }),
    tslib_1.__metadata("design:type", typeof (_a = typeof division_entity_1.Divisions_V2 !== "undefined" && division_entity_1.Divisions_V2) === "function" ? _a : Object)
], Teams_V2.prototype, "divisions_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.AfterInsert)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], Teams_V2.prototype, "logInsert", null);
tslib_1.__decorate([
    (0, typeorm_1.AfterUpdate)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], Teams_V2.prototype, "logUpdate", null);
tslib_1.__decorate([
    (0, typeorm_1.AfterRemove)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], Teams_V2.prototype, "logRemove", null);
exports.Teams_V2 = Teams_V2 = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Teams_V2);


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Divisions_V2 = void 0;
const tslib_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(13);
const conference_entity_1 = __webpack_require__(20);
let Divisions_V2 = exports.Divisions_V2 = class Divisions_V2 {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Divisions_V2.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Divisions_V2.prototype, "divisionname", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToOne)(() => conference_entity_1.Conferences_V2, (conference) => conference.id, {
        eager: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'conference_id' }),
    tslib_1.__metadata("design:type", Number)
], Divisions_V2.prototype, "conference_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Boolean)
], Divisions_V2.prototype, "isactive", void 0);
exports.Divisions_V2 = Divisions_V2 = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Divisions_V2);


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Conferences_V2 = void 0;
const tslib_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(13);
let Conferences_V2 = exports.Conferences_V2 = class Conferences_V2 {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Conferences_V2.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Conferences_V2.prototype, "conferencename", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Boolean)
], Conferences_V2.prototype, "isactive", void 0);
exports.Conferences_V2 = Conferences_V2 = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Conferences_V2);


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Goalie_Ratings_V2 = void 0;
const tslib_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(13);
let Goalie_Ratings_V2 = exports.Goalie_Ratings_V2 = class Goalie_Ratings_V2 {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Goalie_Ratings_V2.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Goalie_Ratings_V2.prototype, "player_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Goalie_Ratings_V2.prototype, "games_played", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Goalie_Ratings_V2.prototype, "minutes_played", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Goalie_Ratings_V2.prototype, "goals_against_avg", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Goalie_Ratings_V2.prototype, "wins", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Goalie_Ratings_V2.prototype, "loss", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Goalie_Ratings_V2.prototype, "ties", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Goalie_Ratings_V2.prototype, "en_goals", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Goalie_Ratings_V2.prototype, "shutouts", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Goalie_Ratings_V2.prototype, "goals_against", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Goalie_Ratings_V2.prototype, "saves", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Goalie_Ratings_V2.prototype, "shots_for", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Goalie_Ratings_V2.prototype, "save_pct", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Goalie_Ratings_V2.prototype, "goals", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Goalie_Ratings_V2.prototype, "assists", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Goalie_Ratings_V2.prototype, "points", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Goalie_Ratings_V2.prototype, "penalty_minutes", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Goalie_Ratings_V2.prototype, "skating", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Goalie_Ratings_V2.prototype, "speed", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Goalie_Ratings_V2.prototype, "passing", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Goalie_Ratings_V2.prototype, "playing_year", void 0);
exports.Goalie_Ratings_V2 = Goalie_Ratings_V2 = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Goalie_Ratings_V2);


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Goalies_Stats_V2 = void 0;
const tslib_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(13);
const player_entity_1 = __webpack_require__(16);
const team_entity_1 = __webpack_require__(18);
let Goalies_Stats_V2 = exports.Goalies_Stats_V2 = class Goalies_Stats_V2 {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Goalies_Stats_V2.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => player_entity_1.Players_V2, (player) => player.id, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'player_id' }),
    tslib_1.__metadata("design:type", typeof (_a = typeof player_entity_1.Players_V2 !== "undefined" && player_entity_1.Players_V2) === "function" ? _a : Object)
], Goalies_Stats_V2.prototype, "player_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Goalies_Stats_V2.prototype, "team_name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Goalies_Stats_V2.prototype, "games_played", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Goalies_Stats_V2.prototype, "minutes_played", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Goalies_Stats_V2.prototype, "goals_against_avg", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Goalies_Stats_V2.prototype, "wins", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Goalies_Stats_V2.prototype, "loss", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Goalies_Stats_V2.prototype, "ties", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Goalies_Stats_V2.prototype, "en_goals", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Goalies_Stats_V2.prototype, "shutouts", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Goalies_Stats_V2.prototype, "goals_against", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Goalies_Stats_V2.prototype, "saves", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Goalies_Stats_V2.prototype, "shots_for", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Goalies_Stats_V2.prototype, "save_pct", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Goalies_Stats_V2.prototype, "goals", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Goalies_Stats_V2.prototype, "assists", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Goalies_Stats_V2.prototype, "points", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Goalies_Stats_V2.prototype, "penalty_minutes", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Goalies_Stats_V2.prototype, "pass_complete", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Goalies_Stats_V2.prototype, "pass_incomplete", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Goalies_Stats_V2.prototype, "pass_attempts", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Goalies_Stats_V2.prototype, "pass_pct", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Goalies_Stats_V2.prototype, "penalty_minor", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Goalies_Stats_V2.prototype, "penalty_minor_coincidental", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Goalies_Stats_V2.prototype, "penalty_major", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Goalies_Stats_V2.prototype, "penalty_fighting_major", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Goalies_Stats_V2.prototype, "penalty_match", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Goalies_Stats_V2.prototype, "penalty_misconduct", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Goalies_Stats_V2.prototype, "penalty_game_misconduct", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Goalies_Stats_V2.prototype, "penalty_gross_misconduct", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Goalies_Stats_V2.prototype, "playing_year", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Goalies_Stats_V2.prototype, "season_type", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Goalies_Stats_V2.prototype, "player_status", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToOne)(() => team_entity_1.Teams_V2, (team) => team.shortname),
    tslib_1.__metadata("design:type", typeof (_b = typeof team_entity_1.Teams_V2 !== "undefined" && team_entity_1.Teams_V2) === "function" ? _b : Object)
], Goalies_Stats_V2.prototype, "team", void 0);
exports.Goalies_Stats_V2 = Goalies_Stats_V2 = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Goalies_Stats_V2);


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Player_Ratings_V2 = void 0;
const tslib_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(13);
let Player_Ratings_V2 = exports.Player_Ratings_V2 = class Player_Ratings_V2 {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Player_Ratings_V2.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Player_Ratings_V2.prototype, "player_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Player_Ratings_V2.prototype, "games_played", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Player_Ratings_V2.prototype, "goals", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Player_Ratings_V2.prototype, "assists", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Player_Ratings_V2.prototype, "points", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Player_Ratings_V2.prototype, "plus_minus", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Player_Ratings_V2.prototype, "penalty_minutes", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Player_Ratings_V2.prototype, "pp_goals", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Player_Ratings_V2.prototype, "sh_goals", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Player_Ratings_V2.prototype, "gw_goals", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Player_Ratings_V2.prototype, "gt_goals", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Player_Ratings_V2.prototype, "shots", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Player_Ratings_V2.prototype, "shooting_pct", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Player_Ratings_V2.prototype, "game_fatigue", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Player_Ratings_V2.prototype, "shift_fatigue", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Player_Ratings_V2.prototype, "c_rate", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Player_Ratings_V2.prototype, "l_rate", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Player_Ratings_V2.prototype, "r_rate", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Player_Ratings_V2.prototype, "ld_rate", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Player_Ratings_V2.prototype, "rd_rate", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Player_Ratings_V2.prototype, "shooting", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Player_Ratings_V2.prototype, "skating", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Player_Ratings_V2.prototype, "speed", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Player_Ratings_V2.prototype, "passing", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Player_Ratings_V2.prototype, "forecheck", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Player_Ratings_V2.prototype, "physical", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Player_Ratings_V2.prototype, "intimidation", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Player_Ratings_V2.prototype, "clear_crease", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Player_Ratings_V2.prototype, "rock", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Player_Ratings_V2.prototype, "pk", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Player_Ratings_V2.prototype, "shot_block", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Player_Ratings_V2.prototype, "face_off", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Player_Ratings_V2.prototype, "assist_rating", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Player_Ratings_V2.prototype, "playing_year", void 0);
exports.Player_Ratings_V2 = Player_Ratings_V2 = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Player_Ratings_V2);


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Salaries_V2 = void 0;
const tslib_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(13);
let Salaries_V2 = exports.Salaries_V2 = class Salaries_V2 {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Salaries_V2.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Salaries_V2.prototype, "player_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Salaries_V2.prototype, "season_2020", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Salaries_V2.prototype, "season_2021", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Salaries_V2.prototype, "season_2022", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Salaries_V2.prototype, "season_2023", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Salaries_V2.prototype, "season_2024", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Salaries_V2.prototype, "season_2025", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Salaries_V2.prototype, "season_2026", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Salaries_V2.prototype, "season_2027", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Salaries_V2.prototype, "season_2028", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Salaries_V2.prototype, "season_2029", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Salaries_V2.prototype, "season_2030", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Salaries_V2.prototype, "season_2031", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Salaries_V2.prototype, "season_2032", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Salaries_V2.prototype, "season_2033", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Salaries_V2.prototype, "season_2034", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Salaries_V2.prototype, "season_2035", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Salaries_V2.prototype, "season_2036", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Salaries_V2.prototype, "season_2037", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Salaries_V2.prototype, "season_2038", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Salaries_V2.prototype, "season_2039", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Salaries_V2.prototype, "season_2040", void 0);
exports.Salaries_V2 = Salaries_V2 = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Salaries_V2);


/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Users_V2 = void 0;
const tslib_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(13);
let Users_V2 = exports.Users_V2 = class Users_V2 {
    logInsert() {
        console.log('Inserted User with id', this.id);
    }
    logUpdate() {
        console.log('Updated User with id', this.id);
    }
    logRemove() {
        console.log('Removed User');
    }
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Users_V2.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Users_V2.prototype, "firstname", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Users_V2.prototype, "lastname", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Users_V2.prototype, "email", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Boolean)
], Users_V2.prototype, "isadmin", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Boolean)
], Users_V2.prototype, "isactive", void 0);
tslib_1.__decorate([
    (0, typeorm_1.AfterInsert)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], Users_V2.prototype, "logInsert", null);
tslib_1.__decorate([
    (0, typeorm_1.AfterUpdate)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], Users_V2.prototype, "logUpdate", null);
tslib_1.__decorate([
    (0, typeorm_1.AfterRemove)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], Users_V2.prototype, "logRemove", null);
exports.Users_V2 = Users_V2 = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Users_V2);


/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Current_Season_V2 = void 0;
const tslib_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(13);
let Current_Season_V2 = exports.Current_Season_V2 = class Current_Season_V2 {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Current_Season_V2.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Current_Season_V2.prototype, "current_year", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Current_Season_V2.prototype, "next_year", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Current_Season_V2.prototype, "prev_year", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Current_Season_V2.prototype, "nhl_year", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Current_Season_V2.prototype, "current_season_type", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Current_Season_V2.prototype, "current_day", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Current_Season_V2.prototype, "current_draft_year", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Current_Season_V2.prototype, "next_draft_year", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Current_Season_V2.prototype, "current_cap", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Current_Season_V2.prototype, "next_cap", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Current_Season_V2.prototype, "min_games", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Boolean)
], Current_Season_V2.prototype, "offseason", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Current_Season_V2.prototype, "min_games_stats", void 0);
exports.Current_Season_V2 = Current_Season_V2 = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Current_Season_V2);


/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Draft_Order_V2 = void 0;
const tslib_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(13);
const team_entity_1 = __webpack_require__(18);
let Draft_Order_V2 = exports.Draft_Order_V2 = class Draft_Order_V2 {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Draft_Order_V2.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => team_entity_1.Teams_V2, (team) => team.id, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'team_id' }),
    tslib_1.__metadata("design:type", typeof (_a = typeof team_entity_1.Teams_V2 !== "undefined" && team_entity_1.Teams_V2) === "function" ? _a : Object)
], Draft_Order_V2.prototype, "team_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Draft_Order_V2.prototype, "round_one", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Draft_Order_V2.prototype, "round_two", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Draft_Order_V2.prototype, "round_three", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Draft_Order_V2.prototype, "round_four", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Draft_Order_V2.prototype, "round_five", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Draft_Order_V2.prototype, "draft_year", void 0);
exports.Draft_Order_V2 = Draft_Order_V2 = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Draft_Order_V2);


/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Schedule_V2 = void 0;
const tslib_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(13);
let Schedule_V2 = exports.Schedule_V2 = class Schedule_V2 {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Schedule_V2.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Schedule_V2.prototype, "game_day", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Schedule_V2.prototype, "vis_team_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Schedule_V2.prototype, "vis_team_game_number", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Schedule_V2.prototype, "vis_team_score", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Schedule_V2.prototype, "home_team_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Schedule_V2.prototype, "home_team_game_number", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Schedule_V2.prototype, "home_team_score", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Schedule_V2.prototype, "playing_year", void 0);
exports.Schedule_V2 = Schedule_V2 = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Schedule_V2);


/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Team_Stats_V2 = void 0;
const tslib_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(13);
const team_entity_1 = __webpack_require__(18);
let Team_Stats_V2 = exports.Team_Stats_V2 = class Team_Stats_V2 {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Team_Stats_V2.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => team_entity_1.Teams_V2, (team) => team.id, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'team_id' }),
    tslib_1.__metadata("design:type", typeof (_a = typeof team_entity_1.Teams_V2 !== "undefined" && team_entity_1.Teams_V2) === "function" ? _a : Object)
], Team_Stats_V2.prototype, "team_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Team_Stats_V2.prototype, "games_played", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Team_Stats_V2.prototype, "wins", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Team_Stats_V2.prototype, "loss", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Team_Stats_V2.prototype, "ties", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Team_Stats_V2.prototype, "points", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Team_Stats_V2.prototype, "goals_for", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Team_Stats_V2.prototype, "goals_against", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Team_Stats_V2.prototype, "pp_attempts", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Team_Stats_V2.prototype, "pp_goals", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Team_Stats_V2.prototype, "pp_min", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Team_Stats_V2.prototype, "pk_attempts", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Team_Stats_V2.prototype, "pk_goals", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Team_Stats_V2.prototype, "pk_min", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Team_Stats_V2.prototype, "penalty_minutes", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Team_Stats_V2.prototype, "sh_goals", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Team_Stats_V2.prototype, "home_wins", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Team_Stats_V2.prototype, "home_loss", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Team_Stats_V2.prototype, "home_ties", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Team_Stats_V2.prototype, "road_wins", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Team_Stats_V2.prototype, "road_loss", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Team_Stats_V2.prototype, "road_ties", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Team_Stats_V2.prototype, "div_win", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Team_Stats_V2.prototype, "div_loss", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Team_Stats_V2.prototype, "div_tie", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Team_Stats_V2.prototype, "ot_win", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Team_Stats_V2.prototype, "ot_loss", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Team_Stats_V2.prototype, "lead_after_two_wins", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Team_Stats_V2.prototype, "lead_after_two_loss", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Team_Stats_V2.prototype, "lead_after_two_ties", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Team_Stats_V2.prototype, "trail_after_two_wins", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Team_Stats_V2.prototype, "trail_after_two_loss", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Team_Stats_V2.prototype, "trail_after_two_ties", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Team_Stats_V2.prototype, "even_after_two_wins", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Team_Stats_V2.prototype, "even_after_two_loss", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Team_Stats_V2.prototype, "even_after_two_ties", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Team_Stats_V2.prototype, "long_win_streak", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Team_Stats_V2.prototype, "shots_for", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Team_Stats_V2.prototype, "shots_against", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Team_Stats_V2.prototype, "face_off_won", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Team_Stats_V2.prototype, "face_off_lost", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Team_Stats_V2.prototype, "corner_won", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Team_Stats_V2.prototype, "corner_lost", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Team_Stats_V2.prototype, "pass_complete", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Team_Stats_V2.prototype, "pass_incomplete", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Team_Stats_V2.prototype, "empty_net", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Team_Stats_V2.prototype, "shut_outs", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Team_Stats_V2.prototype, "playing_year", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Team_Stats_V2.prototype, "season_type", void 0);
exports.Team_Stats_V2 = Team_Stats_V2 = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Team_Stats_V2);


/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Transactions_V2 = void 0;
const tslib_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(13);
let Transactions_V2 = exports.Transactions_V2 = class Transactions_V2 {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Transactions_V2.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Transactions_V2.prototype, "transaction_date", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Transactions_V2.prototype, "team_one_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)('text', { array: true }),
    tslib_1.__metadata("design:type", Array)
], Transactions_V2.prototype, "team_one_picks", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)('int', { array: true }),
    tslib_1.__metadata("design:type", Array)
], Transactions_V2.prototype, "team_one_players", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Transactions_V2.prototype, "team_two_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)('text', { array: true }),
    tslib_1.__metadata("design:type", Array)
], Transactions_V2.prototype, "team_two_picks", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)('int', { array: true }),
    tslib_1.__metadata("design:type", Array)
], Transactions_V2.prototype, "team_two_players", void 0);
exports.Transactions_V2 = Transactions_V2 = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Transactions_V2);


/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Waivers_V2 = void 0;
const tslib_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(13);
const team_entity_1 = __webpack_require__(18);
let Waivers_V2 = exports.Waivers_V2 = class Waivers_V2 {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Waivers_V2.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Waivers_V2.prototype, "team_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], Waivers_V2.prototype, "priority_number", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToOne)(() => team_entity_1.Teams_V2, (team) => team.id),
    tslib_1.__metadata("design:type", typeof (_a = typeof team_entity_1.Teams_V2 !== "undefined" && team_entity_1.Teams_V2) === "function" ? _a : Object)
], Waivers_V2.prototype, "team", void 0);
exports.Waivers_V2 = Waivers_V2 = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Waivers_V2);


/***/ }),
/* 32 */
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(34), exports);


/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AwardsController = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(35);
const common_1 = __webpack_require__(1);
const services_1 = __webpack_require__(114);
const api_awards_service_1 = __webpack_require__(115);
let AwardsController = exports.AwardsController = class AwardsController {
    constructor(awardsService, userAwardsService) {
        this.awardsService = awardsService;
        this.userAwardsService = userAwardsService;
    }
    async getAll() {
        const awards = await this.awardsService.getAll();
        if (!awards || awards.length < 1) {
            throw new common_1.NotFoundException('awards not found');
        }
        return awards;
    }
    updateAwardById(param, body) {
        return this.awardsService.updateAwardById(parseInt(param.id), body);
    }
    addPlayer(body) {
        return this.awardsService.addAward(body);
    }
    deletePlayer(param) {
        return this.awardsService.deleteAward(parseInt(param.id));
    }
    async getChampions() {
        const champions = await this.awardsService.getChampions();
        if (!champions || champions.length < 1) {
            throw new common_1.NotFoundException('Champions Awards not found');
        }
        return champions;
    }
    async getScorerAwards() {
        const scorers = await this.awardsService.getScorerAwards();
        if (!scorers || scorers.length < 1) {
            throw new common_1.NotFoundException('Scorers Awards not found');
        }
        return scorers;
    }
    async getDefenseAwards() {
        const defense = await this.awardsService.getDefenseAwards();
        if (!defense || defense.length < 1) {
            throw new common_1.NotFoundException('Defense Awards not found');
        }
        return defense;
    }
    async getRookieAwards() {
        const rookies = await this.awardsService.getRookieAwards();
        if (!rookies || rookies.length < 1) {
            throw new common_1.NotFoundException('Rookie Awards not found');
        }
        return rookies;
    }
    async getGoalieAwards() {
        const goalies = await this.awardsService.getGoalieAwards();
        if (!goalies || goalies.length < 1) {
            throw new common_1.NotFoundException('Goalie Awards not found');
        }
        return goalies;
    }
    async getGmAwards() {
        const gms = await this.awardsService.getGmAwards();
        if (!gms || gms.length < 1) {
            throw new common_1.NotFoundException('GM Awards not found');
        }
        return gms;
    }
    async getSeasonAwards() {
        const season = await this.awardsService.getSeasonAwards();
        if (!season || season.length < 1) {
            throw new common_1.NotFoundException('Season Awards not found');
        }
        return season;
    }
    async getTeamAwardsByUserId(param) {
        const awardsByUser = await this.userAwardsService.getAwardsByUserId(param.userId);
        if (!awardsByUser || awardsByUser.length < 1) {
            throw new common_1.NotFoundException('Player Stats not found');
        }
        return awardsByUser;
    }
    async getAwardTypes() {
        const awardTypes = await this.awardsService.getAwardTypes();
        if (!awardTypes || awardTypes.length < 1) {
            throw new common_1.NotFoundException('Award Types not found');
        }
        return awardTypes;
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], AwardsController.prototype, "getAll", null);
tslib_1.__decorate([
    (0, common_1.Put)('/:id'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], AwardsController.prototype, "updateAwardById", null);
tslib_1.__decorate([
    (0, common_1.Post)('/add'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_e = typeof entities_1.AwardCreateDto !== "undefined" && entities_1.AwardCreateDto) === "function" ? _e : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], AwardsController.prototype, "addPlayer", null);
tslib_1.__decorate([
    (0, common_1.Delete)('/:id'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], AwardsController.prototype, "deletePlayer", null);
tslib_1.__decorate([
    (0, common_1.Get)('/champions'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], AwardsController.prototype, "getChampions", null);
tslib_1.__decorate([
    (0, common_1.Get)('/scorers'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AwardsController.prototype, "getScorerAwards", null);
tslib_1.__decorate([
    (0, common_1.Get)('/defense'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], AwardsController.prototype, "getDefenseAwards", null);
tslib_1.__decorate([
    (0, common_1.Get)('/rookies'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], AwardsController.prototype, "getRookieAwards", null);
tslib_1.__decorate([
    (0, common_1.Get)('/goalies'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], AwardsController.prototype, "getGoalieAwards", null);
tslib_1.__decorate([
    (0, common_1.Get)('/gm'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_k = typeof Promise !== "undefined" && Promise) === "function" ? _k : Object)
], AwardsController.prototype, "getGmAwards", null);
tslib_1.__decorate([
    (0, common_1.Get)('/season'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_l = typeof Promise !== "undefined" && Promise) === "function" ? _l : Object)
], AwardsController.prototype, "getSeasonAwards", null);
tslib_1.__decorate([
    (0, common_1.Get)('/user/:userId'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_m = typeof Promise !== "undefined" && Promise) === "function" ? _m : Object)
], AwardsController.prototype, "getTeamAwardsByUserId", null);
tslib_1.__decorate([
    (0, common_1.Get)('/types'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_o = typeof Promise !== "undefined" && Promise) === "function" ? _o : Object)
], AwardsController.prototype, "getAwardTypes", null);
exports.AwardsController = AwardsController = tslib_1.__decorate([
    (0, common_1.Controller)('awards'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof api_awards_service_1.ApiAwardsService !== "undefined" && api_awards_service_1.ApiAwardsService) === "function" ? _a : Object, typeof (_b = typeof services_1.ApiUserAwardsService !== "undefined" && services_1.ApiUserAwardsService) === "function" ? _b : Object])
], AwardsController);


/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(36), exports);
tslib_1.__exportStar(__webpack_require__(97), exports);
tslib_1.__exportStar(__webpack_require__(109), exports);


/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(37), exports);
tslib_1.__exportStar(__webpack_require__(40), exports);
tslib_1.__exportStar(__webpack_require__(42), exports);
tslib_1.__exportStar(__webpack_require__(46), exports);
tslib_1.__exportStar(__webpack_require__(51), exports);
tslib_1.__exportStar(__webpack_require__(53), exports);
tslib_1.__exportStar(__webpack_require__(57), exports);
tslib_1.__exportStar(__webpack_require__(62), exports);
tslib_1.__exportStar(__webpack_require__(80), exports);
tslib_1.__exportStar(__webpack_require__(83), exports);
tslib_1.__exportStar(__webpack_require__(90), exports);
tslib_1.__exportStar(__webpack_require__(95), exports);


/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(38), exports);
tslib_1.__exportStar(__webpack_require__(39), exports);


/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserDto = void 0;
class UserDto {
}
exports.UserDto = UserDto;


/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserCreateDto = void 0;
class UserCreateDto {
}
exports.UserCreateDto = UserCreateDto;


/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(41), exports);


/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 42 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(43), exports);
tslib_1.__exportStar(__webpack_require__(44), exports);
tslib_1.__exportStar(__webpack_require__(45), exports);


/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 44 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 45 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 46 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(47), exports);
tslib_1.__exportStar(__webpack_require__(48), exports);
tslib_1.__exportStar(__webpack_require__(49), exports);
tslib_1.__exportStar(__webpack_require__(50), exports);


/***/ }),
/* 47 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 48 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 49 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 50 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 51 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(52), exports);


/***/ }),
/* 52 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 53 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(54), exports);
tslib_1.__exportStar(__webpack_require__(55), exports);
tslib_1.__exportStar(__webpack_require__(56), exports);


/***/ }),
/* 54 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 55 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 56 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 57 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(58), exports);
tslib_1.__exportStar(__webpack_require__(59), exports);
tslib_1.__exportStar(__webpack_require__(60), exports);
tslib_1.__exportStar(__webpack_require__(61), exports);


/***/ }),
/* 58 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 59 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 60 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 61 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 62 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(63), exports);
tslib_1.__exportStar(__webpack_require__(64), exports);
tslib_1.__exportStar(__webpack_require__(65), exports);
tslib_1.__exportStar(__webpack_require__(66), exports);
tslib_1.__exportStar(__webpack_require__(67), exports);
tslib_1.__exportStar(__webpack_require__(68), exports);
tslib_1.__exportStar(__webpack_require__(69), exports);
tslib_1.__exportStar(__webpack_require__(70), exports);
tslib_1.__exportStar(__webpack_require__(71), exports);
tslib_1.__exportStar(__webpack_require__(72), exports);
tslib_1.__exportStar(__webpack_require__(73), exports);
tslib_1.__exportStar(__webpack_require__(74), exports);
tslib_1.__exportStar(__webpack_require__(75), exports);
tslib_1.__exportStar(__webpack_require__(76), exports);
tslib_1.__exportStar(__webpack_require__(77), exports);
tslib_1.__exportStar(__webpack_require__(78), exports);
tslib_1.__exportStar(__webpack_require__(79), exports);


/***/ }),
/* 63 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 64 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 65 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 66 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 67 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 68 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 69 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 70 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 71 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 72 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 73 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 74 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 75 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 76 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 77 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 78 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 79 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 80 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(81), exports);
tslib_1.__exportStar(__webpack_require__(82), exports);


/***/ }),
/* 81 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 82 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 83 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(84), exports);
tslib_1.__exportStar(__webpack_require__(85), exports);
tslib_1.__exportStar(__webpack_require__(86), exports);
tslib_1.__exportStar(__webpack_require__(87), exports);
tslib_1.__exportStar(__webpack_require__(88), exports);
tslib_1.__exportStar(__webpack_require__(89), exports);


/***/ }),
/* 84 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 85 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 86 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 87 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 88 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 89 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 90 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(91), exports);
tslib_1.__exportStar(__webpack_require__(92), exports);
tslib_1.__exportStar(__webpack_require__(93), exports);
tslib_1.__exportStar(__webpack_require__(94), exports);


/***/ }),
/* 91 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 92 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 93 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 94 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 95 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(96), exports);


/***/ }),
/* 96 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 97 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(98), exports);
tslib_1.__exportStar(__webpack_require__(100), exports);
tslib_1.__exportStar(__webpack_require__(102), exports);
tslib_1.__exportStar(__webpack_require__(104), exports);
tslib_1.__exportStar(__webpack_require__(106), exports);


/***/ }),
/* 98 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(99), exports);


/***/ }),
/* 99 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrimeButtonClass = void 0;
var PrimeButtonClass;
(function (PrimeButtonClass) {
    PrimeButtonClass["PRIMARY"] = "";
    PrimeButtonClass["SECONDARY"] = "p-button-secondary";
    PrimeButtonClass["SUCCESS"] = "p-button-success";
    PrimeButtonClass["INFO"] = "p-button-info";
    PrimeButtonClass["WARNING"] = "p-button-warning";
    PrimeButtonClass["HELP"] = "p-button-help";
    PrimeButtonClass["DANGER"] = "p-button-danger";
})(PrimeButtonClass || (exports.PrimeButtonClass = PrimeButtonClass = {}));


/***/ }),
/* 100 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(101), exports);


/***/ }),
/* 101 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChaLogoEnum = void 0;
var ChaLogoEnum;
(function (ChaLogoEnum) {
    ChaLogoEnum["ASSASSINS"] = "Assassins.png";
    ChaLogoEnum["BRAHMAS"] = "Brahams.png";
    ChaLogoEnum["FIGHTING_COCKS"] = "Cocks.png";
    ChaLogoEnum["CYCLONES"] = "Cyclones.png";
    ChaLogoEnum["CHY_DESPERADO"] = "Desperado.png";
    ChaLogoEnum["DRAGONS"] = "Dragons.png";
    ChaLogoEnum["FLASHERS"] = "Flashers.png";
    ChaLogoEnum["FREE_AGENT"] = "free_agent.png";
    ChaLogoEnum["GLORY"] = "Glory.png";
    ChaLogoEnum["GOATS"] = "Goats.png";
    ChaLogoEnum["GREEN_JACKETS"] = "GreenJackets.png";
    ChaLogoEnum["HOUND_DOGS"] = "HoundDogs.png";
    ChaLogoEnum["STELLAR_JAYS"] = "jays-large.png";
    ChaLogoEnum["KILLER_BEES"] = "KillerBees.png";
    ChaLogoEnum["MOUNTAINEERS"] = "Mountaineers.png";
    ChaLogoEnum["NORTH_STARS"] = "NorthStars.png";
    ChaLogoEnum["OIL_BARONS"] = "OilBarons.png";
    ChaLogoEnum["PROWLERS"] = "Prowlers.png";
    ChaLogoEnum["SAC_STORM"] = "sac_storm.png";
    ChaLogoEnum["VIKINGS"] = "vikings.png";
    ChaLogoEnum["WOLFPACK"] = "Wolfpack.png";
    ChaLogoEnum["ACES"] = "aces.png";
    ChaLogoEnum["BADGERS"] = "badgers.png";
    ChaLogoEnum["BANDITS"] = "bandits.png";
    ChaLogoEnum["BARONS"] = "barons.png";
    ChaLogoEnum["BEAVERS"] = "beavers.png";
    ChaLogoEnum["CHA_STORM"] = "chastorm.png";
    ChaLogoEnum["CHUPACABRAS"] = "chupacabras.png";
    ChaLogoEnum["COMETS"] = "comets.png";
    ChaLogoEnum["CONQUERERS"] = "conquerers.png";
    ChaLogoEnum["CRIMSONTIDE"] = "crimsontide.png";
    ChaLogoEnum["CRUSH"] = "crush.png";
    ChaLogoEnum["GRAVEDIGGERS"] = "gravediggers.png";
    ChaLogoEnum["HELLCATS"] = "hellcats.png";
    ChaLogoEnum["MIS_INDIANS"] = "indians.png";
    ChaLogoEnum["SAL_INDIANS"] = "indians.png";
    ChaLogoEnum["JOKERS"] = "jokers.png";
    ChaLogoEnum["LAS_DESPERADO"] = "lasdesperado.png";
    ChaLogoEnum["LIONHEARTS"] = "lionheats.png";
    ChaLogoEnum["LOGGERHEADS"] = "loggerheads.png";
    ChaLogoEnum["MUDBUGS"] = "mudbugs.png";
    ChaLogoEnum["OCEANUS"] = "oceanus.png";
    ChaLogoEnum["OUTLAWS"] = "outlaws.png";
    ChaLogoEnum["PREDATORS"] = "predators.png";
    ChaLogoEnum["RAYS"] = "rays.png";
    ChaLogoEnum["REDNECKS"] = "rednecks.png";
    ChaLogoEnum["ROYALS"] = "royals.png";
    ChaLogoEnum["SCHOONERS"] = "schooners.png";
    ChaLogoEnum["SEA_STORM"] = "Storm.png";
    ChaLogoEnum["SURGE"] = "surge.png";
    ChaLogoEnum["THUNDERCATS"] = "thundercats.png";
    ChaLogoEnum["VIPERS"] = "Vipers.png";
    ChaLogoEnum["VOODOO"] = "voodoo.png";
    ChaLogoEnum["WHISKEYJACKS"] = "whiskeyjacks.png";
    ChaLogoEnum["RUSTLERS"] = "rustlers.png";
    ChaLogoEnum["LEAGUE"] = "cha_logo.jpg";
})(ChaLogoEnum || (exports.ChaLogoEnum = ChaLogoEnum = {}));


/***/ }),
/* 102 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(103), exports);


/***/ }),
/* 103 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TeamsEnum = void 0;
var TeamsEnum;
(function (TeamsEnum) {
    TeamsEnum[TeamsEnum["FLASHERS"] = 2] = "FLASHERS";
    TeamsEnum[TeamsEnum["GREEN_JACKETS"] = 3] = "GREEN_JACKETS";
    TeamsEnum[TeamsEnum["CHY_DESPERADO"] = 4] = "CHY_DESPERADO";
    TeamsEnum[TeamsEnum["CYCLONES"] = 5] = "CYCLONES";
    TeamsEnum[TeamsEnum["GLORY"] = 6] = "GLORY";
    TeamsEnum[TeamsEnum["GOATS"] = 7] = "GOATS";
    TeamsEnum[TeamsEnum["MOUNTAINEERS"] = 8] = "MOUNTAINEERS";
    TeamsEnum[TeamsEnum["BRAHMAS"] = 9] = "BRAHMAS";
    TeamsEnum[TeamsEnum["HOUND_DOGS"] = 10] = "HOUND_DOGS";
    TeamsEnum[TeamsEnum["ICE_DRAGONS"] = 11] = "ICE_DRAGONS";
    TeamsEnum[TeamsEnum["NORTH_STARS"] = 12] = "NORTH_STARS";
    TeamsEnum[TeamsEnum["ASSASSINS"] = 13] = "ASSASSINS";
    TeamsEnum[TeamsEnum["OIL_BARONS"] = 14] = "OIL_BARONS";
    TeamsEnum[TeamsEnum["PROWLERS"] = 15] = "PROWLERS";
    TeamsEnum[TeamsEnum["FIGHTING_COCKS"] = 16] = "FIGHTING_COCKS";
    TeamsEnum[TeamsEnum["SEA_STORM"] = 17] = "SEA_STORM";
    TeamsEnum[TeamsEnum["STINGRAYS"] = 18] = "STINGRAYS";
    TeamsEnum[TeamsEnum["KILLER_BEES"] = 19] = "KILLER_BEES";
    TeamsEnum[TeamsEnum["VIPERS"] = 20] = "VIPERS";
    TeamsEnum[TeamsEnum["WOLFPACK"] = 21] = "WOLFPACK";
    TeamsEnum[TeamsEnum["MUDBUGS"] = 22] = "MUDBUGS";
    TeamsEnum[TeamsEnum["CHA_STORM"] = 23] = "CHA_STORM";
    TeamsEnum[TeamsEnum["SURGE"] = 24] = "SURGE";
    TeamsEnum[TeamsEnum["LAS_DESPERADO"] = 25] = "LAS_DESPERADO";
    TeamsEnum[TeamsEnum["OUTLAWS"] = 26] = "OUTLAWS";
    TeamsEnum[TeamsEnum["OCEANUS"] = 27] = "OCEANUS";
    TeamsEnum[TeamsEnum["ACES"] = 28] = "ACES";
    TeamsEnum[TeamsEnum["HONEY_BADGERS"] = 29] = "HONEY_BADGERS";
    TeamsEnum[TeamsEnum["BANDITS"] = 30] = "BANDITS";
    TeamsEnum[TeamsEnum["BARONS"] = 31] = "BARONS";
    TeamsEnum[TeamsEnum["CHUPACABRAS"] = 32] = "CHUPACABRAS";
    TeamsEnum[TeamsEnum["CONQUERERS"] = 33] = "CONQUERERS";
    TeamsEnum[TeamsEnum["CRUSH"] = 34] = "CRUSH";
    TeamsEnum[TeamsEnum["HELLCATS"] = 35] = "HELLCATS";
    TeamsEnum[TeamsEnum["MISS_INDIANS"] = 36] = "MISS_INDIANS";
    TeamsEnum[TeamsEnum["SAL_INDIANS"] = 37] = "SAL_INDIANS";
    TeamsEnum[TeamsEnum["JOKERS"] = 38] = "JOKERS";
    TeamsEnum[TeamsEnum["LIONHEARTS"] = 39] = "LIONHEARTS";
    TeamsEnum[TeamsEnum["LOGGERHEADS"] = 40] = "LOGGERHEADS";
    TeamsEnum[TeamsEnum["PREDATORS"] = 41] = "PREDATORS";
    TeamsEnum[TeamsEnum["REDNECKS"] = 42] = "REDNECKS";
    TeamsEnum[TeamsEnum["ROYALS"] = 43] = "ROYALS";
    TeamsEnum[TeamsEnum["RUSTLERS"] = 44] = "RUSTLERS";
    TeamsEnum[TeamsEnum["SCHOONERS"] = 45] = "SCHOONERS";
    TeamsEnum[TeamsEnum["THUNDERCATS"] = 46] = "THUNDERCATS";
    TeamsEnum[TeamsEnum["VOODOO"] = 47] = "VOODOO";
    TeamsEnum[TeamsEnum["WHISKEYJACKS"] = 48] = "WHISKEYJACKS";
    TeamsEnum[TeamsEnum["CRIMSONTIDE"] = 49] = "CRIMSONTIDE";
    TeamsEnum[TeamsEnum["BEAVERS"] = 50] = "BEAVERS";
    TeamsEnum[TeamsEnum["COMETS"] = 51] = "COMETS";
    TeamsEnum[TeamsEnum["GRAVE_DIGGERS"] = 52] = "GRAVE_DIGGERS";
    TeamsEnum[TeamsEnum["STELLAR_JAYS"] = 53] = "STELLAR_JAYS";
    TeamsEnum[TeamsEnum["FREE_AGENT"] = 54] = "FREE_AGENT";
    TeamsEnum[TeamsEnum["VIKINGS"] = 60] = "VIKINGS";
    TeamsEnum[TeamsEnum["SAC_STORM"] = 61] = "SAC_STORM";
})(TeamsEnum || (exports.TeamsEnum = TeamsEnum = {}));


/***/ }),
/* 104 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(105), exports);


/***/ }),
/* 105 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AwardTypeEnum = void 0;
var AwardTypeEnum;
(function (AwardTypeEnum) {
    AwardTypeEnum[AwardTypeEnum["GM"] = 2] = "GM";
    AwardTypeEnum[AwardTypeEnum["CHAMPION"] = 3] = "CHAMPION";
    AwardTypeEnum[AwardTypeEnum["SEASON"] = 4] = "SEASON";
    AwardTypeEnum[AwardTypeEnum["ROOKIE"] = 5] = "ROOKIE";
    AwardTypeEnum[AwardTypeEnum["SCORER"] = 6] = "SCORER";
    AwardTypeEnum[AwardTypeEnum["GOALIE"] = 7] = "GOALIE";
    AwardTypeEnum[AwardTypeEnum["DEFENSE"] = 8] = "DEFENSE";
})(AwardTypeEnum || (exports.AwardTypeEnum = AwardTypeEnum = {}));


/***/ }),
/* 106 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(107), exports);
tslib_1.__exportStar(__webpack_require__(108), exports);


/***/ }),
/* 107 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConferencesEnum = void 0;
var ConferencesEnum;
(function (ConferencesEnum) {
    ConferencesEnum[ConferencesEnum["EASTERN"] = 2] = "EASTERN";
    ConferencesEnum[ConferencesEnum["WESTERN"] = 3] = "WESTERN";
})(ConferencesEnum || (exports.ConferencesEnum = ConferencesEnum = {}));


/***/ }),
/* 108 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DivisionsEnum = void 0;
var DivisionsEnum;
(function (DivisionsEnum) {
    DivisionsEnum[DivisionsEnum["NORTH_WEST"] = 2] = "NORTH_WEST";
    DivisionsEnum[DivisionsEnum["NORTH_EAST"] = 3] = "NORTH_EAST";
    DivisionsEnum[DivisionsEnum["SOUTH_WEST"] = 4] = "SOUTH_WEST";
    DivisionsEnum[DivisionsEnum["SOUTH_EAST"] = 5] = "SOUTH_EAST";
})(DivisionsEnum || (exports.DivisionsEnum = DivisionsEnum = {}));


/***/ }),
/* 109 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(110), exports);
tslib_1.__exportStar(__webpack_require__(112), exports);


/***/ }),
/* 110 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(111), exports);


/***/ }),
/* 111 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 112 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(113), exports);


/***/ }),
/* 113 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 114 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(115), exports);
tslib_1.__exportStar(__webpack_require__(116), exports);


/***/ }),
/* 115 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiAwardsService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const entities_2 = __webpack_require__(35);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(32);
const typeorm_2 = __webpack_require__(13);
let ApiAwardsService = exports.ApiAwardsService = class ApiAwardsService {
    constructor(repo, awardTypeRepo, playerStatsRepo, goalieStatsRepo, teamStatsRepo) {
        this.repo = repo;
        this.awardTypeRepo = awardTypeRepo;
        this.playerStatsRepo = playerStatsRepo;
        this.goalieStatsRepo = goalieStatsRepo;
        this.teamStatsRepo = teamStatsRepo;
        this.selectUserOptions = {
            id: true,
            display_season: true,
            cha_season: true,
            award_type: {
                display_name: true,
                id: true,
            },
            team_id: {
                id: true,
                city: true,
                nickname: true,
                teamlogo: true,
                teamcolor: true,
            },
            users_id: {
                firstname: true,
                lastname: true,
            },
        };
        this.selectPlayerOptions = {
            id: true,
            display_season: true,
            cha_season: true,
            award_type: {
                display_name: true,
                id: true,
            },
            team_id: {
                city: true,
                nickname: true,
                teamlogo: true,
                teamcolor: true,
            },
            player_id: {
                id: true,
                nhl_id: true,
                firstname: true,
                lastname: true,
            },
            users_id: {
                firstname: true,
                lastname: true,
            },
        };
    }
    async getAll() {
        return await this.repo.find({
            relations: ['player_id', 'award_type', 'team_id', 'users_id'],
            select: {
                id: true,
                display_season: true,
                cha_season: true,
                team_id: {
                    id: true,
                    city: true,
                    nickname: true,
                },
                player_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                },
                award_type: {
                    id: true,
                    display_name: true,
                },
                users_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                },
            },
            order: {
                display_season: 'DESC',
            },
        });
    }
    async updateAwardById(id, attrs) {
        const award = await this.repo.findOneByOrFail({ id });
        if (!award) {
            throw new common_1.NotFoundException('award not found');
        }
        Object.assign(award, attrs);
        return this.repo.save(award);
    }
    async addAward(body) {
        const award = await this.repo.create(body);
        return this.repo.save(award);
    }
    async deleteAward(id) {
        const award = await this.repo.findOneByOrFail({ id });
        if (!award) {
            throw new common_1.NotFoundException('award not found');
        }
        return this.repo.remove(award);
    }
    async getChampions() {
        return await this.repo.find({
            select: this.selectUserOptions,
            relations: ['users_id', 'team_id', 'award_type'],
            where: {
                award_type: {
                    id: entities_2.AwardTypeEnum.CHAMPION,
                },
            },
        });
    }
    async getScorerAwards() {
        const scorers = await this.repo.find({
            select: this.selectPlayerOptions,
            relations: ['users_id', 'team_id', 'player_id', 'award_type'],
            where: {
                award_type: {
                    id: entities_2.AwardTypeEnum.SCORER,
                },
            },
        });
        const scrorersWithStats = await this.setPlayerStats(scorers);
        return scrorersWithStats;
    }
    async getDefenseAwards() {
        const defense = await this.repo.find({
            select: this.selectPlayerOptions,
            relations: ['users_id', 'team_id', 'player_id', 'award_type'],
            where: {
                award_type: {
                    id: entities_2.AwardTypeEnum.DEFENSE,
                },
            },
        });
        const defenseWithStats = await this.setPlayerStats(defense);
        return defenseWithStats;
    }
    async getRookieAwards() {
        const rookies = await this.repo.find({
            select: this.selectPlayerOptions,
            relations: ['users_id', 'team_id', 'player_id', 'award_type'],
            where: {
                award_type: {
                    id: entities_2.AwardTypeEnum.ROOKIE,
                },
            },
        });
        const rookiesWithStats = await this.setPlayerStats(rookies);
        return rookiesWithStats;
    }
    async getGoalieAwards() {
        const goalies = await this.repo.find({
            select: this.selectPlayerOptions,
            relations: ['users_id', 'team_id', 'player_id', 'award_type'],
            where: {
                award_type: {
                    id: entities_2.AwardTypeEnum.GOALIE,
                },
            },
        });
        const goaliesWithStats = await this.setGoalieStats(goalies);
        return goaliesWithStats;
    }
    async getGmAwards() {
        return await this.repo.find({
            select: this.selectUserOptions,
            relations: ['users_id', 'team_id', 'award_type'],
            where: {
                award_type: {
                    id: entities_2.AwardTypeEnum.GM,
                },
            },
        });
    }
    async getSeasonAwards() {
        const seasonAwards = await this.repo.find({
            select: this.selectUserOptions,
            relations: ['users_id', 'team_id', 'award_type'],
            where: {
                award_type: {
                    id: entities_2.AwardTypeEnum.SEASON,
                },
            },
        });
        const seasonAwardsWithStats = await this.setSeasonStats(seasonAwards);
        return seasonAwardsWithStats;
    }
    async getAwardTypes() {
        return await this.awardTypeRepo.find({
            where: {
                id: (0, typeorm_2.Not)(1),
            },
        });
    }
    async setPlayerStats(array) {
        return await Promise.all(array.map(async (item) => ({
            ...item,
            stats: await this.getPlayerStats(item.player_id.id, item.cha_season),
        })));
    }
    async getPlayerStats(playerId, chaSeason) {
        return await this.playerStatsRepo.findOne({
            select: {
                id: true,
                playing_year: true,
                games_played: true,
                goals: true,
                assists: true,
                points: true,
            },
            where: {
                player_id: { id: playerId },
                playing_year: chaSeason,
                season_type: 'Regular',
            },
        });
    }
    async setGoalieStats(array) {
        return await Promise.all(array.map(async (item) => ({
            ...item,
            stats: await this.getGoalieStats(item.player_id.id, item.cha_season),
        })));
    }
    async getGoalieStats(playerId, chaSeason) {
        return await this.goalieStatsRepo.findOne({
            select: {
                id: true,
                player_id: {
                    id: true,
                    nhl_id: true,
                    firstname: true,
                    lastname: true,
                    isgoalie: true,
                    is_protected: true,
                    isactive: true,
                    isdefense: true,
                    isforward: true,
                },
                playing_year: true,
                games_played: true,
                wins: true,
                goals_against_avg: true,
                save_pct: true,
            },
            where: {
                player_id: {
                    id: playerId,
                },
                playing_year: chaSeason,
                season_type: 'Regular',
            },
        });
    }
    async setSeasonStats(array) {
        return await Promise.all(array.map(async (item) => ({
            ...item,
            stats: await this.getSeasonStats(item.team_id.id, item.cha_season),
        })));
    }
    async getSeasonStats(teamId, chaSeason) {
        return await this.teamStatsRepo.findOne({
            select: {
                id: true,
                playing_year: true,
                games_played: true,
                wins: true,
                goals_for: true,
                goals_against: true,
                points: true,
            },
            where: {
                team_id: { id: teamId },
                playing_year: chaSeason,
                season_type: 'Regular',
            },
        });
    }
};
exports.ApiAwardsService = ApiAwardsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Awards_V2)),
    tslib_1.__param(1, (0, typeorm_1.InjectRepository)(entities_1.Award_Type_V2)),
    tslib_1.__param(2, (0, typeorm_1.InjectRepository)(entities_1.Players_Stats_V2)),
    tslib_1.__param(3, (0, typeorm_1.InjectRepository)(entities_1.Goalies_Stats_V2)),
    tslib_1.__param(4, (0, typeorm_1.InjectRepository)(entities_1.Team_Stats_V2)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object, typeof (_d = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _d : Object, typeof (_e = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _e : Object])
], ApiAwardsService);


/***/ }),
/* 116 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiUserAwardsService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(32);
const typeorm_2 = __webpack_require__(13);
let ApiUserAwardsService = exports.ApiUserAwardsService = class ApiUserAwardsService {
    constructor(repo) {
        this.repo = repo;
    }
    async getAwardsByUserId(userId) {
        return await this.repo.find({
            select: {
                id: true,
                display_season: true,
                award_type: {
                    id: true,
                    display_name: true,
                },
                users_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                },
                player_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    nhl_id: true,
                },
                team_id: {
                    id: true,
                    teamlogo: true,
                    teamcolor: true,
                    teamtextcolor: true,
                },
            },
            relations: ['users_id', 'player_id', 'award_type', 'team_id'],
            where: {
                users_id: {
                    id: userId,
                },
            },
            order: {
                display_season: 'DESC',
            },
        });
    }
};
exports.ApiUserAwardsService = ApiUserAwardsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Awards_V2)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ApiUserAwardsService);


/***/ }),
/* 117 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(118), exports);


/***/ }),
/* 118 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AwardsMiddleware = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
let AwardsMiddleware = exports.AwardsMiddleware = class AwardsMiddleware {
    use(req, res, next) {
        console.log('Request Awards...');
        next();
    }
};
exports.AwardsMiddleware = AwardsMiddleware = tslib_1.__decorate([
    (0, common_1.Injectable)()
], AwardsMiddleware);


/***/ }),
/* 119 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(120), exports);


/***/ }),
/* 120 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiUsersModule = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(32);
const controllers_1 = __webpack_require__(121);
const middlewares_1 = __webpack_require__(125);
const services_1 = __webpack_require__(123);
let ApiUsersModule = exports.ApiUsersModule = class ApiUsersModule {
    configure(consumer) {
        consumer.apply(middlewares_1.UserMiddleware).forRoutes('*');
    }
};
exports.ApiUsersModule = ApiUsersModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entities_1.Users_V2])],
        controllers: [controllers_1.UsersController],
        providers: [services_1.UsersService],
    })
], ApiUsersModule);


/***/ }),
/* 121 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(122), exports);


/***/ }),
/* 122 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersController = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
const services_1 = __webpack_require__(123);
const entities_1 = __webpack_require__(35);
let UsersController = exports.UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async getUsers() {
        const users = await this.usersService.getAll();
        if (!users || users.length < 1) {
            throw new common_1.NotFoundException('users not found');
        }
        return users;
    }
    async getCurrentUsers() {
        const users = await this.usersService.getCurrent();
        if (!users || users.length < 1) {
            throw new common_1.NotFoundException('users not found');
        }
        return users;
    }
    async getUserByEmail(param) {
        const user = await this.usersService.findUserByEmail(param.email);
        if (!user) {
            throw new common_1.NotFoundException('user not found');
        }
        return user;
    }
    async getUserById(param) {
        const user = await this.usersService.findUserById(parseInt(param.id));
        if (!user) {
            throw new common_1.NotFoundException('user not found');
        }
        return user;
    }
    updateUserById(param, body) {
        return this.usersService.updateUserById(parseInt(param.id), body);
    }
    addUser(body) {
        return this.usersService.addUser(body);
    }
    deleteUserById(param) {
        return this.usersService.deleteUser(parseInt(param.id));
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], UsersController.prototype, "getUsers", null);
tslib_1.__decorate([
    (0, common_1.Get)('/current'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], UsersController.prototype, "getCurrentUsers", null);
tslib_1.__decorate([
    (0, common_1.Get)('/:email'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], UsersController.prototype, "getUserByEmail", null);
tslib_1.__decorate([
    (0, common_1.Get)('/userId/:id'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], UsersController.prototype, "getUserById", null);
tslib_1.__decorate([
    (0, common_1.Put)('/userId/:id'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], UsersController.prototype, "updateUserById", null);
tslib_1.__decorate([
    (0, common_1.Post)('/add'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_g = typeof entities_1.UserCreateDto !== "undefined" && entities_1.UserCreateDto) === "function" ? _g : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UsersController.prototype, "addUser", null);
tslib_1.__decorate([
    (0, common_1.Delete)('/delete/:id'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UsersController.prototype, "deleteUserById", null);
exports.UsersController = UsersController = tslib_1.__decorate([
    (0, common_1.Controller)('users'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof services_1.UsersService !== "undefined" && services_1.UsersService) === "function" ? _a : Object])
], UsersController);


/***/ }),
/* 123 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(124), exports);


/***/ }),
/* 124 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(32);
const typeorm_2 = __webpack_require__(13);
let UsersService = exports.UsersService = class UsersService {
    constructor(repo) {
        this.repo = repo;
    }
    async findUserByEmail(email) {
        const emailString = email.toLowerCase();
        return await this.repo.findOneByOrFail({ email: emailString });
    }
    async getAll() {
        return await this.repo.find();
    }
    async getCurrent() {
        return await this.repo.find({
            where: {
                isactive: true,
            },
        });
    }
    async findUserById(id) {
        return await this.repo.findOneByOrFail({ id });
    }
    async updateUserById(id, attrs) {
        const user = await this.repo.findOneByOrFail({ id });
        if (!user) {
            throw new common_1.NotFoundException('user not found');
        }
        Object.assign(user, attrs);
        return this.repo.save(user);
    }
    async addUser(body) {
        const user = await this.repo.create(body);
        return this.repo.save(user);
    }
    async deleteUser(id) {
        const user = await this.repo.findOneByOrFail({ id });
        if (!user) {
            throw new common_1.NotFoundException('user not found');
        }
        return this.repo.remove(user);
    }
};
exports.UsersService = UsersService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Users_V2)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], UsersService);


/***/ }),
/* 125 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(126), exports);


/***/ }),
/* 126 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserMiddleware = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
let UserMiddleware = exports.UserMiddleware = class UserMiddleware {
    use(req, res, next) {
        console.log('Request User...');
        next();
    }
};
exports.UserMiddleware = UserMiddleware = tslib_1.__decorate([
    (0, common_1.Injectable)()
], UserMiddleware);


/***/ }),
/* 127 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(128), exports);


/***/ }),
/* 128 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiDraftTableModule = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(32);
const controllers_1 = __webpack_require__(129);
const middlewares_1 = __webpack_require__(133);
const services_1 = __webpack_require__(131);
let ApiDraftTableModule = exports.ApiDraftTableModule = class ApiDraftTableModule {
    configure(consumer) {
        consumer.apply(middlewares_1.DraftTableMiddleware).forRoutes('*');
    }
};
exports.ApiDraftTableModule = ApiDraftTableModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entities_1.Draft_Order_V2, entities_1.Team_Stats_V2])],
        controllers: [controllers_1.DraftTableController],
        providers: [services_1.ApiDraftTableService],
    })
], ApiDraftTableModule);


/***/ }),
/* 129 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(130), exports);


/***/ }),
/* 130 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DraftTableController = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
const services_1 = __webpack_require__(131);
let DraftTableController = exports.DraftTableController = class DraftTableController {
    constructor(draftTableService) {
        this.draftTableService = draftTableService;
    }
    async getDraftTable(param) {
        const teams = await this.draftTableService.getAll(param.draft_year);
        if (!teams || teams.length < 1) {
            throw new common_1.NotFoundException('teams not found');
        }
        return teams;
    }
    updateTableById(param, body) {
        return this.draftTableService.updateTableById(parseInt(param.id), body);
    }
    async getDraftTableByYearByStandings(param) {
        const draftTable = await this.draftTableService.getDraftTableByYearByStandings(param.draft_year, param.playing_year);
        if (!draftTable || draftTable.length < 1) {
            throw new common_1.NotFoundException('Draft Table not found');
        }
        return draftTable;
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('/:draft_year'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], DraftTableController.prototype, "getDraftTable", null);
tslib_1.__decorate([
    (0, common_1.Put)('/:id'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], DraftTableController.prototype, "updateTableById", null);
tslib_1.__decorate([
    (0, common_1.Get)('/:draft_year/:playing_year'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], DraftTableController.prototype, "getDraftTableByYearByStandings", null);
exports.DraftTableController = DraftTableController = tslib_1.__decorate([
    (0, common_1.Controller)('draft-table'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof services_1.ApiDraftTableService !== "undefined" && services_1.ApiDraftTableService) === "function" ? _a : Object])
], DraftTableController);


/***/ }),
/* 131 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(132), exports);


/***/ }),
/* 132 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiDraftTableService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(32);
const typeorm_2 = __webpack_require__(13);
let ApiDraftTableService = exports.ApiDraftTableService = class ApiDraftTableService {
    constructor(repo, teamStatsRepo) {
        this.repo = repo;
        this.teamStatsRepo = teamStatsRepo;
        this.getDraftByStandings = (data) => {
            return data
                .sort((a, b) => {
                if (b.stats.points === a.stats.points) {
                    if (b.stats.wins === a.stats.wins) {
                        if (b.stats.goals_for - b.stats.goals_against ===
                            a.stats.goals_for - a.stats.goals_against) {
                            return b.stats.goals_for - a.stats.goals_for;
                        }
                        else {
                            return (b.stats.goals_for -
                                b.stats.goals_against -
                                (a.stats.goals_for - a.stats.goals_against));
                        }
                    }
                    else {
                        return b.stats.wins - a.stats.wins;
                    }
                }
                else {
                    return b.stats.points - a.stats.points;
                }
            })
                .reverse();
        };
    }
    async getAll(draftYear) {
        return await this.repo.find({
            relations: ['team_id'],
            select: {
                team_id: {
                    id: true,
                    shortname: true,
                    city: true,
                    nickname: true,
                    teamlogo: true,
                },
            },
            where: {
                draft_year: draftYear,
            },
        });
    }
    async updateTableById(id, attrs) {
        const item = await this.repo.findOneByOrFail({ id });
        if (!item) {
            throw new common_1.NotFoundException('item not found');
        }
        Object.assign(item, attrs);
        return this.repo.save(item);
    }
    async getDraftTableByYearByStandings(draftYear, playingYear) {
        const draftTable = await this.repo.find({
            relations: ['team_id'],
            where: {
                draft_year: draftYear,
            },
            select: {
                team_id: {
                    id: true,
                    shortname: true,
                    city: true,
                    nickname: true,
                    teamlogo: true,
                },
            },
        });
        const draftTableWithStandings = await this.setTableStandings(draftTable, playingYear);
        const draftTableByStandings = this.getDraftByStandings(draftTableWithStandings);
        return draftTableByStandings;
    }
    async setTableStandings(array, playingYear) {
        return await Promise.all(array.map(async (item) => ({
            ...item,
            stats: await this.getTeamStats(item.team_id.id, playingYear),
        })));
    }
    async getTeamStats(teamId, playingYear) {
        return await this.teamStatsRepo.findOne({
            relations: ['team_id'],
            select: {
                id: true,
                wins: true,
                goals_for: true,
                goals_against: true,
                points: true,
            },
            where: {
                team_id: { id: teamId },
                playing_year: playingYear,
                season_type: 'Regular',
            },
        });
    }
};
exports.ApiDraftTableService = ApiDraftTableService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Draft_Order_V2)),
    tslib_1.__param(1, (0, typeorm_1.InjectRepository)(entities_1.Team_Stats_V2)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], ApiDraftTableService);


/***/ }),
/* 133 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(134), exports);


/***/ }),
/* 134 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DraftTableMiddleware = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
let DraftTableMiddleware = exports.DraftTableMiddleware = class DraftTableMiddleware {
    use(req, res, next) {
        console.log('Request Draft Table...');
        next();
    }
};
exports.DraftTableMiddleware = DraftTableMiddleware = tslib_1.__decorate([
    (0, common_1.Injectable)()
], DraftTableMiddleware);


/***/ }),
/* 135 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(136), exports);


/***/ }),
/* 136 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiEntryDraftModule = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(32);
const controllers_1 = __webpack_require__(137);
const middlewares_1 = __webpack_require__(141);
const services_1 = __webpack_require__(139);
let ApiEntryDraftModule = exports.ApiEntryDraftModule = class ApiEntryDraftModule {
    configure(consumer) {
        consumer.apply(middlewares_1.EntryDraftMiddleware).forRoutes('*');
    }
};
exports.ApiEntryDraftModule = ApiEntryDraftModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entities_1.Drafts_V2])],
        controllers: [controllers_1.EntryDraftController],
        providers: [services_1.ApiEntryDraftService],
    })
], ApiEntryDraftModule);


/***/ }),
/* 137 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(138), exports);


/***/ }),
/* 138 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EntryDraftController = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(35);
const common_1 = __webpack_require__(1);
const services_1 = __webpack_require__(139);
let EntryDraftController = exports.EntryDraftController = class EntryDraftController {
    constructor(draftService) {
        this.draftService = draftService;
    }
    async getAll() {
        const entries = await this.draftService.getAll();
        if (!entries || entries.length < 1) {
            throw new common_1.NotFoundException('Entry Draft Table not found');
        }
        return entries;
    }
    updatePickById(param, body) {
        return this.draftService.updatePickById(parseInt(param.id), body);
    }
    addPick(body) {
        return this.draftService.addPick(body);
    }
    deletePick(param) {
        return this.draftService.deletePick(parseInt(param.id));
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('/ordered'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], EntryDraftController.prototype, "getAll", null);
tslib_1.__decorate([
    (0, common_1.Put)('/:id'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], EntryDraftController.prototype, "updatePickById", null);
tslib_1.__decorate([
    (0, common_1.Post)('/add'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof entities_1.CreateDraftPickDto !== "undefined" && entities_1.CreateDraftPickDto) === "function" ? _d : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], EntryDraftController.prototype, "addPick", null);
tslib_1.__decorate([
    (0, common_1.Delete)('/:id'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], EntryDraftController.prototype, "deletePick", null);
exports.EntryDraftController = EntryDraftController = tslib_1.__decorate([
    (0, common_1.Controller)('entry-draft'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof services_1.ApiEntryDraftService !== "undefined" && services_1.ApiEntryDraftService) === "function" ? _a : Object])
], EntryDraftController);


/***/ }),
/* 139 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(140), exports);


/***/ }),
/* 140 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiEntryDraftService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(32);
const typeorm_2 = __webpack_require__(13);
let ApiEntryDraftService = exports.ApiEntryDraftService = class ApiEntryDraftService {
    constructor(repo) {
        this.repo = repo;
    }
    async getAll() {
        const draftTable = await this.repo.find({
            relations: ['team_id', 'player_id', 'pick_team_id'],
            select: {
                team_id: {
                    id: true,
                    city: true,
                    nickname: true,
                    teamlogo: true,
                },
                player_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    nhl_id: true,
                },
                pick_team_id: {
                    id: true,
                    city: true,
                    nickname: true,
                    teamlogo: true,
                },
            },
            order: {
                draft_year: 'DESC',
                draft_round: 'ASC',
                draft_overall: 'ASC',
            },
        });
        return draftTable;
    }
    async updatePickById(id, attrs) {
        const pick = await this.repo.findOneByOrFail({ id });
        if (!pick) {
            throw new common_1.NotFoundException('player not found');
        }
        Object.assign(pick, attrs);
        return this.repo.save(pick);
    }
    async addPick(body) {
        const pick = await this.repo.create(body);
        return this.repo.save(pick);
    }
    async deletePick(id) {
        const pick = await this.repo.findOneByOrFail({ id });
        if (!pick) {
            throw new common_1.NotFoundException('player not found');
        }
        return this.repo.remove(pick);
    }
};
exports.ApiEntryDraftService = ApiEntryDraftService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Drafts_V2)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ApiEntryDraftService);


/***/ }),
/* 141 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(142), exports);


/***/ }),
/* 142 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EntryDraftMiddleware = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
let EntryDraftMiddleware = exports.EntryDraftMiddleware = class EntryDraftMiddleware {
    use(req, res, next) {
        console.log('Request Entry Draft Table...');
        next();
    }
};
exports.EntryDraftMiddleware = EntryDraftMiddleware = tslib_1.__decorate([
    (0, common_1.Injectable)()
], EntryDraftMiddleware);


/***/ }),
/* 143 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(144), exports);


/***/ }),
/* 144 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiGoalieStatsModule = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(32);
const controllers_1 = __webpack_require__(145);
const middlewares_1 = __webpack_require__(152);
const services_1 = __webpack_require__(147);
let ApiGoalieStatsModule = exports.ApiGoalieStatsModule = class ApiGoalieStatsModule {
    configure(consumer) {
        consumer.apply(middlewares_1.GoalieStatsMiddleware).forRoutes('*');
    }
};
exports.ApiGoalieStatsModule = ApiGoalieStatsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entities_1.Goalies_Stats_V2, entities_1.Teams_V2])],
        controllers: [controllers_1.GoalieStatsController],
        providers: [
            services_1.ApiGoalieStatsService,
            services_1.ApiGoalieStatsLeadersService,
            services_1.ApiGoalieAllTimeStatsService,
            services_1.ApiUserGoalieStatsService,
        ],
    })
], ApiGoalieStatsModule);


/***/ }),
/* 145 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(146), exports);


/***/ }),
/* 146 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GoalieStatsController = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
const services_1 = __webpack_require__(147);
let GoalieStatsController = exports.GoalieStatsController = class GoalieStatsController {
    constructor(goalieStatsLeadersService, goalieStatsService, goalieAllTimeStatsService, userGoalieStatsService) {
        this.goalieStatsLeadersService = goalieStatsLeadersService;
        this.goalieStatsService = goalieStatsService;
        this.goalieAllTimeStatsService = goalieAllTimeStatsService;
        this.userGoalieStatsService = userGoalieStatsService;
    }
    async getAllPlayers(param) {
        const players = await this.goalieStatsService.getAll(param.season);
        if (!players || players.length < 1) {
            throw new common_1.NotFoundException('players not found');
        }
        return players;
    }
    updatePlayerById(param, body) {
        return this.goalieStatsService.updateGoalieById(parseInt(param.id), param.season, body);
    }
    deletePlayer(param) {
        return this.goalieStatsService.deleteGoalie(parseInt(param.id), param.season);
    }
    async getGoalieStatsLeaders(param) {
        const stats = await this.goalieStatsLeadersService.getGoalieStatsLeaders(param.season, param.seasonType, param.minGames);
        if (!stats) {
            throw new common_1.NotFoundException('Player Stats not found');
        }
        return stats;
    }
    async getAllGoalieStats(param) {
        const stats = await this.goalieStatsService.getAllGoalieStats(param.season, param.seasonType);
        if (!stats || stats.length < 1) {
            throw new common_1.NotFoundException('Player Stats not found');
        }
        return stats;
    }
    async getGoalieStatsByPlayerId(param) {
        const stats = await this.goalieStatsService.getGoalieStatsByPlayerId(param.season, param.seasonType, param.playerId);
        if (!stats || stats.length < 1) {
            throw new common_1.NotFoundException('Player Stats not found');
        }
        return stats;
    }
    async getAllTimePlayerStatsBySeasonByType(param) {
        const stats = await this.goalieAllTimeStatsService.getAllTimeGoalieStatsBySeasonByType(param.seasonType);
        if (!stats || stats.length < 1) {
            throw new common_1.NotFoundException('Goalie Stats not found');
        }
        return stats;
    }
    async getAllTimeGoalieStatsSummedBySeasonByType(param) {
        const stats = await this.goalieAllTimeStatsService.getAllTimeGoalieStatsSummedBySeasonByType(param.seasonType);
        if (!stats || stats.length < 1) {
            throw new common_1.NotFoundException('Goalie Stats not found');
        }
        return stats;
    }
    async getTeamGaoliesStatsBySeasonType(param) {
        const record = await this.userGoalieStatsService.getUserGoaliesStatsBySeasonType(param.userId, param.seasonType);
        if (!record) {
            throw new common_1.NotFoundException('Team Goalies Stats not found');
        }
        return record;
    }
    async getTeamGoaliesStatsAllTimeBySeasonType(param) {
        const record = await this.userGoalieStatsService.getUserGoaliesStatsAllTimeBySeasonType(param.userId, param.seasonType);
        if (!record) {
            throw new common_1.NotFoundException('Team Goalies Stats not found');
        }
        return record;
    }
    async getTeamPlayersByTeamName(param) {
        const record = await this.userGoalieStatsService.getTeamPlayersByTeamName(param.teamName, param.season);
        if (!record) {
            throw new common_1.NotFoundException('Team Players Stats not found');
        }
        return record;
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('/:season'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], GoalieStatsController.prototype, "getAllPlayers", null);
tslib_1.__decorate([
    (0, common_1.Put)('/:season/:id'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], GoalieStatsController.prototype, "updatePlayerById", null);
tslib_1.__decorate([
    (0, common_1.Delete)('/:season/:id'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], GoalieStatsController.prototype, "deletePlayer", null);
tslib_1.__decorate([
    (0, common_1.Get)('/leaders/:season/:seasonType/:minGames'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], GoalieStatsController.prototype, "getGoalieStatsLeaders", null);
tslib_1.__decorate([
    (0, common_1.Get)('/all/:season/:seasonType'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], GoalieStatsController.prototype, "getAllGoalieStats", null);
tslib_1.__decorate([
    (0, common_1.Get)('/current/:season/:seasonType/:playerId'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], GoalieStatsController.prototype, "getGoalieStatsByPlayerId", null);
tslib_1.__decorate([
    (0, common_1.Get)('/history/season/:seasonType'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_k = typeof Promise !== "undefined" && Promise) === "function" ? _k : Object)
], GoalieStatsController.prototype, "getAllTimePlayerStatsBySeasonByType", null);
tslib_1.__decorate([
    (0, common_1.Get)('/history/all-time/:seasonType'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_l = typeof Promise !== "undefined" && Promise) === "function" ? _l : Object)
], GoalieStatsController.prototype, "getAllTimeGoalieStatsSummedBySeasonByType", null);
tslib_1.__decorate([
    (0, common_1.Get)('/user/:userId/history/:seasonType'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_m = typeof Promise !== "undefined" && Promise) === "function" ? _m : Object)
], GoalieStatsController.prototype, "getTeamGaoliesStatsBySeasonType", null);
tslib_1.__decorate([
    (0, common_1.Get)('/user/:userId/history/all/:seasonType'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_o = typeof Promise !== "undefined" && Promise) === "function" ? _o : Object)
], GoalieStatsController.prototype, "getTeamGoaliesStatsAllTimeBySeasonType", null);
tslib_1.__decorate([
    (0, common_1.Get)('/team/:teamName/:season'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_p = typeof Promise !== "undefined" && Promise) === "function" ? _p : Object)
], GoalieStatsController.prototype, "getTeamPlayersByTeamName", null);
exports.GoalieStatsController = GoalieStatsController = tslib_1.__decorate([
    (0, common_1.Controller)('goalie-stats'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof services_1.ApiGoalieStatsLeadersService !== "undefined" && services_1.ApiGoalieStatsLeadersService) === "function" ? _a : Object, typeof (_b = typeof services_1.ApiGoalieStatsService !== "undefined" && services_1.ApiGoalieStatsService) === "function" ? _b : Object, typeof (_c = typeof services_1.ApiGoalieAllTimeStatsService !== "undefined" && services_1.ApiGoalieAllTimeStatsService) === "function" ? _c : Object, typeof (_d = typeof services_1.ApiUserGoalieStatsService !== "undefined" && services_1.ApiUserGoalieStatsService) === "function" ? _d : Object])
], GoalieStatsController);


/***/ }),
/* 147 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(148), exports);
tslib_1.__exportStar(__webpack_require__(149), exports);
tslib_1.__exportStar(__webpack_require__(150), exports);
tslib_1.__exportStar(__webpack_require__(151), exports);


/***/ }),
/* 148 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiGoalieStatsLeadersService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(32);
const typeorm_2 = __webpack_require__(13);
let ApiGoalieStatsLeadersService = exports.ApiGoalieStatsLeadersService = class ApiGoalieStatsLeadersService {
    constructor(repo, teamInfoRepo) {
        this.repo = repo;
        this.teamInfoRepo = teamInfoRepo;
    }
    async getGoalieStatsLeaders(season, seasonType, minGames) {
        const shotsFacedLeaders = await this.getShotsFacedLeaders(season, seasonType, minGames);
        const gaaLeaders = await this.getGaaLeaders(season, seasonType, minGames);
        const savePctLeaders = await this.getSavePctLeaders(season, seasonType, minGames);
        const shutoutsLeaders = await this.getShutoutLeaders(season, seasonType);
        const winsLeaders = await this.getWinsLeaders(season, seasonType);
        return {
            shotsFaced: shotsFacedLeaders,
            gaa: gaaLeaders,
            savePct: savePctLeaders,
            shutouts: shutoutsLeaders,
            wins: winsLeaders,
        };
    }
    async getShotsFacedLeaders(season, seasonType, minGames) {
        const shotsFacedLeaders = await this.repo.find({
            select: {
                id: true,
                shots_for: true,
                team_name: true,
                player_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    nhl_id: true,
                    isgoalie: true,
                },
            },
            relations: {
                player_id: true,
            },
            where: {
                playing_year: season,
                season_type: seasonType,
                games_played: (0, typeorm_2.MoreThanOrEqual)(Number(minGames)),
            },
            order: {
                shots_for: 'DESC',
            },
            take: 10,
        });
        const shotsFacedLeadersWithTeamInfo = await this.setTeamInfo(shotsFacedLeaders);
        return shotsFacedLeadersWithTeamInfo;
    }
    async getGaaLeaders(season, seasonType, minGames) {
        const gaaLeaders = await this.repo.find({
            select: {
                id: true,
                goals_against_avg: true,
                team_name: true,
                player_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    nhl_id: true,
                    isgoalie: true,
                },
            },
            relations: {
                player_id: true,
            },
            where: {
                playing_year: season,
                season_type: seasonType,
                games_played: (0, typeorm_2.MoreThanOrEqual)(Number(minGames)),
            },
            order: {
                goals_against_avg: 'ASC',
            },
            take: 10,
        });
        const gaaLeadersWithTeamInfo = await this.setTeamInfo(gaaLeaders);
        return gaaLeadersWithTeamInfo;
    }
    async getSavePctLeaders(season, seasonType, minGames) {
        const savePctLeaders = await this.repo.find({
            select: {
                id: true,
                save_pct: true,
                team_name: true,
                player_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    nhl_id: true,
                    isgoalie: true,
                },
            },
            relations: {
                player_id: true,
            },
            where: {
                playing_year: season,
                season_type: seasonType,
                games_played: (0, typeorm_2.MoreThanOrEqual)(Number(minGames)),
            },
            order: {
                save_pct: 'DESC',
            },
            take: 10,
        });
        const savePctLeadersWithTeamInfo = await this.setTeamInfo(savePctLeaders);
        return savePctLeadersWithTeamInfo;
    }
    async getShutoutLeaders(season, seasonType) {
        const shutoutLeaders = await this.repo.find({
            select: {
                id: true,
                shutouts: true,
                team_name: true,
                player_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    nhl_id: true,
                    isgoalie: true,
                },
            },
            relations: {
                player_id: true,
            },
            where: {
                playing_year: season,
                season_type: seasonType,
            },
            order: {
                shutouts: 'DESC',
            },
            take: 10,
        });
        const shutoutLeadersWithTeamInfo = await this.setTeamInfo(shutoutLeaders);
        return shutoutLeadersWithTeamInfo;
    }
    async getWinsLeaders(season, seasonType) {
        const winLeaders = await this.repo.find({
            select: {
                id: true,
                wins: true,
                team_name: true,
                player_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    nhl_id: true,
                    isgoalie: true,
                },
            },
            relations: {
                player_id: true,
            },
            where: {
                playing_year: season,
                season_type: seasonType,
            },
            order: {
                wins: 'DESC',
            },
            take: 10,
        });
        const winLeadersWithTeamInfo = await this.setTeamInfo(winLeaders);
        return winLeadersWithTeamInfo;
    }
    async setTeamInfo(array) {
        return await Promise.all(array.map(async (item) => ({
            ...item,
            teamInfo: await this.getTeamInfo(item.team_name),
        })));
    }
    async getTeamInfo(teamName) {
        return await this.teamInfoRepo.findOne({
            select: {
                id: true,
                city: true,
                teamlogo: true,
                nickname: true,
            },
            where: {
                shortname: teamName,
            },
        });
    }
};
exports.ApiGoalieStatsLeadersService = ApiGoalieStatsLeadersService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Goalies_Stats_V2)),
    tslib_1.__param(1, (0, typeorm_1.InjectRepository)(entities_1.Teams_V2)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], ApiGoalieStatsLeadersService);


/***/ }),
/* 149 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiGoalieStatsService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(32);
const typeorm_2 = __webpack_require__(13);
let ApiGoalieStatsService = exports.ApiGoalieStatsService = class ApiGoalieStatsService {
    constructor(repo, teamInfoRepo) {
        this.repo = repo;
        this.teamInfoRepo = teamInfoRepo;
    }
    async getAll(season) {
        const players = await this.repo.find({
            where: {
                playing_year: season,
            },
        });
        const playersWithTeamInfo = this.setTeamInfo(players);
        return playersWithTeamInfo;
    }
    async updateGoalieById(id, season, attrs) {
        const player = await this.repo.findOneByOrFail({
            player_id: {
                id: id,
            },
            playing_year: season,
        });
        if (!player) {
            throw new common_1.NotFoundException('goalie not found');
        }
        Object.assign(player, attrs);
        return this.repo.save(player);
    }
    async deleteGoalie(id, season) {
        const player = await this.repo.findOneByOrFail({
            id,
            playing_year: season,
        });
        if (!player) {
            throw new common_1.NotFoundException('goalie not found');
        }
        return this.repo.remove(player);
    }
    async getAllGoalieStats(season, seasonType) {
        const allGoalieStats = await this.repo.find({
            select: {
                id: true,
                games_played: true,
                minutes_played: true,
                goals_against_avg: true,
                wins: true,
                loss: true,
                ties: true,
                en_goals: true,
                shutouts: true,
                goals_against: true,
                saves: true,
                shots_for: true,
                save_pct: true,
                goals: true,
                assists: true,
                points: true,
                penalty_minutes: true,
                pass_pct: true,
                team_name: true,
                player_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    nhl_id: true,
                    isgoalie: true,
                },
            },
            relations: {
                player_id: true,
            },
            where: {
                playing_year: season,
                season_type: seasonType,
            },
            order: {
                wins: 'DESC',
            },
        });
        const goalieStatsWithTeamInfo = await this.setTeamInfo(allGoalieStats);
        const goalieStatsWithTeamInfoConverted = await this.convertStats(goalieStatsWithTeamInfo);
        return goalieStatsWithTeamInfoConverted;
    }
    async getGoalieStatsByPlayerId(season, seasonType, playerId) {
        const allGoalieStats = await this.repo.find({
            select: {
                id: true,
                games_played: true,
                minutes_played: true,
                goals_against_avg: true,
                wins: true,
                loss: true,
                ties: true,
                en_goals: true,
                shutouts: true,
                goals_against: true,
                saves: true,
                shots_for: true,
                save_pct: true,
                goals: true,
                assists: true,
                points: true,
                penalty_minutes: true,
                pass_pct: true,
                team_name: true,
                player_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    nhl_id: true,
                    isgoalie: true,
                },
            },
            relations: {
                player_id: true,
            },
            where: {
                playing_year: season,
                season_type: seasonType,
                player_id: {
                    id: playerId,
                },
            },
            order: {
                wins: 'DESC',
            },
        });
        const goalieStatsWithTeamInfo = await this.setTeamInfo(allGoalieStats);
        const goalieStatsWithTeamInfoConverted = await this.convertStats(goalieStatsWithTeamInfo);
        return goalieStatsWithTeamInfoConverted;
    }
    async setTeamInfo(array) {
        return await Promise.all(array.map(async (item) => ({
            ...item,
            teamInfo: await this.getTeamInfo(item.team_name),
        })));
    }
    async getTeamInfo(teamName) {
        return await this.teamInfoRepo.findOne({
            select: {
                id: true,
                city: true,
                teamlogo: true,
                nickname: true,
                shortname: true,
            },
            where: {
                shortname: teamName,
            },
        });
    }
    async convertStats(array) {
        return await Promise.all(array.map((stat) => ({
            ...stat,
            games_played: Number(stat.games_played),
            minutes_played: Number(stat.minutes_played),
            goals_against_avg: Number(Number(stat.goals_against_avg).toFixed(2)),
            wins: Number(stat.wins),
            loss: Number(stat.loss),
            ties: Number(stat.ties),
            en_goals: Number(stat.en_goals),
            shutouts: Number(stat.shutouts),
            goals_against: Number(stat.goals_against),
            saves: Number(stat.saves),
            shots_for: Number(stat.shots_for),
            save_pct: Number(Number(stat.save_pct).toFixed(3)),
            goals: Number(stat.goals),
            assists: Number(stat.assists),
            points: Number(stat.points),
            penalty_minutes: Number(stat.penalty_minutes),
            pass_pct: Number(stat.pass_pct),
        })));
    }
};
exports.ApiGoalieStatsService = ApiGoalieStatsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Goalies_Stats_V2)),
    tslib_1.__param(1, (0, typeorm_1.InjectRepository)(entities_1.Teams_V2)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], ApiGoalieStatsService);


/***/ }),
/* 150 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiGoalieAllTimeStatsService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(32);
const typeorm_2 = __webpack_require__(13);
let ApiGoalieAllTimeStatsService = exports.ApiGoalieAllTimeStatsService = class ApiGoalieAllTimeStatsService {
    constructor(repo, teamInfoRepo, dataSource) {
        this.repo = repo;
        this.teamInfoRepo = teamInfoRepo;
        this.dataSource = dataSource;
    }
    async getAllTimeGoalieStatsBySeasonByType(seasonType) {
        const allStats = await this.repo.find({
            select: {
                id: true,
                team_name: true,
                playing_year: true,
                season_type: true,
                games_played: true,
                minutes_played: true,
                goals_against_avg: true,
                wins: true,
                loss: true,
                ties: true,
                shutouts: true,
                goals_against: true,
                saves: true,
                shots_for: true,
                save_pct: true,
                goals: true,
                assists: true,
                points: true,
                penalty_minutes: true,
                player_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    nhl_id: true,
                    isdefense: true,
                    isforward: true,
                },
            },
            relations: ['player_id'],
            where: {
                season_type: seasonType,
                games_played: (0, typeorm_2.MoreThan)(0),
            },
            order: {
                wins: 'DESC',
            },
        });
        const allStatsWithTeamInfo = await this.setTeamInfo(allStats);
        const allStatsWithTeamInfoConverted = await this.convertStats(allStatsWithTeamInfo, false);
        return allStatsWithTeamInfoConverted;
    }
    async getAllTimeGoalieStatsSummedBySeasonByType(seasonType) {
        const result = await this.dataSource.query(`select
      b.firstname as firstname,
      b.lastname as lastname,
      b.isgoalie as isgoalie,
      b.nhl_id as nhl_id,
      a.player_id as player_id,
      a.season_type as season_type, 
      sum(games_played) as games_played, 
      sum(wins) as wins, 
      sum(loss) as loss, 
      sum(ties) as ties, 
      sum(minutes_played) as minutes_played, 
      sum(en_goals) as en_goals, 
      sum(shutouts) as shutouts, 
      sum(goals_against) as goals_against, 
      sum(saves) as saves, 
      sum(shots_for) as shots_for, 
      sum(goals) as goals, 
      sum(assists) as assists, 
      sum(points) as points, 
      sum(penalty_minutes) as penalty_minutes
      from
      goalies_stats_v2 as a
      left join players_v2 as b
      on b.id = a.player_id
      where (a.player_id = b.id
      and
      a.games_played > '0'
      and
      a.season_type = '${seasonType}')
      group by b.firstname, b.lastname, b.isgoalie, b.nhl_id, a.player_id, a.season_type
      order by wins DESC`);
        const allTimeStatsConverted = await this.convertStats(result, true);
        return allTimeStatsConverted;
    }
    async setTeamInfo(array) {
        return await Promise.all(array.map(async (item) => ({
            ...item,
            teamInfo: await this.getTeamInfo(item.team_name),
        })));
    }
    async getTeamInfo(teamName) {
        return await this.teamInfoRepo.findOne({
            select: {
                id: true,
                city: true,
                teamlogo: true,
                nickname: true,
            },
            where: {
                shortname: teamName,
            },
        });
    }
    async convertStats(array, raw) {
        return await Promise.all(array.map((stat) => ({
            playing_year: stat.playing_year,
            season_type: stat.season_type,
            teamInfo: !raw ? stat['teamInfo'] : null,
            player_id: !raw
                ? stat.player_id
                : {
                    id: stat['player_id'],
                    firstname: stat['firstname'],
                    lastname: stat['lastname'],
                    nhl_id: stat['nhl_id'],
                    isactive: null,
                    isgoalie: stat['isgoalie'],
                    isdefense: null,
                    isforward: null,
                    is_protected: null,
                },
            games_played: Number(stat.games_played),
            minutes_played: Number(stat.minutes_played),
            goals_against_avg: !raw
                ? Number(Number(stat.goals_against_avg).toFixed(2))
                : Number(((Number(stat.goals_against) * 60) /
                    Number(stat.minutes_played)).toFixed(2)),
            wins: Number(stat.wins),
            loss: Number(stat.loss),
            ties: Number(stat.ties),
            shutouts: Number(stat.shutouts),
            goals_against: Number(stat.goals_against),
            saves: Number(stat.saves),
            shots_for: Number(stat.shots_for),
            save_pct: !raw
                ? Number(Number(stat.save_pct).toFixed(3))
                : Number((Number(stat.saves) / Number(stat.shots_for)).toFixed(3)),
            goals: Number(stat.goals),
            assists: Number(stat.assists),
            points: Number(stat.points),
            penalty_minutes: Number(stat.penalty_minutes),
        })));
    }
};
exports.ApiGoalieAllTimeStatsService = ApiGoalieAllTimeStatsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Goalies_Stats_V2)),
    tslib_1.__param(1, (0, typeorm_1.InjectRepository)(entities_1.Teams_V2)),
    tslib_1.__param(2, (0, typeorm_1.InjectDataSource)()),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.DataSource !== "undefined" && typeorm_2.DataSource) === "function" ? _c : Object])
], ApiGoalieAllTimeStatsService);


/***/ }),
/* 151 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiUserGoalieStatsService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(32);
const typeorm_2 = __webpack_require__(13);
let ApiUserGoalieStatsService = exports.ApiUserGoalieStatsService = class ApiUserGoalieStatsService {
    constructor(repo, teamInfoRepo, dataSource) {
        this.repo = repo;
        this.teamInfoRepo = teamInfoRepo;
        this.dataSource = dataSource;
    }
    async getUserGoaliesStatsBySeasonType(userId, seasonType) {
        const userTeams = await this.teamInfoRepo.findBy({ users_id: userId });
        const userTeamsWithGoalieStats = await this.setGoalieStats(userTeams, seasonType);
        const userTeamsWithGoaliesStatsConverted = await this.setConvertedGoaliesStats(userTeamsWithGoalieStats, false);
        return userTeamsWithGoaliesStatsConverted;
    }
    async getUserGoaliesStatsAllTimeBySeasonType(userId, seasonType) {
        const userTeams = await this.teamInfoRepo.findBy({ users_id: userId });
        const userTeamsWithGoalieStats = await this.setGoalieAllTimeStats(userTeams, seasonType);
        const userTeamsWithGoaliesStatsConverted = await this.setConvertedGoaliesStats(userTeamsWithGoalieStats, true);
        return userTeamsWithGoaliesStatsConverted;
    }
    async getTeamPlayersByTeamName(teamName, season) {
        return await this.repo.find({
            select: {
                player_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                },
            },
            where: {
                team_name: teamName,
                playing_year: season,
                season_type: 'Regular',
            },
        });
    }
    async setGoalieStats(array, seasonType) {
        return await Promise.all(array.map(async (item) => ({
            ...item,
            goalieStats: await this.getGoalieStats(item.shortname, seasonType),
        })));
    }
    async setGoalieAllTimeStats(array, seasonType) {
        return await Promise.all(array.map(async (item) => ({
            ...item,
            goalieStats: await this.getGoalieAllTimeStats(item.shortname, seasonType),
        })));
    }
    async getGoalieAllTimeStats(teamShortName, seasonType) {
        return await this.dataSource.query(`select
      b.firstname as firstname,
      b.lastname as lastname,
      b.isgoalie as isgoalie,
      b.nhl_id as nhl_id,
      a.player_id as player_id,
      a.season_type as season_type, 
      a.team_name as team_name,
      sum(games_played) as games_played, 
      sum(wins) as wins, 
      sum(loss) as loss, 
      sum(ties) as ties, 
      sum(minutes_played) as minutes_played, 
      sum(en_goals) as en_goals, 
      sum(shutouts) as shutouts, 
      sum(goals_against) as goals_against, 
      sum(saves) as saves, 
      sum(shots_for) as shots_for, 
      sum(goals) as goals, 
      sum(assists) as assists, 
      sum(points) as points, 
      sum(penalty_minutes) as penalty_minutes
      from
      goalies_stats_v2 as a
      left join players_v2 as b
      on b.id = a.player_id
      where (a.player_id = b.id
      and
      a.games_played > '0'
      and
      a.season_type = '${seasonType}'
      and a.team_name = '${teamShortName}')
      group by b.firstname, b.lastname, b.isgoalie, b.nhl_id, a.player_id, a.season_type, a.team_name
      order by wins DESC`);
    }
    async getGoalieStats(teamShortName, seasonType) {
        return await this.repo.find({
            select: {
                id: true,
                games_played: true,
                minutes_played: true,
                goals_against_avg: true,
                wins: true,
                loss: true,
                ties: true,
                en_goals: true,
                shutouts: true,
                goals_against: true,
                saves: true,
                shots_for: true,
                save_pct: true,
                goals: true,
                assists: true,
                points: true,
                penalty_minutes: true,
                pass_pct: true,
                team_name: true,
                playing_year: true,
                player_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    nhl_id: true,
                    isgoalie: true,
                },
            },
            relations: {
                player_id: true,
            },
            where: {
                team_name: teamShortName,
                season_type: seasonType,
            },
            order: {
                wins: 'DESC',
            },
        });
    }
    async setConvertedGoaliesStats(array, raw) {
        return await Promise.all(array.map(async (item) => ({
            ...item,
            goalieStats: await this.convertStats(item.goalieStats, raw, item),
        })));
    }
    async convertStats(array, raw, teamInfo) {
        return await Promise.all(array.map((stat) => ({
            playing_year: stat.playing_year,
            season_type: stat.season_type,
            team_name: stat.team_name,
            teamInfo: !raw
                ? {
                    id: teamInfo.id,
                    city: teamInfo.city,
                    nickname: teamInfo.nickname,
                    teamlogo: teamInfo.teamlogo,
                }
                : null,
            player_id: !raw
                ? stat.player_id
                : {
                    id: stat['player_id'],
                    firstname: stat['firstname'],
                    lastname: stat['lastname'],
                    nhl_id: stat['nhl_id'],
                    isactive: null,
                    isgoalie: stat['isgoalie'],
                    isdefense: null,
                    isforward: null,
                    is_protected: null,
                },
            games_played: Number(stat.games_played),
            minutes_played: Number(stat.minutes_played),
            goals_against_avg: !raw
                ? Number(Number(stat.goals_against_avg).toFixed(2))
                : Number(((Number(stat.goals_against) * 60) /
                    Number(stat.minutes_played)).toFixed(2)),
            wins: Number(stat.wins),
            loss: Number(stat.loss),
            ties: Number(stat.ties),
            shutouts: Number(stat.shutouts),
            goals_against: Number(stat.goals_against),
            saves: Number(stat.saves),
            shots_for: Number(stat.shots_for),
            save_pct: !raw
                ? Number(Number(stat.save_pct).toFixed(3))
                : Number((Number(stat.saves) / Number(stat.shots_for)).toFixed(3)),
            goals: Number(stat.goals),
            assists: Number(stat.assists),
            points: Number(stat.points),
            penalty_minutes: Number(stat.penalty_minutes),
        })));
    }
};
exports.ApiUserGoalieStatsService = ApiUserGoalieStatsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Goalies_Stats_V2)),
    tslib_1.__param(1, (0, typeorm_1.InjectRepository)(entities_1.Teams_V2)),
    tslib_1.__param(2, (0, typeorm_1.InjectDataSource)()),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.DataSource !== "undefined" && typeorm_2.DataSource) === "function" ? _c : Object])
], ApiUserGoalieStatsService);


/***/ }),
/* 152 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(153), exports);


/***/ }),
/* 153 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GoalieStatsMiddleware = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
let GoalieStatsMiddleware = exports.GoalieStatsMiddleware = class GoalieStatsMiddleware {
    use(req, res, next) {
        console.log('Request Goalie Stats...');
        next();
    }
};
exports.GoalieStatsMiddleware = GoalieStatsMiddleware = tslib_1.__decorate([
    (0, common_1.Injectable)()
], GoalieStatsMiddleware);


/***/ }),
/* 154 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(155), exports);


/***/ }),
/* 155 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiLeagueModule = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(32);
const controllers_1 = __webpack_require__(156);
const league_middleware_1 = __webpack_require__(160);
const services_1 = __webpack_require__(158);
let ApiLeagueModule = exports.ApiLeagueModule = class ApiLeagueModule {
    configure(consumer) {
        consumer.apply(league_middleware_1.LeagueMiddleware).forRoutes('*');
    }
};
exports.ApiLeagueModule = ApiLeagueModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entities_1.Current_Season_V2])],
        controllers: [controllers_1.LeagueController],
        providers: [services_1.LeagueService],
    })
], ApiLeagueModule);


/***/ }),
/* 156 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(157), exports);


/***/ }),
/* 157 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LeagueController = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
const services_1 = __webpack_require__(158);
let LeagueController = exports.LeagueController = class LeagueController {
    constructor(leagueService) {
        this.leagueService = leagueService;
    }
    async getCurrentData() {
        const data = await this.leagueService.getCurrentLeagueData();
        if (!data) {
            throw new common_1.NotFoundException('League Data not found');
        }
        return data;
    }
    updateUserById(body) {
        return this.leagueService.updateCurrentLeagueData(body);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('/current-data'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], LeagueController.prototype, "getCurrentData", null);
tslib_1.__decorate([
    (0, common_1.Put)('/current-data'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], LeagueController.prototype, "updateUserById", null);
exports.LeagueController = LeagueController = tslib_1.__decorate([
    (0, common_1.Controller)('league'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof services_1.LeagueService !== "undefined" && services_1.LeagueService) === "function" ? _a : Object])
], LeagueController);


/***/ }),
/* 158 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(159), exports);


/***/ }),
/* 159 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LeagueService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(32);
const typeorm_2 = __webpack_require__(13);
let LeagueService = exports.LeagueService = class LeagueService {
    constructor(repo) {
        this.repo = repo;
    }
    async getCurrentLeagueData() {
        return (await this.repo.find());
    }
    async updateCurrentLeagueData(attrs) {
        const data = await this.repo.findOneByOrFail({ id: 1 });
        if (!data) {
            throw new common_1.NotFoundException('data not found');
        }
        Object.assign(data, attrs);
        return this.repo.save(data);
    }
};
exports.LeagueService = LeagueService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Current_Season_V2)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], LeagueService);


/***/ }),
/* 160 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LeagueMiddleware = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
let LeagueMiddleware = exports.LeagueMiddleware = class LeagueMiddleware {
    use(req, res, next) {
        console.log('Request League...');
        next();
    }
};
exports.LeagueMiddleware = LeagueMiddleware = tslib_1.__decorate([
    (0, common_1.Injectable)()
], LeagueMiddleware);


/***/ }),
/* 161 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(162), exports);


/***/ }),
/* 162 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiNhlModule = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
const axios_1 = __webpack_require__(163);
const controllers_1 = __webpack_require__(164);
const middlewares_1 = __webpack_require__(169);
const services_1 = __webpack_require__(166);
const entities_1 = __webpack_require__(10);
const typeorm_1 = __webpack_require__(32);
let ApiNhlModule = exports.ApiNhlModule = class ApiNhlModule {
    configure(consumer) {
        consumer.apply(middlewares_1.NhlMiddleware).forRoutes('*');
    }
};
exports.ApiNhlModule = ApiNhlModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule,
            typeorm_1.TypeOrmModule.forFeature([entities_1.Players_Stats_V2, entities_1.Teams_V2, entities_1.Goalies_Stats_V2]),
        ],
        controllers: [controllers_1.NhlController],
        providers: [services_1.ApiNhlService],
    })
], ApiNhlModule);


/***/ }),
/* 163 */
/***/ ((module) => {

module.exports = require("@nestjs/axios");

/***/ }),
/* 164 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(165), exports);


/***/ }),
/* 165 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NhlController = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
const services_1 = __webpack_require__(166);
let NhlController = exports.NhlController = class NhlController {
    constructor(nhlService) {
        this.nhlService = nhlService;
    }
    async getNhlLeaders(param) {
        const nhlLeaders = await this.nhlService.getNhlLeaders(param.playerType, param.statType, param.season);
        if (!nhlLeaders) {
            throw new common_1.NotFoundException('Nhl Leaders not found');
        }
        return nhlLeaders;
    }
    async getNhlGoalieLeaders(param) {
        const nhlLeaders = await this.nhlService.getNhlGoalieLeaders(param.playerType, param.statType, param.season, param.minGames);
        if (!nhlLeaders) {
            throw new common_1.NotFoundException('Nhl Leaders not found');
        }
        return nhlLeaders;
    }
    async getNhlRookieLeaders(param) {
        const nhlLeaders = await this.nhlService.getNhlRookieLeaders(param.playerType, param.statType, param.season);
        if (!nhlLeaders) {
            throw new common_1.NotFoundException('Nhl Leaders not found');
        }
        return nhlLeaders;
    }
    async getNhlDefenseLeaders(param) {
        const nhlLeaders = await this.nhlService.getNhlDefenseLeaders(param.playerType, param.statType, param.season);
        if (!nhlLeaders) {
            throw new common_1.NotFoundException('Nhl Leaders not found');
        }
        return nhlLeaders;
    }
    async getNhlSummaryFromSportsnet(param) {
        const nhlLeaders = await this.nhlService.getNhlSummaryFromSportsnet(param.season, param.seasonType);
        if (!nhlLeaders) {
            throw new common_1.NotFoundException('Nhl Summary not found');
        }
        return nhlLeaders;
    }
    async getNhlRookieSummary(param) {
        const nhlLeaders = await this.nhlService.getNhlRookieSummary(param.season, param.player, param.statsType, param.sort, param.start, param.pageSize);
        if (!nhlLeaders) {
            throw new common_1.NotFoundException('Nhl Rookie Summary not found');
        }
        return nhlLeaders;
    }
    async getNhlPlayerStatsByPlayerId(param) {
        const stats = await this.nhlService.getNhlPlayerStatsByPlayerId(param.playerId, param.season);
        if (!stats) {
            throw new common_1.NotFoundException('Nhl Player Stat not found');
        }
        return stats;
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('/nhl-leaders/:season/:playerType/:statType'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], NhlController.prototype, "getNhlLeaders", null);
tslib_1.__decorate([
    (0, common_1.Get)('/nhl-leaders/:season/:playerType/:statType/:minGames'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], NhlController.prototype, "getNhlGoalieLeaders", null);
tslib_1.__decorate([
    (0, common_1.Get)('/nhl-rookie-leaders/:season/:playerType/:statType'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], NhlController.prototype, "getNhlRookieLeaders", null);
tslib_1.__decorate([
    (0, common_1.Get)('/nhl-defense-leaders/:season/:playerType/:statType'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], NhlController.prototype, "getNhlDefenseLeaders", null);
tslib_1.__decorate([
    (0, common_1.Get)('/nhl-summary/sportsnet/:season/:seasonType'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], NhlController.prototype, "getNhlSummaryFromSportsnet", null);
tslib_1.__decorate([
    (0, common_1.Get)('/nhl-summary/rookies/:season/:player/:statsType/:sort/:start/:pageSize'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], NhlController.prototype, "getNhlRookieSummary", null);
tslib_1.__decorate([
    (0, common_1.Get)('/player/stats/:playerId/:season'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], NhlController.prototype, "getNhlPlayerStatsByPlayerId", null);
exports.NhlController = NhlController = tslib_1.__decorate([
    (0, common_1.Controller)('nhl'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof services_1.ApiNhlService !== "undefined" && services_1.ApiNhlService) === "function" ? _a : Object])
], NhlController);


/***/ }),
/* 166 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(167), exports);


/***/ }),
/* 167 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiNhlService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const axios_1 = __webpack_require__(163);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(32);
const rxjs_1 = __webpack_require__(168);
const typeorm_2 = __webpack_require__(13);
let ApiNhlService = exports.ApiNhlService = class ApiNhlService {
    constructor(httpService, playerStatsRepo, goalieStatsRepo, teamsRepo) {
        this.httpService = httpService;
        this.playerStatsRepo = playerStatsRepo;
        this.goalieStatsRepo = goalieStatsRepo;
        this.teamsRepo = teamsRepo;
        this.nhlCOM = 'https://api.nhle.com/stats/rest/en/season';
        this.nhlAPI = 'https://api-web.nhle.com/v1/player';
        this.nhlComSummary = 'https://api.nhle.com/stats/rest/en';
        this.nhlComLeaders = 'https://api.nhle.com/stats/rest/en/leaders';
        this.sportsNet = 'https://mobile-statsv2.sportsnet.ca/web_player_table';
    }
    getNhlLeaders(playerType, statType, season) {
        const leaders = this.httpService
            .get(`${this.nhlComLeaders}/${playerType}s/${statType}?cayenneExp=season=${season}%20and%20gameType=2`)
            .pipe((0, rxjs_1.map)((response) => response.data), (0, rxjs_1.switchMap)((response) => this.setChaTeamInfo(response.data, season, 'p')));
        return leaders;
    }
    getNhlGoalieLeaders(playerType, statType, season, minGames) {
        const leaders = this.httpService
            .get(`${this.nhlComLeaders}/${playerType}s/${statType}?cayenneExp=season=${season}%20and%20gameType=2%20and%20gamesPlayed%20%3E=%20${minGames}`)
            .pipe((0, rxjs_1.map)((response) => response.data), (0, rxjs_1.switchMap)((response) => this.setChaTeamInfo(response.data, season, 'g')));
        return leaders;
    }
    getNhlRookieLeaders(playerType, statType, season) {
        const leaders = this.httpService
            .get(`${this.nhlComLeaders}/${playerType}s/${statType}?cayenneExp=season=${season}%20and%20gameType=2%20and%20isRookie%20=%20%27Y%27`)
            .pipe((0, rxjs_1.map)((response) => response.data), (0, rxjs_1.switchMap)((response) => this.setChaTeamInfo(response.data, season, 'p')));
        return leaders;
    }
    getNhlDefenseLeaders(playerType, statType, season) {
        const leaders = this.httpService
            .get(`${this.nhlComLeaders}/${playerType}s/${statType}?cayenneExp=season=${season}%20and%20gameType=2%20and%20player.positionCode%20=%20%27D%27`)
            .pipe((0, rxjs_1.map)((response) => response.data), (0, rxjs_1.switchMap)((response) => this.setChaTeamInfo(response.data, season, 'p')));
        return leaders;
    }
    getNhlSummaryFromSportsnet(season, seasonType) {
        const leaders = this.httpService
            .get(`${this.sportsNet}?league=nhl&season=${season}&season_type=${seasonType}`)
            .pipe((0, rxjs_1.map)((response) => response.data), (0, rxjs_1.switchMap)((response) => this.setChaTeamInfoForSportsnet(response.data, season)));
        return leaders;
    }
    getNhlRookieSummary(season, player, statsType, sort, start, pageSize) {
        const leaders = this.httpService
            .get(`${this.nhlComSummary}/${player}/summary?isAggregate=false&isGame=false&sort=%5B%7B%22property%22:%22${statsType}%22,%22direction%22:%22${sort}%22%7D,%7B%22property%22:%22gamesPlayed%22,%22direction%22:%22ASC%22%7D,%7B%22property%22:%22playerId%22,%22direction%22:%22ASC%22%7D%5D&start=${start}&limit=${pageSize}&factCayenneExp=gamesPlayed%3E=1&cayenneExp=gameTypeId=2%20and%20isRookie=%221%22%20and%20seasonId%3C=${season}%20and%20seasonId%3E=${season}`)
            .pipe((0, rxjs_1.map)((response) => response.data), (0, rxjs_1.switchMap)((response) => this.setChaTeamInfoRookies(response.data, season)));
        return leaders;
    }
    getNhlPlayerStatsByPlayerId(playerId, season) {
        const stats = this.httpService
            .get(`${this.nhlAPI}/${playerId}/landing`)
            .pipe((0, rxjs_1.map)((response) => response.data.featuredStats.regularSeason.subSeason));
        return stats;
    }
    async setChaTeamInfoForSportsnet(statObject, season) {
        const string1 = season.slice(2, 4);
        const newSeasonString = `${season}-${Number(string1) + 1}`;
        return (statObject = {
            player_stats: {
                skaters: await Promise.all(statObject.player_stats.skaters.map(async (skater) => ({
                    ...skater,
                    chaPlayerTeam: await this.getChaTeamSportsnet(skater.player_id, newSeasonString, 'p'),
                }))),
                goalies: await Promise.all(statObject.player_stats.goalies.map(async (skater) => ({
                    ...skater,
                    chaPlayerTeam: await this.getChaTeamSportsnet(skater.player_id, newSeasonString, 'g'),
                }))),
            },
        });
    }
    async setChaTeamInfo(array, season, type) {
        const string1 = season.slice(0, 4);
        const string2 = season.slice(6, 8);
        const newSeasonString = `${string1}-${string2}`;
        return await Promise.all(array.map(async (item) => ({
            ...item,
            chaPlayerTeam: await this.getChaTeam(item.player.id, newSeasonString, type),
        })));
    }
    async setChaTeamInfoRookies(array, season) {
        const string1 = season.slice(0, 4);
        const string2 = season.slice(6, 8);
        const newSeasonString = `${string1}-${string2}`;
        return await Promise.all(array.map(async (item) => ({
            ...item,
            chaPlayerTeam: await this.getChaTeam(item.playerId, newSeasonString, 'p'),
        })));
    }
    async getChaTeam(id, season, type) {
        let playerStatTeam;
        if (type === 'p') {
            playerStatTeam = await this.playerStatsRepo.findOne({
                select: {
                    id: true,
                    player_id: {
                        id: true,
                        nhl_id: true,
                    },
                    team_name: true,
                },
                where: {
                    player_id: {
                        nhl_id: id.toString(),
                    },
                    playing_year: season,
                    season_type: 'Regular',
                },
            });
        }
        else {
            playerStatTeam = await this.goalieStatsRepo.findOne({
                select: {
                    id: true,
                    player_id: {
                        id: true,
                        nhl_id: true,
                    },
                    team_name: true,
                },
                where: {
                    player_id: {
                        nhl_id: id.toString(),
                    },
                    playing_year: season,
                    season_type: 'Regular',
                },
            });
        }
        const playerStatTeamWithInfo = await this.getChaTeamInfo(playerStatTeam);
        return playerStatTeamWithInfo;
    }
    async getChaTeamSportsnet(id, season, type) {
        let playerStatTeam;
        if (type === 'p') {
            playerStatTeam = await this.playerStatsRepo.findOne({
                select: {
                    id: true,
                    player_id: {
                        id: true,
                        sportsnet_id: true,
                    },
                    team_name: true,
                },
                where: {
                    player_id: {
                        sportsnet_id: id.toString(),
                    },
                    playing_year: season,
                    season_type: 'Regular',
                },
            });
        }
        else {
            playerStatTeam = await this.goalieStatsRepo.findOne({
                select: {
                    id: true,
                    player_id: {
                        id: true,
                        sportsnet_id: true,
                    },
                    team_name: true,
                },
                where: {
                    player_id: {
                        sportsnet_id: id.toString(),
                    },
                    playing_year: season,
                    season_type: 'Regular',
                },
            });
        }
        const playerStatTeamWithInfo = await this.getChaTeamInfo(playerStatTeam);
        return playerStatTeamWithInfo;
    }
    async getChaTeamInfo(playerStatTeam) {
        return this.teamsRepo.find({
            select: {
                id: true,
                teamlogo: true,
                city: true,
                nickname: true,
            },
            where: {
                shortname: playerStatTeam ? playerStatTeam.team_name : 'FA',
            },
        });
    }
};
exports.ApiNhlService = ApiNhlService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(1, (0, typeorm_1.InjectRepository)(entities_1.Players_Stats_V2)),
    tslib_1.__param(2, (0, typeorm_1.InjectRepository)(entities_1.Goalies_Stats_V2)),
    tslib_1.__param(3, (0, typeorm_1.InjectRepository)(entities_1.Teams_V2)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof axios_1.HttpService !== "undefined" && axios_1.HttpService) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object, typeof (_d = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _d : Object])
], ApiNhlService);


/***/ }),
/* 168 */
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),
/* 169 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(170), exports);


/***/ }),
/* 170 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NhlMiddleware = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
let NhlMiddleware = exports.NhlMiddleware = class NhlMiddleware {
    use(req, res, next) {
        console.log('Request Nhl...');
        next();
    }
};
exports.NhlMiddleware = NhlMiddleware = tslib_1.__decorate([
    (0, common_1.Injectable)()
], NhlMiddleware);


/***/ }),
/* 171 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(172), exports);


/***/ }),
/* 172 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiPlayerInfoModule = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(32);
const controllers_1 = __webpack_require__(173);
const middlewares_1 = __webpack_require__(177);
const services_1 = __webpack_require__(175);
let ApiPlayerInfoModule = exports.ApiPlayerInfoModule = class ApiPlayerInfoModule {
    configure(consumer) {
        consumer.apply(middlewares_1.PlayerInfoMiddleware).forRoutes('*');
    }
};
exports.ApiPlayerInfoModule = ApiPlayerInfoModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entities_1.Players_V2])],
        controllers: [controllers_1.PlayerInfoController],
        providers: [services_1.ApiPlayerInfoService],
    })
], ApiPlayerInfoModule);


/***/ }),
/* 173 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(174), exports);


/***/ }),
/* 174 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlayerInfoController = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(35);
const common_1 = __webpack_require__(1);
const services_1 = __webpack_require__(175);
let PlayerInfoController = exports.PlayerInfoController = class PlayerInfoController {
    constructor(playerInfoService) {
        this.playerInfoService = playerInfoService;
    }
    async getAllPlayers() {
        const players = await this.playerInfoService.getAll();
        if (!players || players.length < 1) {
            throw new common_1.NotFoundException('players not found');
        }
        return players;
    }
    updatePlayerById(param, body) {
        return this.playerInfoService.updatePlayerById(parseInt(param.id), body);
    }
    addPlayer(body) {
        return this.playerInfoService.addPlayer(body);
    }
    deletePlayer(param) {
        return this.playerInfoService.deletePlayer(parseInt(param.id));
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], PlayerInfoController.prototype, "getAllPlayers", null);
tslib_1.__decorate([
    (0, common_1.Put)('/:id'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], PlayerInfoController.prototype, "updatePlayerById", null);
tslib_1.__decorate([
    (0, common_1.Post)('/add'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof entities_1.PlayerCreateDto !== "undefined" && entities_1.PlayerCreateDto) === "function" ? _d : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], PlayerInfoController.prototype, "addPlayer", null);
tslib_1.__decorate([
    (0, common_1.Delete)('/:id'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], PlayerInfoController.prototype, "deletePlayer", null);
exports.PlayerInfoController = PlayerInfoController = tslib_1.__decorate([
    (0, common_1.Controller)('player-info'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof services_1.ApiPlayerInfoService !== "undefined" && services_1.ApiPlayerInfoService) === "function" ? _a : Object])
], PlayerInfoController);


/***/ }),
/* 175 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(176), exports);


/***/ }),
/* 176 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiPlayerInfoService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(32);
const typeorm_2 = __webpack_require__(13);
let ApiPlayerInfoService = exports.ApiPlayerInfoService = class ApiPlayerInfoService {
    constructor(repo) {
        this.repo = repo;
    }
    async getAll() {
        return await this.repo.find({
            order: {
                lastname: 'ASC',
            },
        });
    }
    async updatePlayerById(id, attrs) {
        const player = await this.repo.findOneByOrFail({ id });
        if (!player) {
            throw new common_1.NotFoundException('player not found');
        }
        Object.assign(player, attrs);
        return this.repo.save(player);
    }
    async addPlayer(body) {
        const player = await this.repo.create(body);
        return this.repo.save(player);
    }
    async deletePlayer(id) {
        const player = await this.repo.findOneByOrFail({ id });
        if (!player) {
            throw new common_1.NotFoundException('player not found');
        }
        return this.repo.remove(player);
    }
};
exports.ApiPlayerInfoService = ApiPlayerInfoService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Players_V2)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ApiPlayerInfoService);


/***/ }),
/* 177 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(178), exports);


/***/ }),
/* 178 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlayerInfoMiddleware = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
let PlayerInfoMiddleware = exports.PlayerInfoMiddleware = class PlayerInfoMiddleware {
    use(req, res, next) {
        console.log('Request Player Info...');
        next();
    }
};
exports.PlayerInfoMiddleware = PlayerInfoMiddleware = tslib_1.__decorate([
    (0, common_1.Injectable)()
], PlayerInfoMiddleware);


/***/ }),
/* 179 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(180), exports);


/***/ }),
/* 180 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiPlayerRatingsModule = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(32);
const controllers_1 = __webpack_require__(181);
const middlewares_1 = __webpack_require__(185);
const services_1 = __webpack_require__(183);
let ApiPlayerRatingsModule = exports.ApiPlayerRatingsModule = class ApiPlayerRatingsModule {
    configure(consumer) {
        consumer.apply(middlewares_1.PlayerRatingsMiddleware).forRoutes('*');
    }
};
exports.ApiPlayerRatingsModule = ApiPlayerRatingsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entities_1.Player_Ratings_V2, entities_1.Players_V2])],
        controllers: [controllers_1.PlayerRatingsController],
        providers: [services_1.ApiPlayerRatingsService],
    })
], ApiPlayerRatingsModule);


/***/ }),
/* 181 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(182), exports);


/***/ }),
/* 182 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlayerRatingsController = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
const services_1 = __webpack_require__(183);
let PlayerRatingsController = exports.PlayerRatingsController = class PlayerRatingsController {
    constructor(playerRatingsService) {
        this.playerRatingsService = playerRatingsService;
    }
    async getAllRatings(param) {
        const players = await this.playerRatingsService.getAll(param.season);
        if (!players || players.length < 1) {
            throw new common_1.NotFoundException('ratings not found');
        }
        return players;
    }
    updatePlayerById(param, body) {
        return this.playerRatingsService.updatePlayerById(parseInt(param.id), body);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('/:season'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], PlayerRatingsController.prototype, "getAllRatings", null);
tslib_1.__decorate([
    (0, common_1.Put)('/:id'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], PlayerRatingsController.prototype, "updatePlayerById", null);
exports.PlayerRatingsController = PlayerRatingsController = tslib_1.__decorate([
    (0, common_1.Controller)('player-ratings'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof services_1.ApiPlayerRatingsService !== "undefined" && services_1.ApiPlayerRatingsService) === "function" ? _a : Object])
], PlayerRatingsController);


/***/ }),
/* 183 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(184), exports);


/***/ }),
/* 184 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiPlayerRatingsService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(32);
const typeorm_2 = __webpack_require__(13);
let ApiPlayerRatingsService = exports.ApiPlayerRatingsService = class ApiPlayerRatingsService {
    constructor(repo, playersRepo) {
        this.repo = repo;
        this.playersRepo = playersRepo;
    }
    async getAll(season) {
        const ratings = await this.repo.find({
            where: {
                playing_year: season,
            },
        });
        const ratingsWithPlayerInfo = await this.setPlayerInfo(ratings);
        return ratingsWithPlayerInfo;
    }
    async updatePlayerById(id, attrs) {
        const player = await this.repo.findOneByOrFail({ id });
        if (!player) {
            throw new common_1.NotFoundException('player not found');
        }
        Object.assign(player, attrs);
        return this.repo.save(player);
    }
    async setPlayerInfo(array) {
        return await Promise.all(array.map(async (item) => ({
            ...item,
            playerInfo: await this.getPlayerInfo(item.player_id),
        })));
    }
    async getPlayerInfo(playerId) {
        if (playerId) {
            return await this.playersRepo.findOne({
                select: {
                    id: true,
                    firstname: true,
                    lastname: true,
                },
                where: {
                    id: playerId,
                },
            });
        }
        else {
            return {};
        }
    }
};
exports.ApiPlayerRatingsService = ApiPlayerRatingsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Player_Ratings_V2)),
    tslib_1.__param(1, (0, typeorm_1.InjectRepository)(entities_1.Players_V2)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], ApiPlayerRatingsService);


/***/ }),
/* 185 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(186), exports);


/***/ }),
/* 186 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlayerRatingsMiddleware = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
let PlayerRatingsMiddleware = exports.PlayerRatingsMiddleware = class PlayerRatingsMiddleware {
    use(req, res, next) {
        console.log('Request Player Ratings...');
        next();
    }
};
exports.PlayerRatingsMiddleware = PlayerRatingsMiddleware = tslib_1.__decorate([
    (0, common_1.Injectable)()
], PlayerRatingsMiddleware);


/***/ }),
/* 187 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(188), exports);


/***/ }),
/* 188 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiPlayerStatsModule = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const axios_1 = __webpack_require__(163);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(32);
const controllers_1 = __webpack_require__(189);
const middlewares_1 = __webpack_require__(196);
const services_1 = __webpack_require__(191);
let ApiPlayerStatsModule = exports.ApiPlayerStatsModule = class ApiPlayerStatsModule {
    configure(consumer) {
        consumer.apply(middlewares_1.PlayerStatsMiddleware).forRoutes('*');
    }
};
exports.ApiPlayerStatsModule = ApiPlayerStatsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entities_1.Players_Stats_V2, entities_1.Teams_V2]), axios_1.HttpModule],
        controllers: [controllers_1.PlayerStatsController],
        providers: [
            services_1.ApiPlayerStatsService,
            services_1.ApiPlayerLeadersStatsService,
            services_1.ApiPlayerAllTimeStatsService,
            services_1.ApiUserPlayerStatsService,
        ],
    })
], ApiPlayerStatsModule);


/***/ }),
/* 189 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(190), exports);


/***/ }),
/* 190 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlayerStatsController = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
const services_1 = __webpack_require__(191);
let PlayerStatsController = exports.PlayerStatsController = class PlayerStatsController {
    constructor(playerLeaderStatsService, playerStatsService, playerAllTimeStatsService, userPlayersStatsService) {
        this.playerLeaderStatsService = playerLeaderStatsService;
        this.playerStatsService = playerStatsService;
        this.playerAllTimeStatsService = playerAllTimeStatsService;
        this.userPlayersStatsService = userPlayersStatsService;
    }
    async getAllPlayers(param) {
        const players = await this.playerStatsService.getAll(param.season);
        if (!players || players.length < 1) {
            throw new common_1.NotFoundException('players not found');
        }
        return players;
    }
    updatePlayerById(param, body) {
        return this.playerStatsService.updatePlayerById(parseInt(param.id), param.season, body);
    }
    deletePlayer(param) {
        return this.playerStatsService.deletePlayer(parseInt(param.id), param.season);
    }
    async getPlayerStatsLeaders(param) {
        const stats = await this.playerLeaderStatsService.getPlayerStatsLeaders(param.season, param.seasonType, param.minGamesStats);
        if (!stats) {
            throw new common_1.NotFoundException('Player Leader Stats not found');
        }
        return stats;
    }
    async getPlayerStatsAll(param) {
        const stats = await this.playerStatsService.getAllStats(param.season, param.seasonType);
        if (!stats || stats.length < 1) {
            throw new common_1.NotFoundException('Player Stats not found');
        }
        return stats;
    }
    async getPlayerStatsByPlayerId(param) {
        const stats = await this.playerStatsService.getPlayerStatsByPlayerId(param.season, param.seasonType, param.playerId);
        if (!stats || stats.length < 1) {
            throw new common_1.NotFoundException('Player Stats not found');
        }
        return stats;
    }
    async getAllTimePlayerStatsBySeasonByType(param) {
        const stats = await this.playerAllTimeStatsService.getAllTimePlayerStatsBySeasonByType(param.seasonType);
        if (!stats || stats.length < 1) {
            throw new common_1.NotFoundException('Player Stats not found');
        }
        return stats;
    }
    async getAllTimePlayerStatsSummedBySeasonByType(param) {
        const stats = await this.playerAllTimeStatsService.getAllTimePlayerStatsSummedBySeasonByType(param.seasonType);
        if (!stats || stats.length < 1) {
            throw new common_1.NotFoundException('Player Stats not found');
        }
        return stats;
    }
    async getTeamPlayerStatsBySeasonType(param) {
        const record = await this.userPlayersStatsService.getUserPlayerStatsBySeasonType(param.userId, param.seasonType);
        if (!record) {
            throw new common_1.NotFoundException('Team Players Stats not found');
        }
        return record;
    }
    async getTeamPlayerStatsAllTimeBySeasonType(param) {
        const record = await this.userPlayersStatsService.getUserPlayerStatsAllTimeBySeasonType(param.userId, param.seasonType);
        if (!record) {
            throw new common_1.NotFoundException('Team Players Stats not found');
        }
        return record;
    }
    async getTeamPlayersByTeamName(param) {
        const record = await this.userPlayersStatsService.getTeamPlayersByTeamName(param.teamName, param.season);
        if (!record) {
            throw new common_1.NotFoundException('Team Players Stats not found');
        }
        return record;
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('/:season'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], PlayerStatsController.prototype, "getAllPlayers", null);
tslib_1.__decorate([
    (0, common_1.Put)('/:season/:id'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], PlayerStatsController.prototype, "updatePlayerById", null);
tslib_1.__decorate([
    (0, common_1.Delete)('/:season/:id'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], PlayerStatsController.prototype, "deletePlayer", null);
tslib_1.__decorate([
    (0, common_1.Get)('/leaders/:season/:seasonType/:minGamesStats'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], PlayerStatsController.prototype, "getPlayerStatsLeaders", null);
tslib_1.__decorate([
    (0, common_1.Get)('/all/:season/:seasonType'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], PlayerStatsController.prototype, "getPlayerStatsAll", null);
tslib_1.__decorate([
    (0, common_1.Get)('/current/:season/:seasonType/:playerId'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], PlayerStatsController.prototype, "getPlayerStatsByPlayerId", null);
tslib_1.__decorate([
    (0, common_1.Get)('/history/season/:seasonType'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_k = typeof Promise !== "undefined" && Promise) === "function" ? _k : Object)
], PlayerStatsController.prototype, "getAllTimePlayerStatsBySeasonByType", null);
tslib_1.__decorate([
    (0, common_1.Get)('/history/all-time/:seasonType'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_l = typeof Promise !== "undefined" && Promise) === "function" ? _l : Object)
], PlayerStatsController.prototype, "getAllTimePlayerStatsSummedBySeasonByType", null);
tslib_1.__decorate([
    (0, common_1.Get)('/user/:userId/history/:seasonType'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_m = typeof Promise !== "undefined" && Promise) === "function" ? _m : Object)
], PlayerStatsController.prototype, "getTeamPlayerStatsBySeasonType", null);
tslib_1.__decorate([
    (0, common_1.Get)('/user/:userId/history/all/:seasonType'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_o = typeof Promise !== "undefined" && Promise) === "function" ? _o : Object)
], PlayerStatsController.prototype, "getTeamPlayerStatsAllTimeBySeasonType", null);
tslib_1.__decorate([
    (0, common_1.Get)('/team/:teamName/:season'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_p = typeof Promise !== "undefined" && Promise) === "function" ? _p : Object)
], PlayerStatsController.prototype, "getTeamPlayersByTeamName", null);
exports.PlayerStatsController = PlayerStatsController = tslib_1.__decorate([
    (0, common_1.Controller)('player-stats'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof services_1.ApiPlayerLeadersStatsService !== "undefined" && services_1.ApiPlayerLeadersStatsService) === "function" ? _a : Object, typeof (_b = typeof services_1.ApiPlayerStatsService !== "undefined" && services_1.ApiPlayerStatsService) === "function" ? _b : Object, typeof (_c = typeof services_1.ApiPlayerAllTimeStatsService !== "undefined" && services_1.ApiPlayerAllTimeStatsService) === "function" ? _c : Object, typeof (_d = typeof services_1.ApiUserPlayerStatsService !== "undefined" && services_1.ApiUserPlayerStatsService) === "function" ? _d : Object])
], PlayerStatsController);


/***/ }),
/* 191 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(192), exports);
tslib_1.__exportStar(__webpack_require__(193), exports);
tslib_1.__exportStar(__webpack_require__(194), exports);
tslib_1.__exportStar(__webpack_require__(195), exports);


/***/ }),
/* 192 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiPlayerLeadersStatsService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(32);
const typeorm_2 = __webpack_require__(13);
const rxjs_1 = __webpack_require__(168);
const axios_1 = __webpack_require__(163);
let ApiPlayerLeadersStatsService = exports.ApiPlayerLeadersStatsService = class ApiPlayerLeadersStatsService {
    constructor(repo, teamInfoRepo, httpService) {
        this.repo = repo;
        this.teamInfoRepo = teamInfoRepo;
        this.httpService = httpService;
        this.nhlAPI = 'https://api-web.nhle.com/v1/player';
    }
    async getPlayerStatsLeaders(season, seasonType, minGamesStats) {
        const hitsLeaders = await this.getHitsLeaders(season, seasonType);
        const pointsLeaders = await this.getPointsLeaders(season, seasonType);
        const pointsAboveExpectedLeaders = await this.getPointsAboveExpectedLeaders(season);
        const assistLeaders = await this.getAssistLeaders(season, seasonType);
        const bestPlusMinusLeaders = await this.getBestPlusMinusLeaders(season, seasonType);
        const worstPlusMinusLeaders = await this.getWorstPlusMinusLeaders(season, seasonType);
        const blockedShotLeaders = await this.getblockedShotLeaders(season, seasonType);
        const currSteakLeaders = await this.getCurrSteakLeaders(season, seasonType);
        const defenseLeaders = await this.getDefenseLeaders(season, seasonType);
        const goalLeaders = await this.getGoalLeaders(season, seasonType);
        const longStreakLeaders = await this.getLongStreakLeaders(season, seasonType);
        const minutesLeaders = await this.getMinutesLeaders(season, seasonType);
        const penaltyLeaders = await this.getPenaltyLeaders(season, seasonType);
        const ppGoalsLeaders = await this.getPpgoalsLeaders(season, seasonType);
        const gwGoalsLeaders = await this.getGwgoalsLeaders(season, seasonType);
        const rookieLeaders = await this.getRookieLeaders(season, seasonType);
        const rookieGoalLeaders = await this.getRookieGoalsLeaders(season, seasonType);
        const shGoalsLeaders = await this.getShGoalsLeaders(season, seasonType);
        const shotsLeaders = await this.getShotsLeaders(season, seasonType);
        const defenseGoalLeaders = await this.getDefenseGoalLeaders(season, seasonType);
        const faceOffLeaders = await this.getFaceOffLeaders(season, seasonType, minGamesStats);
        const shootingLeaders = await this.getShootingLeaders(season, seasonType, minGamesStats);
        const passingLeaders = await this.getPassingLeaders(season, seasonType, minGamesStats);
        const cornersLeaders = await this.getCornersLeaders(season, seasonType, minGamesStats);
        return {
            hits: hitsLeaders,
            points: pointsLeaders,
            assists: assistLeaders,
            bestPlusMinus: bestPlusMinusLeaders,
            worstPlusMinus: worstPlusMinusLeaders,
            blockedShots: blockedShotLeaders,
            currStreak: currSteakLeaders,
            defense: defenseLeaders,
            defenseGoals: defenseGoalLeaders,
            goals: goalLeaders,
            longStreak: longStreakLeaders,
            minutes: minutesLeaders,
            penalties: penaltyLeaders,
            ppGoals: ppGoalsLeaders,
            gwGoals: gwGoalsLeaders,
            rookies: rookieLeaders,
            rookieGoals: rookieGoalLeaders,
            shGoals: shGoalsLeaders,
            shots: shotsLeaders,
            faceoffs: faceOffLeaders,
            shooting: shootingLeaders,
            passing: passingLeaders,
            corners: cornersLeaders,
            pointsAboveExpected: pointsAboveExpectedLeaders,
        };
    }
    async getCornersLeaders(season, seasonType, minGamesStats) {
        const cornersLeaders = await this.repo.find({
            select: {
                id: true,
                corner_pct: true,
                team_name: true,
                player_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    nhl_id: true,
                    isgoalie: true,
                },
            },
            relations: {
                player_id: true,
            },
            where: {
                playing_year: season,
                season_type: seasonType,
                corner_total: (0, typeorm_2.MoreThanOrEqual)(minGamesStats),
            },
            order: {
                corner_pct: 'DESC',
            },
            take: 10,
        });
        const cornersLeadersWithTeamInfo = await this.setTeamInfo(cornersLeaders);
        return cornersLeadersWithTeamInfo;
    }
    async getPassingLeaders(season, seasonType, minGamesStats) {
        const passingLeaders = await this.repo.find({
            select: {
                id: true,
                pass_pct: true,
                team_name: true,
                player_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    nhl_id: true,
                    isgoalie: true,
                },
            },
            relations: {
                player_id: true,
            },
            where: {
                playing_year: season,
                season_type: seasonType,
                pass_attempts: (0, typeorm_2.MoreThanOrEqual)(minGamesStats),
            },
            order: {
                pass_pct: 'DESC',
            },
            take: 10,
        });
        const passingLeadersWithTeamInfo = await this.setTeamInfo(passingLeaders);
        return passingLeadersWithTeamInfo;
    }
    async getShootingLeaders(season, seasonType, minGamesStats) {
        const qualifiedShootingLeaders = await this.repo.find({
            select: {
                id: true,
                shooting_pct: true,
                team_name: true,
                player_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    nhl_id: true,
                    isgoalie: true,
                },
            },
            relations: {
                player_id: true,
            },
            where: {
                playing_year: season,
                season_type: seasonType,
                shots: (0, typeorm_2.MoreThanOrEqual)(minGamesStats),
            },
        });
        const shootingLeaders = await this.setShootingLeaders(qualifiedShootingLeaders);
        const shootingLeadersSorted = shootingLeaders
            .sort((a, b) => b.shooting_pct - a.shooting_pct)
            .slice(0, 10);
        const shootingLeadersWithTeamInfo = await this.setTeamInfo(shootingLeadersSorted);
        return shootingLeadersWithTeamInfo;
    }
    async getFaceOffLeaders(season, seasonType, minGamesStats) {
        const faceOffLeaders = await this.repo.find({
            select: {
                id: true,
                fo_pct: true,
                team_name: true,
                player_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    nhl_id: true,
                    isgoalie: true,
                },
            },
            relations: {
                player_id: true,
            },
            where: {
                playing_year: season,
                season_type: seasonType,
                fo_won: (0, typeorm_2.MoreThanOrEqual)(minGamesStats),
            },
            order: {
                fo_pct: 'DESC',
            },
            take: 10,
        });
        const faceOffLeadersWithTeamInfo = await this.setTeamInfo(faceOffLeaders);
        return faceOffLeadersWithTeamInfo;
    }
    async getHitsLeaders(season, seasonType) {
        const hitsLeaders = await this.repo.find({
            select: {
                id: true,
                hits: true,
                team_name: true,
                player_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    nhl_id: true,
                    isgoalie: true,
                },
            },
            relations: {
                player_id: true,
            },
            where: {
                playing_year: season,
                season_type: seasonType,
            },
            order: {
                hits: 'DESC',
            },
            take: 10,
        });
        const hitsLeadersWithTeamInfo = await this.setTeamInfo(hitsLeaders);
        return hitsLeadersWithTeamInfo;
    }
    async getPointsLeaders(season, seasonType) {
        const pointsLeaders = await this.repo.find({
            select: {
                id: true,
                team_name: true,
                points: true,
                player_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    nhl_id: true,
                    isgoalie: true,
                },
            },
            relations: ['player_id'],
            where: {
                playing_year: season,
                season_type: seasonType,
            },
            order: {
                points: 'DESC',
            },
            take: 10,
        });
        const pointsLeadersWithTeamInfo = await this.setTeamInfo(pointsLeaders);
        return pointsLeadersWithTeamInfo;
    }
    async getPointsAboveExpectedLeaders(season) {
        const chaPlayerPoints = await this.repo.find({
            select: {
                id: true,
                team_name: true,
                points: true,
                player_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    nhl_id: true,
                    isgoalie: true,
                },
            },
            relations: ['player_id'],
            where: {
                playing_year: season,
                season_type: 'Regular',
            },
            order: {
                points: 'DESC',
            },
            take: 1,
        });
        const pointsLeaderWithNhlStats = await this.getLastSeasonNhlStats(chaPlayerPoints);
        console.log(pointsLeaderWithNhlStats);
        const chaPointsLeadersWithTeamInfo = await this.setTeamInfo(pointsLeaderWithNhlStats);
        return chaPointsLeadersWithTeamInfo;
    }
    getNhlStatByPlayerId(playerId) {
        return new Promise((resolve) => {
            this.httpService
                .get(`${this.nhlAPI}/${playerId}/landing`)
                .pipe((0, rxjs_1.map)((response) => response.data.seasonTotals.find((season) => season.season === 20222023).points))
                .subscribe((data) => {
                resolve(data);
            });
        });
    }
    async getLastSeasonNhlStats(pointsLeaders) {
        return await Promise.all(pointsLeaders.map(async (leader) => ({
            ...leader,
            nhlPoints: await this.getNhlStatByPlayerId(leader.player_id.nhl_id),
        })));
    }
    async getAssistLeaders(season, seasonType) {
        const assistLeaders = await this.repo.find({
            select: {
                id: true,
                team_name: true,
                assists: true,
                player_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    nhl_id: true,
                    isgoalie: true,
                },
            },
            relations: ['player_id'],
            where: {
                playing_year: season,
                season_type: seasonType,
            },
            order: {
                assists: 'DESC',
            },
            take: 10,
        });
        const assistLeadersWithTeamInfo = await this.setTeamInfo(assistLeaders);
        return assistLeadersWithTeamInfo;
    }
    async getWorstPlusMinusLeaders(season, seasonType) {
        const bestPlusMinusLeaders = await this.repo.find({
            select: {
                id: true,
                team_name: true,
                plus_minus: true,
                player_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    nhl_id: true,
                    isgoalie: true,
                },
            },
            relations: ['player_id'],
            where: {
                playing_year: season,
                season_type: seasonType,
            },
            order: {
                plus_minus: 'ASC',
            },
            take: 10,
        });
        const bestPlusMinusLeadersWithTeamInfo = await this.setTeamInfo(bestPlusMinusLeaders);
        return bestPlusMinusLeadersWithTeamInfo;
    }
    async getBestPlusMinusLeaders(season, seasonType) {
        const bestPlusMinusLeaders = await this.repo.find({
            select: {
                id: true,
                team_name: true,
                plus_minus: true,
                player_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    nhl_id: true,
                    isgoalie: true,
                },
            },
            relations: ['player_id'],
            where: {
                playing_year: season,
                season_type: seasonType,
            },
            order: {
                plus_minus: 'DESC',
            },
            take: 10,
        });
        const bestPlusMinusLeadersWithTeamInfo = await this.setTeamInfo(bestPlusMinusLeaders);
        return bestPlusMinusLeadersWithTeamInfo;
    }
    async getblockedShotLeaders(season, seasonType) {
        const blockedShotLeaders = await this.repo.find({
            select: {
                id: true,
                team_name: true,
                blocked_shots: true,
                player_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    nhl_id: true,
                    isgoalie: true,
                },
            },
            relations: ['player_id'],
            where: {
                playing_year: season,
                season_type: seasonType,
            },
            order: {
                blocked_shots: 'DESC',
            },
            take: 10,
        });
        const blockedShotLeadersWithTeamInfo = await this.setTeamInfo(blockedShotLeaders);
        return blockedShotLeadersWithTeamInfo;
    }
    async getCurrSteakLeaders(season, seasonType) {
        const currStreakLeaders = await this.repo.find({
            select: {
                id: true,
                team_name: true,
                current_points_streak: true,
                player_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    nhl_id: true,
                    isgoalie: true,
                },
            },
            relations: ['player_id'],
            where: {
                playing_year: season,
                season_type: seasonType,
            },
            order: {
                current_points_streak: 'DESC',
            },
            take: 10,
        });
        const currStreakLeadersWithTeamInfo = await this.setTeamInfo(currStreakLeaders);
        return currStreakLeadersWithTeamInfo;
    }
    async getDefenseGoalLeaders(season, seasonType) {
        const defenseGoalLeaders = await this.repo.find({
            select: {
                id: true,
                team_name: true,
                goals: true,
                player_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    nhl_id: true,
                    isgoalie: true,
                    isdefense: true,
                },
            },
            relations: ['player_id'],
            where: {
                playing_year: season,
                season_type: seasonType,
                player_id: {
                    isdefense: true,
                },
            },
            order: {
                goals: 'DESC',
            },
            take: 10,
        });
        const defenseLeadersWithTeamInfo = await this.setTeamInfo(defenseGoalLeaders);
        return defenseLeadersWithTeamInfo;
    }
    async getDefenseLeaders(season, seasonType) {
        const defenseLeaders = await this.repo.find({
            select: {
                id: true,
                team_name: true,
                points: true,
                player_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    nhl_id: true,
                    isgoalie: true,
                    isdefense: true,
                },
            },
            relations: ['player_id'],
            where: {
                playing_year: season,
                season_type: seasonType,
                player_id: {
                    isdefense: true,
                },
            },
            order: {
                points: 'DESC',
            },
            take: 10,
        });
        const defenseLeadersWithTeamInfo = await this.setTeamInfo(defenseLeaders);
        return defenseLeadersWithTeamInfo;
    }
    async getGoalLeaders(season, seasonType) {
        const goalLeaders = await this.repo.find({
            select: {
                id: true,
                team_name: true,
                goals: true,
                player_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    nhl_id: true,
                    isgoalie: true,
                },
            },
            relations: ['player_id'],
            where: {
                playing_year: season,
                season_type: seasonType,
            },
            order: {
                goals: 'DESC',
            },
            take: 10,
        });
        const goalLeadersWithTeamInfo = await this.setTeamInfo(goalLeaders);
        return goalLeadersWithTeamInfo;
    }
    async getLongStreakLeaders(season, seasonType) {
        const longStreakLeaders = await this.repo.find({
            select: {
                id: true,
                team_name: true,
                longest_points_streak: true,
                player_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    nhl_id: true,
                    isgoalie: true,
                },
            },
            relations: ['player_id'],
            where: {
                playing_year: season,
                season_type: seasonType,
            },
            order: {
                longest_points_streak: 'DESC',
            },
            take: 10,
        });
        const longStreakLeadersWithTeamInfo = await this.setTeamInfo(longStreakLeaders);
        return longStreakLeadersWithTeamInfo;
    }
    async getMinutesLeaders(season, seasonType) {
        const minutesLeaders = await this.repo.find({
            select: {
                id: true,
                team_name: true,
                minutes_played: true,
                player_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    nhl_id: true,
                    isgoalie: true,
                },
            },
            relations: ['player_id'],
            where: {
                playing_year: season,
                season_type: seasonType,
            },
            order: {
                minutes_played: 'DESC',
            },
            take: 10,
        });
        const minutesLeadersWithTeamInfo = await this.setTeamInfo(minutesLeaders);
        return minutesLeadersWithTeamInfo;
    }
    async getPenaltyLeaders(season, seasonType) {
        const penaltyLeaders = await this.repo.find({
            select: {
                id: true,
                team_name: true,
                penalty_minutes: true,
                player_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    nhl_id: true,
                    isgoalie: true,
                },
            },
            relations: ['player_id'],
            where: {
                playing_year: season,
                season_type: seasonType,
            },
            order: {
                penalty_minutes: 'DESC',
            },
            take: 10,
        });
        const penaltyLeadersWithTeamInfo = await this.setTeamInfo(penaltyLeaders);
        return penaltyLeadersWithTeamInfo;
    }
    async getGwgoalsLeaders(season, seasonType) {
        const ppGoalsLeaders = await this.repo.find({
            select: {
                id: true,
                team_name: true,
                gw_goals: true,
                player_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    nhl_id: true,
                    isgoalie: true,
                },
            },
            relations: ['player_id'],
            where: {
                playing_year: season,
                season_type: seasonType,
            },
            order: {
                gw_goals: 'DESC',
            },
            take: 10,
        });
        const ppGoalsLeadersWithTeamInfo = await this.setTeamInfo(ppGoalsLeaders);
        return ppGoalsLeadersWithTeamInfo;
    }
    async getPpgoalsLeaders(season, seasonType) {
        const ppGoalsLeaders = await this.repo.find({
            select: {
                id: true,
                team_name: true,
                pp_goals: true,
                player_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    nhl_id: true,
                    isgoalie: true,
                },
            },
            relations: ['player_id'],
            where: {
                playing_year: season,
                season_type: seasonType,
            },
            order: {
                pp_goals: 'DESC',
            },
            take: 10,
        });
        const ppGoalsLeadersWithTeamInfo = await this.setTeamInfo(ppGoalsLeaders);
        return ppGoalsLeadersWithTeamInfo;
    }
    async getRookieGoalsLeaders(season, seasonType) {
        const rookieLeaders = await this.repo.find({
            select: {
                id: true,
                team_name: true,
                goals: true,
                player_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    nhl_id: true,
                    isgoalie: true,
                },
            },
            relations: ['player_id'],
            where: {
                playing_year: season,
                season_type: seasonType,
                player_status: 'Rookie',
            },
            order: {
                goals: 'DESC',
            },
            take: 10,
        });
        const rookieLeadersWithTeamInfo = await this.setTeamInfo(rookieLeaders);
        return rookieLeadersWithTeamInfo;
    }
    async getRookieLeaders(season, seasonType) {
        const rookieLeaders = await this.repo.find({
            select: {
                id: true,
                team_name: true,
                points: true,
                player_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    nhl_id: true,
                    isgoalie: true,
                },
            },
            relations: ['player_id'],
            where: {
                playing_year: season,
                season_type: seasonType,
                player_status: 'Rookie',
            },
            order: {
                points: 'DESC',
            },
            take: 10,
        });
        const rookieLeadersWithTeamInfo = await this.setTeamInfo(rookieLeaders);
        return rookieLeadersWithTeamInfo;
    }
    async getShGoalsLeaders(season, seasonType) {
        const shGoalsLeaders = await this.repo.find({
            select: {
                id: true,
                team_name: true,
                sh_goals: true,
                player_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    nhl_id: true,
                    isgoalie: true,
                },
            },
            relations: ['player_id'],
            where: {
                playing_year: season,
                season_type: seasonType,
            },
            order: {
                sh_goals: 'DESC',
            },
            take: 10,
        });
        const shGoalsLeadersWithTeamInfo = await this.setTeamInfo(shGoalsLeaders);
        return shGoalsLeadersWithTeamInfo;
    }
    async getShotsLeaders(season, seasonType) {
        const shotsLeaders = await this.repo.find({
            select: {
                id: true,
                team_name: true,
                shots: true,
                player_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    nhl_id: true,
                    isgoalie: true,
                },
            },
            relations: ['player_id'],
            where: {
                playing_year: season,
                season_type: seasonType,
            },
            order: {
                shots: 'DESC',
            },
            take: 10,
        });
        const shotsLeadersWithTeamInfo = await this.setTeamInfo(shotsLeaders);
        return shotsLeadersWithTeamInfo;
    }
    async setShootingLeaders(array) {
        return await Promise.all(array.map(async (item) => ({
            ...item,
            shooting_pct: Number(item.shooting_pct),
        })));
    }
    async setTeamInfo(array) {
        return await Promise.all(array.map(async (item) => ({
            ...item,
            teamInfo: await this.getTeamInfo(item.team_name),
        })));
    }
    async getTeamInfo(teamName) {
        return await this.teamInfoRepo.findOne({
            select: {
                id: true,
                city: true,
                teamlogo: true,
                nickname: true,
            },
            where: {
                shortname: teamName,
            },
        });
    }
};
exports.ApiPlayerLeadersStatsService = ApiPlayerLeadersStatsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Players_Stats_V2)),
    tslib_1.__param(1, (0, typeorm_1.InjectRepository)(entities_1.Teams_V2)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof axios_1.HttpService !== "undefined" && axios_1.HttpService) === "function" ? _c : Object])
], ApiPlayerLeadersStatsService);


/***/ }),
/* 193 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiPlayerStatsService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(32);
const typeorm_2 = __webpack_require__(13);
let ApiPlayerStatsService = exports.ApiPlayerStatsService = class ApiPlayerStatsService {
    constructor(repo, teamInfoRepo) {
        this.repo = repo;
        this.teamInfoRepo = teamInfoRepo;
    }
    async getAll(season) {
        const players = await this.repo.find({
            where: {
                playing_year: season,
            },
        });
        const playersWithTeamInfo = this.setTeamInfo(players);
        return playersWithTeamInfo;
    }
    async updatePlayerById(id, season, attrs) {
        const player = await this.repo.findOneByOrFail({
            player_id: {
                id: id,
            },
            playing_year: season,
        });
        if (!player) {
            throw new common_1.NotFoundException('player not found');
        }
        Object.assign(player, attrs);
        return this.repo.save(player);
    }
    async deletePlayer(id, season) {
        const player = await this.repo.findOneByOrFail({
            id,
            playing_year: season,
        });
        if (!player) {
            throw new common_1.NotFoundException('player not found');
        }
        return this.repo.remove(player);
    }
    async getAllStats(season, seasonType) {
        const allStats = await this.repo.find({
            select: {
                id: true,
                team_name: true,
                position: true,
                games_played: true,
                goals: true,
                assists: true,
                points: true,
                plus_minus: true,
                penalty_minutes: true,
                pp_goals: true,
                sh_goals: true,
                gw_goals: true,
                gt_goals: true,
                shots: true,
                shooting_pct: true,
                minutes_played: true,
                minutes_per_game: true,
                fo_pct: true,
                pass_pct: true,
                corner_pct: true,
                hits: true,
                blocked_shots: true,
                player_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    nhl_id: true,
                    isdefense: true,
                    isforward: true,
                },
            },
            relations: ['player_id'],
            where: {
                playing_year: season,
                season_type: seasonType,
            },
            order: {
                points: 'DESC',
            },
        });
        const allStatsWithTeamInfo = await this.setTeamInfo(allStats);
        const allStatsWithTeamInfoConverted = await this.convertStats(allStatsWithTeamInfo);
        return allStatsWithTeamInfoConverted;
    }
    async getPlayerStatsByPlayerId(season, seasonType, playerId) {
        const allStats = await this.repo.find({
            select: {
                id: true,
                team_name: true,
                position: true,
                games_played: true,
                goals: true,
                assists: true,
                points: true,
                plus_minus: true,
                penalty_minutes: true,
                pp_goals: true,
                sh_goals: true,
                gw_goals: true,
                gt_goals: true,
                shots: true,
                shooting_pct: true,
                minutes_played: true,
                minutes_per_game: true,
                fo_pct: true,
                pass_pct: true,
                corner_pct: true,
                hits: true,
                blocked_shots: true,
                player_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    nhl_id: true,
                    isdefense: true,
                    isforward: true,
                },
            },
            relations: ['player_id'],
            where: {
                playing_year: season,
                season_type: seasonType,
                player_id: {
                    id: playerId,
                },
            },
            order: {
                points: 'DESC',
            },
        });
        const allStatsWithTeamInfo = await this.setTeamInfo(allStats);
        const allStatsWithTeamInfoConverted = await this.convertStats(allStatsWithTeamInfo);
        return allStatsWithTeamInfoConverted;
    }
    async setTeamInfo(array) {
        return await Promise.all(array.map(async (item) => ({
            ...item,
            teamInfo: await this.getTeamInfo(item.team_name),
        })));
    }
    async getTeamInfo(teamName) {
        return await this.teamInfoRepo.findOne({
            select: {
                id: true,
                city: true,
                teamlogo: true,
                nickname: true,
                shortname: true,
            },
            where: {
                shortname: teamName,
            },
        });
    }
    async convertStats(array) {
        return await Promise.all(array.map((stat) => ({
            ...stat,
            games_played: Number(stat.games_played),
            goals: Number(stat.goals),
            assists: Number(stat.assists),
            points: Number(stat.points),
            plus_minus: Number(stat.plus_minus),
            penalty_minutes: Number(stat.penalty_minutes),
            pp_goals: Number(stat.pp_goals),
            sh_goals: Number(stat.sh_goals),
            gw_goals: Number(stat.gw_goals),
            gt_goals: Number(stat.gt_goals),
            shots: Number(stat.shots),
            shooting_pct: Number(stat.shooting_pct),
            minutes_played: Number(stat.minutes_played),
            minutes_per_game: Number(stat.minutes_per_game),
            fo_pct: Number(stat.fo_pct),
            pass_pct: Number(stat.pass_pct),
            corner_pct: Number(stat.corner_pct),
            hits: Number(stat.hits),
            blocked_shots: Number(stat.blocked_shots),
        })));
    }
};
exports.ApiPlayerStatsService = ApiPlayerStatsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Players_Stats_V2)),
    tslib_1.__param(1, (0, typeorm_1.InjectRepository)(entities_1.Teams_V2)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], ApiPlayerStatsService);


/***/ }),
/* 194 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiPlayerAllTimeStatsService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(32);
const typeorm_2 = __webpack_require__(13);
let ApiPlayerAllTimeStatsService = exports.ApiPlayerAllTimeStatsService = class ApiPlayerAllTimeStatsService {
    constructor(repo, teamInfoRepo, dataSource) {
        this.repo = repo;
        this.teamInfoRepo = teamInfoRepo;
        this.dataSource = dataSource;
    }
    async getAllTimePlayerStatsBySeasonByType(seasonType) {
        const allStats = await this.repo.find({
            select: {
                id: true,
                team_name: true,
                position: true,
                games_played: true,
                goals: true,
                assists: true,
                points: true,
                plus_minus: true,
                penalty_minutes: true,
                pp_goals: true,
                sh_goals: true,
                gw_goals: true,
                shots: true,
                shooting_pct: true,
                minutes_played: true,
                minutes_per_game: true,
                fo_pct: true,
                pass_pct: true,
                corner_pct: true,
                hit_per_game: true,
                blocked_shots: true,
                playing_year: true,
                player_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    nhl_id: true,
                    isdefense: true,
                    isforward: true,
                },
            },
            relations: ['player_id'],
            where: {
                season_type: seasonType,
            },
            take: 1500,
            order: {
                points: 'DESC',
            },
        });
        const allStatsWithTeamInfo = await this.setTeamInfo(allStats);
        const allStatsWithTeamInfoConverted = await this.convertStats(allStatsWithTeamInfo, false);
        return allStatsWithTeamInfoConverted;
    }
    async getAllTimePlayerStatsSummedBySeasonByType(seasonType) {
        const result = await this.dataSource.query(`select
      b.firstname as firstname,
      b.lastname as lastname,
      b.isdefense as isdefense,
      b.isforward as isforward,
      b.isgoalie as isgoalie,
      b.nhl_id as nhl_id,
      a.player_id as player_id,
      a.season_type as season_type, 
      a.position as position,
      sum(a.games_played) as games_played, 
      sum(a.goals) as goals, 
      sum(a.assists) as assists, 
      sum(a.points) as points, 
      sum(a.plus_minus) as plus_minus, 
      sum(a.penalty_minutes) as penalty_minutes, 
      sum(a.sh_goals) as sh_goals, 
      sum(a.pp_goals) as pp_goals, 
      sum(a.gw_goals) as gw_goals, 
      sum(a.shots) as shots, 
      sum(a.minutes_played) as minutes_played, 
      sum(a.hits) as hits, 
      sum(a.blocked_shots) as blocked_shots
      from
      players_stats_v2 as a
      left join players_v2 as b
      on b.id = a.player_id
      where (a.player_id = b.id
      and
      a.points > '0'
      and
      a.season_type = '${seasonType}')
      group by b.firstname, b.lastname, b.isgoalie, b.isdefense, b.isforward, b.nhl_id, a.player_id, a.season_type, a.position
      order by points DESC`);
        const allTimeStatsConverted = await this.convertStats(result, true);
        return allTimeStatsConverted;
    }
    async setTeamInfo(array) {
        return await Promise.all(array.map(async (item) => ({
            ...item,
            teamInfo: await this.getTeamInfo(item.team_name),
        })));
    }
    async getTeamInfo(teamName) {
        return await this.teamInfoRepo.findOne({
            select: {
                id: true,
                city: true,
                teamlogo: true,
                nickname: true,
            },
            where: {
                shortname: teamName,
            },
        });
    }
    async convertStats(array, raw) {
        return await Promise.all(array.map((stat) => ({
            playing_year: stat.playing_year,
            season_type: stat.season_type,
            teamInfo: !raw ? stat['teamInfo'] : null,
            player_id: !raw
                ? stat.player_id
                : {
                    id: stat['player_id'],
                    firstname: stat['firstname'],
                    lastname: stat['lastname'],
                    nhl_id: stat['nhl_id'],
                    isactive: null,
                    isgoalie: null,
                    isdefense: stat['isdefense'],
                    isforward: stat['isforward'],
                    is_protected: null,
                },
            position: stat.position,
            games_played: Number(stat.games_played),
            goals: Number(stat.goals),
            assists: Number(stat.assists),
            points: Number(stat.points),
            pointsPerSixty: Number(((Number(stat.points) / Number(stat.minutes_played)) * 60).toFixed(2)),
            plus_minus: Number(stat.plus_minus),
            penalty_minutes: Number(stat.penalty_minutes),
            pp_goals: Number(stat.pp_goals),
            sh_goals: Number(stat.sh_goals),
            gw_goals: Number(stat.gw_goals),
            shots: Number(stat.shots),
            shooting_pct: !raw
                ? Number(stat.shooting_pct)
                : Number(((Number(stat.goals) / Number(stat.shots)) * 100).toFixed(1)),
            minutes_per_game: !raw
                ? Number(stat.minutes_per_game)
                : Number((Number(stat.minutes_played) / Number(stat.games_played)).toFixed(1)),
            fo_pct: !raw ? Number(stat.fo_pct) : null,
            pass_pct: !raw ? Number(stat.pass_pct) : null,
            corner_pct: !raw ? Number(stat.corner_pct) : null,
            hit_per_game: !raw
                ? Number(stat.hit_per_game)
                : Number((Number(stat.hits) / Number(stat.games_played)).toFixed(1)),
            blocked_shots: Number(stat.blocked_shots),
        })));
    }
};
exports.ApiPlayerAllTimeStatsService = ApiPlayerAllTimeStatsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Players_Stats_V2)),
    tslib_1.__param(1, (0, typeorm_1.InjectRepository)(entities_1.Teams_V2)),
    tslib_1.__param(2, (0, typeorm_1.InjectDataSource)()),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.DataSource !== "undefined" && typeorm_2.DataSource) === "function" ? _c : Object])
], ApiPlayerAllTimeStatsService);


/***/ }),
/* 195 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiUserPlayerStatsService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(32);
const typeorm_2 = __webpack_require__(13);
let ApiUserPlayerStatsService = exports.ApiUserPlayerStatsService = class ApiUserPlayerStatsService {
    constructor(repo, teamInfoRepo, dataSource) {
        this.repo = repo;
        this.teamInfoRepo = teamInfoRepo;
        this.dataSource = dataSource;
    }
    async getUserPlayerStatsBySeasonType(userId, seasonType) {
        const userTeams = await this.teamInfoRepo.findBy({ users_id: userId });
        const userTeamsWithPlayerStats = await this.setPlayerStats(userTeams, seasonType);
        const userTeamsWithPlayersStatsConverted = await this.setConvertedPlayersStats(userTeamsWithPlayerStats, false);
        return userTeamsWithPlayersStatsConverted;
    }
    async getUserPlayerStatsAllTimeBySeasonType(userId, seasonType) {
        const userTeams = await this.teamInfoRepo.findBy({ users_id: userId });
        const userTeamsWithPlayerStats = await this.setPlayerAllTimeStats(userTeams, seasonType);
        const userTeamsWithPlayersStatsConverted = await this.setConvertedPlayersStats(userTeamsWithPlayerStats, true);
        return userTeamsWithPlayersStatsConverted;
    }
    async getTeamPlayersByTeamName(teamName, season) {
        return await this.repo.find({
            select: {
                player_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                },
            },
            where: {
                team_name: teamName,
                playing_year: season,
                season_type: 'Regular',
            },
        });
    }
    async setPlayerStats(array, seasonType) {
        return await Promise.all(array.map(async (item) => ({
            ...item,
            playerStats: await this.getPlayerStats(item.shortname, seasonType),
        })));
    }
    async setPlayerAllTimeStats(array, seasonType) {
        return await Promise.all(array.map(async (item) => ({
            ...item,
            playerStats: await this.getPlayerAllTimeStats(item.shortname, seasonType),
        })));
    }
    async getPlayerAllTimeStats(teamShortName, seasonType) {
        return await this.dataSource.query(`select
      b.firstname as firstname,
      b.lastname as lastname,
      b.isdefense as isdefense,
      b.isforward as isforward,
      b.isgoalie as isgoalie,
      b.nhl_id as nhl_id,
      a.player_id as player_id,
      a.season_type as season_type, 
      a.position as position,
      a.team_name as team_name,
      sum(a.games_played) as games_played, 
      sum(a.goals) as goals, 
      sum(a.assists) as assists, 
      sum(a.points) as points, 
      sum(a.plus_minus) as plus_minus, 
      sum(a.penalty_minutes) as penalty_minutes, 
      sum(a.sh_goals) as sh_goals, 
      sum(a.pp_goals) as pp_goals, 
      sum(a.gw_goals) as gw_goals, 
      sum(a.gt_goals) as gt_goals, 
      sum(a.shots) as shots, 
      sum(a.minutes_played) as minutes_played, 
      sum(a.hits) as hits, 
      sum(a.blocked_shots) as blocked_shots
      from
      players_stats_v2 as a
      left join players_v2 as b
      on b.id = a.player_id
      where (a.player_id = b.id
      and
      a.points > '0'
      and
      a.season_type = '${seasonType}'
      and a.team_name = '${teamShortName}')
      group by b.firstname, b.lastname, b.isgoalie, b.isdefense, b.isforward, b.nhl_id, a.player_id, a.season_type, a.position, a.team_name
      order by points DESC`);
    }
    async getPlayerStats(teamShortName, seasonType) {
        return await this.repo.find({
            select: {
                id: true,
                team_name: true,
                position: true,
                games_played: true,
                goals: true,
                assists: true,
                points: true,
                plus_minus: true,
                penalty_minutes: true,
                pp_goals: true,
                sh_goals: true,
                gw_goals: true,
                gt_goals: true,
                shots: true,
                shooting_pct: true,
                minutes_played: true,
                minutes_per_game: true,
                fo_pct: true,
                pass_pct: true,
                corner_pct: true,
                hits: true,
                blocked_shots: true,
                playing_year: true,
                player_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    nhl_id: true,
                    isdefense: true,
                    isforward: true,
                },
            },
            relations: ['player_id'],
            where: {
                team_name: teamShortName,
                season_type: seasonType,
            },
            order: {
                points: 'DESC',
            },
        });
    }
    async setConvertedPlayersStats(array, raw) {
        return await Promise.all(array.map(async (item) => ({
            ...item,
            playerStats: await this.convertStats(item.playerStats, raw, item),
        })));
    }
    async convertStats(array, raw, teamInfo) {
        return await Promise.all(array.map((stat) => ({
            playing_year: stat.playing_year,
            season_type: stat.season_type,
            team_name: stat.team_name,
            teamInfo: !raw
                ? {
                    id: teamInfo.id,
                    city: teamInfo.city,
                    nickname: teamInfo.nickname,
                    teamlogo: teamInfo.teamlogo,
                }
                : null,
            games_played: Number(stat.games_played),
            goals: Number(stat.goals),
            assists: Number(stat.assists),
            points: Number(stat.points),
            plus_minus: Number(stat.plus_minus),
            penalty_minutes: Number(stat.penalty_minutes),
            pp_goals: Number(stat.pp_goals),
            sh_goals: Number(stat.sh_goals),
            gw_goals: Number(stat.gw_goals),
            gt_goals: Number(stat.gt_goals),
            shots: Number(stat.shots),
            shooting_pct: !raw
                ? Number(stat.shooting_pct)
                : Number(((Number(stat.goals) / Number(stat.shots)) * 100).toFixed(1)),
            minutes_per_game: !raw
                ? Number(stat.minutes_per_game)
                : Number((Number(stat.minutes_played) / Number(stat.games_played)).toFixed(1)),
            fo_pct: !raw ? Number(stat.fo_pct) : null,
            pass_pct: !raw ? Number(stat.pass_pct) : null,
            corner_pct: !raw ? Number(stat.corner_pct) : null,
            minutes_played: Number(stat.minutes_played),
            hits: Number(stat.hits),
            blocked_shots: Number(stat.blocked_shots),
            pointsPerSixty: Number(((Number(stat.points) / Number(stat.minutes_played)) * 60).toFixed(2)),
            hit_per_game: Number((Number(stat.hits) / Number(stat.games_played)).toFixed(1)),
            player_id: !raw
                ? stat.player_id
                : {
                    id: stat['player_id'],
                    firstname: stat['firstname'],
                    lastname: stat['lastname'],
                    nhl_id: stat['nhl_id'],
                    isactive: null,
                    isgoalie: null,
                    isdefense: stat['isdefense'],
                    isforward: stat['isforward'],
                    is_protected: null,
                },
        })));
    }
};
exports.ApiUserPlayerStatsService = ApiUserPlayerStatsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Players_Stats_V2)),
    tslib_1.__param(1, (0, typeorm_1.InjectRepository)(entities_1.Teams_V2)),
    tslib_1.__param(2, (0, typeorm_1.InjectDataSource)()),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.DataSource !== "undefined" && typeorm_2.DataSource) === "function" ? _c : Object])
], ApiUserPlayerStatsService);


/***/ }),
/* 196 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(197), exports);


/***/ }),
/* 197 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlayerStatsMiddleware = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
let PlayerStatsMiddleware = exports.PlayerStatsMiddleware = class PlayerStatsMiddleware {
    use(req, res, next) {
        console.log('Request Player Stats...');
        next();
    }
};
exports.PlayerStatsMiddleware = PlayerStatsMiddleware = tslib_1.__decorate([
    (0, common_1.Injectable)()
], PlayerStatsMiddleware);


/***/ }),
/* 198 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(199), exports);


/***/ }),
/* 199 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiSalariesModule = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const axios_1 = __webpack_require__(163);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(32);
const controllers_1 = __webpack_require__(200);
const middlewares_1 = __webpack_require__(204);
const services_1 = __webpack_require__(202);
let ApiSalariesModule = exports.ApiSalariesModule = class ApiSalariesModule {
    configure(consumer) {
        consumer.apply(middlewares_1.SalariesMiddleware).forRoutes('*');
    }
};
exports.ApiSalariesModule = ApiSalariesModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule,
            typeorm_1.TypeOrmModule.forFeature([
                entities_1.Players_Stats_V2,
                entities_1.Teams_V2,
                entities_1.Salaries_V2,
                entities_1.Player_Ratings_V2,
                entities_1.Goalie_Ratings_V2,
                entities_1.Goalies_Stats_V2,
                entities_1.Players_V2,
            ]),
        ],
        controllers: [controllers_1.SalariesController],
        providers: [services_1.ApiSalariesService],
    })
], ApiSalariesModule);


/***/ }),
/* 200 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(201), exports);


/***/ }),
/* 201 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SalariesController = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(35);
const common_1 = __webpack_require__(1);
const services_1 = __webpack_require__(202);
let SalariesController = exports.SalariesController = class SalariesController {
    constructor(salariesService) {
        this.salariesService = salariesService;
    }
    async getSalaries() {
        const salaries = await this.salariesService.getAll();
        if (!salaries || salaries.length < 1) {
            throw new common_1.NotFoundException('salaries not found');
        }
        return salaries;
    }
    updateUserById(param, body) {
        return this.salariesService.updateSalaryById(parseInt(param.id), body);
    }
    addUser(body) {
        return this.salariesService.addSalary(body);
    }
    async getAllPlayerSalaries(param) {
        const salaries = await this.salariesService.getAllPlayerSalaries(param.season, param.ratingSeason);
        if (!salaries) {
            throw new common_1.NotFoundException('Player Salaries not found');
        }
        return salaries;
    }
    async getAllGoaliesSalaries(param) {
        const salaries = await this.salariesService.getAllGoaliesSalaries(param.season, param.ratingSeason);
        if (!salaries) {
            throw new common_1.NotFoundException('Goalie Salaries not found');
        }
        return salaries;
    }
    async getUserTeamPlayerSalaries(param) {
        const salaries = await this.salariesService.getUserTeamPlayerSalaries(param.teamName, param.season, param.ratingsSeason);
        if (!salaries) {
            throw new common_1.NotFoundException('User Player Salaries not found');
        }
        return salaries;
    }
    async getUserTeamGoaliesSalaries(param) {
        const salaries = await this.salariesService.getUserTeamGoaliesSalaries(param.teamName, param.season, param.ratingsSeason);
        if (!salaries) {
            throw new common_1.NotFoundException('User Goalie Salaries not found');
        }
        return salaries;
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], SalariesController.prototype, "getSalaries", null);
tslib_1.__decorate([
    (0, common_1.Put)('/:id'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], SalariesController.prototype, "updateUserById", null);
tslib_1.__decorate([
    (0, common_1.Post)('/add'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof entities_1.SalaryAllDto !== "undefined" && entities_1.SalaryAllDto) === "function" ? _d : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], SalariesController.prototype, "addUser", null);
tslib_1.__decorate([
    (0, common_1.Get)('/all/players/:season/:ratingSeason'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], SalariesController.prototype, "getAllPlayerSalaries", null);
tslib_1.__decorate([
    (0, common_1.Get)('/all/goalies/:season/:ratingSeason'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], SalariesController.prototype, "getAllGoaliesSalaries", null);
tslib_1.__decorate([
    (0, common_1.Get)('/user/:teamName/players/:season/:ratingsSeason'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], SalariesController.prototype, "getUserTeamPlayerSalaries", null);
tslib_1.__decorate([
    (0, common_1.Get)('/user/:teamName/goalies/:season/:ratingsSeason'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], SalariesController.prototype, "getUserTeamGoaliesSalaries", null);
exports.SalariesController = SalariesController = tslib_1.__decorate([
    (0, common_1.Controller)('salaries'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof services_1.ApiSalariesService !== "undefined" && services_1.ApiSalariesService) === "function" ? _a : Object])
], SalariesController);


/***/ }),
/* 202 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(203), exports);


/***/ }),
/* 203 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiSalariesService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(32);
const typeorm_2 = __webpack_require__(13);
const axios_1 = __webpack_require__(163);
const rxjs_1 = __webpack_require__(168);
let ApiSalariesService = exports.ApiSalariesService = class ApiSalariesService {
    constructor(repo, teamsRepo, playersRepo, playersStatsRepo, playerRatingsRepo, goaliesStatsRepo, goalieRatingsRepo, httpService) {
        this.repo = repo;
        this.teamsRepo = teamsRepo;
        this.playersRepo = playersRepo;
        this.playersStatsRepo = playersStatsRepo;
        this.playerRatingsRepo = playerRatingsRepo;
        this.goaliesStatsRepo = goaliesStatsRepo;
        this.goalieRatingsRepo = goalieRatingsRepo;
        this.httpService = httpService;
        this.nhlAPI = 'https://api-web.nhle.com/v1/player';
    }
    async getAllPlayerSalaries(season, ratingSeason) {
        const allPlayersInSeason = await this.playersStatsRepo.find({
            select: {
                id: true,
                team_name: true,
                player_id: {
                    id: true,
                },
            },
            where: {
                player_id: {
                    isgoalie: false,
                    isactive: true,
                },
                season_type: 'Regular',
                playing_year: season,
            },
        });
        const allSalariesForPlayersInSeason = await this.setPlayersSalaries(allPlayersInSeason);
        const allSalariesAndRatingsForPlayersInSeason = await this.setPlayerRating(allSalariesForPlayersInSeason, ratingSeason);
        const allSalariesAndRatingsForPlayersInSeasonWithTeamInfo = await this.setTeamInfo(allSalariesAndRatingsForPlayersInSeason);
        return allSalariesAndRatingsForPlayersInSeasonWithTeamInfo;
    }
    async getAllGoaliesSalaries(season, ratingSeason) {
        const allGoaliesInSeason = await this.goaliesStatsRepo.find({
            select: {
                id: true,
                team_name: true,
                player_id: {
                    id: true,
                },
            },
            where: {
                player_id: {
                    isgoalie: true,
                },
                season_type: 'Regular',
                playing_year: season,
            },
        });
        const allSalariesForGoaliesInSeason = await this.setPlayersSalaries(allGoaliesInSeason);
        const allSalariesAndRatingsForGoaliesInSeason = await this.setGoalieRating(allSalariesForGoaliesInSeason, ratingSeason);
        const allSalariesAndRatingsForGoaliesInSeasonWithTeamInfo = await this.setTeamInfo(allSalariesAndRatingsForGoaliesInSeason);
        return allSalariesAndRatingsForGoaliesInSeasonWithTeamInfo;
    }
    async getUserTeamPlayerSalaries(teamName, season, ratingsSeason) {
        const allPlayersInSeason = await this.playersStatsRepo.find({
            select: {
                id: true,
                team_name: true,
                player_id: {
                    id: true,
                },
            },
            where: {
                player_id: {
                    isgoalie: false,
                },
                team_name: teamName,
                season_type: 'Regular',
                playing_year: season,
            },
        });
        const allSalariesForPlayersInSeason = await this.setPlayersSalaries(allPlayersInSeason);
        const allSalariesAndRatingsForPlayersInSeason = await this.setPlayerRating(allSalariesForPlayersInSeason, ratingsSeason);
        const allSalariesRatingsNHLStatsForPlayersInSeason = await this.setNHLStats(allSalariesAndRatingsForPlayersInSeason);
        const allSalariesAndRatingsForPlayersInSeasonWithTeamInfo = await this.setTeamInfo(allSalariesRatingsNHLStatsForPlayersInSeason);
        return allSalariesAndRatingsForPlayersInSeasonWithTeamInfo;
    }
    async getUserTeamGoaliesSalaries(teamName, season, ratingsSeason) {
        const allGoaliesInSeason = await this.goaliesStatsRepo.find({
            select: {
                id: true,
                team_name: true,
                player_id: {
                    id: true,
                },
            },
            where: {
                player_id: {
                    isgoalie: true,
                },
                team_name: teamName,
                season_type: 'Regular',
                playing_year: season,
            },
        });
        const allSalariesForGoaliesInSeason = await this.setPlayersSalaries(allGoaliesInSeason);
        const allSalariesAndRatingsForGoaliesInSeason = await this.setGoalieRating(allSalariesForGoaliesInSeason, ratingsSeason);
        const allSalariesRatingsNHLStatsForPlayersInSeason = await this.setNHLStats(allSalariesAndRatingsForGoaliesInSeason);
        const allSalariesAndRatingsForGoaliesInSeasonWithTeamInfo = await this.setTeamInfo(allSalariesRatingsNHLStatsForPlayersInSeason);
        return allSalariesAndRatingsForGoaliesInSeasonWithTeamInfo;
    }
    async setPlayersSalaries(array) {
        return await Promise.all(array.map(async (item) => ({
            ...item,
            salaries: await this.getSalary(item.player_id.id),
        })));
    }
    async getSalary(playerId) {
        return await this.repo.findOne({
            select: {
                id: true,
                player_id: true,
                season_2023: true,
                season_2024: true,
                season_2025: true,
                season_2026: true,
            },
            where: {
                player_id: playerId.toString(),
            },
        });
    }
    async setPlayerRating(array, season) {
        return await Promise.all(array.map(async (item) => ({
            ...item,
            ratings: await this.getPlayerRating(item.player_id.id, season),
        })));
    }
    async setGoalieRating(array, season) {
        return await Promise.all(array.map(async (item) => ({
            ...item,
            ratings: await this.getGoalieRating(item.player_id.id, season),
        })));
    }
    async getGoalieRating(playerId, season) {
        return await this.goalieRatingsRepo.findOne({
            select: {
                id: true,
                passing: true,
                speed: true,
                skating: true,
                wins: true,
                goals_against_avg: true,
                save_pct: true,
                games_played: true,
            },
            where: {
                player_id: playerId,
                playing_year: season,
            },
        });
    }
    async getPlayerRating(playerId, season) {
        return await this.playerRatingsRepo.findOne({
            select: {
                id: true,
                c_rate: true,
                l_rate: true,
                r_rate: true,
                ld_rate: true,
                rd_rate: true,
                skating: true,
                speed: true,
                passing: true,
                shooting: true,
                face_off: true,
                forecheck: true,
                assist_rating: true,
                clear_crease: true,
                shot_block: true,
                pk: true,
                physical: true,
                rock: true,
                intimidation: true,
                game_fatigue: true,
                shift_fatigue: true,
                points: true,
                goals: true,
                assists: true,
                shots: true,
                shooting_pct: true,
                games_played: true,
            },
            where: {
                player_id: playerId,
                playing_year: season,
            },
        });
    }
    async setTeamInfo(array) {
        return await Promise.all(array.map(async (item) => ({
            ...item,
            teamInfo: await this.getTeamInfo(item.team_name),
        })));
    }
    async getTeamInfo(teamName) {
        if (teamName) {
            return await this.teamsRepo.findOne({
                select: {
                    id: true,
                    city: true,
                    teamlogo: true,
                    nickname: true,
                },
                where: {
                    shortname: teamName,
                },
            });
        }
        else {
            return {};
        }
    }
    async setNHLStats(array) {
        return await Promise.all(array.map(async (item) => ({
            ...item,
            nhlHeadShot: await this.getNhlPlayerHeadShotByPlayerId(item.player_id.nhl_id),
            nhlStats: await this.getNhlPlayerStatsByPlayerId(item.player_id.nhl_id, '20232024'),
            nextNhlStats: await this.getNhlPlayerStatsByPlayerId(item.player_id.nhl_id, '20242025'), //TODO CHANGE EVERY YEAR
        })));
    }
    async getNhlPlayerHeadShotByPlayerId(playerId) {
        const stats = this.httpService.get(`${this.nhlAPI}/${playerId}/landing`);
        const response = await (0, rxjs_1.firstValueFrom)(stats);
        return response.data.headshot;
    }
    async getNhlPlayerStatsByPlayerId(playerId, season) {
        const stats = this.httpService.get(`${this.nhlAPI}/${playerId}/landing`);
        const response = await (0, rxjs_1.firstValueFrom)(stats);
        console.log(response);
        return response.data.featuredStats.regularSeason.subSeason;
    }
    async getAll() {
        const salaries = await this.repo.find();
        const salariesWithPlayerInfo = await this.setPlayerInfo(salaries);
        return salariesWithPlayerInfo;
    }
    async setPlayerInfo(array) {
        return await Promise.all(array.map(async (item) => ({
            ...item,
            playerInfo: await this.getPlayerInfo(item.player_id),
        })));
    }
    async getPlayerInfo(playerId) {
        if (playerId) {
            return await this.playersRepo.findOne({
                select: {
                    id: true,
                    firstname: true,
                    lastname: true,
                },
                where: {
                    id: playerId,
                },
            });
        }
        else {
            return {};
        }
    }
    async addSalary(body) {
        const salary = await this.repo.create(body);
        return this.repo.save(salary);
    }
    async updateSalaryById(id, attrs) {
        const salary = await this.repo.findOneByOrFail({ id });
        if (!salary) {
            throw new common_1.NotFoundException('salary not found');
        }
        Object.assign(salary, attrs);
        return this.repo.save(salary);
    }
};
exports.ApiSalariesService = ApiSalariesService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Salaries_V2)),
    tslib_1.__param(1, (0, typeorm_1.InjectRepository)(entities_1.Teams_V2)),
    tslib_1.__param(2, (0, typeorm_1.InjectRepository)(entities_1.Players_V2)),
    tslib_1.__param(3, (0, typeorm_1.InjectRepository)(entities_1.Players_Stats_V2)),
    tslib_1.__param(4, (0, typeorm_1.InjectRepository)(entities_1.Player_Ratings_V2)),
    tslib_1.__param(5, (0, typeorm_1.InjectRepository)(entities_1.Goalies_Stats_V2)),
    tslib_1.__param(6, (0, typeorm_1.InjectRepository)(entities_1.Goalie_Ratings_V2)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object, typeof (_d = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _d : Object, typeof (_e = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _e : Object, typeof (_f = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _f : Object, typeof (_g = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _g : Object, typeof (_h = typeof axios_1.HttpService !== "undefined" && axios_1.HttpService) === "function" ? _h : Object])
], ApiSalariesService);


/***/ }),
/* 204 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(205), exports);


/***/ }),
/* 205 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SalariesMiddleware = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
let SalariesMiddleware = exports.SalariesMiddleware = class SalariesMiddleware {
    use(req, res, next) {
        console.log('Request Salaries...');
        next();
    }
};
exports.SalariesMiddleware = SalariesMiddleware = tslib_1.__decorate([
    (0, common_1.Injectable)()
], SalariesMiddleware);


/***/ }),
/* 206 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(207), exports);


/***/ }),
/* 207 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiScheduleModule = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(32);
const controllers_1 = __webpack_require__(208);
const middlewares_1 = __webpack_require__(212);
const services_1 = __webpack_require__(210);
let ApiScheduleModule = exports.ApiScheduleModule = class ApiScheduleModule {
    configure(consumer) {
        consumer.apply(middlewares_1.ScheduleMiddleware).forRoutes('*');
    }
};
exports.ApiScheduleModule = ApiScheduleModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entities_1.Schedule_V2, entities_1.Teams_V2, entities_1.Team_Stats_V2])],
        controllers: [controllers_1.ScheduleController],
        providers: [services_1.ApiScheduleService],
    })
], ApiScheduleModule);


/***/ }),
/* 208 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(209), exports);


/***/ }),
/* 209 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScheduleController = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
const services_1 = __webpack_require__(210);
let ScheduleController = exports.ScheduleController = class ScheduleController {
    constructor(scheduleService) {
        this.scheduleService = scheduleService;
    }
    async getCompleteScheduleBySeason(param) {
        const stats = await this.scheduleService.getCompleteScheduleBySeason(param.season);
        if (!stats || stats.length < 1) {
            throw new common_1.NotFoundException('Player Leader Stats not found');
        }
        return stats;
    }
    async getNextDays(param) {
        const stats = await this.scheduleService.getNextDays(param.season, Number(param.currentDay));
        if (!stats || stats.length < 1) {
            throw new common_1.NotFoundException('Player Leader Stats not found');
        }
        return stats;
    }
    updateGameById(param, body) {
        return this.scheduleService.updateGameById(parseInt(param.id), body);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('/:season'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], ScheduleController.prototype, "getCompleteScheduleBySeason", null);
tslib_1.__decorate([
    (0, common_1.Get)('/next/:season/:currentDay'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], ScheduleController.prototype, "getNextDays", null);
tslib_1.__decorate([
    (0, common_1.Put)('/:id'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], ScheduleController.prototype, "updateGameById", null);
exports.ScheduleController = ScheduleController = tslib_1.__decorate([
    (0, common_1.Controller)('schedule'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof services_1.ApiScheduleService !== "undefined" && services_1.ApiScheduleService) === "function" ? _a : Object])
], ScheduleController);


/***/ }),
/* 210 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(211), exports);


/***/ }),
/* 211 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiScheduleService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(32);
const typeorm_2 = __webpack_require__(13);
let ApiScheduleService = exports.ApiScheduleService = class ApiScheduleService {
    constructor(repo, teamInfoRepo, teamStatsRepo) {
        this.repo = repo;
        this.teamInfoRepo = teamInfoRepo;
        this.teamStatsRepo = teamStatsRepo;
    }
    async getCompleteScheduleBySeason(season) {
        const schedule = await this.repo.find({
            where: {
                playing_year: season,
            },
            order: {
                game_day: 'ASC',
            },
        });
        const scheduleTeamInfo = await this.setTeamInfo(schedule);
        return scheduleTeamInfo;
    }
    async getNextDays(season, currentDay) {
        const schedule = await this.repo.find({
            where: {
                playing_year: season,
                game_day: (0, typeorm_2.Between)(currentDay, currentDay + 4),
            },
            order: {
                game_day: 'ASC',
            },
        });
        const scheduleTeamInfo = await this.setTeamNextInfo(schedule);
        return scheduleTeamInfo;
    }
    async updateGameById(gameId, gameData) {
        const game = await this.repo.findOneByOrFail({ id: gameId });
        if (!game) {
            throw new common_1.NotFoundException('player not found');
        }
        const attrs = {
            home_team_score: gameData.home_team_score,
            vis_team_score: gameData.vis_team_score,
        };
        Object.assign(game, attrs);
        return this.repo.save(game);
    }
    async getTeamLastFive(teamId, season) {
        const lastFive = await this.repo
            .createQueryBuilder('schedule')
            .where('schedule.playing_year = :year', { year: season })
            .andWhere(new typeorm_2.Brackets((qb) => {
            qb.where('schedule.home_team_id = :teamId', { teamId }).orWhere('schedule.vis_team_id = :teamId', { teamId });
        }))
            .andWhere('schedule.home_team_score is not null')
            .orderBy('schedule.game_day', 'DESC')
            .limit(5)
            .getMany();
        return await this.getLastFiveRecord(lastFive, Number(teamId));
    }
    async getLastFiveRecord(lastFive, teamId) {
        const lastFiveRecord = [];
        await lastFive.forEach((record) => {
            if (record.home_team_id === teamId) {
                if (Number(record.home_team_score) > Number(record.vis_team_score)) {
                    lastFiveRecord.push('W');
                }
                else if (Number(record.home_team_score) < Number(record.vis_team_score)) {
                    lastFiveRecord.push('L');
                }
                else {
                    lastFiveRecord.push('T');
                }
            }
            else {
                if (Number(record.vis_team_score) > Number(record.home_team_score)) {
                    lastFiveRecord.push('W');
                }
                else if (Number(record.vis_team_score) < Number(record.home_team_score)) {
                    lastFiveRecord.push('L');
                }
                else {
                    lastFiveRecord.push('T');
                }
            }
        });
        return lastFiveRecord;
    }
    async getVersusRecord(data, teamId) {
        let wins = 0;
        let loss = 0;
        let ties = 0;
        await data.forEach((game) => {
            if (game.vis_team_id === teamId) {
                Number(game.vis_team_score) > Number(game.home_team_score)
                    ? wins++
                    : Number(game.vis_team_score) === Number(game.home_team_score)
                        ? ties++
                        : loss++;
            }
            else if (game.home_team_id === teamId) {
                Number(game.home_team_score) > Number(game.vis_team_score)
                    ? wins++
                    : Number(game.home_team_score) === Number(game.vis_team_score)
                        ? ties++
                        : loss++;
            }
        });
        return {
            wins,
            loss,
            ties,
        };
    }
    async setTeamNextInfo(array) {
        return await Promise.all(array.map(async (item) => ({
            id: item.id,
            gameDay: item.game_day,
            visTeamScore: item.vis_team_score,
            visTeamInfo: await this.getTeamInfo(item.vis_team_id),
            visTeamLastFive: await this.getTeamLastFive(Number(item.vis_team_id), item.playing_year),
            visTeamRecord: await this.getTeamSeasonRecord(Number(item.vis_team_id), item.playing_year),
            visTeamVersus: await this.getTeamRecordVersus(Number(item.vis_team_id), Number(item.home_team_id), item.playing_year),
            homeTeamScore: item.home_team_score,
            homeTeamInfo: await this.getTeamInfo(item.home_team_id),
            homeTeamLastFive: await this.getTeamLastFive(Number(item.home_team_id), item.playing_year),
            homeTeamRecord: await this.getTeamSeasonRecord(Number(item.home_team_id), item.playing_year),
            homeTeamVersus: await this.getTeamRecordVersus(Number(item.home_team_id), Number(item.vis_team_id), item.playing_year),
        })));
    }
    async setTeamInfo(array) {
        return await Promise.all(array.map(async (item) => ({
            ...item,
            visTeamInfo: await this.getTeamInfo(item.vis_team_id),
            homeTeamInfo: await this.getTeamInfo(item.home_team_id),
        })));
    }
    async getTeamRecordVersus(teamOneId, teamTwoId, season) {
        const versus = await this.repo
            .createQueryBuilder('schedule')
            .where('schedule.playing_year = :year', { year: season })
            .where(new typeorm_2.Brackets((qb) => {
            qb.where('schedule.vis_team_id = :teamOneId', { teamOneId })
                .andWhere('schedule.home_team_id = :teamTwoId', { teamTwoId })
                .andWhere('schedule.playing_year = :year', { year: season })
                .andWhere('schedule.vis_team_score >= :empty', { empty: 0 });
        }))
            .orWhere(new typeorm_2.Brackets((qb) => {
            qb.where('schedule.vis_team_id = :teamTwoId', { teamTwoId })
                .andWhere('schedule.home_team_id = :teamOneId', { teamOneId })
                .andWhere('schedule.playing_year = :year', { year: season })
                .andWhere('schedule.vis_team_score >= :empty', { empty: 0 });
        }))
            .getMany();
        return await this.getVersusRecord(versus, Number(teamOneId));
    }
    async getTeamSeasonRecord(teamId, season) {
        return await this.teamStatsRepo.findOne({
            select: {
                id: true,
                wins: true,
                loss: true,
                ties: true,
            },
            where: {
                team_id: {
                    id: teamId,
                },
                playing_year: season,
                season_type: 'Regular',
            },
        });
    }
    async getTeamInfo(teamId) {
        return await this.teamInfoRepo.findOne({
            select: {
                id: true,
                city: true,
                teamlogo: true,
                nickname: true,
                teamcolor: true,
            },
            where: {
                id: teamId,
            },
        });
    }
};
exports.ApiScheduleService = ApiScheduleService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Schedule_V2)),
    tslib_1.__param(1, (0, typeorm_1.InjectRepository)(entities_1.Teams_V2)),
    tslib_1.__param(2, (0, typeorm_1.InjectRepository)(entities_1.Team_Stats_V2)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object])
], ApiScheduleService);


/***/ }),
/* 212 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(213), exports);


/***/ }),
/* 213 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScheduleMiddleware = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
let ScheduleMiddleware = exports.ScheduleMiddleware = class ScheduleMiddleware {
    use(req, res, next) {
        console.log('Request Schedule...');
        next();
    }
};
exports.ScheduleMiddleware = ScheduleMiddleware = tslib_1.__decorate([
    (0, common_1.Injectable)()
], ScheduleMiddleware);


/***/ }),
/* 214 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(215), exports);


/***/ }),
/* 215 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiTeamStatsModule = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(32);
const controllers_1 = __webpack_require__(216);
const middlewares_1 = __webpack_require__(222);
const services_1 = __webpack_require__(218);
let ApiTeamStatsModule = exports.ApiTeamStatsModule = class ApiTeamStatsModule {
    configure(consumer) {
        consumer.apply(middlewares_1.TeamStatsMiddleware).forRoutes('*');
    }
};
exports.ApiTeamStatsModule = ApiTeamStatsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entities_1.Team_Stats_V2, entities_1.Teams_V2, entities_1.Divisions_V2])],
        controllers: [controllers_1.TeamStatsController],
        providers: [
            services_1.ApiTeamStatsService,
            services_1.ApiAllTimeTeamStatsService,
            services_1.ApiUserTeamStatsService,
        ],
    })
], ApiTeamStatsModule);


/***/ }),
/* 216 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(217), exports);


/***/ }),
/* 217 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TeamStatsController = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
const services_1 = __webpack_require__(218);
let TeamStatsController = exports.TeamStatsController = class TeamStatsController {
    constructor(teamsStatsService, allTimeTeamsStatsService, userTeamStatsService) {
        this.teamsStatsService = teamsStatsService;
        this.allTimeTeamsStatsService = allTimeTeamsStatsService;
        this.userTeamStatsService = userTeamStatsService;
    }
    async getTeamStatsBySeasonByType(param) {
        const stats = await this.teamsStatsService.getTeamStatsBySeasonByType(param.season, param.seasonType);
        if (!stats || stats.length < 1) {
            throw new common_1.NotFoundException('Team Stats not found');
        }
        return stats;
    }
    async getAllTeamStatsBySeasonByType(param) {
        const stats = await this.teamsStatsService.getAllTeamStatsBySeasonByType(param.season, param.seasonType);
        if (!stats || stats.length < 1) {
            throw new common_1.NotFoundException('Team Stats not found');
        }
        return stats;
    }
    async getTeamStandingsForPlayoffs(param) {
        const stats = await this.teamsStatsService.getTeamStandingsForPlayoffs(param.season, param.seasonType);
        if (!stats || stats.length < 1) {
            throw new common_1.NotFoundException('Team Stats not found');
        }
        return stats;
    }
    async getAllTimeTeamStatsBySeasonByType(param) {
        const stats = await this.allTimeTeamsStatsService.getAllTimeTeamStatsBySeasonByType(param.seasonType);
        if (!stats || stats.length < 1) {
            throw new common_1.NotFoundException('Team Stats not found');
        }
        return stats;
    }
    async getAllTimeTeamStatsSummedBySeasonByType(param) {
        const stats = await this.allTimeTeamsStatsService.getAllTimeTeamStatsSummedBySeasonByType(param.seasonType);
        if (!stats || stats.length < 1) {
            throw new common_1.NotFoundException('Team Stats not found');
        }
        return stats;
    }
    async getUserTeamRecordBySeasonBySeasonType(param) {
        const record = await this.userTeamStatsService.getUserTeamRecordBySeasonBySeasonType(param.teamId, param.season, param.seasonType);
        if (!record) {
            throw new common_1.NotFoundException('User Team Stats not found');
        }
        return record;
    }
    async getUserTeamStatsBySeasonType(param) {
        const record = await this.userTeamStatsService.getUserTeamStatsBySeasonType(param.userId, param.seasonType);
        if (!record) {
            throw new common_1.NotFoundException('User Team Stats not found');
        }
        return record;
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('/:season/:seasonType'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], TeamStatsController.prototype, "getTeamStatsBySeasonByType", null);
tslib_1.__decorate([
    (0, common_1.Get)('/all/:season/:seasonType'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], TeamStatsController.prototype, "getAllTeamStatsBySeasonByType", null);
tslib_1.__decorate([
    (0, common_1.Get)('/playoffs/:season/:seasonType'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], TeamStatsController.prototype, "getTeamStandingsForPlayoffs", null);
tslib_1.__decorate([
    (0, common_1.Get)('/history/season/:seasonType'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], TeamStatsController.prototype, "getAllTimeTeamStatsBySeasonByType", null);
tslib_1.__decorate([
    (0, common_1.Get)('/history/all-time/:seasonType'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], TeamStatsController.prototype, "getAllTimeTeamStatsSummedBySeasonByType", null);
tslib_1.__decorate([
    (0, common_1.Get)('/user/:teamId/record/:season/:seasonType/'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], TeamStatsController.prototype, "getUserTeamRecordBySeasonBySeasonType", null);
tslib_1.__decorate([
    (0, common_1.Get)('/user/:userId/history/:seasonType'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_k = typeof Promise !== "undefined" && Promise) === "function" ? _k : Object)
], TeamStatsController.prototype, "getUserTeamStatsBySeasonType", null);
exports.TeamStatsController = TeamStatsController = tslib_1.__decorate([
    (0, common_1.Controller)('team-stats'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof services_1.ApiTeamStatsService !== "undefined" && services_1.ApiTeamStatsService) === "function" ? _a : Object, typeof (_b = typeof services_1.ApiAllTimeTeamStatsService !== "undefined" && services_1.ApiAllTimeTeamStatsService) === "function" ? _b : Object, typeof (_c = typeof services_1.ApiUserTeamStatsService !== "undefined" && services_1.ApiUserTeamStatsService) === "function" ? _c : Object])
], TeamStatsController);


/***/ }),
/* 218 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(219), exports);
tslib_1.__exportStar(__webpack_require__(220), exports);
tslib_1.__exportStar(__webpack_require__(221), exports);


/***/ }),
/* 219 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiTeamStatsService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(32);
const typeorm_2 = __webpack_require__(13);
let ApiTeamStatsService = exports.ApiTeamStatsService = class ApiTeamStatsService {
    constructor(repo, divisionsRepo) {
        this.repo = repo;
        this.divisionsRepo = divisionsRepo;
        this.sortTeamStatsByStandings = (data) => {
            return data.sort((a, b) => {
                if (b.points === a.points) {
                    if (b.wins === a.wins) {
                        if (b.goals_for - b.goals_against === a.goals_for - a.goals_against) {
                            return b.goals_for - a.goals_for;
                        }
                        else {
                            return (b.goals_for - b.goals_against - (a.goals_for - a.goals_against));
                        }
                    }
                    else {
                        return b.wins - a.wins;
                    }
                }
                else {
                    return b.points - a.points;
                }
            });
        };
    }
    async getTeamStatsBySeasonByType(season, seasonType) {
        return await this.repo.find({
            relations: ['team_id'],
            select: {
                team_id: {
                    id: true,
                    city: true,
                    teamlogo: true,
                    shortname: true,
                    nickname: true,
                },
                games_played: true,
                points: true,
                wins: true,
                loss: true,
                ties: true,
                long_win_streak: true,
                penalty_minutes: true,
                goals_for: true,
                goals_against: true,
                pk_goals: true,
                pk_attempts: true,
                pp_goals: true,
                pp_attempts: true,
                shots_for: true,
                shots_against: true,
                face_off_won: true,
                face_off_lost: true,
                pass_complete: true,
                pass_incomplete: true,
            },
            where: {
                playing_year: season,
                season_type: seasonType,
            },
        });
    }
    async getAllTeamStatsBySeasonByType(season, seasonType) {
        const teamStats = await this.repo.find({
            relations: ['team_id'],
            select: {
                team_id: {
                    id: true,
                    city: true,
                    teamlogo: true,
                    shortname: true,
                    nickname: true,
                    divisions_id: {
                        id: true,
                        divisionname: true,
                        conference_id: true,
                    },
                },
                div_loss: true,
                div_tie: true,
                div_win: true,
                games_played: true,
                goals_against: true,
                goals_for: true,
                home_loss: true,
                home_ties: true,
                home_wins: true,
                loss: true,
                penalty_minutes: true,
                pk_attempts: true,
                pk_goals: true,
                pk_min: true,
                playing_year: true,
                points: true,
                pp_attempts: true,
                pp_goals: true,
                road_loss: true,
                road_ties: true,
                road_wins: true,
                season_type: true,
                ties: true,
                trail_after_two_loss: true,
                trail_after_two_ties: true,
                trail_after_two_wins: true,
                wins: true,
            },
            where: {
                playing_year: season,
                season_type: seasonType,
            },
        });
        const teamStatsWithDivision = await this.setDivisionInfo(teamStats);
        return teamStatsWithDivision;
    }
    async getTeamStandingsForPlayoffs(season, seasonType) {
        const teamStats = await this.repo.find({
            relations: ['team_id'],
            select: {
                team_id: {
                    id: true,
                    city: true,
                    teamlogo: true,
                    teamcolor: true,
                    shortname: true,
                    nickname: true,
                    divisions_id: {
                        id: true,
                        divisionname: true,
                        conference_id: true,
                    },
                },
                goals_against: true,
                goals_for: true,
                playing_year: true,
                points: true,
                season_type: true,
                wins: true,
            },
            where: {
                playing_year: season,
                season_type: seasonType,
            },
        });
        const teamStatsWithDivision = await this.setDivisionInfo(teamStats);
        const teamStatsWithDivisionSorted = await this.sortTeamStatsByStandings(teamStatsWithDivision);
        return teamStatsWithDivisionSorted;
    }
    async setDivisionInfo(array) {
        return await Promise.all(array.map(async (item) => ({
            ...item,
            division: await this.getDivisionInfo(item.team_id.divisions_id.id),
        })));
    }
    async getDivisionInfo(divisionId) {
        return await this.divisionsRepo.findOne({
            relations: ['conference_id'],
            where: {
                id: divisionId,
            },
        });
    }
};
exports.ApiTeamStatsService = ApiTeamStatsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Team_Stats_V2)),
    tslib_1.__param(1, (0, typeorm_1.InjectRepository)(entities_1.Divisions_V2)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], ApiTeamStatsService);


/***/ }),
/* 220 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiAllTimeTeamStatsService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(32);
const typeorm_2 = __webpack_require__(13);
let ApiAllTimeTeamStatsService = exports.ApiAllTimeTeamStatsService = class ApiAllTimeTeamStatsService {
    constructor(repo, dataSource) {
        this.repo = repo;
        this.dataSource = dataSource;
    }
    async getAllTimeTeamStatsBySeasonByType(seasonType) {
        const allTimeStats = await this.repo.find({
            relations: ['team_id'],
            select: {
                team_id: {
                    id: true,
                    city: true,
                    teamlogo: true,
                    shortname: true,
                    nickname: true,
                },
                games_played: true,
                points: true,
                wins: true,
                loss: true,
                ties: true,
                penalty_minutes: true,
                goals_for: true,
                goals_against: true,
                pk_goals: true,
                pk_attempts: true,
                pp_goals: true,
                pp_attempts: true,
                sh_goals: true,
                playing_year: true,
                season_type: true,
                shut_outs: true,
                face_off_won: true,
                face_off_lost: true,
                corner_won: true,
                corner_lost: true,
                pass_complete: true,
                pass_incomplete: true,
            },
            where: {
                season_type: seasonType,
                games_played: (0, typeorm_2.MoreThan)(0),
            },
            order: {
                points: 'DESC',
            },
        });
        const allTimeStatsConverted = await this.convertStats(allTimeStats, false);
        return allTimeStatsConverted;
    }
    async getAllTimeTeamStatsSummedBySeasonByType(seasonType) {
        const result = await this.dataSource.query(` select
      a.team_id as team_id,
      a.season_type as season_type, 
      c.city as city, 
      c.nickname as nickname,
      c.shortname,
      c.teamlogo,
      c.isactive,
      sum(games_played) as games_played, 
      sum(wins) as wins, 
      sum(loss) as loss, 
      sum(ties) as ties, 
      sum(points) as points, 
      sum(goals_for) as goals_for, 
      sum(goals_against) as goals_against, 
      sum(pp_attempts) as pp_attempts, 
      sum(pp_goals) as pp_goals, 
      sum(pk_attempts) as pk_attempts, 
      sum(pk_goals) as pk_goals, 
      sum(sh_goals) as sh_goals, 
      sum(penalty_minutes) as penalty_minutes, 
      sum(shots_for) as shots_for, 
      sum(shots_against) as shots_against, 
      sum(shut_outs) as shut_outs,
      sum(face_off_won) as face_off_won,
      sum(face_off_lost) as face_off_lost,
      sum(corner_won) as corner_won,
      sum(corner_lost) as corner_lost,
      sum(pass_complete) as pass_complete,
      sum(pass_incomplete) as pass_incomplete
      from
      team_stats_v2 as a
      left join teams_v2 as c
      on c.id = a.team_id
      where a.season_type = '${seasonType}'
      group by a.team_id, a.season_type, c.city, c.nickname, c.shortname, c.teamlogo, c.isactive
      order by points DESC`);
        const allTimeStatsConverted = await this.convertStats(result, true);
        return allTimeStatsConverted;
    }
    async convertStats(array, raw) {
        return await Promise.all(array.map((stat) => ({
            goalsForPerGame: Number((stat.goals_for / stat.games_played).toFixed(2)),
            goalsAgainstPerGame: Number((stat.goals_against / stat.games_played).toFixed(2)),
            goalDiff: stat.goals_for - stat.goals_against,
            winPct: Number(((stat.wins / stat.games_played) * 100).toFixed(1)),
            ppPct: Number(((stat.pp_goals / stat.pp_attempts) * 100).toFixed(1)),
            pkPct: Number((((stat.pk_attempts - stat.pk_goals) / stat.pk_attempts) *
                100).toFixed(1)),
            foPct: Number(this.getPct(Number(stat.face_off_won), Number(stat.face_off_lost)).toFixed(1)),
            passPct: Number(this.getPct(Number(stat.pass_complete), Number(stat.pass_incomplete)).toFixed(1)),
            cornerPct: Number(this.getPct(Number(stat.corner_won), Number(stat.corner_lost)).toFixed(1)),
            pimPerGame: Number((stat.penalty_minutes / stat.games_played).toFixed(1)),
            team_name: raw
                ? `${stat.city} ${stat.nickname}`
                : `${stat.team_id.city} ${stat.team_id.nickname}`,
            team_id: !raw
                ? stat.team_id
                : {
                    id: stat.team_id,
                    city: stat.city,
                    teamlogo: stat.teamlogo,
                    shortname: stat.shortname,
                    nickname: stat.nickname,
                },
            games_played: Number(stat.games_played),
            wins: Number(stat.wins),
            loss: Number(stat.loss),
            ties: Number(stat.ties),
            points: Number(stat.points),
            goals_for: Number(stat.goals_for),
            goals_against: Number(stat.goals_against),
            shots_against: Number(stat.shots_against),
            shots_for: Number(stat.shots_for),
            pp_goals: Number(stat.pp_goals),
            pp_attempts: Number(stat.pp_attempts),
            pk_goals: Number(stat.pk_goals),
            pk_attempts: Number(stat.pk_attempts),
            sh_goals: Number(stat.sh_goals),
            penalty_minutes: Number(stat.penalty_minutes),
            face_off_won: Number(stat.face_off_won),
            face_off_lost: Number(stat.face_off_lost),
            corner_won: Number(stat.corner_won),
            corner_lost: Number(stat.corner_lost),
            pass_complete: Number(stat.pass_complete),
            pass_incomplete: Number(stat.pass_incomplete),
            shut_outs: Number(stat.shut_outs),
            season_type: stat.season_type,
            playing_year: stat.playing_year,
        })));
    }
    getPct(high, low) {
        const total = high + low;
        return (high / total) * 100;
    }
};
exports.ApiAllTimeTeamStatsService = ApiAllTimeTeamStatsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Team_Stats_V2)),
    tslib_1.__param(1, (0, typeorm_1.InjectDataSource)()),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.DataSource !== "undefined" && typeorm_2.DataSource) === "function" ? _b : Object])
], ApiAllTimeTeamStatsService);


/***/ }),
/* 221 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiUserTeamStatsService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(32);
const typeorm_2 = __webpack_require__(13);
let ApiUserTeamStatsService = exports.ApiUserTeamStatsService = class ApiUserTeamStatsService {
    constructor(repo, teamsRepo) {
        this.repo = repo;
        this.teamsRepo = teamsRepo;
    }
    async getUserTeamRecordBySeasonBySeasonType(teamId, season, seasonType) {
        return await this.repo.findOne({
            relations: ['team_id'],
            select: {
                team_id: {
                    id: true,
                    city: true,
                    teamlogo: true,
                    shortname: true,
                    nickname: true,
                },
                id: true,
                wins: true,
                loss: true,
                ties: true,
                points: true,
                home_wins: true,
                home_loss: true,
                home_ties: true,
                road_wins: true,
                road_loss: true,
                road_ties: true,
                div_win: true,
                div_loss: true,
                div_tie: true,
            },
            where: {
                team_id: {
                    id: teamId,
                },
                playing_year: season,
                season_type: seasonType,
            },
        });
    }
    async getUserTeamStatsBySeasonType(userId, seasonType) {
        const userTeams = await this.teamsRepo.findBy({ users_id: userId });
        const userTeamsWithTeamStats = await this.setTeamStats(userTeams, seasonType);
        const userTeamsWithTeamStatsConverted = await this.setConvertedTeamStats(userTeamsWithTeamStats);
        return userTeamsWithTeamStatsConverted;
    }
    async setConvertedTeamStats(array) {
        return await Promise.all(array.map(async (item) => ({
            ...item,
            teamStats: await this.convertStats(item.teamStats),
        })));
    }
    async setTeamStats(array, seasonType) {
        return await Promise.all(array.map(async (item) => ({
            ...item,
            teamStats: await this.getTeamStats(item.id, seasonType),
        })));
    }
    async getTeamStats(teamId, seasonType) {
        return await this.repo.find({
            relations: ['team_id'],
            select: {
                team_id: {
                    id: true,
                    city: true,
                    teamlogo: true,
                    shortname: true,
                    nickname: true,
                },
                id: true,
                games_played: true,
                points: true,
                wins: true,
                loss: true,
                ties: true,
                penalty_minutes: true,
                goals_for: true,
                goals_against: true,
                pk_goals: true,
                pk_attempts: true,
                pp_goals: true,
                pp_attempts: true,
                sh_goals: true,
                playing_year: true,
                season_type: true,
                shut_outs: true,
                face_off_won: true,
                face_off_lost: true,
                corner_won: true,
                corner_lost: true,
                pass_complete: true,
                pass_incomplete: true,
                shots_against: true,
                shots_for: true
            },
            where: {
                team_id: {
                    id: teamId,
                },
                games_played: (0, typeorm_2.MoreThan)(0),
                season_type: seasonType,
            },
            order: {
                playing_year: 'DESC'
            }
        });
    }
    async convertStats(array) {
        return await Promise.all(array.map((stat) => ({
            goalsForPerGame: Number((stat.goals_for / stat.games_played).toFixed(2)),
            goalsAgainstPerGame: Number((stat.goals_against / stat.games_played).toFixed(2)),
            goalDiff: stat.goals_for - stat.goals_against,
            winPct: Number(((stat.wins / stat.games_played) * 100).toFixed(1)),
            ppPct: Number(((stat.pp_goals / stat.pp_attempts) * 100).toFixed(1)),
            pkPct: Number((((stat.pk_attempts - stat.pk_goals) / stat.pk_attempts) *
                100).toFixed(1)),
            foPct: Number(this.getPct(Number(stat.face_off_won), Number(stat.face_off_lost)).toFixed(1)),
            passPct: Number(this.getPct(Number(stat.pass_complete), Number(stat.pass_incomplete)).toFixed(1)),
            cornerPct: Number(this.getPct(Number(stat.corner_won), Number(stat.corner_lost)).toFixed(1)),
            pimPerGame: Number((stat.penalty_minutes / stat.games_played).toFixed(1)),
            team_name: `${stat.team_id.city} ${stat.team_id.nickname}`,
            team_id: stat.team_id,
            games_played: Number(stat.games_played),
            wins: Number(stat.wins),
            loss: Number(stat.loss),
            ties: Number(stat.ties),
            points: Number(stat.points),
            goals_for: Number(stat.goals_for),
            goals_against: Number(stat.goals_against),
            shots_against: Number(stat.shots_against),
            shots_for: Number(stat.shots_for),
            pp_goals: Number(stat.pp_goals),
            pp_attempts: Number(stat.pp_attempts),
            pk_goals: Number(stat.pk_goals),
            pk_attempts: Number(stat.pk_attempts),
            sh_goals: Number(stat.sh_goals),
            penalty_minutes: Number(stat.penalty_minutes),
            face_off_won: Number(stat.face_off_won),
            face_off_lost: Number(stat.face_off_lost),
            corner_won: Number(stat.corner_won),
            corner_lost: Number(stat.corner_lost),
            pass_complete: Number(stat.pass_complete),
            pass_incomplete: Number(stat.pass_incomplete),
            shut_outs: Number(stat.shut_outs),
            season_type: stat.season_type,
            playing_year: stat.playing_year,
        })));
    }
    getPct(high, low) {
        const total = high + low;
        return (high / total) * 100;
    }
};
exports.ApiUserTeamStatsService = ApiUserTeamStatsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Team_Stats_V2)),
    tslib_1.__param(1, (0, typeorm_1.InjectRepository)(entities_1.Teams_V2)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], ApiUserTeamStatsService);


/***/ }),
/* 222 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(223), exports);


/***/ }),
/* 223 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TeamStatsMiddleware = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
let TeamStatsMiddleware = exports.TeamStatsMiddleware = class TeamStatsMiddleware {
    use(req, res, next) {
        console.log('Request Team Stats...');
        next();
    }
};
exports.TeamStatsMiddleware = TeamStatsMiddleware = tslib_1.__decorate([
    (0, common_1.Injectable)()
], TeamStatsMiddleware);


/***/ }),
/* 224 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(225), exports);


/***/ }),
/* 225 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiTeamsModule = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(32);
const controllers_1 = __webpack_require__(226);
const teams_middleware_1 = __webpack_require__(230);
const services_1 = __webpack_require__(228);
let ApiTeamsModule = exports.ApiTeamsModule = class ApiTeamsModule {
    configure(consumer) {
        consumer.apply(teams_middleware_1.TeamsMiddleware).forRoutes('*');
    }
};
exports.ApiTeamsModule = ApiTeamsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entities_1.Teams_V2, entities_1.Users_V2])],
        controllers: [controllers_1.TeamsController],
        providers: [services_1.TeamsService],
    })
], ApiTeamsModule);


/***/ }),
/* 226 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(227), exports);


/***/ }),
/* 227 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TeamsController = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(35);
const common_1 = __webpack_require__(1);
const services_1 = __webpack_require__(228);
let TeamsController = exports.TeamsController = class TeamsController {
    constructor(teamsService) {
        this.teamsService = teamsService;
    }
    async getUserTeams(param) {
        const teams = await this.teamsService.getUserTeams(parseInt(param.id));
        if (!teams || teams.length < 1) {
            throw new common_1.NotFoundException('User Teams not found');
        }
        return teams;
    }
    async getCurrentTeams() {
        const teams = await this.teamsService.getCurrentTeams();
        if (!teams || teams.length < 1) {
            throw new common_1.NotFoundException('No Current Teams found');
        }
        return teams;
    }
    async getUserByTeamId(param) {
        const user = await this.teamsService.getUserByTeamId(param.teamId);
        if (!user) {
            throw new common_1.NotFoundException('No User Found');
        }
        return user;
    }
    async getTeams() {
        const teams = await this.teamsService.getAll();
        if (!teams || teams.length < 1) {
            throw new common_1.NotFoundException('teams not found');
        }
        return teams;
    }
    updateTeamById(param, body) {
        return this.teamsService.updateTeamById(parseInt(param.id), body);
    }
    addUser(body) {
        return this.teamsService.addTeam(body);
    }
    deleteUserById(param) {
        return this.teamsService.deleteTeam(parseInt(param.id));
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('/user/:id'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], TeamsController.prototype, "getUserTeams", null);
tslib_1.__decorate([
    (0, common_1.Get)('/current'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], TeamsController.prototype, "getCurrentTeams", null);
tslib_1.__decorate([
    (0, common_1.Get)('/:teamId'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], TeamsController.prototype, "getUserByTeamId", null);
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], TeamsController.prototype, "getTeams", null);
tslib_1.__decorate([
    (0, common_1.Put)('/:id'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], TeamsController.prototype, "updateTeamById", null);
tslib_1.__decorate([
    (0, common_1.Post)('/add'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_g = typeof entities_1.TeamCreateDto !== "undefined" && entities_1.TeamCreateDto) === "function" ? _g : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], TeamsController.prototype, "addUser", null);
tslib_1.__decorate([
    (0, common_1.Delete)('/delete/:id'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], TeamsController.prototype, "deleteUserById", null);
exports.TeamsController = TeamsController = tslib_1.__decorate([
    (0, common_1.Controller)('teams'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof services_1.TeamsService !== "undefined" && services_1.TeamsService) === "function" ? _a : Object])
], TeamsController);


/***/ }),
/* 228 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(229), exports);


/***/ }),
/* 229 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TeamsService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(32);
const typeorm_2 = __webpack_require__(13);
let TeamsService = exports.TeamsService = class TeamsService {
    constructor(repo, userRepo) {
        this.repo = repo;
        this.userRepo = userRepo;
    }
    async getUserTeams(id) {
        return await this.repo.findBy({ users_id: id });
    }
    async getCurrentTeams() {
        return await this.repo.findBy({ isactive: true });
    }
    async getUserByTeamId(teamId) {
        const userId = await this.repo.findOne({
            select: {
                id: true,
                users_id: true,
            },
            where: {
                id: teamId,
            },
        });
        const user = await this.userRepo.findOne({
            where: {
                id: userId.users_id,
            },
        });
        return user;
    }
    async getAll() {
        return await this.repo.find({
            order: {
                city: 'ASC',
            },
        });
    }
    async updateTeamById(id, attrs) {
        const team = await this.repo.findOneByOrFail({ id });
        if (!team) {
            throw new common_1.NotFoundException('team not found');
        }
        Object.assign(team, attrs);
        return this.repo.save(team);
    }
    async addTeam(body) {
        const team = await this.repo.create(body);
        return this.repo.save(team);
    }
    async deleteTeam(id) {
        const team = await this.repo.findOneByOrFail({ id });
        if (!team) {
            throw new common_1.NotFoundException('team not found');
        }
        return this.repo.remove(team);
    }
};
exports.TeamsService = TeamsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Teams_V2)),
    tslib_1.__param(1, (0, typeorm_1.InjectRepository)(entities_1.Users_V2)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], TeamsService);


/***/ }),
/* 230 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TeamsMiddleware = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
let TeamsMiddleware = exports.TeamsMiddleware = class TeamsMiddleware {
    use(req, res, next) {
        console.log('Request Teams...');
        next();
    }
};
exports.TeamsMiddleware = TeamsMiddleware = tslib_1.__decorate([
    (0, common_1.Injectable)()
], TeamsMiddleware);


/***/ }),
/* 231 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(232), exports);


/***/ }),
/* 232 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiTransactionsModule = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(32);
const axios_1 = __webpack_require__(163);
const controllers_1 = __webpack_require__(233);
const middlewares_1 = __webpack_require__(238);
const services_1 = __webpack_require__(235);
let ApiTransactionsModule = exports.ApiTransactionsModule = class ApiTransactionsModule {
    configure(consumer) {
        consumer.apply(middlewares_1.TransactionsMiddleware).forRoutes('*');
    }
};
exports.ApiTransactionsModule = ApiTransactionsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule,
            typeorm_1.TypeOrmModule.forFeature([
                entities_1.Transactions_V2,
                entities_1.Teams_V2,
                entities_1.Players_V2,
                entities_1.Players_Stats_V2,
                entities_1.Goalies_Stats_V2,
                entities_1.Draft_Order_V2,
            ]),
        ],
        controllers: [controllers_1.TransactionsController],
        providers: [services_1.ApiTransactionsService, services_1.ApiTransactionsTradesService],
    })
], ApiTransactionsModule);


/***/ }),
/* 233 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(234), exports);


/***/ }),
/* 234 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransactionsController = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(35);
const common_1 = __webpack_require__(1);
const services_1 = __webpack_require__(235);
let TransactionsController = exports.TransactionsController = class TransactionsController {
    constructor(transactionsService, transactionsTradesService) {
        this.transactionsService = transactionsService;
        this.transactionsTradesService = transactionsTradesService;
    }
    async getAllTransactions(param) {
        const trades = await this.transactionsService.getAllTransactions();
        if (!trades || trades.length < 1) {
            throw new common_1.NotFoundException('Transactions not found');
        }
        return trades;
    }
    updateTradeById(param, body) {
        return this.transactionsService.updateTradeById(parseInt(param.id), body);
    }
    async getTransactionsBySeason(param) {
        const stats = await this.transactionsService.getTransactionsBySeason(param.season);
        if (!stats || stats.length < 1) {
            throw new common_1.NotFoundException('Transactions not found');
        }
        return stats;
    }
    async getTeam(param) {
        const team = await this.transactionsTradesService.getTeamBySeason(param.team, param.season, param.draftYear);
        if (!team) {
            throw new common_1.NotFoundException('Team not found');
        }
        return team;
    }
    waiverAcquire(body) {
        return this.transactionsTradesService.waiverAcquire(body);
    }
    waiverRelease(body) {
        return this.transactionsTradesService.waiverRelease(body);
    }
    trade(body) {
        return this.transactionsTradesService.trade(body);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], TransactionsController.prototype, "getAllTransactions", null);
tslib_1.__decorate([
    (0, common_1.Put)('/trade/:id'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], TransactionsController.prototype, "updateTradeById", null);
tslib_1.__decorate([
    (0, common_1.Get)('/:season'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], TransactionsController.prototype, "getTransactionsBySeason", null);
tslib_1.__decorate([
    (0, common_1.Get)('team/:team/:season/:draftYear'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], TransactionsController.prototype, "getTeam", null);
tslib_1.__decorate([
    (0, common_1.Put)('/waivers/acquire'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_f = typeof entities_1.WaiverAcquisitionDto !== "undefined" && entities_1.WaiverAcquisitionDto) === "function" ? _f : Object]),
    tslib_1.__metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], TransactionsController.prototype, "waiverAcquire", null);
tslib_1.__decorate([
    (0, common_1.Put)('/waivers/release'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_h = typeof entities_1.WaiverAcquisitionDto !== "undefined" && entities_1.WaiverAcquisitionDto) === "function" ? _h : Object]),
    tslib_1.__metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], TransactionsController.prototype, "waiverRelease", null);
tslib_1.__decorate([
    (0, common_1.Put)('/trade'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_k = typeof entities_1.TradeDto !== "undefined" && entities_1.TradeDto) === "function" ? _k : Object]),
    tslib_1.__metadata("design:returntype", typeof (_l = typeof Promise !== "undefined" && Promise) === "function" ? _l : Object)
], TransactionsController.prototype, "trade", null);
exports.TransactionsController = TransactionsController = tslib_1.__decorate([
    (0, common_1.Controller)('transactions'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof services_1.ApiTransactionsService !== "undefined" && services_1.ApiTransactionsService) === "function" ? _a : Object, typeof (_b = typeof services_1.ApiTransactionsTradesService !== "undefined" && services_1.ApiTransactionsTradesService) === "function" ? _b : Object])
], TransactionsController);


/***/ }),
/* 235 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(236), exports);
tslib_1.__exportStar(__webpack_require__(237), exports);


/***/ }),
/* 236 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiTransactionsService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(32);
const typeorm_2 = __webpack_require__(13);
let ApiTransactionsService = exports.ApiTransactionsService = class ApiTransactionsService {
    constructor(repo, teamInfoRepo, playersRepo) {
        this.repo = repo;
        this.teamInfoRepo = teamInfoRepo;
        this.playersRepo = playersRepo;
    }
    async getAllTransactions() {
        const transactions = await this.repo.find({
            order: {
                transaction_date: 'DESC',
            },
        });
        const transactionsWithInfo = await this.setInfo(transactions);
        return transactionsWithInfo;
    }
    async getTransactionsBySeason(year) {
        const season = this.findSeasonDates(year);
        const transactions = await this.repo.find({
            where: {
                transaction_date: (0, typeorm_2.Between)(new Date(season.start), new Date(season.end)),
            },
            order: {
                transaction_date: 'DESC',
            },
        });
        const transactionsTeamInfo = await this.setTransactionInfo(transactions);
        return transactionsTeamInfo;
    }
    async updateTradeById(id, attrs) {
        const trade = await this.repo.findOneByOrFail({ id });
        if (!trade) {
            throw new common_1.NotFoundException('trade not found');
        }
        Object.assign(trade, attrs);
        return this.repo.save(trade);
    }
    async setTransactionInfo(transactions) {
        return await Promise.all(transactions.map(async (transaction) => ({
            id: transaction.id,
            transactionDate: transaction.transaction_date,
            teamOneInfo: await this.getTeamInfo(transaction.team_one_id),
            teamOnePlayers: await this.setPlayersInfo(transaction.team_one_players),
            teamOnePicks: transaction.team_one_picks,
            teamTwoInfo: await this.getTeamInfo(transaction.team_two_id),
            teamTwoPlayers: await this.setPlayersInfo(transaction.team_two_players),
            teamTwoPicks: transaction.team_two_picks,
        })));
    }
    async setPlayersInfo(array) {
        return await Promise.all(array.map(async (item) => ({
            player: await this.getPlayerInfo(item),
        })));
    }
    async setInfo(array) {
        return await Promise.all(array.map(async (item) => ({
            ...item,
            team_one_id: await this.getTeamInfo(item.team_one_id),
            team_two_id: await this.getTeamInfo(item.team_two_id),
            team_one_players: await this.setPlayersInfo(item.team_one_players),
            team_two_players: await this.setPlayersInfo(item.team_two_players),
        })));
    }
    async getTeamInfo(teamId) {
        return await this.teamInfoRepo.findOne({
            select: {
                id: true,
                city: true,
                teamlogo: true,
                nickname: true,
                teamcolor: true,
                teamtextcolor: true,
            },
            where: {
                id: teamId,
            },
        });
    }
    async getPlayerInfo(playerId) {
        return await this.playersRepo.findOne({
            select: {
                id: true,
                firstname: true,
                lastname: true,
                nhl_id: true,
            },
            where: {
                id: playerId,
            },
        });
    }
    findSeasonDates(year) {
        const seasons = [
            { year: '24', start: '2023-06-02', end: '2024-06-01' },
            { year: '23', start: '2022-06-02', end: '2023-06-01' },
            { year: '22', start: '2021-07-15', end: '2022-06-01' },
            { year: '21', start: '2020-04-27', end: '2021-07-15' },
        ];
        return seasons.find((season) => season.year === year);
    }
};
exports.ApiTransactionsService = ApiTransactionsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Transactions_V2)),
    tslib_1.__param(1, (0, typeorm_1.InjectRepository)(entities_1.Teams_V2)),
    tslib_1.__param(2, (0, typeorm_1.InjectRepository)(entities_1.Players_V2)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object])
], ApiTransactionsService);


/***/ }),
/* 237 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiTransactionsTradesService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(32);
const typeorm_2 = __webpack_require__(13);
const axios_1 = __webpack_require__(163);
const rxjs_1 = __webpack_require__(168);
let ApiTransactionsTradesService = exports.ApiTransactionsTradesService = class ApiTransactionsTradesService {
    constructor(httpService, repo, teamInfoRepo, playerStatsRepo, goalieStatsRepo, draftRepo, playersRepo) {
        this.httpService = httpService;
        this.repo = repo;
        this.teamInfoRepo = teamInfoRepo;
        this.playerStatsRepo = playerStatsRepo;
        this.goalieStatsRepo = goalieStatsRepo;
        this.draftRepo = draftRepo;
        this.playersRepo = playersRepo;
        this.waiversHookURL = process.env.SLACK_WAIVERS_WEBHOOK;
        this.tradeHookURL = process.env.SLACK_WEBHOOK;
    }
    async getTeamBySeason(team, season, draftYear) {
        const players = await this.playerStatsRepo.find({
            select: {
                id: true,
                team_name: true,
                player_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                },
            },
            where: {
                team_name: team,
                playing_year: season,
            },
            order: {
                player_id: {
                    lastname: 'ASC',
                },
            },
        });
        const goalies = await this.goalieStatsRepo.find({
            select: {
                id: true,
                team_name: true,
                player_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                },
            },
            where: {
                team_name: team,
                playing_year: season,
            },
            order: {
                player_id: {
                    lastname: 'ASC',
                },
            },
        });
        const draftTeam = await this.getPlayerTeamInfo(team);
        const currentDraftPicks = await this.draftRepo.find({
            relations: ['team_id'],
            where: [
                {
                    draft_year: draftYear,
                    team_id: {
                        id: draftTeam.id,
                    },
                },
                { draft_year: draftYear, round_one: draftTeam.id },
                { draft_year: draftYear, round_two: draftTeam.id },
                { draft_year: draftYear, round_three: draftTeam.id },
                { draft_year: draftYear, round_four: draftTeam.id },
                { draft_year: draftYear, round_five: draftTeam.id },
            ],
        });
        const nextDraftPicks = await this.draftRepo.find({
            relations: ['team_id'],
            where: [
                {
                    draft_year: (Number(draftYear) + 1).toString(),
                    team_id: {
                        id: draftTeam.id,
                    },
                },
                {
                    draft_year: (Number(draftYear) + 1).toString(),
                    round_one: draftTeam.id,
                },
                {
                    draft_year: (Number(draftYear) + 1).toString(),
                    round_two: draftTeam.id,
                },
                {
                    draft_year: (Number(draftYear) + 1).toString(),
                    round_three: draftTeam.id,
                },
                {
                    draft_year: (Number(draftYear) + 1).toString(),
                    round_four: draftTeam.id,
                },
                {
                    draft_year: (Number(draftYear) + 1).toString(),
                    round_five: draftTeam.id,
                },
            ],
        });
        const draftPicks = currentDraftPicks.concat(nextDraftPicks);
        const playersWithTeamInfo = await this.setTeamInfo(players);
        const goaliesWithTeamInfo = await this.setTeamInfo(goalies);
        return {
            players: playersWithTeamInfo,
            goalies: goaliesWithTeamInfo,
            draftPicks: draftPicks,
        };
    }
    async setTeamInfo(array) {
        return await Promise.all(array.map(async (item) => ({
            ...item,
            teamInfo: await this.getPlayerTeamInfo(item.team_name),
        })));
    }
    async getPlayerTeamInfo(teamName) {
        return await this.teamInfoRepo.findOne({
            select: {
                id: true,
                shortname: true,
            },
            where: {
                shortname: teamName,
            },
        });
    }
    // WAIVER ACQUISITIONS
    async waiverAcquire(body) {
        const team = body.team;
        const players = body.players;
        const season = body.season;
        if (players && players.length > 0) {
            await players.forEach(async (player) => {
                if (player.includes('p-')) {
                    await this.updateTeamForPlayer(player, team, season);
                }
                else if (player.includes('g-')) {
                    await this.updateTeamForGoalie(player, team, season);
                }
            });
        }
        const playersWithInfo = await this.setPlayerInfo(players);
        const playerArray = [];
        await playersWithInfo.forEach(async (player) => {
            const string = await this.getPlayerString(player);
            playerArray.push(string);
        });
        const postJson = {
            text: `:rotating_light: WAIVER PICK UP ALERT :rotating_light: \n \n To ${team}: \n ${playerArray.join('\n')}`,
            channel: '#waivers-and-drops',
            username: 'League Office',
            icon_emoji: ':office',
        };
        return await this.sendToSlack(postJson, this.waiversHookURL);
    }
    // WAIVER RELEASE
    async waiverRelease(body) {
        const team = body.team;
        const players = body.players;
        const season = body.season;
        if (players && players.length > 0) {
            await players.forEach(async (player) => {
                if (player.includes('p-')) {
                    await this.updateTeamForPlayer(player, 'FA', season);
                }
                else if (player.includes('g-')) {
                    await this.updateTeamForGoalie(player, 'FA', season);
                }
            });
        }
        const playersWithInfo = await this.setPlayerInfo(players);
        const playerArray = [];
        await playersWithInfo.forEach(async (player) => {
            const string = await this.getPlayerString(player);
            playerArray.push(string);
        });
        const postJson = {
            text: `:rotating_light: WAIVER DROP ALERT :rotating_light: \n \n To Waivers From ${team}: \n ${playerArray.join('\n')}`,
            channel: '#waivers-and-drops',
            username: 'League Office',
            icon_emoji: ':office',
        };
        return await this.sendToSlack(postJson, this.waiversHookURL);
    }
    // TRADES
    async trade(body) {
        const teamOne = body.teamOne;
        const teamOnePlayers = await this.getPlayersFromArray(body.teamOnePicks);
        const teamOnePicks = await this.getDraftPicksFromArray(body.teamOnePicks);
        const teamTwo = body.teamTwo;
        const teamTwoPlayers = await this.getPlayersFromArray(body.teamTwoPicks);
        const teamTwoPicks = await this.getDraftPicksFromArray(body.teamTwoPicks);
        const season = body.season;
        if (teamOnePlayers && teamOnePlayers.length > 0) {
            await teamOnePlayers.forEach(async (player) => {
                if (player.includes('p-')) {
                    await this.updateTeamForPlayer(player, teamTwo, season);
                }
                else if (player.includes('g-')) {
                    await this.updateTeamForGoalie(player, teamTwo, season);
                }
            });
        }
        if (teamOnePicks && teamOnePicks.length > 0) {
            await teamOnePicks.forEach(async (pick) => {
                await this.updateTeamForPick(pick, teamTwo);
            });
        }
        if (teamTwoPlayers && teamTwoPlayers.length > 0) {
            await teamTwoPlayers.forEach(async (player) => {
                if (player.includes('p-')) {
                    await this.updateTeamForPlayer(player, teamOne, season);
                }
                else if (player.includes('g-')) {
                    await this.updateTeamForGoalie(player, teamOne, season);
                }
            });
        }
        if (teamTwoPicks && teamTwoPicks.length > 0) {
            await teamTwoPicks.forEach(async (pick) => {
                await this.updateTeamForPick(pick, teamOne);
            });
        }
        await this.addTransaction(body);
        const teamOneplayersWithInfo = await this.setPlayerInfo(teamOnePlayers);
        const teamTwoplayersWithInfo = await this.setPlayerInfo(teamTwoPlayers);
        const teamOneplayerArray = [];
        const teamTwoplayerArray = [];
        await teamOneplayersWithInfo.forEach(async (player) => {
            const string = await this.getPlayerString(player);
            teamOneplayerArray.push(string);
        });
        await teamTwoplayersWithInfo.forEach(async (player) => {
            const string = await this.getPlayerString(player);
            teamTwoplayerArray.push(string);
        });
        const teamOnePickString = await this.getDraftPickStringArray(teamOnePicks);
        const teamTwoPickString = await this.getDraftPickStringArray(teamTwoPicks);
        const postJson = {
            text: `:rotating_light: TRADE ALERT :rotating_light: \n \n To ${teamOne}: \n ${teamTwoplayerArray.length > 0
                ? teamTwoplayerArray.join('\n')
                : teamTwoPicks.length > 0
                    ? teamTwoPickString.join('\n')
                    : ''} \n ${teamTwoplayerArray.length > 0
                ? teamTwoPicks.length > 0
                    ? teamTwoPickString.join('\n')
                    : ''
                : ''} \n \n To ${teamTwo}: \n ${teamOneplayerArray.length > 0
                ? teamOneplayerArray.join('\n')
                : teamOnePicks.length > 0
                    ? teamOnePickString.join('\n')
                    : ''} \n ${teamOneplayerArray.length > 0
                ? teamOnePicks.length > 0
                    ? teamOnePickString.join('\n')
                    : ''
                : ''} \n`,
            channel: '#trades',
            username: 'League Office',
            icon_emoji: ':office',
        };
        return await this.sendToSlack(postJson, this.tradeHookURL);
    }
    async addTransaction(body) {
        const transaction_date = await this.getDate();
        const teamOneId = await this.getTeamInfo(body.teamOne);
        const teamTwoId = await this.getTeamInfo(body.teamTwo);
        const teamOnePlayers = await this.getPlayerIds(body.teamOnePicks);
        const teamTwoPlayers = await this.getPlayerIds(body.teamTwoPicks);
        const teamOnePicks = await this.getPicks(body.teamOnePicks);
        const teamTwoPicks = await this.getPicks(body.teamTwoPicks);
        const createTransaction = {
            transaction_date,
            team_one_id: teamOneId.id,
            team_two_id: teamTwoId.id,
            team_one_players: teamTwoPlayers,
            team_two_players: teamOnePlayers,
            team_one_picks: teamTwoPicks,
            team_two_picks: teamOnePicks,
        };
        const trade = await this.repo.create(createTransaction);
        return this.repo.save(trade);
    }
    async getPicks(array) {
        const picks = [];
        await array.forEach((pick) => {
            if (!pick.includes('-')) {
                picks.push(pick);
            }
        });
        return picks;
    }
    async getPlayerIds(array) {
        const players = [];
        await array.forEach((pick) => {
            if (pick.includes('p-') || pick.includes('g-')) {
                const newPick = pick.split('-');
                players.push(newPick[1]);
            }
        });
        return players;
    }
    async getDate() {
        const today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        const yyyy = today.getFullYear();
        if (dd < 10) {
            dd = `0${dd}`;
        }
        if (mm < 10) {
            mm = `0${mm}`;
        }
        return `${yyyy}-${mm}-${dd}`;
    }
    async getDraftPickStringArray(picks) {
        return picks.map((pick) => `- ${pick.team} ${pick.value} ${pick.year}`);
    }
    async updateTeamForPick(pick, team) {
        const teamId = await this.getTeamInfo(team);
        let attrs;
        if (pick.value.includes('1')) {
            attrs = {
                round_one: teamId.id,
            };
        }
        else if (pick.value.includes('2')) {
            attrs = {
                round_two: teamId.id,
            };
        }
        else if (pick.value.includes('3')) {
            attrs = {
                round_three: teamId.id,
            };
        }
        else if (pick.value.includes('4')) {
            attrs = {
                round_four: teamId.id,
            };
        }
        else if (pick.value.includes('5')) {
            attrs = {
                round_five: teamId.id,
            };
        }
        const draftRow = await this.draftRepo.findOneByOrFail({
            draft_year: pick.year,
            team_id: {
                shortname: pick.team,
            },
        });
        if (!draftRow) {
            throw new common_1.NotFoundException('player not found');
        }
        Object.assign(draftRow, attrs);
        return this.draftRepo.save(draftRow);
    }
    async getDraftPicksFromArray(picksArray) {
        const picks = [];
        await picksArray.forEach((pick) => {
            if (!pick.includes('-')) {
                const newPick = pick.split(' ');
                const pickObject = {
                    team: newPick[0],
                    value: newPick[1],
                    year: newPick[2],
                };
                picks.push(pickObject);
            }
        });
        return picks;
    }
    async getPlayersFromArray(picksArray) {
        const players = [];
        await picksArray.forEach((pick) => {
            if (pick.includes('p-') || pick.includes('g-')) {
                players.push(pick);
            }
        });
        return players;
    }
    getPlayerString(player) {
        return `- ${player.playerInfo.firstname} ${player.playerInfo.lastname}`;
    }
    async setPlayerInfo(players) {
        return await Promise.all(players.map(async (item) => ({
            playerInfo: await this.getPlayerInfo(item.split('-')[1]),
        })));
    }
    async getTeamInfo(shortname) {
        return await this.teamInfoRepo.findOne({
            select: {
                id: true,
            },
            where: {
                shortname,
            },
        });
    }
    async getPlayerInfo(playerId) {
        if (playerId) {
            return await this.playersRepo.findOne({
                select: {
                    id: true,
                    firstname: true,
                    lastname: true,
                },
                where: {
                    id: playerId,
                },
            });
        }
        else {
            return {};
        }
    }
    async updateTeamForPlayer(playerId, team, season) {
        const stringId = playerId.split('-');
        const attrs = {
            team_name: team,
        };
        const player = await this.playerStatsRepo.findOneByOrFail({
            player_id: { id: Number(stringId[1]) },
            playing_year: season,
        });
        if (!player) {
            throw new common_1.NotFoundException('player not found');
        }
        Object.assign(player, attrs);
        return this.playerStatsRepo.save(player);
    }
    async updateTeamForGoalie(playerId, team, season) {
        const stringId = playerId.split('-');
        const attrs = {
            team_name: team,
        };
        const player = await this.goalieStatsRepo.findOneByOrFail({
            player_id: { id: Number(stringId[1]) },
            playing_year: season,
        });
        if (!player) {
            throw new common_1.NotFoundException('player not found');
        }
        Object.assign(player, attrs);
        return this.goalieStatsRepo.save(player);
    }
    async sendToSlack(message, hook) {
        const options = {
            headers: {
                'Content-type': 'application/json',
            },
        };
        this.httpService
            .post(`${hook}`, message, options)
            .pipe((0, rxjs_1.map)((response) => response.data))
            .subscribe({
            complete: () => console.log('completed'),
            error: (err) => console.log(err),
        });
    }
};
exports.ApiTransactionsTradesService = ApiTransactionsTradesService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(1, (0, typeorm_1.InjectRepository)(entities_1.Transactions_V2)),
    tslib_1.__param(2, (0, typeorm_1.InjectRepository)(entities_1.Teams_V2)),
    tslib_1.__param(3, (0, typeorm_1.InjectRepository)(entities_1.Players_Stats_V2)),
    tslib_1.__param(4, (0, typeorm_1.InjectRepository)(entities_1.Goalies_Stats_V2)),
    tslib_1.__param(5, (0, typeorm_1.InjectRepository)(entities_1.Draft_Order_V2)),
    tslib_1.__param(6, (0, typeorm_1.InjectRepository)(entities_1.Players_V2)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof axios_1.HttpService !== "undefined" && axios_1.HttpService) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object, typeof (_d = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _d : Object, typeof (_e = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _e : Object, typeof (_f = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _f : Object, typeof (_g = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _g : Object])
], ApiTransactionsTradesService);


/***/ }),
/* 238 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(239), exports);


/***/ }),
/* 239 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransactionsMiddleware = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
let TransactionsMiddleware = exports.TransactionsMiddleware = class TransactionsMiddleware {
    use(req, res, next) {
        console.log('Request Transactions...');
        next();
    }
};
exports.TransactionsMiddleware = TransactionsMiddleware = tslib_1.__decorate([
    (0, common_1.Injectable)()
], TransactionsMiddleware);


/***/ }),
/* 240 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(241), exports);


/***/ }),
/* 241 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiWaiversModule = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(32);
const controllers_1 = __webpack_require__(242);
const middlewares_1 = __webpack_require__(246);
const services_1 = __webpack_require__(244);
let ApiWaiversModule = exports.ApiWaiversModule = class ApiWaiversModule {
    configure(consumer) {
        consumer.apply(middlewares_1.WaiversMiddleware).forRoutes('*');
    }
};
exports.ApiWaiversModule = ApiWaiversModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entities_1.Waivers_V2, entities_1.Teams_V2])],
        controllers: [controllers_1.WaiversController],
        providers: [services_1.ApiWaiversService],
    })
], ApiWaiversModule);


/***/ }),
/* 242 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(243), exports);


/***/ }),
/* 243 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WaiversController = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
const services_1 = __webpack_require__(244);
let WaiversController = exports.WaiversController = class WaiversController {
    constructor(waiversService) {
        this.waiversService = waiversService;
    }
    async getAllPlayerSalaries() {
        const salaries = await this.waiversService.getWaiverPriority();
        if (!salaries) {
            throw new common_1.NotFoundException('Waivers not found');
        }
        return salaries;
    }
    updateWaiverById(body) {
        return this.waiversService.updateWaiverPriority(body);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('/all'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], WaiversController.prototype, "getAllPlayerSalaries", null);
tslib_1.__decorate([
    (0, common_1.Put)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], WaiversController.prototype, "updateWaiverById", null);
exports.WaiversController = WaiversController = tslib_1.__decorate([
    (0, common_1.Controller)('waivers'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof services_1.ApiWaiversService !== "undefined" && services_1.ApiWaiversService) === "function" ? _a : Object])
], WaiversController);


/***/ }),
/* 244 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(245), exports);


/***/ }),
/* 245 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiWaiversService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(32);
const typeorm_2 = __webpack_require__(13);
let ApiWaiversService = exports.ApiWaiversService = class ApiWaiversService {
    constructor(repo, teamsRepo) {
        this.repo = repo;
        this.teamsRepo = teamsRepo;
    }
    async getWaiverPriority() {
        const allWaivers = await this.repo.find();
        const allWaiverWithTeamInfo = await this.setTeamInfo(allWaivers);
        return allWaiverWithTeamInfo;
    }
    async updateWaiverPriority(waiverList) {
        const allWaivers = await this.setNewWaiverPriority(waiverList);
        return allWaivers;
    }
    async setNewWaiverPriority(waiverList) {
        return await waiverList.forEach(async (waiver) => await this.updateWaiver(waiver));
    }
    async updateWaiver(team) {
        const waiver = await this.repo.findOneByOrFail({ id: team.id });
        if (!waiver) {
            throw new common_1.NotFoundException('team not found');
        }
        Object.assign(waiver, team);
        return this.repo.save(team);
    }
    async setTeamInfo(array) {
        return await Promise.all(array.map(async (item) => ({
            ...item,
            teamInfo: await this.getTeamInfo(item.team_id),
        })));
    }
    async getTeamInfo(teamId) {
        if (teamId) {
            return await this.teamsRepo.findOne({
                select: {
                    id: true,
                    city: true,
                    teamlogo: true,
                    nickname: true,
                },
                where: {
                    id: teamId,
                },
            });
        }
        else {
            return {};
        }
    }
};
exports.ApiWaiversService = ApiWaiversService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Waivers_V2)),
    tslib_1.__param(1, (0, typeorm_1.InjectRepository)(entities_1.Teams_V2)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], ApiWaiversService);


/***/ }),
/* 246 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(247), exports);


/***/ }),
/* 247 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WaiversMiddleware = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
let WaiversMiddleware = exports.WaiversMiddleware = class WaiversMiddleware {
    use(req, res, next) {
        console.log('Request Waivers...');
        next();
    }
};
exports.WaiversMiddleware = WaiversMiddleware = tslib_1.__decorate([
    (0, common_1.Injectable)()
], WaiversMiddleware);


/***/ }),
/* 248 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(249), exports);


/***/ }),
/* 249 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiDivisionsModule = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(32);
const controllers_1 = __webpack_require__(250);
const middlewares_1 = __webpack_require__(254);
const services_1 = __webpack_require__(252);
let ApiDivisionsModule = exports.ApiDivisionsModule = class ApiDivisionsModule {
    configure(consumer) {
        consumer.apply(middlewares_1.DivisionsMiddleware).forRoutes('*');
    }
};
exports.ApiDivisionsModule = ApiDivisionsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entities_1.Divisions_V2])],
        controllers: [controllers_1.DivisionsController],
        providers: [services_1.ApiDivisionsService],
    })
], ApiDivisionsModule);


/***/ }),
/* 250 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(251), exports);


/***/ }),
/* 251 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DivisionsController = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(35);
const common_1 = __webpack_require__(1);
const services_1 = __webpack_require__(252);
let DivisionsController = exports.DivisionsController = class DivisionsController {
    constructor(divisionsService) {
        this.divisionsService = divisionsService;
    }
    async getAll() {
        const divisions = await this.divisionsService.getAll();
        if (!divisions || divisions.length < 1) {
            throw new common_1.NotFoundException('Divisions not found');
        }
        return divisions;
    }
    async getAllActive() {
        const divisions = await this.divisionsService.getAllActive();
        if (!divisions || divisions.length < 1) {
            throw new common_1.NotFoundException('Divisions not found');
        }
        return divisions;
    }
    updateDivisionById(param, body) {
        return this.divisionsService.updateDivisionById(parseInt(param.id), body);
    }
    addDivision(body) {
        return this.divisionsService.addDivision(body);
    }
    deleteDivision(param) {
        return this.divisionsService.deleteDivision(parseInt(param.id));
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], DivisionsController.prototype, "getAll", null);
tslib_1.__decorate([
    (0, common_1.Get)('/active'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], DivisionsController.prototype, "getAllActive", null);
tslib_1.__decorate([
    (0, common_1.Put)('/:id'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], DivisionsController.prototype, "updateDivisionById", null);
tslib_1.__decorate([
    (0, common_1.Post)('/add'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_e = typeof entities_1.DivisionCreateDto !== "undefined" && entities_1.DivisionCreateDto) === "function" ? _e : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], DivisionsController.prototype, "addDivision", null);
tslib_1.__decorate([
    (0, common_1.Delete)('/:id'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], DivisionsController.prototype, "deleteDivision", null);
exports.DivisionsController = DivisionsController = tslib_1.__decorate([
    (0, common_1.Controller)('divisions'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof services_1.ApiDivisionsService !== "undefined" && services_1.ApiDivisionsService) === "function" ? _a : Object])
], DivisionsController);


/***/ }),
/* 252 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(253), exports);


/***/ }),
/* 253 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiDivisionsService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(32);
const typeorm_2 = __webpack_require__(13);
let ApiDivisionsService = exports.ApiDivisionsService = class ApiDivisionsService {
    constructor(repo) {
        this.repo = repo;
    }
    async getAllActive() {
        return await this.repo.findBy({ isactive: true });
    }
    async getAll() {
        return await this.repo.find({
            relations: ['conference_id'],
        });
    }
    async updateDivisionById(id, attrs) {
        const division = await this.repo.findOneByOrFail({ id });
        if (!division) {
            throw new common_1.NotFoundException('division not found');
        }
        Object.assign(division, attrs);
        return this.repo.save(division);
    }
    async addDivision(body) {
        const division = await this.repo.create(body);
        return this.repo.save(division);
    }
    async deleteDivision(id) {
        const division = await this.repo.findOneByOrFail({ id });
        if (!division) {
            throw new common_1.NotFoundException('division not found');
        }
        return this.repo.remove(division);
    }
};
exports.ApiDivisionsService = ApiDivisionsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Divisions_V2)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ApiDivisionsService);


/***/ }),
/* 254 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(255), exports);


/***/ }),
/* 255 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DivisionsMiddleware = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
let DivisionsMiddleware = exports.DivisionsMiddleware = class DivisionsMiddleware {
    use(req, res, next) {
        console.log('Request Divisions...');
        next();
    }
};
exports.DivisionsMiddleware = DivisionsMiddleware = tslib_1.__decorate([
    (0, common_1.Injectable)()
], DivisionsMiddleware);


/***/ }),
/* 256 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(257), exports);


/***/ }),
/* 257 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiGoalieRatingsModule = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(32);
const controllers_1 = __webpack_require__(258);
const middlewares_1 = __webpack_require__(262);
const services_1 = __webpack_require__(260);
let ApiGoalieRatingsModule = exports.ApiGoalieRatingsModule = class ApiGoalieRatingsModule {
    configure(consumer) {
        consumer.apply(middlewares_1.GoalieRatingsMiddleware).forRoutes('*');
    }
};
exports.ApiGoalieRatingsModule = ApiGoalieRatingsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entities_1.Goalie_Ratings_V2, entities_1.Players_V2])],
        controllers: [controllers_1.GoalieRatingsController],
        providers: [services_1.ApiGoalieRatingsService],
    })
], ApiGoalieRatingsModule);


/***/ }),
/* 258 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(259), exports);


/***/ }),
/* 259 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GoalieRatingsController = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
const services_1 = __webpack_require__(260);
let GoalieRatingsController = exports.GoalieRatingsController = class GoalieRatingsController {
    constructor(goalieRatingsService) {
        this.goalieRatingsService = goalieRatingsService;
    }
    async getAllRatings(param) {
        const players = await this.goalieRatingsService.getAll(param.season);
        if (!players || players.length < 1) {
            throw new common_1.NotFoundException('ratings not found');
        }
        return players;
    }
    updatePlayerById(param, body) {
        return this.goalieRatingsService.updatePlayerById(parseInt(param.id), body);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('/:season'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], GoalieRatingsController.prototype, "getAllRatings", null);
tslib_1.__decorate([
    (0, common_1.Put)('/:id'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], GoalieRatingsController.prototype, "updatePlayerById", null);
exports.GoalieRatingsController = GoalieRatingsController = tslib_1.__decorate([
    (0, common_1.Controller)('goalie-ratings'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof services_1.ApiGoalieRatingsService !== "undefined" && services_1.ApiGoalieRatingsService) === "function" ? _a : Object])
], GoalieRatingsController);


/***/ }),
/* 260 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(261), exports);


/***/ }),
/* 261 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiGoalieRatingsService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(32);
const typeorm_2 = __webpack_require__(13);
let ApiGoalieRatingsService = exports.ApiGoalieRatingsService = class ApiGoalieRatingsService {
    constructor(repo, playersRepo) {
        this.repo = repo;
        this.playersRepo = playersRepo;
    }
    async getAll(season) {
        const ratings = await this.repo.find({
            where: {
                playing_year: season,
            },
        });
        const ratingsWithPlayerInfo = await this.setPlayerInfo(ratings);
        return ratingsWithPlayerInfo;
    }
    async updatePlayerById(id, attrs) {
        const player = await this.repo.findOneByOrFail({ id });
        if (!player) {
            throw new common_1.NotFoundException('player not found');
        }
        Object.assign(player, attrs);
        return this.repo.save(player);
    }
    async setPlayerInfo(array) {
        return await Promise.all(array.map(async (item) => ({
            ...item,
            playerInfo: await this.getPlayerInfo(item.player_id),
        })));
    }
    async getPlayerInfo(playerId) {
        if (playerId) {
            return await this.playersRepo.findOne({
                select: {
                    id: true,
                    firstname: true,
                    lastname: true,
                },
                where: {
                    id: playerId,
                },
            });
        }
        else {
            return {};
        }
    }
};
exports.ApiGoalieRatingsService = ApiGoalieRatingsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Goalie_Ratings_V2)),
    tslib_1.__param(1, (0, typeorm_1.InjectRepository)(entities_1.Players_V2)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], ApiGoalieRatingsService);


/***/ }),
/* 262 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(263), exports);


/***/ }),
/* 263 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GoalieRatingsMiddleware = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
let GoalieRatingsMiddleware = exports.GoalieRatingsMiddleware = class GoalieRatingsMiddleware {
    use(req, res, next) {
        console.log('Request Goalie Ratings...');
        next();
    }
};
exports.GoalieRatingsMiddleware = GoalieRatingsMiddleware = tslib_1.__decorate([
    (0, common_1.Injectable)()
], GoalieRatingsMiddleware);


/***/ }),
/* 264 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(265), exports);


/***/ }),
/* 265 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiConferencesModule = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(32);
const controllers_1 = __webpack_require__(266);
const middlewares_1 = __webpack_require__(270);
const services_1 = __webpack_require__(268);
let ApiConferencesModule = exports.ApiConferencesModule = class ApiConferencesModule {
    configure(consumer) {
        consumer.apply(middlewares_1.ConferencesMiddleware).forRoutes('*');
    }
};
exports.ApiConferencesModule = ApiConferencesModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entities_1.Conferences_V2])],
        controllers: [controllers_1.ConferencesController],
        providers: [services_1.ApiConferencesService],
    })
], ApiConferencesModule);


/***/ }),
/* 266 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(267), exports);


/***/ }),
/* 267 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConferencesController = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(35);
const common_1 = __webpack_require__(1);
const services_1 = __webpack_require__(268);
let ConferencesController = exports.ConferencesController = class ConferencesController {
    constructor(conferencesService) {
        this.conferencesService = conferencesService;
    }
    async getAll() {
        const conferences = await this.conferencesService.getAll();
        if (!conferences || conferences.length < 1) {
            throw new common_1.NotFoundException('Conferences not found');
        }
        return conferences;
    }
    updateConferenceById(param, body) {
        return this.conferencesService.updateConferenceById(parseInt(param.id), body);
    }
    addConference(body) {
        return this.conferencesService.addConference(body);
    }
    deleteConference(param) {
        return this.conferencesService.deleteConference(parseInt(param.id));
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], ConferencesController.prototype, "getAll", null);
tslib_1.__decorate([
    (0, common_1.Put)('/:id'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], ConferencesController.prototype, "updateConferenceById", null);
tslib_1.__decorate([
    (0, common_1.Post)('/add'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof entities_1.ConferenceCreateDto !== "undefined" && entities_1.ConferenceCreateDto) === "function" ? _d : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], ConferencesController.prototype, "addConference", null);
tslib_1.__decorate([
    (0, common_1.Delete)('/:id'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], ConferencesController.prototype, "deleteConference", null);
exports.ConferencesController = ConferencesController = tslib_1.__decorate([
    (0, common_1.Controller)('conferences'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof services_1.ApiConferencesService !== "undefined" && services_1.ApiConferencesService) === "function" ? _a : Object])
], ConferencesController);


/***/ }),
/* 268 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(269), exports);


/***/ }),
/* 269 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiConferencesService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(32);
const typeorm_2 = __webpack_require__(13);
let ApiConferencesService = exports.ApiConferencesService = class ApiConferencesService {
    constructor(repo) {
        this.repo = repo;
    }
    async getAll() {
        return await this.repo.find();
    }
    async updateConferenceById(id, attrs) {
        const conference = await this.repo.findOneByOrFail({ id });
        if (!conference) {
            throw new common_1.NotFoundException('conference not found');
        }
        Object.assign(conference, attrs);
        return this.repo.save(conference);
    }
    async addConference(body) {
        const conference = await this.repo.create(body);
        return this.repo.save(conference);
    }
    async deleteConference(id) {
        const conference = await this.repo.findOneByOrFail({ id });
        if (!conference) {
            throw new common_1.NotFoundException('conference not found');
        }
        return this.repo.remove(conference);
    }
};
exports.ApiConferencesService = ApiConferencesService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Conferences_V2)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ApiConferencesService);


/***/ }),
/* 270 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(271), exports);


/***/ }),
/* 271 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConferencesMiddleware = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
let ConferencesMiddleware = exports.ConferencesMiddleware = class ConferencesMiddleware {
    use(req, res, next) {
        console.log('Request Conferences...');
        next();
    }
};
exports.ConferencesMiddleware = ConferencesMiddleware = tslib_1.__decorate([
    (0, common_1.Injectable)()
], ConferencesMiddleware);


/***/ }),
/* 272 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 273 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
let AppController = exports.AppController = class AppController {
    root() {
        return { message: 'Hello world!' };
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('index'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "root", null);
exports.AppController = AppController = tslib_1.__decorate([
    (0, common_1.Controller)()
], AppController);


/***/ }),
/* 274 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
let AppService = exports.AppService = class AppService {
    getData() {
        return { message: 'Welcome to cha-server!' };
    }
    getViewName() {
        return 'index.hbs';
    }
};
exports.AppService = AppService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], AppService);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(1);
const core_1 = __webpack_require__(2);
const path_1 = __webpack_require__(3);
const app_module_1 = __webpack_require__(4);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const globalPrefix = 'api';
    const port = process.env.PORT || 3333;
    console.log(process.env.DATABASE_URL);
    app.setGlobalPrefix(globalPrefix);
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'public'));
    app.setBaseViewsDir((0, path_1.join)(__dirname, 'assets/views'));
    app.setViewEngine('hbs');
    app.enableCors();
    app.use((req, res, next) => {
        next();
    });
    await app.listen(port);
    common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map