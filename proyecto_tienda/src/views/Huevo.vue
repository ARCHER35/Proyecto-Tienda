<template>
  <div>
    <h1>Huevo</h1>
    <div class="container">
      <div class="row">
        <div v-for="(h,index) of productoHuevo" :key="index" class="col-md-4">
          <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="7">
                <b-card-img v-bind:src="require('../assets/'+h.portada)" class="rounded-circle"></b-card-img>
              </b-col>
              <b-col md="5">
                <b-card-body v-bind:title="h.nombre">
                  <b-card-text>{{h.descripcion}}</b-card-text>
                  <h3>Bs {{h.precio}}</h3>
                  <button class="btn btn-dark">Agregar</button>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  mounted() {
    this.getProducto();
  },
  computed: {
    productoHuevo() {
      return this.producto.filter(function(p) {
        return p.variedad == "HUEVO";
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
      producto: [],
      huevo: [
        {
          id_huevo: 1,
          nombre: "Maple de Huevo",
          descripcion: "Rolon",
          precio: 20,
          portada: "hue2.jpg"
        },
        {
          id_huevo: 2,
          nombre: "Maple de Huevo",
          descripcion: "Rolon",
          precio: 18,
          portada: "hue3.jpg"
        },
        {
          id_huevo: 3,
          nombre: "Maple de Huevo",
          descripcion: "Rolon",
          precio: 16,
          portada: "hue1.png"
        }
      ]
    };
  }
};
</script>

<style>
.efc:hover {
  background: #a0e4ff;
  color: #1d272b;
  transition: all 0.55s;
  transform: translateY(-15px);
  box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
}
</style>