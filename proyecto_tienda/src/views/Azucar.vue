<template>
  <div>
    <h1>Azucar</h1>
    <div class="container">
      <div class="row">
        <div v-for="(a,index) of productoAzucar" :key="index" class="col-md-6">
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
                <b-card-body v-bind:title="a.nombre">
                  <b-card-text>{{a.descripcion}}</b-card-text>
                  <h3>Bs{{a.precio}}</h3>
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
import { mapState } from "vuex";
import axios from "axios";
export default {
  mounted() {
    this.getProducto();
  },
  computed: {
    ...mapState(["product"]),
    productoAzucar() {
      return this.product.filter(function(p) {
        return p.variedad == "AZUCAR";
      });
    }
  },
  data() {
    return {
      producto: [],
      azucar: [
        {
          nombre: "Azucar Belgica",
          descripcion: "Kilo",
          precio: 14,
          portada: "azu1.jpg"
        },
        {
          nombre: "Azucar Belgica",
          descripcion: "Kilo",
          precio: 14,
          portada: "zu2.jpg"
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