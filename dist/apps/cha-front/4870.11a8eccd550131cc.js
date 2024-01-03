"use strict";(self.webpackChunkcha_front=self.webpackChunkcha_front||[]).push([[4870],{1867:(O,v,l)=>{l.d(v,{o:()=>_.o});var _=l(2182)},2182:(O,v,l)=>{l.d(v,{o:()=>Z});var f,_=l(7582),p=l(5879),i=l(6814),u=l(95),S=l(6128),x=l(1791),U=l(3997);let Z=((f=class{constructor(){this.optionChanged=new p.vpe,this.optionSelected=new u.p4}onOptionClick(g){this.optionSelected.setValue(g.option.value)}ngOnInit(){this.optionSelected.valueChanges.pipe((0,U.x)(),(0,x.t)(this)).subscribe(g=>{this.optionChanged.emit(g)})}ngAfterViewInit(){this.optionSelected.setValue(this.index?this.options[this.index].value:this.options[0].value)}}).\u0275fac=function(g){return new(g||f)},f.\u0275cmp=p.Xpm({type:f,selectors:[["blade-button-select"]],inputs:{options:"options",index:"index"},outputs:{optionChanged:"optionChanged"},standalone:!0,features:[p.jDz],decls:1,vars:2,consts:[["optionLabel","label","optionValue","value",3,"options","formControl","onOptionClick"]],template:function(g,c){1&g&&(p.TgZ(0,"p-selectButton",0),p.NdJ("onOptionClick",function(m){return c.onOptionClick(m)}),p.qZA()),2&g&&p.Q6J("options",c.options)("formControl",c.optionSelected)},dependencies:[i.ez,u.UX,u.JJ,u.oH,S.Qy,S.UN],encapsulation:2,changeDetection:0}),f);Z=(0,_.gn)([(0,x.c)()],Z)},4870:(O,v,l)=>{l.r(v),l.d(v,{ChaFrontStatsTeamAllModule:()=>ne});var _=l(6814),p=l(8131),i=l(3423),u=l(6651),S=l(9287),x=l(8039),U=l(9246),f=l(707),Z=l(2321),w=l(1867),g=l(3757),c=l(9821),r=l(2490),m=l(2460),d=l(7634),T=l(7398),F=l(6306),M=l(2096);const E="[STATS TEAM ALL]",C={getAll:(0,i.PH)(`${E} Get All`,(0,i.Ky)()),getAllSuccess:(0,i.PH)(`${E} Get All Success`,(0,i.Ky)()),error:(0,i.PH)(`${E} Error`)};var t=l(5879),j=l(9862);let D=(()=>{var e;class n{constructor(o,s){this._http=o,this.apiUrl=s}getAllTeamStats(o,s){return this._http.get(`${this.apiUrl}/team-stats/all/${o}/${s}`).pipe((0,T.U)(A=>A))}}return(e=n).\u0275fac=function(o){return new(o||e)(t.LFG(j.eN),t.LFG("apiUrl"))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),n})(),P=(()=>{var e;class n{constructor(o,s,A){this.actions$=o,this.leagueDataFacade=s,this.teamStatsService=A,this.getAllTeamStats$=(0,p.GW)(()=>this.actions$.pipe((0,p.l4)(C.getAll),(0,m.M)(this.leagueDataFacade.leagueData$),(0,d.z)(([b,N])=>this.teamStatsService.getAllTeamStats(N.offseason?N.prev_year:N.current_year,b.season).pipe((0,T.U)(se=>C.getAllSuccess({stats:se})),(0,F.K)(()=>(0,M.of)(C.error()))))))}}return(e=n).\u0275fac=function(o){return new(o||e)(t.LFG(p.eX),t.LFG(r.Ib),t.LFG(D))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),n})();const q={stats:[],loading:!1,loaded:!1},G=(0,i.Lq)(q,(0,i.on)(C.getAll,e=>({...e,loading:!0,loaded:!1})),(0,i.on)(C.getAllSuccess,(e,n)=>({...e,stats:n.stats,loading:!1,loaded:!0})),(0,i.on)(C.error,e=>q));function R(e,n){return G(e,n)}var Q=l(4233);const $=(0,i.ZF)("stats-team-all"),X=(0,i.P1)($,e=>e.loading),V=(0,i.P1)($,e=>e.loaded),y=(0,i.P1)($,e=>e.stats),tt=(0,i.P1)(y,e=>e.filter(n=>n.division.conference_id.id===Q.Fl.WESTERN)),et=(0,i.P1)(y,e=>e.filter(n=>n.division.conference_id.id===Q.Fl.EASTERN)),at=(0,i.P1)(y,e=>e.filter(n=>n.team_id.divisions_id.id===Q.gt.NORTH_WEST)),nt=(0,i.P1)(y,e=>e.filter(n=>n.team_id.divisions_id.id===Q.gt.SOUTH_WEST)),h={selectLoaded:V,selectLoading:X,selectAll:y,selectWesternTeams:tt,selectEasternTeams:et,selectNorthWesternTeams:at,selectNorthEasternTeams:(0,i.P1)(y,e=>e.filter(n=>n.team_id.divisions_id.id===Q.gt.NORTH_EAST)),selectSouthWesternTeams:nt,selectSouthEasternTeams:(0,i.P1)(y,e=>e.filter(n=>n.team_id.divisions_id.id===Q.gt.SOUTH_EAST))};let I=(()=>{var e;class n{constructor(o){this.store=o,this.isLoading$=this.store.select(h.selectLoading),this.isLoaded$=this.store.select(h.selectLoaded),this.allStats$=this.store.select(h.selectAll),this.westernStats$=this.store.select(h.selectWesternTeams),this.easternStats$=this.store.select(h.selectEasternTeams),this.northWesternStats$=this.store.select(h.selectNorthWesternTeams),this.northEasternStats$=this.store.select(h.selectNorthEasternTeams),this.southWesternStats$=this.store.select(h.selectSouthWesternTeams),this.southEasternStats$=this.store.select(h.selectSouthEasternTeams)}getAllTeamStats(o){this.store.dispatch(C.getAll({season:o}))}}return(e=n).\u0275fac=function(o){return new(o||e)(t.LFG(i.yh))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),n})();var L=l(9775),B=l(1374),it=l(7169),lt=l(2182),ct=l(5155),_t=l(4876),rt=l(5219);let mt=(()=>{var e;class n{getString(o){const s=o.split("/");return`assets/${s[s.length-1]}`}}return(e=n).\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["cha-front-stats-team-all-sidebar"]],inputs:{teamStats:"teamStats"},decls:102,vars:29,consts:[[1,"flex","align-items-center","column-gap-3"],["shape","circle","size","xlarge",3,"image"],[1,"text-xl","font-light"],[1,"text-md",2,"font-weight","100"],[1,"text-md","font-light","flex","justify-content-between"],[1,"text-right",2,"font-weight","100"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"p-avatar",1),t.TgZ(2,"div")(3,"div",2),t._uU(4),t.qZA(),t.TgZ(5,"div",3)(6,"i"),t._uU(7),t.qZA()()()(),t._UZ(8,"blade-divider"),t.TgZ(9,"div",4)(10,"div")(11,"div"),t._uU(12,"Games Played:"),t.qZA(),t.TgZ(13,"div"),t._uU(14,"Wins:"),t.qZA(),t.TgZ(15,"div"),t._uU(16,"Loss:"),t.qZA(),t.TgZ(17,"div"),t._uU(18,"Ties:"),t.qZA(),t.TgZ(19,"div"),t._uU(20,"Points:"),t.qZA(),t.TgZ(21,"div"),t._uU(22,"Goals For:"),t.qZA(),t.TgZ(23,"div"),t._uU(24,"Goals For Per Game:"),t.qZA(),t.TgZ(25,"div"),t._uU(26,"Goals Against:"),t.qZA(),t.TgZ(27,"div"),t._uU(28,"Goals Against Per Game:"),t.qZA(),t.TgZ(29,"div"),t._uU(30,"Goal Differential:"),t.qZA(),t.TgZ(31,"div"),t._uU(32,"Win Pct:"),t.qZA(),t.TgZ(33,"div"),t._uU(34,"Power Play Pct:"),t.qZA(),t.TgZ(35,"div"),t._uU(36,"Penalty Kill Pct:"),t.qZA(),t.TgZ(37,"div"),t._uU(38,"Penalty Minutes Per Game:"),t.qZA(),t.TgZ(39,"div"),t._uU(40,"Division Record:"),t.qZA(),t.TgZ(41,"div"),t._uU(42,"Home Record:"),t.qZA(),t.TgZ(43,"div"),t._uU(44,"Away Record:"),t.qZA(),t.TgZ(45,"div"),t._uU(46,"Trailing After 2nd Period Record:"),t.qZA()(),t.TgZ(47,"div",5)(48,"div")(49,"i"),t._uU(50),t.qZA()(),t.TgZ(51,"div")(52,"i"),t._uU(53),t.qZA()(),t.TgZ(54,"div")(55,"i"),t._uU(56),t.qZA()(),t.TgZ(57,"div")(58,"i"),t._uU(59),t.qZA()(),t.TgZ(60,"div")(61,"i"),t._uU(62),t.qZA()(),t.TgZ(63,"div")(64,"i"),t._uU(65),t.qZA()(),t.TgZ(66,"div")(67,"i"),t._uU(68),t.qZA()(),t.TgZ(69,"div")(70,"i"),t._uU(71),t.qZA()(),t.TgZ(72,"div")(73,"i"),t._uU(74),t.qZA()(),t.TgZ(75,"div")(76,"i"),t._uU(77),t.qZA()(),t.TgZ(78,"div")(79,"i"),t._uU(80),t.qZA()(),t.TgZ(81,"div")(82,"i"),t._uU(83),t.qZA()(),t.TgZ(84,"div")(85,"i"),t._uU(86),t.qZA()(),t.TgZ(87,"div")(88,"i"),t._uU(89),t.qZA()(),t.TgZ(90,"div")(91,"i"),t._uU(92),t.qZA()(),t.TgZ(93,"div")(94,"i"),t._uU(95),t.qZA()(),t.TgZ(96,"div")(97,"i"),t._uU(98),t.qZA()(),t.TgZ(99,"div")(100,"i"),t._uU(101),t.qZA()()()()),2&o&&(t.xp6(1),t.Q6J("image",s.teamStats.teamLogo),t.xp6(3),t.hij(" ",s.teamStats.team_id.city," "),t.xp6(3),t.Oqu(s.teamStats.team_id.nickname),t.xp6(43),t.Oqu(s.teamStats.games_played),t.xp6(3),t.Oqu(s.teamStats.wins),t.xp6(3),t.Oqu(s.teamStats.loss),t.xp6(3),t.Oqu(s.teamStats.ties),t.xp6(3),t.Oqu(s.teamStats.points),t.xp6(3),t.Oqu(s.teamStats.goals_for),t.xp6(3),t.Oqu((s.teamStats.goals_for/s.teamStats.games_played).toFixed(2)),t.xp6(3),t.Oqu(s.teamStats.goals_against),t.xp6(3),t.Oqu((s.teamStats.goals_against/s.teamStats.games_played).toFixed(2)),t.xp6(3),t.Oqu(s.teamStats.goals_for-s.teamStats.goals_against),t.xp6(3),t.hij("",(s.teamStats.wins/s.teamStats.games_played*100).toFixed(1),"%"),t.xp6(3),t.hij("",(s.teamStats.pp_goals/s.teamStats.pp_attempts*100).toFixed(1),"%"),t.xp6(3),t.hij("",((s.teamStats.pk_attempts-s.teamStats.pk_goals)/s.teamStats.pk_attempts*100).toFixed(1),"%"),t.xp6(3),t.Oqu((s.teamStats.penalty_minutes/s.teamStats.games_played).toFixed(1)),t.xp6(3),t.lnq("",s.teamStats.div_win," - ",s.teamStats.div_loss," - ",s.teamStats.div_tie,""),t.xp6(3),t.lnq("",s.teamStats.home_wins," - ",s.teamStats.home_loss," - ",s.teamStats.home_ties,""),t.xp6(3),t.lnq("",s.teamStats.road_wins," - ",s.teamStats.road_loss," - ",s.teamStats.road_ties,""),t.xp6(3),t.lnq("",s.teamStats.trail_after_two_wins," - ",s.teamStats.trail_after_two_loss," - ",s.teamStats.trail_after_two_ties,""))},dependencies:[x.q,g.C],changeDetection:0}),n})();function pt(e,n){1&e&&t.GkF(0)}function gt(e,n){if(1&e&&(t.TgZ(0,"th"),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.hij(" ",a.header," ")}}function dt(e,n){if(1&e&&(t.TgZ(0,"tr"),t.YNc(1,gt,2,1,"th",8),t.qZA()),2&e){const a=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",a.mobileTeamsTableColumns)}}function ft(e,n){if(1&e&&(t.TgZ(0,"th"),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.hij(" ",a.header," ")}}function ut(e,n){if(1&e&&(t.TgZ(0,"tr"),t.YNc(1,ft,2,1,"th",8),t.qZA()),2&e){const a=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",a.teamsTableColumns)}}function Tt(e,n){if(1&e&&(t.YNc(0,pt,1,0,"ng-container",5),t.YNc(1,dt,2,1,"ng-template",null,6,t.W1O),t.YNc(3,ut,2,1,"ng-template",null,7,t.W1O)),2&e){const a=t.MAs(2),o=t.MAs(4),s=t.oxw();t.Q6J("ngIf",s.isMobile)("ngIfThen",a)("ngIfElse",o)}}function ht(e,n){1&e&&t.GkF(0)}function At(e,n){if(1&e&&(t.ynx(0),t._UZ(1,"img",13),t._uU(2),t.BQk()),2&e){const a=t.oxw(3).$implicit;t.xp6(1),t.Q6J("src",a.teamLogo,t.LSH),t.xp6(1),t.hij(" ",a.team_id.city+" "+a.team_id.nickname," ")}}function vt(e,n){if(1&e){const a=t.EpF();t.ynx(0),t.TgZ(1,"button",14),t.NdJ("click",function(){t.CHM(a);const s=t.oxw(3).$implicit,A=t.oxw();return t.KtG(A.onTeamClick(s))}),t.qZA(),t.BQk()}}function St(e,n){if(1&e&&(t.TgZ(0,"td")(1,"span",11),t._uU(2),t.qZA(),t.TgZ(3,"div",12),t.YNc(4,At,3,2,"ng-container",4),t.ynx(5),t._uU(6),t.BQk(),t.YNc(7,vt,2,0,"ng-container",4),t.qZA()()),2&e){const a=n.$implicit,o=t.oxw(2).$implicit;t.xp6(2),t.Oqu(a.header),t.xp6(2),t.Q6J("ngIf","team"===a.field),t.xp6(2),t.Oqu(o[a.field]),t.xp6(1),t.Q6J("ngIf","action"===a.field)}}function xt(e,n){if(1&e&&(t.TgZ(0,"tr"),t.YNc(1,St,8,4,"td",8),t.qZA()),2&e){const a=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",a.mobileTeamsTableColumns)}}function Zt(e,n){if(1&e&&(t.ynx(0),t._uU(1),t.BQk()),2&e){const a=t.oxw(4).$implicit;t.xp6(1),t.hij(" ",a.team_id.city+" "+a.team_id.nickname," ")}}function Ct(e,n){if(1&e&&(t.ynx(0),t._UZ(1,"img",13),t.YNc(2,Zt,2,1,"ng-container",4),t.BQk()),2&e){const a=t.oxw(3).$implicit,o=t.oxw();t.xp6(1),t.Q6J("src",a.teamLogo,t.LSH),t.xp6(1),t.Q6J("ngIf",!o.isMobile)}}function yt(e,n){if(1&e&&(t.ynx(0),t._uU(1),t.BQk()),2&e){const a=t.oxw(3).$implicit;t.xp6(1),t.hij(" ",(a.goals_for/a.games_played).toFixed(2)," ")}}function bt(e,n){if(1&e&&(t.ynx(0),t._uU(1),t.BQk()),2&e){const a=t.oxw(3).$implicit;t.xp6(1),t.hij(" ",(a.goals_against/a.games_played).toFixed(2)," ")}}function Ut(e,n){if(1&e&&(t.ynx(0),t._uU(1),t.BQk()),2&e){const a=t.oxw(3).$implicit;t.xp6(1),t.hij(" ",a.goals_for-a.goals_against," ")}}function wt(e,n){if(1&e&&(t.ynx(0),t._uU(1),t.BQk()),2&e){const a=t.oxw(3).$implicit;t.xp6(1),t.hij(" ",(a.wins/a.games_played*100).toFixed(1),"% ")}}function Qt(e,n){if(1&e&&(t.ynx(0),t._uU(1),t.BQk()),2&e){const a=t.oxw(3).$implicit;t.xp6(1),t.hij(" ",(a.pp_goals/a.pp_attempts*100).toFixed(1),"% ")}}function Ft(e,n){if(1&e&&(t.ynx(0),t._uU(1),t.BQk()),2&e){const a=t.oxw(3).$implicit;t.xp6(1),t.hij(" ",((a.pk_attempts-a.pk_goals)/a.pk_attempts*100).toFixed(1),"% ")}}function It(e,n){if(1&e&&(t.ynx(0),t._uU(1),t.BQk()),2&e){const a=t.oxw(3).$implicit;t.xp6(1),t.hij(" ",(a.penalty_minutes/a.games_played).toFixed(1)," ")}}function Ot(e,n){if(1&e&&(t.ynx(0),t._uU(1),t.BQk()),2&e){const a=t.oxw(3).$implicit;t.xp6(1),t.lnq(" ",a.div_win,"-",a.div_loss,"-",a.div_tie," ")}}function Et(e,n){if(1&e&&(t.ynx(0),t._uU(1),t.BQk()),2&e){const a=t.oxw(3).$implicit;t.xp6(1),t.lnq(" ",a.home_wins,"-",a.home_loss,"-",a.home_ties," ")}}function $t(e,n){if(1&e&&(t.ynx(0),t._uU(1),t.BQk()),2&e){const a=t.oxw(3).$implicit;t.xp6(1),t.lnq(" ",a.road_wins,"-",a.road_loss,"-",a.road_ties," ")}}function Jt(e,n){if(1&e&&(t.ynx(0),t._uU(1),t.BQk()),2&e){const a=t.oxw(3).$implicit;t.xp6(1),t.lnq(" ",a.trail_after_two_wins,"-",a.trail_after_two_loss,"-",a.trail_after_two_ties," ")}}function Nt(e,n){if(1&e&&(t.TgZ(0,"td")(1,"span",11),t._uU(2),t.qZA(),t.TgZ(3,"div",12),t.YNc(4,Ct,3,2,"ng-container",4),t.YNc(5,yt,2,1,"ng-container",4),t.YNc(6,bt,2,1,"ng-container",4),t.YNc(7,Ut,2,1,"ng-container",4),t.YNc(8,wt,2,1,"ng-container",4),t.YNc(9,Qt,2,1,"ng-container",4),t.YNc(10,Ft,2,1,"ng-container",4),t.YNc(11,It,2,1,"ng-container",4),t.YNc(12,Ot,2,3,"ng-container",4),t.YNc(13,Et,2,3,"ng-container",4),t.YNc(14,$t,2,3,"ng-container",4),t.YNc(15,Jt,2,3,"ng-container",4),t.ynx(16),t._uU(17),t.BQk(),t.qZA()()),2&e){const a=n.$implicit,o=t.oxw(2).$implicit;t.xp6(2),t.Oqu(a.header),t.xp6(2),t.Q6J("ngIf","team"===a.field),t.xp6(1),t.Q6J("ngIf","goals_for_per_game"===a.field),t.xp6(1),t.Q6J("ngIf","goals_against_per_game"===a.field),t.xp6(1),t.Q6J("ngIf","goal_diff"===a.field),t.xp6(1),t.Q6J("ngIf","win_efficiency"===a.field),t.xp6(1),t.Q6J("ngIf","pp_efficiency"===a.field),t.xp6(1),t.Q6J("ngIf","pk_efficiency"===a.field),t.xp6(1),t.Q6J("ngIf","pim_per_game"===a.field),t.xp6(1),t.Q6J("ngIf","div_record"===a.field),t.xp6(1),t.Q6J("ngIf","home_record"===a.field),t.xp6(1),t.Q6J("ngIf","away_recond"===a.field),t.xp6(1),t.Q6J("ngIf","trailing_record"===a.field),t.xp6(2),t.Oqu(o[a.field])}}function Dt(e,n){if(1&e&&(t.TgZ(0,"tr"),t.YNc(1,Nt,18,14,"td",8),t.qZA()),2&e){const a=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",a.teamsTableColumns)}}function Pt(e,n){if(1&e&&(t.YNc(0,ht,1,0,"ng-container",5),t.YNc(1,xt,2,1,"ng-template",null,9,t.W1O),t.YNc(3,Dt,2,1,"ng-template",null,10,t.W1O)),2&e){const a=t.MAs(2),o=t.MAs(4),s=t.oxw();t.Q6J("ngIf",s.isMobile)("ngIfThen",a)("ngIfElse",o)}}function qt(e,n){if(1&e&&(t.ynx(0),t._UZ(1,"cha-front-stats-team-all-sidebar",15),t.BQk()),2&e){const a=n.ngIf;t.xp6(1),t.Q6J("teamStats",a)}}let J=(()=>{var e;class n{constructor(o){this.displayFacade=o,this.teamsTableColumns=[{field:"team",header:"Team"},{field:"games_played",header:"GP"},{field:"wins",header:"W"},{field:"loss",header:"L"},{field:"ties",header:"T"},{field:"points",header:"Pts"},{field:"goals_for",header:"GF"},{field:"goals_for_per_game",header:"GF/g"},{field:"goals_against",header:"GA"},{field:"goals_against_per_game",header:"GA/g"},{field:"goal_diff",header:"Goal Diff"},{field:"win_efficiency",header:"Win%"},{field:"pp_efficiency",header:"PP%"},{field:"pk_efficiency",header:"PK%"},{field:"pim_per_game",header:"PIM/g"},{field:"div_record",header:"Division"},{field:"home_record",header:"Home"},{field:"away_recond",header:"Away"},{field:"trailing_record",header:"Trailing After 2"}],this.mobileTeamsTableColumns=[{field:"team",header:"Team"},{field:"points",header:"Pts"},{field:"action",header:"...More"}],this.sortField="points",this.isMobile=!1,this.display=!1,this.displayFacade.isMobile$.pipe((0,B.P)()).subscribe(s=>{this.isMobile=s})}ngOnInit(){this.stats=this.mapItems(this.stats).sort((o,s)=>Number(s.points)-Number(o.points))}getString(o){const s=o.split("/");return`assets/${s[s.length-1]}`}mapItems(o){return o.map(s=>({...s,teamLogo:this.getString(s.team_id.teamlogo)}))}onTeamClick(o){this.teamStats=o,this.display=!0}}return(e=n).\u0275fac=function(o){return new(o||e)(t.Y36(r.pC))},e.\u0275cmp=t.Xpm({type:e,selectors:[["cha-front-stats-team-all-table"]],inputs:{stats:"stats"},decls:5,vars:6,consts:[["styleClass","p-datatable-sm p-datatable-striped",1,"table",3,"responsiveLayout","value","columns"],["pTemplate","header"],["pTemplate","body"],[3,"visible","fullScreen","visibleChange"],[4,"ngIf"],[4,"ngIf","ngIfThen","ngIfElse"],["showMobile",""],["showDesktop",""],[4,"ngFor","ngForOf"],["showMobileBody",""],["showDesktopBody",""],[1,"p-column-title"],[1,"table-body-cell"],["height","30px",3,"src"],["pButton","","type","button","icon","pi pi-window-maximize",1,"p-button-rounded","p-button-info",3,"click"],[3,"teamStats"]],template:function(o,s){1&o&&(t.TgZ(0,"p-table",0),t.YNc(1,Tt,5,3,"ng-template",1),t.YNc(2,Pt,5,3,"ng-template",2),t.qZA(),t.TgZ(3,"p-sidebar",3),t.NdJ("visibleChange",function(b){return s.display=b}),t.YNc(4,qt,2,1,"ng-container",4),t.qZA()),2&o&&(t.Q6J("responsiveLayout","stack")("value",s.stats)("columns",s.isMobile?s.mobileTeamsTableColumns:s.teamsTableColumns),t.xp6(3),t.Q6J("visible",s.display)("fullScreen",!0),t.xp6(1),t.Q6J("ngIf",s.teamStats))},dependencies:[_.sg,_.O5,S.iA,rt.jx,U.Y,f.Hq,mt],styles:[".table[_ngcontent-%COMP%]{height:100%}.table-body-cell[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.header-flex[_ngcontent-%COMP%]{display:flex;justify-content:space-between}"],changeDetection:0}),n})();function Lt(e,n){if(1&e&&(t.ynx(0),t._UZ(1,"cha-front-stats-team-all-table",6),t.BQk()),2&e){const a=n.ngIf;t.xp6(1),t.Q6J("stats",a)}}function Bt(e,n){if(1&e&&(t.ynx(0),t._UZ(1,"cha-front-stats-team-all-table",6),t.BQk()),2&e){const a=n.ngIf;t.xp6(1),t.Q6J("stats",a)}}let Mt=(()=>{var e;class n{constructor(o){this.statsTeamAllFacade=o,this.westernStats$=this.statsTeamAllFacade.westernStats$,this.easternStats$=this.statsTeamAllFacade.easternStats$}}return(e=n).\u0275fac=function(o){return new(o||e)(t.Y36(I))},e.\u0275cmp=t.Xpm({type:e,selectors:[["cha-front-stats-team-all-conference"]],decls:11,vars:6,consts:[[1,"flex","flex-wrap","row-gap-5"],[1,"w-full"],[1,"p-2","text-lg",2,"font-weight","100"],[4,"ngIf"],[1,"w-full","text-lg",2,"font-weight","100"],[1,"p-2"],[3,"stats"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._uU(3,"Western Conference"),t.qZA(),t.YNc(4,Lt,2,1,"ng-container",3),t.ALo(5,"async"),t.qZA(),t.TgZ(6,"div",4)(7,"div",5),t._uU(8,"Eastern Conference"),t.qZA(),t.YNc(9,Bt,2,1,"ng-container",3),t.ALo(10,"async"),t.qZA()()),2&o&&(t.xp6(4),t.Q6J("ngIf",t.lcZ(5,2,s.westernStats$)),t.xp6(5),t.Q6J("ngIf",t.lcZ(10,4,s.easternStats$)))},dependencies:[_.O5,J,_.Ov],changeDetection:0}),n})();function Yt(e,n){if(1&e&&(t.ynx(0),t._UZ(1,"cha-front-stats-team-all-table",6),t.BQk()),2&e){const a=n.ngIf;t.xp6(1),t.Q6J("stats",a)}}function Wt(e,n){if(1&e&&(t.ynx(0),t._UZ(1,"cha-front-stats-team-all-table",6),t.BQk()),2&e){const a=n.ngIf;t.xp6(1),t.Q6J("stats",a)}}function kt(e,n){if(1&e&&(t.ynx(0),t._UZ(1,"cha-front-stats-team-all-table",6),t.BQk()),2&e){const a=n.ngIf;t.xp6(1),t.Q6J("stats",a)}}function jt(e,n){if(1&e&&(t.ynx(0),t._UZ(1,"cha-front-stats-team-all-table",6),t.BQk()),2&e){const a=n.ngIf;t.xp6(1),t.Q6J("stats",a)}}let Gt=(()=>{var e;class n{constructor(o){this.statsTeamAllFacade=o,this.northWestStats$=this.statsTeamAllFacade.northWesternStats$,this.southWestStats$=this.statsTeamAllFacade.southWesternStats$,this.northEastStats$=this.statsTeamAllFacade.northEasternStats$,this.southEastStats$=this.statsTeamAllFacade.southEasternStats$}}return(e=n).\u0275fac=function(o){return new(o||e)(t.Y36(I))},e.\u0275cmp=t.Xpm({type:e,selectors:[["cha-front-stats-team-all-divisions"]],decls:21,vars:12,consts:[[1,"flex","flex-wrap","row-gap-5"],[1,"w-full"],[1,"p-2","text-lg",2,"font-weight","100"],[4,"ngIf"],[1,"w-full","text-lg",2,"font-weight","100"],[1,"p-2"],[3,"stats"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._uU(3,"North West Division"),t.qZA(),t.YNc(4,Yt,2,1,"ng-container",3),t.ALo(5,"async"),t.qZA(),t.TgZ(6,"div",1)(7,"div",2),t._uU(8,"South West Division"),t.qZA(),t.YNc(9,Wt,2,1,"ng-container",3),t.ALo(10,"async"),t.qZA(),t.TgZ(11,"div",4)(12,"div",5),t._uU(13,"North East Division"),t.qZA(),t.YNc(14,kt,2,1,"ng-container",3),t.ALo(15,"async"),t.qZA(),t.TgZ(16,"div",4)(17,"div",5),t._uU(18,"South East Division"),t.qZA(),t.YNc(19,jt,2,1,"ng-container",3),t.ALo(20,"async"),t.qZA()()),2&o&&(t.xp6(4),t.Q6J("ngIf",t.lcZ(5,4,s.northWestStats$)),t.xp6(5),t.Q6J("ngIf",t.lcZ(10,6,s.southWestStats$)),t.xp6(5),t.Q6J("ngIf",t.lcZ(15,8,s.northEastStats$)),t.xp6(5),t.Q6J("ngIf",t.lcZ(20,10,s.southEastStats$)))},dependencies:[_.O5,J,_.Ov],changeDetection:0}),n})();const Rt=function(){return{height:"6px"}};function zt(e,n){1&e&&t._UZ(0,"p-progressBar",6),2&e&&t.Akn(t.DdM(2,Rt))}function Ht(e,n){if(1&e&&(t.ynx(0),t._UZ(1,"cha-front-stats-team-all-table",7),t.BQk()),2&e){const a=n.ngIf;t.xp6(1),t.Q6J("stats",a)}}function Kt(e,n){if(1&e&&(t.ynx(0),t.YNc(1,Ht,2,1,"ng-container",5),t.ALo(2,"async"),t.BQk()),2&e){const a=t.oxw(2);t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,a.teamStats$))}}function Xt(e,n){1&e&&(t.ynx(0),t._UZ(1,"cha-front-stats-team-all-conference"),t.BQk())}function Vt(e,n){1&e&&(t.ynx(0),t._UZ(1,"cha-front-stats-team-all-divisions"),t.BQk())}function te(e,n){if(1&e&&(t.TgZ(0,"blade-card")(1,"blade-card-body"),t.YNc(2,Kt,3,3,"ng-container",5),t.YNc(3,Xt,2,0,"ng-container",5),t.YNc(4,Vt,2,0,"ng-container",5),t.qZA()()),2&e){const a=t.oxw();t.xp6(2),t.Q6J("ngIf",a.showLeague),t.xp6(1),t.Q6J("ngIf",a.showConference),t.xp6(1),t.Q6J("ngIf",a.showDivisions)}}const ee=[{path:"",component:(()=>{var e;class n{constructor(o,s){this.statsTeamAllFacade=o,this.leagueDataFacade=s,this.showLeague=!0,this.showConference=!1,this.showDivisions=!1,this.selectOptions=[{label:"League",value:"league"},{label:"Conference",value:"conference"},{label:"Divisions",value:"divisions"}],this.selectSeasonOptions=[{label:"Regular",value:"Regular"},{label:"Playoffs",value:"Playoffs",disabled:!1}],this.isLoaded$=this.statsTeamAllFacade.isLoaded$,this.isLoading$=this.statsTeamAllFacade.isLoading$,this.teamStats$=this.statsTeamAllFacade.allStats$,this.leagueDataFacade.isOffSeason$.pipe((0,B.P)()).subscribe(A=>{this.selectSeasonOptions=[{label:"Regular",value:"Regular"},{label:"Playoffs",value:"Playoffs",disabled:!0}]})}ngOnInit(){this.statsTeamAllFacade.getAllTeamStats("Regular")}onSeasonOptionChanged(o){this.statsTeamAllFacade.getAllTeamStats(o)}onOptionChanged(o){switch(o){case"league":this.setLeague();break;case"conference":this.setConference();break;case"divisions":this.setDivisions();break;default:return}}setLeague(){this.showLeague=!0,this.showConference=!1,this.showDivisions=!1}setConference(){this.showLeague=!1,this.showDivisions=!1,this.showConference=!0}setDivisions(){this.showDivisions=!0,this.showLeague=!1,this.showConference=!1}}return(e=n).\u0275fac=function(o){return new(o||e)(t.Y36(I),t.Y36(r.Ib))},e.\u0275cmp=t.Xpm({type:e,selectors:[["cha-front-stats-team-all"]],decls:13,vars:8,consts:[["mode","indeterminate",3,"style",4,"ngIf"],[1,"grid","justify-content-center","row-gap-2","pt-2"],[1,"text-lg","col-12","text-center",2,"font-weight","100"],[1,"flex","flex-wrap","column-gap-6","row-gap-2","col-12","justify-content-center"],[1,"flex","justify-content-center",3,"options","optionChanged"],[4,"ngIf"],["mode","indeterminate"],[3,"stats"]],template:function(o,s){1&o&&(t.TgZ(0,"blade-layout-feature-content")(1,"div"),t.YNc(2,zt,1,3,"p-progressBar",0),t.ALo(3,"async"),t.TgZ(4,"div",1)(5,"div",2),t._uU(6," CHA Team Stats "),t.qZA(),t.TgZ(7,"div",3)(8,"blade-button-select",4),t.NdJ("optionChanged",function(b){return s.onOptionChanged(b)}),t.qZA(),t.TgZ(9,"blade-button-select",4),t.NdJ("optionChanged",function(b){return s.onSeasonOptionChanged(b)}),t.qZA()()(),t._UZ(10,"blade-divider"),t.YNc(11,te,5,3,"blade-card",5),t.ALo(12,"async"),t.qZA()()),2&o&&(t.xp6(2),t.Q6J("ngIf",t.lcZ(3,4,s.isLoading$)),t.xp6(6),t.Q6J("options",s.selectOptions),t.xp6(1),t.Q6J("options",s.selectSeasonOptions),t.xp6(2),t.Q6J("ngIf",t.lcZ(12,6,s.isLoaded$)))},dependencies:[_.O5,u.k,it.R,lt.o,g.C,ct.A,_t.y,J,Mt,Gt,_.Ov],encapsulation:2,changeDetection:0}),n})()}];let ae=(()=>{var e;class n{}return(e=n).\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[L.Bz.forChild(ee),L.Bz]}),n})(),ne=(()=>{var e;class n{}return(e=n).\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[D,I,P],imports:[_.ez,ae,u.q,S.U$,x.F,U.l,f.hJ,Z.E,w.o,g.C,c.N,i.Aw.forFeature("stats-team-all",R),p.sQ.forFeature([P])]}),n})()},8039:(O,v,l)=>{l.d(v,{F:()=>g,q:()=>w});var _=l(1180),p=l(6814),i=l(5879);function u(c,r){if(1&c&&(i.TgZ(0,"span",4),i._uU(1),i.qZA()),2&c){const m=i.oxw();i.xp6(1),i.Oqu(m.label)}}function S(c,r){if(1&c&&i._UZ(0,"span",6),2&c){const m=i.oxw(2);i.Tol(m.icon),i.Q6J("ngClass","p-avatar-icon")}}function x(c,r){if(1&c&&i.YNc(0,S,1,3,"span",5),2&c){const m=i.oxw(),d=i.MAs(6);i.Q6J("ngIf",m.icon)("ngIfElse",d)}}function U(c,r){if(1&c){const m=i.EpF();i.TgZ(0,"img",8),i.NdJ("error",function(T){i.CHM(m);const F=i.oxw(2);return i.KtG(F.imageError(T))}),i.qZA()}if(2&c){const m=i.oxw(2);i.Q6J("src",m.image,i.LSH)}}function f(c,r){if(1&c&&i.YNc(0,U,1,1,"img",7),2&c){const m=i.oxw();i.Q6J("ngIf",m.image)}}const Z=["*"];let w=(()=>{var c;class r{constructor(){(0,_.Z)(this,"label",void 0),(0,_.Z)(this,"icon",void 0),(0,_.Z)(this,"image",void 0),(0,_.Z)(this,"size","normal"),(0,_.Z)(this,"shape","square"),(0,_.Z)(this,"style",void 0),(0,_.Z)(this,"styleClass",void 0),(0,_.Z)(this,"onImageError",new i.vpe)}containerClass(){return{"p-avatar p-component":!0,"p-avatar-image":null!=this.image,"p-avatar-circle":"circle"===this.shape,"p-avatar-lg":"large"===this.size,"p-avatar-xl":"xlarge"===this.size}}imageError(d){this.onImageError.emit(d)}}return c=r,(0,_.Z)(r,"\u0275fac",function(d){return new(d||c)}),(0,_.Z)(r,"\u0275cmp",i.Xpm({type:c,selectors:[["p-avatar"]],hostAttrs:[1,"p-element"],inputs:{label:"label",icon:"icon",image:"image",size:"size",shape:"shape",style:"style",styleClass:"styleClass"},outputs:{onImageError:"onImageError"},ngContentSelectors:Z,decls:7,vars:6,consts:[[3,"ngClass","ngStyle"],["class","p-avatar-text",4,"ngIf","ngIfElse"],["iconTemplate",""],["imageTemplate",""],[1,"p-avatar-text"],[3,"class","ngClass",4,"ngIf","ngIfElse"],[3,"ngClass"],[3,"src","error",4,"ngIf"],[3,"src","error"]],template:function(d,T){if(1&d&&(i.F$t(),i.TgZ(0,"div",0),i.Hsn(1),i.YNc(2,u,2,1,"span",1),i.YNc(3,x,1,2,"ng-template",null,2,i.W1O),i.YNc(5,f,1,1,"ng-template",null,3,i.W1O),i.qZA()),2&d){const F=i.MAs(4);i.Tol(T.styleClass),i.Q6J("ngClass",T.containerClass())("ngStyle",T.style),i.xp6(2),i.Q6J("ngIf",T.label)("ngIfElse",F)}},dependencies:[p.mk,p.O5,p.PC],styles:[".p-avatar{display:inline-flex;align-items:center;justify-content:center;width:2rem;height:2rem;font-size:1rem}.p-avatar.p-avatar-image{background-color:transparent}.p-avatar.p-avatar-circle{border-radius:50%;overflow:hidden}.p-avatar .p-avatar-icon{font-size:1rem}.p-avatar img{width:100%;height:100%}\n"],encapsulation:2,changeDetection:0})),r})(),g=(()=>{var c;class r{}return c=r,(0,_.Z)(r,"\u0275fac",function(d){return new(d||c)}),(0,_.Z)(r,"\u0275mod",i.oAB({type:c})),(0,_.Z)(r,"\u0275inj",i.cJS({imports:[p.ez]})),r})()}}]);