<template>
  <div>
    <h1>Arroz</h1>
    <div class="container">
      <div class="row">
        <div v-for="(a,index) of arroz" :key="index" class="col-md-6">
          <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="a.portada" height="250px" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="a.nombre">
                  <b-card-text>{{a.descripcion}}</b-card-text>
                  <h3>{{a.precio}}</h3>
                  <a href="#" class="btn btn-primary">Agregar al Carrito</a>
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
      arroz: [
        {
          nombre:"Arroz Grano de Oro",
          descripcion:"Cuartilla",
          precio:20,
          portada:"https://scontent.fvvi1-2.fna.fbcdn.net/v/t1.0-9/19731867_482622442090287_612681557740600857_n.png?_nc_cat=106&_nc_ohc=9eOzNsaBR8EAX9sk0Lh&_nc_ht=scontent.fvvi1-2.fna&oh=613ab41f0b65b71c00c5058b4e54d91a&oe=5EC4E2AD"
        },
        {
          nombre:"Arroz Grano de Oro",
          descripcion:"Cuartilla",
          precio:20,
          portada:"http://lapatriaenlinea.com/fotos/05_2013/142972_1_05.jpg"
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