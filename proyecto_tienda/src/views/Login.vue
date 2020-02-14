<template>
  <div class="contenedor">
    <div id="login" class="login col-lg-4 offset-lg-4 col-md-6 offset-md-3">
      <b-container class="bv-example-row">
        <form @submit.prevent="login">
          <h2 class="text-center">Iniciar Sesion</h2>
          <img
            class="img-fluid mx-auto d-block rounded"
            :src="require('../assets/logo-toro.png')"
            width="230px"
          />
          <div class="form-group">
            <label for="correo">Correo</label>
            <input
              v-model="usuario"
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
              v-model="contraseña"
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
            <b-button @click="authCuentaFacebook" class="bg-danger">
              <i class="fab fa-facebook"></i> Ingresa con Facebook
            </b-button>
          </div>
          <br />
          <div>
            <b-button class="bg-danger" @click="authCuentaGoogle">
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
import firebase from "firebase/app";
export default {
  data() {
    return {
      usuario: "",
      contraseña: ""
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.usuario, this.contraseña)
        .then(user => {
          this.$router.replace("administrador");
        })
        .catch(err => {
          this.error = err.message;
        });
    },
    authCuentaFacebook() {
      const provider = new firebase.auth.FacebookAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
          var token = result.credential.accessToken;
          var user = result.user 
          this.$router.replace("administrador");
          // ...
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
    },
    authCuentaGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
          var token = result.credential.accessToken;
          this.$router.replace("administrador");
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
    }
  }
};
</script>

<style>
.contenedor {
  background: rgba(30, 214, 168, 0.671);
}
</style>