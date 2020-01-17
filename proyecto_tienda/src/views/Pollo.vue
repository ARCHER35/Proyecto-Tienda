<template>
  <div>
    <h1>Pollo Selccionado</h1>
    <div class="container">
      <b-card
        no-body
        class="overflow-hidden"
        style="max-width: 540px;"
        v-for="(pol,index) of pollo"
        :key="index"
      >
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img v-bind:src="pol.portada" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body>
              <b-card-text>
                <h3>{{pol.nombre}}</h3>
                <h3>{{pol.descripcion}}</h3>
                <h3>Bs {{pol.precio}}</h3>
                <a href="#" class="btn btn-primary">Agregar al Carrito</a>
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <h1>Pollo Trozado</h1>

    <div class="container">
      <b-card
        no-body
        class="overflow-hidden"
        style="max-width: 540px;"
        v-for="(poll,index) of pollo2"
        :key="index"
      >
        <b-row no-gutters>
          <b-col md="5">
            <b-card-img v-bind:src="poll.portada" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="7">
            <b-card-body>
              <b-card-text>
                <h1>{{poll.nombre}}</h1>
                <h3>{{poll.descripcion}}</h3>
                <h3>Bs {{poll.precio}}</h3>
                <a href="#" class="btn btn-primary">Agregar al Carrito</a>
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
      pollo: [
        {
          nombre: "Pollos Enteros",
          descripcion: "kilos",
          precio: 0
        },
        {
          nombre:"Tipos de Pollos",
          descripcion: "Kilos",
          precio: 0
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
