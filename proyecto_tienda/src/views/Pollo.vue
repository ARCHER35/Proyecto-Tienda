<template>
  <div>
    <h1>Pollo Selccionado</h1>
    <div class="container">
      <div class="row">
        <div v-for="(p,index) of productoPollo" :key="index" class="col-md-6 col-xs-12">
          <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="require('../assets/'+p.portada)" height="250px" class="rounded-circle"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="p.nombre">
                  <b-card-text>{{p.descripcion}}</b-card-text>
                  <h3>Bs{{p.precio}}</h3>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
          <br />
        </div>
      </div>
    </div>
    <h1>Pollo Trozado</h1>
    <div class="container">
      <div class="row">
        <div v-for="(p2,index) of productoPollo2" :key="index" class="col-md-6 col-sm-6 col-xs-12">
          <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="require('../assets/'+p2.portada)" height="250px" class="rounded-circle"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body class="col-sm" v-bind:title="p2.nombre">
                  <b-card-text>{{p2.descripcion}}</b-card-text>
                  <h3>Bs{{p2.precio}}</h3>
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
import { mapState } from 'vuex'
import axios from "axios";
export default {
  mounted() {
    this.getProducto();
  },
  computed: {
    ...mapState(['product']),
    productoPollo() {
      return this.product.filter(function(p) {
        return p.variedad == "POLLO SELECCIONADO";
      });
    },
    productoPollo2() {
      return this.product.filter(function(p) {
        return p.variedad == "POLLO TROZADO";
      });
    }
  },
  data() {
    return {
      producto: [],
      pollo: [
        {
          nombre: "Pollos Enteros",
          descripcion: "kilo",
          precio: 15,
          portada: "pollo1.jpg"
        },
        {
          nombre: "Pollo",
          descripcion: "Kilo",
          precio: 15,
          portada: "pollo2.jpg"
        }
      ],
      pollo2: [
        {
          nombre: "Alitas",
          descripcion: "kilo",
          precio: 18,
          portada: "pollo3.jpg"
        },
        {
          nombre: "Piernas",
          descripcion: "kilo",
          precio: 18,
          portada: "pollo4.jpg"
        },
        {
          nombre: "Pecho",
          descripcion: "kilo",
          precio: 18,
          portada: "pollo5.jpg"
        },
        {
          nombre: "Carne Molida de Pollo",
          descripcion: "kilo",
          precio: 22,
          portada: "pollo6.jpg"
        },
        {
          nombre: "Filete de Pollo",
          descripcion: "kilo",
          precio: 20,
          portada: "pollo7.jpg"
        },
        {
          nombre: "Menudencia",
          descripcion: "kilo",
          precio: 7,
          portada: "pollo8.png"
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
