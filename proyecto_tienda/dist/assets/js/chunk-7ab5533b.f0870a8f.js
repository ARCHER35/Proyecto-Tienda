(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ab5533b"],{"1dde":function(t,r,e){var o=e("d039"),c=e("b622"),a=e("2d00"),n=c("species");t.exports=function(t){return a>=51||!o((function(){var r=[],e=r.constructor={};return e[n]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},"4de4":function(t,r,e){"use strict";var o=e("23e7"),c=e("b727").filter,a=e("1dde"),n=e("ae40"),i=a("filter"),s=n("filter");o({target:"Array",proto:!0,forced:!i||!s},{filter:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}})},"939a":function(t,r,e){},a9bc:function(t,r,e){"use strict";var o=e("939a"),c=e.n(o);c.a},e111:function(t,r,e){"use strict";e.r(r);var o=function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("div",[o("h1",[t._v("Aceite Fino")]),o("div",{staticClass:"container"},[o("div",{staticClass:"row"},t._l(t.productoAceite1,(function(r,c){return o("div",{key:c,staticClass:"col-md-6"},[o("b-card",{staticClass:"overflow-hidden efc",staticStyle:{"max-width":"540px"},attrs:{"no-body":""}},[o("b-row",{attrs:{"no-gutters":""}},[o("b-col",{attrs:{md:"6"}},[o("b-card-img",{staticClass:"rounded-circle",staticStyle:{padding:"10px"},attrs:{src:e("1771")("./"+r.portada)}})],1),o("b-col",{attrs:{md:"6"}},[o("b-card-body",{attrs:{title:r.nombre}}),o("b-card-text",[t._v(t._s(r.descripcion))]),o("h3",[t._v("Bs"+t._s(r.precio))])],1)],1)],1)],1)})),0)]),o("h1",[t._v("Agranel")]),t._l(t.productoAceite2,(function(r,c){return o("div",{key:c,staticClass:"container"},[o("b-card",{staticClass:"overflow-hidden efc",staticStyle:{"max-width":"540px"},attrs:{"no-body":""}},[o("b-row",{attrs:{"no-gutters":""}},[o("b-col",{attrs:{md:"6"}},[o("b-card-img",{staticClass:"rounded-circle",staticStyle:{padding:"10px"},attrs:{src:e("1771")("./"+r.portada)}})],1),o("b-col",{attrs:{md:"6"}},[o("b-card-body",{attrs:{title:r.nombre}}),o("b-card-text",[t._v(t._s(r.descripcion))]),o("h3",[t._v("Bs"+t._s(r.precio))]),o("a",{staticClass:"btn btn-dark",attrs:{href:"#"}},[t._v("Agregar al Carrito")])],1)],1)],1)],1)}))],2)},c=[],a=(e("4de4"),e("bc3a")),n=e.n(a),i={mounted:function(){this.getProducto()},computed:{productoAceite1:function(){return this.producto.filter((function(t){return"ACEITE FINO"==t.variedad}))},productoAceite2:function(){return this.producto.filter((function(t){return"ACEITE AGRANEL"==t.variedad}))}},methods:{getProducto:function(){var t=this;n.a.get("/api/producto").then((function(r){console.log(r.data),t.producto=r.data,console.log(t.producto)})).catch((function(t){return console.log(t)}))}},data:function(){return{producto:[],fino:[{nombre:"Aceite Fino",descripcion:"900 ml",precio:15,portada:"aceite1.jpg"},{nombre:"Aceite Fino 4.5 Ltrs",descripcion:"4.5 ltrs",precio:56,portada:"aceite2.jpg"}],agranel:[{nombre:"Aceite Agranel",descripcion:"Litro",precio:9,portada:"aceite-agranel.jpg"}]}}},s=i,d=(e("a9bc"),e("2877")),u=Object(d["a"])(s,o,c,!1,null,null,null);r["default"]=u.exports}}]);