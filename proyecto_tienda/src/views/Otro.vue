<template>
  <div>
    <h1>Salsasoya</h1>
    <div class="container">
      <div class="row">
        <div
          v-for="(s,index) of productoSalsaSoya"
          :key="index"
          class="col-md-6 col-sm-6 col-xs-12"
        >
          <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="require('../assets/'+s.portada)" class="rounded-circle"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="s.nombre">
                  <b-card-text>{{s.descripcion}}</b-card-text>
                  <h3>Bs{{s.precio}}</h3>
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
        <div v-for="(l,index) of productoLimonero" :key="index" class="col-md-6 col-sm-6 col-xs-12">
          <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="require('../assets/'+l.portada)" class="rounded-circle"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="l.nombre">
                  <b-card-text>{{l.descripcion}}</b-card-text>
                  <h3>Bs{{l.precio}}</h3>
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
        <div v-for="(v,index) of productoVinagre" :key="index" class="col-md-6 col-sm-6 col-xs-12">
          <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="require('../assets/'+v.portada)" class="rounded-circle"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="v.nombre">
                  <b-card-text>{{v.descripcion}}</b-card-text>
                  <h3>Bs{{v.precio}}</h3>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
          <br />
        </div>
      </div>
    </div>
    <h1>Carbon</h1>
    <div class="container">
      <div class="row">
        <div v-for="(c,index) of productoCarbon" :key="index" class="col-sm">
          <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="require('../assets/'+c.portada)" class="rounded-circle"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="c.nombre">
                  <b-card-text>{{c.descripcion}}</b-card-text>
                  <h3>Bs{{c.precio}}</h3>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
          <br />
        </div>
      </div>
    </div>
    <h1>Servilletas</h1>
    <div class="container">
      <div class="row">
        <div v-for="(s,index) of productoServilletas" :key="index" class="col-sm">
          <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="require('../assets/'+s.portada)" class="rounded-circle"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="s.nombre">
                  <b-card-text>{{s.descripcion}}</b-card-text>
                  <h3>Bs{{s.precio}}</h3>
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
import axios from "axios";
export default {
  mounted() {
    this.getProducto();
  },
  computed: {
    productoSalsaSoya() {
      return this.producto.filter(function(p) {
        return p.variedad == "SALSA SOYA";
      });
    },
    productoLimonero() {
      return this.producto.filter(function(p) {
        return p.variedad == "HARRY EL LIMONERO";
      });
    },
    productoVinagre() {
      return this.producto.filter(function(p) {
        return p.variedad == "VINAGRE";
      });
    },
    productoCarbon() {
      return this.producto.filter(function(p) {
        return p.variedad == "CARBON";
      });
    },
    productoServilletas() {
      return this.producto.filter(function(p) {
        return p.variedad == "SERVILLETAS";
      });
    }
  },
  methods: {
    getProducto() {
      axios
        .get("http://localhost:3500/api/producto")
        .then(respuesta => {
          console.log(respuesta.data);
          this.producto = respuesta.data;
          console.log(this.producto);
        })
        .catch(error => console.log(error));
    }
  },
  data() {
    return {
      producto: [],
      salsasoya: [
        {
          nombre: "Salsasoya Trisoy Toscana",
          descripcion: "235 ml",
          precio: 2.5,
          portada: "soya1.jpg"
        },
        {
          nombre: "Salsasoya Trisoy Toscana",
          descripcion: "470 ml",
          precio: 5,
          portada: "soya2.jpg"
        },
        {
          nombre: "Salsasoya Trisoy Toscana",
          descripcion: "Grande",
          precio: 0,
          portada: "soya3.jpg"
        }
      ],
      limonero: [
        {
          nombre: "Harry El Limonero",
          descripcion: "330 ml",
          precio: 0,
          portada: "harry1.jpg"
        },
        {
          nombre: "Harry El Limonero",
          descripcion: "700 ml",
          precio: 0,
          portada: "harry2.jpg"
        }
      ],
      vinagre: [
        {
          nombre: "Vinagre Blanco Trisoy Toscana",
          descripcion: "1500 ml",
          precio: 0,
          portada: "vina3.jpg"
        },
        {
          nombre: "Vinagre Rojo Trisoy Toscana",
          descripcion: "330 ml",
          precio: 0,
          portada: "vina1.jpg"
        },
        {
          nombre: "Vinagre Rojo Trisoy Toscana",
          descripcion: "1500 ml",
          precio: 0,
          portada: "vina2.jpg"
        }
      ],
      carbon: [
        {
          nombre: "Carbon La Preferida",
          descripcion: "Unidad",
          precio: 0,
          portada: "carbon.jpg"
        }
      ],
      servilleta: [
        {
          nombre: "Servilletas Perlita",
          descripcion: "Paquete",
          precio: 0,
          portada: "servi.jpg"
        }
      ]
    };
  }
};
</script>

<style>
</style>