<template>
  <div>
    <h1>Pollo Selccionado</h1>
    <div class="container">
      <div class="row">
        <div v-for="(p,index) of pollo" :key="index" class="col-md-6 col-xs-12">
          <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
<<<<<<< HEAD
                <b-card-img v-bind:src="p.portada" height="250px" style="padding:10px" class="rounded-0"></b-card-img>
=======
                <b-card-img v-bind:src="p.imagen" class="rounded-circle"></b-card-img>
>>>>>>> 9bb528de4cc4a241433827bf2676c72be52bd926
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="p.titulo">
                  <b-card-text>{{p.descripcion}}</b-card-text>
                  <p>Bs{{p.precio}}</p>
                  <a href="#" class="btn btn-dark">Agregar al Carrito</a>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
          <br />
        </div>
      </div>
    </div>
    <h1>Pollo Trozado</h1>
    <div class="container">
      <div class="row">
        <div v-for="(p2,index) of pollo2" :key="index" class="col-md-4 col-sm-6 col-xs-12">
          <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="p2.imagen" class="rounded-circle"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="p2.titulo">
                  <b-card-text>{{p2.descripcion}}</b-card-text>
                  <p>Bs{{p2.precio}}</p>
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
      pollo: [
        {
          nombre: "Pollos Enteros",
          descripcion: "kilo",
          precio: 15,
          portada:"https://i1.wp.com/lopezdoriga.com/wp-content/uploads/2018/10/pollo-crudo.jpg?resize=980%2C550&ssl=1"
        },
        {
          nombre: "Tipos de Pollos",
          descripcion: "Kilo",
          precio: 15,
          portada:"https://laverdadnoticias.com/__export/1559826653244/sites/laverdad/img/2019/06/06/nota_1.jpg_1834093470.jpg"
        }
      ],
      pollo2: [
        {
          nombre: "Alitas",
          descripcion: "kilo",
          precio: 18,
          portada: "https://st.depositphotos.com/1004373/2648/i/950/depositphotos_26488953-stock-photo-raw-chicken-wings.jpg"
        },
        {
          nombre: "Piernas",
          descripcion: "kilo",
          precio: 18,
          portada: "https://image.freepik.com/foto-gratis/partes-pollo-crudo-diferentes-ingredientes_23-2148189854.jpg"
        },
        {
          nombre: "Pecho",
          descripcion: "kilo",
          precio: 18,
          portada: "https://mejorconsalud.com/wp-content/uploads/2018/07/pechugas-pollo-500x334.jpg"
        },
        {
          nombre: "Carne Molida de Pollo",
          descripcion: "kilo",
          precio: 22,
          portada: "https://marcianosmx.com/wp-content/uploads/2011/08/4e075a8bb93795700700000a_ground-turkey-CORT.jpg"
        },
        {
          nombre: "Filete de Pollo",
          descripcion: "kilo",
          precio: 20,
          portada: "https://laverdadnoticias.com/export/sites/laverdad/img/2019/06/06/nota_01.jpg_2073374873.jpg"
        },
        {
          nombre: "Menudencia",
          descripcion: "kilo",
          precio: 7,
          portada: "https://www.polloandino.com/uploads/productos/5c58ac0993b4a755504949.png"
        },
      ]
    };
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
</style>
