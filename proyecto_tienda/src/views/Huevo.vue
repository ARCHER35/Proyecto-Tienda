<template>
  <div>
    <h1>Vista Huevo</h1>
    <div class="contenedor">
      <div v-for="(h, index) of huevo" :key="index" class="card">
        <img v-bind:src="h.imagen" class="card-img-top" style="max-width: 200px;" />
        <div class="card-body">
          <h5 class="card-title text-primary">{{h.titulo}}</h5>
          <p class="card-text">{{h.descripcion}}</p>
          <h2 class="text-danger">Bs {{h.precio}}</h2>
        </div>
        <div class="card-footer">
          <button class="btn btn-warning text-light btn-lg active">Agregar a tu carro</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Maple: {
        id: 1,
        titulo: "Maple de Huevo",
        descripcion:
          "Rolon",
        precio: 20,
        imagen:
          "http://www.avicolacarger.com.bo/avicolacarger/wp-content/uploads/2015/03/eggs-3.png"
      },
      huevo: [
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
  grid-template-columns: auto auto;
}
</style>