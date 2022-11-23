"use strict";(self.webpackChunkcha_admin=self.webpackChunkcha_admin||[]).push([[813],{2813:(st,S,n)=>{n.r(S),n.d(S,{ChaAdminPlayerMgmtGoalieCurrentModule:()=>ot});var y=n(6895),h=n(433),c=n(8776),o=n(9653),I=n(4057),M=n(5593),A=n(1740),Q=n(8235),w=n(3214),b=n(2336),z=n(8173),W=n(5621),j=n(7240),k=n(2675),J=n(5199),X=n(1624),N=n(1779),T=n(8417),q=n(590);const m="[PLAYER MGMT GOALIE CURRENT]",s={getGoalies:(0,o.PH)(`${m} Get Goalies`),getGoaliesSuccess:(0,o.PH)(`${m} Get Goalies Success`,(0,o.Ky)()),editGoalie:(0,o.PH)(`${m} Edit Goalie`,(0,o.Ky)()),editGoaliesuccess:(0,o.PH)(`${m} Edit Goalie Success`,(0,o.Ky)()),deleteGoalie:(0,o.PH)(`${m} Delete Goalie`,(0,o.Ky)()),deleteGoaliesuccess:(0,o.PH)(`${m} Delete Goalie Success`,(0,o.Ky)()),error:(0,o.PH)(`${m} Error`)},Y={goalies:[],goalie:null,loading:!1,loaded:!1,saving:!1,saved:!1},oe=(0,o.Lq)(Y,(0,o.on)(s.getGoalies,t=>({...t,loading:!0,loaded:!1})),(0,o.on)(s.editGoalie,s.deleteGoalie,t=>({...t,saving:!0,saved:!1})),(0,o.on)(s.getGoaliesSuccess,(t,l)=>({...t,goalies:l.goalies,loading:!1,loaded:!0})),(0,o.on)(s.editGoaliesuccess,s.deleteGoaliesuccess,(t,l)=>({...t,saving:!1,saved:!0})),(0,o.on)(s.error,t=>Y));function re(t,l){return oe(t,l)}const u=(0,o.ZF)("player-mgmt-goalie-current"),ue=(0,o.P1)(u,t=>t.loading),fe=(0,o.P1)(u,t=>t.loaded),_e=(0,o.P1)(u,t=>t.saving),ye=(0,o.P1)(u,t=>t.saved),E=(0,o.P1)(u,t=>t.goalies),d={selectLoaded:fe,selectLoading:ue,selectSaving:_e,selectSaved:ye,selectGoalies:E,selectGoalie:(0,o.P1)(u,t=>t.goalie),selectGoalieOptions:(0,o.P1)(E,t=>t.map(l=>({value:l.player_id.id,label:`${l.player_id.firstname} ${l.player_id.lastname}`})))};var e=n(4650);let f=(()=>{class t{constructor(a){this.store=a,this.isLoading$=this.store.select(d.selectLoading),this.isLoaded$=this.store.select(d.selectLoaded),this.isSaving$=this.store.select(d.selectSaving),this.isSaved$=this.store.select(d.selectSaved),this.goalies$=this.store.select(d.selectGoalies),this.goalie$=this.store.select(d.selectGoalie),this.goaliesOptions$=this.store.select(d.selectGoalieOptions)}getGoalies(){this.store.dispatch(s.getGoalies())}editGoalie(a){this.store.dispatch(s.editGoalie({goalie:a}))}deleteGoalie(a){this.store.dispatch(s.deleteGoalie({goalieId:a}))}}return t.\u0275fac=function(a){return new(a||t)(e.LFG(o.yh))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})();var Ge=n(4268),O=n(1889),U=n(4984),L=n(805),R=n(655),P=n(9933),D=n(9300);let B=(()=>{class t{constructor(a,i){this.playerMgmtGoalieCurrentFacade=a,this.leagueDataFacade=i,this.form=new h.nJ({}),this.model={},this.options={},this.teamOptions$=this.leagueDataFacade.leagueTeamsOptions$}ngOnInit(){this.goalie&&this.patchForm(),this.createFields()}createFields(){this.fields=[{fieldGroupClassName:"w-full flex flex-wrap column-gap-2 row-gap-3",fieldGroup:[this.playerIdField()]},{fieldGroupClassName:"w-full flex flex-wrap column-gap-2 row-gap-2",fieldGroup:[this.teamField(),this.statusField()]}]}patchForm(){this.model={...this.goalie,player_id:{id:this.goalie?.player_id.id},team_name:this.goalie?.teamInfo.shortname}}playerIdField(){return{key:"player_id.id",className:"w-full md:w-3",type:"text-input",templateOptions:{label:"Player Id",required:!0},validation:{messages:{required:()=>"Player Id is required"}}}}teamField(){return{key:"team_name",className:"w-full md:w-3",type:"single-select",templateOptions:{label:"Team",placeholder:"Select Team",required:!0,options:this.teamOptions$,valueProp:"value",labelProp:"label"},validation:{messages:{required:()=>"Team is required"}}}}statusField(){return{key:"player_status",className:"w-full md:w-3",type:"single-select",templateOptions:{label:"Player Status",required:!0,options:[{label:"Veteran",value:"Veteran"},{label:"Rookie",value:"Rookie"}],valueProp:"value",labelProp:"label"},validation:{messages:{required:()=>"Status is required"}}}}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(f),e.Y36(T.Ib))},t.\u0275cmp=e.Xpm({type:t,selectors:[["cha-admin-player-mgmt-goalie-current-edit-form"]],inputs:{goalie:"goalie"},decls:2,vars:5,consts:[[1,"w-full",3,"formGroup"],[3,"model","fields","options","form"]],template:function(a,i){1&a&&(e.TgZ(0,"form",0),e._UZ(1,"formly-form",1),e.qZA()),2&a&&(e.Q6J("formGroup",i.form),e.xp6(1),e.Q6J("model",i.model)("fields",i.fields)("options",i.options)("form",i.form))},dependencies:[h._Y,h.JL,h.sg,I.T7],encapsulation:2,changeDetection:0}),t})();var be=n(3186),ve=n(1185);let g=class{constructor(l){this.playerMgmtGoalieCurrentFacade=l,this.closeSidebar=new e.vpe}onCancel(){this.closeSidebar.emit(!0)}onSave(){const l={...this.playerFormRef?.model};this.playerMgmtGoalieCurrentFacade.editGoalie(l),this.playerMgmtGoalieCurrentFacade.isSaving$.pipe((0,P.t)(this),(0,D.h)(a=>!a)).subscribe(()=>this.closeSidebar.emit(!0))}onDelete(){this.goalie&&(this.playerMgmtGoalieCurrentFacade.deleteGoalie(this.goalie.player_id.id),this.playerMgmtGoalieCurrentFacade.isSaving$.pipe((0,P.t)(this),(0,D.h)(l=>!l)).subscribe(()=>this.closeSidebar.emit(!0)))}};g.\u0275fac=function(l){return new(l||g)(e.Y36(f))},g.\u0275cmp=e.Xpm({type:g,selectors:[["cha-admin-player-mgmt-goalie-current-edit"]],viewQuery:function(l,a){if(1&l&&e.Gf(B,5),2&l){let i;e.iGM(i=e.CRH())&&(a.playerFormRef=i.first)}},inputs:{goalie:"goalie"},outputs:{closeSidebar:"closeSidebar"},decls:10,vars:3,consts:[[2,"background-color","var(--background-100)"],[1,"text-lg","font-light","text-center"],[3,"goalie"],[1,"flex","justify-content-between"],[1,"flex","column-gap-1"],["pButton","","pRipple","","type","button",1,"p-button-raised",3,"label","disabled","click"],["pButton","","pRipple","","type","button","label","Cancel",1,"p-button-raised","p-button-warning",3,"click"]],template:function(l,a){1&l&&(e.TgZ(0,"blade-card",0)(1,"blade-card-header",1),e._uU(2," Edit Goalie "),e.qZA(),e.TgZ(3,"blade-card-body"),e._UZ(4,"cha-admin-player-mgmt-goalie-current-edit-form",2),e.qZA(),e.TgZ(5,"blade-card-footer")(6,"div",3)(7,"div",4)(8,"button",5),e.NdJ("click",function(){return a.onSave()}),e.qZA(),e.TgZ(9,"button",6),e.NdJ("click",function(){return a.onCancel()}),e.qZA()()()()()),2&l&&(e.xp6(4),e.Q6J("goalie",a.goalie),e.xp6(4),e.Q6J("label","Save Player")("disabled",(null==a.playerFormRef||null==a.playerFormRef.form?null:a.playerFormRef.form.invalid)||!(null!=a.playerFormRef&&null!=a.playerFormRef.form&&a.playerFormRef.form.dirty)))},dependencies:[M.Hq,O.A,U.y,be.x,ve.n,B],encapsulation:2,changeDetection:0}),g=(0,R.gn)([(0,P.c)(),(0,R.w6)("design:paramtypes",[f])],g);const Me=["dt"];function Te(t,l){if(1&t){const a=e.EpF();e.TgZ(0,"div",6)(1,"span",7),e._UZ(2,"i",8),e.TgZ(3,"input",9),e.NdJ("input",function(r){e.CHM(a);const p=e.oxw();return e.KtG(p.applyFilterGlobal(r,"contains"))}),e.qZA()()()}}function Pe(t,l){1&t&&e.GkF(0)}function xe(t,l){if(1&t&&(e.TgZ(0,"th",14),e._uU(1),e.qZA()),2&t){const a=l.$implicit;e.Q6J("hidden",!a.visible),e.xp6(1),e.hij(" ",a.header," ")}}function Fe(t,l){if(1&t&&(e.TgZ(0,"tr"),e.YNc(1,xe,2,2,"th",13),e.qZA()),2&t){const a=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",a.mobileTableColumns)}}function $e(t,l){if(1&t&&(e.TgZ(0,"th",16),e._uU(1),e._UZ(2,"p-sortIcon",17),e.qZA()),2&t){const a=l.$implicit;e.Q6J("hidden",!a.visible)("pSortableColumn",a.field),e.xp6(1),e.hij(" ",a.header," "),e.xp6(1),e.Q6J("field",a.field)}}function Ze(t,l){if(1&t&&(e.TgZ(0,"tr"),e.YNc(1,$e,3,4,"th",15),e.qZA()),2&t){const a=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",a.tableColumns)}}function Se(t,l){if(1&t&&(e.YNc(0,Pe,1,0,"ng-container",10),e.YNc(1,Fe,2,1,"ng-template",null,11,e.W1O),e.YNc(3,Ze,2,1,"ng-template",null,12,e.W1O)),2&t){const a=e.MAs(2),i=e.MAs(4),r=e.oxw();e.Q6J("ngIf",r.isMobile)("ngIfThen",a)("ngIfElse",i)}}function Ie(t,l){1&t&&e.GkF(0)}function Ae(t,l){if(1&t&&(e.ynx(0),e._uU(1),e.BQk()),2&t){const a=e.oxw().$implicit,i=e.oxw(2).$implicit;e.xp6(1),e.Oqu(i[a.field])}}function Qe(t,l){1&t&&e._UZ(0,"i",25)}function we(t,l){1&t&&e._UZ(0,"i",26)}function Je(t,l){if(1&t&&(e.ynx(0),e.TgZ(1,"div"),e.YNc(2,Qe,1,0,"i",23),e.YNc(3,we,1,0,"i",24),e.qZA(),e.BQk()),2&t){const a=e.oxw().$implicit,i=e.oxw(2).$implicit;e.xp6(2),e.Q6J("ngIf",!1===i[a.field]),e.xp6(1),e.Q6J("ngIf",!0===i[a.field])}}function Ne(t,l){if(1&t){const a=e.EpF();e.ynx(0),e.TgZ(1,"button",27),e.NdJ("click",function(){e.CHM(a);const r=e.oxw(3).$implicit,p=e.oxw();return e.KtG(p.onGoalieClick(r))}),e.qZA(),e.BQk()}}function Ye(t,l){if(1&t&&(e.TgZ(0,"td",14)(1,"span",20),e._uU(2),e.qZA(),e.TgZ(3,"div",21),e.YNc(4,Ae,2,1,"ng-container",22),e.YNc(5,Je,4,2,"ng-container",22),e.YNc(6,Ne,2,0,"ng-container",22),e.qZA()()),2&t){const a=l.$implicit;e.Q6J("hidden",!a.visible),e.xp6(2),e.Oqu(a.header),e.xp6(2),e.Q6J("ngIf","isadmin"!==a.field&&"isactive"!==a.field),e.xp6(1),e.Q6J("ngIf","isadmin"===a.field||"isactive"===a.field),e.xp6(1),e.Q6J("ngIf","action"===a.field)}}function Ee(t,l){if(1&t&&(e.TgZ(0,"tr"),e.YNc(1,Ye,7,5,"td",13),e.qZA()),2&t){const a=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",a.mobileTableColumns)}}function Oe(t,l){1&t&&e._UZ(0,"i",25)}function Ue(t,l){1&t&&e._UZ(0,"i",26)}function Le(t,l){if(1&t&&(e.ynx(0),e.TgZ(1,"div"),e.YNc(2,Oe,1,0,"i",23),e.YNc(3,Ue,1,0,"i",24),e.qZA(),e.BQk()),2&t){const a=e.oxw().$implicit,i=e.oxw(2).$implicit;e.xp6(2),e.Q6J("ngIf",!1===i[a.field]),e.xp6(1),e.Q6J("ngIf",!0===i[a.field])}}function Re(t,l){if(1&t&&(e.ynx(0),e._uU(1),e.BQk()),2&t){const a=e.oxw().$implicit,i=e.oxw(2).$implicit;e.xp6(1),e.Oqu(i[a.field])}}function De(t,l){if(1&t){const a=e.EpF();e.ynx(0),e.TgZ(1,"button",27),e.NdJ("click",function(){e.CHM(a);const r=e.oxw(3).$implicit,p=e.oxw();return e.KtG(p.onGoalieClick(r))}),e.qZA(),e.BQk()}}function Be(t,l){if(1&t&&(e.TgZ(0,"td",14)(1,"span",20),e._uU(2),e.qZA(),e.TgZ(3,"div",21),e.YNc(4,Le,4,2,"ng-container",22),e.YNc(5,Re,2,1,"ng-container",22),e.YNc(6,De,2,0,"ng-container",22),e.qZA()()),2&t){const a=l.$implicit;e.Q6J("hidden",!a.visible),e.xp6(2),e.Oqu(a.header),e.xp6(2),e.Q6J("ngIf","isadmin"===a.field||"isactive"===a.field),e.xp6(1),e.Q6J("ngIf","isadmin"!==a.field&&"isactive"!==a.field),e.xp6(1),e.Q6J("ngIf","action"===a.field)}}function He(t,l){if(1&t&&(e.TgZ(0,"tr"),e.YNc(1,Be,7,5,"td",13),e.qZA()),2&t){const a=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",a.tableColumns)}}function Ke(t,l){if(1&t&&(e.YNc(0,Ie,1,0,"ng-container",10),e.YNc(1,Ee,2,1,"ng-template",null,18,e.W1O),e.YNc(3,He,2,1,"ng-template",null,19,e.W1O)),2&t){const a=e.MAs(2),i=e.MAs(4),r=e.oxw();e.Q6J("ngIf",r.isMobile)("ngIfThen",a)("ngIfElse",i)}}function ze(t,l){if(1&t){const a=e.EpF();e.TgZ(0,"p-sidebar",28),e.NdJ("visibleChange",function(r){e.CHM(a);const p=e.oxw();return e.KtG(p.display=r)}),e.TgZ(1,"cha-admin-player-mgmt-goalie-current-edit",29),e.NdJ("closeSidebar",function(){e.CHM(a);const r=e.oxw();return e.KtG(r.onClose())}),e.qZA()()}if(2&t){const a=e.oxw();e.Q6J("visible",a.display)("fullScreen",!0)("showCloseIcon",!1)("dismissible",!1),e.xp6(1),e.Q6J("goalie",a.goalie)}}const We=function(){return[10,20,25,50,100]},je=function(){return["full_name","playerId"]};let ke=(()=>{class t{constructor(){this.tableColumns=[{field:"id",header:"Player Stats Id",visible:!0},{field:"playerId",header:"Player Id",visible:!0},{field:"full_name",header:"Name",visible:!0},{field:"team_name",header:"Team",visible:!0},{field:"player_status",header:"Status",visible:!0},{field:"action",header:"Edit",visible:!0}],this.mobileTableColumns=[{field:"id",header:"Player Stats Id",visible:!0},{field:"playerId",header:"Player Id",visible:!0},{field:"full_name",header:"Name",visible:!0},{field:"team_name",header:"Team",visible:!0},{field:"action",header:"Edit",visible:!0}],this.first=0,this.rows=20,this.totalRecords=0,this.sortField="full_name",this.display=!1}ngOnInit(){this.goaliesForTable=this.mapItems(this.goalies)}applyFilterGlobal(a,i){this.dt?.filterGlobal(a.target.value,i)}mapItems(a){return a.map(i=>({...i,playerId:`${i.player_id.id}`,full_name:`${i.player_id?.firstname} ${i.player_id?.lastname}`,team_name:`${i.teamInfo.city} ${i.teamInfo.nickname}`}))}onGoalieClick(a){this.goalie=a,this.display=!0}onClose(){this.display=!1,this.goalie=null}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["cha-admin-player-mgmt-goalie-current-table"]],viewQuery:function(a,i){if(1&a&&e.Gf(Me,5),2&a){let r;e.iGM(r=e.CRH())&&(i.dt=r.first)}},inputs:{isMobile:"isMobile",goalies:"goalies"},decls:6,vars:15,consts:[["styleClass","p-datatable-sm p-datatable-striped","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",1,"table",3,"responsiveLayout","value","columns","rows","showCurrentPageReport","rowsPerPageOptions","paginator","totalRecords","sortField","sortOrder","filterDelay","globalFilterFields"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[3,"visible","fullScreen","showCloseIcon","dismissible","visibleChange",4,"ngIf"],[1,"flex","flex-wrap","justify-content-between"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search Goalie",3,"input"],[4,"ngIf","ngIfThen","ngIfElse"],["showMobile",""],["showDesktop",""],[3,"hidden",4,"ngFor","ngForOf"],[3,"hidden"],[3,"hidden","pSortableColumn",4,"ngFor","ngForOf"],[3,"hidden","pSortableColumn"],[3,"field"],["showMobileBody",""],["showDesktopBody",""],[1,"p-column-title"],[1,"table-body-cell"],[4,"ngIf"],["class","pi pi-ban text-red-600",4,"ngIf"],["class","pi pi-check-circle text-green-600",4,"ngIf"],[1,"pi","pi-ban","text-red-600"],[1,"pi","pi-check-circle","text-green-600"],["pButton","","type","button","icon","pi pi-user-edit",1,"p-button-rounded","p-button-primary",3,"click"],[3,"visible","fullScreen","showCloseIcon","dismissible","visibleChange"],[3,"goalie","closeSidebar"]],template:function(a,i){1&a&&(e.TgZ(0,"p-table",0,1),e.YNc(2,Te,4,0,"ng-template",2),e.YNc(3,Se,5,3,"ng-template",3),e.YNc(4,Ke,5,3,"ng-template",4),e.qZA(),e.YNc(5,ze,2,5,"p-sidebar",5)),2&a&&(e.Q6J("responsiveLayout","stack")("value",i.goaliesForTable)("columns",i.isMobile?i.mobileTableColumns:i.tableColumns)("rows",i.rows)("showCurrentPageReport",!0)("rowsPerPageOptions",e.DdM(13,We))("paginator",!0)("totalRecords",i.totalRecords)("sortField",i.sortField)("sortOrder",1)("filterDelay",0)("globalFilterFields",e.DdM(14,je)),e.xp6(5),e.Q6J("ngIf",i.display))},dependencies:[y.sg,y.O5,w.Y,b.iA,L.jx,b.lQ,b.fz,M.Hq,A.o,g],encapsulation:2,changeDetection:0}),t})();const Xe=function(){return{height:"6px"}};function qe(t,l){1&t&&e._UZ(0,"p-progressBar",4),2&t&&e.Akn(e.DdM(2,Xe))}function Ve(t,l){if(1&t&&(e.ynx(0),e._UZ(1,"cha-admin-player-mgmt-goalie-current-table",5),e.BQk()),2&t){const a=l.ngIf,i=e.oxw(2);e.xp6(1),e.Q6J("isMobile",i.isMobile)("goalies",a)}}function et(t,l){if(1&t&&(e.TgZ(0,"blade-card")(1,"blade-card-body"),e.YNc(2,Ve,2,2,"ng-container",3),e.ALo(3,"async"),e.qZA()()),2&t){const a=e.oxw();e.xp6(2),e.Q6J("ngIf",e.lcZ(3,1,a.goalies$))}}const tt=[{path:"",component:(()=>{class t{constructor(a,i){this.playerMgmtGoalieCurrentFacade=a,this.displayFacade=i,this.isLoaded$=this.playerMgmtGoalieCurrentFacade.isLoaded$,this.isLoading$=this.playerMgmtGoalieCurrentFacade.isLoading$,this.goalies$=this.playerMgmtGoalieCurrentFacade.goalies$,this.displayFacade.isMobile$.pipe((0,q.P)()).subscribe(r=>{this.isMobile=r}),this.playerMgmtGoalieCurrentFacade.getGoalies()}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(f),e.Y36(T.pC))},t.\u0275cmp=e.Xpm({type:t,selectors:[["cha-admin-player-mgmt-goalie-current"]],decls:10,vars:6,consts:[["mode","indeterminate",3,"style",4,"ngIf"],[1,"pt-2"],[1,"text-lg","text-center",2,"font-weight","100"],[4,"ngIf"],["mode","indeterminate"],[3,"isMobile","goalies"]],template:function(a,i){1&a&&(e.TgZ(0,"blade-layout-feature-content")(1,"div"),e.YNc(2,qe,1,3,"p-progressBar",0),e.ALo(3,"async"),e.TgZ(4,"div",1)(5,"div",2),e._uU(6," Current Goalies For Season "),e.qZA()(),e._UZ(7,"blade-divider"),e.YNc(8,et,4,3,"blade-card",3),e.ALo(9,"async"),e.qZA()()),2&a&&(e.xp6(2),e.Q6J("ngIf",e.lcZ(3,2,i.isLoading$)),e.xp6(6),e.Q6J("ngIf",e.lcZ(9,4,i.isLoaded$)))},dependencies:[y.O5,Q.k,Ge.R,O.A,U.y,J.C,ke,y.Ov],encapsulation:2,changeDetection:0}),t})()}];let at=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[N.Bz.forChild(tt),N.Bz]}),t})();var lt=n(4086),x=n(1365),F=n(6129),_=n(4004),$=n(262),Z=n(9646),H=n(8505),it=n(529);let nt=(()=>{class t{constructor(a,i){this._http=a,this.apiUrl=i}getGoalies(a){return this._http.get(`${this.apiUrl}/goalie-stats/${a}`).pipe((0,_.U)(i=>i))}editGoalie(a,i){return this._http.put(`${this.apiUrl}/goalie-stats/${i}/${a.player_id.id}`,a).pipe((0,_.U)(r=>r))}deleteGoalie(a,i){return this._http.delete(`${this.apiUrl}/goalie-stats/${i}/${a}`).pipe((0,_.U)(r=>r))}}return t.\u0275fac=function(a){return new(a||t)(e.LFG(it.eN),e.LFG("apiUrl"))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),K=(()=>{class t{constructor(a,i,r,p,rt){this.actions$=a,this.playerMgmtGoalieCurrentService=i,this.playerMgmtGoalieCurrentFacade=r,this.leagueDataFacade=p,this.messageService=rt,this.getPlayers$=(0,c.GW)(()=>this.actions$.pipe((0,c.l4)(s.getGoalies),(0,lt.g)(500),(0,x.M)(this.leagueDataFacade.leagueData$),(0,F.z)(([v,C])=>this.playerMgmtGoalieCurrentService.getGoalies(C.current_year).pipe((0,_.U)(G=>s.getGoaliesSuccess({goalies:G})),(0,$.K)(()=>(0,Z.of)(s.error())))))),this.editPlayer$=(0,c.GW)(()=>this.actions$.pipe((0,c.l4)(s.editGoalie),(0,x.M)(this.leagueDataFacade.leagueData$),(0,F.z)(([v,C])=>this.playerMgmtGoalieCurrentService.editGoalie(v.goalie,C.current_year).pipe((0,_.U)(G=>s.editGoaliesuccess({goalie:G})),(0,$.K)(()=>(0,Z.of)(s.error())))))),this.editPlayerSuccess$=(0,c.GW)(()=>this.actions$.pipe((0,c.l4)(s.editGoaliesuccess),(0,H.b)(()=>{this.messageService.add({severity:"success",summary:"Edit Player",detail:"Player has been updated"}),this.playerMgmtGoalieCurrentFacade.getGoalies()})),{dispatch:!1}),this.deletePlayer$=(0,c.GW)(()=>this.actions$.pipe((0,c.l4)(s.deleteGoalie),(0,x.M)(this.leagueDataFacade.leagueData$),(0,F.z)(([v,C])=>this.playerMgmtGoalieCurrentService.deleteGoalie(v.goalieId,C.current_year).pipe((0,_.U)(G=>s.deleteGoaliesuccess({goalie:G})),(0,$.K)(()=>(0,Z.of)(s.error())))))),this.deletePlayerSuccess$=(0,c.GW)(()=>this.actions$.pipe((0,c.l4)(s.deleteGoaliesuccess),(0,H.b)(()=>{this.messageService.add({severity:"success",summary:"Delete Player",detail:"Player has been removed"}),this.playerMgmtGoalieCurrentFacade.getGoalies()})),{dispatch:!1})}}return t.\u0275fac=function(a){return new(a||t)(e.LFG(c.eX),e.LFG(nt),e.LFG(f),e.LFG(T.Ib),e.LFG(L.ez))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})(),ot=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[K,f],imports:[y.ez,h.UX,Q.q,w.l,b.U$,M.hJ,A.j,X.E,k.N,J.C,at,o.Aw.forFeature("player-mgmt-goalie-current",re),c.sQ.forFeature([K]),I.X0.forRoot({wrappers:[{name:"control-wrapper",component:j.t}],types:[{name:"text-input",component:W.T,wrappers:["control-wrapper"]},{name:"single-select",component:z.S,wrappers:["control-wrapper"]}]})]}),t})()}}]);