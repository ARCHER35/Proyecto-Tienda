(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13945ba6"],{"1dde":function(t,o,e){var r=e("d039"),c=e("b622"),i=e("2d00"),n=c("species");t.exports=function(t){return i>=51||!r((function(){var o=[],e=o.constructor={};return e[n]=function(){return{foo:1}},1!==o[t](Boolean).foo}))}},"4de4":function(t,o,e){"use strict";var r=e("23e7"),c=e("b727").filter,i=e("1dde"),n=e("ae40"),s=i("filter"),a=n("filter");r({target:"Array",proto:!0,forced:!s||!a},{filter:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}})},adac:function(t,o,e){"use strict";e.r(o);var r=function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",[r("h1",[t._v("Leche")]),r("div",{staticClass:"container"},[r("div",{staticClass:"row"},t._l(t.productoLeche,(function(o,c){return r("div",{key:c,staticClass:"col-md-6 col-sm-6 col-xs-12"},[r("b-card",{staticClass:"overflow-hidden efc",staticStyle:{"max-width":"540px"},attrs:{"no-body":""}},[r("b-row",{attrs:{"no-gutters":""}},[r("b-col",{attrs:{md:"6"}},[r("b-card-img",{staticClass:"rounded-circle",attrs:{src:e("1771")("./"+o.portada)}})],1),r("b-col",{attrs:{md:"6"}},[r("b-card-body",{attrs:{title:o.nombre}},[r("b-card-text",[t._v(t._s(o.descripcion))]),r("h3",[t._v("Bs"+t._s(o.precio))])],1)],1)],1)],1),r("br")],1)})),0)]),r("h1",[t._v("Queso")]),r("div",{staticClass:"container"},[r("div",{staticClass:"row"},t._l(t.productoQueso,(function(o,c){return r("div",{key:c,staticClass:"col-md-4 col-sm-6 col-xs-12"},[r("b-card",{staticClass:"overflow-hidden efc",staticStyle:{"max-width":"540px"},attrs:{"no-body":""}},[r("b-row",{attrs:{"no-gutters":""}},[r("b-col",{attrs:{md:"6"}},[r("b-card-img",{staticClass:"rounded-circle",attrs:{src:e("1771")("./"+o.portada)}})],1),r("b-col",{attrs:{md:"6"}},[r("b-card-body",{attrs:{title:o.nombre}},[r("b-card-text",[t._v(t._s(o.descripcion))]),r("h3",[t._v("Bs"+t._s(o.precio))])],1)],1)],1)],1),r("br")],1)})),0)])])},c=[],i=(e("4de4"),e("bc3a")),n=e.n(i),s={mounted:function(){this.getProducto()},computed:{productoLeche:function(){return this.producto.filter((function(t){return"LECHE"==t.variedad}))},productoQueso:function(){return this.producto.filter((function(t){return"QUESO"==t.variedad}))}},methods:{getProducto:function(){var t=this;n.a.get("http://localhost:3500/api/producto").then((function(o){console.log(o.data),t.producto=o.data,console.log(t.producto)})).catch((function(t){return console.log(t)}))}},data:function(){return{producto:[],leche:[{id:1,nombre:"Leche Normal",descripcion:"Unidad",precio:6,imagen:"leche1.jpg"},{id:2,titulo:"Leche Deslactosada",descripcion:"Unidad",precio:7,imagen:"leche2.png"}],queso:[{id:1,nombre:"Queso Rio Grande",descripcion:"Kilo",precio:28,imagen:"queso.jpg"},{id:2,nombre:"Queso Muzzarella",descripcion:"Kilo",precio:23,imagen:"queso2.jpg"},{id:3,nombre:"Quesillo",descripcion:"Unidad",precio:5,imagen:"queso3.jpg"}]}}},a=s,d=e("2877"),u=Object(d["a"])(a,r,c,!1,null,null,null);o["default"]=u.exports}}]);