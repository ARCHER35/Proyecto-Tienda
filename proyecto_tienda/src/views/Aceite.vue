<template>
  <div>
    <h1>Aceite Fino</h1>
    <div class="container">
      <div class="row">
        <div v-for="(f,index) of productoAceite1" :key="index" class="col-md-6">
          <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img
                  v-bind:src="require('../assets/'+f.portada)"
                  style="padding:10px"
                  class="rounded-circle"
                ></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="f.nombre"></b-card-body>
                <b-card-text>{{f.descripcion}}</b-card-text>
                <h3>Bs{{f.precio}}</h3>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>
    </div>
    <h1>Agranel</h1>
    <div class="container" v-for="(a,index) of productoAceite2" :key="index">
      <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img
              v-bind:src="require('../assets/'+a.portada)"
              style="padding:10px"
              class="rounded-circle"
            ></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body v-bind:title="a.nombre"></b-card-body>
            <b-card-text>{{a.descripcion}}</b-card-text>
            <h3>Bs{{a.precio}}</h3>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
export default {
  computed: {
    ...mapState(["product"]),
    productoAceite1() {
      return this.product.filter(function(p) {
        return p.variedad == "ACEITE FINO";
      });
    },
    productoAceite2() {
      return this.product.filter(function(p) {
        return p.variedad == "ACEITE AGRANEL";
      });
    }
  },
  data() {
    return {
      producto: [],
      fino: [
        {
          nombre: "Aceite Fino",
          descripcion: "900 ml",
          precio: 15,
          portada: "aceite1.jpg"
        },
        {
          nombre: "Aceite Fino 4.5 Ltrs",
          descripcion: "4.5 ltrs",
          precio: 56,
          portada: "aceite2.jpg"
        }
      ],
      agranel: [
        {
          nombre: "Aceite Agranel",
          descripcion: "Litro",
          precio: 9,
          portada: "aceite-agranel.jpg"
        }
      ]
    };
  }
};
</script>

<style>
.container {
  display: grid;
  grid-template-columns: auto auto;
}
.card {
  margin-bottom: 20px;
}
.main {
  box-sizing: border-box;
}
</style>