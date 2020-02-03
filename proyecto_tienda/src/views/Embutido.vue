<template>
  <div>
    <h1>Chorizo</h1>
    <div class="container">
      <div class="row">
        <div v-for="(c,index) of chorizo" :key="index" class="col-md-6 col-sm-6 col-xs-12">
          <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="require('../assets/enbutidos/'+c.portada)" style="padding:10px" class="rounded-circle"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="c.nombre">
                  <b-card-text>{{c.descripcion}}</b-card-text>
                  <h3>Bs{{c.precio}}</h3>
                  <a href="#" class="btn btn-dark">Agregar al Carrito</a>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
          <br />
        </div>
      </div>
    </div>
    <h1>Mortadela</h1>
    <div class="container">
      <div class="row">
        <div v-for="(m,index) of mortadela" :key="index" class="col-md-6 col-sm-6 col-xs-12">
          <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="require('../assets/enbutidos/'+m.portada)" height="200px" style="padding:10px" class="rounded-circle"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="m.nombre">
                  <b-card-text>{{m.descripcion}}</b-card-text>
                  <h3>Bs{{m.precio}}</h3>
                  <a href="#" class="btn btn-dark">Agregar al Carrito</a>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
          <br />
        </div>
      </div>
    </div>
    <h1>Pastas</h1>
    <div class="container">
      <div class="row">
        <div v-for="(p,index) of pasta" :key="index" class="col-md-6 col-sm-6 col-xs-12">
          <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="require('../assets/enbutidos/'+ p.portada)" style="padding:10px" class="rounded-circle"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="p.nombre">
                  <b-card-text>{{p.descripcion}}</b-card-text>
                  <h3>Bs{{p.precio}}</h3>
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
      chorizo: [
        {
          nombre: "Chorizo Sofia",
          descripcion: "Paquete",
          precio: 10,
          portada:
            "chori1.png"
        },
        {
          nombre: "Chorizo Sofia Agranel",
          descripcion: "Kilo",
          precio: 28,
          portada:
            "chori2.png"
        },
        {
          nombre: "Chorizo Agranel Viena",
          descripcion: "Kilo",
          precio: 32,
          portada:
            "chori3.png"
        },
        {
          nombre: "Chorizo Parrillero",
          descripcion: "Kilo",
          precio: 36,
          portada:
            "chori4.png"
        }
      ],
      mortadela: [
        {
          nombre: "Mortadela Jamonada al Vacío",
          descripcion: "Paquete",
          precio: 8,
          portada:
            "chori5.png"
        },
        {
          nombre: "Mortadela de Pollo al Vacío",
          descripcion: "Paquete",
          precio: 8,
          portada:
            "chori6.png"
        },
        {
          nombre: "Mortadela de Gallina en Barra",
          descripcion: "Kilo",
          precio: 30,
          portada:
            "chori7.png"
        },
        {
          nombre: "Mortadela Jamonada en Barra",
          descripcion: "Kilo",
          precio: 30,
          portada:
            "chori8.png"
        }
      ],
      pasta: [
        {
          nombre: "Pate de Pollo",
          descripcion: "200g",
          precio: 6,
          portada:
            "chori9.png"
        },
        {
          nombre: "Pate de Cerdo",
          descripcion: "cant",
          precio: 6,
          portada:
            "chori10.png"
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