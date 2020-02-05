<template>
  <div>
    <h1>Prueba</h1>
    <div v-for="(p,index) of prueba" :key="index">
      <h2>{{p.nombre}}</h2>
      <p>{{p.precio}}</p>}
      <button @click="deleteCarrito(p)">eliminar</button>
    </div>
    <div>
      <h3 @click="total()">{{monto}}</h3>
    </div>
    <pre>{{prueba}}</pre>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      prueba: [],
      monto: 0
    };
  },
  mounted() {
    this.getCarrito();
  },
  methods: {
    total(){
        for (let x of this.prueba) {
            if (x) {
                this.monto=this.monto+x.precio
            }
        }
    },
    getCarrito() {
      axios
        .get("http://localhost:3000/carrito")
        .then(res => {
          this.prueba = res.data;
        })
        .cath(error => {
          console.error(error);
        });
    },
    deleteCarrito(p){
        let url = "http://localhost:3000/carrito/" + p.id;
        axios.delete(url).then(res=>{
            this.getCarrito();
        }).catch(error=>{console.log(error)
        })
    }
  }
};
</script>

<style>
</style>