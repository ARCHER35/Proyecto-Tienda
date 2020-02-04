<template>
  <div>
    <h1>Salsasoya</h1>
    <div class="container">
      <div class="row">
        <div v-for="(s,index) of salsasoya" :key="index" class="col-md-6 col-sm-6 col-xs-12">
          <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="s.portada" class="rounded-circle"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="s.nombre">
                  <b-card-text>{{s.descripcion}}</b-card-text>
                  <h3>Bs{{s.precio}}</h3>
                  <a href="#" class="btn btn-dark">Agregar al Carrito</a>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
          <br />
        </div>
      </div>
    </div>
    <h1>Harry El Limonero</h1>
    <div class="container">
      <div class="row">
        <div v-for="(l,index) of limonero" :key="index" class="col-md-6 col-sm-6 col-xs-12">
          <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="l.portada" class="rounded-circle"></b-card-img>
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
    <h1>Vinagres</h1>
    <div class="container">
      <div class="row">
        <div v-for="(v,index) of vinagre" :key="index" class="col-md-6 col-sm-6 col-xs-12">
          <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="v.portada" class="rounded-circle"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="v.nombre">
                  <b-card-text>{{v.descripcion}}</b-card-text>
                  <h3>Bs{{v.precio}}</h3>
                  <a href="#" class="btn btn-dark">Agregar al Carrito</a>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
          <br />
        </div>
      </div>
    </div>
    <h1>Carbon</h1>
    <center>
      <div class="container">
        <div class="row">
          <div v-for="(c,index) of carbon" :key="index" class="col-sm">
            <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img v-bind:src="c.portada" class="rounded-circle"></b-card-img>
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
    </center>
    <h1>Servilletas</h1>
    <center>
      <div class="container">
        <div class="row">
          <div v-for="(s,index) of servilleta" :key="index" class="col-sm">
            <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img v-bind:src="s.portada" class="rounded-circle"></b-card-img>
                </b-col>
                <b-col md="6">
                  <b-card-body v-bind:title="s.nombre">
                    <b-card-text>{{s.descripcion}}</b-card-text>
                    <h3>Bs{{s.precio}}</h3>
                    <a href="#" class="btn btn-dark">Agregar al Carrito</a>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
            <br />
          </div>
        </div>
      </div>
    </center>
  </div>
</template>

<script>
export default {
  data() {
    return {
      salsasoya: [
        {
          nombre: "Salsasoya Trisoy Toscana",
          descripcion: "235 ml",
          precio: 2.5,
          portada:
            "https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre: "Salsasoya Trisoy Toscana",
          descripcion: "470 ml",
          precio: 5,
          portada:
            "https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre: "Salsasoya Trisoy Toscana",
          descripcion: "940 ml",
          precio: 0,
          portada:
            "https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre: "Salsasoya Trisoy Toscana",
          descripcion: "5000 ml",
          precio: 0,
          portada:
            "https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        }
      ],
      limonero: [
        {
          nombre: "Harry El Limonero",
          descripcion: "330 ml",
          precio: 0,
          portada:
            "https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre: "Harry El Limonero",
          descripcion: "700 ml",
          precio: 0,
          portada:
            "https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        }
      ],
      vinagre: [
        {
          nombre: "Vinagre Blanco Trisoy Toscana",
          descripcion: "330 ml",
          precio: 0,
          portada:
            "https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre: "Vinagre Blanco Trisoy Toscana",
          descripcion: "1500",
          precio: 0,
          portada:
            "https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre: "Vinagre Rojo Trisoy Toscana",
          descripcion: "330 ml",
          precio: 0,
          portada:
            "https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre: "Vinagre Rojo Trisoy Toscana",
          descripcion: "1500 ml",
          precio: 0,
          portada:
            "https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        }
      ],
      carbon: [
        {
          nombre: "Carbon La Preferida",
          descripcion: "Unidad",
          precio: 0,
          portada:
            "https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        }
      ],
      servilleta: [
        {
          nombre: "Servilletas Perlita",
          descripcion: "Paquete",
          precio: 0,
          portada:
            "https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        }
      ]
    };
  }
};
</script>

<style>
</style>