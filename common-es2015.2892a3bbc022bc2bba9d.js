(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"7DxU":function(t,n,c){"use strict";c.d(n,"a",(function(){return p}));var a=c("fXoL"),o=c("oyxB"),s=c("ofXK"),e=c("lR5k");function b(t,n){if(1&t&&(a.Ob(0,"nz-tab",6),a.Kb(1,"markdown",7),a.Yb(2,"language"),a.Nb()),2&t){const t=a.Xb();a.zb(1),a.dc("data",a.ac(2,1,t.htmlCode,"html"))}}function d(t,n){if(1&t&&(a.Ob(0,"nz-tab",8),a.Kb(1,"markdown",7),a.Yb(2,"language"),a.Nb()),2&t){const t=a.Xb();a.zb(1),a.dc("data",a.ac(2,1,t.componentCode,"typescript"))}}function i(t,n){if(1&t&&(a.Ob(0,"nz-tab",9),a.Kb(1,"markdown",7),a.Yb(2,"language"),a.Nb()),2&t){const t=a.Xb();a.zb(1),a.dc("data",a.ac(2,1,t.scssCode,"scss"))}}function l(t,n){if(1&t&&(a.Ob(0,"nz-tab",10),a.Kb(1,"markdown",7),a.Yb(2,"language"),a.Nb()),2&t){const t=a.Xb();a.zb(1),a.dc("data",a.ac(2,1,t.dataCode,"typescript"))}}let p=(()=>{class t{constructor(){}ngOnInit(){this.html&&(this.htmlCode=this.html.match(/DEMO START -->\n((.*\n)*)<!-- DEMO END/)[1]),this.component&&(this.componentCode=this.component.replace(/.*DEMO IGNORE\n/g,"")),this.scss&&(this.scssCode=this.scss.replace(/.*DEMO IGNORE\n/g,"")),this.data&&(this.dataCode=this.data.replace(/.*DEMO IGNORE\n/g,""))}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Db({type:t,selectors:[["code-block"]],inputs:{html:"html",component:"component",scss:"scss",data:"data"},decls:6,vars:4,consts:[[1,"code-block"],["nzType","card"],["nzTitle","html",4,"ngIf"],["nzTitle","component",4,"ngIf"],["nzTitle","scss",4,"ngIf"],["nzTitle","data",4,"ngIf"],["nzTitle","html"],[3,"data"],["nzTitle","component"],["nzTitle","scss"],["nzTitle","data"]],template:function(t,n){1&t&&(a.Ob(0,"div",0),a.Ob(1,"nz-tabset",1),a.oc(2,b,3,4,"nz-tab",2),a.oc(3,d,3,4,"nz-tab",3),a.oc(4,i,3,4,"nz-tab",4),a.oc(5,l,3,4,"nz-tab",5),a.Nb(),a.Nb()),2&t&&(a.zb(2),a.dc("ngIf",n.htmlCode),a.zb(1),a.dc("ngIf",n.componentCode),a.zb(1),a.dc("ngIf",n.scssCode),a.zb(1),a.dc("ngIf",n.dataCode))},directives:[o.c,s.l,o.a,e.b],pipes:[e.a],styles:[".code-block[_ngcontent-%COMP%]{margin-top:16px}"]}),t})()}}]);