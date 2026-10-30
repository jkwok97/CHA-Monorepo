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
const config_1 = __webpack_require__(278);
const typeorm_1 = __webpack_require__(38);
const app_controller_1 = __webpack_require__(279);
const app_service_1 = __webpack_require__(280);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
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
const users_1 = __webpack_require__(125);
const draft_table_1 = __webpack_require__(133);
const entry_draft_1 = __webpack_require__(141);
const goalie_stats_1 = __webpack_require__(149);
const league_1 = __webpack_require__(160);
const nhl_1 = __webpack_require__(167);
const player_info_1 = __webpack_require__(177);
const player_ratings_1 = __webpack_require__(185);
const player_stats_1 = __webpack_require__(193);
const salaries_1 = __webpack_require__(204);
const schedule_1 = __webpack_require__(212);
const team_stats_1 = __webpack_require__(220);
const teams_1 = __webpack_require__(230);
const transactions_1 = __webpack_require__(237);
const waivers_1 = __webpack_require__(246);
const divisions_1 = __webpack_require__(254);
const goalie_ratings_1 = __webpack_require__(262);
const conferences_1 = __webpack_require__(270);
let ApiCoreModule = class ApiCoreModule {
};
exports.ApiCoreModule = ApiCoreModule;
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
const typeorm_1 = __webpack_require__(38);
const controllers_1 = __webpack_require__(39);
const middlewares_1 = __webpack_require__(123);
const services_1 = __webpack_require__(120);
let ApiAwardsModule = class ApiAwardsModule {
    configure(consumer) {
        consumer.apply(middlewares_1.AwardsMiddleware).forRoutes('*');
    }
};
exports.ApiAwardsModule = ApiAwardsModule;
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
tslib_1.__exportStar(__webpack_require__(32), exports);
tslib_1.__exportStar(__webpack_require__(34), exports);
tslib_1.__exportStar(__webpack_require__(36), exports);


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
let Award_Type_V2 = class Award_Type_V2 {
};
exports.Award_Type_V2 = Award_Type_V2;
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
let Awards_V2 = class Awards_V2 {
};
exports.Awards_V2 = Awards_V2;
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
let Players_Stats_V2 = class Players_Stats_V2 {
};
exports.Players_Stats_V2 = Players_Stats_V2;
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
let Players_V2 = class Players_V2 {
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
exports.Players_V2 = Players_V2;
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
let Drafts_V2 = class Drafts_V2 {
};
exports.Drafts_V2 = Drafts_V2;
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
let Teams_V2 = class Teams_V2 {
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
exports.Teams_V2 = Teams_V2;
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
let Divisions_V2 = class Divisions_V2 {
};
exports.Divisions_V2 = Divisions_V2;
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
let Conferences_V2 = class Conferences_V2 {
};
exports.Conferences_V2 = Conferences_V2;
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
let Goalie_Ratings_V2 = class Goalie_Ratings_V2 {
};
exports.Goalie_Ratings_V2 = Goalie_Ratings_V2;
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
let Goalies_Stats_V2 = class Goalies_Stats_V2 {
};
exports.Goalies_Stats_V2 = Goalies_Stats_V2;
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
let Player_Ratings_V2 = class Player_Ratings_V2 {
};
exports.Player_Ratings_V2 = Player_Ratings_V2;
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
let Salaries_V2 = class Salaries_V2 {
};
exports.Salaries_V2 = Salaries_V2;
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
let Users_V2 = class Users_V2 {
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
exports.Users_V2 = Users_V2;
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
let Current_Season_V2 = class Current_Season_V2 {
};
exports.Current_Season_V2 = Current_Season_V2;
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
    tslib_1.__metadata("design:type", String)
], Current_Season_V2.prototype, "current_cap", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
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
let Draft_Order_V2 = class Draft_Order_V2 {
};
exports.Draft_Order_V2 = Draft_Order_V2;
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
let Schedule_V2 = class Schedule_V2 {
};
exports.Schedule_V2 = Schedule_V2;
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
let Team_Stats_V2 = class Team_Stats_V2 {
};
exports.Team_Stats_V2 = Team_Stats_V2;
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
let Transactions_V2 = class Transactions_V2 {
};
exports.Transactions_V2 = Transactions_V2;
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
let Waivers_V2 = class Waivers_V2 {
};
exports.Waivers_V2 = Waivers_V2;
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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(33), exports);


/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(35), exports);


/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NhlTeamEnum = void 0;
var NhlTeamEnum;
(function (NhlTeamEnum) {
    NhlTeamEnum["Anaheim Ducks"] = "ANA";
    NhlTeamEnum["Boston Bruins"] = "BOS";
    NhlTeamEnum["Buffalo Sabres"] = "BUF";
    NhlTeamEnum["Calgary Flames"] = "CGY";
    NhlTeamEnum["Carolina Hurricanes"] = "CAR";
    NhlTeamEnum["Chicago Blackhawks"] = "CHI";
    NhlTeamEnum["Colorado Avalanche"] = "COL";
    NhlTeamEnum["Columbus Blue Jackets"] = "CBJ";
    NhlTeamEnum["Dallas Stars"] = "DAL";
    NhlTeamEnum["Detroit Red Wings"] = "DET";
    NhlTeamEnum["Edmonton Oilers"] = "EDM";
    NhlTeamEnum["Florida Panthers"] = "FLA";
    NhlTeamEnum["Los Angeles Kings"] = "LAK";
    NhlTeamEnum["Minnesota Wild"] = "MIN";
    NhlTeamEnum["Montreal Canadiens"] = "MTL";
    NhlTeamEnum["Nashville Predators"] = "NSH";
    NhlTeamEnum["New Jersey Devils"] = "NJD";
    NhlTeamEnum["New York Islanders"] = "NYI";
    NhlTeamEnum["New York Rangers"] = "NYR";
    NhlTeamEnum["Ottawa Senators"] = "OTT";
    NhlTeamEnum["Philadelphia Flyers"] = "PHI";
    NhlTeamEnum["Pittsburgh Penguins"] = "PIT";
    NhlTeamEnum["San Jose Sharks"] = "SJS";
    NhlTeamEnum["Seattle Kraken"] = "SEA";
    NhlTeamEnum["St. Louis Blues"] = "STL";
    NhlTeamEnum["Tampa Bay Lightning"] = "TBL";
    NhlTeamEnum["Toronto Maple Leafs"] = "TOR";
    NhlTeamEnum["Utah Mammoth"] = "UTA";
    NhlTeamEnum["Vancouver Canucks"] = "VAN";
    NhlTeamEnum["Vegas Golden Knights"] = "VGK";
    NhlTeamEnum["Washington Capitals"] = "WSH";
    NhlTeamEnum["Winnipeg Jets"] = "WPG";
})(NhlTeamEnum || (exports.NhlTeamEnum = NhlTeamEnum = {}));


/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(37), exports);


/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getNhlTeamAbbr = getNhlTeamAbbr;
const enums_1 = __webpack_require__(34);
function getNhlTeamAbbr(teamName) {
    switch (teamName) {
        case 'Anaheim Ducks':
            return enums_1.NhlTeamEnum['Anaheim Ducks'];
        case 'Boston Bruins':
            return enums_1.NhlTeamEnum['Boston Bruins'];
        case 'Buffalo Sabres':
            return enums_1.NhlTeamEnum['Buffalo Sabres'];
        case 'Calgary Flames':
            return enums_1.NhlTeamEnum['Calgary Flames'];
        case 'Carolina Hurricanes':
            return enums_1.NhlTeamEnum['Carolina Hurricanes'];
        case 'Chicago Blackhawks':
            return enums_1.NhlTeamEnum['Chicago Blackhawks'];
        case 'Colorado Avalanche':
            return enums_1.NhlTeamEnum['Colorado Avalanche'];
        case 'Columbus Blue Jackets':
            return enums_1.NhlTeamEnum['Columbus Blue Jackets'];
        case 'Dallas Stars':
            return enums_1.NhlTeamEnum['Dallas Stars'];
        case 'Detroit Red Wings':
            return enums_1.NhlTeamEnum['Detroit Red Wings'];
        case 'Edmonton Oilers':
            return enums_1.NhlTeamEnum['Edmonton Oilers'];
        case 'Florida Panthers':
            return enums_1.NhlTeamEnum['Florida Panthers'];
        case 'Los Angeles Kings':
            return enums_1.NhlTeamEnum['Los Angeles Kings'];
        case 'Minnesota Wild':
            return enums_1.NhlTeamEnum['Minnesota Wild'];
        case 'Montreal Canadiens':
            return enums_1.NhlTeamEnum['Montreal Canadiens'];
        case 'Nashville Predators':
            return enums_1.NhlTeamEnum['Nashville Predators'];
        case 'New Jersey Devils':
            return enums_1.NhlTeamEnum['New Jersey Devils'];
        case 'New York Islanders':
            return enums_1.NhlTeamEnum['New York Islanders'];
        case 'New York Rangers':
            return enums_1.NhlTeamEnum['New York Rangers'];
        case 'Ottawa Senators':
            return enums_1.NhlTeamEnum['Ottawa Senators'];
        case 'Philadelphia Flyers':
            return enums_1.NhlTeamEnum['Philadelphia Flyers'];
        case 'Pittsburgh Penguins':
            return enums_1.NhlTeamEnum['Pittsburgh Penguins'];
        case 'San Jose Sharks':
            return enums_1.NhlTeamEnum['San Jose Sharks'];
        case 'Seattle Kraken':
            return enums_1.NhlTeamEnum['Seattle Kraken'];
        case 'St. Louis Blues':
            return enums_1.NhlTeamEnum['St. Louis Blues'];
        case 'Tampa Bay Lightning':
            return enums_1.NhlTeamEnum['Tampa Bay Lightning'];
        case 'Toronto Maple Leafs':
            return enums_1.NhlTeamEnum['Toronto Maple Leafs'];
        case 'Vancouver Canucks':
            return enums_1.NhlTeamEnum['Vancouver Canucks'];
        case 'Utah Mammoth':
            return enums_1.NhlTeamEnum['Utah Mammoth'];
        case 'Vegas Golden Knights':
            return enums_1.NhlTeamEnum['Vegas Golden Knights'];
        case 'Washington Capitals':
            return enums_1.NhlTeamEnum['Washington Capitals'];
        case 'Winnipeg Jets':
            return enums_1.NhlTeamEnum['Winnipeg Jets'];
        default:
            return null;
    }
}


/***/ }),
/* 38 */
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(40), exports);


