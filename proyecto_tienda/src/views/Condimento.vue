<template>
  <div>
    <h1>Condimentos</h1>
    <div class="container">
      <div class="row">
        <div v-for="(c,index) of condimentos" :key="index" class="col-md-4 col-sm-6 col-xs-12">
          <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="c.imagen" style="padding:10px" height="250px" class="rounded-circle"></b-card-img>
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
    <h1>Aji</h1>
    <div class="container">
      <div class="row">
        <div v-for="(a,index) of aji" :key="index" class="col-md-6 col-sm-6 col-xs-12">
          <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="a.imagen" style="padding:10px" height="250px" class="rounded-circle"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="a.nombre">
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
                <b-card-img v-bind:src="j.imagen" style="padding:10px" height="250px" class="rounded-circle"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="j.nombre">
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
                <b-card-img v-bind:src="l.imagen" style="padding:10px" class="rounded-circle"></b-card-img>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      aji: [
        {
          id: 1,
          nombre: "Aji Panquita",
          descripcion: "Unidad",
          precio: 1.5,
          imagen:
            "https://www.tienda-peruana.com/1497-home_default/panquita-aji-panca-especial-sin-picante-sibarita-sabor-del-peru.jpg"
        },
        {
          id: 2,
          nombre: "Aji Amarillo",
          descripcion: "Unidad",
          precio: 1.5,
          imagen:
            "https://www.que-rico.nl/wp-content/uploads/2014/07/amarillin-31g.jpg"
        }
      ],
      condimentos: [
        {
          id: 1,
          nombre: "Comino",
          descripcion: "Unidad",
          precio: 0.50,
          imagen:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Cumin_Seeds.jpg/251px-Cumin_Seeds.jpg"
        },
        {
          id: 2,
          nombre: "Oregano",
          descripcion: "Unidad",
          precio: 1,
          imagen: "http://supracorpsac.com/wp-content/uploads/oregano.jpg"
        },
        {
          id: 3,
          nombre: "Colorante",
          descripcion: "Unidad",
          precio: 1,
          imagen:
            "https://crujienteyaldente.com/wp-content/uploads/2018/02/colorantes-naturales.jpg"
        },
        {
          id: 4,
          nombre: "Pasas Uva",
          descripcion: "Unidad",
          precio: 1,
          imagen:
            "https://unisima.com/wp-content/uploads/2014/07/uvas-pasas-15.jpg"
        },
        {
          id: 5,
          nombre: "Anis",
          descripcion: "Unidad",
          precio: 1,
          imagen:
            "http://www.elrincondelosaromas.com/image/cache/catalog/Infusiones/An%C3%ADs%20verde-500x500.jpg"
        },
        {
          id: 6,
          nombre: "Hoja de Laurel",
          descripcion: "Unidad",
          precio: 1,
          imagen:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Avrovii-list2.jpg/251px-Avrovii-list2.jpg"
        }
      ],
      ajo: [
        {
          id: 1,
          nombre: "Ajo en polvo",
          descripcion: "Unidad",
          precio: 0,
          imagen:
            "https://catalogo.minoil.com.bo/wp-content/uploads/2019/08/118021-1.png"
        },
        {
          id: 2,
          nombre: "Diente de Ajo",
          descripcion: "Unidad",
          precio: 0,
          imagen: "https://www.ecured.cu/images/6/6e/Ajo22.jpg"
        }
      ],
      canela: [
        {
          id: 1,
          nombre: "Canela Normal",
          descripcion: "Unidad",
          precio: 0,
          imagen:
            "https://www.natur-kraeuter.de/images/stories/virtuemart/product/Zimtrinde_ganz.jpg"
        },
        {
          id: 1,
          nombre: "Canela Molida",
          descripcion: "Unidad",
          precio: 0,
          imagen:
            "https://elantiguoherbolario.com/wp-content/uploads/2019/10/canela-molida.jpg"
        }
      ]
    };
  }
};
</script>

<style>
</style>