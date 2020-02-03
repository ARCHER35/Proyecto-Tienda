<template>
  <div>
    <h1>Condimentos</h1>
    <div class="container">
      <div class="row">
        <div v-for="(c,index) of condimentos" :key="index" class="col-md-6 col-sm-6 col-xs-12">
          <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="require('../assets/condimentos/'+c.portada)" style="padding:10px" height="250px" class="rounded-circle"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="c.titulo">
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
    <h1>Aji</h1>
    <div class="container">
      <div class="row">
        <div v-for="(a,index) of aji" :key="index" class="col-md-6 col-sm-6 col-xs-12">
          <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="require('../assets/condimentos/'+a.portada)" style="padding:10px" height="250px" class="rounded-circle"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="a.titulo">
                  <b-card-text>{{a.descripcion}}</b-card-text>
                  <h3>Bs{{a.precio}}</h3>
                  <a href="#" class="btn btn-dark">Agregar al Carrito</a>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
          <br />
        </div>
      </div>
    </div>
    <h1>Ajo</h1>
    <div class="container">
      <div class="row">
        <div v-for="(j,index) of ajo" :key="index" class="col-md-6 col-sm-6 col-xs-12">
          <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="require('../assets/condimentos/'+j.portada)" style="padding:10px" height="250px" class="rounded-circle"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="j.titulo">
                  <b-card-text>{{j.descripcion}}</b-card-text>
                  <h3>Bs{{j.precio}}</h3>
                  <a href="#" class="btn btn-dark">Agregar al Carrito</a>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
          <br />
        </div>
      </div>
    </div>
    <h1>Canela</h1>
    <div class="container">
      <div class="row">
        <div v-for="(l,index) of canela" :key="index" class="col-md-6 col-sm-6 col-xs-12">
          <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="require('../assets/condimentos/'+l.portada)" style="padding:10px" class="rounded-circle"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="l.titulo">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      aji: [
        {
          id: 1,
          titulo: "Aji Panquita",
          descripcion: "Unidad",
          precio: 1.5,
          portada:
            "aji1.jpg"
        },
        {
          id: 2,
          titulo: "Aji Amarillo",
          descripcion: "Unidad",
          precio: 1.5,
          portada:
            "aji2.jpg"
        }
      ],
      condimentos: [
        {
          id: 1,
          titulo: "Comino",
          descripcion: "Unidad",
          precio: 1,
          portada:
            "comi.jpg"
        },
        {
          id: 2,
          titulo: "Oregano",
          descripcion: "Unidad",
          precio: 1,
          portada: "ore.jpg"
        },
        {
          id: 3,
          titulo: "Colorante",
          descripcion: "Unidad",
          precio: 1,
          portada:
            "condi1.jpg"
        },
        {
          id: 4,
          titulo: "Pasas Uva",
          descripcion: "Unidad",
          precio: 1,
          portada:
            "uva.jpg"
        },
        {
          id: 5,
          titulo: "Anis",
          descripcion: "Unidad",
          precio: 1,
          portada:
            "anis.jpg"
        },
        {
          id: 6,
          titulo: "Doña Gusta",
          descripcion: "Unidad",
          precio: 1,
          portada:
            "condi2.png"
        },
        {
          id:7,
          nombre:"Locoto en Polvo",
          descripcion:"Unidad",
          precio:1,
          portada:"cond.jpg"
        },
        {
          id:8,
          nombre:"Comino",
          descripcion:"Unidad",
          precio:1,
          portada:"comino.jpg"
        }
      ],
      ajo: [
        {
          id: 1,
          titulo: "Ajo en polvo",
          descripcion: "Unidad",
          precio: 0,
          portada:
            "ajo1.png"
        },
        {
          id: 2,
          titulo: "Diente de Ajo",
          descripcion: "Unidad",
          precio: 0,
          portada: "ajo2.jpg"
        },
        {
          id: 3,
          titulo: "Ajo",
          descripcion: "Unidad",
          precio: 0,
          portada: "ajo.jpg"
        }
      ],
      canela: [
        {
          id: 1,
          titulo: "Canela Normal",
          descripcion: "Unidad",
          precio: 0,
          portada:
            "canela1.jpg"
        },
        {
          id: 1,
          titulo: "Canela Molida",
          descripcion: "Unidad",
          precio: 0,
          portada:
            "canela2.jpg"
        }
      ]
    };
  }
};
</script>

<style>
</style>