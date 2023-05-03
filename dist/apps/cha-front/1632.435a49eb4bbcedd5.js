"use strict";(self.webpackChunkcha_front=self.webpackChunkcha_front||[]).push([[1632],{1632:(ge,S,o)=>{o.r(S),o.d(S,{ChaFrontStatsGoalieLeadersModule:()=>le});var L=o(6895),m=o(8235),P=o(1624),G=o(8451),u=o(8776),n=o(9653),h=o(3647),T=o(1365),Z=o(6129),y=o(4004),_=o(262),I=o(9646);const p="[LEAGUE STATS GOALIES]",l={getLeaders:(0,n.PH)(`${p} Get League Leaders`,(0,n.Ky)()),getLeadersSuccess:(0,n.PH)(`${p} Get League Leaders Success`,(0,n.Ky)()),error:(0,n.PH)(`${p} Error`)};var e=o(4650),M=o(529);let F=(()=>{class a{constructor(t,r){this._http=t,this.apiUrl=r}getAllGoalieLeaders(t,r,g){return this._http.get(`${this.apiUrl}/goalie-stats/leaders/${t}/${r}/${g}`).pipe((0,y.U)(i=>i))}}return a.\u0275fac=function(t){return new(t||a)(e.LFG(M.eN),e.LFG("apiUrl"))},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})(),v=(()=>{class a{constructor(t,r,g){this.actions$=t,this.leagueDataFacade=r,this.goaliesStatsService=g,this.getGoalieLeaderStats$=(0,u.GW)(()=>this.actions$.pipe((0,u.l4)(l.getLeaders),(0,T.M)(this.leagueDataFacade.leagueData$),(0,Z.z)(([i,A])=>this.goaliesStatsService.getAllGoalieLeaders(A.current_year,i.seasonType,A.min_games.toString()).pipe((0,y.U)(de=>l.getLeadersSuccess({leaders:de})),(0,_.K)(()=>(0,I.of)(l.error()))))))}}return a.\u0275fac=function(t){return new(t||a)(e.LFG(u.eX),e.LFG(h.Ib),e.LFG(F))},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac}),a})();const $={leaders:null,loading:!1,loaded:!1},U=(0,n.Lq)($,(0,n.on)(l.getLeaders,a=>({...a,loading:!0,loaded:!1})),(0,n.on)(l.getLeadersSuccess,(a,s)=>({...a,leaders:s.leaders,loading:!1,loaded:!0})),(0,n.on)(l.error,a=>$));function Y(a,s){return U(a,s)}const f=(0,n.ZF)("league-stats-goalie"),N=(0,n.P1)(f,a=>a.loading),R=(0,n.P1)(f,a=>a.loaded),d=(0,n.P1)(f,a=>a.leaders),c={selectLoaded:R,selectLoading:N,selectAllLeaders:d,selectShotsFacedLeaders:(0,n.P1)(d,a=>a?a.shotsFaced:[]),selectSavePctLeaders:(0,n.P1)(d,a=>a?a.savePct:[]),selectShutoutsLeaders:(0,n.P1)(d,a=>a?a.shutouts:[]),selectGaaLeaders:(0,n.P1)(d,a=>a?a.gaa:[]),selectWinsLeaders:(0,n.P1)(d,a=>a?a.wins:[])};let C=(()=>{class a{constructor(t){this.store=t,this.isLoading$=this.store.select(c.selectLoading),this.isLoaded$=this.store.select(c.selectLoaded),this.allLeaders$=this.store.select(c.selectAllLeaders),this.winsLeaders$=this.store.select(c.selectWinsLeaders),this.gaaLeaders$=this.store.select(c.selectGaaLeaders),this.savePctLeaders$=this.store.select(c.selectSavePctLeaders),this.shotsFacedLeaders$=this.store.select(c.selectShotsFacedLeaders),this.shutoutsLeaders$=this.store.select(c.selectShutoutsLeaders)}getLeagueTeamStats(t){this.store.dispatch(l.getLeaders({seasonType:t}))}}return a.\u0275fac=function(t){return new(t||a)(e.LFG(n.yh))},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac}),a})();var x=o(1779),K=o(590),W=o(4268),X=o(1270);const V=function(){return{height:"6px"}};function k(a,s){1&a&&e._UZ(0,"p-progressBar",5),2&a&&e.Akn(e.DdM(2,V))}function q(a,s){if(1&a&&(e._UZ(0,"blade-cha-leader-card",10),e.ALo(1,"async")),2&a){const t=e.oxw().ngIf,r=e.oxw(2);e.Q6J("goalieLeaders",t)("type","Goals Against Avg")("minGames",e.lcZ(1,3,r.minGames$))}}function ee(a,s){if(1&a&&(e.ynx(0),e.YNc(1,q,2,5,"blade-cha-leader-card",9),e.BQk()),2&a){const t=s.ngIf;e.xp6(1),e.Q6J("ngIf",t.length>0)}}function ae(a,s){if(1&a&&(e._UZ(0,"blade-cha-leader-card",10),e.ALo(1,"async")),2&a){const t=e.oxw().ngIf,r=e.oxw(2);e.Q6J("goalieLeaders",t)("type","Save Pct")("minGames",e.lcZ(1,3,r.minGames$))}}function te(a,s){if(1&a&&(e.ynx(0),e.YNc(1,ae,2,5,"blade-cha-leader-card",9),e.BQk()),2&a){const t=s.ngIf;e.xp6(1),e.Q6J("ngIf",t.length>0)}}function se(a,s){if(1&a&&e._UZ(0,"blade-cha-leader-card",8),2&a){const t=e.oxw().ngIf;e.Q6J("goalieLeaders",t)("type","shots faced")}}function oe(a,s){if(1&a&&(e.ynx(0),e.YNc(1,se,1,2,"blade-cha-leader-card",11),e.BQk()),2&a){const t=s.ngIf;e.xp6(1),e.Q6J("ngIf",t.length>0)}}function ne(a,s){if(1&a&&(e.ynx(0),e.TgZ(1,"div",6)(2,"div",7),e._UZ(3,"blade-cha-leader-card",8),e.ALo(4,"async"),e.YNc(5,ee,2,1,"ng-container",4),e.ALo(6,"async"),e.YNc(7,te,2,1,"ng-container",4),e.ALo(8,"async"),e.qZA(),e.TgZ(9,"div",7),e.YNc(10,oe,2,1,"ng-container",4),e.ALo(11,"async"),e._UZ(12,"blade-cha-leader-card",8),e.ALo(13,"async"),e.qZA()(),e.BQk()),2&a){const t=e.oxw();e.xp6(3),e.Q6J("goalieLeaders",e.lcZ(4,7,t.winsLeaders$))("type","wins"),e.xp6(2),e.Q6J("ngIf",e.lcZ(6,9,t.gaaLeaders$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(8,11,t.savePctLeaders$)),e.xp6(3),e.Q6J("ngIf",e.lcZ(11,13,t.shotsFacedLeaders$)),e.xp6(2),e.Q6J("goalieLeaders",e.lcZ(13,15,t.shutoutLeaders$))("type","shutouts")}}const re=[{path:"",component:(()=>{class a{constructor(t,r,g){this.leagueStatsGoalieFacade=t,this.leagueDataFacade=r,this.userTeamFacade=g,this.selectSeasonOptions=[{label:"Regular",value:"Regular"},{label:"Playoffs",value:"Playoffs",disabled:!1}],this.isLoaded$=this.leagueStatsGoalieFacade.isLoaded$,this.isLoading$=this.leagueStatsGoalieFacade.isLoading$,this.winsLeaders$=this.leagueStatsGoalieFacade.winsLeaders$,this.gaaLeaders$=this.leagueStatsGoalieFacade.gaaLeaders$,this.savePctLeaders$=this.leagueStatsGoalieFacade.savePctLeaders$,this.shotsFacedLeaders$=this.leagueStatsGoalieFacade.shotsFacedLeaders$,this.shutoutLeaders$=this.leagueStatsGoalieFacade.shutoutsLeaders$,this.minGames$=this.leagueDataFacade.minGames$,this.currentTeam$=this.userTeamFacade.currentUserTeam$,this.currentTeam$.pipe((0,K.P)()).subscribe(i=>{i&&(this.backgroundColor=i.teamcolor)})}ngOnInit(){this.leagueStatsGoalieFacade.getLeagueTeamStats("Regular")}onSeasonOptionChanged(t){this.leagueStatsGoalieFacade.getLeagueTeamStats(t)}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(C),e.Y36(h.Ib),e.Y36(h.Qe))},a.\u0275cmp=e.Xpm({type:a,selectors:[["cha-front-stats-goalie-leaders"]],decls:8,vars:10,consts:[[3,"backgroundColor"],[1,"league-stats-goalies"],["mode","indeterminate",3,"style",4,"ngIf"],[1,"flex","justify-content-center",3,"options","optionChanged"],[4,"ngIf"],["mode","indeterminate"],[1,"league-stats-goalies-section"],[1,"league-stats-goalies-section-body"],[3,"goalieLeaders","type"],[3,"goalieLeaders","type","minGames",4,"ngIf"],[3,"goalieLeaders","type","minGames"],[3,"goalieLeaders","type",4,"ngIf"]],template:function(t,r){1&t&&(e.TgZ(0,"blade-layout-feature-content",0),e.ALo(1,"async"),e.TgZ(2,"div",1),e.YNc(3,k,1,3,"p-progressBar",2),e.ALo(4,"async"),e.TgZ(5,"blade-button-select",3),e.NdJ("optionChanged",function(i){return r.onSeasonOptionChanged(i)}),e.qZA(),e.YNc(6,ne,14,17,"ng-container",4),e.ALo(7,"async"),e.qZA()()),2&t&&(e.Q6J("backgroundColor",e.lcZ(1,4,r.currentTeam$)?r.backgroundColor:null),e.xp6(3),e.Q6J("ngIf",e.lcZ(4,6,r.isLoading$)),e.xp6(2),e.Q6J("options",r.selectSeasonOptions),e.xp6(1),e.Q6J("ngIf",e.lcZ(7,8,r.isLoaded$)))},dependencies:[L.O5,m.k,W.R,G.u,X.o,L.Ov],styles:[".league-stats-goalies[_ngcontent-%COMP%]{display:grid;padding:20px;grid-row-gap:20px;height:100%;width:100%}.league-stats-goalies-section[_ngcontent-%COMP%]{display:grid;grid-row-gap:20px}.league-stats-goalies-section-body[_ngcontent-%COMP%]{display:grid;grid-row-gap:20px;justify-content:space-between;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));grid-column-gap:15px;height:100%}"],changeDetection:0}),a})()}];let ce=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[x.Bz.forChild(re),x.Bz]}),a})();var ie=o(7308);let le=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({providers:[F,v,C],imports:[L.ez,ce,m.q,P.E,G.u,ie.o,n.Aw.forFeature("league-stats-goalie",Y),u.sQ.forFeature([v])]}),a})()}}]);