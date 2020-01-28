<template>
  <div>
    <h1>Pollo Selccionado</h1>
    <div class="container">
      <div class="row">
        <div v-for="(p,index) of pollo" :key="index" class="col-md-6 col-xs-12">
          <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="p.imagen" class="rounded-circle"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="p.titulo">
                  <b-card-text>{{p.descripcion}}</b-card-text>
                  <p>Bs{{p.precio}}</p>
                  <a href="#" class="btn btn-dark">Agregar al Carrito</a>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
          <br />
        </div>
      </div>
    </div>
    <h1>Pollo Trozado</h1>
    <div class="container">
      <div class="row">
        <div v-for="(p2,index) of pollo2" :key="index" class="col-md-4 col-sm-6 col-xs-12">
          <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="p2.imagen" class="rounded-circle"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="p2.titulo">
                  <b-card-text>{{p2.descripcion}}</b-card-text>
                  <p>Bs{{p2.precio}}</p>
                  <a href="#" class="btn btn-dark">Agregar al Carrito</a>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pollo: [
        {
          nombre: "Pollos Enteros",
          descripcion: "kilo",
          precio: 15,
          portada:
            "https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre: "Tipos de Pollos",
          descripcion: "Kilo",
          precio: 15,
          portada:
            "https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        }
      ],
      pollo2: [
        {
          nombre: "Alitas",
          descripcion: "kilo",
          precio: 18,
          portada:
            "https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre: "Piernas",
          descripcion: "kilo",
          precio: 18,
          portada:
            "https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre: "Pecho",
          descripcion: "kilo",
          precio: 18,
          portada:
            "https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre: "Menudencia",
          descripcion: "kilo",
          precio: 7,
          portada:
            "https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre: "Carne Molida de Pollo",
          descripcion: "kilo",
          precio: 22,
          portada:
            "https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        }
      ]
    };
  }
};
</script>

<style>
.efc:hover {
  background: #a0e4ff;
  color: #1d272b;
  transition: all 0.55s;
  transform: translateY(-15px);
  box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
}
</style>
