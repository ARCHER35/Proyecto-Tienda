<template>
  <div class="contenedor">
    <div id="login" class="login col-lg-4 offset-lg-4 col-md-6 offset-md-3">
      <b-container class="bv-example-row">
        <form>
          <h2 class="text-center">Iniciar Sesion</h2>
          <img
            class="img-fluid mx-auto d-block rounded"
            :src="require('../assets/logo-toro.png')"
            width="230px"
          />
          <div class="form-group">
            <label for="correo">Correo</label>
            <input
              id="correo"
              name="correo"
              class="form-control"
              type="email"
              placeholder="Correo electrónico"
            />
          </div>
          <div class="form-group">
            <label for="palabraSecreta">Contraseña</label>
            <input
              id="palabraSecreta"
              name="palabraSecreta"
              class="form-control"
              type="password"
              placeholder="Contraseña"
            />
          </div>
          <button type="submit" class="btn btn-primary mb-2">Enviar</button>
          <br />
          <a href="#">Contraseña olvidada</a>
          <br />
          <div>
            <b-button class="bg-danger">
              <i class="fab fa-facebook"></i> Ingresa con Facebook
            </b-button>
          </div>
          <br />
          <div>
            <b-button class="bg-danger">
              <i class="fab fa-google"></i> Ingresa con Google
            </b-button>
          </div>
          <br />
        </form>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.contenedor {
  background: rgba(30, 214, 168, 0.671);
}
</style>