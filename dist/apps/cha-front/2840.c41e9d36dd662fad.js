"use strict";(self.webpackChunkcha_front=self.webpackChunkcha_front||[]).push([[2840],{2840:(tt,g,o)=>{o.r(g),o.d(g,{ChaFrontDraftSummaryModule:()=>w});var m=o(6814),c=o(3423),d=o(8131),$=o(2321),y=o(3757),F=o(4302),C=o(9821),h=o(6651),p=o(9775),S=o(2490);const f="[Draft Summary]",i={getDraftPicks:(0,c.PH)(`${f} Get Draft Picks`),getDraftPicksSuccess:(0,c.PH)(`${f} Get Draft Picks Success`,(0,c.Ky)()),error:(0,c.PH)(`${f} Error`)},D={draftPicks:[],loading:!1,loaded:!1},A=(0,c.Lq)(D,(0,c.on)(i.getDraftPicks,a=>({...a,loading:!0,loaded:!1})),(0,c.on)(i.getDraftPicksSuccess,(a,n)=>({...a,draftPicks:n.draftPicks,loading:!1,loaded:!0})),(0,c.on)(i.error,a=>D));function T(a,n){return A(a,n)}const l=(0,c.ZF)("draft-summary"),B=(0,c.P1)(l,a=>a.draftPicks),E=(0,c.P1)(l,a=>a.loading),u={selectDraftPicks:B,selectLoaded:(0,c.P1)(l,a=>a.loaded),selectLoading:E};var t=o(5879);let v=(()=>{var a;class n{constructor(r){this.store=r,this.isLoading$=this.store.select(u.selectLoading),this.isLoaded$=this.store.select(u.selectLoaded),this.draftPicks$=this.store.select(u.selectDraftPicks)}getDraftPicks(){this.store.dispatch(i.getDraftPicks())}}return(a=n).\u0275fac=function(r){return new(r||a)(t.LFG(c.yh))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac}),n})();var Q=o(7169),Y=o(5155),J=o(4876),z=o(1403);const G=function(){return{height:"6px"}};function N(a,n){1&a&&t._UZ(0,"p-progressBar",4),2&a&&t.Akn(t.DdM(2,G))}function R(a,n){if(1&a&&(t.ynx(0),t._UZ(1,"blade-table",5),t.BQk()),2&a){const s=n.ngIf,r=t.oxw().ngIf,e=t.oxw(2);t.xp6(1),t.Q6J("layout","stack")("data",e.mapItems(r))("tableColumns",e.tableColumns)("teams",s)("filteringOptions",e.filteringOptions)("tableType","draft-summary")("showPaginator",!0)("rows",24)}}function U(a,n){if(1&a&&(t.ynx(0),t.YNc(1,R,2,8,"ng-container",3),t.ALo(2,"async"),t.BQk()),2&a){const s=t.oxw(2);t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,s.teams$))}}function b(a,n){if(1&a&&(t.ynx(0),t.YNc(1,U,3,3,"ng-container",3),t.ALo(2,"async"),t.BQk()),2&a){const s=t.oxw();t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,s.draftPicks$))}}const H=function(){return{"font-weight":"100"}},j=[{path:"",component:(()=>{var a;class n{constructor(r,e){this.draftSummaryFacade=r,this.leagueDataFacade=e,this.tableColumns=[{field:"draft_year",header:"Year"},{field:"orgTeam",header:"Team"},{field:"draft_round",header:"Round"},{field:"draft_overall",header:"Overall"},{field:"player",header:"Player"},{field:"team",header:"Picked By"}],this.filteringOptions=["draft_year","draft_round","draft_overall","player","team"],this.isLoaded$=this.draftSummaryFacade.isLoaded$,this.isLoading$=this.draftSummaryFacade.isLoading$,this.draftPicks$=this.draftSummaryFacade.draftPicks$,this.teams$=this.leagueDataFacade.leagueTeams$}ngOnInit(){this.draftSummaryFacade.getDraftPicks()}mapItems(r){return r.map(e=>({...e,team:`${e.team_id.city} ${e.team_id.nickname}`,player:`${e.player_id?.firstname} ${e.player_id?.lastname}`,playerImg:this.getPlayerPicture(e.player_id?.nhl_id),teamImg:this.getString(e.team_id.teamlogo),orgTeam:`${e.pick_team_id?e.pick_team_id.city:""} ${e.pick_team_id?e.pick_team_id.nickname:""}`,orgTeamImg:e.pick_team_id?this.getString(e.pick_team_id.teamlogo):""}))}getString(r){const e=r.split("/");return`assets/${e[e.length-1]}`}getPlayerPicture(r){if(r)return`https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${r}@2x.jpg`}}return(a=n).\u0275fac=function(r){return new(r||a)(t.Y36(v),t.Y36(S.Ib))},a.\u0275cmp=t.Xpm({type:a,selectors:[["cha-front-draft-summary"]],decls:12,vars:9,consts:[["mode","indeterminate",3,"style",4,"ngIf"],[1,"grid","pt-2"],[1,"text-lg","text-center","col-12"],[4,"ngIf"],["mode","indeterminate"],[3,"layout","data","tableColumns","teams","filteringOptions","tableType","showPaginator","rows"]],template:function(r,e){1&r&&(t.TgZ(0,"blade-layout-feature-content")(1,"div"),t.YNc(2,N,1,3,"p-progressBar",0),t.ALo(3,"async"),t.TgZ(4,"div",1)(5,"div",2),t._uU(6," CHA Draft Summary "),t.qZA()(),t._UZ(7,"blade-divider"),t.TgZ(8,"blade-card")(9,"blade-card-body"),t.YNc(10,b,3,3,"ng-container",3),t.ALo(11,"async"),t.qZA()()()()),2&r&&(t.xp6(2),t.Q6J("ngIf",t.lcZ(3,4,e.isLoading$)),t.xp6(3),t.Akn(t.DdM(8,H)),t.xp6(5),t.Q6J("ngIf",t.lcZ(11,6,e.isLoaded$)))},dependencies:[m.O5,h.k,Q.R,y.C,Y.A,J.y,z.h,m.Ov],encapsulation:2,changeDetection:0}),n})()}];let K=(()=>{var a;class n{}return(a=n).\u0275fac=function(r){return new(r||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[p.Bz.forChild(j),p.Bz]}),n})();var X=o(7634),V=o(7398),W=o(6306),_=o(2096);let P=(()=>{var a;class n{constructor(r,e){this.actions$=r,this.draftService=e,this.getDraftSummary$=(0,d.GW)(()=>this.actions$.pipe((0,d.l4)(i.getDraftPicks),(0,X.z)(rt=>this.draftService.getDraftPicks().pipe((0,V.U)(q=>i.getDraftPicksSuccess({draftPicks:q})),(0,W.K)(()=>(0,_.of)(i.error()))))))}}return(a=n).\u0275fac=function(r){return new(r||a)(t.LFG(d.eX),t.LFG(S.fM))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac}),n})(),w=(()=>{var a;class n{}return(a=n).\u0275fac=function(r){return new(r||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({providers:[P,v],imports:[m.ez,K,h.q,$.E,y.C,C.N,F.V,c.Aw.forFeature("draft-summary",T),d.sQ.forFeature([P])]}),n})()}}]);