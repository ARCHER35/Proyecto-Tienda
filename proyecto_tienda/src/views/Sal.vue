<template>
  <div>
      <h1>Sal Yodada</h1>
      <div class="container">
      <b-card
        no-body
        class="overflow-hidden"
        style="max-width: 500px; padding:15px; margin-bottom: 20px"
        v-for="(sal1,index) of sal1"
        :Key="index"
      >
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img v-bind:src="sal1.portada" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body>
              <b-card-text>
                <h3>{{sal1.nombre}}</h3>
              </b-card-text>
              <p>{{sal1.descripcion}}</p>
              <p>Bs{{sal1.precio}}</p>
              <a href="#" class="btn btn-primary">Agregar al Carrito</a>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <h1>Sal Fina</h1>
    <div class="container">
      <b-card
        no-body
        class="overflow-hidden"
        style="max-width: 500px; padding:15px; margin-bottom: 20px"
        v-for="(sal2,index) of sal2"
        :Key="index"
      >
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img v-bind:src="sal2.portada" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body>
              <b-card-text>
                <h3>{{sal2.nombre}}</h3>
              </b-card-text>
              <p>{{sal2.descripcion}}</p>
              <p>Bs{{sal2.precio}}</p>
              <a href="#" class="btn btn-primary">Agregar al Carrito</a>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <div class="container">
      <b-card
        no-body
        class="overflow-hidden"
        style="max-width: 500px; padding:15px; margin-bottom: 20px"
        v-for="(sal3,index) of sal3"
        :Key="index"
      >
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img v-bind:src="sal3.portada" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body>
              <b-card-text>
                <h3>{{sal3.nombre}}</h3>
              </b-card-text>
              <p>{{sal3.descripcion}}</p>
              <p>Bs{{sal3.precio}}</p>
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
    return {
      sal1: [
        {
          nombre:"Sal Yodada",
          descripcion:"Cant",
          precio:0,
          portada:""
        }
      ],
      sal2: [
        {
          nombre:"Sal Fina",
          descripcion:"Cant",
          precio:0,
          portada:""
        }
      ],
      sal3: [
        {
          nombre:"Sal Parrillera",
          descripcion:"Cant",
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