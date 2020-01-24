<template>
  <div>
    <h1>Fideos Famosa</h1>
    <div class="container">
      <div v-for="(f,index) of famosa" :key="index">
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body v-bind:title="f.nombre">
                <b-card-text>{{f.descripcion}}</b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </div>
    <h1>Fideos Lazzaroni</h1>
    <div class="container">
      <div v-for="(l,index) of lazzaroni" :key="index">
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body v-bind:title="l.nombre">
                <b-card-text>{{l.descripcion}}</b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </div>
    <h1>Fideos del Pais</h1>
    <div class="container">
      <div v-for="(p,index) of pais" :key="index">
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body v-bind:title="p.nombre">
                <b-card-text>{{p.descripcion}}</b-card-text>
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
      famosa: [
        {
          nombre: "Fideos Famosa",
          descripcion: "Cant",
          precio: 0,
          portada: ""
        }
      ],
      lazzaroni: [
        {
          nombre: "Fideos Lazzaroni",
          descripcion: "cant",
          precio: 0,
          portada: ""
        }
      ],
      pais: [
        {
          nombre: "Fideos del Pais",
          descripcion: "cant",
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