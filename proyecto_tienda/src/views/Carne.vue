<template>
  <div>
    <h1>Carne de Res</h1>
    <div class="contenedor container">
      <b-card
        no-body
        class="overflow-hidden"
        style="max-width: 500px; padding:15px; margin-bottom: 20px"
        v-for="(c,index) of carnes"
        :Key="index"
      >
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img v-bind:src="c.imagen" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body>
              <b-card-text>
                <h3>{{c.titulo}}</h3>
              </b-card-text >
              <p class="text-justify">{{c.descripcion}}</p>
              <h3>Bs{{c.precio}}</h3>
              <a href="#" class="btn btn-primary">Agregar al Carrito</a>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <h1>Variedades</h1>
    <div class="container">
      <b-card no-body class="columtri overflow-hidden bg-success">
        <b-row no-gutters v-for="(o,index) of otros" :key="index" style="margin-bottom: 20px;">
          <b-col md="6">
            <b-card-img v-bind:src="o.imagen" class="rounded-0" style="padding:10px"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body v-bind:title="o.titulo">
              <b-card-text class="text-justify">{{o.descripcion}}</b-card-text>
              <h3>Bs{{o.precio}}</h3>
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
      carnes: [
        {
          id: 1,
          titulo: "Carne Molida",
          descripcion:
            "Kilo",
          precio: 25,
          imagen:
            "https://jimenezbarbero.com/30-large_default/carne-picada-de-vacuno-mayor-la-finca.jpg"
        },
        {
          id: 2,
          titulo: "Chuleta",
          descripcion:
            "Kilo",
          precio: 28,
          imagen:
            "https://paqueloscarlosexpress.com/wp-content/uploads/2019/07/chuleta-de-res.jpg"
        },
        {
          id: 3,
          titulo: "Churrasco",
          descripcion:
            "Kilo",
          precio: 28,
          imagen:
            "http://www.donelfer.com/wp-content/uploads/2017/04/churrascocarnegallery2.jpg"
        },
        {
          id: 4,
          titulo: "Pulpa",
          descripcion:
            "Kilo",
          precio: 36,
          imagen:
            "https://st.depositphotos.com/1049691/2348/i/450/depositphotos_23480847-stock-photo-raw-beef.jpg"
        },
        {
          id: 5,
          titulo: "Lomo",
          descripcion:
            "Kilo",
          precio: 38,
          imagen:
            "https://static3.eldiariomontanes.es/www/pre2017/multimedia/noticias/201609/11/media/cortadas/webternera-k61C--575x493@Diario%20Montanes.jpg"
        },
        {
          id: 5.5,
          titulo: "Filete de Lomo",
          descripcion:
            "Kilo",
          precio: 45,
          imagen:
            "https://static3.eldiariomontanes.es/www/pre2017/multimedia/noticias/201609/11/media/cortadas/webternera-k61C--575x493@Diario%20Montanes.jpg"
        },
        {
          id: 6,
          titulo: "Tira Asado",
          descripcion:
            "Kilo",
          precio: 25,
          imagen:
            "https://www.chedraui.com.mx/medias/2508245-00-CH515Wx515H?context=bWFzdGVyfHJvb3R8Mzk3NDF8aW1hZ2UvanBlZ3xoNzAvaDEzLzk4ODQ1Njk1MDE3MjYuanBnfDRlMzNlZjg2ODhmNzJjNDRhN2Y5MDk1YjVmODFmYzUyNGM0MDI5ODRkNTA1YjQxNDNkODU1NjlkNWI3YjRkNmI"
        },
        {
          id: 7,
          titulo: "Blandita",
          descripcion:
            "Kilo",
          precio: 36,
          imagen:
            "https://colanta.com/aprende-de/wp-content/uploads/2019/01/tabla.jpg"
        },
        {
          id: 8,
          titulo: "Bife Chorizo",
          descripcion:
            "Kilo",
          precio: 45,
          imagen:
            "https://tienda.res.com.ar/pub/media/catalog/product/cache/dbcd7fcd96d4e43f69e3e3703d135006/b/i/bife_de_chorizo_1.jpg"
        },
        {
          id: 9,
          titulo: "Sice",
          descripcion:
            "Kilo",
          precio: 28,
          imagen:
            "https://www.chedraui.com.mx/medias/2502539-00-CH1200Wx1200H?context=bWFzdGVyfHJvb3R8ODk3Mjl8aW1hZ2UvanBlZ3xoYmUvaDBjLzk4ODQ1MzE1MjM2MTQuanBnfDhlZGIwMmJmYjRhNWNjNzg2NmUyMTM1NzE2MmJmYWEyYTZmZDMxMjFlMjI1MDU5YzIxODkyMDNhNmUxYTUwNDc"
        }
      ],
      otros: [
        {
          id: 1,
          titulo: "Carne de Cerdo",
          descripcion:
            "Kilo",
          precio: 22,
          imagen:
            "https://www.mercadodechamartin.es/madrid/wp-content/uploads/2018/01/Carne-de-cerdo.jpeg"
        },
        {
          id: 2,
          titulo: "Higado",
          descripcion:
            "Kilo",
          precio: 16,
          imagen:
            "https://i1.wp.com/conservaciondealimentos.com/wp/wp-content/uploads/2018/08/higado-de-res.jpg"
        },
        {
          id: 3,
          titulo: "Panza",
          descripcion:
            "Kilo",
          precio: 20,
          imagen:
            "https://t1.uc.ltmcdn.com/images/7/9/5/img_42597_ins_3742764_600.jpg"
        }
      ]
    };
  }
};
</script>

<style>
.contenedor {
  display: grid;
  grid-template-columns: auto auto;
}
.columtri {
  display: grid;
  grid-template-columns: auto auto auto;
} 
</style>