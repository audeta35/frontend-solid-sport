function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,i){return e&&_defineProperties(t.prototype,e),i&&_defineProperties(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{w4Pu:function(t,e,i){"use strict";i.r(e),i.d(e,"AssessmentAdminComponentModule",(function(){return Y}));var o=i("ofXK"),n=i("tyNb"),b=i("fXoL"),a=i("7JkF"),c=i("LYy9"),l=i("PLSI"),s=i("3Pt+");function r(t,e){if(1&t&&(b.Yb(0,"option"),b.vc(1),b.Xb()),2&t){var i=e.$implicit,o=b.ic().index;b.Ib("selected",!(o+1!=i.userId||!i.selectedTechnical)||null),b.Hb(1),b.wc(i.point)}}function u(t,e){if(1&t&&(b.Yb(0,"option"),b.vc(1),b.Xb()),2&t){var i=e.$implicit,o=b.ic().index;b.Ib("selected",!(o+1!==i.userId||!i.selectedAthletic)||null),b.Hb(1),b.wc(i.point)}}function d(t,e){if(1&t&&(b.Yb(0,"tr"),b.Yb(1,"th"),b.vc(2),b.Xb(),b.Yb(3,"th"),b.vc(4),b.Xb(),b.Yb(5,"td"),b.Yb(6,"div",20),b.Yb(7,"select",21),b.Yb(8,"option"),b.vc(9,"0"),b.Xb(),b.tc(10,r,2,2,"option",17),b.Xb(),b.Xb(),b.Xb(),b.Yb(11,"td"),b.Yb(12,"div",20),b.Yb(13,"select",21),b.Yb(14,"option"),b.vc(15,"0"),b.Xb(),b.tc(16,u,2,2,"option",17),b.Xb(),b.Xb(),b.Xb(),b.Xb()),2&t){var i=e.index,o=e.$implicit,n=b.ic();b.Hb(2),b.wc(i+1),b.Hb(2),b.wc(o.juri),b.Hb(6),b.lc("ngForOf",n.optionValue),b.Hb(6),b.lc("ngForOf",n.optionValue)}}var v,p,h=n.f.forChild([{path:"",component:(v=function(){function t(e,i,o){var n=this;_classCallCheck(this,t),this.socket=e,this.atletService=i,this.pointService=o,this.isLoading=!1,this.userData={},this.optionValue=[],this.userPoint=[],this.Data=[{juri:"j1"},{juri:"j2"},{juri:"j3"},{juri:"j4"},{juri:"j5"},{juri:"j6"},{juri:"j7"}],this.socket.emit("result-admin"),this.socket.on("data-admin",(function(){n.atletService.getAtletByMatch().then((function(t){console.log(t),n.userData=t.result[0],console.log(n.userData),n.pointService.getPointForScoreboard(n.userData.id_atlet,n.userData.id_match).then((function(t){n.userPoint=t.result.athlete_point_list,console.log("=== response",n.userPoint);for(var e=5;e<10;e+=.2){var i=e.toFixed(1);for(var o in n.optionValue.push({point:i}),n.userPoint)n.userPoint[o].technical_result.toFixed(1)===i?(console.log("=== nasuk teknik",i),n.optionValue[n.optionValue.length-1].selectedTechnical=!0,n.optionValue[n.optionValue.length-1].userId=n.userPoint[o].id_user,n.userPoint[o].athletic_result.toFixed(1)===i&&(n.optionValue[n.optionValue.length-1].selectedAthletic=!0,console.log("=== nasuk atletik",i))):n.userPoint[o].athletic_result.toFixed(1)===i&&(n.optionValue[n.optionValue.length-1].selectedAthletic=!0,n.optionValue[n.optionValue.length-1].userId=n.userPoint[o].id_user,console.log("=== nasuk teknik elseif",i),n.userPoint[o].technical_result.toFixed(1)===i&&(n.optionValue[n.optionValue.length-1].selectedTechnical=!0))}console.log(n.optionValue,"boooooo"),n.isLoading=!1})).catch((function(t){if(404===t.status)for(var e=5;e<10;e+=.2){var i=e.toFixed(1);n.optionValue.push({point:i,selected:!1})}n.isLoading=!1}))})).catch((function(t){404===t.status&&console.log("notFound"),console.log(t),n.isLoading=!1}))}))}return _createClass(t,[{key:"ngOnInit",value:function(){console.log(this.optionValue),this.isLoading=!0}},{key:"onSubmit",value:function(){this.socket.emit("scoreboard"),this.socket.emit("result-admin"),this.socket.emit("result-juri")}}]),t}(),v.\u0275fac=function(t){return new(t||v)(b.Tb(a.a),b.Tb(c.a),b.Tb(l.a))},v.\u0275cmp=b.Nb({type:v,selectors:[["app-assessment-admin"]],decls:62,vars:4,consts:[[1,"header","pb-6",2,"background","url('assets/images/banner/banner6.jpg')","height","200px"],[1,"container-fluid"],[1,"header-body"],[1,"row","align-items-center","py-4"],[1,"text-center","text-light","mt-3",2,"margin","auto","font-size","40px"],[1,"row",2,"margin-top","-80px"],[1,"col"],[1,"col-lg-8","col-md-10"],[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-body"],[1,"text-center"],[1,"col-md-6"],[1,"col-lg-10","col-md-12"],[1,"table-responsive"],[1,"table","table-borderless"],[4,"ngFor","ngForOf"],[1,"btn","btn-outline-success","float-right"],[1,"fa","fa-save"],[1,"form-group"],[1,"form-control"]],template:function(t,e){1&t&&(b.Yb(0,"div",0),b.Yb(1,"div",1),b.Yb(2,"div",2),b.Yb(3,"div",3),b.Yb(4,"p",4),b.vc(5,"Penilaian Admin"),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Yb(6,"div",5),b.Ub(7,"div",6),b.Yb(8,"div",7),b.Yb(9,"div",8),b.Yb(10,"div",9),b.Yb(11,"div",10),b.Yb(12,"div",11),b.Yb(13,"div",8),b.Yb(14,"div",9),b.Yb(15,"div",12),b.Yb(16,"label"),b.vc(17,"Nama Atlet "),b.Xb(),b.Yb(18,"h1"),b.vc(19),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Ub(20,"hr"),b.Yb(21,"div",8),b.Yb(22,"div",13),b.Yb(23,"div",12),b.Yb(24,"label"),b.vc(25,"Memainkan kata "),b.Xb(),b.Yb(26,"h2"),b.vc(27),b.Xb(),b.Xb(),b.Xb(),b.Yb(28,"div",13),b.Yb(29,"div",12),b.Yb(30,"label"),b.vc(31,"Kontingen "),b.Xb(),b.Yb(32,"h2"),b.vc(33),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Ub(34,"div",6),b.Xb(),b.Yb(35,"div",8),b.Ub(36,"div",6),b.Yb(37,"div",14),b.Yb(38,"div",8),b.Yb(39,"div",9),b.Yb(40,"div",10),b.Yb(41,"div",11),b.Yb(42,"div",15),b.Yb(43,"table",16),b.Yb(44,"thead"),b.Yb(45,"tr"),b.Yb(46,"th"),b.vc(47,"No"),b.Xb(),b.Yb(48,"th"),b.vc(49,"Juri"),b.Xb(),b.Yb(50,"th"),b.vc(51,"Nilai Teknik"),b.Xb(),b.Yb(52,"th"),b.vc(53,"Nilai Atletik"),b.Xb(),b.Xb(),b.Xb(),b.Yb(54,"tbody"),b.tc(55,d,17,4,"tr",17),b.Xb(),b.Xb(),b.Xb(),b.Yb(56,"div",9),b.Ub(57,"hr"),b.Yb(58,"button",18),b.Ub(59,"i",19),b.vc(60," Simpan "),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Ub(61,"div",6),b.Xb()),2&t&&(b.Hb(19),b.xc(" ",e.userData.atlet_name,""),b.Hb(8),b.xc(" ",e.userData.kata_name,""),b.Hb(6),b.wc(e.userData.kontingen),b.Hb(22),b.lc("ngForOf",e.Data))},directives:[o.i,s.i,s.l],styles:[""]}),v)}]),X=i("tk/3"),Y=((p=function t(){_classCallCheck(this,t)}).\u0275mod=b.Rb({type:p}),p.\u0275inj=b.Qb({factory:function(t){return new(t||p)},imports:[[h,o.b,X.b,s.c,s.j]]}),p)}}]);