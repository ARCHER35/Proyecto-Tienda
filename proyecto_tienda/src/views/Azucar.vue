<template>
  <div>
    <h1>Azucar</h1>
    <div class="container">
      <b-card no-body class="overflow-hidden" style="max-width: 500px; padding:15px; margin-bottom: 20px" v-for="(azu,index) of azucar" :Key="index">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img v-bind:src="azu.portada" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body>
              <b-card-text><h3>{{azu.nombre}}</h3></b-card-text>
              <p>{{azu.descripcion}}</p>
              <p>Bs{{azu.precio}}</p>
              <a href="#" class="btn btn-primary">Agregar al Carrito</a>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <h1>Azucar Morena</h1>
    <div class="container">
      <b-card no-body class="overflow-hidden" style="max-width: 500px; padding:15px; margin-bottom: 20px" v-for="(more,index) of morena" :Key="index">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img v-bind:src="more.portada" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body>
              <b-card-text><h3>{{more.nombre}}</h3></b-card-text>
              <p>{{more.descripcion}}</p>
              <p>Bs{{more.precio}}</p>
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
      azucar: [
        {
          nombre:"Azucar",
          descripcion:"Cant",
          precio:0,
          portada:""
        }
      ],
      morena:[
        {
          nombre:"Azucar Morena",
          descripcion:"cant",
          precio:0,
          portada:""
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