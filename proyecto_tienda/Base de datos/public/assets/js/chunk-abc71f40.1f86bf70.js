(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-abc71f40"],{"1dde":function(o,t,i){var r=i("d039"),d=i("b622"),e=i("2d00"),a=d("species");o.exports=function(o){return e>=51||!r((function(){var t=[],i=t.constructor={};return i[a]=function(){return{foo:1}},1!==t[o](Boolean).foo}))}},"32ff":function(o,t,i){"use strict";i.r(t);var r=function(){var o=this,t=o.$createElement,r=o._self._c||t;return r("div",[r("h1",[o._v("Fideos Famosa")]),r("div",{staticClass:"container"},[r("div",{staticClass:"row"},o._l(o.productoFideo1,(function(t,d){return r("div",{key:d,staticClass:"col-md-6"},[r("b-card",{staticClass:"overflow-hidden efc",staticStyle:{"max-width":"540px"},attrs:{"no-body":""}},[r("b-row",{attrs:{"no-gutters":""}},[r("b-col",{attrs:{md:"6"}},[r("b-card-img",{staticClass:"rounded-circle",staticStyle:{padding:"10px"},attrs:{src:i("1771")("./"+t.portada)}})],1),r("b-col",{attrs:{md:"6"}},[r("b-card-body",{attrs:{title:t.nombre}}),r("b-card-text",[o._v(o._s(t.descripcion))]),r("h3",[o._v("Bs"+o._s(t.precio))])],1)],1)],1)],1)})),0)]),r("h1",[o._v("Fideos Lazzaroni")]),r("div",{staticClass:"container"},[r("div",{staticClass:"row"},o._l(o.productoFideo2,(function(t,d){return r("div",{key:d,staticClass:"col-md-6"},[r("b-card",{staticClass:"overflow-hidden efc",staticStyle:{"max-width":"540px"},attrs:{"no-body":""}},[r("b-row",{attrs:{"no-gutters":""}},[r("b-col",{attrs:{md:"6"}},[r("b-card-img",{staticClass:"rounded-circle",staticStyle:{padding:"10px"},attrs:{src:i("1771")("./"+t.portada),height:"250px"}})],1),r("b-col",{attrs:{md:"6"}},[r("b-card-body",{attrs:{title:t.nombre}}),r("b-card-text",[o._v(o._s(t.descripcion))]),r("h3",[o._v("Bs"+o._s(t.precio))])],1)],1)],1)],1)})),0)])])},d=[],e=(i("4de4"),i("bc3a")),a=i.n(e),c={mounted:function(){this.getProducto()},computed:{productoFideo1:function(){return this.producto.filter((function(o){return"FIDEOS FAMOSA"==o.variedad}))},productoFideo2:function(){return this.producto.filter((function(o){return"FIDEOS LAZZARONI"==o.variedad}))}},methods:{getProducto:function(){var o=this;a.a.get("http://localhost:3500/api/producto").then((function(t){console.log(t.data),o.producto=t.data,console.log(o.producto)})).catch((function(o){return console.log(o)}))}},data:function(){return{producto:[],famosa:[{nombre:"Fideo Anillito",descripcion:"Unidad",precio:5,portada:"fide1.jpg"},{nombre:"Fideo Codo Mediano Rigatti",descripcion:"Unidad",precio:5,portada:"fide2.jpg"},{nombre:"Fideo Codo Grande Rigatti",descripcion:"Unidad",precio:5,portada:"fide3.jpg"},{nombre:"Fideo Tirabuzon",descripcion:"Unidad",precio:5,portada:"fide4.jpg"},{nombre:"Fideo Espagueti",descripcion:"Unidad",precio:5,portada:"fide5.jpg"},{nombre:"Fideo Corbatitas",descripcion:"Unidad",precio:5,portada:"fide6.jpg"},{nombre:"Fideo Letritas",descripcion:"Unidad",precio:5,portada:"fide7.jpg"}],lazzaroni:[{nombre:"Espageti Lazzaroni",descripcion:"Unidad",precio:5,portada:"fide10.jpg"},{nombre:"Fideo Aritos",descripcion:"Unidad",precio:5,portada:"fide12.jpg"},{nombre:"Fideo Moño",descripcion:"Unidad",precio:5,portada:"fide13.jpg"},{nombre:"Fideos Nido",descripcion:"Unidad",precio:5,portada:"fide14.jpg"}]}}},n=c,s=(i("a102"),i("2877")),p=Object(s["a"])(n,r,d,!1,null,null,null);t["default"]=p.exports},"4de4":function(o,t,i){"use strict";var r=i("23e7"),d=i("b727").filter,e=i("1dde"),a=i("ae40"),c=e("filter"),n=a("filter");r({target:"Array",proto:!0,forced:!c||!n},{filter:function(o){return d(this,o,arguments.length>1?arguments[1]:void 0)}})},"4f12":function(o,t,i){},a102:function(o,t,i){"use strict";var r=i("4f12"),d=i.n(r);d.a}}]);