<template>
  <div>
    <h1>Sal</h1>
    <div class="container">
      <div class="row">
        <div v-for="(s,index) of productoSal" :key="index" class="col-md-6">
          <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img
                  v-bind:src="require('../assets/'+s.portada)"
                  style="padding:10px"
                  height="210px"
                  class="rounded-circle"
                ></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="s.nombre">
                  <b-card-text>{{s.descripcion}}</b-card-text>
                  <h3>Bs{{s.precio}}</h3>
                  <a href="#" class="btn btn-dark">Agregar al Carrito</a>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  mounted() {
    this.getProducto();
  },
  computed: {
    productoSal() {
      return this.producto.filter(function(p) {
        return p.variedad == "SAL";
      });
    },
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
      sal: [
        {
          nombre: "Sal Yodada",
          descripcion: "Kilo",
          precio: 2,
          portada: "sal1.jpg"
        },
        {
          nombre: "Sal Yodada",
          descripcion: "5 Kilos",
          precio: 6,
          portada: "sal5k.jpg"
        },
        {
          nombre: "Sal Parrillera El Torrito",
          descripcion: "Unidad",
          precio: 3,
          portada: "torito.jpg"
        },
        {
          nombre: "Sal Parrillera Alnat",
          descripcion: "Unidad",
          precio: 15,
          portada: "alnat.jpg"
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