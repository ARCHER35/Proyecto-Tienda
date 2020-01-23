<template>
  <div>
    <h1>Fideos Famosa</h1>
    <div class="container">
      <b-card
        no-body
        class="overflow-hidden"
        style="max-width: 500px; padding:15px; margin-bottom: 20px"
        v-for="(fam,index) of famosa"
        :Key="index"
      >
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img v-bind:src="fam.portada" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body>
              <b-card-text>
                <h3>{{fam.nombre}}</h3>
              </b-card-text>
              <p>{{fam.descripcion}}</p>
              <p>Bs{{fam.precio}}</p>
              <a href="#" class="btn btn-primary">Agregar al Carrito</a>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <h1>Fideos Lazzaroni</h1>
    <div class="container">
      <b-card
        no-body
        class="overflow-hidden"
        style="max-width: 500px; padding:15px; margin-bottom: 20px"
        v-for="(laz,index) of lazzaroni"
        :Key="index"
      >
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img v-bind:src="laz.portada" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body>
              <b-card-text>
                <h3>{{laz.nombre}}</h3>
              </b-card-text>
              <p>{{laz.descripcion}}</p>
              <p>Bs{{laz.precio}}</p>
              <a href="#" class="btn btn-primary">Agregar al Carrito</a>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <h1>Fideos del Pais</h1>
    <div class="container">
      <b-card
        no-body
        class="overflow-hidden"
        style="max-width: 500px; padding:15px; margin-bottom: 20px"
        v-for="(pa,index) of pais"
        :Key="index"
      >
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img v-bind:src="pa.portada" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body>
              <b-card-text>
                <h3>{{pa.nombre}}</h3>
              </b-card-text>
              <p>{{pa.descripcion}}</p>
              <p>Bs{{pa.precio}}</p>
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
      famosa: [
        {
          nombre: "Fideos Famosa",
          descripcion: "Cuarilla",
          precio: 20,
          portada: "https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre: "Fideo 1",
          descripcion: "Unidad",
          precio:4,
          portada:"https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre:"Fideo 2",
          descripcion: "Unidad",
          precio: 4,
          portada:"https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        }
      ],
      lazzaroni: [
        {
          nombre: "Espageti Lazzaroni",
          descripcion: "3 Unidades",
          precio: 10,
          portada: "https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre: "Fideo 1",
          descripcion: "Unidad",
          precio:4,
          portada:"https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
      ],
      pais: [
        {
          nombre: "Fideos del Pais",
          descripcion: "Libra",
          precio: 5,
          portada: "https://media.gettyimages.com/photos/raindrops-falling-down-on-black-background-picture-id94993245?s=612x612"
        },
        {
          nombre: "Fideo 1",
          descripcion: "Libra",
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