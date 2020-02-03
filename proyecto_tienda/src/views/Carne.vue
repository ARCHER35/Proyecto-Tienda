<template>
  <div class="bg-light">
    <h1>Carne</h1>
    <div class="container">
      <div class="row">
        <div v-for="(c,index) of carnes" :key="index" class="col-md-6 col-sm-6 col-xs-12">
          <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="require('../assets/carne/'+c.portada)" class="rounded-circle"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="c.titulo">
                  <b-card-text>{{c.descripcion}}</b-card-text>
                  <p>Bs{{c.precio}}</p>
                  <b-button @click.prevent="c.ventana=true" variant="dark">
                    Agregar
                    <i class="fas fa-cart-arrow-down text-light"></i>
                  </b-button>
                   <div v-bind="c.ventana" v-if="c.ventana">
                      <b-form-select v-model="selected" :options="c.cant"></b-form-select>
                      <a href="#" class="banner btn btn-dark" @click.prevent="c.ventana=false">enviar</a>
                   </div>

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
        <div v-for="(o,index) of otros" :key="index" class="col-md-4 col-sm-6 col-xs-12">
          <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="require('../assets/carne/'+o.portada)" class="rounded-circle"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="o.titulo">
                  <b-card-text>{{o.descripcion}}</b-card-text>
                  <p>Bs{{o.precio}}</p>
                  <b-button v-b-toggle.collapse-1 variant="dark">
                    Agregar
                    <i class="fas fa-cart-arrow-down text-light"></i>
                  </b-button>
                  <b-collapse id="collapse-1" class="mt-2">
                    <b-form-select v-model="selected" :options="o.cant"></b-form-select>
                    <button class="btn btn-dark">enviar</button>
                  </b-collapse>
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
      carnes: [
        {
          id: 1,
          titulo: "Carne Molida",
          descripcion: "Kilo",
          precio: 25,
          ventana:false,
          cant: [
            { value: null, text: "Pedido" },
            { value: "1", text: "1" },
            { value: "2", text: "2" },
            { value: "3", text: "3" },
            { value: "4", text: "4" },
            { value: "5", text: "5" },
            { value: "6", text: "6" },
            { value: "7", text: "7" },
            { value: "8", text: "8" },
            { value: "9", text: "9" },
            { value: "10", text: "10" }
          ],
          portada:
            "car1.jpg"
        },
        {
          id: 2,
          titulo: "Chuleta",
          descripcion: "Kilo",
          precio: 28,
          ventana:false,
          cant: [
            { value: null, text: "Pedido" },
            { value: "1", text: "1" },
            { value: "2", text: "2" },
            { value: "3", text: "3" },
            { value: "4", text: "4" },
            { value: "5", text: "5" },
            { value: "6", text: "6" },
            { value: "7", text: "7" },
            { value: "8", text: "8" },
            { value: "9", text: "9" },
            { value: "10", text: "10" }
          ],
          portada:
            "car2.jpg"
        },
        {
          id: 3,
          titulo: "Churrasco",
          descripcion: "Kilo",
          precio: 28,
          ventana:false,
          cant: [
            { value: null, text: "Pedido" },
            { value: "1", text: "1" },
            { value: "2", text: "2" },
            { value: "3", text: "3" },
            { value: "4", text: "4" },
            { value: "5", text: "5" },
            { value: "6", text: "6" },
            { value: "7", text: "7" },
            { value: "8", text: "8" },
            { value: "9", text: "9" },
            { value: "10", text: "10" }
          ],
          portada:
            "car3.jpg"
        },
        {
          id: 4,
          titulo: "Pulpa",
          descripcion: "Kilo",
          precio: 36,
          ventana:false,
          cant: [
            { value: null, text: "Pedido" },
            { value: "1", text: "1" },
            { value: "2", text: "2" },
            { value: "3", text: "3" },
            { value: "4", text: "4" },
            { value: "5", text: "5" },
            { value: "6", text: "6" },
            { value: "7", text: "7" },
            { value: "8", text: "8" },
            { value: "9", text: "9" },
            { value: "10", text: "10" }
          ],
          portada:
            "car4.jpg"
        },
        {
          id: 5,
          titulo: "Lomo",
          descripcion: "Kilo",
          precio: 38,
          ventana:false,
          cant: [
            { value: null, text: "Pedido" },
            { value: "1", text: "1" },
            { value: "2", text: "2" },
            { value: "3", text: "3" },
            { value: "4", text: "4" },
            { value: "5", text: "5" },
            { value: "6", text: "6" },
            { value: "7", text: "7" },
            { value: "8", text: "8" },
            { value: "9", text: "9" },
            { value: "10", text: "10" }
          ],
          portada:
            "car5.jpg"
        },
        {
          id: 6,
          titulo: "Filete de Lomo",
          descripcion: "Kilo",
          precio: 45,
          ventana:false,
          cant: [
            { value: null, text: "Pedido" },
            { value: "1", text: "1" },
            { value: "2", text: "2" },
            { value: "3", text: "3" },
            { value: "4", text: "4" },
            { value: "5", text: "5" },
            { value: "6", text: "6" },
            { value: "7", text: "7" },
            { value: "8", text: "8" },
            { value: "9", text: "9" },
            { value: "10", text: "10" }
          ],
          portada: 
          "car6.jpg"
        },
        {
          id: 7,
          titulo: "Tira Asado",
          descripcion: "Kilo",
          precio: 25,
          ventana:false,
          cant: [
            { value: null, text: "Pedido" },
            { value: "1", text: "1" },
            { value: "2", text: "2" },
            { value: "3", text: "3" },
            { value: "4", text: "4" },
            { value: "5", text: "5" },
            { value: "6", text: "6" },
            { value: "7", text: "7" },
            { value: "8", text: "8" },
            { value: "9", text: "9" },
            { value: "10", text: "10" }
          ],
          portada:
            "car7.jpg"
        },
        {
          id: 8,
          titulo: "Blandita",
          descripcion: "Kilo",
          precio: 36,
          ventana:false,
          cant: [
            { value: null, text: "Pedido" },
            { value: "1", text: "1" },
            { value: "2", text: "2" },
            { value: "3", text: "3" },
            { value: "4", text: "4" },
            { value: "5", text: "5" },
            { value: "6", text: "6" },
            { value: "7", text: "7" },
            { value: "8", text: "8" },
            { value: "9", text: "9" },
            { value: "10", text: "10" }
          ],
          portada:
            "car8.jpg"
        },
        {
          id: 9,
          titulo: "Bife Chorizo",
          descripcion: "Kilo",
          precio: 45,
          ventana:false,
          cant: [
            { value: null, text: "Pedido" },
            { value: "1", text: "1" },
            { value: "2", text: "2" },
            { value: "3", text: "3" },
            { value: "4", text: "4" },
            { value: "5", text: "5" },
            { value: "6", text: "6" },
            { value: "7", text: "7" },
            { value: "8", text: "8" },
            { value: "9", text: "9" },
            { value: "10", text: "10" }
          ],
          portada:
            "car9.jpg"
        },
        {
          id: 10,
          titulo: "Sice",
          descripcion: "Kilo",
          precio: 28,
          ventana:false,
          cant: [
            { value: null, text: "Pedido" },
            { value: "1", text: "1" },
            { value: "2", text: "2" },
            { value: "3", text: "3" },
            { value: "4", text: "4" },
            { value: "5", text: "5" },
            { value: "6", text: "6" },
            { value: "7", text: "7" },
            { value: "8", text: "8" },
            { value: "9", text: "9" },
            { value: "10", text: "10" }
          ],
          portada:
            "car10.jpg"
        }
      ],
      otros: [
        {
          id: 1,
          titulo: "Carne de Cerdo",
          descripcion: "Kilo",
          precio: 22,
          ventana:false,
          cant: [
            { value: null, text: "Pedido" },
            { value: "1", text: "1" },
            { value: "2", text: "2" },
            { value: "3", text: "3" },
            { value: "4", text: "4" },
            { value: "5", text: "5" },
            { value: "6", text: "6" },
            { value: "7", text: "7" },
            { value: "8", text: "8" },
            { value: "9", text: "9" },
            { value: "10", text: "10" }
          ],
          portada:
            "car11.jpeg"
        },
        {
          id: 2,
          titulo: "Higado",
          descripcion: "Kilo",
          precio: 16,
          ventana:false,
          cant: [
            { value: null, text: "Pedido" },
            { value: "1", text: "1" },
            { value: "2", text: "2" },
            { value: "3", text: "3" },
            { value: "4", text: "4" },
            { value: "5", text: "5" },
            { value: "6", text: "6" },
            { value: "7", text: "7" },
            { value: "8", text: "8" },
            { value: "9", text: "9" },
            { value: "10", text: "10" }
          ],
          portada:
            "car12.jpg"
        },
        {
          id: 3,
          titulo: "Panza",
          descripcion: "Kilo",
          precio: 20,
          ventana:false,
          cant: [
            { value: null, text: "Pedido" },
            { value: "1", text: "1" },
            { value: "2", text: "2" },
            { value: "3", text: "3" },
            { value: "4", text: "4" },
            { value: "5", text: "5" },
            { value: "6", text: "6" },
            { value: "7", text: "7" },
            { value: "8", text: "8" },
            { value: "9", text: "9" },
            { value: "10", text: "10" }
          ],
          portada:
            "car13.jpg"
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