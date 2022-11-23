"use strict";(self.webpackChunkcha_admin=self.webpackChunkcha_admin||[]).push([[918],{5918:(ke,T,o)=>{o.r(T),o.d(T,{ChaAdminScheduleGamesModule:()=>Ke});var p=o(6895),h=o(433),r=o(8776),l=o(9653),y=o(4057),C=o(8235),_=o(2336),b=o(5593),F=o(1740),x=o(3214),B=o(1624),D=o(2675),Z=o(5199),z=o(5621),K=o(7240),A=o(8417),$=o(4086),j=o(1365),I=o(6129),v=o(4004),M=o(262),J=o(9646),k=o(8505);const g="[SCHEDULE GAMES]",c={getAll:(0,l.PH)(`${g} Get All`),getAllSuccess:(0,l.PH)(`${g} Get All Success`,(0,l.Ky)()),saveGame:(0,l.PH)(`${g} Save Game`,(0,l.Ky)()),saveGameSuccess:(0,l.PH)(`${g} Save Game Success`,(0,l.Ky)()),error:(0,l.PH)(`${g} Error`)};var e=o(4650),te=o(529);let ae=(()=>{class t{constructor(a,s){this._http=a,this.apiUrl=s}getSchedule(a){return this._http.get(`${this.apiUrl}/schedule/${a}`).pipe((0,v.U)(s=>s))}saveGame(a){return this._http.put(`${this.apiUrl}/schedule/${a.id}`,a).pipe((0,v.U)(s=>s))}}return t.\u0275fac=function(a){return new(a||t)(e.LFG(te.eN),e.LFG("apiUrl"))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var Q=o(805);let w=(()=>{class t{constructor(a,s,i,m){this.actions$=a,this.leagueDataFacade=s,this.scheduleGamesService=i,this.messageService=m,this.getSchedule$=(0,r.GW)(()=>this.actions$.pipe((0,r.l4)(c.getAll),(0,$.g)(500),(0,j.M)(this.leagueDataFacade.leagueData$),(0,I.z)(([P,G])=>this.scheduleGamesService.getSchedule(G.current_year).pipe((0,v.U)(je=>c.getAllSuccess({schedule:je})),(0,M.K)(()=>(0,J.of)(c.error())))))),this.saveGame$=(0,r.GW)(()=>this.actions$.pipe((0,r.l4)(c.saveGame),(0,$.g)(500),(0,I.z)(P=>this.scheduleGamesService.saveGame(P.game).pipe((0,v.U)(G=>c.saveGameSuccess({game:G})),(0,M.K)(()=>(0,J.of)(c.error())))))),this.saveGameSuccess$=(0,r.GW)(()=>this.actions$.pipe((0,r.l4)(c.saveGameSuccess),(0,k.b)(()=>{this.messageService.add({severity:"success",summary:"Update Game",detail:"Game has been updated"})})),{dispatch:!1})}}return t.\u0275fac=function(a){return new(a||t)(e.LFG(r.eX),e.LFG(A.Ib),e.LFG(ae),e.LFG(Q.ez))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})();const E={schedule:[],loading:!1,loaded:!1,saving:!1,saved:!1},ne=(0,l.Lq)(E,(0,l.on)(c.getAll,t=>({...t,loading:!0,loaded:!1})),(0,l.on)(c.getAllSuccess,(t,n)=>({...t,schedule:n.schedule,loading:!1,loaded:!0})),(0,l.on)(c.saveGame,t=>({...t,saving:!0,saved:!1})),(0,l.on)(c.saveGameSuccess,t=>({...t,saving:!1,saved:!0})),(0,l.on)(c.error,t=>E));function se(t,n){return ne(t,n)}const f=(0,l.ZF)("schedule-games"),re=(0,l.P1)(f,t=>t.loading),de=(0,l.P1)(f,t=>t.loaded),N=(0,l.P1)(f,t=>t.schedule),u={selectLoaded:de,selectLoading:re,selectSaving:(0,l.P1)(f,t=>t.saving),selectSaved:(0,l.P1)(f,t=>t.saved),selectSchedule:N,selectSeason:(0,l.P1)(N,t=>t[0]?.playing_year)};let S=(()=>{class t{constructor(a){this.store=a,this.isLoading$=this.store.select(u.selectLoading),this.isLoaded$=this.store.select(u.selectLoaded),this.isSaving$=this.store.select(u.selectSaving),this.isSaved$=this.store.select(u.selectSaved),this.schedule$=this.store.select(u.selectSchedule),this.season$=this.store.select(u.selectSeason)}getSchedule(){this.store.dispatch(c.getAll())}saveGame(a){this.store.dispatch(c.saveGame({game:a}))}}return t.\u0275fac=function(a){return new(a||t)(e.LFG(l.yh))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})();var L=o(1779),ge=o(590),fe=o(4268),O=o(1889),U=o(4984),Y=o(655),R=o(9933),_e=o(9300);let H=(()=>{class t{constructor(){this.form=new h.nJ({}),this.model={},this.options={}}ngOnInit(){this.game&&this.patchForm(),this.createFields()}createFields(){this.fields=[{fieldGroupClassName:"w-full flex flex-wrap column-gap-2 row-gap-3",fieldGroup:[this.homeTeamField(),this.homeTeamScore(),this.visTeamField(),this.visTeamScore()]}]}patchForm(){this.model={homeTeam:`${this.game?.homeTeamInfo.city} ${this.game?.homeTeamInfo.nickname}`,visTeam:`${this.game?.visTeamInfo.city} ${this.game?.visTeamInfo.nickname}`,home_team_score:this.game?.home_team_score,vis_team_score:this.game?.vis_team_score}}homeTeamScore(){return{key:"home_team_score",className:"w-full md:w-2",type:"text-input",templateOptions:{label:"Home Score",placeholder:"Enter Score",required:!0},validation:{messages:{required:()=>"Score is required"}}}}homeTeamField(){return{key:"homeTeam",className:"w-full md:w-2",type:"text-input",templateOptions:{label:"Home Team",readonly:!0}}}visTeamScore(){return{key:"vis_team_score",className:"w-full md:w-2",type:"text-input",templateOptions:{label:"Visiting Score",placeholder:"Enter Score",required:!0},validation:{messages:{required:()=>"Score is required"}}}}visTeamField(){return{key:"visTeam",className:"w-full md:w-2",type:"text-input",templateOptions:{label:"Visiting Team",readonly:!0}}}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["cha-admin-schedule-games-edit-form"]],inputs:{game:"game"},decls:2,vars:5,consts:[[1,"w-full",3,"formGroup"],[3,"model","fields","options","form"]],template:function(a,s){1&a&&(e.TgZ(0,"form",0),e._UZ(1,"formly-form",1),e.qZA()),2&a&&(e.Q6J("formGroup",s.form),e.xp6(1),e.Q6J("model",s.model)("fields",s.fields)("options",s.options)("form",s.form))},dependencies:[h._Y,h.JL,h.sg,y.T7],encapsulation:2,changeDetection:0}),t})();var ve=o(3186),Se=o(1185);let d=class{constructor(n){this.scheduleGamesFacade=n,this.closeSidebar=new e.vpe}onCancel(){this.closeSidebar.emit(!0)}onSave(){const n={...this.game,vis_team_score:this.gameFormRef?.form.value.vis_team_score,home_team_score:this.gameFormRef?.form.value.home_team_score};this.scheduleGamesFacade.saveGame(n),this.scheduleGamesFacade.isSaving$.pipe((0,R.t)(this),(0,_e.h)(a=>!a)).subscribe(()=>{this.closeSidebar.emit(!0)})}};d.\u0275fac=function(n){return new(n||d)(e.Y36(S))},d.\u0275cmp=e.Xpm({type:d,selectors:[["cha-admin-schedule-games-edit"]],viewQuery:function(n,a){if(1&n&&e.Gf(H,5),2&n){let s;e.iGM(s=e.CRH())&&(a.gameFormRef=s.first)}},inputs:{game:"game",isMobile:"isMobile"},outputs:{closeSidebar:"closeSidebar"},decls:10,vars:2,consts:[[2,"background-color","var(--background-100)"],[1,"text-lg","font-light","text-center"],[3,"game"],[1,"flex","justify-content-between"],[1,"flex","column-gap-1"],["pButton","","pRipple","","type","button","label","Save Game",1,"p-button-raised",3,"disabled","click"],["pButton","","pRipple","","type","button","label","Cancel",1,"p-button-raised","p-button-warning",3,"click"]],template:function(n,a){1&n&&(e.TgZ(0,"blade-card",0)(1,"blade-card-header",1),e._uU(2," Edit Game "),e.qZA(),e.TgZ(3,"blade-card-body"),e._UZ(4,"cha-admin-schedule-games-edit-form",2),e.qZA(),e.TgZ(5,"blade-card-footer")(6,"div",3)(7,"div",4)(8,"button",5),e.NdJ("click",function(){return a.onSave()}),e.qZA(),e.TgZ(9,"button",6),e.NdJ("click",function(){return a.onCancel()}),e.qZA()()()()()),2&n&&(e.xp6(4),e.Q6J("game",a.game),e.xp6(4),e.Q6J("disabled",(null==a.gameFormRef||null==a.gameFormRef.form?null:a.gameFormRef.form.invalid)||!(null!=a.gameFormRef&&null!=a.gameFormRef.form&&a.gameFormRef.form.dirty)))},dependencies:[b.Hq,O.A,U.y,ve.x,Se.n,H],encapsulation:2,changeDetection:0}),d=(0,Y.gn)([(0,R.c)(),(0,Y.w6)("design:paramtypes",[S])],d);const be=["dt"];function Ge(t,n){if(1&t){const a=e.EpF();e.TgZ(0,"div",6)(1,"span",7),e._UZ(2,"i",8),e.TgZ(3,"input",9),e.NdJ("input",function(i){e.CHM(a);const m=e.oxw();return e.KtG(m.applyFilterGlobal(i,"contains"))}),e.qZA()()()}}function Te(t,n){1&t&&e.GkF(0)}function ye(t,n){if(1&t&&(e.TgZ(0,"th",14),e._uU(1),e.qZA()),2&t){const a=n.$implicit;e.Q6J("hidden",!a.visible),e.xp6(1),e.hij(" ",a.header," ")}}function Ce(t,n){if(1&t&&(e.TgZ(0,"tr"),e.YNc(1,ye,2,2,"th",13),e.qZA()),2&t){const a=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",a.mobileTableColumns)}}function Fe(t,n){if(1&t&&(e.TgZ(0,"th",16),e._uU(1),e._UZ(2,"p-sortIcon",17),e.qZA()),2&t){const a=n.$implicit;e.Q6J("hidden",!a.visible)("pSortableColumn",a.field),e.xp6(1),e.hij(" ",a.header," "),e.xp6(1),e.Q6J("field",a.field)}}function xe(t,n){if(1&t&&(e.TgZ(0,"tr"),e.YNc(1,Fe,3,4,"th",15),e.qZA()),2&t){const a=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",a.tableColumns)}}function Ze(t,n){if(1&t&&(e.YNc(0,Te,1,0,"ng-container",10),e.YNc(1,Ce,2,1,"ng-template",null,11,e.W1O),e.YNc(3,xe,2,1,"ng-template",null,12,e.W1O)),2&t){const a=e.MAs(2),s=e.MAs(4),i=e.oxw();e.Q6J("ngIf",i.isMobile)("ngIfThen",a)("ngIfElse",s)}}function Ae(t,n){1&t&&e.GkF(0)}function $e(t,n){if(1&t){const a=e.EpF();e.ynx(0),e.TgZ(1,"button",23),e.NdJ("click",function(){e.CHM(a);const i=e.oxw(3).$implicit,m=e.oxw();return e.KtG(m.onClick(i))}),e.qZA(),e.BQk()}}function Ie(t,n){if(1&t&&(e.TgZ(0,"td",14)(1,"span",20),e._uU(2),e.qZA(),e.TgZ(3,"div",21),e.ynx(4),e._uU(5),e.BQk(),e.YNc(6,$e,2,0,"ng-container",22),e.qZA()()),2&t){const a=n.$implicit,s=e.oxw(2).$implicit;e.Q6J("hidden",!a.visible),e.xp6(2),e.Oqu(a.header),e.xp6(3),e.Oqu(s[a.field]),e.xp6(1),e.Q6J("ngIf","action"===a.field)}}function Me(t,n){if(1&t&&(e.TgZ(0,"tr"),e.YNc(1,Ie,7,4,"td",13),e.qZA()),2&t){const a=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",a.mobileTableColumns)}}function Je(t,n){1&t&&(e.ynx(0),e._uU(1,"@"),e.BQk())}function Qe(t,n){if(1&t){const a=e.EpF();e.ynx(0),e.TgZ(1,"button",23),e.NdJ("click",function(){e.CHM(a);const i=e.oxw(3).$implicit,m=e.oxw();return e.KtG(m.onClick(i))}),e.qZA(),e.BQk()}}function we(t,n){if(1&t&&(e.TgZ(0,"td",14)(1,"span",20),e._uU(2),e.qZA(),e.TgZ(3,"div",21),e.ynx(4),e._uU(5),e.BQk(),e.YNc(6,Je,2,0,"ng-container",22),e.YNc(7,Qe,2,0,"ng-container",22),e.qZA()()),2&t){const a=n.$implicit,s=e.oxw(2).$implicit;e.Q6J("hidden",!a.visible),e.xp6(2),e.Oqu(a.header),e.xp6(3),e.Oqu(s[a.field]),e.xp6(1),e.Q6J("ngIf","vs"===a.field),e.xp6(1),e.Q6J("ngIf","action"===a.field)}}function Ee(t,n){if(1&t&&(e.TgZ(0,"tr"),e.YNc(1,we,8,5,"td",13),e.qZA()),2&t){const a=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",a.tableColumns)}}function Ne(t,n){if(1&t&&(e.YNc(0,Ae,1,0,"ng-container",10),e.YNc(1,Me,2,1,"ng-template",null,18,e.W1O),e.YNc(3,Ee,2,1,"ng-template",null,19,e.W1O)),2&t){const a=e.MAs(2),s=e.MAs(4),i=e.oxw();e.Q6J("ngIf",i.isMobile)("ngIfThen",a)("ngIfElse",s)}}function Le(t,n){if(1&t){const a=e.EpF();e.TgZ(0,"p-sidebar",24),e.NdJ("visibleChange",function(i){e.CHM(a);const m=e.oxw();return e.KtG(m.display=i)}),e.TgZ(1,"cha-admin-schedule-games-edit",25),e.NdJ("closeSidebar",function(){e.CHM(a);const i=e.oxw();return e.KtG(i.onClose())}),e.qZA()()}if(2&t){const a=e.oxw();e.Q6J("visible",a.display)("fullScreen",!0)("showCloseIcon",!1)("dismissible",!1),e.xp6(1),e.Q6J("game",a.game)("isMobile",a.isMobile)}}const Oe=function(){return[10,20,25,50,100]},Ue=function(){return["visTeam","homeTeam","game_day"]};let Ye=(()=>{class t{constructor(){this.tableColumns=[{field:"id",header:"Game Id",visible:!0},{field:"game_day",header:"Game Day",visible:!0},{field:"visTeam",header:"Visiting",visible:!0},{field:"vis_team_score",header:"Visiting Score",visible:!0},{field:"vs",header:"@",visible:!0},{field:"home_team_score",header:"Home Score",visible:!0},{field:"homeTeam",header:"Home",visible:!0},{field:"action",header:"Edit",visible:!0}],this.mobileTableColumns=[{field:"game_day",header:"Game Day",visible:!0},{field:"visTeam",header:"Visiting",visible:!0},{field:"vis_team_score",header:"Visiting Score",visible:!0},{field:"home_team_score",header:"Home Score",visible:!0},{field:"homeTeam",header:"Home",visible:!0},{field:"action",header:"Edit",visible:!0}],this.first=0,this.rows=20,this.totalRecords=0,this.sortField="full_name",this.display=!1}ngOnInit(){this.gamesForTable=this.mapItems(this.games)}mapItems(a){return a.map(s=>({...s,homeTeam:`${s.homeTeamInfo.city} ${s.homeTeamInfo.nickname}`,visTeam:`${s.visTeamInfo.city} ${s.visTeamInfo.nickname}`}))}applyFilterGlobal(a,s){this.dt?.filterGlobal(a.target.value,s)}onClick(a){this.game=a,this.display=!0}onClose(){this.display=!1,this.game=null}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["cha-admin-schedule-games-table"]],viewQuery:function(a,s){if(1&a&&e.Gf(be,5),2&a){let i;e.iGM(i=e.CRH())&&(s.dt=i.first)}},inputs:{games:"games",isMobile:"isMobile"},decls:6,vars:15,consts:[["styleClass","p-datatable-sm p-datatable-striped","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",1,"table",3,"responsiveLayout","value","columns","rows","showCurrentPageReport","rowsPerPageOptions","paginator","totalRecords","sortField","sortOrder","filterDelay","globalFilterFields"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[3,"visible","fullScreen","showCloseIcon","dismissible","visibleChange",4,"ngIf"],[1,"flex","flex-wrap","justify-content-between"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search Team / Game Day",3,"input"],[4,"ngIf","ngIfThen","ngIfElse"],["showMobile",""],["showDesktop",""],[3,"hidden",4,"ngFor","ngForOf"],[3,"hidden"],[3,"hidden","pSortableColumn",4,"ngFor","ngForOf"],[3,"hidden","pSortableColumn"],[3,"field"],["showMobileBody",""],["showDesktopBody",""],[1,"p-column-title"],[1,"table-body-cell"],[4,"ngIf"],["pButton","","type","button","icon","pi pi-user-edit",1,"p-button-rounded","p-button-primary",3,"click"],[3,"visible","fullScreen","showCloseIcon","dismissible","visibleChange"],[3,"game","isMobile","closeSidebar"]],template:function(a,s){1&a&&(e.TgZ(0,"p-table",0,1),e.YNc(2,Ge,4,0,"ng-template",2),e.YNc(3,Ze,5,3,"ng-template",3),e.YNc(4,Ne,5,3,"ng-template",4),e.qZA(),e.YNc(5,Le,2,6,"p-sidebar",5)),2&a&&(e.Q6J("responsiveLayout","stack")("value",s.gamesForTable)("columns",s.isMobile?s.mobileTableColumns:s.tableColumns)("rows",s.rows)("showCurrentPageReport",!0)("rowsPerPageOptions",e.DdM(13,Oe))("paginator",!0)("totalRecords",s.totalRecords)("sortField",s.sortField)("sortOrder",1)("filterDelay",0)("globalFilterFields",e.DdM(14,Ue)),e.xp6(5),e.Q6J("ngIf",s.display))},dependencies:[p.sg,p.O5,_.iA,Q.jx,_.lQ,_.fz,b.Hq,F.o,x.Y,d],encapsulation:2,changeDetection:0}),t})();const Re=function(){return{height:"6px"}};function He(t,n){1&t&&e._UZ(0,"p-progressBar",4),2&t&&e.Akn(e.DdM(2,Re))}function Pe(t,n){if(1&t&&(e.ynx(0),e._UZ(1,"cha-admin-schedule-games-table",5),e.BQk()),2&t){const a=n.ngIf,s=e.oxw(2);e.xp6(1),e.Q6J("games",a)("isMobile",s.isMobile)}}function Be(t,n){if(1&t&&(e.TgZ(0,"blade-card")(1,"blade-card-body"),e.YNc(2,Pe,2,2,"ng-container",3),e.ALo(3,"async"),e.qZA()()),2&t){const a=e.oxw();e.xp6(2),e.Q6J("ngIf",e.lcZ(3,1,a.games$))}}const De=[{path:"",component:(()=>{class t{constructor(a,s){this.scheduleGamesFacade=a,this.displayFacade=s,this.isLoaded$=this.scheduleGamesFacade.isLoaded$,this.isLoading$=this.scheduleGamesFacade.isLoading$,this.games$=this.scheduleGamesFacade.schedule$,this.displayFacade.isMobile$.pipe((0,ge.P)()).subscribe(i=>{this.isMobile=i})}ngOnInit(){this.scheduleGamesFacade.getSchedule()}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(S),e.Y36(A.pC))},t.\u0275cmp=e.Xpm({type:t,selectors:[["cha-admin-schedule-games"]],decls:10,vars:6,consts:[[1,"pt-2"],[1,"text-lg","text-center",2,"font-weight","100"],["mode","indeterminate",3,"style",4,"ngIf"],[4,"ngIf"],["mode","indeterminate"],[3,"games","isMobile"]],template:function(a,s){1&a&&(e.TgZ(0,"blade-layout-feature-content")(1,"div")(2,"div",0)(3,"div",1),e._uU(4,"Schedule"),e.qZA()(),e._UZ(5,"blade-divider"),e.YNc(6,He,1,3,"p-progressBar",2),e.ALo(7,"async"),e.YNc(8,Be,4,3,"blade-card",3),e.ALo(9,"async"),e.qZA()()),2&a&&(e.xp6(6),e.Q6J("ngIf",e.lcZ(7,2,s.isLoading$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(9,4,s.isLoaded$)))},dependencies:[p.O5,C.k,fe.R,O.A,U.y,Z.C,Ye,p.Ov],changeDetection:0}),t})()}];let ze=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[L.Bz.forChild(De),L.Bz]}),t})(),Ke=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[w,S],imports:[p.ez,h.UX,ze,C.q,_.U$,b.hJ,F.j,x.l,B.E,D.N,Z.C,l.Aw.forFeature("schedule-games",se),r.sQ.forFeature([w]),y.X0.forRoot({wrappers:[{name:"control-wrapper",component:K.t}],types:[{name:"text-input",component:z.T,wrappers:["control-wrapper"]}]})]}),t})()}}]);