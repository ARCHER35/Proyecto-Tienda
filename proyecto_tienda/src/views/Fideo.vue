<template>
  <div>
    <h1>Fideos Famosa</h1>
    <div class="container">
      <div class="row">
        <div v-for="(f,index) of famosa" :key="index" class="col-md-6">
          <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="f.portada" class="rounded-circle"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="f.nombre"></b-card-body>
                <b-card-text>{{f.descripcion}}</b-card-text>
                <h3>Bs{{f.precio}}</h3>
                <a href="#" class="btn btn-dark">Agregar al Carrito</a>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>
    </div>
    <h1>Fideos Lazzaroni</h1>
    <div class="container">
      <div class="row">
        <div v-for="(l,index) of lazzaroni" :key="index" class="col-md-6">
          <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="l.portada" height="250px" class="rounded-circle"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="l.nombre"></b-card-body>
                <b-card-text>{{l.descripcion}}</b-card-text>
                <h3>Bs{{l.precio}}</h3>
                <a href="#" class="btn btn-dark">Agregar al Carrito</a>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      famosa: [
        {
          nombre: "Fideo Anillito",
          descripcion: "Unidad",
          precio: 5,
          portada: "http://famosa.com.bo/web/wp-content/uploads/2015/05/111.jpg"
        },
        {
          nombre: "Fideo Codo Mediano Rigatti",
          descripcion: "Unidad",
          precio: 5,
          portada: "http://famosa.com.bo/web/wp-content/uploads/2015/05/122.jpg"
        },
        {
          nombre: "Fideo Codo Grande Rigatti",
          descripcion: "Unidad",
          precio: 5,
          portada: "http://famosa.com.bo/web/wp-content/uploads/2015/05/13.jpg"
        },
        {
          nombre: "Fideo Tirabuzon",
          descripcion: "Unidad",
          precio: 5,
          portada: "http://famosa.com.bo/web/wp-content/uploads/2015/05/151.jpg"
        },
        {
          nombre: "Fideo Espagueti",
          descripcion: "Unidad",
          precio: 5,
          portada: "http://famosa.com.bo/web/wp-content/uploads/2015/05/301.jpg"
        },
        {
          nombre: "Fideo Corbatitas",
          descripcion: "Unidad",
          precio: 5,
          portada: "http://famosa.com.bo/web/wp-content/uploads/2015/05/341.jpg"
        },
        {
          nombre: "Fideo Letritas",
          descripcion: "Unidad",
          precio: 5,
          portada: "http://famosa.com.bo/web/wp-content/uploads/2015/05/611.jpg"
        }
      ],
      lazzaroni: [
        {
          nombre: "Espageti Lazzaroni",
          descripcion: "3 Unidades",
          precio: 10,
          portada:
            "http://vcie.produccion.gob.bo/siexco/web/bundles/comunes/UieRuex/fotos/1023.a.2.jpg"
        },
        {
          nombre: "Fideo Aritos",
          descripcion: "Unidad",
          precio: 5,
          portada:
            "http://vcie.produccion.gob.bo/siexco/web/bundles/comunes/UieRuex/fotos/1023.a.1.jpg"
        },
        {
          nombre: "Fideo Moño",
          descripcion: "Unidad",
          precio: 5,
          portada:
            "https://www.multimerc.com/wp-content/uploads/2019/08/08e53708-98a2-4eaf-804b-d050ef6933cc-2.jpg"
        },
        {
          nombre: "Fideos Nido",
          descripcion: "Unidad",
          precio: 5,
          portada: "http://www.actiweb.es/lazzaroni/imagen5.jpg?1205142200"
        }
      ]
    };
  }
};
</script>

<style>
.card {
  margin-bottom: 20px;
}
.efc:hover {
  background: #a0e4ff;
  color: #1d272b;
  transition: all 0.55s;
  transform: translateY(-15px);
  box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
}
</style>