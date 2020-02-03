<template>
  <div>
    <h1>Pollo Selccionado</h1>
    <div class="container">
      <div class="row">
        <div v-for="(p,index) of pollo" :key="index" class="col-md-6 col-xs-12">
          <b-card no-body class="overflow-hidden efc" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img v-bind:src="p.portada" class="rounded-circle"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="p.nombre">
                  <b-card-text>{{p.descripcion}}</b-card-text>
                  <h3>Bs{{p.precio}}</h3>
                  <div>
                    <b-button
                      :class="p.estado? null : 'collapsed btn-dark'"
                      :aria-expanded="p.estado ? 'true' : 'false'"
                      aria-controls="collapse-4"
                      @click="p.estado = !p.estado"
                    >
                      Agregar
                      <i class="fas fa-cart-arrow-down text-light"></i>
                    </b-button>
                    <b-collapse id="collapse-4" v-model="p.estado" class="mt-2">
                      <b-card>I should start open!</b-card>
                      <select name="" id="">
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>

                      </select>
                    </b-collapse>
                  </div>
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
                <b-card-img v-bind:src="p2.portada" class="rounded-circle"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body v-bind:title="p2.nombre">
                  <b-card-text>{{p2.descripcion}}</b-card-text>
                  <h3>Bs{{p2.precio}}</h3>
                  <a href="#" class="btn btn-dark">Agregar al Carrito</a>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
          <br />
        </div>
      </div>
    </div>
    <div>
      <h3>{{contador}}</h3>
      <button @click="contador++">+</button>
      <button @click="contador--">-</button>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    
  },
  data() {
    return {
      contador: 0,
      pollo: [
        {
          nombre: "Pollos Enteros",
          descripcion: "kilo",
          precio: 15,
          portada:
            "https://i1.wp.com/lopezdoriga.com/wp-content/uploads/2018/10/pollo-crudo.jpg?resize=980%2C550&ssl=1",
          estado: false
        },
        {
          nombre: "Tipos de Pollos",
          descripcion: "Kilo",
          precio: 15,
          portada:
            "https://laverdadnoticias.com/__export/1559826653244/sites/laverdad/img/2019/06/06/nota_1.jpg_1834093470.jpg",
          estado: false
        }
      ],
      pollo2: [
        {
          nombre: "Alitas",
          descripcion: "kilo",
          precio: 18,
          portada:
            "https://st.depositphotos.com/1004373/2648/i/950/depositphotos_26488953-stock-photo-raw-chicken-wings.jpg",
          estado: false
        },
        {
          nombre: "Piernas",
          descripcion: "kilo",
          precio: 18,
          portada:
            "https://image.freepik.com/foto-gratis/partes-pollo-crudo-diferentes-ingredientes_23-2148189854.jpg",
          estado: false
        },
        {
          nombre: "Pecho",
          descripcion: "kilo",
          precio: 18,
          portada:
            "https://mejorconsalud.com/wp-content/uploads/2018/07/pechugas-pollo-500x334.jpg",
          estado: false
        },
        {
          nombre: "Carne Molida de Pollo",
          descripcion: "kilo",
          precio: 22,
          portada:
            "https://marcianosmx.com/wp-content/uploads/2011/08/4e075a8bb93795700700000a_ground-turkey-CORT.jpg",
          estado: false
        },
        {
          nombre: "Filete de Pollo",
          descripcion: "kilo",
          precio: 20,
          portada:
            "https://laverdadnoticias.com/export/sites/laverdad/img/2019/06/06/nota_01.jpg_2073374873.jpg",
          estado: false
        },
        {
          nombre: "Menudencia",
          descripcion: "kilo",
          precio: 7,
          portada:
            "https://www.polloandino.com/uploads/productos/5c58ac0993b4a755504949.png",
          estado: false
        }
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
