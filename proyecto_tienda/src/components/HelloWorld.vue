<template>
  <div class="hello">
      <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-interval="10000">
            <img src="https://blog.aulaformativa.com/wp-content/uploads/2014/03/creacion-de-paginas-web-blanco-como-fondo.jpg" class="d-block w-100 h-350px" height="350px" alt="...">
          </div>
          <div class="carousel-item" data-interval="2000">
            <img src="https://previews.123rf.com/images/povareshka3/povareshka31706/povareshka3170600093/80699491-composici%C3%B3n-de-flores-flores-de-lila-sobre-fondo-blanco-vista-plana.jpg" class="d-block w-100 h-350px" height="350px">
          </div>
          <div class="carousel-item">
            <img src="https://blog.aulaformativa.com/wp-content/uploads/2014/03/creacion-de-paginas-web-blanco-como-fondo.jpg" class="d-block w-100 h-350px" height="350px">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
        <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
        </a>
    </div>
    
  <div class="container" style="padding:15px">
    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body title="Horizontal Card">
            <b-card-text>
              This is a wider card with supporting text as a natural lead-in to additional content.
              This content is a little bit longer.
            </b-card-text>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  components: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
