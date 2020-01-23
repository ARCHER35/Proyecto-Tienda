<template>
  <div>
      <h1>Salsasoya</h1>
      <div class="container">
      <b-card
        no-body
        class="overflow-hidden"
        style="max-width: 500px; padding:15px; margin-bottom: 20px"
        v-for="(salsa,index) of salsasoya"
        :Key="index"
      >
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img v-bind:src="salsa.portada" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body>
              <b-card-text>
                <h3>{{salsa.nombre}}</h3>
              </b-card-text>
              <p>{{salsa.descripcion}}</p>
              <p>Bs{{salsa.precio}}</p>
              <a href="#" class="btn btn-primary">Agregar al Carrito</a>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <h1>Harry El Limonero</h1>
    <div class="container">
      <b-card
        no-body
        class="overflow-hidden"
        style="max-width: 500px; padding:15px; margin-bottom: 20px"
        v-for="(lim,index) of limonero"
        :Key="index"
      >
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img v-bind:src="lim.portada" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body>
              <b-card-text>
                <h3>{{lim.nombre}}</h3>
              </b-card-text>
              <p>{{lim.descripcion}}</p>
              <p>Bs{{lim.precio}}</p>
              <a href="#" class="btn btn-primary">Agregar al Carrito</a>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <h1>Vinagres</h1>
    <div class="container">
      <b-card
        no-body
        class="overflow-hidden"
        style="max-width: 500px; padding:15px; margin-bottom: 20px"
        v-for="(vin,index) of vinagre"
        :Key="index"
      >
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img v-bind:src="vin.portada" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body>
              <b-card-text>
                <h3>{{vin.nombre}}</h3>
              </b-card-text>
              <p>{{vin.descripcion}}</p>
              <p>Bs{{vin.precio}}</p>
              <a href="#" class="btn btn-primary">Agregar al Carrito</a>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <h1>Carbon</h1>
    <div class="container">
      <b-card
        no-body
        class="overflow-hidden"
        style="max-width: 500px; padding:15px; margin-bottom: 20px"
        v-for="(car,index) of carbon"
        :Key="index"
      >
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img v-bind:src="car.portada" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body>
              <b-card-text>
                <h3>{{car.nombre}}</h3>
              </b-card-text>
              <p>{{car.descripcion}}</p>
              <p>Bs{{car.precio}}</p>
              <a href="#" class="btn btn-primary">Agregar al Carrito</a>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <h1>Servilletas</h1>
    <div class="container">
      <b-card
        no-body
        class="overflow-hidden"
        style="max-width: 500px; padding:15px; margin-bottom: 20px"
        v-for="(serv,index) of servilleta"
        :Key="index"
      >
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img v-bind:src="serv.portada" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body>
              <b-card-text>
                <h3>{{serv.nombre}}</h3>
              </b-card-text>
              <p>{{serv.descripcion}}</p>
              <p>Bs{{serv.precio}}</p>
              <a href="#" class="btn btn-primary">Agregar al Carrito</a>
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
      salsasoya: [
        {
          nombre:"Salsasoya Trisoy Toscana",
          descripcion:"235 ml",
          precio:2.50,
          portada:"https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre:"Salsasoya Trisoy Toscana",
          descripcion:"470 ml",
          precio:5,
          portada:"https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre:"Salsasoya Trisoy Toscana",
          descripcion:"940 ml",
          precio:0,
          portada:"https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre:"Salsasoya Trisoy Toscana",
          descripcion:"5000 ml",
          precio:0,
          portada:"https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
      ],
      limonero: [
        {
          nombre:"Harry El Limonero",
          descripcion:"330 ml",
          precio:0,
          portada:"https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre:"Harry El Limonero",
          descripcion:"700 ml",
          precio:0,
          portada:"https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        }
      ],
      vinagre: [
        {
          nombre:"Vinagre Blanco Trisoy Toscana",
          descripcion:"330 ml",
          precio:0,
          portada:"https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre:"Vinagre Blanco Trisoy Toscana",
          descripcion:"1500",
          precio:0,
          portada:"https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre:"Vinagre Rojo Trisoy Toscana",
          descripcion:"330 ml",
          precio:0,
          portada:"https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre:"Vinagre Rojo Trisoy Toscana",
          descripcion:"1500 ml",
          precio:0,
          portada:"https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
      ],
      carbon: [
        {
          nombre:"Carbon La Preferida",
          descripcion:"Unidad",
          precio:0,
          portada:"https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        }
      ],
      servilleta: [
        {
          nombre:"Servilletas Perlita",
          descripcion:"Paquete",
          precio:0,
          portada:"https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        }
      ]
    }
  }
}
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