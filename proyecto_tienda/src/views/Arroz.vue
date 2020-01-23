<template>
  <div>
    <h1>Arroz</h1>
    <div class="container">
      <b-card no-body class="overflow-hidden" style="max-width: 500px; padding:15px; margin-bottom: 20px" v-for="(ar,index) of arroz" :Key="index">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img v-bind:src="ar.portada" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body>
              <b-card-text><h3>{{ar.nombre}}</h3></b-card-text>
              <p>{{ar.descripcion}}</p>
              <p>Bs{{ar.precio}}</p>
              <a href="#" class="btn btn-primary">Agregar al Carrito</a>
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
    return{
      arroz: [
        {
          nombre:"Arroz Frano de Oro",
          descripcion:"Cuartilla",
          precio:20,
          portada:"https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        }
      ],
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