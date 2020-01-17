<template>
  <div>
    <h1>Vista Huevo</h1>
    <div class="contenedor">
      <div v-for="(h, index) of huevo" :key="index" class="card">
        <img v-bind:src="h.imagen" class="card-img-top" style="max-width: 200px;" />
        <div class="card-body">
          <h5 class="card-title text-primary">{{h.titulo}}</h5>
          <div>
            <h2 class="text-danger">Bs {{h.precio}}</h2>
          </div>
          <p class="card-text">{{h.descripcion}}</p>
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
          "Han sido diseñados para contener una amplia variedad de tamaños de huevos, y minimizar problemas de roturas ya que cuentan con nervios centrales que le otorgan mayor rigidez",
        precio: 0,
        imagen:
          "http://www.avicolacarger.com.bo/avicolacarger/wp-content/uploads/2015/03/eggs-3.png"
      },
      huevo: [
        {
          id: 2,
          titulo: "Huevo de primera",
          descripcion: "De 54 a 61 gramos",
          precio: 0,
          imagen:
            "https://paralelo32.com.ar/wp-content/uploads/2017/12/huevos.jpg"
        },
        {
          id: 3,
          titulo: "Huevo de segunda",
          descripcion: "De 47 a 54 gramos",
          precio: 0,
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