<template>
  <div class="bg-light">
    <h1>Carne</h1>
    <div class="container">
      <div class="row">
        <div v-for="(c,index) of productoCarne" :key="index" class="col-md-6 col-sm-6 col-xs-12">
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
    <h1>Variedades</h1>
    <div class="container">
      <div class="row">
        <div v-for="(o,index) of productoVariedad" :key="index" class="col-md-4 col-sm-6 col-xs-12">
          <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="require('../assets/'+o.portada)" class="rounded-circle"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="o.nombre">
                  <b-card-text>{{o.descripcion}}</b-card-text>
                  <h3>Bs{{o.precio}}</h3>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
          <br />
        </div>
      </div>
    </div>
    <input type="file">
  </div>
</template>
<script>
import axios from "axios";
export default {
  mounted() {
    this.getProducto();
  },
  computed: {
    productoCarne() {
      return this.producto.filter(function(p) {
        return p.variedad == "CARNE";
      });
    },
    productoVariedad() {
      return this.producto.filter(function(p) {
        return p.variedad == "VARIEDAD";
      });
    }
  },
  methods: {
    getProducto() {
      axios
        .get("/api/producto")
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
      carnes: [
        {
          id: 1,
          nombre: "Carne Molida",
          descripcion: "Kilo",
          precio: 25,
          portada: "car1.jpg"
        },
        {
          id: 2,
          nombre: "Chuleta",
          descripcion: "Kilo",
          precio: 28,
          portada: "car2.jpg"
        },
        {
          id: 3,
          nombre: "Churrasco",
          descripcion: "Kilo",
          precio: 28,
          portada: "car3.jpg"
        },
        {
          id: 4,
          nombre: "Pulpa",
          descripcion: "Kilo",
          precio: 36,
          portada: "car4.jpg"
        },
        {
          id: 5,
          nombre: "Lomo",
          descripcion: "Kilo",
          precio: 38,
          portada: "car5.jpg"
        },
        {
          id: 6,
          nombre: "Filete de Lomo",
          descripcion: "Kilo",
          precio: 45,
          portada: "car6.jpg"
        },
        {
          id: 7,
          nombre: "Tira Asado",
          descripcion: "Kilo",
          precio: 25,
          portada: "car7.jpg"
        },
        {
          id: 8,
          nombre: "Blandita",
          descripcion: "Kilo",
          precio: 36,
          portada: "car8.jpg"
        },
        {
          id: 9,
          nombre: "Bife Chorizo",
          descripcion: "Kilo",
          precio: 45,
          portada: "car9.jpg"
        },
        {
          id: 10,
          nombre: "Sice",
          descripcion: "Kilo",
          precio: 28,
          portada: "car10.jpg"
        }
      ],
      otros: [
        {
          id: 1,
          nombre: "Carne de Cerdo",
          descripcion: "Kilo",
          precio: 22,
          portada: "car11.jpeg"
        },
        {
          id: 2,
          nombre: "Higado",
          descripcion: "Kilo",
          precio: 16,
          portada: "car12.jpg"
        },
        {
          id: 3,
          nombre: "Panza",
          descripcion: "Kilo",
          precio: 20,
          portada: "car13.jpg"
        }
      ]
    };
  }
};
</script>

<style>
.efc:hover {
  background: #a0e4ff;
  color: #1d272b;
  transition: all 0.55s;
  transform: translateY(-15px);
  box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
}
</style>