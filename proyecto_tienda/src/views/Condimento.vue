<template>
  <div>
    <h1>Condimentos</h1>
    <div class="container">
      <div class="row">
        <div v-for="(c,index) of condimentos" :key="index" class="col-md-4 col-sm-6 col-xs-12">
          <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="c.imagen" class="rounded-circle"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="c.titulo">
                  <b-card-text>{{c.descripcion}}</b-card-text>
                  <p>Bs{{c.precio}}</p>
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
                <b-card-img v-bind:src="a.imagen" class="rounded-circle"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="a.titulo">
                  <b-card-text>{{a.descripcion}}</b-card-text>
                  <p>Bs{{a.precio}}</p>
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
                <b-card-img v-bind:src="j.imagen" class="rounded-circle"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="j.titulo">
                  <b-card-text>{{j.descripcion}}</b-card-text>
                  <p>Bs{{j.precio}}</p>
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
                <b-card-img v-bind:src="l.imagen" class="rounded-circle"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="l.titulo">
                  <b-card-text>{{l.descripcion}}</b-card-text>
                  <p>Bs{{l.precio}}</p>
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
          descripcion:
            "El pimentón o ají de color es un condimento en polvo de color rojo y sabor característico obtenido a partir del secado y molido de determinadas variedades de pimientos rojos especialmente el ñora y la paprika.",
          precio: 0,
          imagen:
            "https://www.tienda-peruana.com/1497-home_default/panquita-aji-panca-especial-sin-picante-sibarita-sabor-del-peru.jpg"
        },
        {
          id: 2,
          titulo: "Aji Amarillo",
          descripcion:
            "Forma parte de una enorme cantidad de recetas populares y de la cocina casera de ese país. Aunque su nombre sea “ají amarillo”, en verdad es de color casi anaranjado",
          precio: 0,
          imagen:
            "https://www.que-rico.nl/wp-content/uploads/2014/07/amarillin-31g.jpg"
        }
      ],
      condimentos: [
        {
          id: 1,
          titulo: "Comino",
          descripcion:
            "El comino es una planta herbácea perteneciente a la familia Apiaceae (antes umbelíferas) cuyas semillas aromáticas se usan como especia.",
          precio: 0,
          imagen:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Cumin_Seeds.jpg/251px-Cumin_Seeds.jpg"
        },
        {
          id: 2,
          titulo: "Oregano",
          descripcion:
            "El orégano es una planta medicinal muy beneficiosa para afecciones del aparato respiratorio debido a su efecto antiinflamatorio, analgésico y antiséptico.",
          precio: 0,
          imagen: "http://supracorpsac.com/wp-content/uploads/oregano.jpg"
        },
        {
          id: 3,
          titulo: "Colorante",
          descripcion:
            "Los colorantes alimentarios son un tipo de aditivos alimentarios que proporcionan color a los alimentos (en su mayoría bebidas), si están presentes en los alimentos se consideran naturales y si por el contrario se añaden a los alimentos durante su preprocesado mediante la intervención humana se denominan artificiales.",
          precio: 0,
          imagen:
            "https://crujienteyaldente.com/wp-content/uploads/2018/02/colorantes-naturales.jpg"
        },
        {
          id: 4,
          titulo: "Pasas Uva",
          descripcion:
            "Mejora la vista, evita problemas en los dientes como las caries, ayuda a aumentar de peso y mantiene la salud de los huesos por su alto contenido en calcio.",
          precio: 0,
          imagen:
            "https://unisima.com/wp-content/uploads/2014/07/uvas-pasas-15.jpg"
        },
        {
          id: 5,
          titulo: "Anis",
          descripcion:
            "Favorece el sistema digestivo: el anís tiene efecto sedante, antiespasmódico y carminativo por lo que se utiliza para tratar problemas digestivos. ",
          precio: 0,
          imagen:
            "http://www.elrincondelosaromas.com/image/cache/catalog/Infusiones/An%C3%ADs%20verde-500x500.jpg"
        },
        {
          id: 6,
          titulo: "Hoja de Laurel",
          descripcion:
            " Alivia las digestiones pesadas, previene la acidez y reduce los gases. Pero, además, el laurel sirve para tratar afecciones del aparato respiratorio, es diurético, y hasta se emplea para elaborar productos cosméticos.",
          precio: 0,
          imagen:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Avrovii-list2.jpg/251px-Avrovii-list2.jpg"
        }
      ],
      ajo: [
        {
          id: 1,
          titulo: "Ajo en polvo",
          descripcion:
            "Polvo deshidratado de ajo de color blanco amarillento o amarillo.",
          precio: 0,
          imagen:
            "https://catalogo.minoil.com.bo/wp-content/uploads/2019/08/118021-1.png"
        },
        {
          id: 2,
          titulo: "Diente de Ajo",
          descripcion:
            "El término alude a una planta cuyo bulbo se emplea como alimento. Por extensión, se llama ajo a las partes (conocidas como dientes) en las cuales se divide dicho bulbo.",
          precio: 0,
          imagen: "https://www.ecured.cu/images/6/6e/Ajo22.jpg"
        }
      ],
      canela: [
        {
          id: 1,
          titulo: "Canela Normal",
          descripcion:
            "La canela es la zona interna de la corteza del árbol canelo (Cinnamomum zeylanicum), que se cultiva en zonas tropicales, y puede medir de siete a ocho metros de altura.",
          precio: 0,
          imagen:
            "https://www.natur-kraeuter.de/images/stories/virtuemart/product/Zimtrinde_ganz.jpg"
        },
        {
          id: 1,
          titulo: "Canela Molida",
          descripcion:
            "La canela molida proviene de la corteza desecada, privada de la mayor parte de su capa externa y molida del árbol Cinnamomum zeylanicum.",
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