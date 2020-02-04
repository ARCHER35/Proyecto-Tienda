<template>
  <div>
    <h1>Leche</h1>
    <div class="container">
      <div class="row">
        <div v-for="(l,index) of leche" :key="index" class="col-md-6 col-sm-6 col-xs-12">
          <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="l.imagen" class="rounded-circle"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="l.nombre">
                  <b-card-text>{{l.descripcion}}</b-card-text>
                  <h3>Bs{{l.precio}}</h3>
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
                <b-card-body v-bind:title="q.nombre">
                  <b-card-text>{{q.descripcion}}</b-card-text>
                  <h3>Bs{{q.precio}}</h3>
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
          nombre: "Leche Normal",
          descripcion:
            "Unidad",
          precio: 6,
          imagen:
            "https://pilandina.com.bo/wp-content/uploads/2019/06/Leche-Fresca-Natural-sachet-946-ml-600x600.jpg"
        },
        {
          id: 2,
          nombre: "Leche Deslactosada",
          descripcion:
            "Unidad",
          precio: 7,
          imagen:
            "https://pilandina.com.bo/wp-content/uploads/2019/06/lechedeslactosada-600x600.png"
        }
      ],
      queso: [
        {
          id: 1,
          nombre: "Queso Rio Grande",
          descripcion: "Kilo",
          precio: 28,
          imagen:
            "https://scontent.fvvi1-2.fna.fbcdn.net/v/t1.0-9/26439_120484354628492_5366959_n.jpg?_nc_cat=100&_nc_ohc=IjaBQ8EV02sAX8PBygY&_nc_ht=scontent.fvvi1-2.fna&oh=f90dd11be18641c719ed954cdb9d7b76&oe=5EA459CD"
        },
        {
          id: 2,
          nombre: "Queso Muzzarella",
          descripcion: "Kilo",
          precio: 23,
          imagen:
            "https://i5-unileverar.a8e.net.br/gg/queso-mozzarella-la-paulina-1kg_172831826_20096.jpg"
        },
        {
          id: 3,
          nombre: "Quesillo",
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
</style>