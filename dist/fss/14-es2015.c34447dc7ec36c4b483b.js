(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{Y59f:function(i,t,n){"use strict";n.r(t),n.d(t,"EditJuriComponentModule",(function(){return y}));var e=n("ofXK"),a=n("tyNb"),o=n("PSD3"),l=n.n(o),s=n("fXoL"),c=n("GRWQ"),r=n("16+A"),b=n("3Pt+");function d(i,t){if(1&i&&(s.Yb(0,"option",26),s.wc(1),s.Xb()),2&i){const i=t.$implicit;s.lc("value",i.value)("selected",i.name),s.Hb(1),s.yc(" ",i.name," ")}}function u(i,t){if(1&i&&(s.Yb(0,"option",26),s.wc(1),s.Xb()),2&i){const i=t.$implicit,n=s.ic();s.lc("value",i.id)("selected",!0===n.old.name),s.Hb(1),s.yc(" ",i.name," ")}}function m(i,t){if(1&i){const i=s.Zb();s.Yb(0,"div",14),s.Yb(1,"button",27),s.gc("click",(function(){return s.rc(i),s.ic().onSubmit()})),s.Ub(2,"i",28),s.wc(3," Simpan "),s.Xb(),s.Xb()}}function g(i,t){if(1&i){const i=s.Zb();s.Yb(0,"div"),s.Yb(1,"button",27),s.gc("click",(function(){return s.rc(i),s.ic(2).onSubmit()})),s.Ub(2,"i",30),s.wc(3," Proses... "),s.Xb(),s.Xb()}}function p(i,t){if(1&i){const i=s.Zb();s.Yb(0,"div"),s.Yb(1,"button",31),s.gc("click",(function(){return s.rc(i),s.ic(2).onSubmit()})),s.Ub(2,"i",28),s.wc(3," Simpan "),s.Xb(),s.Xb()}}function h(i,t){if(1&i&&(s.Yb(0,"div",14),s.uc(1,g,4,0,"div",29),s.uc(2,p,4,0,"div",29),s.Xb()),2&i){const i=s.ic();s.Hb(1),s.lc("ngIf",1==i.isLoading),s.Hb(1),s.lc("ngIf",0==i.isLoading)}}const f=function(){return{standalone:!0}},v=l.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:2e3}),X=a.f.forChild([{path:"",component:(()=>{class i{constructor(i,t,n,e){this.userService=i,this.routes=t,this.router=n,this.tatamiService=e,this.payload={id:"",username:"",position:"",tatami:""},this.old={id:"",username:"",position:"",tatami:""},this.isValid=!0,this.isLoading=!1,this.listJury=[{name:"Juri 1",value:"j1"},{name:"Juri 2",value:"j2"},{name:"Juri 3",value:"j3"},{name:"Juri 4",value:"j4"},{name:"Juri 5",value:"j5"},{name:"Juri 6",value:"j6"},{name:"Juri 7",value:"j7"}],this.listTatami=[],this.routes.params.subscribe(i=>{this.payload.id=i.id,this.payload.username=i.username,this.payload.position=i.position,this.payload.tatami=i.tatami,this.old.id=i.id,this.old.username=i.username,this.old.position=i.position,this.old.tatami=i.tatami},i=>{console.log(i)})}ngOnInit(){this.getTatami()}getTatami(){this.tatamiService.getTatami().then(i=>{this.listTatami=i.result,console.log(i.result)}).catch(i=>{console.log(i)})}keyUp(){let{username:i,position:t,tatami:n}=this.payload;this.isValid=!!(i&&t&&n)}onSubmit(){this.isLoading=!this.isLoading;let{username:i,position:t,tatami:n}=this.payload;setTimeout(()=>{i===this.old.username&&t===this.old.position&&n===this.old.tatami?(this.isLoading=!this.isLoading,v.fire({icon:"warning",title:"Tidak ada perubahan data"})):this.userService.editUser(this.payload).then(i=>{this.isLoading=!this.isLoading,v.fire({icon:"success",title:"Data juri berhasil di ubah"}),this.router.navigate(["/file-juri"])}).catch(i=>{this.isLoading=!this.isLoading,console.warn(i),v.fire({icon:"error",title:"Kesalahan pada server"})})},1500)}}return i.\u0275fac=function(t){return new(t||i)(s.Tb(c.a),s.Tb(a.a),s.Tb(a.b),s.Tb(r.a))},i.\u0275cmp=s.Nb({type:i,selectors:[["app-edit-juri"]],decls:44,vars:13,consts:[[1,"header","pb-6",2,"background","url('assets/images/banner/banner6.jpg')","height","200px"],[1,"container-fluid"],[1,"header-body"],[1,"row","align-items-center","py-4"],[1,"text-center","text-light","mt-3",2,"margin","auto","font-size","40px"],[1,"row",2,"margin-top","-100px"],[1,"col"],[1,"col-lg-8","col-md-10"],["routerLink","/file-juri",1,"btn","btn-sm","btn-neutral","mb-4"],[1,"fa","fa-angle-left"],[1,"card"],[1,"card-body"],[1,"pl-lg-4"],[1,"row"],[1,"col-lg-12"],[1,"form-group"],["for","input-username",1,"form-control-label"],["type","text","id","input-username","placeholder","Username","value","payload.username",1,"form-control",3,"ngModel","ngModelOptions","change","ngModelChange"],[1,"col-lg-6"],["for","exampleFormControlSelect1",1,"form-control-label"],["id","exampleFormControlSelect1",1,"form-control",3,"ngModel","ngModelOptions","change","ngModelChange"],["selected","","disabled",""],[3,"value","selected",4,"ngFor","ngForOf"],["disabled","","selected",""],[1,"my-4"],["class","col-lg-12",4,"ngIf"],[3,"value","selected"],["disabled","",1,"btn","btn-outline-warning","float-right",3,"click"],[1,"fa","fa-save"],[4,"ngIf"],[1,"fa","fa-cog"],[1,"btn","btn-outline-warning","float-right",3,"click"]],template:function(i,t){1&i&&(s.Yb(0,"div",0),s.Yb(1,"div",1),s.Yb(2,"div",2),s.Yb(3,"div",3),s.Yb(4,"p",4),s.wc(5,"Edit Juri"),s.Xb(),s.Xb(),s.Xb(),s.Xb(),s.Xb(),s.Yb(6,"div",5),s.Ub(7,"div",6),s.Yb(8,"div",7),s.Yb(9,"a",8),s.Ub(10,"i",9),s.wc(11," Back"),s.Xb(),s.Yb(12,"div",10),s.Yb(13,"div",11),s.Yb(14,"form"),s.Yb(15,"div",12),s.Yb(16,"div",13),s.Yb(17,"div",14),s.Yb(18,"div",15),s.Yb(19,"label",16),s.wc(20,"Username"),s.Xb(),s.Yb(21,"input",17),s.gc("change",(function(){return t.keyUp()}))("ngModelChange",(function(i){return t.payload.username=i})),s.Xb(),s.Xb(),s.Xb(),s.Xb(),s.Yb(22,"div",13),s.Yb(23,"div",18),s.Yb(24,"div",15),s.Yb(25,"label",19),s.wc(26,"Pilihan Juri"),s.Xb(),s.Yb(27,"select",20),s.gc("change",(function(){return t.keyUp()}))("ngModelChange",(function(i){return t.payload.position=i})),s.Yb(28,"option",21),s.wc(29,"Pilih Juri"),s.Xb(),s.uc(30,d,2,3,"option",22),s.Xb(),s.Xb(),s.Xb(),s.Yb(31,"div",18),s.Yb(32,"div",15),s.Yb(33,"label",19),s.wc(34,"Tatami"),s.Xb(),s.Yb(35,"select",20),s.gc("change",(function(){return t.keyUp()}))("ngModelChange",(function(i){return t.payload.tatami=i})),s.Yb(36,"option",23),s.wc(37,"Pilih Tatami"),s.Xb(),s.uc(38,u,2,3,"option",22),s.Xb(),s.Xb(),s.Xb(),s.Xb(),s.Ub(39,"hr",24),s.Yb(40,"div",13),s.uc(41,m,4,0,"div",25),s.uc(42,h,3,2,"div",25),s.Xb(),s.Xb(),s.Xb(),s.Xb(),s.Xb(),s.Xb(),s.Ub(43,"div",6),s.Xb()),2&i&&(s.Hb(21),s.lc("ngModel",t.payload.username)("ngModelOptions",s.nc(10,f)),s.Hb(6),s.lc("ngModel",t.payload.position)("ngModelOptions",s.nc(11,f)),s.Hb(3),s.lc("ngForOf",t.listJury),s.Hb(5),s.lc("ngModel",t.payload.tatami)("ngModelOptions",s.nc(12,f)),s.Hb(3),s.lc("ngForOf",t.listTatami),s.Hb(3),s.lc("ngIf",0==t.isValid),s.Hb(1),s.lc("ngIf",1==t.isValid))},directives:[a.e,b.m,b.f,b.g,b.b,b.e,b.h,b.k,b.i,b.l,e.i,e.j],styles:[""]}),i})()}]);var Y=n("tk/3");let y=(()=>{class i{}return i.\u0275mod=s.Rb({type:i}),i.\u0275inj=s.Qb({factory:function(t){return new(t||i)},imports:[[X,e.b,Y.b,b.c,b.j]]}),i})()}}]);