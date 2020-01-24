<template>
  <div>
    <h1>Aderezos</h1>
    <div class="container">
      <div class="row">
        <div v-for="(a,index) of aderesos" :key="index" class="col-md-4">
          <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="a.nombre">
                  <b-card-text>{{a.descripcion}}</b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>
    </div>

    <h1>Otros</h1>
    <div class="container">
      <div v-for="(o,index) of otros" :key="index">
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body v-bind:title="o.nombre">
                <b-card-text>{{o.descripcion}}</b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aderesos: [
        {
          nombre: "Mayonesa",
          descripcion: "Cant",
          precio: 0,
          portada: ""
        },
        {
          nombre: "Ketchup",
          descripcion: "Cant",
          precio: 0,
          portada: ""
        },
        {
          nombre: "Mostaza",
          descripcion: "Cant",
          precio: 0,
          portada: ""
        }
      ],
      otros: [
        {
          nombre: "Extracto de Tomato",
          descripcion: "Cant",
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