/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AwardsController = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(41);
const common_1 = __webpack_require__(1);
const services_1 = __webpack_require__(120);
const api_awards_service_1 = __webpack_require__(121);
let AwardsController = class AwardsController {
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
exports.AwardsController = AwardsController;
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
/* 41 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(42), exports);
tslib_1.__exportStar(__webpack_require__(103), exports);
tslib_1.__exportStar(__webpack_require__(115), exports);


/***/ }),
/* 42 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(43), exports);
tslib_1.__exportStar(__webpack_require__(46), exports);
tslib_1.__exportStar(__webpack_require__(48), exports);
tslib_1.__exportStar(__webpack_require__(52), exports);
tslib_1.__exportStar(__webpack_require__(57), exports);
tslib_1.__exportStar(__webpack_require__(59), exports);
tslib_1.__exportStar(__webpack_require__(63), exports);
tslib_1.__exportStar(__webpack_require__(68), exports);
tslib_1.__exportStar(__webpack_require__(86), exports);
tslib_1.__exportStar(__webpack_require__(89), exports);
tslib_1.__exportStar(__webpack_require__(96), exports);
tslib_1.__exportStar(__webpack_require__(101), exports);


/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(44), exports);
tslib_1.__exportStar(__webpack_require__(45), exports);


/***/ }),
/* 44 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserDto = void 0;
class UserDto {
}
exports.UserDto = UserDto;


/***/ }),
/* 45 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserCreateDto = void 0;
class UserCreateDto {
}
exports.UserCreateDto = UserCreateDto;


/***/ }),
/* 46 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(47), exports);


/***/ }),
/* 47 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 48 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(49), exports);
tslib_1.__exportStar(__webpack_require__(50), exports);
tslib_1.__exportStar(__webpack_require__(51), exports);


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
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 52 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(53), exports);
tslib_1.__exportStar(__webpack_require__(54), exports);
tslib_1.__exportStar(__webpack_require__(55), exports);
tslib_1.__exportStar(__webpack_require__(56), exports);


/***/ }),
/* 53 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


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


/***/ }),
/* 58 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 59 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(60), exports);
tslib_1.__exportStar(__webpack_require__(61), exports);
tslib_1.__exportStar(__webpack_require__(62), exports);


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
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 63 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(64), exports);
tslib_1.__exportStar(__webpack_require__(65), exports);
tslib_1.__exportStar(__webpack_require__(66), exports);
tslib_1.__exportStar(__webpack_require__(67), exports);


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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
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
tslib_1.__exportStar(__webpack_require__(80), exports);
tslib_1.__exportStar(__webpack_require__(81), exports);
tslib_1.__exportStar(__webpack_require__(82), exports);
tslib_1.__exportStar(__webpack_require__(83), exports);
tslib_1.__exportStar(__webpack_require__(84), exports);
tslib_1.__exportStar(__webpack_require__(85), exports);


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
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


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
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(87), exports);
tslib_1.__exportStar(__webpack_require__(88), exports);


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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(90), exports);
tslib_1.__exportStar(__webpack_require__(91), exports);
tslib_1.__exportStar(__webpack_require__(92), exports);
tslib_1.__exportStar(__webpack_require__(93), exports);
tslib_1.__exportStar(__webpack_require__(94), exports);
tslib_1.__exportStar(__webpack_require__(95), exports);


/***/ }),
/* 90 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


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
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 96 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(97), exports);
tslib_1.__exportStar(__webpack_require__(98), exports);
tslib_1.__exportStar(__webpack_require__(99), exports);
tslib_1.__exportStar(__webpack_require__(100), exports);


/***/ }),
/* 97 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 98 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 99 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 100 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 101 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(102), exports);


/***/ }),
/* 102 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 103 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(104), exports);
tslib_1.__exportStar(__webpack_require__(106), exports);
tslib_1.__exportStar(__webpack_require__(108), exports);
tslib_1.__exportStar(__webpack_require__(110), exports);
tslib_1.__exportStar(__webpack_require__(112), exports);


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
/* 106 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(107), exports);


/***/ }),
/* 107 */
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
/* 108 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(109), exports);


/***/ }),
/* 109 */
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
/* 110 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(111), exports);


/***/ }),
/* 111 */
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
/* 112 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(113), exports);
tslib_1.__exportStar(__webpack_require__(114), exports);


/***/ }),
/* 113 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConferencesEnum = void 0;
var ConferencesEnum;
(function (ConferencesEnum) {
    ConferencesEnum[ConferencesEnum["EASTERN"] = 2] = "EASTERN";
    ConferencesEnum[ConferencesEnum["WESTERN"] = 3] = "WESTERN";
})(ConferencesEnum || (exports.ConferencesEnum = ConferencesEnum = {}));


/***/ }),
/* 114 */
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
/* 115 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(116), exports);
tslib_1.__exportStar(__webpack_require__(118), exports);


/***/ }),
/* 116 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(117), exports);


/***/ }),
/* 117 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 118 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(119), exports);


/***/ }),
/* 119 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
// TODO UPDATE EVERY SEASON


/***/ }),
/* 120 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(121), exports);
tslib_1.__exportStar(__webpack_require__(122), exports);


/***/ }),
/* 121 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiAwardsService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const entities_2 = __webpack_require__(41);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(38);
const typeorm_2 = __webpack_require__(13);
let ApiAwardsService = class ApiAwardsService {
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
exports.ApiAwardsService = ApiAwardsService;
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
/* 122 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiUserAwardsService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(38);
const typeorm_2 = __webpack_require__(13);
let ApiUserAwardsService = class ApiUserAwardsService {
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
exports.ApiUserAwardsService = ApiUserAwardsService;
exports.ApiUserAwardsService = ApiUserAwardsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Awards_V2)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ApiUserAwardsService);


/***/ }),
/* 123 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(124), exports);


/***/ }),
/* 124 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AwardsMiddleware = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
let AwardsMiddleware = class AwardsMiddleware {
    use(req, res, next) {
        next();
    }
};
exports.AwardsMiddleware = AwardsMiddleware;
exports.AwardsMiddleware = AwardsMiddleware = tslib_1.__decorate([
    (0, common_1.Injectable)()
], AwardsMiddleware);


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
exports.ApiUsersModule = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(38);
const controllers_1 = __webpack_require__(127);
const middlewares_1 = __webpack_require__(131);
const services_1 = __webpack_require__(129);
let ApiUsersModule = class ApiUsersModule {
    configure(consumer) {
        consumer.apply(middlewares_1.UserMiddleware).forRoutes('*');
    }
};
exports.ApiUsersModule = ApiUsersModule;
exports.ApiUsersModule = ApiUsersModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entities_1.Users_V2])],
        controllers: [controllers_1.UsersController],
        providers: [services_1.UsersService],
    })
], ApiUsersModule);


/***/ }),
/* 127 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(128), exports);


/***/ }),
/* 128 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersController = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
const services_1 = __webpack_require__(129);
const entities_1 = __webpack_require__(41);
let UsersController = class UsersController {
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
exports.UsersController = UsersController;
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
/* 129 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(130), exports);


/***/ }),
/* 130 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(38);
const typeorm_2 = __webpack_require__(13);
let UsersService = class UsersService {
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
exports.UsersService = UsersService;
exports.UsersService = UsersService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Users_V2)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], UsersService);


/***/ }),
/* 131 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(132), exports);


/***/ }),
/* 132 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserMiddleware = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
let UserMiddleware = class UserMiddleware {
    use(req, res, next) {
        next();
    }
};
exports.UserMiddleware = UserMiddleware;
exports.UserMiddleware = UserMiddleware = tslib_1.__decorate([
    (0, common_1.Injectable)()
], UserMiddleware);


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
exports.ApiDraftTableModule = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(38);
const controllers_1 = __webpack_require__(135);
const middlewares_1 = __webpack_require__(139);
const services_1 = __webpack_require__(137);
let ApiDraftTableModule = class ApiDraftTableModule {
    configure(consumer) {
        consumer.apply(middlewares_1.DraftTableMiddleware).forRoutes('*');
    }
};
exports.ApiDraftTableModule = ApiDraftTableModule;
exports.ApiDraftTableModule = ApiDraftTableModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entities_1.Draft_Order_V2, entities_1.Team_Stats_V2])],
        controllers: [controllers_1.DraftTableController],
        providers: [services_1.ApiDraftTableService],
    })
], ApiDraftTableModule);


/***/ }),
/* 135 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(136), exports);


/***/ }),
/* 136 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DraftTableController = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
const services_1 = __webpack_require__(137);
let DraftTableController = class DraftTableController {
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
exports.DraftTableController = DraftTableController;
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
/* 137 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(138), exports);


/***/ }),
/* 138 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiDraftTableService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(38);
const typeorm_2 = __webpack_require__(13);
const TEAM_INFO_SELECT = {
    team_id: {
        id: true,
        shortname: true,
        city: true,
        nickname: true,
        teamlogo: true,
    },
};
let ApiDraftTableService = class ApiDraftTableService {
    constructor(repo, teamStatsRepo) {
        this.repo = repo;
        this.teamStatsRepo = teamStatsRepo;
    }
    async getAll(draftYear) {
        return this.repo.find({
            relations: {
                team_id: true,
            },
            select: TEAM_INFO_SELECT,
            where: {
                draft_year: draftYear,
            },
        });
    }
    async updateTableById(id, attrs) {
        const item = await this.repo.findOneBy({ id });
        if (!item) {
            throw new common_1.NotFoundException(`Draft table record with id ${id} not found`);
        }
        Object.assign(item, attrs);
        return this.repo.save(item);
    }
    async getDraftTableByYearByStandings(draftYear, playingYear) {
        const draftTable = await this.repo.find({
            relations: {
                team_id: true,
            },
            select: TEAM_INFO_SELECT,
            where: {
                draft_year: draftYear,
            },
        });
        if (draftTable.length === 0) {
            return [];
        }
        const uniqueTeamIds = Array.from(new Set(draftTable
            .map((entry) => entry.team_id?.id)
            .filter((id) => typeof id === 'number')));
        const teamStats = uniqueTeamIds.length
            ? await this.teamStatsRepo.find({
                relations: {
                    team_id: true,
                },
                select: {
                    id: true,
                    wins: true,
                    goals_for: true,
                    goals_against: true,
                    points: true,
                    team_id: {
                        id: true,
                    },
                },
                where: {
                    team_id: { id: (0, typeorm_2.In)(uniqueTeamIds) },
                    playing_year: playingYear,
                    season_type: 'Regular',
                },
            })
            : [];
        const statsMap = new Map(teamStats.map((stat) => [stat.team_id.id, stat]));
        const draftTableWithStandings = draftTable.map((item) => ({
            ...item,
            stats: statsMap.get(item.team_id?.id) ?? null,
        }));
        return this.sortByReverseStandings(draftTableWithStandings);
    }
    sortByReverseStandings(data) {
        return [...data].sort((a, b) => {
            const aPoints = Number(a.stats?.points ?? 0);
            const bPoints = Number(b.stats?.points ?? 0);
            if (aPoints !== bPoints)
                return aPoints - bPoints;
            const aWins = Number(a.stats?.wins ?? 0);
            const bWins = Number(b.stats?.wins ?? 0);
            if (aWins !== bWins)
                return aWins - bWins;
            const aGoalDiff = Number(a.stats?.goals_for ?? 0) - Number(a.stats?.goals_against ?? 0);
            const bGoalDiff = Number(b.stats?.goals_for ?? 0) - Number(b.stats?.goals_against ?? 0);
            if (aGoalDiff !== bGoalDiff)
                return aGoalDiff - bGoalDiff;
            const aGoalsFor = Number(a.stats?.goals_for ?? 0);
            const bGoalsFor = Number(b.stats?.goals_for ?? 0);
            return aGoalsFor - bGoalsFor;
        });
    }
};
exports.ApiDraftTableService = ApiDraftTableService;
exports.ApiDraftTableService = ApiDraftTableService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Draft_Order_V2)),
    tslib_1.__param(1, (0, typeorm_1.InjectRepository)(entities_1.Team_Stats_V2)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], ApiDraftTableService);


/***/ }),
/* 139 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(140), exports);


/***/ }),
/* 140 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DraftTableMiddleware = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
let DraftTableMiddleware = class DraftTableMiddleware {
    use(req, res, next) {
        next();
    }
};
exports.DraftTableMiddleware = DraftTableMiddleware;
exports.DraftTableMiddleware = DraftTableMiddleware = tslib_1.__decorate([
    (0, common_1.Injectable)()
], DraftTableMiddleware);


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
exports.ApiEntryDraftModule = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(38);
const controllers_1 = __webpack_require__(143);
const middlewares_1 = __webpack_require__(147);
const services_1 = __webpack_require__(145);
let ApiEntryDraftModule = class ApiEntryDraftModule {
    configure(consumer) {
        consumer.apply(middlewares_1.EntryDraftMiddleware).forRoutes('*');
    }
};
exports.ApiEntryDraftModule = ApiEntryDraftModule;
exports.ApiEntryDraftModule = ApiEntryDraftModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entities_1.Drafts_V2])],
        controllers: [controllers_1.EntryDraftController],
        providers: [services_1.ApiEntryDraftService],
    })
], ApiEntryDraftModule);


/***/ }),
/* 143 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(144), exports);


/***/ }),
/* 144 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EntryDraftController = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(41);
const common_1 = __webpack_require__(1);
const services_1 = __webpack_require__(145);
let EntryDraftController = class EntryDraftController {
    constructor(draftService) {
        this.draftService = draftService;
    }
    async getAll() {
        const entries = await this.draftService.getAll();
        if (!entries || entries.length === 0) {
            throw new common_1.NotFoundException('Entry Draft Table not found');
        }
        return entries;
    }
    async updatePickById(id, body) {
        const updated = await this.draftService.updatePickById(id, body);
        return updated;
    }
    async addPick(body) {
        const pick = await this.draftService.addPick(body);
        return pick;
    }
    async deletePick(id) {
        return this.draftService.deletePick(id);
    }
};
exports.EntryDraftController = EntryDraftController;
tslib_1.__decorate([
    (0, common_1.Get)('/ordered'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], EntryDraftController.prototype, "getAll", null);
tslib_1.__decorate([
    (0, common_1.Put)('/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, typeof (_c = typeof Partial !== "undefined" && Partial) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], EntryDraftController.prototype, "updatePickById", null);
tslib_1.__decorate([
    (0, common_1.Post)('/add'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_e = typeof entities_1.CreateDraftPickDto !== "undefined" && entities_1.CreateDraftPickDto) === "function" ? _e : Object]),
    tslib_1.__metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], EntryDraftController.prototype, "addPick", null);
tslib_1.__decorate([
    (0, common_1.Delete)('/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], EntryDraftController.prototype, "deletePick", null);
exports.EntryDraftController = EntryDraftController = tslib_1.__decorate([
    (0, common_1.Controller)('entry-draft'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof services_1.ApiEntryDraftService !== "undefined" && services_1.ApiEntryDraftService) === "function" ? _a : Object])
], EntryDraftController);


/***/ }),
/* 145 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(146), exports);


/***/ }),
/* 146 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiEntryDraftService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(38);
const typeorm_2 = __webpack_require__(13);
const DRAFT_PICK_SELECT = {
    id: true,
    draft_year: true,
    draft_round: true,
    draft_overall: true,
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
};
let ApiEntryDraftService = class ApiEntryDraftService {
    constructor(repo) {
        this.repo = repo;
    }
    async getAll(draftYear) {
        const whereClause = draftYear
            ? { draft_year: draftYear }
            : {};
        return this.repo.find({
            relations: {
                team_id: true,
                player_id: true,
                pick_team_id: true,
            },
            select: DRAFT_PICK_SELECT,
            where: whereClause,
            order: {
                draft_year: 'DESC',
                draft_round: 'ASC',
                draft_overall: 'ASC',
            },
        });
    }
    async updatePickById(id, attrs) {
        const pick = await this.repo.findOneBy({ id });
        if (!pick) {
            throw new common_1.NotFoundException(`Draft pick with id ${id} not found`);
        }
        Object.assign(pick, attrs);
        return this.repo.save(pick);
    }
    async addPick(body) {
        const pick = this.repo.create({
            draft_year: body.draft_year,
            draft_round: body.draft_round,
            draft_overall: body.draft_overall,
            player_id: body.player_id ? { id: body.player_id } : undefined,
            team_id: body.team_id ? { id: body.team_id } : undefined,
            pick_team_id: body.pick_team_id
                ? { id: body.pick_team_id }
                : undefined,
        });
        return this.repo.save(pick);
    }
    async deletePick(id) {
        const pick = await this.repo.findOneBy({ id });
        if (!pick) {
            throw new common_1.NotFoundException(`Draft pick with id ${id} not found`);
        }
        return this.repo.remove(pick);
    }
};
exports.ApiEntryDraftService = ApiEntryDraftService;
exports.ApiEntryDraftService = ApiEntryDraftService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Drafts_V2)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ApiEntryDraftService);


/***/ }),
/* 147 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(148), exports);


/***/ }),
/* 148 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EntryDraftMiddleware = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
let EntryDraftMiddleware = class EntryDraftMiddleware {
    use(req, res, next) {
        next();
    }
};
exports.EntryDraftMiddleware = EntryDraftMiddleware;
exports.EntryDraftMiddleware = EntryDraftMiddleware = tslib_1.__decorate([
    (0, common_1.Injectable)()
], EntryDraftMiddleware);


/***/ }),
/* 149 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(150), exports);


/***/ }),
/* 150 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiGoalieStatsModule = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(38);
const controllers_1 = __webpack_require__(151);
const middlewares_1 = __webpack_require__(158);
const services_1 = __webpack_require__(153);
let ApiGoalieStatsModule = class ApiGoalieStatsModule {
    configure(consumer) {
        consumer.apply(middlewares_1.GoalieStatsMiddleware).forRoutes('*');
    }
};
exports.ApiGoalieStatsModule = ApiGoalieStatsModule;
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
/* 151 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(152), exports);


/***/ }),
/* 152 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GoalieStatsController = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
const services_1 = __webpack_require__(153);
let GoalieStatsController = class GoalieStatsController {
    constructor(goalieStatsLeadersService, goalieStatsService, goalieAllTimeStatsService, userGoalieStatsService) {
        this.goalieStatsLeadersService = goalieStatsLeadersService;
        this.goalieStatsService = goalieStatsService;
        this.goalieAllTimeStatsService = goalieAllTimeStatsService;
        this.userGoalieStatsService = userGoalieStatsService;
    }
    async getAllPlayers(season) {
        const players = await this.goalieStatsService.getAll(season);
        if (!players || players.length === 0) {
            throw new common_1.NotFoundException(`No goalies found for season ${season}`);
        }
        return players;
    }
    async updatePlayerById(season, id, body) {
        return this.goalieStatsService.updateGoalieById(id, season, body);
    }
    async deletePlayer(season, id) {
        return this.goalieStatsService.deleteGoalie(id, season);
    }
    async getGoalieStatsLeaders(season, seasonType, minGames) {
        const stats = await this.goalieStatsLeadersService.getGoalieStatsLeaders(season, seasonType, minGames);
        if (!stats) {
            throw new common_1.NotFoundException('Goalie leader stats not found');
        }
        return stats;
    }
    async getAllGoalieStats(season, seasonType) {
        const stats = await this.goalieStatsService.getAllGoalieStats(season, seasonType);
        if (!stats || stats.length === 0) {
            throw new common_1.NotFoundException('Goalie stats not found');
        }
        return stats;
    }
    async getGoalieStatsByPlayerId(season, seasonType, playerId) {
        const stats = await this.goalieStatsService.getGoalieStatsByPlayerId(season, seasonType, playerId);
        if (!stats || stats.length === 0) {
            throw new common_1.NotFoundException(`Goalie stats not found for player ID ${playerId}`);
        }
        return stats;
    }
    async getAllTimePlayerStatsBySeasonByType(seasonType) {
        const stats = await this.goalieAllTimeStatsService.getAllTimeGoalieStatsBySeasonByType(seasonType);
        if (!stats || stats.length === 0) {
            throw new common_1.NotFoundException('Goalie history stats not found');
        }
        return stats;
    }
    async getAllTimeGoalieStatsSummedBySeasonByType(seasonType) {
        const stats = await this.goalieAllTimeStatsService.getAllTimeGoalieStatsSummedBySeasonByType(seasonType);
        if (!stats || stats.length === 0) {
            throw new common_1.NotFoundException('Goalie summed history stats not found');
        }
        return stats;
    }
    async getTeamGoaliesStatsBySeasonType(userId, seasonType) {
        const record = await this.userGoalieStatsService.getUserGoaliesStatsBySeasonType(userId, seasonType);
        if (!record || record.length === 0) {
            throw new common_1.NotFoundException('Team goalies stats not found');
        }
        // Resolves TypeORM Divisions_V2.id (number) vs StatUserGoaliesHistoryDto literal ID (5)
        return record;
    }
    async getTeamGoaliesStatsAllTimeBySeasonType(userId, seasonType) {
        const record = await this.userGoalieStatsService.getUserGoaliesStatsAllTimeBySeasonType(userId, seasonType);
        if (!record || record.length === 0) {
            throw new common_1.NotFoundException('Team goalies all-time stats not found');
        }
        // Resolves TypeORM Divisions_V2.id (number) vs StatUserGoaliesHistoryDto literal ID (5)
        return record;
    }
    async getTeamPlayersByTeamName(teamName, season) {
        const record = await this.userGoalieStatsService.getTeamPlayersByTeamName(teamName, season);
        if (!record || record.length === 0) {
            throw new common_1.NotFoundException(`Team goalies not found for team ${teamName}`);
        }
        return record;
    }
};
exports.GoalieStatsController = GoalieStatsController;
tslib_1.__decorate([
    (0, common_1.Get)('/:season'),
    tslib_1.__param(0, (0, common_1.Param)('season')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], GoalieStatsController.prototype, "getAllPlayers", null);
tslib_1.__decorate([
    (0, common_1.Put)('/:season/:id'),
    tslib_1.__param(0, (0, common_1.Param)('season')),
    tslib_1.__param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    tslib_1.__param(2, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Number, typeof (_f = typeof Partial !== "undefined" && Partial) === "function" ? _f : Object]),
    tslib_1.__metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], GoalieStatsController.prototype, "updatePlayerById", null);
tslib_1.__decorate([
    (0, common_1.Delete)('/:season/:id'),
    tslib_1.__param(0, (0, common_1.Param)('season')),
    tslib_1.__param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Number]),
    tslib_1.__metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], GoalieStatsController.prototype, "deletePlayer", null);
tslib_1.__decorate([
    (0, common_1.Get)('/leaders/:season/:seasonType/:minGames'),
    tslib_1.__param(0, (0, common_1.Param)('season')),
    tslib_1.__param(1, (0, common_1.Param)('seasonType')),
    tslib_1.__param(2, (0, common_1.Param)('minGames')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, String]),
    tslib_1.__metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], GoalieStatsController.prototype, "getGoalieStatsLeaders", null);
tslib_1.__decorate([
    (0, common_1.Get)('/all/:season/:seasonType'),
    tslib_1.__param(0, (0, common_1.Param)('season')),
    tslib_1.__param(1, (0, common_1.Param)('seasonType')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", typeof (_k = typeof Promise !== "undefined" && Promise) === "function" ? _k : Object)
], GoalieStatsController.prototype, "getAllGoalieStats", null);
tslib_1.__decorate([
    (0, common_1.Get)('/current/:season/:seasonType/:playerId'),
    tslib_1.__param(0, (0, common_1.Param)('season')),
    tslib_1.__param(1, (0, common_1.Param)('seasonType')),
    tslib_1.__param(2, (0, common_1.Param)('playerId', common_1.ParseIntPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, Number]),
    tslib_1.__metadata("design:returntype", typeof (_l = typeof Promise !== "undefined" && Promise) === "function" ? _l : Object)
], GoalieStatsController.prototype, "getGoalieStatsByPlayerId", null);
tslib_1.__decorate([
    (0, common_1.Get)('/history/season/:seasonType'),
    tslib_1.__param(0, (0, common_1.Param)('seasonType')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_m = typeof Promise !== "undefined" && Promise) === "function" ? _m : Object)
], GoalieStatsController.prototype, "getAllTimePlayerStatsBySeasonByType", null);
tslib_1.__decorate([
    (0, common_1.Get)('/history/all-time/:seasonType'),
    tslib_1.__param(0, (0, common_1.Param)('seasonType')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_o = typeof Promise !== "undefined" && Promise) === "function" ? _o : Object)
], GoalieStatsController.prototype, "getAllTimeGoalieStatsSummedBySeasonByType", null);
tslib_1.__decorate([
    (0, common_1.Get)('/user/:userId/history/:seasonType'),
    tslib_1.__param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    tslib_1.__param(1, (0, common_1.Param)('seasonType')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, String]),
    tslib_1.__metadata("design:returntype", typeof (_p = typeof Promise !== "undefined" && Promise) === "function" ? _p : Object)
], GoalieStatsController.prototype, "getTeamGoaliesStatsBySeasonType", null);
tslib_1.__decorate([
    (0, common_1.Get)('/user/:userId/history/all/:seasonType'),
    tslib_1.__param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    tslib_1.__param(1, (0, common_1.Param)('seasonType')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, String]),
    tslib_1.__metadata("design:returntype", typeof (_q = typeof Promise !== "undefined" && Promise) === "function" ? _q : Object)
], GoalieStatsController.prototype, "getTeamGoaliesStatsAllTimeBySeasonType", null);
tslib_1.__decorate([
    (0, common_1.Get)('/team/:teamName/:season'),
    tslib_1.__param(0, (0, common_1.Param)('teamName')),
    tslib_1.__param(1, (0, common_1.Param)('season')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", typeof (_r = typeof Promise !== "undefined" && Promise) === "function" ? _r : Object)
], GoalieStatsController.prototype, "getTeamPlayersByTeamName", null);
exports.GoalieStatsController = GoalieStatsController = tslib_1.__decorate([
    (0, common_1.Controller)('goalie-stats'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof services_1.ApiGoalieStatsLeadersService !== "undefined" && services_1.ApiGoalieStatsLeadersService) === "function" ? _a : Object, typeof (_b = typeof services_1.ApiGoalieStatsService !== "undefined" && services_1.ApiGoalieStatsService) === "function" ? _b : Object, typeof (_c = typeof services_1.ApiGoalieAllTimeStatsService !== "undefined" && services_1.ApiGoalieAllTimeStatsService) === "function" ? _c : Object, typeof (_d = typeof services_1.ApiUserGoalieStatsService !== "undefined" && services_1.ApiUserGoalieStatsService) === "function" ? _d : Object])
], GoalieStatsController);


/***/ }),
/* 153 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(154), exports);
tslib_1.__exportStar(__webpack_require__(155), exports);
tslib_1.__exportStar(__webpack_require__(156), exports);
tslib_1.__exportStar(__webpack_require__(157), exports);


/***/ }),
/* 154 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiGoalieStatsLeadersService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(38);
const typeorm_2 = __webpack_require__(13);
const COMMON_GOALIE_SELECT = {
    id: true,
    team_name: true,
    player_id: {
        id: true,
        firstname: true,
        lastname: true,
        nhl_id: true,
        isgoalie: true,
    },
};
let ApiGoalieStatsLeadersService = class ApiGoalieStatsLeadersService {
    constructor(repo, teamInfoRepo) {
        this.repo = repo;
        this.teamInfoRepo = teamInfoRepo;
    }
    async getGoalieStatsLeaders(season, seasonType, minGames) {
        const minGamesNum = Number(minGames) || 0;
        const minGamesFilter = {
            games_played: (0, typeorm_2.MoreThanOrEqual)(minGamesNum),
        };
        const [shotsFaced, gaa, savePct, shutouts, wins] = await Promise.all([
            this.getLeaders(season, seasonType, 'shots_for', 'DESC', minGamesFilter),
            this.getLeaders(season, seasonType, 'goals_against_avg', 'ASC', minGamesFilter),
            this.getLeaders(season, seasonType, 'save_pct', 'DESC', minGamesFilter),
            this.getLeaders(season, seasonType, 'shutouts', 'DESC'),
            this.getLeaders(season, seasonType, 'wins', 'DESC'),
        ]);
        const allResults = [
            ...shotsFaced,
            ...gaa,
            ...savePct,
            ...shutouts,
            ...wins,
        ];
        const uniqueTeamNames = Array.from(new Set(allResults.map((r) => r.team_name).filter(Boolean)));
        const teams = uniqueTeamNames.length
            ? await this.teamInfoRepo.find({
                select: {
                    id: true,
                    city: true,
                    teamlogo: true,
                    nickname: true,
                    shortname: true,
                },
                where: {
                    shortname: (0, typeorm_2.In)(uniqueTeamNames),
                },
            })
            : [];
        const teamMap = new Map(teams.map((team) => [team.shortname, team]));
        const attachTeamInfo = (leaders) => leaders.map((item) => ({
            ...item,
            teamInfo: teamMap.get(item.team_name) ?? null,
        }));
        return {
            shotsFaced: attachTeamInfo(shotsFaced),
            gaa: attachTeamInfo(gaa),
            savePct: attachTeamInfo(savePct),
            shutouts: attachTeamInfo(shutouts),
            wins: attachTeamInfo(wins),
        };
    }
    async getLeaders(season, seasonType, statField, orderDirection, extraWhere = {}, limit = 10) {
        return this.repo.find({
            select: {
                ...COMMON_GOALIE_SELECT,
                [statField]: true,
            },
            relations: {
                player_id: true,
            },
            where: {
                playing_year: season,
                season_type: seasonType,
                ...extraWhere,
            },
            order: {
                [statField]: orderDirection,
            },
            take: limit,
        });
    }
};
exports.ApiGoalieStatsLeadersService = ApiGoalieStatsLeadersService;
exports.ApiGoalieStatsLeadersService = ApiGoalieStatsLeadersService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Goalies_Stats_V2)),
    tslib_1.__param(1, (0, typeorm_1.InjectRepository)(entities_1.Teams_V2)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], ApiGoalieStatsLeadersService);


/***/ }),
/* 155 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiGoalieStatsService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(38);
const typeorm_2 = __webpack_require__(13);
const COMMON_GOALIE_STATS_SELECT = {
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
};
let ApiGoalieStatsService = class ApiGoalieStatsService {
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
        const playersWithTeamInfo = await this.attachTeamInfo(players);
        return playersWithTeamInfo;
    }
    async updateGoalieById(id, season, attrs) {
        const player = await this.repo.findOneBy({
            player_id: {
                id,
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
        const player = await this.repo.findOneBy({
            id,
            playing_year: season,
        });
        if (!player) {
            throw new common_1.NotFoundException('goalie not found');
        }
        return this.repo.remove(player);
    }
    async getAllGoalieStats(season, seasonType) {
        return this.fetchAndFormatGoalieStats({
            playing_year: season,
            season_type: seasonType,
        });
    }
    async getGoalieStatsByPlayerId(season, seasonType, playerId) {
        return this.fetchAndFormatGoalieStats({
            playing_year: season,
            season_type: seasonType,
            player_id: {
                id: playerId,
            },
        });
    }
    async fetchAndFormatGoalieStats(whereClause) {
        const records = await this.repo.find({
            select: COMMON_GOALIE_STATS_SELECT,
            relations: {
                player_id: true,
            },
            where: whereClause,
            order: {
                wins: 'DESC',
            },
        });
        if (records.length === 0) {
            return [];
        }
        const recordsWithTeams = await this.attachTeamInfo(records);
        return recordsWithTeams.map((stat) => ({
            ...stat,
            games_played: Number(stat.games_played),
            minutes_played: Number(stat.minutes_played),
            goals_against_avg: Number(Number(stat.goals_against_avg || 0).toFixed(2)),
            wins: Number(stat.wins),
            loss: Number(stat.loss),
            ties: Number(stat.ties),
            en_goals: Number(stat.en_goals),
            shutouts: Number(stat.shutouts),
            goals_against: Number(stat.goals_against),
            saves: Number(stat.saves),
            shots_for: Number(stat.shots_for),
            save_pct: Number(Number(stat.save_pct || 0).toFixed(3)),
            goals: Number(stat.goals),
            assists: Number(stat.assists),
            points: Number(stat.points),
            penalty_minutes: Number(stat.penalty_minutes),
            pass_pct: Number(stat.pass_pct || 0),
        }));
    }
    async attachTeamInfo(items) {
        const uniqueTeamNames = Array.from(new Set(items.map((item) => item.team_name).filter(Boolean)));
        const teams = uniqueTeamNames.length
            ? await this.teamInfoRepo.find({
                select: {
                    id: true,
                    city: true,
                    teamlogo: true,
                    nickname: true,
                    shortname: true,
                },
                where: {
                    shortname: (0, typeorm_2.In)(uniqueTeamNames),
                },
            })
            : [];
        const teamMap = new Map(teams.map((team) => [team.shortname, team]));
        return items.map((item) => ({
            ...item,
            teamInfo: teamMap.get(item.team_name) ?? null,
        }));
    }
};
exports.ApiGoalieStatsService = ApiGoalieStatsService;
exports.ApiGoalieStatsService = ApiGoalieStatsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Goalies_Stats_V2)),
    tslib_1.__param(1, (0, typeorm_1.InjectRepository)(entities_1.Teams_V2)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], ApiGoalieStatsService);


/***/ }),
/* 156 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiGoalieAllTimeStatsService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(38);
const typeorm_2 = __webpack_require__(13);
let ApiGoalieAllTimeStatsService = class ApiGoalieAllTimeStatsService {
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
            relations: {
                player_id: true,
            },
            where: {
                season_type: seasonType,
                games_played: (0, typeorm_2.MoreThan)(0),
            },
            order: {
                wins: 'DESC',
            },
        });
        if (allStats.length === 0) {
            return [];
        }
        const uniqueTeamNames = Array.from(new Set(allStats.map((stat) => stat.team_name).filter(Boolean)));
        const teams = uniqueTeamNames.length
            ? await this.teamInfoRepo.find({
                select: {
                    id: true,
                    city: true,
                    teamlogo: true,
                    nickname: true,
                    shortname: true,
                },
                where: {
                    shortname: (0, typeorm_2.In)(uniqueTeamNames),
                },
            })
            : [];
        const teamMap = new Map(teams.map((team) => [team.shortname, team]));
        return allStats.map((stat) => ({
            playing_year: stat.playing_year,
            season_type: stat.season_type,
            teamInfo: teamMap.get(stat.team_name) ?? null,
            player_id: stat.player_id,
            games_played: Number(stat.games_played),
            minutes_played: Number(stat.minutes_played),
            goals_against_avg: Number(Number(stat.goals_against_avg || 0).toFixed(2)),
            wins: Number(stat.wins),
            loss: Number(stat.loss),
            ties: Number(stat.ties),
            shutouts: Number(stat.shutouts),
            goals_against: Number(stat.goals_against),
            saves: Number(stat.saves),
            shots_for: Number(stat.shots_for),
            save_pct: Number(Number(stat.save_pct || 0).toFixed(3)),
            goals: Number(stat.goals),
            assists: Number(stat.assists),
            points: Number(stat.points),
            penalty_minutes: Number(stat.penalty_minutes),
        }));
    }
    async getAllTimeGoalieStatsSummedBySeasonByType(seasonType) {
        const rawSummedStats = await this.dataSource.query(`SELECT
         b.firstname AS firstname,
         b.lastname AS lastname,
         b.isgoalie AS isgoalie,
         b.nhl_id AS nhl_id,
         a.player_id AS player_id,
         a.season_type AS season_type,
         SUM(a.games_played) AS games_played,
         SUM(a.wins) AS wins,
         SUM(a.loss) AS loss,
         SUM(a.ties) AS ties,
         SUM(a.minutes_played) AS minutes_played,
         SUM(a.en_goals) AS en_goals,
         SUM(a.shutouts) AS shutouts,
         SUM(a.goals_against) AS goals_against,
         SUM(a.saves) AS saves,
         SUM(a.shots_for) AS shots_for,
         SUM(a.goals) AS goals,
         SUM(a.assists) AS assists,
         SUM(a.points) AS points,
         SUM(a.penalty_minutes) AS penalty_minutes
       FROM goalies_stats_v2 a
              INNER JOIN players_v2 b ON b.id = a.player_id
       WHERE a.games_played > 0
         AND a.season_type = $1
       GROUP BY b.firstname, b.lastname, b.isgoalie, b.nhl_id, a.player_id, a.season_type
       ORDER BY wins DESC`, [seasonType]);
        return rawSummedStats.map((stat) => {
            const minutesPlayed = Number(stat.minutes_played) || 0;
            const goalsAgainst = Number(stat.goals_against) || 0;
            const shotsFor = Number(stat.shots_for) || 0;
            const saves = Number(stat.saves) || 0;
            const gaa = minutesPlayed > 0 ? (goalsAgainst * 60) / minutesPlayed : 0;
            const savePct = shotsFor > 0 ? saves / shotsFor : 0;
            return {
                playing_year: null,
                season_type: stat.season_type,
                teamInfo: null,
                player_id: {
                    id: stat.player_id,
                    firstname: stat.firstname,
                    lastname: stat.lastname,
                    nhl_id: stat.nhl_id,
                    isactive: null,
                    isgoalie: stat.isgoalie,
                    isdefense: null,
                    isforward: null,
                    is_protected: null,
                },
                games_played: Number(stat.games_played),
                minutes_played: minutesPlayed,
                goals_against_avg: Number(gaa.toFixed(2)),
                wins: Number(stat.wins),
                loss: Number(stat.loss),
                ties: Number(stat.ties),
                shutouts: Number(stat.shutouts),
                goals_against: goalsAgainst,
                saves,
                shots_for: shotsFor,
                save_pct: Number(savePct.toFixed(3)),
                goals: Number(stat.goals),
                assists: Number(stat.assists),
                points: Number(stat.points),
                penalty_minutes: Number(stat.penalty_minutes),
            };
        });
    }
};
exports.ApiGoalieAllTimeStatsService = ApiGoalieAllTimeStatsService;
exports.ApiGoalieAllTimeStatsService = ApiGoalieAllTimeStatsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Goalies_Stats_V2)),
    tslib_1.__param(1, (0, typeorm_1.InjectRepository)(entities_1.Teams_V2)),
    tslib_1.__param(2, (0, typeorm_1.InjectDataSource)()),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.DataSource !== "undefined" && typeorm_2.DataSource) === "function" ? _c : Object])
], ApiGoalieAllTimeStatsService);


/***/ }),
/* 157 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiUserGoalieStatsService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(38);
const typeorm_2 = __webpack_require__(13);
const COMMON_GOALIE_STATS_SELECT = {
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
};
let ApiUserGoalieStatsService = class ApiUserGoalieStatsService {
    constructor(repo, teamInfoRepo, dataSource) {
        this.repo = repo;
        this.teamInfoRepo = teamInfoRepo;
        this.dataSource = dataSource;
    }
    async getUserGoaliesStatsBySeasonType(userId, seasonType) {
        const userTeams = await this.teamInfoRepo.findBy({ users_id: userId });
        if (userTeams.length === 0)
            return [];
        const teamShortNames = userTeams.map((t) => t.shortname).filter(Boolean);
        if (teamShortNames.length === 0)
            return [];
        const allStats = await this.repo.find({
            select: COMMON_GOALIE_STATS_SELECT,
            relations: {
                player_id: true,
            },
            where: {
                team_name: (0, typeorm_2.In)(teamShortNames),
                season_type: seasonType,
            },
            order: {
                wins: 'DESC',
            },
        });
        const statsByTeam = new Map();
        for (const stat of allStats) {
            const stats = statsByTeam.get(stat.team_name);
            if (stats) {
                stats.push(stat);
            }
            else {
                statsByTeam.set(stat.team_name, [stat]);
            }
        }
        return userTeams.map((team) => {
            const rawTeamStats = statsByTeam.get(team.shortname) ?? [];
            return {
                ...team,
                goalieStats: this.convertRegularStats(rawTeamStats, team),
            };
        });
    }
    async getUserGoaliesStatsAllTimeBySeasonType(userId, seasonType) {
        const userTeams = await this.teamInfoRepo.findBy({ users_id: userId });
        if (userTeams.length === 0)
            return [];
        const teamShortNames = userTeams.map((t) => t.shortname).filter(Boolean);
        if (teamShortNames.length === 0)
            return [];
        const rawStats = await this.dataSource.query(`SELECT
         b.firstname AS firstname,
         b.lastname AS lastname,
         b.isgoalie AS isgoalie,
         b.nhl_id AS nhl_id,
         a.player_id AS player_id,
         a.season_type AS season_type,
         a.team_name AS team_name,
         SUM(a.games_played) AS games_played,
         SUM(a.wins) AS wins,
         SUM(a.loss) AS loss,
         SUM(a.ties) AS ties,
         SUM(a.minutes_played) AS minutes_played,
         SUM(a.en_goals) AS en_goals,
         SUM(a.shutouts) AS shutouts,
         SUM(a.goals_against) AS goals_against,
         SUM(a.saves) AS saves,
         SUM(a.shots_for) AS shots_for,
         SUM(a.goals) AS goals,
         SUM(a.assists) AS assists,
         SUM(a.points) AS points,
         SUM(a.penalty_minutes) AS penalty_minutes
       FROM goalies_stats_v2 a
              INNER JOIN players_v2 b ON b.id = a.player_id
       WHERE a.games_played > 0
         AND a.season_type = $1
         AND a.team_name = ANY($2)
       GROUP BY b.firstname, b.lastname, b.isgoalie, b.nhl_id, a.player_id, a.season_type, a.team_name
       ORDER BY wins DESC`, [seasonType, teamShortNames]);
        // Group aggregated stats by team_name
        const statsByTeam = new Map();
        for (const stat of rawStats) {
            const stats = statsByTeam.get(stat.team_name);
            if (stats) {
                stats.push(stat);
            }
            else {
                statsByTeam.set(stat.team_name, [stat]);
            }
        }
        return userTeams.map((team) => {
            const rawTeamStats = statsByTeam.get(team.shortname) ?? [];
            return {
                ...team,
                goalieStats: this.convertAllTimeStats(rawTeamStats),
            };
        });
    }
    async getTeamPlayersByTeamName(teamName, season) {
        return this.repo.find({
            select: {
                player_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                },
            },
            relations: {
                player_id: true,
            },
            where: {
                team_name: teamName,
                playing_year: season,
                season_type: 'Regular',
            },
        });
    }
    convertRegularStats(stats, team) {
        const teamMetadata = {
            id: team.id,
            city: team.city,
            nickname: team.nickname,
            teamlogo: team.teamlogo,
        };
        return stats.map((stat) => ({
            playing_year: stat.playing_year,
            season_type: stat.season_type,
            team_name: stat.team_name,
            teamInfo: teamMetadata,
            player_id: stat.player_id,
            games_played: Number(stat.games_played),
            minutes_played: Number(stat.minutes_played),
            goals_against_avg: Number(Number(stat.goals_against_avg || 0).toFixed(2)),
            wins: Number(stat.wins),
            loss: Number(stat.loss),
            ties: Number(stat.ties),
            shutouts: Number(stat.shutouts),
            goals_against: Number(stat.goals_against),
            saves: Number(stat.saves),
            shots_for: Number(stat.shots_for),
            save_pct: Number(Number(stat.save_pct || 0).toFixed(3)),
            goals: Number(stat.goals),
            assists: Number(stat.assists),
            points: Number(stat.points),
            penalty_minutes: Number(stat.penalty_minutes),
        }));
    }
    convertAllTimeStats(stats) {
        return stats.map((stat) => {
            const minutesPlayed = Number(stat.minutes_played) || 0;
            const goalsAgainst = Number(stat.goals_against) || 0;
            const shotsFor = Number(stat.shots_for) || 0;
            const saves = Number(stat.saves) || 0;
            const gaa = minutesPlayed > 0 ? (goalsAgainst * 60) / minutesPlayed : 0;
            const savePct = shotsFor > 0 ? saves / shotsFor : 0;
            return {
                playing_year: null,
                season_type: stat.season_type,
                team_name: stat.team_name,
                teamInfo: null,
                player_id: {
                    id: stat.player_id,
                    firstname: stat.firstname,
                    lastname: stat.lastname,
                    nhl_id: stat.nhl_id,
                    isactive: null,
                    isgoalie: stat.isgoalie,
                    isdefense: null,
                    isforward: null,
                    is_protected: null,
                },
                games_played: Number(stat.games_played),
                minutes_played: minutesPlayed,
                goals_against_avg: Number(gaa.toFixed(2)),
                wins: Number(stat.wins),
                loss: Number(stat.loss),
                ties: Number(stat.ties),
                shutouts: Number(stat.shutouts),
                goals_against: goalsAgainst,
                saves,
                shots_for: shotsFor,
                save_pct: Number(savePct.toFixed(3)),
                goals: Number(stat.goals),
                assists: Number(stat.assists),
                points: Number(stat.points),
                penalty_minutes: Number(stat.penalty_minutes),
            };
        });
    }
};
exports.ApiUserGoalieStatsService = ApiUserGoalieStatsService;
exports.ApiUserGoalieStatsService = ApiUserGoalieStatsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Goalies_Stats_V2)),
    tslib_1.__param(1, (0, typeorm_1.InjectRepository)(entities_1.Teams_V2)),
    tslib_1.__param(2, (0, typeorm_1.InjectDataSource)()),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.DataSource !== "undefined" && typeorm_2.DataSource) === "function" ? _c : Object])
], ApiUserGoalieStatsService);


/***/ }),
/* 158 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(159), exports);


/***/ }),
/* 159 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GoalieStatsMiddleware = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
let GoalieStatsMiddleware = class GoalieStatsMiddleware {
    use(req, res, next) {
        next();
    }
};
exports.GoalieStatsMiddleware = GoalieStatsMiddleware;
exports.GoalieStatsMiddleware = GoalieStatsMiddleware = tslib_1.__decorate([
    (0, common_1.Injectable)()
], GoalieStatsMiddleware);


/***/ }),
/* 160 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(161), exports);


/***/ }),
/* 161 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiLeagueModule = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(38);
const controllers_1 = __webpack_require__(162);
const league_middleware_1 = __webpack_require__(166);
const services_1 = __webpack_require__(164);
let ApiLeagueModule = class ApiLeagueModule {
    configure(consumer) {
        consumer.apply(league_middleware_1.LeagueMiddleware).forRoutes('*');
    }
};
exports.ApiLeagueModule = ApiLeagueModule;
exports.ApiLeagueModule = ApiLeagueModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entities_1.Current_Season_V2])],
        controllers: [controllers_1.LeagueController],
        providers: [services_1.LeagueService],
    })
], ApiLeagueModule);


/***/ }),
/* 162 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(163), exports);


/***/ }),
/* 163 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LeagueController = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
const services_1 = __webpack_require__(164);
let LeagueController = class LeagueController {
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
exports.LeagueController = LeagueController;
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
exports.LeagueService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(38);
const typeorm_2 = __webpack_require__(13);
let LeagueService = class LeagueService {
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
exports.LeagueService = LeagueService;
exports.LeagueService = LeagueService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Current_Season_V2)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], LeagueService);


/***/ }),
/* 166 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LeagueMiddleware = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
let LeagueMiddleware = class LeagueMiddleware {
    use(req, res, next) {
        next();
    }
};
exports.LeagueMiddleware = LeagueMiddleware;
exports.LeagueMiddleware = LeagueMiddleware = tslib_1.__decorate([
    (0, common_1.Injectable)()
], LeagueMiddleware);


/***/ }),
/* 167 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(168), exports);


/***/ }),
/* 168 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiNhlModule = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
const axios_1 = __webpack_require__(169);
const controllers_1 = __webpack_require__(170);
const middlewares_1 = __webpack_require__(175);
const services_1 = __webpack_require__(172);
const entities_1 = __webpack_require__(10);
const typeorm_1 = __webpack_require__(38);
let ApiNhlModule = class ApiNhlModule {
    configure(consumer) {
        consumer.apply(middlewares_1.NhlMiddleware).forRoutes('*');
    }
};
exports.ApiNhlModule = ApiNhlModule;
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
/* 169 */
/***/ ((module) => {

module.exports = require("@nestjs/axios");

/***/ }),
/* 170 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(171), exports);


/***/ }),
/* 171 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NhlController = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
const services_1 = __webpack_require__(172);
let NhlController = class NhlController {
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
exports.NhlController = NhlController;
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
/* 172 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(173), exports);


/***/ }),
/* 173 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiNhlService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const axios_1 = __webpack_require__(169);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(38);
const rxjs_1 = __webpack_require__(174);
const typeorm_2 = __webpack_require__(13);
let ApiNhlService = class ApiNhlService {
    constructor(httpService, playerStatsRepo, goalieStatsRepo, teamsRepo) {
        this.httpService = httpService;
        this.playerStatsRepo = playerStatsRepo;
        this.goalieStatsRepo = goalieStatsRepo;
        this.teamsRepo = teamsRepo;
        this.nhlCOM = 'https://api.nhle.com/stats/rest/en/season';
        this.nhlAPI = 'https://api-web.nhle.com/v2/player';
        this.nhlComSummary = 'https://api.nhle.com/stats/rest/en';
        this.nhlComLeaders = 'https://api.nhle.com/stats/rest/en/leaders';
        this.sportsNet = 'https://stats-api.sportsnet.ca/web_player_table';
    }
    getNhlLeaders(playerType, statType, season) {
        const t = Date.now();
        return this.httpService
            .get(`${this.nhlComLeaders}/${playerType}s/${statType}?cayenneExp=season=${season}%20and%20gameType=2`, { timeout: 8000 })
            .pipe((0, rxjs_1.map)((response) => response.data), (0, rxjs_1.switchMap)((response) => this.setChaTeamInfo(response.data, season, 'p')));
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
        return this.httpService
            .get(`${this.sportsNet}?league=nhl&season_year=${season}&season_type=${seasonType}`)
            .pipe((0, rxjs_1.map)((response) => response.data), (0, rxjs_1.switchMap)((response) => {
            return this.setChaTeamInfoForSportsnet(response.data, season);
        }));
    }
    getNhlRookieSummary(season, player, statsType, sort, start, pageSize) {
        const leaders = this.httpService
            .get(`${this.nhlComSummary}/${player}/summary?isAggregate=false&isGame=false&sort=%5B%7B%22property%22:%22${statsType}%22,%22direction%22:%22${sort}%22%7D,%7B%22property%22:%22gamesPlayed%22,%22direction%22:%22ASC%22%7D,%7B%22property%22:%22playerId%22,%22direction%22:%22ASC%22%7D%5D&start=${start}&limit=${pageSize}&factCayenneExp=gamesPlayed%3E=1&cayenneExp=gameTypeId=2%20and%20isRookie=%221%22%20and%20seasonId%3C=${season}%20and%20seasonId%3E=${season}`)
            .pipe((0, rxjs_1.map)((response) => response.data), (0, rxjs_1.switchMap)((response) => this.setChaTeamInfoRookies(response.data, season)));
        return leaders;
    }
    getNhlPlayerStatsByPlayerId(playerId, season) {
        return this.httpService
            .get(`${this.nhlAPI}/${playerId}/player-stats`)
            .pipe((0, rxjs_1.map)((response) => response.data?.seasonTotals?.find((s) => s.season === Number(season) &&
            s.gameTypeId === 2 &&
            s.leagueAbbrev.default === 'NHL')));
    }
    async setChaTeamInfoForSportsnet(statObject, season) {
        const newSeasonString = `${season}-${Number(season.slice(2, 4)) + 1}`;
        const { skaters, goalies } = statObject.player_stats;
        console.log(Object.keys(skaters[0]), skaters[0]);
        const [skaterTeams, goalieTeams] = await Promise.all([
            this.getChaTeamsByPlayerIds(skaters.map((s) => s.id), newSeasonString, 'p', 'sportsnet_id'),
            this.getChaTeamsByPlayerIds(goalies.map((g) => g.id), newSeasonString, 'g', 'sportsnet_id'),
        ]);
        return {
            player_stats: {
                skaters: skaters.map((s) => ({
                    ...s,
                    chaPlayerTeam: skaterTeams.get(String(s.id)) ?? [],
                })),
                goalies: goalies.map((g) => ({
                    ...g,
                    chaPlayerTeam: goalieTeams.get(String(g.id)) ?? [],
                })),
            },
        };
    }
    async setChaTeamInfoRookies(array, season) {
        const newSeasonString = `${season.slice(0, 4)}-${season.slice(6, 8)}`;
        const teamsByNhlId = await this.getChaTeamsByPlayerIds(array.map((item) => item.playerId), newSeasonString, 'p');
        return array.map((item) => ({
            ...item,
            chaPlayerTeam: teamsByNhlId.get(String(item.playerId)) ?? [],
        }));
    }
    async setChaTeamInfo(array, season, type) {
        const newSeasonString = `${season.slice(0, 4)}-${season.slice(6, 8)}`;
        const teamsByNhlId = await this.getChaTeamsByPlayerIds(array.map((item) => item.player.id), newSeasonString, type);
        return array.map((item) => ({
            ...item,
            chaPlayerTeam: teamsByNhlId.get(String(item.player.id)) ?? [],
        }));
    }
    async getChaTeamsByPlayerIds(ids, season, type, idField = 'nhl_id') {
        const repo = (type === 'p' ? this.playerStatsRepo : this.goalieStatsRepo);
        const stringIds = ids.map(String);
        // Query 1: every player's team name in one go
        const stats = await repo.find({
            select: {
                id: true,
                team_name: true,
                player_id: { id: true, [idField]: true },
            },
            relations: { player_id: true },
            where: {
                player_id: { [idField]: (0, typeorm_2.In)(stringIds) },
                playing_year: season,
                season_type: 'Regular',
            },
        });
        const teamNameById = new Map(stats.map((s) => [String(s.player_id[idField]), s.team_name]));
        // Query 2: every distinct team in one go ('FA' for players with no row)
        const shortnames = [...new Set([...teamNameById.values(), 'FA'])];
        const teams = await this.teamsRepo.find({
            select: {
                id: true,
                teamlogo: true,
                city: true,
                nickname: true,
                shortname: true,
            },
            where: { shortname: (0, typeorm_2.In)(shortnames) },
        });
        const teamsByShortname = new Map();
        for (const { shortname, ...team } of teams) {
            teamsByShortname.set(shortname, [
                ...(teamsByShortname.get(shortname) ?? []),
                team,
            ]);
        }
        // Same output as before: an array of team rows per player
        const result = new Map();
        for (const id of stringIds) {
            result.set(id, teamsByShortname.get(teamNameById.get(id) ?? 'FA') ?? []);
        }
        return result;
    }
};
exports.ApiNhlService = ApiNhlService;
exports.ApiNhlService = ApiNhlService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(1, (0, typeorm_1.InjectRepository)(entities_1.Players_Stats_V2)),
    tslib_1.__param(2, (0, typeorm_1.InjectRepository)(entities_1.Goalies_Stats_V2)),
    tslib_1.__param(3, (0, typeorm_1.InjectRepository)(entities_1.Teams_V2)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof axios_1.HttpService !== "undefined" && axios_1.HttpService) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object, typeof (_d = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _d : Object])
], ApiNhlService);


/***/ }),
/* 174 */
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),
/* 175 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(176), exports);


/***/ }),
/* 176 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NhlMiddleware = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
let NhlMiddleware = class NhlMiddleware {
    use(req, res, next) {
        console.log('Request Nhl...');
        next();
    }
};
exports.NhlMiddleware = NhlMiddleware;
exports.NhlMiddleware = NhlMiddleware = tslib_1.__decorate([
    (0, common_1.Injectable)()
], NhlMiddleware);


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
exports.ApiPlayerInfoModule = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(38);
const controllers_1 = __webpack_require__(179);
const middlewares_1 = __webpack_require__(183);
const services_1 = __webpack_require__(181);
let ApiPlayerInfoModule = class ApiPlayerInfoModule {
    configure(consumer) {
        consumer.apply(middlewares_1.PlayerInfoMiddleware).forRoutes('*');
    }
};
exports.ApiPlayerInfoModule = ApiPlayerInfoModule;
exports.ApiPlayerInfoModule = ApiPlayerInfoModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entities_1.Players_V2])],
        controllers: [controllers_1.PlayerInfoController],
        providers: [services_1.ApiPlayerInfoService],
    })
], ApiPlayerInfoModule);


/***/ }),
/* 179 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(180), exports);


/***/ }),
/* 180 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlayerInfoController = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(41);
const common_1 = __webpack_require__(1);
const services_1 = __webpack_require__(181);
let PlayerInfoController = class PlayerInfoController {
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
exports.PlayerInfoController = PlayerInfoController;
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
/* 181 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(182), exports);


/***/ }),
/* 182 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiPlayerInfoService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(38);
const typeorm_2 = __webpack_require__(13);
let ApiPlayerInfoService = class ApiPlayerInfoService {
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
exports.ApiPlayerInfoService = ApiPlayerInfoService;
exports.ApiPlayerInfoService = ApiPlayerInfoService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Players_V2)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ApiPlayerInfoService);


/***/ }),
/* 183 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(184), exports);


/***/ }),
/* 184 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlayerInfoMiddleware = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
let PlayerInfoMiddleware = class PlayerInfoMiddleware {
    use(req, res, next) {
        next();
    }
};
exports.PlayerInfoMiddleware = PlayerInfoMiddleware;
exports.PlayerInfoMiddleware = PlayerInfoMiddleware = tslib_1.__decorate([
    (0, common_1.Injectable)()
], PlayerInfoMiddleware);


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
exports.ApiPlayerRatingsModule = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(38);
const controllers_1 = __webpack_require__(187);
const middlewares_1 = __webpack_require__(191);
const services_1 = __webpack_require__(189);
let ApiPlayerRatingsModule = class ApiPlayerRatingsModule {
    configure(consumer) {
        consumer.apply(middlewares_1.PlayerRatingsMiddleware).forRoutes('*');
    }
};
exports.ApiPlayerRatingsModule = ApiPlayerRatingsModule;
exports.ApiPlayerRatingsModule = ApiPlayerRatingsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entities_1.Player_Ratings_V2, entities_1.Players_V2])],
        controllers: [controllers_1.PlayerRatingsController],
        providers: [services_1.ApiPlayerRatingsService],
    })
], ApiPlayerRatingsModule);


/***/ }),
/* 187 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(188), exports);


/***/ }),
/* 188 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlayerRatingsController = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
const services_1 = __webpack_require__(189);
let PlayerRatingsController = class PlayerRatingsController {
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
    deleteRating(param) {
        return this.playerRatingsService.deleteRating(parseInt(param.id));
    }
};
exports.PlayerRatingsController = PlayerRatingsController;
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
tslib_1.__decorate([
    (0, common_1.Delete)('/:id'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], PlayerRatingsController.prototype, "deleteRating", null);
exports.PlayerRatingsController = PlayerRatingsController = tslib_1.__decorate([
    (0, common_1.Controller)('player-ratings'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof services_1.ApiPlayerRatingsService !== "undefined" && services_1.ApiPlayerRatingsService) === "function" ? _a : Object])
], PlayerRatingsController);


/***/ }),
/* 189 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(190), exports);


/***/ }),
/* 190 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiPlayerRatingsService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(38);
const typeorm_2 = __webpack_require__(13);
let ApiPlayerRatingsService = class ApiPlayerRatingsService {
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
        if (ratings.length === 0) {
            return [];
        }
        const uniquePlayerIds = Array.from(new Set(ratings
            .map((r) => typeof r.player_id === 'object' && r.player_id !== null
            ? r.player_id.id
            : r.player_id)
            .filter(Boolean)));
        const players = uniquePlayerIds.length
            ? await this.playersRepo.find({
                select: {
                    id: true,
                    firstname: true,
                    lastname: true,
                },
                where: {
                    id: (0, typeorm_2.In)(uniquePlayerIds),
                },
            })
            : [];
        const playerMap = new Map(players.map((p) => [p.id, p]));
        return ratings.map((item) => {
            const pid = typeof item.player_id === 'object' && item.player_id !== null
                ? item.player_id.id
                : item.player_id;
            return {
                ...item,
                playerInfo: playerMap.get(pid) ?? null,
            };
        });
    }
    async updatePlayerById(id, attrs) {
        const player = await this.repo.findOneBy({ id });
        if (!player) {
            throw new common_1.NotFoundException(`Player rating with id ${id} not found`);
        }
        Object.assign(player, attrs);
        return this.repo.save(player);
    }
    async deleteRating(id) {
        const rating = await this.repo.findOneBy({ id });
        if (!rating) {
            throw new common_1.NotFoundException(`Player rating with id ${id} not found`);
        }
        return this.repo.remove(rating);
    }
};
exports.ApiPlayerRatingsService = ApiPlayerRatingsService;
exports.ApiPlayerRatingsService = ApiPlayerRatingsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Player_Ratings_V2)),
    tslib_1.__param(1, (0, typeorm_1.InjectRepository)(entities_1.Players_V2)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], ApiPlayerRatingsService);


/***/ }),
/* 191 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(192), exports);


/***/ }),
/* 192 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlayerRatingsMiddleware = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
let PlayerRatingsMiddleware = class PlayerRatingsMiddleware {
    use(req, res, next) {
        next();
    }
};
exports.PlayerRatingsMiddleware = PlayerRatingsMiddleware;
exports.PlayerRatingsMiddleware = PlayerRatingsMiddleware = tslib_1.__decorate([
    (0, common_1.Injectable)()
], PlayerRatingsMiddleware);


/***/ }),
/* 193 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(194), exports);


/***/ }),
/* 194 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiPlayerStatsModule = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const axios_1 = __webpack_require__(169);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(38);
const controllers_1 = __webpack_require__(195);
const middlewares_1 = __webpack_require__(202);
const services_1 = __webpack_require__(197);
let ApiPlayerStatsModule = class ApiPlayerStatsModule {
    configure(consumer) {
        consumer.apply(middlewares_1.PlayerStatsMiddleware).forRoutes('*');
    }
};
exports.ApiPlayerStatsModule = ApiPlayerStatsModule;
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
/* 195 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(196), exports);


/***/ }),
/* 196 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlayerStatsController = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
const services_1 = __webpack_require__(197);
let PlayerStatsController = class PlayerStatsController {
    constructor(playerLeaderStatsService, playerStatsService, playerAllTimeStatsService, userPlayersStatsService) {
        this.playerLeaderStatsService = playerLeaderStatsService;
        this.playerStatsService = playerStatsService;
        this.playerAllTimeStatsService = playerAllTimeStatsService;
        this.userPlayersStatsService = userPlayersStatsService;
    }
    async getAllPlayers(season) {
        const players = await this.playerStatsService.getAll(season);
        if (!players || players.length === 0) {
            throw new common_1.NotFoundException(`No players found for season ${season}`);
        }
        return players;
    }
    async updatePlayerById(season, id, body) {
        return this.playerStatsService.updatePlayerById(id, season, body);
    }
    async deletePlayer(season, id) {
        return this.playerStatsService.deletePlayer(id, season);
    }
    async getPlayerStatsLeaders(season, seasonType, minGamesStats) {
        const stats = await this.playerLeaderStatsService.getPlayerStatsLeaders(season, seasonType, minGamesStats);
        if (!stats) {
            throw new common_1.NotFoundException('Player Leader Stats not found');
        }
        return stats;
    }
    async getPlayerStatsAll(season, seasonType) {
        const stats = await this.playerStatsService.getAllStats(season, seasonType);
        if (!stats || stats.length === 0) {
            throw new common_1.NotFoundException('Player Stats not found');
        }
        return stats;
    }
    async getPlayerStatsByPlayerId(season, seasonType, playerId) {
        const stats = await this.playerStatsService.getPlayerStatsByPlayerId(season, seasonType, playerId);
        if (!stats || stats.length === 0) {
            throw new common_1.NotFoundException(`Player stats not found for player ID ${playerId}`);
        }
        return stats;
    }
    async getAllTimePlayerStatsBySeasonByType(seasonType) {
        const stats = await this.playerAllTimeStatsService.getAllTimePlayerStatsBySeasonByType(seasonType);
        if (!stats || stats.length === 0) {
            throw new common_1.NotFoundException('Player Stats not found');
        }
        return stats;
    }
    async getAllTimePlayerStatsSummedBySeasonByType(seasonType) {
        const stats = await this.playerAllTimeStatsService.getAllTimePlayerStatsSummedBySeasonByType(seasonType);
        if (!stats || stats.length === 0) {
            throw new common_1.NotFoundException('Player Stats not found');
        }
        return stats;
    }
    async getTeamPlayerStatsBySeasonType(userId, seasonType) {
        const record = await this.userPlayersStatsService.getUserPlayerStatsBySeasonType(userId, seasonType);
        if (!record || record.length === 0) {
            throw new common_1.NotFoundException('Team Players Stats not found');
        }
        // Cast via unknown to resolve strict entity-to-DTO literal mismatches (e.g., divisions_id.id: number vs literal)
        return record;
    }
    async getTeamPlayerStatsAllTimeBySeasonType(userId, seasonType) {
        const record = await this.userPlayersStatsService.getUserPlayerStatsAllTimeBySeasonType(userId, seasonType);
        if (!record || record.length === 0) {
            throw new common_1.NotFoundException('Team Players Stats not found');
        }
        return record;
    }
    async getTeamPlayersByTeamName(teamName, season) {
        const record = await this.userPlayersStatsService.getTeamPlayersByTeamName(teamName, season);
        if (!record || record.length === 0) {
            throw new common_1.NotFoundException(`Team players not found for team ${teamName}`);
        }
        return record;
    }
};
exports.PlayerStatsController = PlayerStatsController;
tslib_1.__decorate([
    (0, common_1.Get)('/:season'),
    tslib_1.__param(0, (0, common_1.Param)('season')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], PlayerStatsController.prototype, "getAllPlayers", null);
tslib_1.__decorate([
    (0, common_1.Put)('/:season/:id'),
    tslib_1.__param(0, (0, common_1.Param)('season')),
    tslib_1.__param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    tslib_1.__param(2, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Number, typeof (_f = typeof Partial !== "undefined" && Partial) === "function" ? _f : Object]),
    tslib_1.__metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], PlayerStatsController.prototype, "updatePlayerById", null);
tslib_1.__decorate([
    (0, common_1.Delete)('/:season/:id'),
    tslib_1.__param(0, (0, common_1.Param)('season')),
    tslib_1.__param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Number]),
    tslib_1.__metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], PlayerStatsController.prototype, "deletePlayer", null);
tslib_1.__decorate([
    (0, common_1.Get)('/leaders/:season/:seasonType/:minGamesStats'),
    tslib_1.__param(0, (0, common_1.Param)('season')),
    tslib_1.__param(1, (0, common_1.Param)('seasonType')),
    tslib_1.__param(2, (0, common_1.Param)('minGamesStats', common_1.ParseIntPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, Number]),
    tslib_1.__metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], PlayerStatsController.prototype, "getPlayerStatsLeaders", null);
tslib_1.__decorate([
    (0, common_1.Get)('/all/:season/:seasonType'),
    tslib_1.__param(0, (0, common_1.Param)('season')),
    tslib_1.__param(1, (0, common_1.Param)('seasonType')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", typeof (_k = typeof Promise !== "undefined" && Promise) === "function" ? _k : Object)
], PlayerStatsController.prototype, "getPlayerStatsAll", null);
tslib_1.__decorate([
    (0, common_1.Get)('/current/:season/:seasonType/:playerId'),
    tslib_1.__param(0, (0, common_1.Param)('season')),
    tslib_1.__param(1, (0, common_1.Param)('seasonType')),
    tslib_1.__param(2, (0, common_1.Param)('playerId', common_1.ParseIntPipe)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, Number]),
    tslib_1.__metadata("design:returntype", typeof (_l = typeof Promise !== "undefined" && Promise) === "function" ? _l : Object)
], PlayerStatsController.prototype, "getPlayerStatsByPlayerId", null);
tslib_1.__decorate([
    (0, common_1.Get)('/history/season/:seasonType'),
    tslib_1.__param(0, (0, common_1.Param)('seasonType')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_m = typeof Promise !== "undefined" && Promise) === "function" ? _m : Object)
], PlayerStatsController.prototype, "getAllTimePlayerStatsBySeasonByType", null);
tslib_1.__decorate([
    (0, common_1.Get)('/history/all-time/:seasonType'),
    tslib_1.__param(0, (0, common_1.Param)('seasonType')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_o = typeof Promise !== "undefined" && Promise) === "function" ? _o : Object)
], PlayerStatsController.prototype, "getAllTimePlayerStatsSummedBySeasonByType", null);
tslib_1.__decorate([
    (0, common_1.Get)('/user/:userId/history/:seasonType'),
    tslib_1.__param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    tslib_1.__param(1, (0, common_1.Param)('seasonType')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, String]),
    tslib_1.__metadata("design:returntype", typeof (_p = typeof Promise !== "undefined" && Promise) === "function" ? _p : Object)
], PlayerStatsController.prototype, "getTeamPlayerStatsBySeasonType", null);
tslib_1.__decorate([
    (0, common_1.Get)('/user/:userId/history/all/:seasonType'),
    tslib_1.__param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    tslib_1.__param(1, (0, common_1.Param)('seasonType')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, String]),
    tslib_1.__metadata("design:returntype", typeof (_q = typeof Promise !== "undefined" && Promise) === "function" ? _q : Object)
], PlayerStatsController.prototype, "getTeamPlayerStatsAllTimeBySeasonType", null);
tslib_1.__decorate([
    (0, common_1.Get)('/team/:teamName/:season'),
    tslib_1.__param(0, (0, common_1.Param)('teamName')),
    tslib_1.__param(1, (0, common_1.Param)('season')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", typeof (_r = typeof Promise !== "undefined" && Promise) === "function" ? _r : Object)
], PlayerStatsController.prototype, "getTeamPlayersByTeamName", null);
exports.PlayerStatsController = PlayerStatsController = tslib_1.__decorate([
    (0, common_1.Controller)('player-stats'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof services_1.ApiPlayerLeadersStatsService !== "undefined" && services_1.ApiPlayerLeadersStatsService) === "function" ? _a : Object, typeof (_b = typeof services_1.ApiPlayerStatsService !== "undefined" && services_1.ApiPlayerStatsService) === "function" ? _b : Object, typeof (_c = typeof services_1.ApiPlayerAllTimeStatsService !== "undefined" && services_1.ApiPlayerAllTimeStatsService) === "function" ? _c : Object, typeof (_d = typeof services_1.ApiUserPlayerStatsService !== "undefined" && services_1.ApiUserPlayerStatsService) === "function" ? _d : Object])
], PlayerStatsController);


/***/ }),
/* 197 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(198), exports);
tslib_1.__exportStar(__webpack_require__(199), exports);
tslib_1.__exportStar(__webpack_require__(200), exports);
tslib_1.__exportStar(__webpack_require__(201), exports);


/***/ }),
/* 198 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var ApiPlayerLeadersStatsService_1;
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiPlayerLeadersStatsService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(38);
const typeorm_2 = __webpack_require__(13);
const axios_1 = __webpack_require__(169);
const COMMON_PLAYER_SELECT = {
    id: true,
    team_name: true,
    player_id: {
        id: true,
        firstname: true,
        lastname: true,
        nhl_id: true,
        isgoalie: true,
    },
};
let ApiPlayerLeadersStatsService = ApiPlayerLeadersStatsService_1 = class ApiPlayerLeadersStatsService {
    constructor(repo, teamInfoRepo, httpService) {
        this.repo = repo;
        this.teamInfoRepo = teamInfoRepo;
        this.httpService = httpService;
        this.logger = new common_1.Logger(ApiPlayerLeadersStatsService_1.name);
        this.nhlAPI = 'https://api-web.nhle.com/v2/player';
    }
    async getPlayerStatsLeaders(season, seasonType, minGamesStats) {
        const [hits, points, assists, bestPlusMinus, worstPlusMinus, blockedShots, currStreak, defense, defenseGoals, goals, longStreak, minutes, penalties, ppGoals, gwGoals, rookies, rookieGoals, shGoals, shots, faceoffs, shooting, passing, corners,] = await Promise.all([
            this.getTopLeaders(season, seasonType, 'hits', 'DESC'),
            this.getTopLeaders(season, seasonType, 'points', 'DESC'),
            this.getTopLeaders(season, seasonType, 'assists', 'DESC'),
            this.getTopLeaders(season, seasonType, 'plus_minus', 'DESC'),
            this.getTopLeaders(season, seasonType, 'plus_minus', 'ASC'),
            this.getTopLeaders(season, seasonType, 'blocked_shots', 'DESC'),
            this.getTopLeaders(season, seasonType, 'current_points_streak', 'DESC'),
            this.getTopLeaders(season, seasonType, 'points', 'DESC', {
                player_id: { isdefense: true },
            }),
            this.getTopLeaders(season, seasonType, 'goals', 'DESC', {
                player_id: { isdefense: true },
            }),
            this.getTopLeaders(season, seasonType, 'goals', 'DESC'),
            this.getTopLeaders(season, seasonType, 'longest_points_streak', 'DESC'),
            this.getTopLeaders(season, seasonType, 'minutes_played', 'DESC'),
            this.getTopLeaders(season, seasonType, 'penalty_minutes', 'DESC'),
            this.getTopLeaders(season, seasonType, 'pp_goals', 'DESC'),
            this.getTopLeaders(season, seasonType, 'gw_goals', 'DESC'),
            this.getTopLeaders(season, seasonType, 'points', 'DESC', {
                player_status: 'Rookie',
            }),
            this.getTopLeaders(season, seasonType, 'goals', 'DESC', {
                player_status: 'Rookie',
            }),
            this.getTopLeaders(season, seasonType, 'sh_goals', 'DESC'),
            this.getTopLeaders(season, seasonType, 'shots', 'DESC'),
            this.getTopLeaders(season, seasonType, 'fo_pct', 'DESC', {
                fo_won: (0, typeorm_2.MoreThanOrEqual)(minGamesStats),
            }),
            this.getShootingLeaders(season, seasonType, minGamesStats),
            this.getTopLeaders(season, seasonType, 'pass_pct', 'DESC', {
                pass_attempts: (0, typeorm_2.MoreThanOrEqual)(minGamesStats),
            }),
            this.getTopLeaders(season, seasonType, 'corner_pct', 'DESC', {
                corner_total: (0, typeorm_2.MoreThanOrEqual)(minGamesStats),
            }),
        ]);
        const allResults = [
            ...hits,
            ...points,
            ...assists,
            ...bestPlusMinus,
            ...worstPlusMinus,
            ...blockedShots,
            ...currStreak,
            ...defense,
            ...defenseGoals,
            ...goals,
            ...longStreak,
            ...minutes,
            ...penalties,
            ...ppGoals,
            ...gwGoals,
            ...rookies,
            ...rookieGoals,
            ...shGoals,
            ...shots,
            ...faceoffs,
            ...shooting,
            ...passing,
            ...corners,
        ];
        const uniqueTeamNames = Array.from(new Set(allResults.map((r) => r.team_name).filter(Boolean)));
        const teams = uniqueTeamNames.length
            ? await this.teamInfoRepo.find({
                select: {
                    id: true,
                    city: true,
                    teamlogo: true,
                    nickname: true,
                    shortname: true,
                },
                where: { shortname: (0, typeorm_2.In)(uniqueTeamNames) },
            })
            : [];
        const teamMap = new Map(teams.map((team) => [team.shortname, team]));
        const attachTeamInfo = (items) => items.map((item) => ({
            ...item,
            teamInfo: teamMap.get(item.team_name) ?? null,
        }));
        return {
            hits: attachTeamInfo(hits),
            points: attachTeamInfo(points),
            assists: attachTeamInfo(assists),
            bestPlusMinus: attachTeamInfo(bestPlusMinus),
            worstPlusMinus: attachTeamInfo(worstPlusMinus),
            blockedShots: attachTeamInfo(blockedShots),
            currStreak: attachTeamInfo(currStreak),
            defense: attachTeamInfo(defense),
            defenseGoals: attachTeamInfo(defenseGoals),
            goals: attachTeamInfo(goals),
            longStreak: attachTeamInfo(longStreak),
            minutes: attachTeamInfo(minutes),
            penalties: attachTeamInfo(penalties),
            ppGoals: attachTeamInfo(ppGoals),
            gwGoals: attachTeamInfo(gwGoals),
            rookies: attachTeamInfo(rookies),
            rookieGoals: attachTeamInfo(rookieGoals),
            shGoals: attachTeamInfo(shGoals),
            shots: attachTeamInfo(shots),
            faceoffs: attachTeamInfo(faceoffs),
            shooting: attachTeamInfo(shooting),
            passing: attachTeamInfo(passing),
            corners: attachTeamInfo(corners),
            pointsAboveExpected: [],
            pointsBelowExpected: [],
        };
    }
    async getTopLeaders(season, seasonType, statField, orderDirection, extraWhere = {}, limit = 10) {
        return this.repo.find({
            select: {
                ...COMMON_PLAYER_SELECT,
                [statField]: true,
            },
            relations: {
                player_id: true,
            },
            where: {
                playing_year: season,
                season_type: seasonType,
                ...extraWhere,
            },
            order: {
                [statField]: orderDirection,
            },
            take: limit,
        });
    }
    async getShootingLeaders(season, seasonType, minShots) {
        return this.repo
            .createQueryBuilder('stats')
            .leftJoinAndSelect('stats.player_id', 'player')
            .orderBy('CAST(stats.shooting_pct AS FLOAT)', 'DESC')
            .where('stats.playing_year = :season', { season })
            .andWhere('stats.season_type = :seasonType', { seasonType })
            .andWhere('stats.shots >= :minShots', { minShots })
            .take(10)
            .getMany();
    }
};
exports.ApiPlayerLeadersStatsService = ApiPlayerLeadersStatsService;
exports.ApiPlayerLeadersStatsService = ApiPlayerLeadersStatsService = ApiPlayerLeadersStatsService_1 = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Players_Stats_V2)),
    tslib_1.__param(1, (0, typeorm_1.InjectRepository)(entities_1.Teams_V2)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof axios_1.HttpService !== "undefined" && axios_1.HttpService) === "function" ? _c : Object])
], ApiPlayerLeadersStatsService);


/***/ }),
/* 199 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiPlayerStatsService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(38);
const typeorm_2 = __webpack_require__(13);
const COMMON_PLAYER_STATS_SELECT = {
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
};
let ApiPlayerStatsService = class ApiPlayerStatsService {
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
        const playersWithTeamInfo = await this.attachTeamInfo(players);
        return playersWithTeamInfo;
    }
    async updatePlayerById(id, season, attrs) {
        const player = await this.repo.findOneBy({
            player_id: {
                id,
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
        const player = await this.repo.findOneBy({
            id,
            playing_year: season,
        });
        if (!player) {
            throw new common_1.NotFoundException('player not found');
        }
        return this.repo.remove(player);
    }
    async getAllStats(season, seasonType) {
        return this.fetchAndFormatPlayerStats({
            playing_year: season,
            season_type: seasonType,
        });
    }
    async getPlayerStatsByPlayerId(season, seasonType, playerId) {
        return this.fetchAndFormatPlayerStats({
            playing_year: season,
            season_type: seasonType,
            player_id: {
                id: playerId,
            },
        });
    }
    async fetchAndFormatPlayerStats(whereClause) {
        const allStats = await this.repo.find({
            select: COMMON_PLAYER_STATS_SELECT,
            relations: {
                player_id: true,
            },
            where: whereClause,
            order: {
                points: 'DESC',
            },
        });
        if (allStats.length === 0) {
            return [];
        }
        const allStatsWithTeamInfo = await this.attachTeamInfo(allStats);
        return allStatsWithTeamInfo.map((stat) => ({
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
        }));
    }
    async attachTeamInfo(items) {
        const uniqueTeamNames = Array.from(new Set(items.map((item) => item.team_name).filter(Boolean)));
        const teams = uniqueTeamNames.length
            ? await this.teamInfoRepo.find({
                select: {
                    id: true,
                    city: true,
                    teamlogo: true,
                    nickname: true,
                    shortname: true,
                },
                where: {
                    shortname: (0, typeorm_2.In)(uniqueTeamNames),
                },
            })
            : [];
        const teamMap = new Map(teams.map((team) => [team.shortname, team]));
        return items.map((item) => ({
            ...item,
            teamInfo: teamMap.get(item.team_name) ?? null,
        }));
    }
};
exports.ApiPlayerStatsService = ApiPlayerStatsService;
exports.ApiPlayerStatsService = ApiPlayerStatsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Players_Stats_V2)),
    tslib_1.__param(1, (0, typeorm_1.InjectRepository)(entities_1.Teams_V2)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], ApiPlayerStatsService);


/***/ }),
/* 200 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiPlayerAllTimeStatsService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(38);
const typeorm_2 = __webpack_require__(13);
const CACHE_TTL_MS = 10 * 60 * 1000;
let ApiPlayerAllTimeStatsService = class ApiPlayerAllTimeStatsService {
    constructor(repo, teamInfoRepo, dataSource) {
        this.repo = repo;
        this.teamInfoRepo = teamInfoRepo;
        this.dataSource = dataSource;
        this.cache = new Map();
    }
    getAllTimePlayerStatsBySeasonByType(seasonType) {
        return this.cached(`bySeason:${seasonType}`, async () => {
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
            return this.convertStats(allStatsWithTeamInfo, false);
        });
    }
    getAllTimePlayerStatsSummedBySeasonByType(seasonType) {
        return this.cached(`summed:${seasonType}`, async () => {
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
        from players_stats_v2 as a
        join players_v2 as b on b.id = a.player_id
        where a.points > 0
          and a.season_type = $1
        group by b.firstname, b.lastname, b.isgoalie, b.isdefense, b.isforward, b.nhl_id, a.player_id, a.season_type, a.position
        order by points DESC`, [seasonType]);
            return this.convertStats(result, true);
        });
    }
    // Results only change when stats are loaded, so share them between requests
    cached(key, load) {
        const hit = this.cache.get(key);
        if (hit && hit.expires > Date.now()) {
            return hit.data;
        }
        const data = load().catch((err) => {
            this.cache.delete(key); // don't cache failures
            throw err;
        });
        this.cache.set(key, { expires: Date.now() + CACHE_TTL_MS, data });
        return data;
    }
    // One query for all teams instead of one per row
    async setTeamInfo(array) {
        const teamNames = [
            ...new Set(array.map((item) => item.team_name).filter(Boolean)),
        ];
        const teams = teamNames.length
            ? await this.teamInfoRepo.find({
                select: {
                    id: true,
                    city: true,
                    teamlogo: true,
                    nickname: true,
                    shortname: true,
                },
                where: { shortname: (0, typeorm_2.In)(teamNames) },
            })
            : [];
        const teamByName = new Map();
        for (const { shortname, ...team } of teams) {
            if (!teamByName.has(shortname))
                teamByName.set(shortname, team);
        }
        return array.map((item) => ({
            ...item,
            teamInfo: teamByName.get(item.team_name) ?? null,
        }));
    }
    convertStats(array, raw) {
        return array.map((stat) => ({
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
        }));
    }
};
exports.ApiPlayerAllTimeStatsService = ApiPlayerAllTimeStatsService;
exports.ApiPlayerAllTimeStatsService = ApiPlayerAllTimeStatsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Players_Stats_V2)),
    tslib_1.__param(1, (0, typeorm_1.InjectRepository)(entities_1.Teams_V2)),
    tslib_1.__param(2, (0, typeorm_1.InjectDataSource)()),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.DataSource !== "undefined" && typeorm_2.DataSource) === "function" ? _c : Object])
], ApiPlayerAllTimeStatsService);


/***/ }),
/* 201 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiUserPlayerStatsService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(38);
const typeorm_2 = __webpack_require__(13);
const COMMON_PLAYER_STATS_SELECT = {
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
    season_type: true,
    player_id: {
        id: true,
        firstname: true,
        lastname: true,
        nhl_id: true,
        isdefense: true,
        isforward: true,
    },
};
let ApiUserPlayerStatsService = class ApiUserPlayerStatsService {
    constructor(repo, teamInfoRepo, dataSource) {
        this.repo = repo;
        this.teamInfoRepo = teamInfoRepo;
        this.dataSource = dataSource;
    }
    async getUserPlayerStatsBySeasonType(userId, seasonType) {
        const userTeams = await this.teamInfoRepo.findBy({ users_id: userId });
        if (userTeams.length === 0)
            return [];
        const teamShortNames = userTeams.map((t) => t.shortname).filter(Boolean);
        if (teamShortNames.length === 0)
            return [];
        const allStats = await this.repo.find({
            select: COMMON_PLAYER_STATS_SELECT,
            relations: {
                player_id: true,
            },
            where: {
                team_name: (0, typeorm_2.In)(teamShortNames),
                season_type: seasonType,
            },
            order: {
                points: 'DESC',
            },
        });
        const statsByTeam = new Map();
        for (const stat of allStats) {
            const stats = statsByTeam.get(stat.team_name);
            if (stats) {
                stats.push(stat);
            }
            else {
                statsByTeam.set(stat.team_name, [stat]);
            }
        }
        return userTeams.map((team) => {
            const rawTeamStats = statsByTeam.get(team.shortname) ?? [];
            return {
                ...team,
                playerStats: this.convertRegularStats(rawTeamStats, team),
            };
        });
    }
    async getUserPlayerStatsAllTimeBySeasonType(userId, seasonType) {
        const userTeams = await this.teamInfoRepo.findBy({ users_id: userId });
        if (userTeams.length === 0)
            return [];
        const teamShortNames = userTeams.map((t) => t.shortname).filter(Boolean);
        if (teamShortNames.length === 0)
            return [];
        const rawStats = await this.dataSource.query(`SELECT
        b.firstname AS firstname,
        b.lastname AS lastname,
        b.isdefense AS isdefense,
        b.isforward AS isforward,
        b.isgoalie AS isgoalie,
        b.nhl_id AS nhl_id,
        a.player_id AS player_id,
        a.season_type AS season_type,
        a.team_name AS team_name,
        SUM(a.games_played) AS games_played,
        SUM(a.goals) AS goals,
        SUM(a.assists) AS assists,
        SUM(a.points) AS points,
        SUM(a.plus_minus) AS plus_minus,
        SUM(a.penalty_minutes) AS penalty_minutes,
        SUM(a.sh_goals) AS sh_goals,
        SUM(a.pp_goals) AS pp_goals,
        SUM(a.gw_goals) AS gw_goals,
        SUM(a.gt_goals) AS gt_goals,
        SUM(a.shots) AS shots,
        SUM(a.minutes_played) AS minutes_played,
        SUM(a.hits) AS hits,
        SUM(a.blocked_shots) AS blocked_shots
      FROM players_stats_v2 a
      INNER JOIN players_v2 b ON b.id = a.player_id
      WHERE a.points > 0
        AND a.season_type = $1
        AND a.team_name = ANY($2)
      GROUP BY b.firstname, b.lastname, b.isgoalie, b.isdefense, b.isforward, b.nhl_id, a.player_id, a.season_type, a.team_name
      ORDER BY points DESC`, [seasonType, teamShortNames]);
        const statsByTeam = new Map();
        for (const stat of rawStats) {
            const stats = statsByTeam.get(stat.team_name);
            if (stats) {
                stats.push(stat);
            }
            else {
                statsByTeam.set(stat.team_name, [stat]);
            }
        }
        return userTeams.map((team) => {
            const rawTeamStats = statsByTeam.get(team.shortname) ?? [];
            return {
                ...team,
                playerStats: this.convertAllTimeStats(rawTeamStats),
            };
        });
    }
    async getTeamPlayersByTeamName(teamName, season) {
        return this.repo.find({
            select: {
                player_id: {
                    id: true,
                    firstname: true,
                    lastname: true,
                },
            },
            relations: {
                player_id: true,
            },
            where: {
                team_name: teamName,
                playing_year: season,
                season_type: 'Regular',
            },
        });
    }
    convertRegularStats(stats, team) {
        const teamMetadata = {
            id: team.id,
            city: team.city,
            nickname: team.nickname,
            teamlogo: team.teamlogo,
        };
        return stats.map((stat) => {
            const gamesPlayed = Number(stat.games_played) || 0;
            const minutesPlayed = Number(stat.minutes_played) || 0;
            const points = Number(stat.points) || 0;
            const hits = Number(stat.hits) || 0;
            return {
                playing_year: stat.playing_year,
                season_type: stat.season_type,
                team_name: stat.team_name,
                teamInfo: teamMetadata,
                player_id: stat.player_id,
                games_played: gamesPlayed,
                goals: Number(stat.goals),
                assists: Number(stat.assists),
                points,
                plus_minus: Number(stat.plus_minus),
                penalty_minutes: Number(stat.penalty_minutes),
                pp_goals: Number(stat.pp_goals),
                sh_goals: Number(stat.sh_goals),
                gw_goals: Number(stat.gw_goals),
                gt_goals: Number(stat.gt_goals),
                shots: Number(stat.shots),
                shooting_pct: Number(stat.shooting_pct),
                minutes_per_game: Number(stat.minutes_per_game),
                fo_pct: Number(stat.fo_pct),
                pass_pct: Number(stat.pass_pct),
                corner_pct: Number(stat.corner_pct),
                minutes_played: minutesPlayed,
                hits,
                blocked_shots: Number(stat.blocked_shots),
                pointsPerSixty: minutesPlayed > 0
                    ? Number(((points / minutesPlayed) * 60).toFixed(2))
                    : 0,
                hit_per_game: gamesPlayed > 0 ? Number((hits / gamesPlayed).toFixed(1)) : 0,
            };
        });
    }
    convertAllTimeStats(stats) {
        return stats.map((stat) => {
            const gamesPlayed = Number(stat.games_played) || 0;
            const minutesPlayed = Number(stat.minutes_played) || 0;
            const shots = Number(stat.shots) || 0;
            const goals = Number(stat.goals) || 0;
            const points = Number(stat.points) || 0;
            const hits = Number(stat.hits) || 0;
            return {
                playing_year: null,
                season_type: stat.season_type,
                team_name: stat.team_name,
                teamInfo: null,
                player_id: {
                    id: stat.player_id,
                    firstname: stat.firstname,
                    lastname: stat.lastname,
                    nhl_id: stat.nhl_id,
                    isactive: null,
                    isgoalie: null,
                    isdefense: stat.isdefense,
                    isforward: stat.isforward,
                    is_protected: null,
                },
                games_played: gamesPlayed,
                goals,
                assists: Number(stat.assists),
                points,
                plus_minus: Number(stat.plus_minus),
                penalty_minutes: Number(stat.penalty_minutes),
                pp_goals: Number(stat.pp_goals),
                sh_goals: Number(stat.sh_goals),
                gw_goals: Number(stat.gw_goals),
                gt_goals: Number(stat.gt_goals),
                shots,
                shooting_pct: shots > 0 ? Number(((goals / shots) * 100).toFixed(1)) : 0,
                minutes_per_game: gamesPlayed > 0
                    ? Number((minutesPlayed / gamesPlayed).toFixed(1))
                    : 0,
                fo_pct: null,
                pass_pct: null,
                corner_pct: null,
                minutes_played: minutesPlayed,
                hits,
                blocked_shots: Number(stat.blocked_shots),
                pointsPerSixty: minutesPlayed > 0
                    ? Number(((points / minutesPlayed) * 60).toFixed(2))
                    : 0,
                hit_per_game: gamesPlayed > 0 ? Number((hits / gamesPlayed).toFixed(1)) : 0,
            };
        });
    }
};
exports.ApiUserPlayerStatsService = ApiUserPlayerStatsService;
exports.ApiUserPlayerStatsService = ApiUserPlayerStatsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Players_Stats_V2)),
    tslib_1.__param(1, (0, typeorm_1.InjectRepository)(entities_1.Teams_V2)),
    tslib_1.__param(2, (0, typeorm_1.InjectDataSource)()),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.DataSource !== "undefined" && typeorm_2.DataSource) === "function" ? _c : Object])
], ApiUserPlayerStatsService);


/***/ }),
/* 202 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(203), exports);


/***/ }),
/* 203 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlayerStatsMiddleware = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
let PlayerStatsMiddleware = class PlayerStatsMiddleware {
    use(req, res, next) {
        next();
    }
};
exports.PlayerStatsMiddleware = PlayerStatsMiddleware;
exports.PlayerStatsMiddleware = PlayerStatsMiddleware = tslib_1.__decorate([
    (0, common_1.Injectable)()
], PlayerStatsMiddleware);


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
exports.ApiSalariesModule = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const axios_1 = __webpack_require__(169);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(38);
const controllers_1 = __webpack_require__(206);
const middlewares_1 = __webpack_require__(210);
const services_1 = __webpack_require__(208);
let ApiSalariesModule = class ApiSalariesModule {
    configure(consumer) {
        consumer.apply(middlewares_1.SalariesMiddleware).forRoutes('*');
    }
};
exports.ApiSalariesModule = ApiSalariesModule;
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
/* 206 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(207), exports);


/***/ }),
/* 207 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SalariesController = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(41);
const common_1 = __webpack_require__(1);
const services_1 = __webpack_require__(208);
let SalariesController = class SalariesController {
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
exports.SalariesController = SalariesController;
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
/* 208 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(209), exports);


/***/ }),
/* 209 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiSalariesService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(38);
const typeorm_2 = __webpack_require__(13);
const axios_1 = __webpack_require__(169);
const rxjs_1 = __webpack_require__(174);
const NHL_CONCURRENCY = 10;
const NHL_TIMEOUT_MS = 8000;
const NHL_CACHE_TTL_MS = 10 * 60 * 1000;
/** Runs `fn` over `items` with at most `limit` in flight; keeps input order. */
async function mapWithConcurrency(items, limit, fn) {
    const results = new Array(items.length);
    let next = 0;
    const worker = async () => {
        while (next < items.length) {
            const i = next++;
            results[i] = await fn(items[i]);
        }
    };
    await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
    return results;
}
let ApiSalariesService = class ApiSalariesService {
    constructor(repo, teamsRepo, playersRepo, playersStatsRepo, playerRatingsRepo, goaliesStatsRepo, goalieRatingsRepo, httpService) {
        this.repo = repo;
        this.teamsRepo = teamsRepo;
        this.playersRepo = playersRepo;
        this.playersStatsRepo = playersStatsRepo;
        this.playerRatingsRepo = playerRatingsRepo;
        this.goaliesStatsRepo = goaliesStatsRepo;
        this.goalieRatingsRepo = goalieRatingsRepo;
        this.httpService = httpService;
        this.nhlAPI = 'https://api-web.nhle.com/v2/player';
        this.nhlMugshotAPI = 'https://assets.nhle.com/mugs/nhl/latest';
        this.nhlSeasonTotalsCache = new Map();
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
        return this.setTeamInfo(allSalariesAndRatingsForPlayersInSeason);
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
        return this.setTeamInfo(allSalariesAndRatingsForGoaliesInSeason);
    }
    async getUserTeamPlayerSalaries(teamName, season, ratingsSeason) {
        const allPlayersInSeason = await this.playersStatsRepo.find({
            select: {
                id: true,
                team_name: true,
                player_id: {
                    id: true,
                    nhl_id: true, // needed by setNHLStats
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
        return this.setTeamInfo(allSalariesRatingsNHLStatsForPlayersInSeason);
    }
    async getUserTeamGoaliesSalaries(teamName, season, ratingsSeason) {
        const allGoaliesInSeason = await this.goaliesStatsRepo.find({
            select: {
                id: true,
                team_name: true,
                player_id: {
                    id: true,
                    nhl_id: true, // needed by setNHLStats
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
        return this.setTeamInfo(allSalariesRatingsNHLStatsForPlayersInSeason);
    }
    // One query for all salaries instead of one per player
    async setPlayersSalaries(array) {
        if (!array.length)
            return array;
        // TODO UPDATE EVERY SEASON
        const salaries = await this.repo.find({
            select: {
                id: true,
                player_id: true,
                season_2025: true,
                season_2026: true,
                season_2027: true,
                season_2028: true,
            },
            where: {
                player_id: (0, typeorm_2.In)(array.map((item) => String(item.player_id.id))),
            },
        });
        const salaryByPlayerId = new Map();
        for (const salary of salaries) {
            const key = String(salary.player_id);
            if (!salaryByPlayerId.has(key))
                salaryByPlayerId.set(key, salary);
        }
        return array.map((item) => ({
            ...item,
            salaries: salaryByPlayerId.get(String(item.player_id.id)) ?? null,
        }));
    }
    setPlayerRating(array, season) {
        return this.setRatings(array, this.playerRatingsRepo, season, {
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
        });
    }
    setGoalieRating(array, season) {
        return this.setRatings(array, this.goalieRatingsRepo, season, {
            id: true,
            passing: true,
            speed: true,
            skating: true,
            wins: true,
            goals_against_avg: true,
            save_pct: true,
            games_played: true,
        });
    }
    // One query for all ratings instead of one per player
    async setRatings(array, ratingsRepo, season, select) {
        if (!array.length)
            return array;
        const ratings = await ratingsRepo.find({
            // player_id is only selected so rows can be matched back to players
            select: { ...select, player_id: true },
            where: {
                player_id: (0, typeorm_2.In)(array.map((item) => item.player_id.id)),
                playing_year: season,
            },
        });
        const ratingByPlayerId = new Map();
        for (const { player_id, ...rating } of ratings) {
            const key = String(player_id?.id ?? player_id);
            if (!ratingByPlayerId.has(key))
                ratingByPlayerId.set(key, rating);
        }
        return array.map((item) => ({
            ...item,
            ratings: ratingByPlayerId.get(String(item.player_id.id)) ?? null,
        }));
    }
    // One query for all teams instead of one per row
    async setTeamInfo(array) {
        const teamNames = [
            ...new Set(array.map((item) => item.team_name).filter(Boolean)),
        ];
        const teams = teamNames.length
            ? await this.teamsRepo.find({
                select: {
                    id: true,
                    city: true,
                    teamlogo: true,
                    nickname: true,
                    shortname: true,
                },
                where: { shortname: (0, typeorm_2.In)(teamNames) },
            })
            : [];
        const teamByName = new Map();
        for (const { shortname, ...team } of teams) {
            if (!teamByName.has(shortname))
                teamByName.set(shortname, team);
        }
        return array.map((item) => ({
            ...item,
            teamInfo: item.team_name ? teamByName.get(item.team_name) ?? null : {},
        }));
    }
    // One NHL request per player (cached), max NHL_CONCURRENCY at a time
    async setNHLStats(array) {
        return mapWithConcurrency(array, NHL_CONCURRENCY, async (item) => {
            const nhlId = item.player_id.nhl_id;
            const seasonTotals = await this.getNhlSeasonTotals(nhlId);
            return {
                ...item,
                nhlHeadShot: await this.getNhlPlayerHeadShotByPlayerId(nhlId),
                nhlStats: this.findNhlSeason(seasonTotals, '20252026'), // TODO UPDATE EVERY SEASON
                nextNhlStats: this.findNhlSeason(seasonTotals, '20262027'), // TODO UPDATE EVERY SEASON
            };
        });
    }
    async getNhlPlayerHeadShotByPlayerId(playerId) {
        return `${this.nhlMugshotAPI}/${playerId}.png`;
    }
    async getNhlPlayerStatsByPlayerId(playerId, season) {
        const seasonTotals = await this.getNhlSeasonTotals(playerId);
        return this.findNhlSeason(seasonTotals, season);
    }
    findNhlSeason(seasonTotals, season) {
        return seasonTotals.find((s) => s.season === Number(season) &&
            s.gameTypeId === 2 &&
            s.leagueAbbrev.default === 'NHL');
    }
    // Cached per player so repeat requests and both seasons share one call
    getNhlSeasonTotals(playerId) {
        const key = String(playerId);
        const cached = this.nhlSeasonTotalsCache.get(key);
        if (cached && cached.expires > Date.now()) {
            return cached.data;
        }
        const data = (0, rxjs_1.firstValueFrom)(this.httpService.get(`${this.nhlAPI}/${playerId}/player-stats`, { timeout: NHL_TIMEOUT_MS }))
            .then((response) => response.data?.seasonTotals ?? [])
            .catch((err) => {
            console.error(`NHL stats failed for player ${playerId}:`, err.message);
            this.nhlSeasonTotalsCache.delete(key); // don't cache failures
            return [];
        });
        this.nhlSeasonTotalsCache.set(key, {
            expires: Date.now() + NHL_CACHE_TTL_MS,
            data,
        });
        return data;
    }
    async getAll() {
        const salaries = await this.repo.find();
        return await this.setPlayerInfo(salaries);
    }
    // One query for all players instead of one per salary row
    async setPlayerInfo(array) {
        const playerIds = [
            ...new Set(array.map((item) => item.player_id).filter(Boolean)),
        ];
        const players = playerIds.length
            ? await this.playersRepo.find({
                select: {
                    id: true,
                    firstname: true,
                    lastname: true,
                },
                where: { id: (0, typeorm_2.In)(playerIds.map(Number)) },
            })
            : [];
        const playerById = new Map(players.map((p) => [String(p.id), p]));
        return array.map((item) => ({
            ...item,
            playerInfo: item.player_id
                ? playerById.get(String(item.player_id)) ?? null
                : {},
        }));
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
exports.ApiSalariesService = ApiSalariesService;
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
/* 210 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(211), exports);


/***/ }),
/* 211 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SalariesMiddleware = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
let SalariesMiddleware = class SalariesMiddleware {
    use(req, res, next) {
        next();
    }
};
exports.SalariesMiddleware = SalariesMiddleware;
exports.SalariesMiddleware = SalariesMiddleware = tslib_1.__decorate([
    (0, common_1.Injectable)()
], SalariesMiddleware);


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
exports.ApiScheduleModule = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(38);
const controllers_1 = __webpack_require__(214);
const middlewares_1 = __webpack_require__(218);
const services_1 = __webpack_require__(216);
let ApiScheduleModule = class ApiScheduleModule {
    configure(consumer) {
        consumer.apply(middlewares_1.ScheduleMiddleware).forRoutes('*');
    }
};
exports.ApiScheduleModule = ApiScheduleModule;
exports.ApiScheduleModule = ApiScheduleModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entities_1.Schedule_V2, entities_1.Teams_V2, entities_1.Team_Stats_V2])],
        controllers: [controllers_1.ScheduleController],
        providers: [services_1.ApiScheduleService],
    })
], ApiScheduleModule);


/***/ }),
/* 214 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(215), exports);


/***/ }),
/* 215 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScheduleController = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
const services_1 = __webpack_require__(216);
let ScheduleController = class ScheduleController {
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
exports.ScheduleController = ScheduleController;
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
/* 216 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(217), exports);


/***/ }),
/* 217 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiScheduleService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(38);
const typeorm_2 = __webpack_require__(13);
let ApiScheduleService = class ApiScheduleService {
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
        if (schedule.length === 0)
            return [];
        const teamMap = await this.getTeamInfoMap(this.extractUniqueTeamIds(schedule));
        return schedule.map((item) => ({
            ...item,
            visTeamInfo: teamMap.get(item.vis_team_id) ?? null,
            homeTeamInfo: teamMap.get(item.home_team_id) ?? null,
        }));
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
        if (schedule.length === 0)
            return [];
        const uniqueTeamIds = this.extractUniqueTeamIds(schedule);
        const [teamMap, seasonRecordMap, finishedGames] = await Promise.all([
            this.getTeamInfoMap(uniqueTeamIds),
            this.getTeamSeasonRecordsMap(uniqueTeamIds, season),
            this.getCompletedGamesForSeason(season),
        ]);
        const teamGamesMap = this.buildTeamCompletedGamesMap(finishedGames);
        const matchupGamesMap = this.buildMatchupGamesMap(finishedGames);
        return schedule.map((item) => {
            const visId = Number(item.vis_team_id);
            const homeId = Number(item.home_team_id);
            const headToHeadGames = matchupGamesMap.get(this.getMatchupKey(visId, homeId)) ?? [];
            const visVersus = this.calculateVersusRecord(headToHeadGames, visId);
            const homeVersus = {
                wins: visVersus.loss,
                loss: visVersus.wins,
                ties: visVersus.ties,
            };
            return {
                id: item.id,
                gameDay: item.game_day,
                visTeamScore: item.vis_team_score,
                visTeamInfo: teamMap.get(visId) ?? null,
                visTeamLastFive: this.calculateLastFive(teamGamesMap.get(visId) ?? [], visId),
                visTeamRecord: seasonRecordMap.get(visId) ?? null,
                visTeamVersus: visVersus,
                homeTeamScore: item.home_team_score,
                homeTeamInfo: teamMap.get(homeId) ?? null,
                homeTeamLastFive: this.calculateLastFive(teamGamesMap.get(homeId) ?? [], homeId),
                homeTeamRecord: seasonRecordMap.get(homeId) ?? null,
                homeTeamVersus: homeVersus,
            };
        });
    }
    async updateGameById(gameId, gameData) {
        const game = await this.repo.findOneBy({ id: gameId });
        if (!game) {
            throw new common_1.NotFoundException(`Game with id ${gameId} not found`);
        }
        game.home_team_score = gameData.home_team_score;
        game.vis_team_score = gameData.vis_team_score;
        return this.repo.save(game);
    }
    extractUniqueTeamIds(games) {
        const ids = new Set();
        for (const g of games) {
            if (g.home_team_id)
                ids.add(Number(g.home_team_id));
            if (g.vis_team_id)
                ids.add(Number(g.vis_team_id));
        }
        return Array.from(ids);
    }
    async getTeamInfoMap(teamIds) {
        if (!teamIds.length)
            return new Map();
        const teams = await this.teamInfoRepo.find({
            select: {
                id: true,
                city: true,
                teamlogo: true,
                nickname: true,
                teamcolor: true,
            },
            where: { id: (0, typeorm_2.In)(teamIds) },
        });
        return new Map(teams.map((t) => [t.id, t]));
    }
    async getTeamSeasonRecordsMap(teamIds, season) {
        if (!teamIds.length)
            return new Map();
        const records = await this.teamStatsRepo.find({
            select: {
                id: true,
                wins: true,
                loss: true,
                ties: true,
                team_id: { id: true },
            },
            relations: { team_id: true },
            where: {
                team_id: { id: (0, typeorm_2.In)(teamIds) },
                playing_year: season,
                season_type: 'Regular',
            },
        });
        return new Map(records.map((r) => [r.team_id.id, r]));
    }
    async getCompletedGamesForSeason(season) {
        return this.repo.find({
            select: {
                id: true,
                game_day: true,
                home_team_id: true,
                vis_team_id: true,
                home_team_score: true,
                vis_team_score: true,
            },
            where: {
                playing_year: season,
                home_team_score: (0, typeorm_2.Not)((0, typeorm_2.IsNull)()),
                vis_team_score: (0, typeorm_2.Not)((0, typeorm_2.IsNull)()),
            },
            order: {
                game_day: 'DESC',
            },
        });
    }
    buildTeamCompletedGamesMap(games) {
        const map = new Map();
        for (const game of games) {
            const homeId = Number(game.home_team_id);
            const visId = Number(game.vis_team_id);
            if (!map.has(homeId))
                map.set(homeId, []);
            if (!map.has(visId))
                map.set(visId, []);
            map.get(homeId).push(game);
            map.get(visId).push(game);
        }
        return map;
    }
    buildMatchupGamesMap(games) {
        const map = new Map();
        for (const game of games) {
            const key = this.getMatchupKey(Number(game.home_team_id), Number(game.vis_team_id));
            const list = map.get(key);
            if (list) {
                list.push(game);
            }
            else {
                map.set(key, [game]);
            }
        }
        return map;
    }
    getMatchupKey(teamA, teamB) {
        return teamA < teamB ? `${teamA}_${teamB}` : `${teamB}_${teamA}`;
    }
    calculateLastFive(games, teamId) {
        const results = [];
        const limit = Math.min(games.length, 5);
        for (let i = 0; i < limit; i++) {
            const game = games[i];
            const isHome = Number(game.home_team_id) === teamId;
            const teamScore = Number(isHome ? game.home_team_score : game.vis_team_score);
            const oppScore = Number(isHome ? game.vis_team_score : game.home_team_score);
            if (teamScore > oppScore) {
                results.push('W');
            }
            else if (teamScore < oppScore) {
                results.push('L');
            }
            else {
                results.push('T');
            }
        }
        return results;
    }
    calculateVersusRecord(games, teamId) {
        let wins = 0;
        let loss = 0;
        let ties = 0;
        for (const game of games) {
            const isHome = Number(game.home_team_id) === teamId;
            const teamScore = Number(isHome ? game.home_team_score : game.vis_team_score);
            const oppScore = Number(isHome ? game.vis_team_score : game.home_team_score);
            if (teamScore > oppScore) {
                wins++;
            }
            else if (teamScore < oppScore) {
                loss++;
            }
            else {
                ties++;
            }
        }
        return { wins, loss, ties };
    }
};
exports.ApiScheduleService = ApiScheduleService;
exports.ApiScheduleService = ApiScheduleService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Schedule_V2)),
    tslib_1.__param(1, (0, typeorm_1.InjectRepository)(entities_1.Teams_V2)),
    tslib_1.__param(2, (0, typeorm_1.InjectRepository)(entities_1.Team_Stats_V2)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object])
], ApiScheduleService);


/***/ }),
/* 218 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(219), exports);


/***/ }),
/* 219 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScheduleMiddleware = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
let ScheduleMiddleware = class ScheduleMiddleware {
    use(req, res, next) {
        next();
    }
};
exports.ScheduleMiddleware = ScheduleMiddleware;
exports.ScheduleMiddleware = ScheduleMiddleware = tslib_1.__decorate([
    (0, common_1.Injectable)()
], ScheduleMiddleware);


/***/ }),
/* 220 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(221), exports);


/***/ }),
/* 221 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiTeamStatsModule = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(38);
const controllers_1 = __webpack_require__(222);
const middlewares_1 = __webpack_require__(228);
const services_1 = __webpack_require__(224);
let ApiTeamStatsModule = class ApiTeamStatsModule {
    configure(consumer) {
        consumer.apply(middlewares_1.TeamStatsMiddleware).forRoutes('*');
    }
};
exports.ApiTeamStatsModule = ApiTeamStatsModule;
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
/* 222 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(223), exports);


/***/ }),
/* 223 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TeamStatsController = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
const services_1 = __webpack_require__(224);
let TeamStatsController = class TeamStatsController {
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
exports.TeamStatsController = TeamStatsController;
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
/* 224 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(225), exports);
tslib_1.__exportStar(__webpack_require__(226), exports);
tslib_1.__exportStar(__webpack_require__(227), exports);


/***/ }),
/* 225 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiTeamStatsService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(38);
const typeorm_2 = __webpack_require__(13);
const BASIC_TEAM_STATS_SELECT = {
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
};
const DETAILED_TEAM_STATS_SELECT = {
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
};
const PLAYOFF_STANDINGS_SELECT = {
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
};
let ApiTeamStatsService = class ApiTeamStatsService {
    constructor(repo, divisionsRepo) {
        this.repo = repo;
        this.divisionsRepo = divisionsRepo;
    }
    async getTeamStatsBySeasonByType(season, seasonType) {
        return this.repo.find({
            relations: {
                team_id: true,
            },
            select: BASIC_TEAM_STATS_SELECT,
            where: {
                playing_year: season,
                season_type: seasonType,
            },
        });
    }
    async getAllTeamStatsBySeasonByType(season, seasonType) {
        const teamStats = await this.repo.find({
            relations: {
                team_id: {
                    divisions_id: true,
                },
            },
            select: DETAILED_TEAM_STATS_SELECT,
            where: {
                playing_year: season,
                season_type: seasonType,
            },
        });
        return this.attachDivisionInfo(teamStats);
    }
    async getTeamStandingsForPlayoffs(season, seasonType) {
        const teamStats = await this.repo.find({
            relations: {
                team_id: {
                    divisions_id: true,
                },
            },
            select: PLAYOFF_STANDINGS_SELECT,
            where: {
                playing_year: season,
                season_type: seasonType,
            },
        });
        const teamStatsWithDivision = await this.attachDivisionInfo(teamStats);
        return this.sortTeamStatsByStandings(teamStatsWithDivision);
    }
    async attachDivisionInfo(items) {
        if (items.length === 0)
            return [];
        const uniqueDivisionIds = Array.from(new Set(items
            .map((item) => item.team_id?.divisions_id?.id)
            .filter((id) => typeof id === 'number')));
        const divisions = uniqueDivisionIds.length
            ? await this.divisionsRepo.find({
                relations: ['conference_id'],
                where: {
                    id: (0, typeorm_2.In)(uniqueDivisionIds),
                },
            })
            : [];
        const divisionMap = new Map(divisions.map((d) => [d.id, d]));
        return items.map((item) => {
            const divisionId = item.team_id?.divisions_id?.id;
            return {
                ...item,
                division: divisionId ? divisionMap.get(divisionId) ?? null : null,
            };
        });
    }
    sortTeamStatsByStandings(data) {
        return [...data].sort((a, b) => {
            const aPoints = Number(a.points) || 0;
            const bPoints = Number(b.points) || 0;
            if (bPoints !== aPoints)
                return bPoints - aPoints;
            const aWins = Number(a.wins) || 0;
            const bWins = Number(b.wins) || 0;
            if (bWins !== aWins)
                return bWins - aWins;
            const aGoalDiff = (Number(a.goals_for) || 0) - (Number(a.goals_against) || 0);
            const bGoalDiff = (Number(b.goals_for) || 0) - (Number(b.goals_against) || 0);
            if (bGoalDiff !== aGoalDiff)
                return bGoalDiff - aGoalDiff;
            const aGoalsFor = Number(a.goals_for) || 0;
            const bGoalsFor = Number(b.goals_for) || 0;
            return bGoalsFor - aGoalsFor;
        });
    }
};
exports.ApiTeamStatsService = ApiTeamStatsService;
exports.ApiTeamStatsService = ApiTeamStatsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Team_Stats_V2)),
    tslib_1.__param(1, (0, typeorm_1.InjectRepository)(entities_1.Divisions_V2)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], ApiTeamStatsService);


/***/ }),
/* 226 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiAllTimeTeamStatsService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(38);
const typeorm_2 = __webpack_require__(13);
const TEAM_STATS_SELECT = {
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
    shots_for: true,
    shots_against: true,
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
};
let ApiAllTimeTeamStatsService = class ApiAllTimeTeamStatsService {
    constructor(repo, dataSource) {
        this.repo = repo;
        this.dataSource = dataSource;
    }
    async getAllTimeTeamStatsBySeasonByType(seasonType) {
        const allTimeStats = await this.repo.find({
            relations: {
                team_id: true,
            },
            select: TEAM_STATS_SELECT,
            where: {
                season_type: seasonType,
                games_played: (0, typeorm_2.MoreThan)(0),
            },
            order: {
                points: 'DESC',
            },
        });
        return this.convertStats(allTimeStats, false);
    }
    async getAllTimeTeamStatsSummedBySeasonByType(seasonType) {
        const rawSummedStats = await this.dataSource.query(`SELECT
         a.team_id AS team_id,
         a.season_type AS season_type,
         c.city AS city,
         c.nickname AS nickname,
         c.shortname AS shortname,
         c.teamlogo AS teamlogo,
         c.isactive AS isactive,
         SUM(a.games_played) AS games_played,
         SUM(a.wins) AS wins,
         SUM(a.loss) AS loss,
         SUM(a.ties) AS ties,
         SUM(a.points) AS points,
         SUM(a.goals_for) AS goals_for,
         SUM(a.goals_against) AS goals_against,
         SUM(a.pp_attempts) AS pp_attempts,
         SUM(a.pp_goals) AS pp_goals,
         SUM(a.pk_attempts) AS pk_attempts,
         SUM(a.pk_goals) AS pk_goals,
         SUM(a.sh_goals) AS sh_goals,
         SUM(a.penalty_minutes) AS penalty_minutes,
         SUM(a.shots_for) AS shots_for,
         SUM(a.shots_against) AS shots_against,
         SUM(a.shut_outs) AS shut_outs,
         SUM(a.face_off_won) AS face_off_won,
         SUM(a.face_off_lost) AS face_off_lost,
         SUM(a.corner_won) AS corner_won,
         SUM(a.corner_lost) AS corner_lost,
         SUM(a.pass_complete) AS pass_complete,
         SUM(a.pass_incomplete) AS pass_incomplete
       FROM team_stats_v2 a
              INNER JOIN teams_v2 c ON c.id = a.team_id
       WHERE a.season_type = $1
       GROUP BY a.team_id, a.season_type, c.city, c.nickname, c.shortname, c.teamlogo, c.isactive
       ORDER BY points DESC`, [seasonType]);
        return this.convertStats(rawSummedStats, true);
    }
    convertStats(array, raw) {
        return array.map((stat) => {
            const gp = Number(stat.games_played) || 0;
            const gf = Number(stat.goals_for) || 0;
            const ga = Number(stat.goals_against) || 0;
            const wins = Number(stat.wins) || 0;
            const pim = Number(stat.penalty_minutes) || 0;
            const ppAttempts = Number(stat.pp_attempts) || 0;
            const ppGoals = Number(stat.pp_goals) || 0;
            const pkAttempts = Number(stat.pk_attempts) || 0;
            const pkGoals = Number(stat.pk_goals) || 0;
            const goalsForPerGame = gp > 0 ? Number((gf / gp).toFixed(2)) : 0;
            const goalsAgainstPerGame = gp > 0 ? Number((ga / gp).toFixed(2)) : 0;
            const winPct = gp > 0 ? Number(((wins / gp) * 100).toFixed(1)) : 0;
            const pimPerGame = gp > 0 ? Number((pim / gp).toFixed(1)) : 0;
            const ppPct = ppAttempts > 0 ? Number(((ppGoals / ppAttempts) * 100).toFixed(1)) : 0;
            const pkPct = pkAttempts > 0
                ? Number((((pkAttempts - pkGoals) / pkAttempts) * 100).toFixed(1))
                : 0;
            const foPct = Number(this.calculateRatioPct(Number(stat.face_off_won), Number(stat.face_off_lost)).toFixed(1));
            const passPct = Number(this.calculateRatioPct(Number(stat.pass_complete), Number(stat.pass_incomplete)).toFixed(1));
            const cornerPct = Number(this.calculateRatioPct(Number(stat.corner_won), Number(stat.corner_lost)).toFixed(1));
            const teamName = raw
                ? `${stat.city ?? ''} ${stat.nickname ?? ''}`.trim()
                : `${stat.team_id?.city ?? ''} ${stat.team_id?.nickname ?? ''}`.trim();
            const teamInfo = !raw
                ? stat.team_id
                : {
                    id: stat.team_id,
                    city: stat.city,
                    teamlogo: stat.teamlogo,
                    shortname: stat.shortname,
                    nickname: stat.nickname,
                };
            return {
                goalsForPerGame,
                goalsAgainstPerGame,
                goalDiff: gf - ga,
                winPct,
                ppPct,
                pkPct,
                foPct,
                passPct,
                cornerPct,
                pimPerGame,
                team_name: teamName,
                team_id: teamInfo,
                games_played: gp,
                wins,
                loss: Number(stat.loss) || 0,
                ties: Number(stat.ties) || 0,
                points: Number(stat.points) || 0,
                goals_for: gf,
                goals_against: ga,
                shots_against: Number(stat.shots_against) || 0,
                shots_for: Number(stat.shots_for) || 0,
                pp_goals: ppGoals,
                pp_attempts: ppAttempts,
                pk_goals: pkGoals,
                pk_attempts: pkAttempts,
                sh_goals: Number(stat.sh_goals) || 0,
                penalty_minutes: pim,
                face_off_won: Number(stat.face_off_won) || 0,
                face_off_lost: Number(stat.face_off_lost) || 0,
                corner_won: Number(stat.corner_won) || 0,
                corner_lost: Number(stat.corner_lost) || 0,
                pass_complete: Number(stat.pass_complete) || 0,
                pass_incomplete: Number(stat.pass_incomplete) || 0,
                shut_outs: Number(stat.shut_outs) || 0,
                season_type: stat.season_type,
                playing_year: stat.playing_year ?? null,
            };
        });
    }
    calculateRatioPct(high, low) {
        const total = (high || 0) + (low || 0);
        return total > 0 ? ((high || 0) / total) * 100 : 0;
    }
};
exports.ApiAllTimeTeamStatsService = ApiAllTimeTeamStatsService;
exports.ApiAllTimeTeamStatsService = ApiAllTimeTeamStatsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Team_Stats_V2)),
    tslib_1.__param(1, (0, typeorm_1.InjectDataSource)()),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.DataSource !== "undefined" && typeorm_2.DataSource) === "function" ? _b : Object])
], ApiAllTimeTeamStatsService);


/***/ }),
/* 227 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiUserTeamStatsService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(38);
const typeorm_2 = __webpack_require__(13);
const TEAM_RECORD_SELECT = {
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
};
const TEAM_STATS_DETAILED_SELECT = {
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
    shots_for: true,
};
let ApiUserTeamStatsService = class ApiUserTeamStatsService {
    constructor(repo, teamsRepo) {
        this.repo = repo;
        this.teamsRepo = teamsRepo;
    }
    async getUserTeamRecordBySeasonBySeasonType(teamId, season, seasonType) {
        return (await this.repo.findOne({
            relations: {
                team_id: true,
            },
            select: TEAM_RECORD_SELECT,
            where: {
                team_id: {
                    id: teamId,
                },
                playing_year: season,
                season_type: seasonType,
            },
        }));
    }
    async getUserTeamStatsBySeasonType(userId, seasonType) {
        const userTeams = await this.teamsRepo.findBy({ users_id: userId });
        if (userTeams.length === 0)
            return [];
        const teamIds = userTeams.map((t) => t.id).filter(Boolean);
        if (teamIds.length === 0)
            return [];
        const allStats = await this.repo.find({
            relations: {
                team_id: true,
            },
            select: TEAM_STATS_DETAILED_SELECT,
            where: {
                team_id: {
                    id: (0, typeorm_2.In)(teamIds),
                },
                games_played: (0, typeorm_2.MoreThan)(0),
                season_type: seasonType,
            },
            order: {
                playing_year: 'DESC',
            },
        });
        const statsByTeamId = new Map();
        for (const stat of allStats) {
            const tid = stat.team_id?.id;
            if (!tid)
                continue;
            const existing = statsByTeamId.get(tid);
            if (existing) {
                existing.push(stat);
            }
            else {
                statsByTeamId.set(tid, [stat]);
            }
        }
        // Type assertion at the return boundary resolves class-to-object mismatch
        return userTeams.map((team) => ({
            ...team,
            teamStats: this.convertStats(statsByTeamId.get(team.id) ?? []),
        }));
    }
    convertStats(stats) {
        return stats.map((stat) => {
            const gp = Number(stat.games_played) || 0;
            const gf = Number(stat.goals_for) || 0;
            const ga = Number(stat.goals_against) || 0;
            const wins = Number(stat.wins) || 0;
            const pim = Number(stat.penalty_minutes) || 0;
            const ppAttempts = Number(stat.pp_attempts) || 0;
            const ppGoals = Number(stat.pp_goals) || 0;
            const pkAttempts = Number(stat.pk_attempts) || 0;
            const pkGoals = Number(stat.pk_goals) || 0;
            const goalsForPerGame = gp > 0 ? Number((gf / gp).toFixed(2)) : 0;
            const goalsAgainstPerGame = gp > 0 ? Number((ga / gp).toFixed(2)) : 0;
            const winPct = gp > 0 ? Number(((wins / gp) * 100).toFixed(1)) : 0;
            const pimPerGame = gp > 0 ? Number((pim / gp).toFixed(1)) : 0;
            const ppPct = ppAttempts > 0 ? Number(((ppGoals / ppAttempts) * 100).toFixed(1)) : 0;
            const pkPct = pkAttempts > 0
                ? Number((((pkAttempts - pkGoals) / pkAttempts) * 100).toFixed(1))
                : 0;
            const foPct = Number(this.calculateRatioPct(Number(stat.face_off_won), Number(stat.face_off_lost)).toFixed(1));
            const passPct = Number(this.calculateRatioPct(Number(stat.pass_complete), Number(stat.pass_incomplete)).toFixed(1));
            const cornerPct = Number(this.calculateRatioPct(Number(stat.corner_won), Number(stat.corner_lost)).toFixed(1));
            const teamCity = stat.team_id?.city ?? '';
            const teamNickname = stat.team_id?.nickname ?? '';
            const teamName = `${teamCity} ${teamNickname}`.trim();
            return {
                goalsForPerGame,
                goalsAgainstPerGame,
                goalDiff: gf - ga,
                winPct,
                ppPct,
                pkPct,
                foPct,
                passPct,
                cornerPct,
                pimPerGame,
                team_name: teamName,
                team_id: stat.team_id,
                games_played: gp,
                wins,
                loss: Number(stat.loss) || 0,
                ties: Number(stat.ties) || 0,
                points: Number(stat.points) || 0,
                goals_for: gf,
                goals_against: ga,
                shots_against: Number(stat.shots_against) || 0,
                shots_for: Number(stat.shots_for) || 0,
                pp_goals: ppGoals,
                pp_attempts: ppAttempts,
                pk_goals: pkGoals,
                pk_attempts: pkAttempts,
                sh_goals: Number(stat.sh_goals) || 0,
                penalty_minutes: pim,
                face_off_won: Number(stat.face_off_won) || 0,
                face_off_lost: Number(stat.face_off_lost) || 0,
                corner_won: Number(stat.corner_won) || 0,
                corner_lost: Number(stat.corner_lost) || 0,
                pass_complete: Number(stat.pass_complete) || 0,
                pass_incomplete: Number(stat.pass_incomplete) || 0,
                shut_outs: Number(stat.shut_outs) || 0,
                season_type: stat.season_type,
                playing_year: stat.playing_year,
            };
        });
    }
    calculateRatioPct(high, low) {
        const total = (high || 0) + (low || 0);
        return total > 0 ? ((high || 0) / total) * 100 : 0;
    }
};
exports.ApiUserTeamStatsService = ApiUserTeamStatsService;
exports.ApiUserTeamStatsService = ApiUserTeamStatsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Team_Stats_V2)),
    tslib_1.__param(1, (0, typeorm_1.InjectRepository)(entities_1.Teams_V2)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], ApiUserTeamStatsService);


/***/ }),
/* 228 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(229), exports);


/***/ }),
/* 229 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TeamStatsMiddleware = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
let TeamStatsMiddleware = class TeamStatsMiddleware {
    use(req, res, next) {
        next();
    }
};
exports.TeamStatsMiddleware = TeamStatsMiddleware;
exports.TeamStatsMiddleware = TeamStatsMiddleware = tslib_1.__decorate([
    (0, common_1.Injectable)()
], TeamStatsMiddleware);


/***/ }),
/* 230 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(231), exports);


/***/ }),
/* 231 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiTeamsModule = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(38);
const controllers_1 = __webpack_require__(232);
const teams_middleware_1 = __webpack_require__(236);
const services_1 = __webpack_require__(234);
let ApiTeamsModule = class ApiTeamsModule {
    configure(consumer) {
        consumer.apply(teams_middleware_1.TeamsMiddleware).forRoutes('*');
    }
};
exports.ApiTeamsModule = ApiTeamsModule;
exports.ApiTeamsModule = ApiTeamsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entities_1.Teams_V2, entities_1.Users_V2])],
        controllers: [controllers_1.TeamsController],
        providers: [services_1.TeamsService],
    })
], ApiTeamsModule);


/***/ }),
/* 232 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(233), exports);


/***/ }),
/* 233 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TeamsController = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(41);
const common_1 = __webpack_require__(1);
const services_1 = __webpack_require__(234);
let TeamsController = class TeamsController {
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
exports.TeamsController = TeamsController;
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
/* 234 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(235), exports);


/***/ }),
/* 235 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TeamsService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(38);
const typeorm_2 = __webpack_require__(13);
let TeamsService = class TeamsService {
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
exports.TeamsService = TeamsService;
exports.TeamsService = TeamsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Teams_V2)),
    tslib_1.__param(1, (0, typeorm_1.InjectRepository)(entities_1.Users_V2)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], TeamsService);


/***/ }),
/* 236 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TeamsMiddleware = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
let TeamsMiddleware = class TeamsMiddleware {
    use(req, res, next) {
        next();
    }
};
exports.TeamsMiddleware = TeamsMiddleware;
exports.TeamsMiddleware = TeamsMiddleware = tslib_1.__decorate([
    (0, common_1.Injectable)()
], TeamsMiddleware);


/***/ }),
/* 237 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(238), exports);


/***/ }),
/* 238 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiTransactionsModule = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(38);
const axios_1 = __webpack_require__(169);
const controllers_1 = __webpack_require__(239);
const middlewares_1 = __webpack_require__(244);
const services_1 = __webpack_require__(241);
let ApiTransactionsModule = class ApiTransactionsModule {
    configure(consumer) {
        consumer.apply(middlewares_1.TransactionsMiddleware).forRoutes('*');
    }
};
exports.ApiTransactionsModule = ApiTransactionsModule;
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
/* 239 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(240), exports);


/***/ }),
/* 240 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransactionsController = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(41);
const common_1 = __webpack_require__(1);
const services_1 = __webpack_require__(241);
let TransactionsController = class TransactionsController {
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
exports.TransactionsController = TransactionsController;
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
/* 241 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(242), exports);
tslib_1.__exportStar(__webpack_require__(243), exports);


/***/ }),
/* 242 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiTransactionsService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(38);
const typeorm_2 = __webpack_require__(13);
const TEAM_SELECT = {
    id: true,
    city: true,
    teamlogo: true,
    nickname: true,
    teamcolor: true,
    teamtextcolor: true,
};
const PLAYER_SELECT = {
    id: true,
    firstname: true,
    lastname: true,
    nhl_id: true,
};
const SEASON_DATES = {
    '27': { start: '2026-06-02', end: '2027-06-01' },
    '26': { start: '2025-06-02', end: '2026-06-01' },
    '25': { start: '2024-06-02', end: '2025-06-01' },
    '24': { start: '2023-06-02', end: '2024-06-01' },
    '23': { start: '2022-06-02', end: '2023-06-01' },
    '22': { start: '2021-07-15', end: '2022-06-01' },
    '21': { start: '2020-04-27', end: '2021-07-15' },
};
let ApiTransactionsService = class ApiTransactionsService {
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
        return this.enrichTransactions(transactions);
    }
    async getTransactionsBySeason(year) {
        const season = SEASON_DATES[year];
        if (!season) {
            throw new common_1.BadRequestException(`Season key '${year}' not found`);
        }
        const transactions = await this.repo.find({
            where: {
                transaction_date: (0, typeorm_2.Between)(new Date(season.start), new Date(season.end)),
            },
            order: {
                transaction_date: 'DESC',
            },
        });
        return this.enrichTransactions(transactions);
    }
    async updateTradeById(id, attrs) {
        const trade = await this.repo.findOneBy({ id });
        if (!trade) {
            throw new common_1.NotFoundException(`Trade with id ${id} not found`);
        }
        Object.assign(trade, attrs);
        return this.repo.save(trade);
    }
    async enrichTransactions(transactions) {
        if (transactions.length === 0)
            return [];
        const teamIds = new Set();
        const playerIds = new Set();
        for (const t of transactions) {
            if (t.team_one_id)
                teamIds.add(Number(t.team_one_id));
            if (t.team_two_id)
                teamIds.add(Number(t.team_two_id));
            if (Array.isArray(t.team_one_players)) {
                for (const pid of t.team_one_players) {
                    if (pid)
                        playerIds.add(Number(pid));
                }
            }
            if (Array.isArray(t.team_two_players)) {
                for (const pid of t.team_two_players) {
                    if (pid)
                        playerIds.add(Number(pid));
                }
            }
        }
        const [teamMap, playerMap] = await Promise.all([
            this.getTeamsMap(Array.from(teamIds)),
            this.getPlayersMap(Array.from(playerIds)),
        ]);
        return transactions.map((t) => ({
            id: t.id,
            transactionDate: t.transaction_date,
            teamOneInfo: teamMap.get(Number(t.team_one_id)) ?? null,
            teamOnePlayers: (t.team_one_players || []).map((pid) => ({
                player: playerMap.get(Number(pid)) ?? null,
            })),
            teamOnePicks: t.team_one_picks,
            teamTwoInfo: teamMap.get(Number(t.team_two_id)) ?? null,
            teamTwoPlayers: (t.team_two_players || []).map((pid) => ({
                player: playerMap.get(Number(pid)) ?? null,
            })),
            teamTwoPicks: t.team_two_picks,
        }));
    }
    async getTeamsMap(teamIds) {
        if (teamIds.length === 0) {
            return new Map();
        }
        const teams = await this.teamInfoRepo.find({
            select: TEAM_SELECT,
            where: { id: (0, typeorm_2.In)(teamIds) },
        });
        return new Map(teams.map((t) => [t.id, t]));
    }
    async getPlayersMap(playerIds) {
        if (playerIds.length === 0) {
            return new Map();
        }
        const players = await this.playersRepo.find({
            select: PLAYER_SELECT,
            where: { id: (0, typeorm_2.In)(playerIds) },
        });
        return new Map(players.map((p) => [p.id, p]));
    }
};
exports.ApiTransactionsService = ApiTransactionsService;
exports.ApiTransactionsService = ApiTransactionsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Transactions_V2)),
    tslib_1.__param(1, (0, typeorm_1.InjectRepository)(entities_1.Teams_V2)),
    tslib_1.__param(2, (0, typeorm_1.InjectRepository)(entities_1.Players_V2)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object])
], ApiTransactionsService);


/***/ }),
/* 243 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var ApiTransactionsTradesService_1;
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiTransactionsTradesService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(38);
const typeorm_2 = __webpack_require__(13);
const axios_1 = __webpack_require__(169);
const rxjs_1 = __webpack_require__(174);
let ApiTransactionsTradesService = ApiTransactionsTradesService_1 = class ApiTransactionsTradesService {
    constructor(httpService, repo, teamInfoRepo, playerStatsRepo, goalieStatsRepo, draftRepo, playersRepo) {
        this.httpService = httpService;
        this.repo = repo;
        this.teamInfoRepo = teamInfoRepo;
        this.playerStatsRepo = playerStatsRepo;
        this.goalieStatsRepo = goalieStatsRepo;
        this.draftRepo = draftRepo;
        this.playersRepo = playersRepo;
        this.logger = new common_1.Logger(ApiTransactionsTradesService_1.name);
        this.waiversHookURL = process.env.SLACK_WAIVERS_WEBHOOK;
        this.tradeHookURL = process.env.SLACK_WEBHOOK;
    }
    async getTeamBySeason(team, season, draftYear) {
        const draftTeam = await this.teamInfoRepo.findOne({
            select: { id: true, shortname: true },
            where: { shortname: team },
        });
        if (!draftTeam) {
            throw new common_1.NotFoundException(`Team '${team}' not found`);
        }
        const nextDraftYear = (Number(draftYear) + 1).toString();
        const [players, goalies, draftPicks] = await Promise.all([
            this.playerStatsRepo.find({
                select: {
                    id: true,
                    team_name: true,
                    player_id: { id: true, firstname: true, lastname: true },
                },
                relations: { player_id: true },
                where: { team_name: team, playing_year: season },
                order: { player_id: { lastname: 'ASC' } },
            }),
            this.goalieStatsRepo.find({
                select: {
                    id: true,
                    team_name: true,
                    player_id: { id: true, firstname: true, lastname: true },
                },
                relations: { player_id: true },
                where: { team_name: team, playing_year: season },
                order: { player_id: { lastname: 'ASC' } },
            }),
            this.draftRepo.find({
                relations: { team_id: true },
                where: [
                    {
                        draft_year: (0, typeorm_2.In)([draftYear, nextDraftYear]),
                        team_id: { id: draftTeam.id },
                    },
                    {
                        draft_year: (0, typeorm_2.In)([draftYear, nextDraftYear]),
                        round_one: draftTeam.id,
                    },
                    {
                        draft_year: (0, typeorm_2.In)([draftYear, nextDraftYear]),
                        round_two: draftTeam.id,
                    },
                    {
                        draft_year: (0, typeorm_2.In)([draftYear, nextDraftYear]),
                        round_three: draftTeam.id,
                    },
                    {
                        draft_year: (0, typeorm_2.In)([draftYear, nextDraftYear]),
                        round_four: draftTeam.id,
                    },
                    {
                        draft_year: (0, typeorm_2.In)([draftYear, nextDraftYear]),
                        round_five: draftTeam.id,
                    },
                ],
            }),
        ]);
        const attachTeam = (items) => items.map((item) => ({ ...item, teamInfo: draftTeam }));
        return {
            players: attachTeam(players),
            goalies: attachTeam(goalies),
            draftPicks,
        };
    }
    async waiverAcquire(body) {
        const { team, players = [], season } = body;
        await this.batchUpdatePlayerRosters(players, team, season);
        const playerStrings = await this.resolvePlayerStrings(players);
        const postJson = {
            text: `:rotating_light: WAIVER PICK UP ALERT :rotating_light: \n \n To ${team}: \n ${playerStrings.join('\n')}`,
            channel: '#waivers-and-drops',
            username: 'League Office',
            icon_emoji: ':office',
        };
        return this.sendToSlack(postJson, this.waiversHookURL);
    }
    async waiverRelease(body) {
        const { team, players = [], season } = body;
        await this.batchUpdatePlayerRosters(players, 'FA', season);
        const playerStrings = await this.resolvePlayerStrings(players);
        const postJson = {
            text: `:rotating_light: WAIVER DROP ALERT :rotating_light: \n \n To Waivers From ${team}: \n ${playerStrings.join('\n')}`,
            channel: '#waivers-and-drops',
            username: 'League Office',
            icon_emoji: ':office',
        };
        return this.sendToSlack(postJson, this.waiversHookURL);
    }
    async trade(body) {
        const { teamOne, teamTwo, season } = body;
        const teamOnePicksArray = body.teamOnePicks || [];
        const teamTwoPicksArray = body.teamTwoPicks || [];
        const teamOnePlayers = teamOnePicksArray.filter((p) => p.includes('p-') || p.includes('g-'));
        const teamTwoPlayers = teamTwoPicksArray.filter((p) => p.includes('p-') || p.includes('g-'));
        const teamOneDraftPicks = this.parseDraftPicks(teamOnePicksArray);
        const teamTwoDraftPicks = this.parseDraftPicks(teamTwoPicksArray);
        const [teamOneEntity, teamTwoEntity] = await Promise.all([
            this.teamInfoRepo.findOne({
                select: { id: true, shortname: true },
                where: { shortname: teamOne },
            }),
            this.teamInfoRepo.findOne({
                select: { id: true, shortname: true },
                where: { shortname: teamTwo },
            }),
        ]);
        if (!teamOneEntity || !teamTwoEntity) {
            throw new common_1.NotFoundException(`One or both teams not found (${teamOne}, ${teamTwo})`);
        }
        await Promise.all([
            this.batchUpdatePlayerRosters(teamOnePlayers, teamTwo, season),
            this.batchUpdatePlayerRosters(teamTwoPlayers, teamOne, season),
            this.batchUpdatePicks(teamOneDraftPicks, teamTwoEntity.id),
            this.batchUpdatePicks(teamTwoDraftPicks, teamOneEntity.id),
            this.createTransactionRecord(teamOneEntity.id, teamTwoEntity.id, teamOnePlayers, teamTwoPlayers, teamOneDraftPicks, teamTwoDraftPicks),
        ]);
        const [t1PlayerStrings, t2PlayerStrings] = await Promise.all([
            this.resolvePlayerStrings(teamOnePlayers),
            this.resolvePlayerStrings(teamTwoPlayers),
        ]);
        const t1PickStrings = teamOneDraftPicks.map((p) => `- ${p.team} ${p.value} ${p.year}`);
        const t2PickStrings = teamTwoDraftPicks.map((p) => `- ${p.team} ${p.value} ${p.year}`);
        const toTeamOne = [...t2PlayerStrings, ...t2PickStrings].join('\n');
        const toTeamTwo = [...t1PlayerStrings, ...t1PickStrings].join('\n');
        const postJson = {
            text: `:rotating_light: TRADE ALERT :rotating_light:\n\nTo ${teamOne}:\n${toTeamOne}\n\nTo ${teamTwo}:\n${toTeamTwo}\n`,
            channel: '#trades',
            username: 'League Office',
            icon_emoji: ':office',
        };
        return this.sendToSlack(postJson, this.tradeHookURL);
    }
    async batchUpdatePlayerRosters(playerTokens, targetTeam, season) {
        const skaterIds = [];
        const goalieIds = [];
        for (const token of playerTokens) {
            const parts = token.split('-');
            const id = Number(parts[1]);
            if (isNaN(id))
                continue;
            if (token.startsWith('p-'))
                skaterIds.push(id);
            else if (token.startsWith('g-'))
                goalieIds.push(id);
        }
        const updates = [];
        if (skaterIds.length > 0) {
            updates.push(this.playerStatsRepo
                .createQueryBuilder()
                .update(entities_1.Players_Stats_V2)
                .set({ team_name: targetTeam })
                .where('player_id IN (:...ids)', { ids: skaterIds })
                .andWhere('playing_year = :season', { season })
                .execute());
        }
        if (goalieIds.length > 0) {
            updates.push(this.goalieStatsRepo
                .createQueryBuilder()
                .update(entities_1.Goalies_Stats_V2)
                .set({ team_name: targetTeam })
                .where('player_id IN (:...ids)', { ids: goalieIds })
                .andWhere('playing_year = :season', { season })
                .execute());
        }
        await Promise.all(updates);
    }
    async batchUpdatePicks(picks, newOwnerTeamId) {
        await Promise.all(picks.map(async (pick) => {
            const roundField = this.mapRoundValueToField(pick.value);
            if (!roundField)
                return;
            const draftRow = await this.draftRepo.findOne({
                where: {
                    draft_year: pick.year,
                    team_id: { shortname: pick.team },
                },
            });
            if (draftRow) {
                draftRow[roundField] = newOwnerTeamId;
                await this.draftRepo.save(draftRow);
            }
        }));
    }
    mapRoundValueToField(value) {
        if (value.includes('1'))
            return 'round_one';
        if (value.includes('2'))
            return 'round_two';
        if (value.includes('3'))
            return 'round_three';
        if (value.includes('4'))
            return 'round_four';
        if (value.includes('5'))
            return 'round_five';
        return null;
    }
    parseDraftPicks(items) {
        return items
            .filter((item) => !item.includes('p-') && !item.includes('g-') && item.includes(' '))
            .map((item) => {
            const [team, value, year] = item.split(' ');
            return { team, value, year };
        });
    }
    async resolvePlayerStrings(playerTokens) {
        const rawIds = playerTokens
            .map((token) => Number(token.split('-')[1]))
            .filter((id) => !isNaN(id));
        if (rawIds.length === 0)
            return [];
        const players = await this.playersRepo.find({
            select: { id: true, firstname: true, lastname: true },
            where: { id: (0, typeorm_2.In)(rawIds) },
        });
        const playerMap = new Map(players.map((p) => [p.id, `${p.firstname} ${p.lastname}`]));
        return rawIds.map((id) => `- ${playerMap.get(id) ?? 'Unknown Player'}`);
    }
    async createTransactionRecord(teamOneId, teamTwoId, teamOnePlayers, teamTwoPlayers, teamOnePicks, teamTwoPicks) {
        const extractIds = (tokens) => tokens.map((t) => t.split('-')[1]).filter(Boolean);
        const formatPicks = (picks) => picks.map((p) => `${p.team} ${p.value} ${p.year}`);
        const newTransaction = this.repo.create({
            transaction_date: new Date().toISOString().split('T')[0],
            team_one_id: teamOneId,
            team_two_id: teamTwoId,
            team_one_players: extractIds(teamTwoPlayers),
            team_two_players: extractIds(teamOnePlayers),
            team_one_picks: formatPicks(teamTwoPicks),
            team_two_picks: formatPicks(teamOnePicks),
        });
        return this.repo.save(newTransaction);
    }
    async sendToSlack(message, hookUrl) {
        if (!hookUrl) {
            this.logger.warn('Slack webhook URL is not configured');
            return;
        }
        try {
            await (0, rxjs_1.firstValueFrom)(this.httpService.post(hookUrl, message, {
                headers: { 'Content-type': 'application/json' },
            }));
        }
        catch (err) {
            this.logger.error(`Failed sending Slack webhook: ${err.message}`, err.stack);
        }
    }
};
exports.ApiTransactionsTradesService = ApiTransactionsTradesService;
exports.ApiTransactionsTradesService = ApiTransactionsTradesService = ApiTransactionsTradesService_1 = tslib_1.__decorate([
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
/* 244 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(245), exports);


/***/ }),
/* 245 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransactionsMiddleware = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
let TransactionsMiddleware = class TransactionsMiddleware {
    use(req, res, next) {
        next();
    }
};
exports.TransactionsMiddleware = TransactionsMiddleware;
exports.TransactionsMiddleware = TransactionsMiddleware = tslib_1.__decorate([
    (0, common_1.Injectable)()
], TransactionsMiddleware);


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
exports.ApiWaiversModule = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(38);
const controllers_1 = __webpack_require__(248);
const middlewares_1 = __webpack_require__(252);
const services_1 = __webpack_require__(250);
let ApiWaiversModule = class ApiWaiversModule {
    configure(consumer) {
        consumer.apply(middlewares_1.WaiversMiddleware).forRoutes('*');
    }
};
exports.ApiWaiversModule = ApiWaiversModule;
exports.ApiWaiversModule = ApiWaiversModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entities_1.Waivers_V2, entities_1.Teams_V2])],
        controllers: [controllers_1.WaiversController],
        providers: [services_1.ApiWaiversService],
    })
], ApiWaiversModule);


/***/ }),
/* 248 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(249), exports);


/***/ }),
/* 249 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WaiversController = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
const services_1 = __webpack_require__(250);
let WaiversController = class WaiversController {
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
exports.WaiversController = WaiversController;
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
/* 250 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(251), exports);


/***/ }),
/* 251 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiWaiversService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(38);
const typeorm_2 = __webpack_require__(13);
let ApiWaiversService = class ApiWaiversService {
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
exports.ApiWaiversService = ApiWaiversService;
exports.ApiWaiversService = ApiWaiversService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Waivers_V2)),
    tslib_1.__param(1, (0, typeorm_1.InjectRepository)(entities_1.Teams_V2)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], ApiWaiversService);


/***/ }),
/* 252 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(253), exports);


/***/ }),
/* 253 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WaiversMiddleware = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
let WaiversMiddleware = class WaiversMiddleware {
    use(req, res, next) {
        next();
    }
};
exports.WaiversMiddleware = WaiversMiddleware;
exports.WaiversMiddleware = WaiversMiddleware = tslib_1.__decorate([
    (0, common_1.Injectable)()
], WaiversMiddleware);


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
exports.ApiDivisionsModule = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(38);
const controllers_1 = __webpack_require__(256);
const middlewares_1 = __webpack_require__(260);
const services_1 = __webpack_require__(258);
let ApiDivisionsModule = class ApiDivisionsModule {
    configure(consumer) {
        consumer.apply(middlewares_1.DivisionsMiddleware).forRoutes('*');
    }
};
exports.ApiDivisionsModule = ApiDivisionsModule;
exports.ApiDivisionsModule = ApiDivisionsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entities_1.Divisions_V2])],
        controllers: [controllers_1.DivisionsController],
        providers: [services_1.ApiDivisionsService],
    })
], ApiDivisionsModule);


/***/ }),
/* 256 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(257), exports);


/***/ }),
/* 257 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DivisionsController = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(41);
const common_1 = __webpack_require__(1);
const services_1 = __webpack_require__(258);
let DivisionsController = class DivisionsController {
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
exports.DivisionsController = DivisionsController;
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
/* 258 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(259), exports);


/***/ }),
/* 259 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiDivisionsService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(38);
const typeorm_2 = __webpack_require__(13);
let ApiDivisionsService = class ApiDivisionsService {
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
exports.ApiDivisionsService = ApiDivisionsService;
exports.ApiDivisionsService = ApiDivisionsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Divisions_V2)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ApiDivisionsService);


/***/ }),
/* 260 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(261), exports);


/***/ }),
/* 261 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DivisionsMiddleware = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
let DivisionsMiddleware = class DivisionsMiddleware {
    use(req, res, next) {
        next();
    }
};
exports.DivisionsMiddleware = DivisionsMiddleware;
exports.DivisionsMiddleware = DivisionsMiddleware = tslib_1.__decorate([
    (0, common_1.Injectable)()
], DivisionsMiddleware);


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
exports.ApiGoalieRatingsModule = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(38);
const controllers_1 = __webpack_require__(264);
const middlewares_1 = __webpack_require__(268);
const services_1 = __webpack_require__(266);
let ApiGoalieRatingsModule = class ApiGoalieRatingsModule {
    configure(consumer) {
        consumer.apply(middlewares_1.GoalieRatingsMiddleware).forRoutes('*');
    }
};
exports.ApiGoalieRatingsModule = ApiGoalieRatingsModule;
exports.ApiGoalieRatingsModule = ApiGoalieRatingsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entities_1.Goalie_Ratings_V2, entities_1.Players_V2])],
        controllers: [controllers_1.GoalieRatingsController],
        providers: [services_1.ApiGoalieRatingsService],
    })
], ApiGoalieRatingsModule);


/***/ }),
/* 264 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(265), exports);


/***/ }),
/* 265 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GoalieRatingsController = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
const services_1 = __webpack_require__(266);
let GoalieRatingsController = class GoalieRatingsController {
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
exports.GoalieRatingsController = GoalieRatingsController;
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
/* 266 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(267), exports);


/***/ }),
/* 267 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiGoalieRatingsService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(38);
const typeorm_2 = __webpack_require__(13);
let ApiGoalieRatingsService = class ApiGoalieRatingsService {
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
        if (ratings.length === 0) {
            return [];
        }
        const uniquePlayerIds = Array.from(new Set(ratings
            .map((r) => typeof r.player_id === 'object' && r.player_id !== null
            ? r.player_id.id
            : r.player_id)
            .filter(Boolean)));
        const players = uniquePlayerIds.length
            ? await this.playersRepo.find({
                select: {
                    id: true,
                    firstname: true,
                    lastname: true,
                },
                where: {
                    id: (0, typeorm_2.In)(uniquePlayerIds),
                },
            })
            : [];
        const playerMap = new Map(players.map((p) => [p.id, p]));
        return ratings.map((item) => {
            const pid = typeof item.player_id === 'object' && item.player_id !== null
                ? item.player_id.id
                : item.player_id;
            return {
                ...item,
                playerInfo: playerMap.get(pid) ?? null,
            };
        });
    }
    async updatePlayerById(id, attrs) {
        const player = await this.repo.findOneBy({ id });
        if (!player) {
            throw new common_1.NotFoundException(`Goalie rating with id ${id} not found`);
        }
        Object.assign(player, attrs);
        return this.repo.save(player);
    }
};
exports.ApiGoalieRatingsService = ApiGoalieRatingsService;
exports.ApiGoalieRatingsService = ApiGoalieRatingsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Goalie_Ratings_V2)),
    tslib_1.__param(1, (0, typeorm_1.InjectRepository)(entities_1.Players_V2)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], ApiGoalieRatingsService);


/***/ }),
/* 268 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(269), exports);


/***/ }),
/* 269 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GoalieRatingsMiddleware = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
let GoalieRatingsMiddleware = class GoalieRatingsMiddleware {
    use(req, res, next) {
        next();
    }
};
exports.GoalieRatingsMiddleware = GoalieRatingsMiddleware;
exports.GoalieRatingsMiddleware = GoalieRatingsMiddleware = tslib_1.__decorate([
    (0, common_1.Injectable)()
], GoalieRatingsMiddleware);


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
exports.ApiConferencesModule = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(38);
const controllers_1 = __webpack_require__(272);
const middlewares_1 = __webpack_require__(276);
const services_1 = __webpack_require__(274);
let ApiConferencesModule = class ApiConferencesModule {
    configure(consumer) {
        consumer.apply(middlewares_1.ConferencesMiddleware).forRoutes('*');
    }
};
exports.ApiConferencesModule = ApiConferencesModule;
exports.ApiConferencesModule = ApiConferencesModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entities_1.Conferences_V2])],
        controllers: [controllers_1.ConferencesController],
        providers: [services_1.ApiConferencesService],
    })
], ApiConferencesModule);


/***/ }),
/* 272 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(273), exports);


/***/ }),
/* 273 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConferencesController = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(41);
const common_1 = __webpack_require__(1);
const services_1 = __webpack_require__(274);
let ConferencesController = class ConferencesController {
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
exports.ConferencesController = ConferencesController;
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
/* 274 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(275), exports);


/***/ }),
/* 275 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiConferencesService = void 0;
const tslib_1 = __webpack_require__(5);
const entities_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(38);
const typeorm_2 = __webpack_require__(13);
let ApiConferencesService = class ApiConferencesService {
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
exports.ApiConferencesService = ApiConferencesService;
exports.ApiConferencesService = ApiConferencesService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(entities_1.Conferences_V2)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ApiConferencesService);


/***/ }),
/* 276 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(277), exports);


/***/ }),
/* 277 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConferencesMiddleware = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
let ConferencesMiddleware = class ConferencesMiddleware {
    use(req, res, next) {
        next();
    }
};
exports.ConferencesMiddleware = ConferencesMiddleware;
exports.ConferencesMiddleware = ConferencesMiddleware = tslib_1.__decorate([
    (0, common_1.Injectable)()
], ConferencesMiddleware);


/***/ }),
/* 278 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 279 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
let AppController = class AppController {
    root() {
        return { message: 'Hello world!' };
    }
};
exports.AppController = AppController;
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
/* 280 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
let AppService = class AppService {
    getData() {
        return { message: 'Welcome to cha-server!' };
    }
    getViewName() {
        return 'index.hbs';
    }
};
exports.AppService = AppService;
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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
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
    // console.log(process.env.DATABASE_URL);
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
for(var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;