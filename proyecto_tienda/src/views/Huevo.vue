<template>
  <div>
    <h1>Huevo</h1>
    <div class="container">
      <div class="row">
        <div v-for="(h,index) of huevo" :key="index" class="col-md-4">
          <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="h.imagen" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="h.titulo">
                  <b-card-text>{{h.descripcion}}</b-card-text>
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
.contenedor {
  display: grid;
  grid-template-columns: auto auto auto;
}
.card {
  padding: 20px;
  margin-bottom: 20px;
}
</style>