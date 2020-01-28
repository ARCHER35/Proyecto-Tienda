<template>
  <div>
    <h1>Sal</h1>
    <div class="container">
      <div class="row">
        <div v-for="(s,index) of sal" :key="index" class="col-md-4">
          <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="s.portada" style="padding:10px" height="210px" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="s.nombre">
                  <b-card-text>{{s.descripcion}}</b-card-text>
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
      sal: [
        {
          nombre: "Sal Yodada",
          descripcion: "Kilo",
          precio: 2,
          portada:
            "https://www.lostiempos.com/sites/default/files/styles/noticia_detalle/public/media_imagen/2018/8/1/sal-yodada.jpg?itok=d4dNIjUD&c=4386c42ef200fd21f50eab95adc2bfdb"
        },
        {
          nombre: "Sal Yodada",
          descripcion: "5 Kilos",
          precio: 6,
          portada:
            "http://3.bp.blogspot.com/-G4_qcprrfAY/TsU3nvJqiXI/AAAAAAAAABQ/FOzxm67Xu6U/s1600/escanear0008.jpg"
        },
        {
          nombre: "Sal Parrillera El Torrito",
          descripcion: "Unidad",
          precio: 3,
          portada:
            "https://promabol.com/wp-content/uploads/2018/09/sal2.jpg"
        },
        {
          nombre: "Sal Parrillera Alnat",
          descripcion: "Unidad",
          precio: 15,
          portada:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlmahRqLepq6sbvZVGrt1DfdVrVEzyEugzOEDkIiYKczJNeZ5m_A&s"
        }
      ],
    };
  }
};
</script>

<style>
.card {
  margin-bottom: 20px;
}
</style>