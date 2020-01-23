<template>
  <div>
    <h1>Carne</h1>
    <div class="container">
      <div class="row">
        <div v-for="(c,index) of carnes" :key="index" class="col-md-4 col-sm-6 col-xs-12">
          <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="c.imagen" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body title="Horizontal Card">
                  <b-card-text>
                    This is a wider card with supporting text as a natural lead-in to additional content.
                    This content is a little bit longer.
                  </b-card-text>
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
          <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="o.imagen" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="o.titulo">
                  <b-card-text>{{o.descripcion}}</b-card-text>
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
          descripcion:
            "La carne picada o carne molida es una preparación de la carne con objetivos culinarios, para la cual se desmenuzan y se cortan finamente los músculos, grasas y nervios mediante máquina de picar carne, cuchillo, etc.",
          precio: 0,
          imagen:
            "https://jimenezbarbero.com/30-large_default/carne-picada-de-vacuno-mayor-la-finca.jpg"
        },
        {
          id: 2,
          titulo: "Chuleta",
          descripcion:
            "Es un corte de la carne situada justo encima de la costilla de un animal, ya sea cerdo, vacuno",
          precio: 0,
          imagen:
            "https://paqueloscarlosexpress.com/wp-content/uploads/2019/07/chuleta-de-res.jpg"
        },
        {
          id: 3,
          titulo: "Churrasco",
          descripcion:
            "El churrasco es un trozo de carne de vacuno, generalmente delgado, cocido sobre una plancha, a las brasas o directamente sobre las llamas.",
          precio: 0,
          imagen:
            "http://www.donelfer.com/wp-content/uploads/2017/04/churrascocarnegallery2.jpg"
        },
        {
          id: 4,
          titulo: "Pulpa",
          descripcion:
            "Pieza de res situada en la cara externa del muslo y compuesta por una parte de la cadera y de la parte central de la pulpa. Antiguamente comprendía el redondo y la culata.",
          precio: 0,
          imagen:
            "https://st.depositphotos.com/1049691/2348/i/450/depositphotos_23480847-stock-photo-raw-beef.jpg"
        },
        {
          id: 5,
          titulo: "Lomo",
          descripcion:
            "El lomo es un corte de res bastante suave sin mucho marmoleado y que se cocina rápidamente sin endurecerse.",
          precio: 0,
          imagen:
            "https://static3.eldiariomontanes.es/www/pre2017/multimedia/noticias/201609/11/media/cortadas/webternera-k61C--575x493@Diario%20Montanes.jpg"
        },
        {
          id: 6,
          titulo: "Tira Asado",
          descripcion:
            "El asado de tira, o tira de asado, es un corte típico argentino que consiste en cortar el costillar del animal de forma transversal , es decir en «tiras», por lo que el corte incluye trozos de hueso.",
          precio: 0,
          imagen:
            "https://www.chedraui.com.mx/medias/2508245-00-CH515Wx515H?context=bWFzdGVyfHJvb3R8Mzk3NDF8aW1hZ2UvanBlZ3xoNzAvaDEzLzk4ODQ1Njk1MDE3MjYuanBnfDRlMzNlZjg2ODhmNzJjNDRhN2Y5MDk1YjVmODFmYzUyNGM0MDI5ODRkNTA1YjQxNDNkODU1NjlkNWI3YjRkNmI"
        },
        {
          id: 7,
          titulo: "Blandita",
          descripcion:
            "El lomo corto produce más cortes de carne blanda que el solomillo, aunque ambos se consideran como corte de primera.",
          precio: 0,
          imagen:
            "https://colanta.com/aprende-de/wp-content/uploads/2019/01/tabla.jpg"
        },
        {
          id: 8,
          titulo: "Bife Chorizo",
          descripcion:
            "El bife de chorizo es la costeleta sin hueso ubicada en la cara externa del lomo del animal.",
          precio: 0,
          imagen:
            "https://tienda.res.com.ar/pub/media/catalog/product/cache/dbcd7fcd96d4e43f69e3e3703d135006/b/i/bife_de_chorizo_1.jpg"
        },
        {
          id: 9,
          titulo: "Picana",
          descripcion:
            "La picaña es un recurso de los carniceros para seguir usando un viejo truco de los cortes",
          precio: 0,
          imagen:
            "https://www.chedraui.com.mx/medias/2502539-00-CH1200Wx1200H?context=bWFzdGVyfHJvb3R8ODk3Mjl8aW1hZ2UvanBlZ3xoYmUvaDBjLzk4ODQ1MzE1MjM2MTQuanBnfDhlZGIwMmJmYjRhNWNjNzg2NmUyMTM1NzE2MmJmYWEyYTZmZDMxMjFlMjI1MDU5YzIxODkyMDNhNmUxYTUwNDc"
        }
      ],
      otros: [
        {
          id: 1,
          titulo: "Carne de Cerdo",
          descripcion: "Es una de las carnes más consumidas en el mundo.",
          precio: 0,
          imagen:
            "https://www.mercadodechamartin.es/madrid/wp-content/uploads/2018/01/Carne-de-cerdo.jpeg"
        },
        {
          id: 2,
          titulo: "Higado",
          descripcion: "El hierro ayuda a las células a generar energía.",
          precio: 0,
          imagen:
            "https://i1.wp.com/conservaciondealimentos.com/wp/wp-content/uploads/2018/08/higado-de-res.jpg"
        },
        {
          id: 3,
          titulo: "Panza",
          descripcion:
            "Hecha a base del estómago y las tripas del cerdo o de la vaca.",
          precio: 0,
          imagen:
            "https://t1.uc.ltmcdn.com/images/7/9/5/img_42597_ins_3742764_600.jpg"
        }
      ]
    };
  }
};
</script>

<style>
</style>