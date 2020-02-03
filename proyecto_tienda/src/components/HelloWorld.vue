<template>
  <div>
    <b-img :src="require('../assets/arroz1.png')"></b-img>
    <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-interval="10000">
          <img
            src="https://blog.aulaformativa.com/wp-content/uploads/2014/03/creacion-de-paginas-web-blanco-como-fondo.jpg"
            class="d-block w-100 h-350px"
            height="350px"
            alt="..."
          />
        </div>
        <div class="carousel-item" data-interval="2000">
          <img
            src="https://previews.123rf.com/images/povareshka3/povareshka31706/povareshka3170600093/80699491-composici%C3%B3n-de-flores-flores-de-lila-sobre-fondo-blanco-vista-plana.jpg"
            class="d-block w-100 h-350px"
            height="350px"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://blog.aulaformativa.com/wp-content/uploads/2014/03/creacion-de-paginas-web-blanco-como-fondo.jpg"
            class="d-block w-100 h-350px"
            height="350px"
          />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleInterval"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleInterval"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <input type="file">
    <h1>Carnes</h1>
    <div class="container">
      <div class="row">
        <div v-for="(c,index) of carne" :key="index" class="col-md-6 col-xs-12">
          <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <p>{{c.portada}}</p>
                <b-card-img v-bind:src="(c.portada)" height="250px" class="rounded-circle"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="c.nombre">
                  <b-card-text>{{c.descripcion}}</b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
          <br />
        </div>
      </div>
    </div>
    <h1>Pollo</h1>
    <div class="container">
      <div class="row">
        <div v-for="(p,index) of pollo" :key="index" class="col-md-6 col-xs-12">
          <b-card no-body class="overflow-hidden text-dark efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="p.portada" height="250px" class="rounded-circle"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="p.nombre">
                  <b-card-text>{{p.descripcion}}</b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
          <br />
        </div>
      </div>
    </div>
    <h1>Avarrotes</h1>
    <div class="container">
      <div class="row">
        <div v-for="(a,index) of abarrotes" :key="index" class="col-md-4 col-xs-12">
          <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="a.portada" height="250px" class="rounded-circle"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="a.nombre">
                  <b-card-text>{{a.descripcion}}</b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
          <br />
        </div>
      </div>
    </div>
    <h1>Embutidos</h1>
    <div class="container">
      <div class="row">
        <div v-for="(e,index) of embutidos" :key="index" class="col-md-6 col-xs-12">
          <b-card no-body class="overflow-hidden text-dark efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="e.portada" height="250px" class="rounded-circle"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="e.nombre">
                  <b-card-text>{{e.descripcion}}</b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
          <br />
        </div>
      </div>
    </div>
    <h1>Condimentos</h1>
    <div class="container">
      <div class="row">
        <div v-for="(con,index) of condimentos" :key="index" class="col-md-6 col-xs-12">
          <b-card no-body class="overflow-hidden text-dark efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="con.portada" height="250px" class="rounded-circle"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="con.nombre">
                  <b-card-text>{{con.descripcion}}</b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
          <br />
        </div>
      </div>
    </div>
    <h1>Lacteos</h1>
    <div class="container">
      <div class="row">
        <div v-for="(l,index) of lacteos" :key="index" class="col-md-6 col-xs-12">
          <b-card no-body class="overflow-hidden text-dark efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="l.portada" height="250px" class="rounded-circle"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="l.nombre">
                  <b-card-text>{{l.descripcion}}</b-card-text>
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
  name: "HelloWorld",
  data() {
    return {
      carne: [
        {
          nombre: "Carne Molida",
          descripcion:
            "La carne picada o carne molida es una preparación de la carne con objetivos culinarios, para la cual se desmenuzan y se cortan finamente los músculos, grasas y nervios mediante máquina de picar carne, cuchillo, etc.",
          portada: "alitas.jpg"
        },
        {
          nombre: "Chuleta",
          descripcion:
            "Una chuleta es un corte de la carne situada justo encima de la costilla de un animal, ya sea cerdo, vacuno, cordero o carnero.",
          portada:
            ""
        },
        {
          nombre: "Pulpa",
          descripcion:
            "Es un corte en equilibrio entre carne, grasa y demas componentes. El bife de chorizo es la costeleta sin hueso ubicada en la cara externa del lomo del animal. Al ser separado del hueso, antes de cortarse en bifes.",
          portada:
            ""
        },
        {
          nombre: "Lomo",
          descripcion:
            "Es un músculo de soporte, que se ubica en el lomo anterior de la canal bovina (Res), es de forma cilíndrica corresponde a la sección delantera del lomo, a la cual se le removio el lomo de aguja. Presenta una gran suavidad.",
          portada:
            ""
        }
      ],
      pollo: [
        {
          nombre: "Alitas de Pollo",
          descripcion:
            "Si estás buscando botanas fáciles de preparar que sean deliciosas y puedas cocinar con variedad, compra alitas de pollo; lleva la cantidad que desees.",
          portada:
            ""
        },
        {
          nombre: "Piernas de Pollo",
          descripcion: "Si estás buscando botanas fáciles de preparar que sean deliciosas y puedas cocinar con variedad, Piernas de Pollo.",
          portada:
            ""
        }
      ],
      abarrotes: [
        {
          nombre: "Arroz",
          descripcion:"El arroz es una constante en las cocinas de todas las culturas. las recetas adecuadas a cada variedad.",
          portada:
            ""
        },
        {
          nombre: "Azucar",
          descripcion:"Es otra constante en las cocinas de todas las culturas especialmente en los desayunos.",
          portada:
            ""
        },
        {
          nombre: "Aceite",
          descripcion:"Aceites vegetales comestibles de soya, girasol y mezcla de soya/girasol. Marcas comerciales: FINO Vegetal, FINO Light y FINO Mental Activ.",
          portada:
            ""
        }
      ],
      embutidos: [
        {
          nombre: "Chorizo",
          descripcion:"Chorizos. Ingredientes: Carne y tocino de cerdo, carne de pollo, sal y especias naturales. ",
          portada:
            ""
        },
        {
          nombre: "Mortadela",
          descripcion:"Mortadelas. Ingredientes: Carne y tocino de cerdo, carne de pollo, sal y especias naturales. ",
          portada:
            ""
        }
      ],
      condimentos: [
        {
          nombre: "Oregano",
          descripcion:"Especia esencial en algunas comidas al momento de cocinar",
          portada: ""
        },
        {
          nombre: "Pimienta, Comino, Ajo",
          descripcion:"Condimentos esenciales al momento de dar sabor a las comidas",
          portada:
            ""
        }
      ],
      lacteos: [
        {
          nombre: "Leche",
          descripcion:"Es un producto elaborado con leche fresca controlada y seleccionada, la cual es higienizada, homogenizada, estandarizada y ultrapasteurizada.",
          portada: ""
        },
        {
          nombre: "Queso",
          descripcion:"Queso es el producto fresco o madurado obtenido por la coagulación y separación de la leche, nata, leche parcialmente desnatada, mazada o por una mezcla de estos productos.",
          portada:
            ""
        }
      ]
    };
  },
  methods: {
    getImgUrl(portada) {
    return require('../assets/'+portada)
    console.log(require('../assets/'+portada))
    console.log(hola)
}
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
.card {
  padding:10px
}
</style>
