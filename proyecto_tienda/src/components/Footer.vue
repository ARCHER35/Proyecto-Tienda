<template>
  <footer class="fondo">
    <div class="container-fluid text-center text-md-left col-sm">
      <div class="row text-light" style="padding:15px">
        <div class="col-md-3 mt-md-0 mt-3">
          <center>
            <b-img :src="require('../assets/logo-toro.png')" height="100px"></b-img>
          </center>
          <p>Pedidos por Mayor y Menor Horarios de Atencion 6:00 am a 17:00 pm</p>
        </div>
        <hr class="clearfix w-100 d-md-none pb-3" />
        <div class="col-md-4">
          <h5 class="text-uppercase">Frial Cris</h5>
          <ul class="list-unstyled">
            <li class="col">
              <p class="text-light">Direccion: Capitan Victor Ustaris Km 4 1/2</p>
            </li>
          </ul>
          <div class="footer-copyright text-center py-3 text-light">
      © 2020 Copyright:
      <p href="#">Derechos Reservados</p>
    </div>
        </div>
        <div class="col-md-4 mb-md-6 mb-6">
          <h5 class="text-uppercase">Contactanos Por</h5>
          <ul class="list-unstyled">
            <li>
              <b-img :src="require('../assets/Facebook-Icon_34072.png')" height="50px" width="50px"></b-img>
              <a
                href="https://www.facebook.com/cristina.zenteno.1675?epa=SEARCH_BOX"
                class="text-primary"
              >Facebook <i class="fas fa-cart-arrow-down text-primary"></i></a>
            </li>
            <li>
              <b-img :src="require('../assets/Whatsapp-Icon_33936.png')" height="50px" width="50px"></b-img>
              <a class="text-light">
                72783477
                <i class="fas fa-cart-arrow-down text-primary"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
.fondo {
  background: black
}
</style>