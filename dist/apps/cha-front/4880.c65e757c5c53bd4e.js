"use strict";(self.webpackChunkcha_front=self.webpackChunkcha_front||[]).push([[4880],{4880:(ne,p,n)=>{n.r(p),n.d(p,{ChaFrontLeagueWaiversModule:()=>se});var g=n(6814),l=n(8131),i=n(3423),m=n(6651),f=n(9287),x=n(2321),$=n(9821),h=n(3757),A=n(7634),L=n(7398),S=n(6306),I=n(2096);const v="[LEAGUE WAIVERS]",c={getWaivers:(0,i.PH)(`${v} Get Waivers`),getWaiversSuccess:(0,i.PH)(`${v} Get Waivers Success`,(0,i.Ky)()),error:(0,i.PH)(`${v} Error`)};var e=n(5879),E=n(9862);let W=(()=>{var a;class s{constructor(t,o){this._http=t,this.apiUrl=o}getWaivers(){return this._http.get(`${this.apiUrl}/waivers/all`).pipe((0,L.U)(t=>t))}}return(a=s).\u0275fac=function(t){return new(t||a)(e.LFG(E.eN),e.LFG("apiUrl"))},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),s})(),y=(()=>{var a;class s{constructor(t,o){this.actions$=t,this.leagueWaiversService=o,this.getWaivers$=(0,l.GW)(()=>this.actions$.pipe((0,l.l4)(c.getWaivers),(0,A.z)(Z=>this.leagueWaiversService.getWaivers().pipe((0,L.U)(re=>c.getWaiversSuccess({waivers:re})),(0,S.K)(()=>(0,I.of)(c.error()))))))}}return(a=s).\u0275fac=function(t){return new(t||a)(e.LFG(l.eX),e.LFG(W))},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac}),s})();const F={waivers:[],loading:!1,loaded:!1},N=(0,i.Lq)(F,(0,i.on)(c.getWaivers,a=>({...a,loading:!0,loaded:!1})),(0,i.on)(c.getWaiversSuccess,(a,s)=>({...a,waivers:s.waivers,loading:!1,loaded:!0})),(0,i.on)(c.error,a=>F));function Y(a,s){return N(a,s)}const u=(0,i.ZF)("league-waivers"),P=(0,i.P1)(u,a=>a.loading),d={selectLoaded:(0,i.P1)(u,a=>a.loaded),selectLoading:P,selectWaivers:(0,i.P1)(u,a=>a.waivers)};let T=(()=>{var a;class s{constructor(t){this.store=t,this.isLoading$=this.store.select(d.selectLoading),this.isLoaded$=this.store.select(d.selectLoaded),this.waivers$=this.store.select(d.selectWaivers)}getWaivers(){this.store.dispatch(c.getWaivers())}}return(a=s).\u0275fac=function(t){return new(t||a)(e.LFG(i.yh))},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac}),s})();var C=n(9775),z=n(2490),j=n(7169),O=n(5155),R=n(4876),D=n(5219);function H(a,s){1&a&&(e.TgZ(0,"tr")(1,"th"),e._uU(2,"Priority No."),e.qZA(),e.TgZ(3,"th"),e._uU(4,"Team"),e.qZA()())}function K(a,s){if(1&a&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td")(4,"div",4),e._UZ(5,"img",5),e.TgZ(6,"div"),e._uU(7),e.qZA()()()()),2&a){const r=s.$implicit,t=e.oxw();e.xp6(2),e.Oqu(r.priority_number),e.xp6(3),e.Q6J("src",t.getString(r.teamLogo),e.LSH),e.xp6(2),e.hij(" ",r.teamName," ")}}let X=(()=>{var a;class s{ngOnInit(){this.waiversForTable=this.mapItems(this.waivers)}mapItems(t){return t.map(o=>({...o,teamLogo:this.getString(o.teamInfo?.teamlogo?o.teamInfo.teamlogo:""),teamName:`${o.teamInfo?.city} ${o.teamInfo?.nickname}`})).sort((o,Z)=>o.priority_number-Z.priority_number)}getString(t){const o=t.split("/");return`assets/${o[o.length-1]}`}}return(a=s).\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["cha-front-league-waivers-table"]],inputs:{waivers:"waivers"},decls:4,vars:1,consts:[["dataKey","id","responsiveLayout","scroll","styleClass","p-datatable-sm p-datatable-striped w-max","sortField","waiver.priority_number",3,"value"],["dt",""],["pTemplate","header"],["pTemplate","body"],[1,"flex","align-items-center","column-gap-2"],["height","30px",3,"src"]],template:function(t,o){1&t&&(e.TgZ(0,"p-table",0,1),e.YNc(2,H,5,0,"ng-template",2),e.YNc(3,K,8,3,"ng-template",3),e.qZA()),2&t&&e.Q6J("value",o.waiversForTable)},dependencies:[f.iA,D.jx],changeDetection:0}),s})();const V=function(){return{height:"6px"}};function q(a,s){1&a&&e._UZ(0,"p-progressBar",3),2&a&&e.Akn(e.DdM(2,V))}function k(a,s){if(1&a&&(e.TgZ(0,"div",4)(1,"div",5),e._uU(2),e.ALo(3,"async"),e.qZA()()),2&a){const r=e.oxw();e.xp6(2),e.hij(" ",e.lcZ(3,1,r.season$)," Waiver Priority ")}}function _(a,s){if(1&a&&(e.ynx(0),e.TgZ(1,"div",6),e._UZ(2,"cha-front-league-waivers-table",7),e.qZA(),e.BQk()),2&a){const r=s.ngIf;e.xp6(2),e.Q6J("waivers",r)}}function ee(a,s){if(1&a&&(e.TgZ(0,"blade-card")(1,"blade-card-body"),e.YNc(2,_,3,1,"ng-container",2),e.ALo(3,"async"),e.qZA()()),2&a){const r=e.oxw();e.xp6(2),e.Q6J("ngIf",e.lcZ(3,1,r.waivers$))}}const ae=[{path:"",component:(()=>{var a;class s{constructor(t,o){this.leagueWaiversFacade=t,this.leagueDataFacade=o,this.isLoaded$=this.leagueWaiversFacade.isLoaded$,this.isLoading$=this.leagueWaiversFacade.isLoading$,this.season$=this.leagueDataFacade.currentSeason$,this.waivers$=this.leagueWaiversFacade.waivers$}ngOnInit(){this.leagueWaiversFacade.getWaivers()}}return(a=s).\u0275fac=function(t){return new(t||a)(e.Y36(T),e.Y36(z.Ib))},a.\u0275cmp=e.Xpm({type:a,selectors:[["cha-front-league-waivers"]],decls:9,vars:9,consts:[["mode","indeterminate",3,"style",4,"ngIf"],["class","pt-2",4,"ngIf"],[4,"ngIf"],["mode","indeterminate"],[1,"pt-2"],[1,"text-lg","text-center",2,"font-weight","100"],[1,"flex","justify-content-center"],[3,"waivers"]],template:function(t,o){1&t&&(e.TgZ(0,"blade-layout-feature-content")(1,"div"),e.YNc(2,q,1,3,"p-progressBar",0),e.ALo(3,"async"),e.YNc(4,k,4,3,"div",1),e.ALo(5,"async"),e._UZ(6,"blade-divider"),e.YNc(7,ee,4,3,"blade-card",2),e.ALo(8,"async"),e.qZA()()),2&t&&(e.xp6(2),e.Q6J("ngIf",e.lcZ(3,3,o.isLoading$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(5,5,o.season$)),e.xp6(3),e.Q6J("ngIf",e.lcZ(8,7,o.isLoaded$)))},dependencies:[g.O5,m.k,j.R,O.A,R.y,h.C,X,g.Ov],encapsulation:2,changeDetection:0}),s})()}];let te=(()=>{var a;class s{}return(a=s).\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[C.Bz.forChild(ae),C.Bz]}),s})(),se=(()=>{var a;class s{}return(a=s).\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({providers:[W,T,y],imports:[g.ez,te,m.q,f.U$,x.E,$.N,h.C,i.Aw.forFeature("league-waivers",Y),l.sQ.forFeature([y])]}),s})()}}]);