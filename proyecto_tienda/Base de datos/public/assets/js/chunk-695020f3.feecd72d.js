(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-695020f3"],{"1dde":function(t,o,e){var r=e("d039"),n=e("b622"),c=e("2d00"),i=n("species");t.exports=function(t){return c>=51||!r((function(){var o=[],e=o.constructor={};return e[i]=function(){return{foo:1}},1!==o[t](Boolean).foo}))}},"4de4":function(t,o,e){"use strict";var r=e("23e7"),n=e("b727").filter,c=e("1dde"),i=e("ae40"),d=c("filter"),a=i("filter");r({target:"Array",proto:!0,forced:!d||!a},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},9560:function(t,o,e){},dcf4:function(t,o,e){"use strict";var r=e("9560"),n=e.n(r);n.a},df0b:function(t,o,e){"use strict";e.r(o);var r=function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",[r("h1",[t._v("Huevo")]),r("div",{staticClass:"container"},[r("div",{staticClass:"row"},t._l(t.productoHuevo,(function(o,n){return r("div",{key:n,staticClass:"col-md-4"},[r("b-card",{staticClass:"overflow-hidden efc",staticStyle:{"max-width":"540px"},attrs:{"no-body":""}},[r("b-row",{attrs:{"no-gutters":""}},[r("b-col",{attrs:{md:"7"}},[r("b-card-img",{staticClass:"rounded-circle",attrs:{src:e("1771")("./"+o.portada)}})],1),r("b-col",{attrs:{md:"5"}},[r("b-card-body",{attrs:{title:o.nombre}},[r("b-card-text",[t._v(t._s(o.descripcion))]),r("h3",[t._v("Bs "+t._s(o.precio))])],1)],1)],1)],1),r("br")],1)})),0)])])},n=[],c=(e("4de4"),e("bc3a")),i=e.n(c),d={mounted:function(){this.getProducto()},computed:{productoHuevo:function(){return this.producto.filter((function(t){return"HUEVO"==t.variedad}))}},methods:{getProducto:function(){var t=this;i.a.get("http://localhost:3500/api/producto").then((function(o){console.log(o.data),t.producto=o.data,console.log(t.producto)})).catch((function(t){return console.log(t)}))}},data:function(){return{producto:[],huevo:[{id_huevo:1,nombre:"Maple de Huevo",descripcion:"Rolon",precio:20,portada:"hue2.jpg"},{id_huevo:2,nombre:"Maple de Huevo",descripcion:"Rolon",precio:18,portada:"hue3.jpg"},{id_huevo:3,nombre:"Maple de Huevo",descripcion:"Rolon",precio:16,portada:"hue1.png"}]}}},a=d,u=(e("dcf4"),e("2877")),s=Object(u["a"])(a,r,n,!1,null,null,null);o["default"]=s.exports}}]);