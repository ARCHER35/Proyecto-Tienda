<template>
  <div class="container">
    <div class="contenedor">
<b-card style="max-width: 20rem;" v-for="(h, index) of huevo" :key="index">
  <img v-bind:src="h.imagen" height="200px" width="200px">
    <b-card-text>
      <h5 class="card-title text-primary">{{h.titulo}}</h5>
            <h3 class="card-text">{{h.descripcion}}</h3>
            <h2 class="text-danger">Bs {{h.precio}}</h2>
    </b-card-text>
    <a href="#" class="btn btn-primary">Agregar al Carrito</a>
  </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      huevo: [
        {
          id: 1,
        titulo: "Maple de Huevo",
        descripcion:
          "Rolon",
        precio: 20,
        imagen:
          "http://www.avicolacarger.com.bo/avicolacarger/wp-content/uploads/2015/03/eggs-3.png"
        },
        {
          id: 2,
          titulo: "Maple de Huevo",
          descripcion: "Rolon",
          precio: 18,
          imagen:
            "https://paralelo32.com.ar/wp-content/uploads/2017/12/huevos.jpg"
        },
        {
          id: 3,
          titulo: "Maple de Huevo",
          descripcion: "Rolon",
          precio: 16,
          imagen:
            "https://www.tradeguayana.co.ve/wp-content/uploads/2019/05/carton-huevos-640x375.jpg"
        }
      ]
    };
  }
};
</script>

<style>
.contenedor{
  display: grid;
  grid-template-columns: auto auto auto;
}
.card {
  padding: 20px;
  margin-bottom: 20px;
}
</style>