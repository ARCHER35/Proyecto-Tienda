<template>
  <div>
    <h1>Leche Pil</h1>
    <div class="container">
      <div class="row">
        <div v-for="(l,index) of leche" :key="index" class="col-md-6 col-sm-6 col-xs-12">
          <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="l.imagen" class="rounded-circle"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="l.titulo">
                  <b-card-text>{{l.descripcion}}</b-card-text>
                  <p>Bs{{l.precio}}</p>
                  <a href="#" class="btn btn-dark">Agregar al Carrito</a>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
          <br />
        </div>
      </div>
    </div>
    <h1>Queso</h1>
    <div class="container">
      <div class="row">
        <div v-for="(q,index) of queso" :key="index" class="col-md-4 col-sm-6 col-xs-12">
          <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="q.imagen" class="rounded-circle"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="q.titulo">
                  <b-card-text>{{q.descripcion}}</b-card-text>
                  <p>Bs{{q.precio}}</p>
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
      leche: [
        {
          id: 1,
          titulo: "Leche Normal",
          descripcion:
            "Es un producto elaborado con leche fresca controlada y seleccionada, la cual es higienizada, homogenizada, estandarizada y ultrapasteurizada. ... Es un producto UHT de mediana vida.",
          precio: 5,
          imagen:
            "https://pilandina.com.bo/wp-content/uploads/2019/06/Leche-Fresca-Natural-sachet-946-ml-600x600.jpg"
        },
        {
          id: 2,
          titulo: "Leche Deslactosada",
          descripcion:
            "es “deslactosada” sobre la base de un proceso enzimático adecuadamente controlado, es un producto homogeneizado y ultrapasteurizado.",
          precio: 0,
          imagen:
            "https://pilandina.com.bo/wp-content/uploads/2019/06/lechedeslactosada-600x600.png"
        }
      ],
      queso: [
        {
          id: 1,
          titulo: "Queso Rio Grande",
          descripcion: "Kilo",
          precio: 28,
          imagen:
            "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_9aa26c32-0dac-4c00-bda5-93105aaf4aae.jpg"
        },
        {
          id: 2,
          titulo: "Queso Muzzarella",
          descripcion: "Kilo",
          precio: 23,
          imagen:
            "https://i5-unileverar.a8e.net.br/gg/queso-mozzarella-la-paulina-1kg_172831826_20096.jpg"
        },
        {
          id: 3,
          titulo: "Quesillo",
          descripcion: "Unidad",
          precio: 5,
          imagen:
            "https://www.elimparcial.com/__export/1557182428561/sites/elimparcial/img/2015/12/14/1323369-N.JPG_1359985867.jpg"
        }
      ]
    };
  }
};
</script>

<style>
.contenedor {
  display: grid;
  grid-template-columns: auto auto;
}
.contetri {
  display: grid;
  grid-template-columns: auto auto auto;
}
</style>