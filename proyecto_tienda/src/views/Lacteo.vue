<template>
  <div>
    <h1>Leche</h1>
    <div class="container">
      <div class="row">
        <div v-for="(l,index) of productoLeche" :key="index" class="col-md-6 col-sm-6 col-xs-12">
          <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="require('../assets/'+l.portada)" class="rounded-circle"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="l.nombre">
                  <b-card-text>{{l.descripcion}}</b-card-text>
                  <h3>Bs{{l.precio}}</h3>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
          <br />
        </div>
      </div>
    </div>
    <h1>Queso</h1>
    <div class="container">
      <div class="row">
        <div v-for="(q,index) of productoQueso" :key="index" class="col-md-4 col-sm-6 col-xs-12">
          <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="require('../assets/'+q.portada)" class="rounded-circle"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="q.nombre">
                  <b-card-text>{{q.descripcion}}</b-card-text>
                  <h3>Bs{{q.precio}}</h3>
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
import {mapState} from 'vuex'
import axios from "axios";
export default {
  computed: {
    ...mapState(["product"]),
    productoLeche() {
      return this.product.filter(function(p) {
        return p.variedad == "LECHE";
      });
    },
    productoQueso() {
      return this.product.filter(function(p) {
        return p.variedad == "QUESO";
      });
    }
  },
  data() {
    return {
      producto: [],
      leche: [
        {
          id: 1,
          nombre: "Leche Normal",
          descripcion: "Unidad",
          precio: 6,
          imagen: "leche1.jpg"
        },
        {
          id: 2,
          titulo: "Leche Deslactosada",
          descripcion: "Unidad",
          precio: 7,
          imagen: "leche2.png"
        }
      ],
      queso: [
        {
          id: 1,
          nombre: "Queso Rio Grande",
          descripcion: "Kilo",
          precio: 28,
          imagen: "queso.jpg"
        },
        {
          id: 2,
          nombre: "Queso Muzzarella",
          descripcion: "Kilo",
          precio: 23,
          imagen: "queso2.jpg"
        },
        {
          id: 3,
          nombre: "Quesillo",
          descripcion: "Unidad",
          precio: 5,
          imagen: "queso3.jpg"
        }
      ]
    };
  }
};
</script>

<style>
</style>