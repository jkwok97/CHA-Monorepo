"use strict";(self.webpackChunkcha_front=self.webpackChunkcha_front||[]).push([[4645],{1867:(D,b,l)=>{l.d(b,{o:()=>r.o});var r=l(2182)},2182:(D,b,l)=>{l.d(b,{o:()=>Z});var g,r=l(7582),u=l(5879),d=l(6814),h=l(95),i=l(6128),m=l(1791),e=l(3997);let Z=((g=class{constructor(){this.optionChanged=new u.vpe,this.optionSelected=new h.p4}onOptionClick(f){this.optionSelected.setValue(f.option.value)}ngOnInit(){this.optionSelected.valueChanges.pipe((0,e.x)(),(0,m.t)(this)).subscribe(f=>{this.optionChanged.emit(f)})}ngAfterViewInit(){this.optionSelected.setValue(this.index?this.options[this.index].value:this.options[0].value)}}).\u0275fac=function(f){return new(f||g)},g.\u0275cmp=u.Xpm({type:g,selectors:[["blade-button-select"]],inputs:{options:"options",index:"index"},outputs:{optionChanged:"optionChanged"},standalone:!0,features:[u.jDz],decls:1,vars:2,consts:[["optionLabel","label","optionValue","value",3,"options","formControl","onOptionClick"]],template:function(f,I){1&f&&(u.TgZ(0,"p-selectButton",0),u.NdJ("onOptionClick",function(N){return I.onOptionClick(N)}),u.qZA()),2&f&&u.Q6J("options",I.options)("formControl",I.optionSelected)},dependencies:[d.ez,h.UX,h.JJ,h.oH,i.Qy,i.UN],encapsulation:2,changeDetection:0}),g);Z=(0,r.gn)([(0,m.c)()],Z)},3632:(D,b,l)=>{l.d(b,{n:()=>d});var r=l(5879);const u=["*"];let d=(()=>{var h;class i{constructor(){this.class="blade-card-header"}}return(h=i).\u0275fac=function(e){return new(e||h)},h.\u0275cmp=r.Xpm({type:h,selectors:[["blade-card-header"]],hostVars:2,hostBindings:function(e,g){2&e&&r.Tol(g.class)},ngContentSelectors:u,decls:1,vars:0,template:function(e,g){1&e&&(r.F$t(),r.Hsn(0))},styles:[".blade-card{display:flex;flex-direction:column;box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f;border-radius:6px}.blade-card-header{padding:1rem 1rem 0}.blade-card-body{padding:1rem}.blade-card-footer{padding:0 1rem 1rem}\n"],encapsulation:2,changeDetection:0}),i})()},4645:(D,b,l)=>{l.r(b),l.d(b,{ChaFrontStatsTeamLeadersModule:()=>mt});var r=l(6814),u=l(8131),d=l(3423),h=l(6651),i=l(1180),m=l(6825),e=l(5879),g=l(5219),Z=l(6005),P=l(4562);function f(t,o){if(1&t&&e._UZ(0,"span",11),2&t){const n=e.oxw(3);e.Tol(n.accordion.collapseIcon),e.Q6J("ngClass",n.iconClass)}}function I(t,o){if(1&t&&e._UZ(0,"ChevronDownIcon",11),2&t){const n=e.oxw(3);e.Q6J("ngClass",n.iconClass)}}function k(t,o){if(1&t&&(e.ynx(0),e.YNc(1,f,1,3,"span",9),e.YNc(2,I,1,1,"ChevronDownIcon",10),e.BQk()),2&t){const n=e.oxw(2);e.xp6(1),e.Q6J("ngIf",n.accordion.collapseIcon),e.xp6(1),e.Q6J("ngIf",!n.accordion.collapseIcon)}}function N(t,o){if(1&t&&e._UZ(0,"span",11),2&t){const n=e.oxw(3);e.Tol(n.accordion.expandIcon),e.Q6J("ngClass",n.iconClass)}}function U(t,o){if(1&t&&e._UZ(0,"ChevronRightIcon",11),2&t){const n=e.oxw(3);e.Q6J("ngClass",n.iconClass)}}function G(t,o){if(1&t&&(e.ynx(0),e.YNc(1,N,1,3,"span",9),e.YNc(2,U,1,1,"ChevronRightIcon",10),e.BQk()),2&t){const n=e.oxw(2);e.xp6(1),e.Q6J("ngIf",n.accordion.expandIcon),e.xp6(1),e.Q6J("ngIf",!n.accordion.expandIcon)}}function R(t,o){if(1&t&&(e.ynx(0),e.YNc(1,k,3,2,"ng-container",3),e.YNc(2,G,3,2,"ng-container",3),e.BQk()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngIf",n.selected),e.xp6(1),e.Q6J("ngIf",!n.selected)}}function H(t,o){}function K(t,o){1&t&&e.YNc(0,H,0,0,"ng-template")}function j(t,o){if(1&t&&(e.TgZ(0,"span",12),e._uU(1),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.hij(" ",n.header," ")}}function W(t,o){1&t&&e.GkF(0)}function X(t,o){1&t&&e.Hsn(0,1,["*ngIf","hasHeaderFacet"])}function z(t,o){1&t&&e.GkF(0)}function V(t,o){if(1&t&&(e.ynx(0),e.YNc(1,z,1,0,"ng-container",6),e.BQk()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngTemplateOutlet",n.contentTemplate)}}const q=["*",[["p-header"]]],ee=function(t){return{$implicit:t}},Q=function(t){return{transitionParams:t}},te=function(t){return{value:"visible",params:t}},ae=function(t){return{value:"hidden",params:t}},se=["*","p-header"],ne=["*"];let oe=0,v=(()=>{var t;class o{get selected(){return this._selected}set selected(a){this._selected=a,this.loaded||(this._selected&&this.cache&&(this.loaded=!0),this.changeDetector.detectChanges())}get iconClass(){return"end"===this.iconPos?"p-accordion-toggle-icon-end":"p-accordion-toggle-icon"}constructor(a,s){(0,i.Z)(this,"changeDetector",void 0),(0,i.Z)(this,"header",void 0),(0,i.Z)(this,"headerStyle",void 0),(0,i.Z)(this,"tabStyle",void 0),(0,i.Z)(this,"contentStyle",void 0),(0,i.Z)(this,"tabStyleClass",void 0),(0,i.Z)(this,"headerStyleClass",void 0),(0,i.Z)(this,"contentStyleClass",void 0),(0,i.Z)(this,"disabled",void 0),(0,i.Z)(this,"cache",!0),(0,i.Z)(this,"transitionOptions","400ms cubic-bezier(0.86, 0, 0.07, 1)"),(0,i.Z)(this,"iconPos","start"),(0,i.Z)(this,"selectedChange",new e.vpe),(0,i.Z)(this,"headerFacet",void 0),(0,i.Z)(this,"templates",void 0),(0,i.Z)(this,"_selected",!1),(0,i.Z)(this,"contentTemplate",void 0),(0,i.Z)(this,"headerTemplate",void 0),(0,i.Z)(this,"iconTemplate",void 0),(0,i.Z)(this,"id","p-accordiontab-"+oe++),(0,i.Z)(this,"loaded",!1),(0,i.Z)(this,"accordion",void 0),this.changeDetector=s,this.accordion=a}ngAfterContentInit(){this.templates.forEach(a=>{switch(a.getType()){case"content":default:this.contentTemplate=a.template;break;case"header":this.headerTemplate=a.template;break;case"icon":this.iconTemplate=a.template}})}toggle(a){if(this.disabled)return!1;let s=this.findTabIndex();if(this.selected)this.selected=!1,this.accordion.onClose.emit({originalEvent:a,index:s});else{if(!this.accordion.multiple)for(var c=0;c<this.accordion.tabs.length;c++)this.accordion.tabs[c].selected&&(this.accordion.tabs[c].selected=!1,this.accordion.tabs[c].selectedChange.emit(!1),this.accordion.tabs[c].changeDetector.markForCheck());this.selected=!0,this.loaded=!0,this.accordion.onOpen.emit({originalEvent:a,index:s})}this.selectedChange.emit(this.selected),this.accordion.updateActiveIndex(),this.changeDetector.markForCheck(),a.preventDefault()}findTabIndex(){let a=-1;for(var s=0;s<this.accordion.tabs.length;s++)if(this.accordion.tabs[s]==this){a=s;break}return a}get hasHeaderFacet(){return this.headerFacet&&this.headerFacet.length>0}onKeydown(a){(32===a.which||13===a.which)&&(this.toggle(a),a.preventDefault())}ngOnDestroy(){this.accordion.tabs.splice(this.findTabIndex(),1)}}return t=o,(0,i.Z)(o,"\u0275fac",function(a){return new(a||t)(e.Y36((0,e.Gpc)(()=>y)),e.Y36(e.sBO))}),(0,i.Z)(o,"\u0275cmp",e.Xpm({type:t,selectors:[["p-accordionTab"]],contentQueries:function(a,s,c){if(1&a&&(e.Suo(c,g.h4,4),e.Suo(c,g.jx,4)),2&a){let p;e.iGM(p=e.CRH())&&(s.headerFacet=p),e.iGM(p=e.CRH())&&(s.templates=p)}},hostAttrs:[1,"p-element"],inputs:{header:"header",headerStyle:"headerStyle",tabStyle:"tabStyle",contentStyle:"contentStyle",tabStyleClass:"tabStyleClass",headerStyleClass:"headerStyleClass",contentStyleClass:"contentStyleClass",disabled:"disabled",cache:"cache",transitionOptions:"transitionOptions",iconPos:"iconPos",selected:"selected"},outputs:{selectedChange:"selectedChange"},ngContentSelectors:se,decls:12,vars:38,consts:[[1,"p-accordion-tab",3,"ngClass","ngStyle"],[1,"p-accordion-header"],["role","tab",1,"p-accordion-header-link",3,"ngClass","click","keydown"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["class","p-accordion-header-text",4,"ngIf"],[4,"ngTemplateOutlet"],["role","region",1,"p-toggleable-content"],[1,"p-accordion-content",3,"ngClass","ngStyle"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],[1,"p-accordion-header-text"]],template:function(a,s){1&a&&(e.F$t(q),e.TgZ(0,"div",0)(1,"div",1)(2,"a",2),e.NdJ("click",function(p){return s.toggle(p)})("keydown",function(p){return s.onKeydown(p)}),e.YNc(3,R,3,2,"ng-container",3),e.YNc(4,K,1,0,null,4),e.YNc(5,j,2,1,"span",5),e.YNc(6,W,1,0,"ng-container",6),e.YNc(7,X,1,0,"ng-content",3),e.qZA()(),e.TgZ(8,"div",7)(9,"div",8),e.Hsn(10),e.YNc(11,V,2,1,"ng-container",3),e.qZA()()()),2&a&&(e.ekj("p-accordion-tab-active",s.selected),e.Q6J("ngClass",s.tabStyleClass)("ngStyle",s.tabStyle),e.xp6(1),e.ekj("p-highlight",s.selected)("p-disabled",s.disabled),e.xp6(1),e.Akn(s.headerStyle),e.Q6J("ngClass",s.headerStyleClass),e.uIk("tabindex",s.disabled?null:0)("id",s.id)("aria-controls",s.id+"-content")("aria-expanded",s.selected),e.xp6(1),e.Q6J("ngIf",!s.iconTemplate),e.xp6(1),e.Q6J("ngTemplateOutlet",s.iconTemplate)("ngTemplateOutletContext",e.VKq(28,ee,s.selected)),e.xp6(1),e.Q6J("ngIf",!s.hasHeaderFacet),e.xp6(1),e.Q6J("ngTemplateOutlet",s.headerTemplate),e.xp6(1),e.Q6J("ngIf",s.hasHeaderFacet),e.xp6(1),e.Q6J("@tabContent",s.selected?e.VKq(32,te,e.VKq(30,Q,s.transitionOptions)):e.VKq(36,ae,e.VKq(34,Q,s.transitionOptions))),e.uIk("id",s.id+"-content")("aria-hidden",!s.selected)("aria-labelledby",s.id),e.xp6(1),e.Q6J("ngClass",s.contentStyleClass)("ngStyle",s.contentStyle),e.xp6(2),e.Q6J("ngIf",s.contentTemplate&&(s.cache?s.loaded:s.selected)))},dependencies:function(){return[r.mk,r.O5,r.tP,r.PC,P.X,Z.v]},styles:[".p-accordion-header-link{cursor:pointer;display:flex;align-items:center;-webkit-user-select:none;user-select:none;position:relative;text-decoration:none}.p-accordion-header-link:focus{z-index:1}.p-accordion-header-text{line-height:1}.p-accordion .p-toggleable-content{overflow:hidden}.p-accordion .p-accordion-tab-active>.p-toggleable-content:not(.ng-animating){overflow:inherit}.p-accordion-toggle-icon-end{order:1;margin-left:auto}.p-accordion-toggle-icon{order:0}\n"],encapsulation:2,data:{animation:[(0,m.X$)("tabContent",[(0,m.SB)("hidden",(0,m.oB)({height:"0"})),(0,m.SB)("visible",(0,m.oB)({height:"*"})),(0,m.eR)("visible <=> hidden",[(0,m.jt)("{{transitionParams}}")]),(0,m.eR)("void => *",(0,m.jt)(0))])]},changeDetection:0})),o})(),y=(()=>{var t;class o{get activeIndex(){return this._activeIndex}set activeIndex(a){this._activeIndex=a,this.preventActiveIndexPropagation?this.preventActiveIndexPropagation=!1:this.updateSelectionState()}constructor(a,s){(0,i.Z)(this,"el",void 0),(0,i.Z)(this,"changeDetector",void 0),(0,i.Z)(this,"multiple",!1),(0,i.Z)(this,"style",void 0),(0,i.Z)(this,"styleClass",void 0),(0,i.Z)(this,"expandIcon",void 0),(0,i.Z)(this,"collapseIcon",void 0),(0,i.Z)(this,"onClose",new e.vpe),(0,i.Z)(this,"onOpen",new e.vpe),(0,i.Z)(this,"activeIndexChange",new e.vpe),(0,i.Z)(this,"tabList",void 0),(0,i.Z)(this,"tabListSubscription",null),(0,i.Z)(this,"_activeIndex",void 0),(0,i.Z)(this,"preventActiveIndexPropagation",!1),(0,i.Z)(this,"tabs",[]),this.el=a,this.changeDetector=s}ngAfterContentInit(){this.initTabs(),this.tabListSubscription=this.tabList.changes.subscribe(a=>{this.initTabs()})}initTabs(){this.tabs=this.tabList.toArray(),this.updateSelectionState(),this.changeDetector.markForCheck()}getBlockableElement(){return this.el.nativeElement.children[0]}updateSelectionState(){if(this.tabs&&this.tabs.length&&null!=this._activeIndex)for(let a=0;a<this.tabs.length;a++){let s=this.multiple?this._activeIndex.includes(a):a===this._activeIndex;s!==this.tabs[a].selected&&(this.tabs[a].selected=s,this.tabs[a].selectedChange.emit(s),this.tabs[a].changeDetector.markForCheck())}}updateActiveIndex(){let a=this.multiple?[]:null;this.tabs.forEach((s,c)=>{if(s.selected){if(!this.multiple)return void(a=c);a.push(c)}}),this.preventActiveIndexPropagation=!0,this.activeIndexChange.emit(a)}ngOnDestroy(){this.tabListSubscription&&this.tabListSubscription.unsubscribe()}}return t=o,(0,i.Z)(o,"\u0275fac",function(a){return new(a||t)(e.Y36(e.SBq),e.Y36(e.sBO))}),(0,i.Z)(o,"\u0275cmp",e.Xpm({type:t,selectors:[["p-accordion"]],contentQueries:function(a,s,c){if(1&a&&e.Suo(c,v,4),2&a){let p;e.iGM(p=e.CRH())&&(s.tabList=p)}},hostAttrs:[1,"p-element"],inputs:{multiple:"multiple",style:"style",styleClass:"styleClass",expandIcon:"expandIcon",collapseIcon:"collapseIcon",activeIndex:"activeIndex"},outputs:{onClose:"onClose",onOpen:"onOpen",activeIndexChange:"activeIndexChange"},ngContentSelectors:ne,decls:2,vars:4,consts:[["role","tablist",3,"ngClass","ngStyle"]],template:function(a,s){1&a&&(e.F$t(),e.TgZ(0,"div",0),e.Hsn(1),e.qZA()),2&a&&(e.Tol(s.styleClass),e.Q6J("ngClass","p-accordion p-component")("ngStyle",s.style))},dependencies:[r.mk,r.PC],encapsulation:2,changeDetection:0})),o})(),ie=(()=>{var t;class o{}return t=o,(0,i.Z)(o,"\u0275fac",function(a){return new(a||t)}),(0,i.Z)(o,"\u0275mod",e.oAB({type:t})),(0,i.Z)(o,"\u0275inj",e.cJS({imports:[r.ez,P.X,Z.v,g.m8]})),o})();var J=l(9287),le=l(9821),ce=l(2321),re=l(3757),_=l(2490),de=l(2460),pe=l(7634),Y=l(7398),me=l(6306),ue=l(2096);const A="[LEAGUE STATS TEAM]",L={getLeagueTeamStats:(0,d.PH)(`${A} Get League Team Stats`,(0,d.Ky)()),getLeagueTeamStatsSuccess:(0,d.PH)(`${A} Get League Team Stats Success`,(0,d.Ky)()),error:(0,d.PH)(`${A} Error`)};var _e=l(9862);let B=(()=>{var t;class o{constructor(a,s){this._http=a,this.apiUrl=s}getTeamStatsBySeasonByType(a,s){return this._http.get(`${this.apiUrl}/team-stats/${a}/${s}`).pipe((0,Y.U)(c=>c))}}return(t=o).\u0275fac=function(a){return new(a||t)(e.LFG(_e.eN),e.LFG("apiUrl"))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),o})(),E=(()=>{var t;class o{constructor(a,s,c){this.actions$=a,this.leagueDataFacade=s,this.statsTeamLeadersService=c,this.getLeagueTeamStats$=(0,u.GW)(()=>this.actions$.pipe((0,u.l4)(L.getLeagueTeamStats),(0,de.M)(this.leagueDataFacade.leagueData$),(0,pe.z)(([p,O])=>this.statsTeamLeadersService.getTeamStatsBySeasonByType(O.offseason?O.prev_year:O.current_year,p.seasonType).pipe((0,Y.U)(ut=>L.getLeagueTeamStatsSuccess({leagueTeamStats:ut})),(0,me.K)(()=>(0,ue.of)(L.error()))))))}}return(t=o).\u0275fac=function(a){return new(a||t)(e.LFG(u.eX),e.LFG(_.Ib),e.LFG(B))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),o})();const w={leagueTeamStats:[],loading:!1,loaded:!1},Te=(0,d.Lq)(w,(0,d.on)(L.getLeagueTeamStats,t=>({...t,loading:!0,loaded:!1})),(0,d.on)(L.getLeagueTeamStatsSuccess,(t,o)=>({...t,leagueTeamStats:o.leagueTeamStats,loading:!1,loaded:!0})),(0,d.on)(L.error,t=>w));function be(t,o){return Te(t,o)}const $=(0,d.ZF)("league-stats-team"),ye=(0,d.P1)($,t=>t.loading),Le=(0,d.P1)($,t=>t.loaded),x=(0,d.P1)($,t=>t.leagueTeamStats),T={selectLoaded:Le,selectLoading:ye,selectLeagueTeamStats:x,selectLeagueTeamStatsStandings:(0,d.P1)(x,t=>function Ne(t){return t.filter(a=>Number(a.games_played)>0).sort((a,s)=>Number(s.points)===Number(a.points)?Number(s.wins)===Number(a.wins)?Number(s.goals_for)-Number(s.goals_against)==Number(a.goals_for)-Number(a.goals_against)?Number(s.goals_for)-Number(a.goals_for):Number(s.goals_for)-Number(s.goals_against)-(Number(a.goals_for)-Number(a.goals_against)):Number(s.wins)-Number(a.wins):Number(s.points)-Number(a.points))}(t)),selectLeagueTeamStatsWinningStreak:(0,d.P1)(x,t=>function Ae(t){return t.filter(a=>Number(a.games_played)>0).sort((a,s)=>Number(s.long_win_streak)-Number(a.long_win_streak))}(t)),selectLeagueTeamStatsPenalties:(0,d.P1)(x,t=>function $e(t){return t.filter(a=>Number(a.games_played)>0).sort((a,s)=>Number(s.penalty_minutes)/Number(s.games_played)-Number(a.penalty_minutes)/Number(a.games_played))}(t)),selectLeagueTeamStatsGoalDiff:(0,d.P1)(x,t=>function Me(t){return t.filter(a=>Number(a.games_played)>0).sort((a,s)=>Number(s.goals_for)-Number(s.goals_against)-(Number(a.goals_for)-Number(a.goals_against)))}(t)),selectLeagueTeamStatsPp:(0,d.P1)(x,t=>function Oe(t){return t.filter(a=>Number(a.games_played)>0).sort((a,s)=>Number(s.pp_goals)/Number(s.pp_attempts)*100-Number(a.pp_goals)/Number(a.pp_attempts)*100)}(t)),selectLeagueTeamStatsPk:(0,d.P1)(x,t=>function ke(t){return t.filter(a=>Number(a.games_played)>0).sort((a,s)=>(Number(s.pk_attempts)-Number(s.pk_goals))/Number(s.pk_attempts)*100-(Number(a.pk_attempts)-Number(a.pk_goals))/Number(a.pk_attempts)*100)}(t))};let S=(()=>{var t;class o{constructor(a){this.store=a,this.isLoading$=this.store.select(T.selectLoading),this.isLoaded$=this.store.select(T.selectLoaded),this.leagueTeamStats$=this.store.select(T.selectLeagueTeamStats),this.leagueTeamStandings$=this.store.select(T.selectLeagueTeamStatsStandings),this.leagueTeamWinningStreak$=this.store.select(T.selectLeagueTeamStatsWinningStreak),this.leagueTeamPenalties$=this.store.select(T.selectLeagueTeamStatsPenalties),this.leagueTeamGoalDiff$=this.store.select(T.selectLeagueTeamStatsGoalDiff),this.leagueTeamPp$=this.store.select(T.selectLeagueTeamStatsPp),this.leagueTeamPk$=this.store.select(T.selectLeagueTeamStatsPk)}getLeagueTeamStats(a){this.store.dispatch(L.getLeagueTeamStats({seasonType:a}))}}return(t=o).\u0275fac=function(a){return new(a||t)(e.LFG(d.yh))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),o})();var M=l(9775),Qe=l(5155),Je=l(4876),Ye=l(3632),Be=l(7169),Ee=l(2182),C=l(1374);function we(t,o){if(1&t&&(e.TgZ(0,"th"),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.hij(" ",n.header," ")}}function Ue(t,o){if(1&t&&(e.TgZ(0,"tr"),e.YNc(1,we,2,1,"th",4),e.qZA()),2&t){const n=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",n.tableColumns)}}function Ge(t,o){if(1&t&&e._UZ(0,"img",10),2&t){const n=e.oxw(2).$implicit;e.Q6J("src",n.teamImg,e.LSH)}}function Re(t,o){if(1&t&&(e.TgZ(0,"div",7),e._uU(1),e.qZA()),2&t){const n=e.oxw(2).$implicit;e.xp6(1),e.hij(" ",(n.wins/n.games_played*100).toFixed(1),"% ")}}function He(t,o){if(1&t&&(e.TgZ(0,"div",7),e._uU(1),e.qZA()),2&t){const n=e.oxw(2).$implicit;e.xp6(1),e.hij(" ",(n.penalty_minutes/n.games_played).toFixed(1)," ")}}function Ke(t,o){if(1&t&&(e.TgZ(0,"div",7),e._uU(1),e.qZA()),2&t){const n=e.oxw(2).$implicit;e.xp6(1),e.hij(" ",n.goals_for-n.goals_against," ")}}function je(t,o){if(1&t&&(e.TgZ(0,"div",7),e._uU(1),e.qZA()),2&t){const n=e.oxw(2).$implicit;e.xp6(1),e.hij(" ",(n.pp_goals/n.pp_attempts*100).toFixed(1),"% ")}}function We(t,o){if(1&t&&(e.TgZ(0,"div",7),e._uU(1),e.qZA()),2&t){const n=e.oxw(2).$implicit;e.xp6(1),e.hij(" ",((n.pk_attempts-n.pk_goals)/n.pk_attempts*100).toFixed(1),"% ")}}function Xe(t,o){if(1&t&&(e.TgZ(0,"td")(1,"span",6),e._uU(2),e.qZA(),e.TgZ(3,"div",7),e.ynx(4),e.TgZ(5,"div",7),e.YNc(6,Ge,1,1,"img",8),e._uU(7),e.qZA(),e.YNc(8,Re,2,1,"div",9),e.YNc(9,He,2,1,"div",9),e.YNc(10,Ke,2,1,"div",9),e.YNc(11,je,2,1,"div",9),e.YNc(12,We,2,1,"div",9),e.BQk(),e.qZA()()),2&t){const n=o.$implicit,a=e.oxw().$implicit,s=e.oxw(2);e.xp6(2),e.Oqu(n.header),e.xp6(4),e.Q6J("ngIf","team"===n.field),e.xp6(1),e.hij(" ","team"!==n.field?a[n.field]:s.isMobile?"":a[n.field]," "),e.xp6(1),e.Q6J("ngIf","win_pct"===n.field),e.xp6(1),e.Q6J("ngIf","pim_game"===n.field),e.xp6(1),e.Q6J("ngIf","goals_diff"===n.field),e.xp6(1),e.Q6J("ngIf","pp_pct"===n.field),e.xp6(1),e.Q6J("ngIf","pk_pct"===n.field)}}function ze(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"tr",5),e.NdJ("click",function(){const c=e.CHM(n).$implicit,p=e.oxw(2);return e.KtG(p.onClick(c))}),e.YNc(1,Xe,13,8,"td",4),e.qZA()}if(2&t){const n=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",n.tableColumns)}}function Ve(t,o){if(1&t&&(e.TgZ(0,"p-table",1),e.YNc(1,Ue,2,1,"ng-template",2),e.YNc(2,ze,2,1,"ng-template",3),e.qZA()),2&t){const n=e.oxw();e.Q6J("responsiveLayout","scroll")("value",n.mapItems(n.stats))("columns",n.tableColumns)}}let F=(()=>{var t;class o{constructor(a,s,c){this.leagueDataFacade=a,this.displayFacade=s,this.router=c,this.isMobile=!1,this.teams$=this.leagueDataFacade.leagueTeams$,this.teams$.pipe((0,C.P)()).subscribe(p=>{this.teams=p}),this.displayFacade.isMobile$.pipe((0,C.P)()).subscribe(p=>{this.isMobile=p})}getLogo(a){if(this.teams.length>0){const s=this.teams.find(c=>c.id===a)?.teamlogo;return s?this.getString(s):void 0}}getString(a){const s=a.split("/");return`assets/${s[s.length-1]}`}mapItems(a){return a.map(s=>({...s,team:`${s.team_id.nickname}`,teamImg:this.getString(s.team_id.teamlogo)}))}onClick(a){this.router.navigate([`/league/teams/${a.team_id.id}`])}}return(t=o).\u0275fac=function(a){return new(a||t)(e.Y36(_.Ib),e.Y36(_.pC),e.Y36(M.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["cha-front-stats-team-leaders-table"]],inputs:{stats:"stats",tableColumns:"tableColumns"},decls:1,vars:1,consts:[["styleClass","p-datatable-sm p-datatable-striped","class","table",3,"responsiveLayout","value","columns",4,"ngIf"],["styleClass","p-datatable-sm p-datatable-striped",1,"table",3,"responsiveLayout","value","columns"],["pTemplate","header"],["pTemplate","body"],[4,"ngFor","ngForOf"],[1,"cursor-pointer",3,"click"],[1,"p-column-title"],[1,"table-body-cell"],["height","30px",3,"src",4,"ngIf"],["class","table-body-cell",4,"ngIf"],["height","30px",3,"src"]],template:function(a,s){1&a&&e.YNc(0,Ve,3,3,"p-table",0),2&a&&e.Q6J("ngIf",s.stats)},dependencies:[r.sg,r.O5,g.jx,J.iA],styles:[".table-body-cell[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}"],changeDetection:0}),o})(),qe=(()=>{var t;class o{constructor(a,s){this.leagueStatsTeamFacade=a,this.displayFacade=s,this.tableColumns=[{field:"team",header:"Team"},{field:"goals_for",header:"GF"},{field:"goals_against",header:"GA"},{field:"goals_diff",header:"Goal Diff"}],this.leagueStatsTeamFacade.leagueTeamGoalDiff$.pipe((0,C.P)()).subscribe(c=>{this.stats=c}),this.isMobile$=this.displayFacade.isMobile$}}return(t=o).\u0275fac=function(a){return new(a||t)(e.Y36(S),e.Y36(_.pC))},t.\u0275cmp=e.Xpm({type:t,selectors:[["cha-front-stats-team-leaders-differentials"]],decls:4,vars:6,consts:[["header","Goal Differentials",3,"selected","disabled"],[3,"tableColumns","stats"]],template:function(a,s){1&a&&(e.TgZ(0,"p-accordion")(1,"p-accordionTab",0),e.ALo(2,"async"),e._UZ(3,"cha-front-stats-team-leaders-table",1),e.qZA()()),2&a&&(e.xp6(1),e.Q6J("selected",!!s.stats&&s.stats.length>0&&!1===e.lcZ(2,4,s.isMobile$))("disabled",!!s.stats&&s.stats.length<1),e.xp6(2),e.Q6J("tableColumns",s.tableColumns)("stats",s.stats))},dependencies:[y,v,F,r.Ov],encapsulation:2,changeDetection:0}),o})(),et=(()=>{var t;class o{constructor(a,s){this.leagueStatsTeamFacade=a,this.displayFacade=s,this.tableColumns=[{field:"team",header:"Team"},{field:"penalty_minutes",header:"PIM"},{field:"pim_game",header:"PIM/G"}],this.leagueStatsTeamFacade.leagueTeamPenalties$.pipe((0,C.P)()).subscribe(c=>{this.stats=c}),this.isMobile$=this.displayFacade.isMobile$}}return(t=o).\u0275fac=function(a){return new(a||t)(e.Y36(S),e.Y36(_.pC))},t.\u0275cmp=e.Xpm({type:t,selectors:[["cha-front-stats-team-leaders-penalties"]],decls:4,vars:6,consts:[["header","Team Penalties",3,"selected","disabled"],[3,"tableColumns","stats"]],template:function(a,s){1&a&&(e.TgZ(0,"p-accordion")(1,"p-accordionTab",0),e.ALo(2,"async"),e._UZ(3,"cha-front-stats-team-leaders-table",1),e.qZA()()),2&a&&(e.xp6(1),e.Q6J("selected",!!s.stats&&s.stats.length>0&&!1===e.lcZ(2,4,s.isMobile$))("disabled",!!s.stats&&s.stats.length<1),e.xp6(2),e.Q6J("tableColumns",s.tableColumns)("stats",s.stats))},dependencies:[y,v,F,r.Ov],encapsulation:2,changeDetection:0}),o})(),tt=(()=>{var t;class o{constructor(a,s){this.leagueStatsTeamFacade=a,this.displayFacade=s,this.tableColumns=[{field:"team",header:"Team"},{field:"pk_attempts",header:"PKA"},{field:"pk_goals",header:"PKG"},{field:"pk_pct",header:"PK%"}],this.leagueStatsTeamFacade.leagueTeamPk$.pipe((0,C.P)()).subscribe(c=>{this.stats=c}),this.isMobile$=this.displayFacade.isMobile$}}return(t=o).\u0275fac=function(a){return new(a||t)(e.Y36(S),e.Y36(_.pC))},t.\u0275cmp=e.Xpm({type:t,selectors:[["cha-front-stats-team-leaders-pk"]],decls:4,vars:6,consts:[["header","PK Efficiency%",3,"selected","disabled"],[3,"tableColumns","stats"]],template:function(a,s){1&a&&(e.TgZ(0,"p-accordion")(1,"p-accordionTab",0),e.ALo(2,"async"),e._UZ(3,"cha-front-stats-team-leaders-table",1),e.qZA()()),2&a&&(e.xp6(1),e.Q6J("selected",!!s.stats&&s.stats.length>0&&!1===e.lcZ(2,4,s.isMobile$))("disabled",!!s.stats&&s.stats.length<1),e.xp6(2),e.Q6J("tableColumns",s.tableColumns)("stats",s.stats))},dependencies:[y,v,F,r.Ov],encapsulation:2,changeDetection:0}),o})(),at=(()=>{var t;class o{constructor(a,s){this.leagueStatsTeamFacade=a,this.displayFacade=s,this.tableColumns=[{field:"team",header:"Team"},{field:"pp_attempts",header:"PPA"},{field:"pp_goals",header:"PPG"},{field:"pp_pct",header:"PP%"}],this.leagueStatsTeamFacade.leagueTeamPp$.pipe((0,C.P)()).subscribe(c=>{this.stats=c}),this.isMobile$=this.displayFacade.isMobile$}}return(t=o).\u0275fac=function(a){return new(a||t)(e.Y36(S),e.Y36(_.pC))},t.\u0275cmp=e.Xpm({type:t,selectors:[["cha-front-stats-team-leaders-pp"]],decls:4,vars:6,consts:[["header","PP Efficiency%",3,"selected","disabled"],[3,"tableColumns","stats"]],template:function(a,s){1&a&&(e.TgZ(0,"p-accordion")(1,"p-accordionTab",0),e.ALo(2,"async"),e._UZ(3,"cha-front-stats-team-leaders-table",1),e.qZA()()),2&a&&(e.xp6(1),e.Q6J("selected",!!s.stats&&s.stats.length>0&&!1===e.lcZ(2,4,s.isMobile$))("disabled",!!s.stats&&s.stats.length<1),e.xp6(2),e.Q6J("tableColumns",s.tableColumns)("stats",s.stats))},dependencies:[y,v,F,r.Ov],encapsulation:2,changeDetection:0}),o})();var st=l(2181);let nt=(()=>{var t;class o{constructor(a,s){this.leagueStatsTeamFacade=a,this.displayFacade=s,this.tableColumns=[{field:"team",header:"Team"},{field:"games_played",header:"GP"},{field:"wins",header:"W"},{field:"loss",header:"L"},{field:"ties",header:"T"},{field:"points",header:"Pts"},{field:"win_pct",header:"Win%"}],this.teamStandings$=this.leagueStatsTeamFacade.leagueTeamStandings$,this.teamStandings$.pipe((0,st.h)(c=>c.length>0),(0,C.P)()).subscribe(c=>{this.stats=c}),this.isMobile$=this.displayFacade.isMobile$}}return(t=o).\u0275fac=function(a){return new(a||t)(e.Y36(S),e.Y36(_.pC))},t.\u0275cmp=e.Xpm({type:t,selectors:[["cha-front-stats-team-leaders-standings"]],decls:4,vars:6,consts:[["header","League Standings - *Ties - Wins / Goal Diff",3,"selected","disabled"],[3,"tableColumns","stats"]],template:function(a,s){1&a&&(e.TgZ(0,"p-accordion")(1,"p-accordionTab",0),e.ALo(2,"async"),e._UZ(3,"cha-front-stats-team-leaders-table",1),e.qZA()()),2&a&&(e.xp6(1),e.Q6J("selected",!!s.stats&&s.stats.length>0&&!1===e.lcZ(2,4,s.isMobile$))("disabled",!s.stats||s.stats.length<1),e.xp6(2),e.Q6J("tableColumns",s.tableColumns)("stats",s.stats))},dependencies:[y,v,F,r.Ov],encapsulation:2,changeDetection:0}),o})(),ot=(()=>{var t;class o{constructor(a,s){this.leagueStatsTeamFacade=a,this.displayFacade=s,this.tableColumns=[{field:"team",header:"Team"},{field:"long_win_streak",header:"Games"}],this.leagueStatsTeamFacade.leagueTeamWinningStreak$.pipe((0,C.P)()).subscribe(c=>{this.stats=c}),this.isMobile$=this.displayFacade.isMobile$}}return(t=o).\u0275fac=function(a){return new(a||t)(e.Y36(S),e.Y36(_.pC))},t.\u0275cmp=e.Xpm({type:t,selectors:[["cha-front-stats-team-leaders-streak"]],decls:4,vars:6,consts:[["header","Winning Streaks",3,"selected","disabled"],[3,"tableColumns","stats"]],template:function(a,s){1&a&&(e.TgZ(0,"p-accordion")(1,"p-accordionTab",0),e.ALo(2,"async"),e._UZ(3,"cha-front-stats-team-leaders-table",1),e.qZA()()),2&a&&(e.xp6(1),e.Q6J("selected",!!s.stats&&s.stats.length>0&&!1===e.lcZ(2,4,s.isMobile$))("disabled",!!s.stats&&s.stats.length<1),e.xp6(2),e.Q6J("tableColumns",s.tableColumns)("stats",s.stats))},dependencies:[y,v,F,r.Ov],encapsulation:2,changeDetection:0}),o})();const it=function(){return{height:"6px"}};function lt(t,o){1&t&&e._UZ(0,"p-progressBar",4),2&t&&e.Akn(e.DdM(2,it))}function ct(t,o){1&t&&(e.TgZ(0,"blade-card-body")(1,"div",5),e._UZ(2,"cha-front-stats-team-leaders-standings")(3,"cha-front-stats-team-leaders-streak")(4,"cha-front-stats-team-leaders-penalties"),e.qZA(),e.TgZ(5,"div",5),e._UZ(6,"cha-front-stats-team-leaders-differentials")(7,"cha-front-stats-team-leaders-pp")(8,"cha-front-stats-team-leaders-pk"),e.qZA()())}const rt=[{path:"",component:(()=>{var t;class o{constructor(a){this.leagueStatsTeamFacade=a,this.selectSeasonOptions=[{label:"Regular",value:"Regular"},{label:"Playoffs",value:"Playoffs",disabled:!1}],this.isLoading$=this.leagueStatsTeamFacade.isLoading$,this.isLoaded$=this.leagueStatsTeamFacade.isLoaded$}ngOnInit(){this.leagueStatsTeamFacade.getLeagueTeamStats("Regular")}onSeasonOptionChanged(a){this.leagueStatsTeamFacade.getLeagueTeamStats(a)}}return(t=o).\u0275fac=function(a){return new(a||t)(e.Y36(S))},t.\u0275cmp=e.Xpm({type:t,selectors:[["cha-front-stats-team-leaders"]],decls:9,vars:7,consts:[[1,"league-stats-team"],["mode","indeterminate",3,"style",4,"ngIf"],[1,"flex","justify-content-center",3,"options","optionChanged"],[4,"ngIf"],["mode","indeterminate"],[1,"league-stats-team-container"]],template:function(a,s){1&a&&(e.TgZ(0,"blade-layout-feature-content")(1,"div",0),e.YNc(2,lt,1,3,"p-progressBar",1),e.ALo(3,"async"),e.TgZ(4,"blade-card")(5,"blade-card-header")(6,"blade-button-select",2),e.NdJ("optionChanged",function(p){return s.onSeasonOptionChanged(p)}),e.qZA()(),e.YNc(7,ct,9,0,"blade-card-body",3),e.ALo(8,"async"),e.qZA()()()),2&a&&(e.xp6(2),e.Q6J("ngIf",e.lcZ(3,3,s.isLoading$)),e.xp6(4),e.Q6J("options",s.selectSeasonOptions),e.xp6(1),e.Q6J("ngIf",e.lcZ(8,5,s.isLoaded$)))},dependencies:[r.O5,h.k,Qe.A,Je.y,Ye.n,Be.R,Ee.o,qe,et,tt,at,nt,ot,r.Ov],styles:[".league-stats-team-container[_ngcontent-%COMP%]{display:grid;grid-row-gap:20px;justify-content:space-around;grid-template-columns:repeat(auto-fit,minmax(325px,1fr));grid-column-gap:10px}.league-stats-team-container[_ngcontent-%COMP%]:first-of-type{padding-bottom:20px}"],changeDetection:0}),o})()}];let dt=(()=>{var t;class o{}return(t=o).\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[M.Bz.forChild(rt),M.Bz]}),o})();var pt=l(1867);let mt=(()=>{var t;class o{}return(t=o).\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[E,S,B],imports:[r.ez,dt,h.q,ie,J.U$,le.N,ce.E,re.C,pt.o,d.Aw.forFeature("league-stats-team",be),u.sQ.forFeature([E])]}),o})()}}]);