(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{bSjJ:function(t,i,n){"use strict";n.r(i),n.d(i,"ScoreboardComponentModule",(function(){return S}));var o=n("ofXK"),e=n("tk/3"),s=n("tyNb"),c=n("fXoL"),a=n("7JkF"),r=n("LYy9"),l=n("PLSI"),h=n("GRWQ");function b(t,i){if(1&t&&(c.Yb(0,"b"),c.wc(1),c.Xb()),2&t){const t=c.ic(4);c.Hb(1),c.yc(" ",t.finalScore," ")}}function u(t,i){if(1&t&&(c.Yb(0,"h1",18),c.uc(1,b,2,1,"b",19),c.Xb()),2&t){const t=c.ic(3);c.Hb(1),c.lc("ngIf","group individu"!==t.userData.grouping)}}function f(t,i){1&t&&(c.Yb(0,"h1",20),c.wc(1," \xa0 "),c.Xb())}function p(t,i){if(1&t&&(c.Yb(0,"h1",21),c.wc(1),c.Xb()),2&t){const t=c.ic(3);c.Hb(1),c.yc(" ",t.userData.atlet_name," ")}}function d(t,i){1&t&&(c.Yb(0,"h1",21),c.wc(1," \xa0 "),c.Xb())}function g(t,i){if(1&t&&(c.Yb(0,"h1",21),c.wc(1),c.Xb()),2&t){const t=c.ic(3);c.Hb(1),c.yc(" ",t.userData.kontingen," ")}}function _(t,i){1&t&&(c.Yb(0,"h1",21),c.wc(1," \xa0 "),c.Xb())}function m(t,i){if(1&t&&(c.Yb(0,"h1",21),c.wc(1),c.Xb()),2&t){const t=c.ic(3);c.Hb(1),c.yc(" ",t.userData.kata_name," ")}}function L(t,i){1&t&&(c.Yb(0,"h1",21),c.wc(1," \xa0 "),c.Xb())}function X(t,i){if(1&t&&(c.Yb(0,"div",8),c.Yb(1,"div",4),c.Yb(2,"div",3),c.Yb(3,"div",9),c.Yb(4,"div",10),c.Yb(5,"div",11),c.uc(6,u,2,1,"h1",12),c.uc(7,f,2,0,"h1",13),c.Xb(),c.Xb(),c.Xb(),c.Yb(8,"div",14),c.Yb(9,"div",15),c.Yb(10,"div",16),c.uc(11,p,2,1,"h1",17),c.uc(12,d,2,0,"h1",17),c.Xb(),c.Xb(),c.Yb(13,"div",15),c.Yb(14,"div",16),c.uc(15,g,2,1,"h1",17),c.uc(16,_,2,0,"h1",17),c.Xb(),c.Xb(),c.Yb(17,"div",15),c.Yb(18,"div",16),c.uc(19,m,2,1,"h1",17),c.uc(20,L,2,0,"h1",17),c.Xb(),c.Xb(),c.Xb(),c.Xb(),c.Xb(),c.Xb()),2&t){const t=c.ic(2);c.Hb(4),c.Kb("card ","aka"===t.userData.attribute?"bg-danger":"ao"===t.userData.attribute?"bg-primary":"bg-dark",""),c.Hb(2),c.lc("ngIf",t.finalScore),c.Hb(1),c.lc("ngIf",!t.finalScore),c.Hb(4),c.lc("ngIf",t.userData.atlet_name),c.Hb(1),c.lc("ngIf",!t.userData.atlet_name),c.Hb(3),c.lc("ngIf",t.userData.kontingen),c.Hb(1),c.lc("ngIf",!t.userData.kontingen),c.Hb(3),c.lc("ngIf",t.userData.kata_name),c.Hb(1),c.lc("ngIf",!t.userData.kata_name)}}function Y(t,i){if(1&t&&(c.Yb(0,"th"),c.wc(1),c.Ub(2,"span",29),c.Xb()),2&t){const t=c.ic().$implicit;c.Hb(1),c.yc(" ",t.name," "),c.Hb(1),c.Kb("dot ","online"===t.status?"bg-success":"bg-danger",""),c.mc("title","",t.name," sedang ",t.status,"")}}function k(t,i){if(1&t&&(c.Wb(0),c.uc(1,Y,3,6,"th",19),c.Vb()),2&t){const t=i.index;c.Hb(1),c.lc("ngIf",t<5)}}function v(t,i){if(1&t&&(c.Yb(0,"div",31),c.wc(1),c.Xb()),2&t){const t=c.ic().$implicit;c.Hb(1),c.yc(" ",t.technical_result>-1?t.technical_result:t.FAC_TECH||t.technical_point_result||t.technical_point||t.technicalValue," ")}}function C(t,i){if(1&t&&(c.Yb(0,"div"),c.wc(1),c.Xb()),2&t){const t=c.ic().$implicit;c.Hb(1),c.yc(" ",t.technical_result>-1?t.technical_result:t.FAC_TECH||t.technical_point_result||t.technical_point||t.technicalValue," ")}}function y(t,i){if(1&t&&(c.Yb(0,"td"),c.uc(1,v,2,1,"div",30),c.uc(2,C,2,1,"div",19),c.Xb()),2&t){const t=i.$implicit;c.Hb(1),c.lc("ngIf",!t.technical_result_status&&!t.noColor),c.Hb(1),c.lc("ngIf",!t.technical_result_status&&t.noColor||t.technical_result_status&&!t.noColor)}}function w(t,i){if(1&t&&(c.Yb(0,"div",31),c.wc(1),c.Xb()),2&t){const t=c.ic().$implicit;c.Hb(1),c.yc(" ",t.athletic_result?t.athletic_result:t.FAC_ATH||t.athletic_point_result||t.athletic_point||t.athleticValue," ")}}function H(t,i){if(1&t&&(c.Yb(0,"div"),c.wc(1),c.Xb()),2&t){const t=c.ic().$implicit;c.Hb(1),c.yc(" ",t.athletic_result?t.athletic_result:t.FAC_ATH||t.athletic_point_result||t.athletic_point||t.athleticValue," ")}}function A(t,i){if(1&t&&(c.Yb(0,"td"),c.uc(1,w,2,1,"div",30),c.uc(2,H,2,1,"div",19),c.Xb()),2&t){const t=i.$implicit;c.Hb(1),c.lc("ngIf",!t.athletic_result_status&&!t.noColor),c.Hb(1),c.lc("ngIf",!t.athletic_result_status&&t.noColor||t.athletic_result_status&&!t.noColor)}}function x(t,i){if(1&t&&(c.Yb(0,"div",8),c.Yb(1,"div",3),c.Yb(2,"div",4),c.Yb(3,"div",22),c.Yb(4,"table",23),c.Yb(5,"thead"),c.Yb(6,"tr"),c.Yb(7,"th",24),c.Yb(8,"div",25),c.Ub(9,"img",26),c.Xb(),c.Xb(),c.uc(10,k,2,1,"ng-container",27),c.Yb(11,"th"),c.wc(12,"FAC"),c.Xb(),c.Yb(13,"th"),c.wc(14,"JUMLAH"),c.Xb(),c.Yb(15,"th"),c.wc(16,"HASIL"),c.Xb(),c.Xb(),c.Xb(),c.Yb(17,"tbody"),c.Yb(18,"tr"),c.Yb(19,"th",28),c.wc(20,"TEKNIK"),c.Xb(),c.uc(21,y,3,2,"td",27),c.Xb(),c.Yb(22,"tr"),c.Yb(23,"th",28),c.wc(24,"ATLETIK"),c.Xb(),c.uc(25,A,3,2,"td",27),c.Xb(),c.Xb(),c.Xb(),c.Xb(),c.Xb(),c.Xb(),c.Xb()),2&t){const t=c.ic(2);c.Hb(5),c.Jb("ao"===t.userData.attribute?"bg-primary":"aka"===t.userData.attribute?"bg-danger":"bg-dark"),c.Hb(5),c.lc("ngForOf",t.juryList),c.Hb(11),c.lc("ngForOf",t.pointList),c.Hb(4),c.lc("ngForOf",t.pointList)}}function P(t,i){if(1&t&&(c.Yb(0,"body",1),c.Yb(1,"div",2),c.Yb(2,"div",3),c.Yb(3,"div",4),c.Yb(4,"h1",5),c.Yb(5,"strong"),c.wc(6,"Solidsport Organizer"),c.Xb(),c.Xb(),c.Ub(7,"hr"),c.Xb(),c.Xb(),c.Xb(),c.uc(8,X,21,11,"div",6),c.uc(9,x,26,6,"div",7),c.Xb()),2&t){const t=c.ic();c.Hb(8),c.lc("ngIf",t.userData&&!t.isLoading),c.Hb(1),c.lc("ngForOf",t.Data)}}const I=s.f.forChild([{path:"",component:(()=>{class t{constructor(t,i,n,o,e){this.socket=t,this.atletService=i,this.pointService=n,this.routes=o,this.userService=e,this.isLoading=!1,this.userData={atlet_name:"",kata_name:"",kontingen:"",attribute:"AKA"},this.juryList=[],this.pointList=[],this.cmpPointList=[],this.finalScore=0,this.Data=[{username:"Muhammad deta sandi bima",kontingen:"paspampres",kata:"unsu",score:"69",belt:"AKA"}],t.emit("scoreboard")}ngOnInit(){this.isLoading=!0,this.getSevenJury(),this.socket.on("getStatus",()=>{this.userService.getUsers().then(t=>{this.juryList=t.result}).catch(t=>{console.warn(t)})}),this.socket.on("getStatus2",()=>{this.userService.getUsers().then(t=>{this.juryList=t.result}).catch(t=>{console.warn(t)})}),this.socket.on("data-score",()=>{this.atletService.getAtletByMatch().then(t=>{this.userData=t.result[0],console.log(this.userData),this.pointService.getPointForScoreboard(this.userData.id_atlet,this.userData.id_match).then(t=>{this.pointList=[],this.finalScore=t.result.total_point||0,console.log("masuk gag",this.finalScore),this.cmpPointList=t.result.athlete_point_list?[...t.result.athlete_point_list]:[...t.result];for(let i=this.pointList.length;i<8;i++)5===i?this.pointList.push({FAC_ATH:.3,FAC_TECH:.7,noColor:!0}):i<5?this.pointList.push({technicalValue:0,athleticValue:0,noColor:!0}):6===i?this.pointList.push({technical_point_result:t.result.technical_point_result||"0",athletic_point_result:t.result.athletic_point_result||"0",noColor:!0}):7===i&&this.pointList.push({technical_point:t.result.technical_point||"0",athletic_point:t.result.athletic_point||"0",noColor:!0});for(let i in this.cmpPointList)this.cmpPointList.length>5||(this.pointList[this.cmpPointList[i].id_user-1]=this.cmpPointList[i],this.pointList[this.cmpPointList[i].id_user-1].noColor=!1);console.log("thispoointLIst",this.pointList),this.isLoading=!1}).catch(t=>{console.log(t),this.isLoading=!1})}).catch(t=>{if(console.log(t),404===t.status){console.log("sadasdasd"),this.pointList=[],this.finalScore=0,this.cmpPointList=[];for(let t=0;t<8;t++)5===t?this.pointList.push({FAC_ATH:.3,FAC_TECH:.7,noColor:!0}):t<5?this.pointList.push({technicalValue:0,athleticValue:0,noColor:!0}):6===t?this.pointList.push({technical_point_result:"0",athletic_point_result:"0",noColor:!0}):7===t&&this.pointList.push({technical_point:"0",athletic_point:"0",noColor:!0});for(let t in this.cmpPointList)this.cmpPointList.length>7||(this.pointList[this.cmpPointList[t].id_user-1]=this.cmpPointList[t],this.pointList[this.cmpPointList[t].id_user-1].noColor=!0)}this.isLoading=!1})}),this.socket.on("reset-data-score",()=>{this.userData.atlet_name="",this.userData.kata_name="",this.userData.kontingen="",this.userData.attribute="AKA",this.pointList=[],this.finalScore=0,this.cmpPointList=[];for(let t=0;t<8;t++)5===t?this.pointList.push({FAC_ATH:.3,FAC_TECH:.7,noColor:!0}):t<5?this.pointList.push({technicalValue:0,athleticValue:0,noColor:!0}):6===t?this.pointList.push({technical_point_result:"0",athletic_point_result:"0",noColor:!0}):7===t&&this.pointList.push({technical_point:"0",athletic_point:"0",noColor:!0});for(let t in this.cmpPointList)this.cmpPointList.length>7||(this.pointList[this.cmpPointList[t].id_user-1]=this.cmpPointList[t],this.pointList[this.cmpPointList[t].id_user-1].noColor=!0);console.log(this.pointList)}),this.socket.on("listscore-link",t=>{this.routes.navigate(t?[`/list-score/klasemen/${t.id}/${t.group_name}`]:["/list-score/klasemen/individual/head-to-head"])})}getSevenJury(){this.userService.getUsers().then(t=>{this.juryList=t.result,console.log(this.juryList),this.isLoading=!1}).catch(t=>{console.error(t)})}}return t.\u0275fac=function(i){return new(i||t)(c.Tb(a.a),c.Tb(r.a),c.Tb(l.a),c.Tb(s.b),c.Tb(h.a))},t.\u0275cmp=c.Nb({type:t,selectors:[["app-scoreboard"]],decls:1,vars:1,consts:[["style","position:fixed; width: 100%; height: 100%;background:url('assets/images/banner/banner9.jpg');background-repeat: no-repeat;background-size: cover;",4,"ngIf"],[2,"position","fixed","width","100%","height","100%","background","url('assets/images/banner/banner9.jpg')","background-repeat","no-repeat","background-size","cover"],[1,"container","mt-2","mb-4"],[1,"row"],[1,"col-md-12","col-lg-12","col-xl-12"],[1,"pt-3","text-center",2,"font-family","'Montserrat', sans-serif","text-transform","uppercase","color","#fff"],["class","container-fluid",4,"ngIf"],["class","container-fluid",4,"ngFor","ngForOf"],[1,"container-fluid"],[1,"col-md-4"],[2,"width","100%","height","auto"],[1,"card-body"],["class","text-center blinking","style","font-size: 150px;color: white;font-family: 'Arial', sans-serif;",4,"ngIf"],["class","text-center","style","font-size: 150px;color: white;font-family: 'Arial', sans-serif;",4,"ngIf"],[1,"col","mt-4"],[1,"card"],[1,"container"],["class","mb-0","style","font-family: 'Arial', sans-serif;font-size: 50px;text-transform: uppercase;",4,"ngIf"],[1,"text-center","blinking",2,"font-size","150px","color","white","font-family","'Arial', sans-serif"],[4,"ngIf"],[1,"text-center",2,"font-size","150px","color","white","font-family","'Arial', sans-serif"],[1,"mb-0",2,"font-family","'Arial', sans-serif","font-size","50px","text-transform","uppercase"],[1,"table-responsive"],[1,"table"],[2,"background-color","#fff !important"],[1,"text-center"],["src","assets/images/logo/ada.png","alt","",1,"img-fluid",2,"width","80px"],[4,"ngFor","ngForOf"],[2,"color","#fff","font-weight","700"],["data-toggle","tooltip",2,"position","absolute",3,"title"],["style","text-decoration: line-through; color: red;",4,"ngIf"],[2,"text-decoration","line-through","color","red"]],template:function(t,i){1&t&&c.uc(0,P,10,2,"body",0),2&t&&c.lc("ngIf",!i.isLoading)},directives:[o.j,o.i],styles:["td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{font-size:30px!important;color:#fff;font-family:Arial,sans-serif}td[_ngcontent-%COMP%]{font-weight:900}.dot[_ngcontent-%COMP%]{height:20px;width:20px;border-radius:50%;display:inline-block;border:2px solid #fff}.bg-merah[_ngcontent-%COMP%]{background-color:#fd1d1d}.bg-biru[_ngcontent-%COMP%]{background-color:#1d4efd}.card[_ngcontent-%COMP%]{border-radius:0!important}.blinking[_ngcontent-%COMP%]{-webkit-animation:blinkingText .3s infinite;animation:blinkingText .3s infinite}@-webkit-keyframes blinkingText{0%{color:#fff}49%{color:#fff}60%{color:#adff2f}99%{color:#adff2f}to{color:#fff}}@keyframes blinkingText{0%{color:#fff}49%{color:#fff}60%{color:#adff2f}99%{color:#adff2f}to{color:#fff}}"]}),t})()}]);var D=n("3Pt+");let S=(()=>{class t{}return t.\u0275mod=c.Rb({type:t}),t.\u0275inj=c.Qb({factory:function(i){return new(i||t)},imports:[[I,e.b,o.b,D.j]]}),t})()}}]);