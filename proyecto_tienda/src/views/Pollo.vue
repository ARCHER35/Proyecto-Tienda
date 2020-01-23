<template>
  <div>
    <h1>Pollo Selccionado</h1>
    <div class="container">
      <div class="row">
        <div v-for="(p,index) of pollo" :key="index" class="col-md-6">
          <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="p.nombre">
                  <b-card-text>{{p.descripcion}}</b-card-text>
                  <b-button href="#" variant="primary">Agregar al Carrito</b-button>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>
    </div>
    <h1>Pollo Trozado</h1>
    <div class="container">
      <div class="row">
        <div v-for="(p2,index) of pollo2" :key="index" class="col-md-4">
          <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="p2.nombre">
                  <b-card-text>{{p2.descripcion}}</b-card-text>
                  <b-button href="#" variant="primary">Agregar al Carrito</b-button>
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
      pollo: [
        {
          nombre: "Pollos Enteros",
          descripcion: "kilos",
          precio: 0,
          portada: ""
        },
        {
          nombre: "Tipos de Pollos",
          descripcion: "Kilos",
          precio: 0,
          portada: ""
        }
      ],
      pollo2: [
        {
          nombre: "Alitas",
          descripcion: "kilos",
          precio: 0,
          portada: ""
        },
        {
          nombre: "Piernas",
          descripcion: "kilos",
          precio: 0,
          portada: ""
        },
        {
          nombre: "Pecho",
          descripcion: "kilos",
          precio: 0,
          portada: ""
        },
        {
          nombre: "Menudencia",
          descripcion: "kilos",
          precio: 0,
          portada: ""
        },
        {
          nombre: "Carne Molida de Pollo",
          descripcion: "kilos",
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
