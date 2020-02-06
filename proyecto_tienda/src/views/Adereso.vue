<template>
  <div>
    <h1>Mayonesa</h1>
    <div class="container">
      <div class="row">
        <div v-for="(mayo,index) of productoMayonesa" :key="index" class="col-md-6">
          <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img
                  v-bind:src="require('../assets/'+mayo.portada)"
                  height="230px"
                  style="padding:10px"
                  class="rounded-circle"
                ></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="mayo.nombre"></b-card-body>
                <b-card-text>{{mayo.descripcion}}</b-card-text>
                <h3>Bs{{mayo.precio}}</h3>
                <a href="#" class="btn btn-dark">Agregar al Carrito</a>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>
    </div>
    <h1>Ketchup</h1>
    <div class="container">
      <div class="row">
        <div v-for="(a,index) of productoKetchup" :key="index" class="col-md-6">
          <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img
                  v-bind:src="require('../assets/'+a.portada)"
                  height="230px"
                  style="padding:10px"
                  class="rounded-circle"
                ></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="a.nombre"></b-card-body>
                <b-card-text>{{a.descripcion}}</b-card-text>
                <h3>Bs{{a.precio}}</h3>
                <a href="#" class="btn btn-dark">Agregar al Carrito</a>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>
    </div>
    <h1>Mostaza</h1>
    <div class="container">
      <div class="row">
        <div v-for="(moz,index) of productoMostaza" :key="index" class="col-md-6">
          <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img
                  v-bind:src="require('../assets/'+moz.portada)"
                  height="230px"
                  style="padding:10px"
                  class="rounded-circle"
                ></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="moz.nombre"></b-card-body>
                <b-card-text>{{moz.descripcion}}</b-card-text>
                <h3>Bs{{moz.precio}}</h3>
                <a href="#" class="btn btn-dark">Agregar al Carrito</a>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>
    </div>

    <h1>Otros</h1>
    <center>
      <div class="container">
        <div v-for="(o,index) of productoOtros" :key="index">
          <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img
                  v-bind:src="require('../assets/'+o.portada)"
                  height="230px"
                  style="padding:10px"
                  class="rounded-circle"
                ></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="o.nombre"></b-card-body>
                <b-card-text>{{o.descripcion}}</b-card-text>
                <h3>Bs{{o.precio}}</h3>
                <a href="#" class="btn btn-dark">Agregar al Carrito</a>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>
    </center>
  </div>
</template>

<script>
import axios from "axios"
export default {
  mounted() {
    this.getProducto();
  },
  computed: {
    productoMayonesa() {
      return this.producto.filter(function(p) {
        return p.variedad == "MAYONESA";
      });
    },
    productoKetchup() {
      return this.producto.filter(function(p) {
        return p.variedad == "KETCHUP";
      });
    },
    productoMostaza() {
      return this.producto.filter(function(p) {
        return p.variedad == "MOSTAZA";
      });
    },
    productoOtros() {
      return this.producto.filter(function(p) {
        return p.variedad == "OTROS ADEREZOS";
      });
    }
  },
  methods: {
    getProducto() {
      axios
        .get("http://localhost:3500/api/producto")
        .then(respuesta => {
          console.log(respuesta.data);
          this.producto = respuesta.data;
          console.log(this.producto);
        })
        .catch(error => console.log(error));
    }
  },
  data() {
    return {
      producto:[],
      ketchup: [
        {
          nombre: "Ketchup Pequeño",
          descripcion: "50cm",
          precio: 2,
          portada: "ketchup1.jpg"
        },
        {
          nombre: "Ketchup Mediano",
          descripcion: "230cm",
          precio: 7,
          portada: "ketchup2.jpg"
        },
        {
          nombre: "Ketchup 500gr",
          descripcion: "500gr",
          precio: 12,
          portada: "ketchup3.jpg"
        },
        {
          nombre: "Ketchup Grande",
          descripcion: "1 Kilo",
          precio: 28,
          portada: "ketchup4.jpg"
        }
      ],
      mayonesa: [
        {
          nombre: "Mayonesa Pequeña",
          descripcion: "50cm",
          precio: 2,
          portada: "mayo1.jpg"
        },
        {
          nombre: "Mayonesa Mediana",
          descripcion: "380cm",
          precio: 7,
          portada: "mayo2.png"
        },
        {
          nombre: "Mayonesa 500gr",
          descripcion: "500 gr",
          precio: 12,
          portada: "mayo3.jpg"
        },
        {
          nombre: "Mayonesa Grande",
          descripcion: "1 Kilo",
          precio: 28,
          portada: "mayo4.jpg"
        }
      ],
      mostaza: [
        {
          nombre: "Mostaza Pequeña",
          descripcion: "50cm",
          precio: 2,
          portada: "mos1.jpg"
        },
        {
          nombre: "Mostaza Mediana",
          descripcion: "200cm",
          precio: 7,
          portada: "mos2.png"
        },
        {
          nombre: "Mostaza 500gr",
          descripcion: "500 gr",
          precio: 12,
          portada: "mos3.jpg"
        },
        {
          nombre: "Mostaza Grande",
          descripcion: "1 Kilo",
          precio: 28,
          portada: "mos4.jpg"
        }
      ],
      otros: [
        {
          nombre: "Extracto de Tomato Cajamar",
          descripcion: "Unidad",
          precio: 5,
          portada: "cajamar.png"
        }
      ]
    };
  }
};
</script>

<style>
.card {
  margin-bottom: 20px;
}
</style>