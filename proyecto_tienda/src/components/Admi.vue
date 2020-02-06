<template>
  <div>
    <h1>Bienvenido a la Vista Administrador</h1>
    <div class="container">
      <div class="row">
        <h1>Productos</h1>
        <div>
          <b-card class="carta">
            <b-tabs card>
              <b-tab title="Carne" active>
                <b-card-text>
                  <div align="left">
                    <b-button v-b-modal.modal-1 class="bg-primary">
                      <b-spinner class="align-middle"></b-spinner>
                      <strong class="text-dark">Agregar..</strong>
                    </b-button>
                    <b-modal id="modal-1" title="BootstrapVue">
                      <p class="my-4">Agregar Producto</p>
                    </b-modal>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="Pollo">
                <b-card-text>
                  <h1>text</h1>
                </b-card-text>
              </b-tab>
              <b-tab title="Huevo" active>
                <b-card-text>Tab contents 1</b-card-text>
              </b-tab>
              <b-tab title="Arroz" active>
                <b-card-text>Tab contents 1</b-card-text>
              </b-tab>
              <b-tab title="Azucar" active>
                <b-card-text>Tab contents 1</b-card-text>
              </b-tab>
              <b-tab title="Fideo" active>
                <b-card-text>Tab contents 1</b-card-text>
              </b-tab>
              <b-tab title="Sal" active>
                <b-card-text>Tab contents 1</b-card-text>
              </b-tab>
              <b-tab title="Aceite" active>
                <b-card-text>Tab contents 1</b-card-text>
              </b-tab>
              <b-tab title="Aderezos" active>
                <b-card-text>Tab contents 1</b-card-text>
              </b-tab>
              <b-tab title="Otros" active>
                <b-card-text>Tab contents 1</b-card-text>
              </b-tab>
              <b-tab title="Enbutidos" active>
                <b-card-text>Tab contents 1</b-card-text>
              </b-tab>
              <b-tab title="Condimentos" active>
                <b-card-text>Tab contents 1</b-card-text>
              </b-tab>
              <b-tab title="Lacteos" active>
                <b-card-text>Tab contents 1</b-card-text>
              </b-tab>
              <b-tab title="Contactos" active>
                <b-card-text>Contactos</b-card-text>
              </b-tab>
            </b-tabs>
          </b-card>
          <br />
        </div>
      </div>
    </div>
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Precio</th>
            <th scope="col">Portada</th>
          </tr>
        </thead>
        <tbody v-for="(c,index) of carne" :key="index">
          <tr>
            <th scope="row">{{c.nombre}}</th>
            <td>{{c.descripcion}}</td>
            <td>{{c.precio}}</td>
            <td>{{c.portada}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      nombre: "",
      carne: []
    };
  },
  mounted() {
    this.getCarne();
  },
  methods: {
    getCarne() {
      axios
        .get("http://localhost:4000/api/carne")
        .then(res => {
          this.carne = res.data;
        })
        .cath(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style>
.carta {
  background: rgba(38, 209, 231, 0.26);
}
</style>