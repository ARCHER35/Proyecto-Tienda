<template>
  <div>
    <h1>Azucar</h1>
    <div class="container">
      <div class="row">
        <div v-for="(a,index) of azucar" :key="index" class="col-md-6">
          <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="a.portada" height="230px" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="a.nombre">
                  <b-card-text>{{a.descripcion}}</b-card-text>
                  <p>Bs{{a.precio}}</p>
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
      azucar: [
        {
          nombre: "Azucar Belgica",
          descripcion: "Kilo",
          precio: 14,
          portada:
            "http://2.bp.blogspot.com/-r0fOHp10020/TWBv0IXjC8I/AAAAAAAAASQ/LIEYYl9QV-w/s320/azucarbelgica.jpg"
        },
        {
          nombre: "Azucar Belgica",
          descripcion: "Kilo",
          precio: 14,
          portada:
            "https://elchacoinforma.com/wp-content/uploads/2018/10/AZ.jpg"
        }
      ],
    }
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