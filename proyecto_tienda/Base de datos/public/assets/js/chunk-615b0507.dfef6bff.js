(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-615b0507"],{"1dde":function(o,t,r){var c=r("d039"),e=r("b622"),i=r("2d00"),n=e("species");o.exports=function(o){return i>=51||!c((function(){var t=[],r=t.constructor={};return r[n]=function(){return{foo:1}},1!==t[o](Boolean).foo}))}},"3b4c":function(o,t,r){"use strict";r.r(t);var c=function(){var o=this,t=o.$createElement,c=o._self._c||t;return c("div",[c("h1",[o._v("Pollo Selccionado")]),c("div",{staticClass:"container"},[c("div",{staticClass:"row"},o._l(o.productoPollo,(function(t,e){return c("div",{key:e,staticClass:"col-md-6 col-xs-12"},[c("b-card",{staticClass:"overflow-hidden efc",staticStyle:{"max-width":"540px"},attrs:{"no-body":""}},[c("b-row",{attrs:{"no-gutters":""}},[c("b-col",{attrs:{md:"6"}},[c("b-card-img",{staticClass:"rounded-circle",attrs:{src:r("1771")("./"+t.portada)}})],1),c("b-col",{attrs:{md:"6"}},[c("b-card-body",{attrs:{title:t.nombre}},[c("b-card-text",[o._v(o._s(t.descripcion))]),c("h3",[o._v("Bs"+o._s(t.precio))])],1)],1)],1)],1),c("br")],1)})),0)]),c("h1",[o._v("Pollo Trozado")]),c("div",{staticClass:"container"},[c("div",{staticClass:"row"},o._l(o.productoPollo2,(function(t,e){return c("div",{key:e,staticClass:"col-md-6 col-sm-6 col-xs-12"},[c("b-card",{staticClass:"overflow-hidden efc",staticStyle:{"max-width":"540px"},attrs:{"no-body":""}},[c("b-row",{attrs:{"no-gutters":""}},[c("b-col",{attrs:{md:"6"}},[c("b-card-img",{staticClass:"rounded-circle",attrs:{src:r("1771")("./"+t.portada)}})],1),c("b-col",{attrs:{md:"6"}},[c("b-card-body",{staticClass:"col-sm",attrs:{title:t.nombre}},[c("b-card-text",[o._v(o._s(t.descripcion))]),c("h3",[o._v("Bs"+o._s(t.precio))])],1)],1)],1)],1),c("br")],1)})),0)])])},e=[],i=(r("4de4"),r("bc3a")),n=r.n(i),l={mounted:function(){this.getProducto()},computed:{productoPollo:function(){return this.producto.filter((function(o){return"POLLO SELECCIONADO"==o.variedad}))},productoPollo2:function(){return this.producto.filter((function(o){return"POLLO TROZADO"==o.variedad}))}},methods:{getProducto:function(){var o=this;n.a.get("http://localhost:3500/api/producto").then((function(t){console.log(t.data),o.producto=t.data,console.log(o.producto)})).catch((function(o){return console.log(o)}))}},data:function(){return{producto:[],pollo:[{nombre:"Pollos Enteros",descripcion:"kilo",precio:15,portada:"pollo1.jpg"},{nombre:"Pollo",descripcion:"Kilo",precio:15,portada:"pollo2.jpg"}],pollo2:[{nombre:"Alitas",descripcion:"kilo",precio:18,portada:"pollo3.jpg"},{nombre:"Piernas",descripcion:"kilo",precio:18,portada:"pollo4.jpg"},{nombre:"Pecho",descripcion:"kilo",precio:18,portada:"pollo5.jpg"},{nombre:"Carne Molida de Pollo",descripcion:"kilo",precio:22,portada:"pollo6.jpg"},{nombre:"Filete de Pollo",descripcion:"kilo",precio:20,portada:"pollo7.jpg"},{nombre:"Menudencia",descripcion:"kilo",precio:7,portada:"pollo8.png"}]}}},a=l,s=(r("c95b"),r("2877")),d=Object(s["a"])(a,c,e,!1,null,null,null);t["default"]=d.exports},"4de4":function(o,t,r){"use strict";var c=r("23e7"),e=r("b727").filter,i=r("1dde"),n=r("ae40"),l=i("filter"),a=n("filter");c({target:"Array",proto:!0,forced:!l||!a},{filter:function(o){return e(this,o,arguments.length>1?arguments[1]:void 0)}})},c95b:function(o,t,r){"use strict";var c=r("fb4b"),e=r.n(c);e.a},fb4b:function(o,t,r){}}]);