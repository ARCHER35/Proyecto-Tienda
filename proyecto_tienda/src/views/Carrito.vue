<template>
  <div>
    <div>
      <h3>Carrito</h3>
      <div v-for="(c,index) of carrito" :key="index" class="col-md-4">
        <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col md="7">
              <b-card-img v-bind:src="c.imagen" class="rounded-circle"></b-card-img>
            </b-col>
            <b-col md="5">
              <b-card-body v-bind:title="c.titulo">
                <b-card-text>{{c.descripcion}}</b-card-text>
                <h3>Bs {{c.precio}}</h3>
                <button @click="eliminar(c)">Eliminar del carrito</button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
        <br />
      </div>
    </div>
    <div>
      <h3>Total {{total}} {{monto}}</h3>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  computed: {
    total() {
      for (let x of this.carrito) {
        this.monto = x.precio
      }
    }
  },
  data() {
    return {
      carrito: [],
      monto: 0
    };
  },
  mounted() {
    this.getCarrito();
  },
  methods: {
    total2() {
      for (let x of this.carrito) {
        this.monto = this.monto + x.precio;
        return this.monto;
        console.log(this.monto);
      }
    },
    async getCarrito() {
      axios
        .get("http://localhost:3000/motos")
        .then(respuesta => {
          console.log(respuesta.data);
          this.carrito = respuesta.data;
          console.log(this.carrito);
        })
        .catch(error => console.log(error));
    },
    async deleteCarrito(id) {
      try {
        const res = await axios.delete("http://localhost:3000/motos/" + id);
        const index = this.carrito.findIndex(T => T.id === res.data.id);
        this.carrito.splice(index, 1);
        this.getCarrito();
      } catch (error) {
        console.log(error.res);
      }
    },
    eliminar(c) {
      let url = "http://localhost:3000/motos/" + c.id;
      axios
        .delete(url)
        .then(response => {
          this.getCarrito();
          return this.monto = this.monto - response.precio
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

<style>
</style>