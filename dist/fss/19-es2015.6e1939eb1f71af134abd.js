(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{QSqd:function(t,e,n){"use strict";n.r(e),n.d(e,"ImportAtletComponentModule",(function(){return v}));var o=n("ofXK"),i=n("tyNb"),r=n("PSD3"),c=n.n(r);class l{}var a=n("fXoL"),s=n("LYy9"),b=n("3Pt+");const d=["csvReader"],g=function(){return{standalone:!0}};function u(t,e){if(1&t){const t=a.Zb();a.Yb(0,"tr"),a.Yb(1,"th"),a.Yb(2,"i",26),a.gc("click",(function(){a.qc(t);const n=e.index;return a.ic(2).deleteForm(n)})),a.Xb(),a.Xb(),a.Yb(3,"th"),a.vc(4),a.Xb(),a.Yb(5,"td"),a.Yb(6,"div",27),a.Yb(7,"input",28),a.gc("ngModelChange",(function(n){return a.qc(t),e.$implicit.name=n})),a.Xb(),a.Xb(),a.Xb(),a.Yb(8,"td"),a.Yb(9,"div",27),a.Yb(10,"input",29),a.gc("ngModelChange",(function(n){return a.qc(t),e.$implicit.kontingen=n})),a.Xb(),a.Xb(),a.Xb(),a.Yb(11,"td"),a.Yb(12,"div",27),a.Yb(13,"select",30),a.gc("ngModelChange",(function(n){return a.qc(t),e.$implicit.kata=n})),a.Yb(14,"option",31),a.vc(15,"INKAI"),a.Xb(),a.Yb(16,"option",32),a.vc(17,"UNSU"),a.Xb(),a.Xb(),a.Xb(),a.Xb(),a.Yb(18,"td"),a.Yb(19,"input",33),a.gc("ngModelChange",(function(n){return a.qc(t),e.$implicit.group=n})),a.Xb(),a.Xb(),a.Yb(20,"td"),a.Yb(21,"div",27),a.Yb(22,"select",30),a.gc("ngModelChange",(function(n){return a.qc(t),e.$implicit.attribute=n})),a.Yb(23,"option",34),a.vc(24,"AKA "),a.Xb(),a.Yb(25,"option",35),a.vc(26,"AO "),a.Xb(),a.Xb(),a.Xb(),a.Xb(),a.Yb(27,"td"),a.Yb(28,"input",36),a.gc("ngModelChange",(function(n){return a.qc(t),e.$implicit.class=n})),a.Xb(),a.Xb(),a.Xb()}if(2&t){const t=e.index,n=e.$implicit;a.Hb(4),a.xc(" ",t+1," "),a.Hb(3),a.lc("ngModel",n.name)("ngModelOptions",a.mc(13,g)),a.Hb(3),a.lc("ngModel",n.kontingen)("ngModelOptions",a.mc(14,g)),a.Hb(3),a.lc("ngModel",n.kata)("ngModelOptions",a.mc(15,g)),a.Hb(6),a.lc("ngModel",n.group)("ngModelOptions",a.mc(16,g)),a.Hb(3),a.lc("ngModel",n.attribute)("ngModelOptions",a.mc(17,g)),a.Hb(6),a.lc("ngModel",n.class)("ngModelOptions",a.mc(18,g))}}function p(t,e){if(1&t){const t=a.Zb();a.Yb(0,"div",13),a.Yb(1,"div",18),a.Yb(2,"h1",19),a.vc(3," IMPOR DATA ATLET "),a.Xb(),a.Xb(),a.Yb(4,"div",14),a.Yb(5,"div",20),a.Yb(6,"table",21),a.Yb(7,"thead"),a.Yb(8,"tr"),a.Yb(9,"th"),a.vc(10," pilih "),a.Xb(),a.Yb(11,"th"),a.vc(12,"No"),a.Xb(),a.Yb(13,"th"),a.vc(14,"Nama Atlet"),a.Xb(),a.Yb(15,"th"),a.vc(16,"Kontingen"),a.Xb(),a.Yb(17,"th"),a.vc(18,"Kata yang dimainkan"),a.Xb(),a.Yb(19,"th"),a.vc(20,"Grup"),a.Xb(),a.Yb(21,"th"),a.vc(22,"Atribut"),a.Xb(),a.Yb(23,"th"),a.vc(24,"Kelas"),a.Xb(),a.Xb(),a.Xb(),a.Yb(25,"tbody"),a.tc(26,u,29,19,"tr",22),a.Xb(),a.Xb(),a.Xb(),a.Yb(27,"div",23),a.Yb(28,"button",24),a.gc("click",(function(){return a.qc(t),a.ic().setForm()})),a.vc(29," Tambah Form "),a.Xb(),a.Yb(30,"button",25),a.gc("click",(function(){return a.qc(t),a.ic().submitForm()})),a.vc(31," Simpan Data "),a.Xb(),a.Xb(),a.Xb(),a.Xb()}if(2&t){const t=a.ic();a.Hb(26),a.lc("ngForOf",t.names)}}const m=c.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:2e3}),h=i.f.forChild([{path:"",component:(()=>{class t{constructor(t,e){this.atletService=t,this.routes=e,this.names=[],this.isProcess=!1,this.group=[],this.maxUserGroup=10,this.records=[]}ngOnInit(){}uploadListener(t){if(this.isValidCSVFile(t.srcElement.files[0])){let e=t.target,n=new FileReader;n.readAsText(e.files[0]),n.onload=()=>{let t=n.result.split(/\r\n|\n/),e=this.getHeaderArray(t);this.records=this.getDataRecordsArrayFromCSVFile(t,e.length)},n.onerror=function(){console.log("error is occured while reading file!")}}else alert("Please import valid .csv file."),this.fileReset()}getDataRecordsArrayFromCSVFile(t,e){let n,o=Math.ceil(t.length/this.maxUserGroup);for(n=1;n<=o;n++)this.group.push({name:"group "+n});for(n=1;n<=t.length;n++){let o=t[n].split(",");if(o.length==e){let t=new l;t.name=o[0].trim(),t.kontingen=o[1].trim(),t.attribute=o[2].trim(),t.kata=o[3].trim(),t.group=o[4].trim(),t.class=o[5].trim(),this.names.push({name:t.name,kontingen:t.kontingen,kata:t.kata,attribute:t.attribute,selected:!1,group:"group "+t.group,class:t.class})}}return console.log(this.names),[]}isValidCSVFile(t){return t.name.endsWith(".csv")}getHeaderArray(t){let e=t[0].split(","),n=[];for(let o=0;o<e.length;o++)n.push(e[o]);return n}fileReset(){this.csvReader.nativeElement.value="",this.records=[]}addForm(){this.isProcess=!0,setTimeout(()=>{let t;for(t=1;t<=this.totalForm;t++)this.names.push({name:"",kontingen:"",kata:"",attribute:"",group:"null",class:""});this.isProcess=!1},500)}setForm(){this.names.push({name:"",kontingen:"",kata:"",attribute:"",group:"null",class:""})}deleteForm(t){this.names.splice(t,1)}numberOnly(t){const e=t.which?t.which:t.keyCode;return!(e>31&&(e<48||e>57))}submitForm(){this.atletService.addAtletGroup(this.names,this.group).then(t=>{console.log(t),m.fire({icon:"success",title:"Data Atlet berhasil di tambah"}),this.routes.navigate(["file-atlet"])}).catch(t=>{m.fire({icon:"error",title:"Kesalahan pada server"}),console.log(t)})}}return t.\u0275fac=function(e){return new(e||t)(a.Tb(s.a),a.Tb(i.b))},t.\u0275cmp=a.Nb({type:t,selectors:[["app-import-atlet"]],viewQuery:function(t,e){var n;1&t&&a.zc(d,!0),2&t&&a.oc(n=a.hc())&&(e.csvReader=n.first)},decls:26,vars:1,consts:[[1,"header","pb-6",2,"background","url('assets/images/banner/banner6.jpg')","height","200px"],[1,"container-fluid"],[1,"header-body"],[1,"row","align-items-center","py-4"],[1,"text-center","text-light","mt-3",2,"margin","auto","font-size","40px"],[1,"row",2,"margin-top","-100px"],[1,"col"],[1,"col-lg-11","col-md-11"],[1,"row"],[1,"col-md-12"],["routerLink","/file-atlet",1,"btn","btn-sm","btn-neutral","mb-4"],[1,"fa","fa-angle-left"],[1,"float-right","badge","badge-success"],[1,"card"],[1,"card-body"],["type","file","name","Upload CSV","id","txtFileUpload","accept",".csv",1,"btn","btn-block","btn-outline-success",3,"change"],["csvReader",""],["class","card",4,"ngIf"],[1,"card-header","bg-primary"],[1,"text-uppercase","text-center","text-white"],[1,"table-responsive"],[1,"table","table-borderless"],[4,"ngFor","ngForOf"],[1,"card-footer"],[1,"btn","btn-outline-primary",3,"click"],[1,"btn","float-right","btn-outline-success",3,"click"],[1,"fa","fa-trash","text-danger",3,"click"],[1,"form-group"],["placeholder","Nama Atlet","type","text",1,"form-control","form-control-sm",3,"ngModel","ngModelOptions","ngModelChange"],["placeholder","Kontingen","type","text",1,"form-control","form-control-sm",3,"ngModel","ngModelOptions","ngModelChange"],["placeholder","Nama Atlet",1,"form-control","form-control-sm",3,"ngModel","ngModelOptions","ngModelChange"],["value","inkai"],["value","unsu"],["placeholder","group","type","text",1,"form-control","form-control-sm",3,"ngModel","ngModelOptions","ngModelChange"],["value","aka",2,"background-color","red","color","#fff"],["value","ao",2,"background-color","blue","color","#fff"],["type","text",1,"form-control","form-control-sm",3,"ngModel","ngModelOptions","ngModelChange"]],template:function(t,e){1&t&&(a.Yb(0,"div",0),a.Yb(1,"div",1),a.Yb(2,"div",2),a.Yb(3,"div",3),a.Yb(4,"p",4),a.vc(5,"Import Data Atlet"),a.Xb(),a.Xb(),a.Xb(),a.Xb(),a.Xb(),a.Yb(6,"div",5),a.Ub(7,"div",6),a.Yb(8,"div",7),a.Yb(9,"div",8),a.Yb(10,"div",9),a.Yb(11,"a",10),a.Ub(12,"i",11),a.vc(13," Back"),a.Xb(),a.Yb(14,"span",12),a.vc(15,"import .csv"),a.Xb(),a.Yb(16,"div",13),a.Yb(17,"div",14),a.Yb(18,"div",8),a.Yb(19,"div",9),a.Yb(20,"input",15,16),a.gc("change",(function(t){return e.uploadListener(t)})),a.Xb(),a.Xb(),a.Xb(),a.Xb(),a.Xb(),a.Xb(),a.Xb(),a.Yb(22,"div",8),a.Yb(23,"div",9),a.tc(24,p,32,1,"div",17),a.Xb(),a.Xb(),a.Xb(),a.Ub(25,"div",6),a.Xb()),2&t&&(a.Hb(24),a.lc("ngIf",e.names.length))},directives:[i.e,o.j,o.i,b.b,b.e,b.h,b.k,b.i,b.l],styles:[""]}),t})()}]);var f=n("tk/3");let v=(()=>{class t{}return t.\u0275mod=a.Rb({type:t}),t.\u0275inj=a.Qb({factory:function(e){return new(e||t)},imports:[[h,o.b,f.b,b.c,b.j]]}),t})()}}]);