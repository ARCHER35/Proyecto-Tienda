<template>
  <div>
    <h1>Ketchup</h1>
    <div class="container">
      <div class="row">
        <div v-for="(a,index) of ketchup" :key="index" class="col-md-4">
          <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="a.portada" height="230px" style="padding:10px" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="a.nombre">
                </b-card-body>
                <b-card-text>{{a.descripcion}}</b-card-text>
                <a href="" class="btn btn-primary">Agregar al Carrito</a>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>
    </div>
    <h1>Mayonesa</h1>
    <div class="container">
      <div class="row">
        <div v-for="(mayo,index) of mayonesa" :key="index" class="col-md-4">
          <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="mayo.portada" height="230px" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="mayo.nombre">
                </b-card-body>
                <b-card-text>{{mayo.descripcion}}</b-card-text>
                <a href="" class="btn btn-primary">Agregar al Carrito</a>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>
    </div>
    <h1>Mostaza</h1>
    <div class="container">
      <div class="row">
        <div v-for="(moz,index) of mostaza" :key="index" class="col-md-4">
          <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="moz.portada" height="230px" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="moz.nombre">
                </b-card-body>
                <b-card-text>{{moz.descripcion}}</b-card-text>
                <a href="" class="btn btn-primary">Agregar al Carrito</a>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>
    </div>

    <h1>Otros</h1>
    <div class="container">
      <div v-for="(o,index) of otros" :key="index">
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img v-bind:src="o.portada" height="230px" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body v-bind:title="o.nombre">
              </b-card-body>
              <b-card-text>{{o.descripcion}}</b-card-text>
                <a href="" class="btn btn-primary">Agregar al Carrito</a>
            </b-col>
          </b-row>
        </b-card>
      </div>
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
          portada:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYJZwM9kRhIQx73_zvNUcEeVDugseF-AE12HAAFlf6ROxiqg8Cng&s"
        },
        {
          nombre:"Ketchup Mediano",
          descripcion:"230cm",
          precio:7,
          portada:"https://www.ketal.com.bo/17883-large_default/ketchup-kris-200gr.jpg"
        },
        {
          nombre:"Ketchup 500gr",
          descripcion:"500gr",
          precio:12,
          portada:"https://www.ketal.com.bo/19775-large_default/ketchup-kris-500gr-doypack.jpg"
        },
        {
          nombre:"Ketchup Grande",
          descripcion:"1 Kilo",
          precio:28,
          portada:"https://www.ketal.com.bo/18220-home_default/aderezo-kris-doypack-1100cm.jpg"
        }
      ],
      mayonesa: [
        {
          nombre:"Mayonesa Pequeña",
          descripcion:"50cm",
          precio:2,
          portada:"https://www.grupovenado.com/images/02.jpg"
        },
        {
          nombre:"Mayonesa Mediana",
          descripcion:"380cm",
          precio:7,
          portada:"https://www.midespensa.bo/wp-content/uploads/2019/06/MAYONESA-SACHET.png"
        },
        {
          nombre:"Mayonesa Grande",
          descripcion:"1 Kilo",
          precio:28,
          portada:"https://www.ketal.com.bo/18224-large_default/mayonesa-kris-doypack-1000gr.jpg"
        }
      ],
      mostaza: [
        {
          nombre:"Mostaza Pequeña",
          descripcion:"50cm",
          precio:2,
          portada:"https://www.grupovenado.com/images/06.jpg"
        },
        {
          nombre:"Mostaza Mediana", 
          descripcion:"200cm",
          precio:7,
          portada:"https://www.midespensa.bo/wp-content/uploads/2019/06/MOSTAZA-SACHET.png"
        },
        {
          nombre:"Mostaza 500gr",
          descripcion:"500 gr",
          precio:12,
          portada:"https://www.ketal.com.bo/19776-home_default/mostaza-kris-doypack-500gr.jpg"
        },
        {
          nombre:"Mostaza Grande",
          descripcion:"1 Kilo",
          precio:28,
          portada:"https://www.ketal.com.bo/18226-home_default/mostaza-kris-doypack-1000gr.jpg"
        }
      ],
      otros: [
        {
          nombre:"Extracto de Tomato Cajamar",
          descripcion:"Unidad",
          precio:5,
          portada:"https://www.midespensa.com.bo/wp-content/uploads/2019/06/EXTRACTO-DE-TOMATE.png"
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