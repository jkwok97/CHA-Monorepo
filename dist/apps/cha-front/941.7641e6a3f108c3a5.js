"use strict";(self.webpackChunkcha_front=self.webpackChunkcha_front||[]).push([[941],{7169:(C,f,a)=>{a.d(f,{R:()=>_});var n=a(5879),s=a(6814);const t=function(c){return{background:c}},e=["*"];let _=(()=>{var c;class p{}return(c=p).\u0275fac=function(u){return new(u||c)},c.\u0275cmp=n.Xpm({type:c,selectors:[["blade-layout-feature-content"]],inputs:{backgroundColor:"backgroundColor"},ngContentSelectors:e,decls:2,vars:3,consts:[[1,"feature-content",3,"ngStyle"]],template:function(u,o){1&u&&(n.F$t(),n.TgZ(0,"div",0),n.Hsn(1),n.qZA()),2&u&&n.Q6J("ngStyle",n.VKq(1,t,o.backgroundColor?o.backgroundColor:"#393D4795"))},dependencies:[s.PC],styles:[".feature-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-items:center;flex-grow:1;height:100%;margin:10px;border-radius:5px;max-width:calc(100vw - 20px)}"],changeDetection:0}),p})()},6252:(C,f,a)=>{a.r(f),a.d(f,{ChaFrontAwardsChampionsModule:()=>Z});var n=a(6814),s=a(9775),t=a(2490),e=a(5879),_=a(6651),c=a(7169),p=a(2466);const d=function(){return{height:"6px"}};function u(i,g){1&i&&e._UZ(0,"p-progressBar",4),2&i&&e.Akn(e.DdM(2,d))}function o(i,g){if(1&i&&(e.ynx(0),e._UZ(1,"blade-award-card",6),e.BQk()),2&i){const m=g.$implicit;e.xp6(1),e.Q6J("award",m)}}function r(i,g){if(1&i&&(e.ynx(0),e.YNc(1,o,2,1,"ng-container",5),e.ALo(2,"async"),e.BQk()),2&i){const m=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,m.champions$))}}const l=function(){return{"font-weight":"100"}},v=[{path:"",component:(()=>{var i;class g{constructor(h){this.awardsFacade=h,this.champions$=this.awardsFacade.awards$,this.isLoading$=this.awardsFacade.isLoading$,this.isLoaded$=this.awardsFacade.isLoaded$}ngOnInit(){this.awardsFacade.getChampions()}}return(i=g).\u0275fac=function(h){return new(h||i)(e.Y36(t.nM))},i.\u0275cmp=e.Xpm({type:i,selectors:[["cha-front-awards-champions"]],decls:8,vars:9,consts:[[1,"text-center","text-2xl","pt-3"],[1,"awards-champions"],["mode","indeterminate",3,"style",4,"ngIf"],[4,"ngIf"],["mode","indeterminate"],[4,"ngFor","ngForOf"],[3,"award"]],template:function(h,b){1&h&&(e.TgZ(0,"blade-layout-feature-content")(1,"div",0),e._uU(2," CHA Champions "),e.qZA(),e.TgZ(3,"div",1),e.YNc(4,u,1,3,"p-progressBar",2),e.ALo(5,"async"),e.YNc(6,r,3,3,"ng-container",3),e.ALo(7,"async"),e.qZA()()),2&h&&(e.xp6(1),e.Akn(e.DdM(8,l)),e.xp6(3),e.Q6J("ngIf",e.lcZ(5,4,b.isLoading$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(7,6,b.isLoaded$)))},dependencies:[n.sg,n.O5,_.k,c.R,p.C,n.Ov],styles:[".awards-champions[_ngcontent-%COMP%]{display:grid;padding:20px;grid-row-gap:20px;justify-content:space-around;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));grid-column-gap:20px;height:100%}"],changeDetection:0}),g})()}];let w=(()=>{var i;class g{}return(i=g).\u0275fac=function(h){return new(h||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[s.Bz.forChild(v),s.Bz]}),g})();var x=a(2321),A=a(8515);let Z=(()=>{var i;class g{}return(i=g).\u0275fac=function(h){return new(h||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[n.ez,w,_.q,x.E,A.C]}),g})()},5359:(C,f,a)=>{a.d(f,{i:()=>_,x:()=>c});var n=a(1180),s=a(5879),t=a(6814);const e=["*"];let _=(()=>{var p;class d{constructor(){(0,n.Z)(this,"style",void 0),(0,n.Z)(this,"styleClass",void 0),(0,n.Z)(this,"layout","horizontal"),(0,n.Z)(this,"type","solid"),(0,n.Z)(this,"align",void 0)}containerClass(){return{"p-divider p-component":!0,"p-divider-horizontal":"horizontal"===this.layout,"p-divider-vertical":"vertical"===this.layout,"p-divider-solid":"solid"===this.type,"p-divider-dashed":"dashed"===this.type,"p-divider-dotted":"dotted"===this.type,"p-divider-left":"horizontal"===this.layout&&(!this.align||"left"===this.align),"p-divider-center":"horizontal"===this.layout&&"center"===this.align||"vertical"===this.layout&&(!this.align||"center"===this.align),"p-divider-right":"horizontal"===this.layout&&"right"===this.align,"p-divider-top":"vertical"===this.layout&&"top"===this.align,"p-divider-bottom":"vertical"===this.layout&&"bottom"===this.align}}}return p=d,(0,n.Z)(d,"\u0275fac",function(o){return new(o||p)}),(0,n.Z)(d,"\u0275cmp",s.Xpm({type:p,selectors:[["p-divider"]],hostAttrs:[1,"p-element"],inputs:{style:"style",styleClass:"styleClass",layout:"layout",type:"type",align:"align"},ngContentSelectors:e,decls:3,vars:4,consts:[["role","separator",3,"ngClass","ngStyle"],[1,"p-divider-content"]],template:function(o,r){1&o&&(s.F$t(),s.TgZ(0,"div",0)(1,"div",1),s.Hsn(2),s.qZA()()),2&o&&(s.Tol(r.styleClass),s.Q6J("ngClass",r.containerClass())("ngStyle",r.style))},dependencies:[t.mk,t.PC],styles:['.p-divider-horizontal{display:flex;width:100%;position:relative;align-items:center}.p-divider-horizontal:before{position:absolute;display:block;top:50%;left:0;width:100%;content:""}.p-divider-horizontal.p-divider-left{justify-content:flex-start}.p-divider-horizontal.p-divider-right{justify-content:flex-end}.p-divider-horizontal.p-divider-center{justify-content:center}.p-divider-content{z-index:1}.p-divider-vertical{min-height:100%;margin:0 1rem;display:flex;position:relative;justify-content:center}.p-divider-vertical:before{position:absolute;display:block;top:0;left:50%;height:100%;content:""}.p-divider-vertical.p-divider-top{align-items:flex-start}.p-divider-vertical.p-divider-center{align-items:center}.p-divider-vertical.p-divider-bottom{align-items:flex-end}.p-divider-solid.p-divider-horizontal:before{border-top-style:solid}.p-divider-solid.p-divider-vertical:before{border-left-style:solid}.p-divider-dashed.p-divider-horizontal:before{border-top-style:dashed}.p-divider-dashed.p-divider-vertical:before{border-left-style:dashed}.p-divider-dotted.p-divider-horizontal:before{border-top-style:dotted}.p-divider-dotted.p-divider-horizontal:before{border-left-style:dotted}\n'],encapsulation:2,changeDetection:0})),d})(),c=(()=>{var p;class d{}return p=d,(0,n.Z)(d,"\u0275fac",function(o){return new(o||p)}),(0,n.Z)(d,"\u0275mod",s.oAB({type:p})),(0,n.Z)(d,"\u0275inj",s.cJS({imports:[t.ez]})),d})()},6651:(C,f,a)=>{a.d(f,{k:()=>d,q:()=>u});var n=a(1180),s=a(6814),t=a(5879);function e(o,r){if(1&o&&(t.TgZ(0,"div",5),t._uU(1),t.qZA()),2&o){const l=t.oxw(2);t.Udp("display",null!=l.value&&0!==l.value?"flex":"none"),t.xp6(1),t.AsE("",l.value,"",l.unit,"")}}function _(o,r){if(1&o&&(t.TgZ(0,"div",3),t.YNc(1,e,2,4,"div",4),t.qZA()),2&o){const l=t.oxw();t.Udp("width",l.value+"%")("background",l.color),t.xp6(1),t.Q6J("ngIf",l.showValue)}}function c(o,r){if(1&o&&(t.TgZ(0,"div",6),t._UZ(1,"div",7),t.qZA()),2&o){const l=t.oxw();t.xp6(1),t.Udp("background",l.color)}}const p=function(o,r){return{"p-progressbar p-component":!0,"p-progressbar-determinate":o,"p-progressbar-indeterminate":r}};let d=(()=>{var o;class r{constructor(){(0,n.Z)(this,"value",void 0),(0,n.Z)(this,"showValue",!0),(0,n.Z)(this,"styleClass",void 0),(0,n.Z)(this,"style",void 0),(0,n.Z)(this,"unit","%"),(0,n.Z)(this,"mode","determinate"),(0,n.Z)(this,"color",void 0)}}return o=r,(0,n.Z)(r,"\u0275fac",function(y){return new(y||o)}),(0,n.Z)(r,"\u0275cmp",t.Xpm({type:o,selectors:[["p-progressBar"]],hostAttrs:[1,"p-element"],inputs:{value:"value",showValue:"showValue",styleClass:"styleClass",style:"style",unit:"unit",mode:"mode",color:"color"},decls:3,vars:10,consts:[["role","progressbar","aria-valuemin","0","aria-valuemax","100",3,"ngStyle","ngClass"],["class","p-progressbar-value p-progressbar-value-animate","style","display:flex",3,"width","background",4,"ngIf"],["class","p-progressbar-indeterminate-container",4,"ngIf"],[1,"p-progressbar-value","p-progressbar-value-animate",2,"display","flex"],["class","p-progressbar-label",3,"display",4,"ngIf"],[1,"p-progressbar-label"],[1,"p-progressbar-indeterminate-container"],[1,"p-progressbar-value","p-progressbar-value-animate"]],template:function(y,v){1&y&&(t.TgZ(0,"div",0),t.YNc(1,_,2,5,"div",1),t.YNc(2,c,2,2,"div",2),t.qZA()),2&y&&(t.Tol(v.styleClass),t.Q6J("ngStyle",v.style)("ngClass",t.WLB(7,p,"determinate"===v.mode,"indeterminate"===v.mode)),t.uIk("aria-valuenow",v.value),t.xp6(1),t.Q6J("ngIf","determinate"===v.mode),t.xp6(1),t.Q6J("ngIf","indeterminate"===v.mode))},dependencies:[s.mk,s.O5,s.PC],styles:['.p-progressbar{position:relative;overflow:hidden}.p-progressbar-determinate .p-progressbar-value{height:100%;width:0%;position:absolute;display:none;border:0 none;display:flex;align-items:center;justify-content:center;overflow:hidden}.p-progressbar-determinate .p-progressbar-label{display:inline-flex}.p-progressbar-determinate .p-progressbar-value-animate{transition:width 1s ease-in-out}.p-progressbar-indeterminate .p-progressbar-value:before{content:"";position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left,right;animation:p-progressbar-indeterminate-anim 2.1s cubic-bezier(.65,.815,.735,.395) infinite}.p-progressbar-indeterminate .p-progressbar-value:after{content:"";position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left,right;animation:p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(.165,.84,.44,1) infinite;animation-delay:1.15s}@keyframes p-progressbar-indeterminate-anim{0%{left:-35%;right:100%}60%{left:100%;right:-90%}to{left:100%;right:-90%}}@keyframes p-progressbar-indeterminate-anim-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}\n'],encapsulation:2,changeDetection:0})),r})(),u=(()=>{var o;class r{}return o=r,(0,n.Z)(r,"\u0275fac",function(y){return new(y||o)}),(0,n.Z)(r,"\u0275mod",t.oAB({type:o})),(0,n.Z)(r,"\u0275inj",t.cJS({imports:[s.ez]})),r})()}}]);