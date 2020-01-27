<template>
  <div class="hello">
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
    <h1>Carnes</h1>
    <div class="container">
      <b-card
        no-body
        class="overflow-hidden bg-warning"
        style="max-width: 540px; padding:15px margin-bottom: 20px;"
        v-for="(car,index) of carne"
        :Key="index"
      >
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img
              v-bind:src="car.portada"
              style="padding:15px"
              class="rounded-0"
            ></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body>
              <b-card-text>
                <h3>{{car.nombre}}</h3>
              </b-card-text>
              <p>{{car.descripcion}}</p>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <h1>Pollo</h1>
    <div class="container">
      <b-card
        no-body
        class="overflow-hidden"
        style="max-width: 540px; padding:15px; margin-bottom: 20px"
        v-for="(pol,index) of pollo"
        :Key="index"
      >
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img v-bind:src="pol.portada" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body>
              <b-card-text>
                <h3>{{pol.nombre}}</h3>
              </b-card-text>
              <p>{{pol.descripcion}}</p>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <h1>Avarrotes</h1>
    <div class="container">
      <b-card
        no-body
        class="overflow-hidden"
        style="max-width: 540px; padding:15px; margin-bottom: 20px"
        v-for="(ava,index) of abarrotes"
        :Key="index"
      >
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img v-bind:src="ava.portada" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body>
              <b-card-text>
                <h3>{{ava.nombre}}</h3>
              </b-card-text>
              <p>{{ava.descripcion}}</p>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <h1>Embutidos</h1>
    <div class="container">
      <b-card
        no-body
        class="overflow-hidden"
        style="max-width: 500px; padding:15px; margin-bottom: 20px"
        v-for="(embu,index) of embutidos"
        :Key="index"
      >
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img v-bind:src="embu.portada" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body>
              <b-card-text>
                <h3>{{embu.nombre}}</h3>
              </b-card-text>
              <p>{{embu.descripcion}}</p>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <h1>Condimentos</h1>
    <div class="container">
      <b-card
        no-body
        class="overflow-hidden"
        style="max-width: 500px; padding:15px; margin-bottom: 20px"
        v-for="(cond,index) of condimentos"
        :Key="index"
      >
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img v-bind:src="cond.portada" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body>
              <b-card-text>
                <h3>{{cond.nombre}}</h3>
              </b-card-text>
              <p>{{cond.descripcion}}</p>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <h1 align=center>Lacteos</h1>
    <div class="container">
      <b-card
        no-body
        class="overflow-hidden"
        style="max-width: 500px; padding:15px; margin-bottom: 20px"
        v-for="(lac,index) of lacteos"
        :Key="index"
      >
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img v-bind:src="lac.portada" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body>
              <b-card-text>
                <h3>{{lac.nombre}}</h3>
              </b-card-text>
              <p>{{lac.descripcion}}</p>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
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
          portada: "https://i.ytimg.com/vi/Dd7Xap_mSDU/maxresdefault.jpg"
        },
        {
          nombre: "Chuleta",
          descripcion:
            "Una chuleta es un corte de la carne situada justo encima de la costilla de un animal, ya sea cerdo, vacuno, cordero o carnero.",
          portada:
            "https://http2.mlstatic.com/carne-chuleta-D_NQ_NP_993871-MLM28389802110_102018-F.jpg"
        },
        {
          nombre: "Pulpa",
          descripcion:
            "Es un corte en equilibrio entre carne, grasa y demas componentes. El bife de chorizo es la costeleta sin hueso ubicada en la cara externa del lomo del animal. Al ser separado del hueso, antes de cortarse en bifes.",
          portada:
            "https://barbacoadictos.com/wp-content/uploads/2018/08/bife-corte-carne-de-res.jpg"
        },
        {
          nombre: "Lomo",
          descripcion:
            "Es un músculo de soporte, que se ubica en el lomo anterior de la canal bovina (Res), es de forma cilíndrica corresponde a la sección delantera del lomo, a la cual se le removio el lomo de aguja. Presenta una gran suavidad.",
          portada:
            "https://carnesdonfernando.com/wp-content/uploads/2018/01/cola-lomo-min-820x450.jpg"
        }
      ],
      pollo: [
        {
          nombre: "Alitas de Pollo",
          descripcion:
            "Si estás buscando botanas fáciles de preparar que sean deliciosas y puedas cocinar con variedad, compra alitas de pollo; lleva la cantidad que desees.",
          portada:
            "https://st.depositphotos.com/1004373/2648/i/450/depositphotos_26488953-stock-photo-raw-chicken-wings.jpg"
        },
        {
          nombre: "Piernas de Pollo",
          descripcion: "Piernas de Pollo",
          portada:
            "https://st.depositphotos.com/1177973/3686/i/950/depositphotos_36868665-stock-photo-raw-chicken-legs-isolated-on.jpg"
        }
      ],
      abarrotes: [
        {
          nombre: "Arroz",
          portada:
            "https://cdn.shopify.com/s/files/1/0041/4947/7446/products/DAG002_96ea30b3-cdeb-433e-b250-80134021028f_2048x.jpg?v=1553302825"
        },
        {
          nombre: "Azucar",
          portada:
            "https://www.ketal.com.bo/18234-home_default/azucar-guabira-extra-fina-2kg.jpg"
        },
        {
          nombre: "Aceite",
          portada:
            "https://www.radiofides.com/es/wp-content/uploads/2018/05/Aceite1-2.jpg"
        }
      ],
      embutidos: [
        {
          nombre: "Chorizo",
          portada:
            "http://epicemarketing.info/sofia/wp-content/uploads/2014/13/Chorizo-Parrillero-al-Vaciogrande.png"
        },
        {
          nombre: "Mortadela",
          portada:
            "https://www.ketal.com.bo/19777-large_default/mortadela-sofia-jamonada-pollo-vacio-200-gr.jpg"
        }
      ],
      condimentos: [
        {
          nombre: "Oregano",
          portada: "https://swissbrothers.com/rshop/356/oregano-9gr.jpg"
        },
        {
          nombre: "Pimienta, Comino, Ajo",
          portada:
            "https://scontent.fvvi1-1.fna.fbcdn.net/v/t31.0-8/s960x960/25299984_340926722983597_4708729305215361594_o.jpg?_nc_cat=108&_nc_ohc=uISEe0pbrBIAX9o3qKE&_nc_ht=scontent.fvvi1-1.fna&_nc_tp=1002&oh=a8a02bec530f25f1e126c4d30a4c5450&oe=5E92088A"
        }
      ],
      lacteos: [
        {
          nombre: "Leche",
          portada: "https://i.ytimg.com/vi/JpRXgR7y07A/hqdefault.jpg"
        },
        {
          nombre: "Queso",
          portada:
            "https://scontent.fvvi1-2.fna.fbcdn.net/v/t1.0-9/26439_120484354628492_5366959_n.jpg?_nc_cat=100&_nc_ohc=IjaBQ8EV02sAX8PBygY&_nc_ht=scontent.fvvi1-2.fna&oh=f90dd11be18641c719ed954cdb9d7b76&oe=5EA459CD"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
