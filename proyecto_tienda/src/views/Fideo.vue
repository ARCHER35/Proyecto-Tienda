<template>
  <div>
    <h1>Fideos Famosa</h1>
    <div class="container">
      <div class="row">
        <div v-for="(f,index) of famosa" :key="index" class="col-md-4">
          <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="f.nombre">
                  <b-card-text>{{f.descripcion}}</b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>
    </div>
    <h1>Fideos Lazzaroni</h1>
    <div class="container">
      <div class="row">
        <div v-for="(l,index) of lazzaroni" :key="index" class="col-md-6">
          <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="l.nombre">
                  <b-card-text>{{l.descripcion}}</b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>
    </div>
    <h1>Fideos del Pais</h1>
    <div class="container">
      <div class="row">
        <div v-for="(p,index) of pais" :key="index" class="col-md-6">
          <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="p.nombre">
                  <b-card-text>{{p.descripcion}}</b-card-text>
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
      famosa: [
        {
          nombre: "Fideos Famosa",
          descripcion: "Cuarilla",
          precio: 20,
          portada:
            "https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre: "Fideo 1",
          descripcion: "Unidad",
          precio: 4,
          portada:
            "https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre: "Fideo 2",
          descripcion: "Unidad",
          precio: 4,
          portada:
            "https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        }
      ],
      lazzaroni: [
        {
          nombre: "Espageti Lazzaroni",
          descripcion: "3 Unidades",
          precio: 10,
          portada:
            "https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre: "Fideo 1",
          descripcion: "Unidad",
          precio: 4,
          portada:
            "https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        }
      ],
      pais: [
        {
          nombre: "Fideos del Pais",
          descripcion: "Libra",
          precio: 5,
          portada:
            "https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre: "Fideo 1",
          descripcion: "Libra",
          precio: 5,
          portada:
            "https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
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
</style>