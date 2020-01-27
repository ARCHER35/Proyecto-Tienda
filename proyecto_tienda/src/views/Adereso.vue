<template>
  <div>
    <h1>Aderezos</h1>
    <div class="container">
      <div class="row">
        <div v-for="(a,index) of ketchup" :key="index" class="col-md-4">
          <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="a.nombre">
                  <b-card-text>{{a.descripcion}}</b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>
    </div>

    <h1>Otros</h1>
    <div class="container">
      <div v-for="(o,index) of otros" :key="index">
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body v-bind:title="o.nombre">
                <b-card-text>{{o.descripcion}}</b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ketchup: [
        {
          nombre:"Ketchup Pequeño",
          descripcion:"50cm",
          precio:2,
          portada:"https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre:"Ketchup Mediano",
          descripcion:"230cm",
          precio:7,
          portada:"https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre:"Ketchup Grande",
          descripcion:"1 Kilo",
          precio:28,
          portada:"https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        }
      ],
      mayonesa: [
        {
          nombre:"Mayonesa Pequeña",
          descripcion:"50cm",
          precio:2,
          portada:"https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre:"Mayonesa Mediana",
          descripcion:"230cm",
          precio:7,
          portada:"https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre:"Mayonesa Grande",
          descripcion:"1 Kilo",
          precio:28,
          portada:"https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        }
      ],
      mostaza: [
        {
          nombre:"Mostaza Pequeña",
          descripcion:"50cm",
          precio:2,
          portada:"https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre:"Mostaza Mediana", 
          descripcion:"230cm",
          precio:7,
          portada:"https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre:"Mostaza Grande",
          descripcion:"1 Kilo",
          precio:28,
          portada:"https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        }
      ],
      otros: [
        {
          nombre:"Extracto de Tomato Cajamar",
          descripcion:"Unidad",
          precio:5,
          portada:"https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
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