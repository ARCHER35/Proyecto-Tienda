<template>
  <div>
    <h1>Aderezos</h1>
    <div class="container">
      <h1 align="left">Ketchup</h1>
    </div>
    <div class="container">
      <b-card
        no-body
        class="overflow-hidden"
        style="max-width: 500px; padding:15px; margin-bottom: 20px"
        v-for="(ket,index) of ketchup"
        :Key="index"
      >
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img v-bind:src="ket.portada" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body>
              <b-card-text>
                <h3>{{ket.nombre}}</h3>
              </b-card-text>
              <p>{{ket.descripcion}}</p>
              <p>Bs{{ket.precio}}</p>
              <a href="#" class="btn btn-primary">Agregar al Carrito</a>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <div class="container">
      <h1 align="left">Mayonesa</h1>
    </div>
    <div class="container">
      <b-card
        no-body
        class="overflow-hidden"
        style="max-width: 500px; padding:15px; margin-bottom: 20px"
        v-for="(mayo,index) of mayonesa"
        :Key="index"
      >
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img v-bind:src="mayo.portada" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body>
              <b-card-text>
                <h3>{{mayo.nombre}}</h3>
              </b-card-text>
              <p>{{mayo.descripcion}}</p>
              <p>Bs{{mayo.precio}}</p>
              <a href="#" class="btn btn-primary">Agregar al Carrito</a>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <div class="container">
      <h1 align="left">Mostaza</h1>
    </div>
    <div class="container">
      <b-card
        no-body
        class="overflow-hidden"
        style="max-width: 500px; padding:15px; margin-bottom: 20px"
        v-for="(most,index) of mostaza"
        :Key="index"
      >
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img v-bind:src="most.portada" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body>
              <b-card-text>
                <h3>{{most.nombre}}</h3>
              </b-card-text>
              <p>{{most.descripcion}}</p>
              <p>Bs{{most.precio}}</p>
              <a href="#" class="btn btn-primary">Agregar al Carrito</a>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <div class="container">
      <h1 align="left">Extracto</h1>
    </div>
    <div class="container">
      <b-card
        no-body
        class="overflow-hidden"
        style="max-width: 500px; padding:15px; margin-bottom: 20px"
        v-for="(extra,index) of extracto"
        :Key="index"
      >
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img v-bind:src="extra.portada" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body>
              <b-card-text>
                <h3>{{extra.nombre}}</h3>
              </b-card-text>
              <p>{{extra.descripcion}}</p>
              <p>Bs{{extra.precio}}</p>
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
      ketchup: [
        {
          nombre:"Ketchup Pequeño",
          descripcion:"50cm",
          precio:2,
          portada:"https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre:"Ketchup Mediano",
          descripcion:"230cm",
          precio:7,
          portada:"https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre:"Ketchup Grande",
          descripcion:"1 Kilo",
          precio:28,
          portada:"https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        }
      ],
      mayonesa: [
        {
          nombre:"Mayonesa Pequeña",
          descripcion:"50cm",
          precio:2,
          portada:"https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre:"Mayonesa Mediana",
          descripcion:"230cm",
          precio:7,
          portada:"https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre:"Mayonesa Grande",
          descripcion:"1 Kilo",
          precio:28,
          portada:"https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        }
      ],
      mostaza: [
        {
          nombre:"Mostaza Pequeña",
          descripcion:"50cm",
          precio:2,
          portada:"https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre:"Mostaza Mediana", 
          descripcion:"230cm",
          precio:7,
          portada:"https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre:"Mostaza Grande",
          descripcion:"1 Kilo",
          precio:28,
          portada:"https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        }
      ],
      extracto: [
        {
          nombre:"Extracto de Tomato Cajamar",
          descripcion:"Unidad",
          precio:5,
          portada:"https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
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