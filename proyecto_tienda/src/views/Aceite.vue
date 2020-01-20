<template>
  <div>
    <h1>Aceites</h1>
    <div class="container">
      <h1 align="left">Variedad de Aceites Fino</h1>
    </div>
    <div class="container">
      <b-card
        no-body
        class="overflow-hidden"
        style="max-width: 500px; padding:15px; margin-bottom: 20px"
        v-for="(acei,index) of aceite"
        :Key="index"
      >
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img v-bind:src="acei.portada" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body>
              <b-card-text>
                <h3>{{acei.nombre}}</h3>
              </b-card-text>
              <p>{{acei.descripcion}}</p>
              <p>Bs{{acei.precio}}</p>
              <a href="#" class="btn btn-primary">Agregar al Carrito</a>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <div class="container">
      <h1 align="left">Aceite Agranel</h1>
    </div>
    <div class="container">
      <b-card
        no-body
        class="overflow-hidden"
        style="max-width: 500px; padding:15px; margin-bottom: 20px"
        v-for="(agra,index) of agranel"
        :Key="index"
      >
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img v-bind:src="agra.portada" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body>
              <b-card-text>
                <h3>{{agra.nombre}}</h3>
              </b-card-text>
              <p>{{agra.descripcion}}</p>
              <p>Bs{{agra.precio}}</p>
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
      aceite: [
        {
          nombre: "Aceite Fino",
          descripcion: "Ltrs",
          precio: 0,
          portada: ""
        },
        {
          nombre: "Aceite Fino 2",
          descripcion: "Ltrs",
          precio: 0,
          portada: ""
        }
      ],
      agranel: [
        {
          nombre: "Aceite Agranel",
          descripcion: "Ltrs",
          precio: 0,
          portada: ""
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