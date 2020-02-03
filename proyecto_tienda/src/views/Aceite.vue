<template>
  <div>
    <h1>Aceite Fino</h1>
    <div class="container">
      <div class="row">
        <div v-for="(f,index) of fino" :key="index" class="col-md-6">
          <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="f.portada" style="padding:10px" class="rounded-circle"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="f.nombre"></b-card-body>
                <b-card-text>{{f.descripcion}}</b-card-text>
                <h3>Bs{{f.precio}}</h3>
                <a href="#" class="btn btn-dark">Agregar al Carrito</a>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>
    </div>
    <h1>Agranel</h1>
    <div class="container" v-for="(a,index) of agranel" :key="index">
      <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img v-bind:src="a.portada" style="padding:10px" class="rounded-circle"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body v-bind:title="a.nombre"></b-card-body>
            <b-card-text>{{a.descripcion}}</b-card-text>
            <h3>Bs{{a.precio}}</h3>
            <a href="#" class="btn btn-dark">Agregar al Carrito</a>
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
      fino: [
        {
          nombre: "Aceite Fino",
          descripcion: "900 ml",
          precio: 15,
          portada:
            "https://www.ketal.com.bo/18211-home_default/aceite-fino-vegetal-girasol-900ml.jpg"
        },
        {
          nombre: "Aceite Fino 2",
          descripcion: "4.5 ltrs",
          precio: 56,
          portada:
            "https://www.ketal.com.bo/18214-home_default/aceite-fino-vegetal-c-girasol-45lt.jpg"
        }
      ],
      agranel: [
        {
          nombre: "Aceite Agranel",
          descripcion: "Litro",
          precio: 9,
          portada:
            "https://cdn.bolivia.com/sdi/2015/11/10/9c3ec748fa8346d7ba1ee2df595f00d8.jpg"
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
.main {
  box-sizing: border-box;
}
</style>