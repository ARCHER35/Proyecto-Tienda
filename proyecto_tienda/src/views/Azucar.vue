<template>
  <div>
    <h1>Azucar</h1>
    <div class="container">
      <div class="row">
        <div v-for="(a,index) of azucar" :key="index" class="col-md-6">
          <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="a.portada" class="rounded-0"></b-card-img>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      azucar: [
        {
          nombre: "Azucar",
          descripcion: "Cant",
          precio: 0,
          portada:
            "https://www.midespensa.com.bo/wp-content/uploads/2019/06/AZUCAR-GUABIRA-5K.png"
        },
        {
          nombre: "Azucar Morena",
          descripcion: "cant",
          precio: 0,
          portada:
            "https://www.midespensa.com.bo/wp-content/uploads/2019/06/AZUCAR-MORENA.png"
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