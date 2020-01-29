<template>
  <div>
    <h1>Chorizo</h1>
    <div class="container">
      <div class="row">
        <div v-for="(c,index) of chorizo" :key="index" class="col-md-6 col-sm-6 col-xs-12">
          <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="c.portada" style="padding:10px" class="rounded-circle"></b-card-img>
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
        <div v-for="(m,index) of mortadela" :key="index" class="col-md-4 col-sm-6 col-xs-12">
          <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="m.portada" height="200px" style="padding:10px" class="rounded-circle"></b-card-img>
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
                <b-card-img v-bind:src="p.portada" style="padding:10px" class="rounded-circle"></b-card-img>
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
          precio: 0,
          portada:
            "http://sofia.com.bo/wp-content/uploads/2014/13/Salchicha-Viena-al-Vaciogrande.png"
        },
        {
          nombre: "Chorizo Sofia Agranel",
          descripcion: "Kilo",
          precio: 0,
          portada:
            "http://sofia.com.bo/wp-content/uploads/2014/13/Salchicha-Viena-de-Pelar-a-Granelgrande.png"
        },
        {
          nombre: "Chorizo Agranel",
          descripcion: "Kilo",
          precio: 0,
          portada:
            "https://sofia.com.bo/wp-content/uploads/2014/13/Salchicha-Viena-a-Granelgrande.png"
        },
        {
          nombre: "Chorizo Parrillero",
          descripcion: "Kilo",
          precio: 0,
          portada:
            "https://sofia.com.bo/wp-content/uploads/2014/13/Chorizo-Churrasquero-a-Granelgrande.png"
        }
      ],
      mortadela: [
        {
          nombre: "Mortadela Jamonada al Vacío",
          descripcion: "Paquete",
          precio: 0,
          portada:
            "http://sofia.com.bo/wp-content/uploads/2014/13/Mortadela-Jamonada-al-Vaciogrande.png"
        },
        {
          nombre: "Mortadela de Pollo al Vacío",
          descripcion: "Paquete",
          precio: 0,
          portada:
            "http://sofia.com.bo/wp-content/uploads/2014/13/Mortadela-de-Pollo-al-Vaciogrande.png"
        },
        {
          nombre: "Mortadela de Gallina en Barra",
          descripcion: "Kilo",
          precio: 0,
          portada:
            "http://sofia.com.bo/wp-content/uploads/2014/13/Mortadela-de-Gallina-en-Barra-500-grs.png"
        },
        {
          nombre: "Mortadela Jamonada en Barra",
          descripcion: "Kilo",
          precio: 0,
          portada:
            "http://sofia.com.bo/wp-content/uploads/2014/13/Mortadela-Jamonada-en-Barra-500-grs.png"
        },
        {
          nombre: "Mortadela Maxi",
          descripcion: "cant",
          precio: 0,
          portada:
            "http://dillmann.com.bo/images/sampledata/dillman/MORTADELAS/MORTADELA-CAZADOR-200G.png"
        }
      ],
      pasta: [
        {
          nombre: "Pate de Pollo",
          descripcion: "200g",
          precio: 0,
          portada:
            "https://sofia.com.bo/wp-content/uploads/2014/13/Pate-de-Higado-de-Pollo-de-100-grsgrande.png"
        },
        {
          nombre: "Pate de Cerdo",
          descripcion: "cant",
          precio: 0,
          portada:
            "http://sofia.com.bo/wp-content/uploads/2014/13/Pate-de-Higado-de-Cerdo-de-200-grs..png"
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