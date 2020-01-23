<template>
  <div>
    <h1>Embutidos</h1>
    <div class="container">
  <b-card no-body class="overflow-hidden" style="max-width: 540px;" v-for="(cho,index) of chorizo" :key="index">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img v-bind:src="cho.portada" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body>
          <b-card-text>
            <h1>{{cho.nombre}}</h1>
            <h3>{{cho.descripcion}}</h3>
            <h3>{{cho.precio}}</h3>
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</div>
<h1>Mortadela</h1>
<div class="container">
  <b-card no-body class="overflow-hidden" style="max-width: 540px;" v-for="(mort,index) of mortadela" :key="index">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img v-bind:src="mort.portada" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body>
          <b-card-text>
            <h1>{{mort.nombre}}</h1>
            <h3>{{mort.descripcion}}</h3>
            <h3>{{mort.precio}}</h3>
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</div>
<h1>Pastas</h1>
<div class="container">
  <b-card no-body class="overflow-hidden" style="max-width: 540px;" v-for="(pas,index) of pasta" :key="index">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img v-bind:src="pas.portada" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body>
          <b-card-text>
            <h1>{{pas.nombre}}</h1>
            <h3>{{pas.descripcion}}</h3>
            <h3>{{pas.precio}}</h3>
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chorizo: [
        {
          nombre:"Chorizo Sofia",
          descripcion:"Paquete",
          precio:0,
          portada:"https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre:"Chorizo Sofia Agranel",
          descripcion:"Kilo",
          precio:0,
          portada:"https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre:"Chorizo Agranel",
          descripcion:"Kilo",
          precio:0,
          portada:"https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre:"Chorizo Parrillero",
          descripcion:"Kilo",
          precio:0,
          portada:"https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        }
      ],
      mortadela: [
        {
          nombre:"Mortadela Sofia",
          descripcion:"Paquete",
          precio:0,
          portada:"https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre:"Mortadela Sofia",
          descripcion:"Kilo",
          precio:0,
          portada:"https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre:"Mortadela Maxi",
          descripcion:"cant",
          precio:0,
          portada:"https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        }
      ],
      pasta: [
        {
          nombre:"Pate de Pollo",
          descripcion:"200g",
          precio:0,
          portada:"https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre:"pasta",
          descripcion:"cant",
          precio:0,
          portada:"https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        }
      ]
    }
  }
}
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