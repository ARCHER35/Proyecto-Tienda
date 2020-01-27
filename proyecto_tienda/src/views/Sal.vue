<template>
  <div>
    <h1>Sal</h1>
    <div class="container">
      <div class="row">
        <div v-for="(s,index) of sal" :key="index" class="col-md-4">
          <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="s.nombre">
                  <b-card-text>{{s.descripcion}}</b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sal: [
        {
          nombre: "Sal Yodada",
          descripcion: "Kilo",
          precio: 2,
          portada:
            "https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre: "Sal Yodada",
          descripcion: "5 Kilos",
          precio: 6,
          portada:
            "https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre: "Sal Parrillera El Torrito",
          descripcion: "Unidad",
          precio: 3,
          portada:
            "https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre: "Sal Parrillera Alnat",
          descripcion: "Unidad",
          precio: 15,
          portada:
            "https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        }
      ],
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
</style>