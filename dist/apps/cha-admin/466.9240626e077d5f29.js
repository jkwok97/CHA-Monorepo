"use strict";(self.webpackChunkcha_admin=self.webpackChunkcha_admin||[]).push([[466],{5466:(zt,A,l)=>{l.r(A),l.d(A,{ChaAdminPlayerMgmtRatingsModule:()=>Wt});var u=l(6895),g=l(433),c=l(8776),s=l(9653),Z=l(4057),k=l(8235),I=l(3214),b=l(2336),S=l(1740),R=l(5593),te=l(2675),ae=l(1624),O=l(5199),v=l(655),e=l(4650),Y=l(5362),x=l(9933),ne=l(1884);let f=class{constructor(){this.optionChanged=new e.vpe,this.optionSelected=new g.p4}onOptionClick(n){this.optionSelected.setValue(n.option.value)}ngOnInit(){this.optionSelected.valueChanges.pipe((0,ne.x)(),(0,x.t)(this)).subscribe(n=>{this.optionChanged.emit(n)})}ngAfterViewInit(){this.optionSelected.setValue(this.index?this.options[this.index].value:this.options[0].value)}};f.\u0275fac=function(n){return new(n||f)},f.\u0275cmp=e.Xpm({type:f,selectors:[["blade-button-select"]],inputs:{options:"options",index:"index"},outputs:{optionChanged:"optionChanged"},standalone:!0,features:[e.jDz],decls:1,vars:2,consts:[["optionLabel","label","optionValue","value",3,"options","formControl","onOptionClick"]],template:function(n,a){1&n&&(e.TgZ(0,"p-selectButton",0),e.NdJ("onOptionClick",function(o){return a.onOptionClick(o)}),e.qZA()),2&n&&e.Q6J("options",a.options)("formControl",a.optionSelected)},dependencies:[u.ez,g.UX,g.JJ,g.oH,Y.Qy,Y.UN],encapsulation:2,changeDetection:0}),f=(0,v.gn)([(0,x.c)()],f);var ie=l(5621),le=l(7240);const d="[PLAYER MGMT RATINGS]",oe=(0,s.PH)(`${d} Get Players`),se=(0,s.PH)(`${d} Get Players Success`,(0,s.Ky)()),re=(0,s.PH)(`${d} Edit Player`,(0,s.Ky)()),pe=(0,s.PH)(`${d} Edit Player Success`,(0,s.Ky)()),r={getPlayers:oe,getPlayersSuccess:se,getGoalies:(0,s.PH)(`${d} Get Goalies`),getGoaliesSuccess:(0,s.PH)(`${d} Get Goalies Success`,(0,s.Ky)()),editPlayer:re,editPlayersuccess:pe,editGoalie:(0,s.PH)(`${d} Edit Goalie`,(0,s.Ky)()),editGoaliesuccess:(0,s.PH)(`${d} Edit Goalie Success`,(0,s.Ky)()),error:(0,s.PH)(`${d} Error`)},E={players:[],player:null,goalies:[],goalie:null,loading:!1,playersLoaded:!1,goaliesLoaded:!1,saving:!1,saved:!1},ue=(0,s.Lq)(E,(0,s.on)(r.getPlayers,t=>({...t,loading:!0,playersLoaded:!1})),(0,s.on)(r.getGoalies,t=>({...t,loading:!0,goaliesLoaded:!1})),(0,s.on)(r.editPlayer,r.editGoalie,t=>({...t,saving:!0,saved:!1})),(0,s.on)(r.getPlayersSuccess,(t,n)=>({...t,players:n.players,loading:!1,playersLoaded:!0})),(0,s.on)(r.getGoaliesSuccess,(t,n)=>({...t,goalies:n.goalies,loading:!1,goaliesLoaded:!0})),(0,s.on)(r.editPlayersuccess,r.editGoaliesuccess,(t,n)=>({...t,saving:!1,saved:!0})),(0,s.on)(r.error,t=>E));function fe(t,n){return ue(t,n)}const _=(0,s.ZF)("player-mgmt-ratings"),Me=(0,s.P1)(_,t=>t.loading),U=(0,s.P1)(_,t=>t.playersLoaded),q=(0,s.P1)(_,t=>t.goaliesLoaded),y={selectPlayersLoaded:U,selectGoaliesLoaded:q,selectLoaded:(0,s.P1)(U,q,(t,n)=>t&&n),selectLoading:Me,selectSaving:(0,s.P1)(_,t=>t.saving),selectSaved:(0,s.P1)(_,t=>t.saved),selectPlayers:(0,s.P1)(_,t=>t.players),selectPlayer:(0,s.P1)(_,t=>t.player),selectGoalies:(0,s.P1)(_,t=>t.goalies),selectGoalie:(0,s.P1)(_,t=>t.goalie)};let P=(()=>{class t{constructor(a){this.store=a,this.isLoading$=this.store.select(y.selectLoading),this.isLoaded$=this.store.select(y.selectLoaded),this.isSaving$=this.store.select(y.selectSaving),this.isSaved$=this.store.select(y.selectSaved),this.players$=this.store.select(y.selectPlayers),this.player$=this.store.select(y.selectPlayer),this.goalies$=this.store.select(y.selectGoalies),this.goalie$=this.store.select(y.selectPlayer)}getPlayers(){this.store.dispatch(r.getPlayers())}editPlayer(a){this.store.dispatch(r.editPlayer({player:a}))}getGoalies(){this.store.dispatch(r.getGoalies())}editGoalie(a){this.store.dispatch(r.editGoalie({goalie:a}))}}return t.\u0275fac=function(a){return new(a||t)(e.LFG(s.yh))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})();var L=l(8417),B=l(4086),D=l(1365),F=l(6129),h=l(4004),G=l(262),w=l(9646),H=l(8505),Je=l(529);let Ne=(()=>{class t{constructor(a,i){this._http=a,this.apiUrl=i}getPlayers(a){return this._http.get(`${this.apiUrl}/player-ratings/${a}`).pipe((0,h.U)(i=>i))}editPlayer(a){return this._http.put(`${this.apiUrl}/player-ratings/${a.id}`,a).pipe((0,h.U)(i=>i))}getGoalies(a){return this._http.get(`${this.apiUrl}/goalie-ratings/${a}`).pipe((0,h.U)(i=>i))}editGoalie(a){return this._http.put(`${this.apiUrl}/goalie-ratings/${a.id}`,a).pipe((0,h.U)(i=>i))}}return t.\u0275fac=function(a){return new(a||t)(e.LFG(Je.eN),e.LFG("apiUrl"))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var Q=l(805);let K=(()=>{class t{constructor(a,i,o,p,jt){this.actions$=a,this.playerMgmtRatingsService=i,this.playerMgmtRatingsFacade=o,this.leagueDataFacade=p,this.messageService=jt,this.getPlayers$=(0,c.GW)(()=>this.actions$.pipe((0,c.l4)(r.getPlayers),(0,B.g)(500),(0,D.M)(this.leagueDataFacade.leagueData$),(0,F.z)(([M,m])=>this.playerMgmtRatingsService.getPlayers(m.offseason?m.prev_year:m.current_year).pipe((0,h.U)($=>r.getPlayersSuccess({players:$})),(0,G.K)(()=>(0,w.of)(r.error())))))),this.editPlayer$=(0,c.GW)(()=>this.actions$.pipe((0,c.l4)(r.editPlayer),(0,F.z)(M=>this.playerMgmtRatingsService.editPlayer(M.player).pipe((0,h.U)(m=>r.editPlayersuccess({player:m})),(0,G.K)(()=>(0,w.of)(r.error())))))),this.editPlayerSuccess$=(0,c.GW)(()=>this.actions$.pipe((0,c.l4)(r.editPlayersuccess),(0,H.b)(()=>{this.messageService.add({severity:"success",summary:"Edit Player Rating",detail:"Player Rating has been updated"}),this.playerMgmtRatingsFacade.getPlayers()})),{dispatch:!1}),this.getGoalies$=(0,c.GW)(()=>this.actions$.pipe((0,c.l4)(r.getGoalies),(0,B.g)(500),(0,D.M)(this.leagueDataFacade.leagueData$),(0,F.z)(([M,m])=>this.playerMgmtRatingsService.getGoalies(m.offseason?m.prev_year:m.current_year).pipe((0,h.U)($=>r.getGoaliesSuccess({goalies:$})),(0,G.K)(()=>(0,w.of)(r.error())))))),this.editGoalie$=(0,c.GW)(()=>this.actions$.pipe((0,c.l4)(r.editGoalie),(0,F.z)(M=>this.playerMgmtRatingsService.editGoalie(M.goalie).pipe((0,h.U)(m=>r.editGoaliesuccess({goalie:m})),(0,G.K)(()=>(0,w.of)(r.error())))))),this.editGoalieSuccess$=(0,c.GW)(()=>this.actions$.pipe((0,c.l4)(r.editGoaliesuccess),(0,H.b)(()=>{this.messageService.add({severity:"success",summary:"Edit Goalie Rating",detail:"Goalie Rating has been updated"}),this.playerMgmtRatingsFacade.getGoalies()})),{dispatch:!1})}}return t.\u0275fac=function(a){return new(a||t)(e.LFG(c.eX),e.LFG(Ne),e.LFG(P),e.LFG(L.Ib),e.LFG(Q.ez))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})();var W=l(1779),$e=l(590),J=l(1889),N=l(4984),Ae=l(4268),j=l(9300);let z=(()=>{class t{constructor(){this.form=new g.nJ({}),this.model={},this.options={}}ngOnInit(){this.player&&this.patchForm(),this.createFields()}createFields(){this.fields=[{fieldGroupClassName:"w-full flex flex-wrap column-gap-2 row-gap-3",fieldGroup:[this.playerIdField()]},{fieldGroupClassName:"w-full flex flex-wrap column-gap-2 row-gap-2",fieldGroup:[this.centerField(),this.leftField(),this.rightField(),this.leftdefenseField(),this.rightdefenseField()]}]}patchForm(){this.model={player_id:this.player?.player_id,game_fatigue:this.player?.game_fatigue,shift_fatigue:this.player?.shift_fatigue,c_rate:this.player?.c_rate,l_rate:this.player?.l_rate,r_rate:this.player?.r_rate,ld_rate:this.player?.ld_rate,rd_rate:this.player?.rd_rate}}playerIdField(){return{key:"player_id",className:"w-full md:w-3",type:"text-input",templateOptions:{label:"Player Id",required:!0,readonly:!0},validation:{messages:{required:()=>"Player Id is required"}}}}centerField(){return{key:"c_rate",className:"w-full md:w-1",type:"text-input",templateOptions:{label:"C",required:!0},validation:{messages:{required:()=>"required"}}}}leftField(){return{key:"l_rate",className:"w-full md:w-1",type:"text-input",templateOptions:{label:"LW",required:!0},validation:{messages:{required:()=>"required"}}}}rightField(){return{key:"r_rate",className:"w-full md:w-1",type:"text-input",templateOptions:{label:"RW",required:!0},validation:{messages:{required:()=>"required"}}}}leftdefenseField(){return{key:"ld_rate",className:"w-full md:w-1",type:"text-input",templateOptions:{label:"LD",required:!0},validation:{messages:{required:()=>"required"}}}}rightdefenseField(){return{key:"rd_rate",className:"w-full md:w-1",type:"text-input",templateOptions:{label:"RD",required:!0},validation:{messages:{required:()=>"required"}}}}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["cha-admin-player-mgmt-ratings-player-edit-form"]],inputs:{player:"player"},decls:2,vars:5,consts:[[1,"w-full",3,"formGroup"],[3,"model","fields","options","form"]],template:function(a,i){1&a&&(e.TgZ(0,"form",0),e._UZ(1,"formly-form",1),e.qZA()),2&a&&(e.Q6J("formGroup",i.form),e.xp6(1),e.Q6J("model",i.model)("fields",i.fields)("options",i.options)("form",i.form))},dependencies:[g._Y,g.JL,g.sg,Z.T7],encapsulation:2,changeDetection:0}),t})();var X=l(3186),V=l(1185);let T=class{constructor(n){this.playerMgmtRatingsFacade=n,this.closeSidebar=new e.vpe}onCancel(){this.closeSidebar.emit(!0)}onSave(){const n={id:this.player?.id,...this.ratingFormRef?.form.value};this.playerMgmtRatingsFacade.editPlayer(n),this.playerMgmtRatingsFacade.isSaving$.pipe((0,x.t)(this),(0,j.h)(a=>!a)).subscribe(()=>this.closeSidebar.emit(!0))}};T.\u0275fac=function(n){return new(n||T)(e.Y36(P))},T.\u0275cmp=e.Xpm({type:T,selectors:[["cha-admin-player-mgmt-ratings-player-edit"]],viewQuery:function(n,a){if(1&n&&e.Gf(z,5),2&n){let i;e.iGM(i=e.CRH())&&(a.ratingFormRef=i.first)}},inputs:{player:"player"},outputs:{closeSidebar:"closeSidebar"},decls:10,vars:5,consts:[[2,"background-color","var(--background-100)"],[1,"text-lg","font-light","text-center"],[3,"player"],[1,"flex","justify-content-between"],[1,"flex","column-gap-1"],["pButton","","pRipple","","type","button",1,"p-button-raised",3,"label","disabled","click"],["pButton","","pRipple","","type","button","label","Cancel",1,"p-button-raised","p-button-warning",3,"click"]],template:function(n,a){1&n&&(e.TgZ(0,"blade-card",0)(1,"blade-card-header",1),e._uU(2),e.qZA(),e.TgZ(3,"blade-card-body"),e._UZ(4,"cha-admin-player-mgmt-ratings-player-edit-form",2),e.qZA(),e.TgZ(5,"blade-card-footer")(6,"div",3)(7,"div",4)(8,"button",5),e.NdJ("click",function(){return a.onSave()}),e.qZA(),e.TgZ(9,"button",6),e.NdJ("click",function(){return a.onCancel()}),e.qZA()()()()()),2&n&&(e.xp6(2),e.AsE(" Edit ",null==a.player||null==a.player.playerInfo?null:a.player.playerInfo.firstname," ",null==a.player||null==a.player.playerInfo?null:a.player.playerInfo.lastname," Rating "),e.xp6(2),e.Q6J("player",a.player),e.xp6(4),e.Q6J("label","Save Rating")("disabled",(null==a.ratingFormRef||null==a.ratingFormRef.form?null:a.ratingFormRef.form.invalid)||!(null!=a.ratingFormRef&&null!=a.ratingFormRef.form&&a.ratingFormRef.form.dirty)))},dependencies:[R.Hq,J.A,N.y,X.x,V.n,z],encapsulation:2,changeDetection:0}),T=(0,v.gn)([(0,x.c)(),(0,v.w6)("design:paramtypes",[P])],T);const ke=["dt"];function Oe(t,n){if(1&t){const a=e.EpF();e.TgZ(0,"div",6)(1,"span",7),e._UZ(2,"i",8),e.TgZ(3,"input",9),e.NdJ("input",function(o){e.CHM(a);const p=e.oxw();return e.KtG(p.applyFilterGlobal(o,"contains"))}),e.qZA()()()}}function Ye(t,n){1&t&&e.GkF(0)}function Ee(t,n){if(1&t&&(e.TgZ(0,"th",14),e._uU(1),e.qZA()),2&t){const a=n.$implicit;e.Q6J("hidden",!a.visible),e.xp6(1),e.hij(" ",a.header," ")}}function Ue(t,n){if(1&t&&(e.TgZ(0,"tr"),e.YNc(1,Ee,2,2,"th",13),e.qZA()),2&t){const a=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",a.mobileTableColumns)}}function qe(t,n){if(1&t&&(e.TgZ(0,"th",16),e._uU(1),e._UZ(2,"p-sortIcon",17),e.qZA()),2&t){const a=n.$implicit;e.Q6J("hidden",!a.visible)("pSortableColumn",a.field),e.xp6(1),e.hij(" ",a.header," "),e.xp6(1),e.Q6J("field",a.field)}}function Le(t,n){if(1&t&&(e.TgZ(0,"tr"),e.YNc(1,qe,3,4,"th",15),e.qZA()),2&t){const a=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",a.tableColumns)}}function Be(t,n){if(1&t&&(e.YNc(0,Ye,1,0,"ng-container",10),e.YNc(1,Ue,2,1,"ng-template",null,11,e.W1O),e.YNc(3,Le,2,1,"ng-template",null,12,e.W1O)),2&t){const a=e.MAs(2),i=e.MAs(4),o=e.oxw();e.Q6J("ngIf",o.isMobile)("ngIfThen",a)("ngIfElse",i)}}function De(t,n){1&t&&e.GkF(0)}function He(t,n){if(1&t&&(e.ynx(0),e._uU(1),e.BQk()),2&t){const a=e.oxw().$implicit,i=e.oxw(2).$implicit;e.xp6(1),e.Oqu(i[a.field])}}function Ke(t,n){1&t&&e._UZ(0,"i",25)}function We(t,n){1&t&&e._UZ(0,"i",26)}function je(t,n){if(1&t&&(e.ynx(0),e.TgZ(1,"div"),e.YNc(2,Ke,1,0,"i",23),e.YNc(3,We,1,0,"i",24),e.qZA(),e.BQk()),2&t){const a=e.oxw().$implicit,i=e.oxw(2).$implicit;e.xp6(2),e.Q6J("ngIf",!1===i[a.field]),e.xp6(1),e.Q6J("ngIf",!0===i[a.field])}}function ze(t,n){if(1&t){const a=e.EpF();e.ynx(0),e.TgZ(1,"button",27),e.NdJ("click",function(){e.CHM(a);const o=e.oxw(3).$implicit,p=e.oxw();return e.KtG(p.onSalaryClick(o))}),e.qZA(),e.BQk()}}function Xe(t,n){if(1&t&&(e.TgZ(0,"td",14)(1,"span",20),e._uU(2),e.qZA(),e.TgZ(3,"div",21),e.YNc(4,He,2,1,"ng-container",22),e.YNc(5,je,4,2,"ng-container",22),e.YNc(6,ze,2,0,"ng-container",22),e.qZA()()),2&t){const a=n.$implicit;e.Q6J("hidden",!a.visible),e.xp6(2),e.Oqu(a.header),e.xp6(2),e.Q6J("ngIf","isadmin"!==a.field&&"isactive"!==a.field),e.xp6(1),e.Q6J("ngIf","isadmin"===a.field||"isactive"===a.field),e.xp6(1),e.Q6J("ngIf","action"===a.field)}}function Ve(t,n){if(1&t&&(e.TgZ(0,"tr"),e.YNc(1,Xe,7,5,"td",13),e.qZA()),2&t){const a=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",a.mobileTableColumns)}}function et(t,n){1&t&&e._UZ(0,"i",25)}function tt(t,n){1&t&&e._UZ(0,"i",26)}function at(t,n){if(1&t&&(e.ynx(0),e.TgZ(1,"div"),e.YNc(2,et,1,0,"i",23),e.YNc(3,tt,1,0,"i",24),e.qZA(),e.BQk()),2&t){const a=e.oxw().$implicit,i=e.oxw(2).$implicit;e.xp6(2),e.Q6J("ngIf",!1===i[a.field]),e.xp6(1),e.Q6J("ngIf",!0===i[a.field])}}function nt(t,n){if(1&t&&(e.ynx(0),e._uU(1),e.BQk()),2&t){const a=e.oxw().$implicit,i=e.oxw(2).$implicit;e.xp6(1),e.Oqu(i[a.field])}}function it(t,n){if(1&t){const a=e.EpF();e.ynx(0),e.TgZ(1,"button",27),e.NdJ("click",function(){e.CHM(a);const o=e.oxw(3).$implicit,p=e.oxw();return e.KtG(p.onSalaryClick(o))}),e.qZA(),e.BQk()}}function lt(t,n){if(1&t&&(e.TgZ(0,"td",14)(1,"span",20),e._uU(2),e.qZA(),e.TgZ(3,"div",21),e.YNc(4,at,4,2,"ng-container",22),e.YNc(5,nt,2,1,"ng-container",22),e.YNc(6,it,2,0,"ng-container",22),e.qZA()()),2&t){const a=n.$implicit;e.Q6J("hidden",!a.visible),e.xp6(2),e.Oqu(a.header),e.xp6(2),e.Q6J("ngIf","isadmin"===a.field||"isactive"===a.field),e.xp6(1),e.Q6J("ngIf","isadmin"!==a.field&&"isactive"!==a.field),e.xp6(1),e.Q6J("ngIf","action"===a.field)}}function ot(t,n){if(1&t&&(e.TgZ(0,"tr"),e.YNc(1,lt,7,5,"td",13),e.qZA()),2&t){const a=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",a.tableColumns)}}function st(t,n){if(1&t&&(e.YNc(0,De,1,0,"ng-container",10),e.YNc(1,Ve,2,1,"ng-template",null,18,e.W1O),e.YNc(3,ot,2,1,"ng-template",null,19,e.W1O)),2&t){const a=e.MAs(2),i=e.MAs(4),o=e.oxw();e.Q6J("ngIf",o.isMobile)("ngIfThen",a)("ngIfElse",i)}}function rt(t,n){if(1&t){const a=e.EpF();e.TgZ(0,"p-sidebar",28),e.NdJ("visibleChange",function(o){e.CHM(a);const p=e.oxw();return e.KtG(p.display=o)}),e.TgZ(1,"cha-admin-player-mgmt-ratings-player-edit",29),e.NdJ("closeSidebar",function(){e.CHM(a);const o=e.oxw();return e.KtG(o.onClose())}),e.qZA()()}if(2&t){const a=e.oxw();e.Q6J("visible",a.display)("fullScreen",!0)("showCloseIcon",!1)("dismissible",!1),e.xp6(1),e.Q6J("player",a.player)}}const pt=function(){return[10,20,25,50,100]},ct=function(){return["full_name"]};let gt=(()=>{class t{constructor(){this.tableColumns=[{field:"id",header:"Rating Id",visible:!0},{field:"player_id",header:"Player Id",visible:!0},{field:"full_name",header:"Name",visible:!0},{field:"c_rate",header:"C",visible:!0},{field:"l_rate",header:"LW",visible:!0},{field:"r_rate",header:"RW",visible:!0},{field:"ld_rate",header:"LD",visible:!0},{field:"rd_rate",header:"RD",visible:!0},{field:"action",header:"Edit",visible:!0}],this.mobileTableColumns=[{field:"id",header:"Rating Id",visible:!0},{field:"player_id",header:"Player Id",visible:!0},{field:"full_name",header:"Name",visible:!0},{field:"action",header:"Edit",visible:!0}],this.first=0,this.rows=20,this.totalRecords=0,this.sortField="full_name",this.display=!1}ngOnInit(){this.playersForTable=this.mapItems(this.players)}applyFilterGlobal(a,i){this.dt?.filterGlobal(a.target.value,i)}mapItems(a){return a.map(i=>({...i,full_name:`${i.playerInfo?.firstname} ${i.playerInfo?.lastname}`}))}onSalaryClick(a){this.player=a,this.display=!0}onClose(){this.display=!1,this.player=null}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["cha-admin-player-mgmt-ratings-player-table"]],viewQuery:function(a,i){if(1&a&&e.Gf(ke,5),2&a){let o;e.iGM(o=e.CRH())&&(i.dt=o.first)}},inputs:{isMobile:"isMobile",players:"players"},decls:6,vars:15,consts:[["styleClass","p-datatable-sm p-datatable-striped","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",1,"table",3,"responsiveLayout","value","columns","rows","showCurrentPageReport","rowsPerPageOptions","paginator","totalRecords","sortField","sortOrder","filterDelay","globalFilterFields"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[3,"visible","fullScreen","showCloseIcon","dismissible","visibleChange",4,"ngIf"],[1,"flex","flex-wrap","justify-content-between"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search Player",3,"input"],[4,"ngIf","ngIfThen","ngIfElse"],["showMobile",""],["showDesktop",""],[3,"hidden",4,"ngFor","ngForOf"],[3,"hidden"],[3,"hidden","pSortableColumn",4,"ngFor","ngForOf"],[3,"hidden","pSortableColumn"],[3,"field"],["showMobileBody",""],["showDesktopBody",""],[1,"p-column-title"],[1,"table-body-cell"],[4,"ngIf"],["class","pi pi-ban text-red-600",4,"ngIf"],["class","pi pi-check-circle text-green-600",4,"ngIf"],[1,"pi","pi-ban","text-red-600"],[1,"pi","pi-check-circle","text-green-600"],["pButton","","type","button","icon","pi pi-user-edit",1,"p-button-rounded","p-button-primary",3,"click"],[3,"visible","fullScreen","showCloseIcon","dismissible","visibleChange"],[3,"player","closeSidebar"]],template:function(a,i){1&a&&(e.TgZ(0,"p-table",0,1),e.YNc(2,Oe,4,0,"ng-template",2),e.YNc(3,Be,5,3,"ng-template",3),e.YNc(4,st,5,3,"ng-template",4),e.qZA(),e.YNc(5,rt,2,5,"p-sidebar",5)),2&a&&(e.Q6J("responsiveLayout","stack")("value",i.playersForTable)("columns",i.isMobile?i.mobileTableColumns:i.tableColumns)("rows",i.rows)("showCurrentPageReport",!0)("rowsPerPageOptions",e.DdM(13,pt))("paginator",!0)("totalRecords",i.totalRecords)("sortField",i.sortField)("sortOrder",1)("filterDelay",0)("globalFilterFields",e.DdM(14,ct)),e.xp6(5),e.Q6J("ngIf",i.display))},dependencies:[u.sg,u.O5,I.Y,b.iA,Q.jx,b.lQ,b.fz,S.o,R.Hq,T],encapsulation:2,changeDetection:0}),t})(),ee=(()=>{class t{constructor(){this.form=new g.nJ({}),this.model={},this.options={}}ngOnInit(){this.goalie&&this.patchForm(),this.createFields()}createFields(){this.fields=[{fieldGroupClassName:"w-full flex flex-wrap column-gap-2 row-gap-3",fieldGroup:[this.playerIdField()]},{fieldGroupClassName:"w-full flex flex-wrap column-gap-2 row-gap-2",fieldGroup:[this.skatingField(),this.speedField(),this.passingField()]}]}patchForm(){this.model={player_id:this.goalie?.player_id,skating:this.goalie?.skating,speed:this.goalie?.speed,passing:this.goalie?.passing}}playerIdField(){return{key:"player_id",className:"w-full md:w-3",type:"text-input",templateOptions:{label:"Player Id",required:!0},validation:{messages:{required:()=>"required"}}}}skatingField(){return{key:"skating",className:"w-full md:w-3",type:"text-input",templateOptions:{label:"Skating",required:!0},validation:{messages:{required:()=>"required"}}}}speedField(){return{key:"speed",className:"w-full md:w-3",type:"text-input",templateOptions:{label:"Speed",required:!0},validation:{messages:{required:()=>"required"}}}}passingField(){return{key:"passing",className:"w-full md:w-3",type:"text-input",templateOptions:{label:"Passing",required:!0},validation:{messages:{required:()=>"required"}}}}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["cha-admin-player-mgmt-ratings-goalie-edit-form"]],inputs:{goalie:"goalie"},decls:2,vars:5,consts:[[1,"w-full",3,"formGroup"],[3,"model","fields","options","form"]],template:function(a,i){1&a&&(e.TgZ(0,"form",0),e._UZ(1,"formly-form",1),e.qZA()),2&a&&(e.Q6J("formGroup",i.form),e.xp6(1),e.Q6J("model",i.model)("fields",i.fields)("options",i.options)("form",i.form))},dependencies:[g._Y,g.JL,g.sg,Z.T7],encapsulation:2,changeDetection:0}),t})(),C=class{constructor(n){this.playerMgmtRatingsFacade=n,this.closeSidebar=new e.vpe}onCancel(){this.closeSidebar.emit(!0)}onSave(){const n={id:this.goalie?.id,...this.ratingFormRef?.form.value};this.playerMgmtRatingsFacade.editGoalie(n),this.playerMgmtRatingsFacade.isSaving$.pipe((0,x.t)(this),(0,j.h)(a=>!a)).subscribe(()=>this.closeSidebar.emit(!0))}};C.\u0275fac=function(n){return new(n||C)(e.Y36(P))},C.\u0275cmp=e.Xpm({type:C,selectors:[["cha-admin-player-mgmt-ratings-goalie-edit"]],viewQuery:function(n,a){if(1&n&&e.Gf(ee,5),2&n){let i;e.iGM(i=e.CRH())&&(a.ratingFormRef=i.first)}},inputs:{goalie:"goalie"},outputs:{closeSidebar:"closeSidebar"},decls:10,vars:5,consts:[[2,"background-color","var(--background-100)"],[1,"text-lg","font-light","text-center"],[3,"goalie"],[1,"flex","justify-content-between"],[1,"flex","column-gap-1"],["pButton","","pRipple","","type","button",1,"p-button-raised",3,"label","disabled","click"],["pButton","","pRipple","","type","button","label","Cancel",1,"p-button-raised","p-button-warning",3,"click"]],template:function(n,a){1&n&&(e.TgZ(0,"blade-card",0)(1,"blade-card-header",1),e._uU(2),e.qZA(),e.TgZ(3,"blade-card-body"),e._UZ(4,"cha-admin-player-mgmt-ratings-goalie-edit-form",2),e.qZA(),e.TgZ(5,"blade-card-footer")(6,"div",3)(7,"div",4)(8,"button",5),e.NdJ("click",function(){return a.onSave()}),e.qZA(),e.TgZ(9,"button",6),e.NdJ("click",function(){return a.onCancel()}),e.qZA()()()()()),2&n&&(e.xp6(2),e.AsE(" Edit ",null==a.goalie||null==a.goalie.playerInfo?null:a.goalie.playerInfo.firstname," ",null==a.goalie||null==a.goalie.playerInfo?null:a.goalie.playerInfo.lastname," Rating "),e.xp6(2),e.Q6J("goalie",a.goalie),e.xp6(4),e.Q6J("label","Save Rating")("disabled",(null==a.ratingFormRef||null==a.ratingFormRef.form?null:a.ratingFormRef.form.invalid)||!(null!=a.ratingFormRef&&null!=a.ratingFormRef.form&&a.ratingFormRef.form.dirty)))},dependencies:[R.Hq,J.A,N.y,X.x,V.n,ee],encapsulation:2,changeDetection:0}),C=(0,v.gn)([(0,x.c)(),(0,v.w6)("design:paramtypes",[P])],C);const mt=["dt"];function dt(t,n){if(1&t){const a=e.EpF();e.TgZ(0,"div",6)(1,"span",7),e._UZ(2,"i",8),e.TgZ(3,"input",9),e.NdJ("input",function(o){e.CHM(a);const p=e.oxw();return e.KtG(p.applyFilterGlobal(o,"contains"))}),e.qZA()()()}}function _t(t,n){1&t&&e.GkF(0)}function ut(t,n){if(1&t&&(e.TgZ(0,"th",14),e._uU(1),e.qZA()),2&t){const a=n.$implicit;e.Q6J("hidden",!a.visible),e.xp6(1),e.hij(" ",a.header," ")}}function ft(t,n){if(1&t&&(e.TgZ(0,"tr"),e.YNc(1,ut,2,2,"th",13),e.qZA()),2&t){const a=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",a.mobileTableColumns)}}function yt(t,n){if(1&t&&(e.TgZ(0,"th",16),e._uU(1),e._UZ(2,"p-sortIcon",17),e.qZA()),2&t){const a=n.$implicit;e.Q6J("hidden",!a.visible)("pSortableColumn",a.field),e.xp6(1),e.hij(" ",a.header," "),e.xp6(1),e.Q6J("field",a.field)}}function ht(t,n){if(1&t&&(e.TgZ(0,"tr"),e.YNc(1,yt,3,4,"th",15),e.qZA()),2&t){const a=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",a.tableColumns)}}function bt(t,n){if(1&t&&(e.YNc(0,_t,1,0,"ng-container",10),e.YNc(1,ft,2,1,"ng-template",null,11,e.W1O),e.YNc(3,ht,2,1,"ng-template",null,12,e.W1O)),2&t){const a=e.MAs(2),i=e.MAs(4),o=e.oxw();e.Q6J("ngIf",o.isMobile)("ngIfThen",a)("ngIfElse",i)}}function Pt(t,n){1&t&&e.GkF(0)}function Tt(t,n){if(1&t&&(e.ynx(0),e._uU(1),e.BQk()),2&t){const a=e.oxw().$implicit,i=e.oxw(2).$implicit;e.xp6(1),e.Oqu(i[a.field])}}function Ct(t,n){1&t&&e._UZ(0,"i",25)}function xt(t,n){1&t&&e._UZ(0,"i",26)}function Rt(t,n){if(1&t&&(e.ynx(0),e.TgZ(1,"div"),e.YNc(2,Ct,1,0,"i",23),e.YNc(3,xt,1,0,"i",24),e.qZA(),e.BQk()),2&t){const a=e.oxw().$implicit,i=e.oxw(2).$implicit;e.xp6(2),e.Q6J("ngIf",!1===i[a.field]),e.xp6(1),e.Q6J("ngIf",!0===i[a.field])}}function vt(t,n){if(1&t){const a=e.EpF();e.ynx(0),e.TgZ(1,"button",27),e.NdJ("click",function(){e.CHM(a);const o=e.oxw(3).$implicit,p=e.oxw();return e.KtG(p.onRatingClick(o))}),e.qZA(),e.BQk()}}function Mt(t,n){if(1&t&&(e.TgZ(0,"td",14)(1,"span",20),e._uU(2),e.qZA(),e.TgZ(3,"div",21),e.YNc(4,Tt,2,1,"ng-container",22),e.YNc(5,Rt,4,2,"ng-container",22),e.YNc(6,vt,2,0,"ng-container",22),e.qZA()()),2&t){const a=n.$implicit;e.Q6J("hidden",!a.visible),e.xp6(2),e.Oqu(a.header),e.xp6(2),e.Q6J("ngIf","isadmin"!==a.field&&"isactive"!==a.field),e.xp6(1),e.Q6J("ngIf","isadmin"===a.field||"isactive"===a.field),e.xp6(1),e.Q6J("ngIf","action"===a.field)}}function Ft(t,n){if(1&t&&(e.TgZ(0,"tr"),e.YNc(1,Mt,7,5,"td",13),e.qZA()),2&t){const a=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",a.mobileTableColumns)}}function Gt(t,n){1&t&&e._UZ(0,"i",25)}function wt(t,n){1&t&&e._UZ(0,"i",26)}function Zt(t,n){if(1&t&&(e.ynx(0),e.TgZ(1,"div"),e.YNc(2,Gt,1,0,"i",23),e.YNc(3,wt,1,0,"i",24),e.qZA(),e.BQk()),2&t){const a=e.oxw().$implicit,i=e.oxw(2).$implicit;e.xp6(2),e.Q6J("ngIf",!1===i[a.field]),e.xp6(1),e.Q6J("ngIf",!0===i[a.field])}}function It(t,n){if(1&t&&(e.ynx(0),e._uU(1),e.BQk()),2&t){const a=e.oxw().$implicit,i=e.oxw(2).$implicit;e.xp6(1),e.Oqu(i[a.field])}}function St(t,n){if(1&t){const a=e.EpF();e.ynx(0),e.TgZ(1,"button",27),e.NdJ("click",function(){e.CHM(a);const o=e.oxw(3).$implicit,p=e.oxw();return e.KtG(p.onRatingClick(o))}),e.qZA(),e.BQk()}}function Qt(t,n){if(1&t&&(e.TgZ(0,"td",14)(1,"span",20),e._uU(2),e.qZA(),e.TgZ(3,"div",21),e.YNc(4,Zt,4,2,"ng-container",22),e.YNc(5,It,2,1,"ng-container",22),e.YNc(6,St,2,0,"ng-container",22),e.qZA()()),2&t){const a=n.$implicit;e.Q6J("hidden",!a.visible),e.xp6(2),e.Oqu(a.header),e.xp6(2),e.Q6J("ngIf","isadmin"===a.field||"isactive"===a.field),e.xp6(1),e.Q6J("ngIf","isadmin"!==a.field&&"isactive"!==a.field),e.xp6(1),e.Q6J("ngIf","action"===a.field)}}function Jt(t,n){if(1&t&&(e.TgZ(0,"tr"),e.YNc(1,Qt,7,5,"td",13),e.qZA()),2&t){const a=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",a.tableColumns)}}function Nt(t,n){if(1&t&&(e.YNc(0,Pt,1,0,"ng-container",10),e.YNc(1,Ft,2,1,"ng-template",null,18,e.W1O),e.YNc(3,Jt,2,1,"ng-template",null,19,e.W1O)),2&t){const a=e.MAs(2),i=e.MAs(4),o=e.oxw();e.Q6J("ngIf",o.isMobile)("ngIfThen",a)("ngIfElse",i)}}function $t(t,n){if(1&t){const a=e.EpF();e.TgZ(0,"p-sidebar",28),e.NdJ("visibleChange",function(o){e.CHM(a);const p=e.oxw();return e.KtG(p.display=o)}),e.TgZ(1,"cha-admin-player-mgmt-ratings-goalie-edit",29),e.NdJ("closeSidebar",function(){e.CHM(a);const o=e.oxw();return e.KtG(o.onClose())}),e.qZA()()}if(2&t){const a=e.oxw();e.Q6J("visible",a.display)("fullScreen",!0)("showCloseIcon",!1)("dismissible",!1),e.xp6(1),e.Q6J("goalie",a.goalie)}}const At=function(){return[10,20,25,50,100]},kt=function(){return["full_name"]};let Ot=(()=>{class t{constructor(){this.tableColumns=[{field:"id",header:"Salary Id",visible:!0},{field:"player_id",header:"Player Id",visible:!0},{field:"full_name",header:"Name",visible:!0},{field:"skating",header:"Skating",visible:!0},{field:"speed",header:"Speed",visible:!0},{field:"passing",header:"Passing",visible:!0},{field:"action",header:"Edit",visible:!0}],this.mobileTableColumns=[{field:"id",header:"Salary Id",visible:!0},{field:"player_id",header:"Player Id",visible:!0},{field:"full_name",header:"Name",visible:!0},{field:"action",header:"Edit",visible:!0}],this.first=0,this.rows=20,this.totalRecords=0,this.sortField="full_name",this.display=!1}ngOnInit(){this.goaliesForTable=this.mapItems(this.goalies)}applyFilterGlobal(a,i){this.dt?.filterGlobal(a.target.value,i)}mapItems(a){return a.map(i=>({...i,full_name:`${i.playerInfo?.firstname} ${i.playerInfo?.lastname}`}))}onRatingClick(a){this.goalie=a,this.display=!0}onClose(){this.display=!1,this.goalie=null}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["cha-admin-player-mgmt-ratings-goalie-table"]],viewQuery:function(a,i){if(1&a&&e.Gf(mt,5),2&a){let o;e.iGM(o=e.CRH())&&(i.dt=o.first)}},inputs:{isMobile:"isMobile",goalies:"goalies"},decls:6,vars:15,consts:[["styleClass","p-datatable-sm p-datatable-striped","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",1,"table",3,"responsiveLayout","value","columns","rows","showCurrentPageReport","rowsPerPageOptions","paginator","totalRecords","sortField","sortOrder","filterDelay","globalFilterFields"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[3,"visible","fullScreen","showCloseIcon","dismissible","visibleChange",4,"ngIf"],[1,"flex","flex-wrap","justify-content-between"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search Goalie",3,"input"],[4,"ngIf","ngIfThen","ngIfElse"],["showMobile",""],["showDesktop",""],[3,"hidden",4,"ngFor","ngForOf"],[3,"hidden"],[3,"hidden","pSortableColumn",4,"ngFor","ngForOf"],[3,"hidden","pSortableColumn"],[3,"field"],["showMobileBody",""],["showDesktopBody",""],[1,"p-column-title"],[1,"table-body-cell"],[4,"ngIf"],["class","pi pi-ban text-red-600",4,"ngIf"],["class","pi pi-check-circle text-green-600",4,"ngIf"],[1,"pi","pi-ban","text-red-600"],[1,"pi","pi-check-circle","text-green-600"],["pButton","","type","button","icon","pi pi-user-edit",1,"p-button-rounded","p-button-primary",3,"click"],[3,"visible","fullScreen","showCloseIcon","dismissible","visibleChange"],[3,"goalie","closeSidebar"]],template:function(a,i){1&a&&(e.TgZ(0,"p-table",0,1),e.YNc(2,dt,4,0,"ng-template",2),e.YNc(3,bt,5,3,"ng-template",3),e.YNc(4,Nt,5,3,"ng-template",4),e.qZA(),e.YNc(5,$t,2,5,"p-sidebar",5)),2&a&&(e.Q6J("responsiveLayout","stack")("value",i.goaliesForTable)("columns",i.isMobile?i.mobileTableColumns:i.tableColumns)("rows",i.rows)("showCurrentPageReport",!0)("rowsPerPageOptions",e.DdM(13,At))("paginator",!0)("totalRecords",i.totalRecords)("sortField",i.sortField)("sortOrder",1)("filterDelay",0)("globalFilterFields",e.DdM(14,kt)),e.xp6(5),e.Q6J("ngIf",i.display))},dependencies:[u.sg,u.O5,I.Y,b.iA,Q.jx,b.lQ,b.fz,S.o,R.Hq,C],encapsulation:2,changeDetection:0}),t})();const Yt=function(){return{height:"6px"}};function Et(t,n){1&t&&e._UZ(0,"p-progressBar",5),2&t&&e.Akn(e.DdM(2,Yt))}function Ut(t,n){if(1&t&&(e.ynx(0),e._UZ(1,"cha-admin-player-mgmt-ratings-player-table",6),e.BQk()),2&t){const a=n.ngIf,i=e.oxw(3);e.xp6(1),e.Q6J("isMobile",i.isMobile)("players",a)}}function qt(t,n){if(1&t&&(e.ynx(0),e.YNc(1,Ut,2,2,"ng-container",4),e.ALo(2,"async"),e.BQk()),2&t){const a=e.oxw(2);e.xp6(1),e.Q6J("ngIf",e.lcZ(2,1,a.players$))}}function Lt(t,n){if(1&t&&(e.ynx(0),e._UZ(1,"cha-admin-player-mgmt-ratings-goalie-table",7),e.BQk()),2&t){const a=n.ngIf,i=e.oxw(3);e.xp6(1),e.Q6J("isMobile",i.isMobile)("goalies",a)}}function Bt(t,n){if(1&t&&(e.ynx(0),e.YNc(1,Lt,2,2,"ng-container",4),e.ALo(2,"async"),e.BQk()),2&t){const a=e.oxw(2);e.xp6(1),e.Q6J("ngIf",e.lcZ(2,1,a.goalies$))}}function Dt(t,n){if(1&t&&(e.TgZ(0,"blade-card")(1,"blade-card-body"),e.YNc(2,qt,3,3,"ng-container",4),e.YNc(3,Bt,3,3,"ng-container",4),e.qZA()()),2&t){const a=e.oxw();e.xp6(2),e.Q6J("ngIf",a.showSkaters),e.xp6(1),e.Q6J("ngIf",a.showGoalies)}}const Ht=[{path:"",component:(()=>{class t{constructor(a,i){this.playerMgmtRatingsFacade=a,this.displayFacade=i,this.selectOptions=[{label:"Skaters",value:"skater"},{label:"Goalies",value:"goalie"}],this.showSkaters=!0,this.showGoalies=!1,this.isLoaded$=this.playerMgmtRatingsFacade.isLoaded$,this.isLoading$=this.playerMgmtRatingsFacade.isLoading$,this.players$=this.playerMgmtRatingsFacade.players$,this.goalies$=this.playerMgmtRatingsFacade.goalies$,this.displayFacade.isMobile$.pipe((0,$e.P)()).subscribe(o=>{this.isMobile=o})}ngOnInit(){this.playerMgmtRatingsFacade.getPlayers(),this.playerMgmtRatingsFacade.getGoalies()}onOptionChanged(a){switch(a){case"skater":this.setSkaters();break;case"goalie":this.setGoalies();break;default:return}}setSkaters(){this.showSkaters=!0,this.showGoalies=!1}setGoalies(){this.showSkaters=!1,this.showGoalies=!0}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(P),e.Y36(L.pC))},t.\u0275cmp=e.Xpm({type:t,selectors:[["cha-admin-player-mgmt-ratings"]],decls:11,vars:7,consts:[["mode","indeterminate",3,"style",4,"ngIf"],[1,"pt-2"],[1,"text-lg","text-center",2,"font-weight","100"],[1,"col-12","flex","justify-content-center",3,"options","optionChanged"],[4,"ngIf"],["mode","indeterminate"],[3,"isMobile","players"],[3,"isMobile","goalies"]],template:function(a,i){1&a&&(e.TgZ(0,"blade-layout-feature-content")(1,"div"),e.YNc(2,Et,1,3,"p-progressBar",0),e.ALo(3,"async"),e.TgZ(4,"div",1)(5,"div",2),e._uU(6," Player Ratings "),e.qZA(),e.TgZ(7,"blade-button-select",3),e.NdJ("optionChanged",function(p){return i.onOptionChanged(p)}),e.qZA()(),e._UZ(8,"blade-divider"),e.YNc(9,Dt,4,2,"blade-card",4),e.ALo(10,"async"),e.qZA()()),2&a&&(e.xp6(2),e.Q6J("ngIf",e.lcZ(3,3,i.isLoading$)),e.xp6(5),e.Q6J("options",i.selectOptions),e.xp6(2),e.Q6J("ngIf",e.lcZ(10,5,i.isLoaded$)))},dependencies:[u.O5,k.k,J.A,N.y,Ae.R,O.C,f,gt,Ot,u.Ov],encapsulation:2,changeDetection:0}),t})()}];let Kt=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[W.Bz.forChild(Ht),W.Bz]}),t})(),Wt=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[K,P],imports:[u.ez,g.UX,k.q,I.l,b.U$,S.j,R.hJ,te.N,ae.E,O.C,f,Kt,s.Aw.forFeature("player-mgmt-ratings",fe),c.sQ.forFeature([K]),Z.X0.forRoot({wrappers:[{name:"control-wrapper",component:le.t}],types:[{name:"text-input",component:ie.T,wrappers:["control-wrapper"]}]})]}),t})()}}]);