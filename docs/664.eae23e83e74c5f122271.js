(self.webpackChunkfinancial_indicators=self.webpackChunkfinancial_indicators||[]).push([[664],{664:(i,n,t)=>{"use strict";t.r(n),t.d(n,{HistoricModule:()=>f});var o=t(116),e=t(319),a=t(186),c=t(619),d=t(488),r=t(54),s=t(815);function g(i,n){1&i&&(c.ynx(0),c.TgZ(1,"div",2),c._UZ(2,"app-spinner"),c.qZA(),c.BQk())}function p(i,n){if(1&i&&(c.TgZ(0,"div",4),c._UZ(1,"app-indicator-item",12),c.qZA()),2&i){const i=n.$implicit;c.xp6(1),c.Q6J("indicator",i)}}function h(i,n){if(1&i&&(c.ynx(0),c.TgZ(1,"div",4),c.TgZ(2,"h1",5),c._uU(3),c.qZA(),c.TgZ(4,"div",6),c.TgZ(5,"div",7),c._uU(6,"Fecha"),c.qZA(),c.TgZ(7,"div",8),c._uU(8,"C\xf3digo"),c.qZA(),c.TgZ(9,"div",9),c._uU(10,"Nombre"),c.qZA(),c.TgZ(11,"div",10),c._uU(12,"Valor"),c.qZA(),c.qZA(),c.qZA(),c.YNc(13,p,2,1,"div",11),c.BQk()),2&i){const i=c.oxw();c.xp6(3),c.Oqu(null==i.indicator?null:i.indicator.nombre),c.xp6(10),c.Q6J("ngForOf",i.series)}}const l=[{path:":indicator",component:(()=>{class i{constructor(i,n){this.activatedRoute=i,this.indicatorsService=n,this.indicatorType="",this.isLoading=!0,this.indicator={version:"",autor:"",codigo:"",nombre:"",unidad_medida:"",serie:[{fecha:"",valor:0}]},this.series=[]}ngOnInit(){this.activatedRoute.params.subscribe(i=>{this.indicatorType=i.indicator,console.log(this.indicatorType),this.getIndicatorData(this.indicatorType)})}getIndicatorData(i){this.indicatorsService.getIndicatorByType(i).subscribe(i=>{console.log(i),this.indicator=i,this.formatSeries(i),(0,a.H)(600).subscribe(()=>this.isLoading=!1)})}formatSeries(i){i.serie.forEach(i=>{var n,t,o,e;null===(n=this.series)||void 0===n||n.push({codigo:null===(t=this.indicator)||void 0===t?void 0:t.codigo,fecha:i.fecha,nombre:null===(o=this.indicator)||void 0===o?void 0:o.nombre,unidad_medida:null===(e=this.indicator)||void 0===e?void 0:e.unidad_medida,valor:i.valor})})}}return i.\u0275fac=function(n){return new(n||i)(c.Y36(e.gz),c.Y36(d.S))},i.\u0275cmp=c.Xpm({type:i,selectors:[["app-historic"]],decls:8,vars:2,consts:[[1,"container"],[1,"row"],[1,"col-sm-12","mt-4","mb-4"],[4,"ngIf"],[1,"col-sm-12"],[1,"mt-4","mb-3"],[1,"heading"],[1,"heading__date"],[1,"heading__code"],[1,"heading__name"],[1,"heading__value"],["class","col-sm-12",4,"ngFor","ngForOf"],["type","historic",3,"indicator"]],template:function(i,n){1&i&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.TgZ(2,"div",2),c.TgZ(3,"h2"),c._uU(4,"Hist\xf3rico de indicadores financieros"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(5,"div",1),c.YNc(6,g,3,0,"ng-container",3),c.YNc(7,h,14,2,"ng-container",3),c.qZA(),c.qZA()),2&i&&(c.xp6(6),c.Q6J("ngIf",n.isLoading),c.xp6(1),c.Q6J("ngIf",!n.isLoading))},directives:[o.O5,r.O,o.sg,s.H],styles:["[_nghost-%COMP%]   .heading[_ngcontent-%COMP%]{width:100%;font-size:16px;display:grid;grid-gap:16px;gap:16px;grid-template-columns:20% 25% calc(100% - 65% - 16px - 64px) 20% 16px;padding:8px 16px;margin:4px 0}@media screen and (max-width:991.98px){[_nghost-%COMP%]   .heading[_ngcontent-%COMP%]{display:none}}[_nghost-%COMP%]   .heading__value[_ngcontent-%COMP%]{text-align:right}"]}),i})()}];let u=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=c.oAB({type:i}),i.\u0275inj=c.cJS({imports:[[e.Bz.forChild(l)],e.Bz]}),i})();var v=t(917),m=t(450);let f=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=c.oAB({type:i}),i.\u0275inj=c.cJS({imports:[[o.ez,u,v.F,m.n]]}),i})()}}]);