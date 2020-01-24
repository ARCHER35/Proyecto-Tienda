<template>
  <div>
    <h1>Aceites</h1>
    <div class="container">
      <div class="row">
        <div v-for="(f,index) of fino" :key="index" class="col-md-6">
          <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body title="Horizontal Card">
                  <b-card-text>
                    {{f.descripcion}}
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>
    </div>
    <h1>Agranel</h1>
    <div class="container" v-for="(a,index) of agranel" :key="index">
      <b-card no-body class="overflow-hidden" style="max-width: 540px;">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body v-bind:title="a.nombre">
              <b-card-text>
                {{a.descripcion}}
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
      fino: [
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
.main {
  box-sizing: border-box;
}
</style>