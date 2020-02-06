<template>
  <div>
    <h1>Lista de Productos</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Variedad</th>
          <th scope="col">Nombre</th>
          <th scope="col">Descripcion</th>
          <th scope="col">Precio</th>
          <th scope="col">Portada</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(p,index) of producto" :key="index">
          <th>{{p.variedad}}</th>
          <th>{{p.nombre}}</th>
          <td>{{p.descripcion}}</td>
          <td>{{p.precio}}</td>
          <td>{{p.portada}}</td>
          <button @click="deleteProducto(p)">Eliminar</button>
          <button @click="edit(p)">Editar</button>
        </tr>
      </tbody>
    </table>
    <form @submit="postProducto" v-if="!show">
      Variedad:
      <input type="text" required v-model="newProduc.variedad" />
      <br />Nombre:
      <input type="text" required v-model="newProduc.nombre" />
      <br />Descripcion:
      <input type="text" required v-model="newProduc.descripcion" />
      <br />Precio
      <input type="text" required v-model="newProduc.precio" />
      <br />Portada
      <input type="text" required v-model="newProduc.portada" />
      <br />
      <button type="submit" class="btn btn-primary">Agregar</button>
    </form>
    <form @submit="putProducto(editado)" v-if="show">
      Variedad:
      <input type="text" v-model="editado.variedad" />
      <br />Nombre:
      <input type="text" v-model="editado.nombre" />
      <br />Descripcion:
      <input type="text" v-model="editado.descripcion" />
      <br />Precio
      <input type="text" v-model="editado.precio" />
      <br />Portada
      <input type="text" v-model="editado.portada" />
      <br />
      <button type="submit" class="btn btn-warning">Editar</button>
      <button @click="show=false" class="btn btn-danger">Cancelar</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      producto: [],
      newProduc: {
        variedad: "",
        nombre: "",
        descripcion: "",
        precio: 0,
        portada: ""
      },
      editado: {},
      show: false
    };
  },
  mounted() {
    this.getProducto();
  },
  methods: {
    getProducto() {
      axios
        .get("http://localhost:3500/api/producto")
        .then(respuesta => {
          console.log(respuesta.data);
          this.producto = respuesta.data;
          console.log(this.producto);
        })
        .catch(error => console.log(error));
    },
    postProducto() {
      axios
        .post("http://localhost:3500/api/nueva-producto", this.newProduc)
        .then(response => {
          console.log(response.data);
          this.getProducto();
        })
        .catch(error => console.log(error));
    },
    deleteProducto(t) {
      let url = "http://localhost:3500/api/producto/" + t._id;
      axios
        .delete(url)
        .then(response => {})
        .catch(error => console.log(error));
    },
    edit(t) {
      this.show = true;
      console.log(t._id);
      var url = "http://localhost:3500/api/producto/" + t._id;
      axios.get(url).then(response => {
        this.editado = response.data;
      });
    },
    putProducto(t) {
      var url = "http://localhost:3500/api/producto/" + t._id;
      axios
        .put(url, t)
        .then(response => {
          const index = this.producto.findIndex(
            i => i._id === response.data._id
          );
          this.producto[index].variedad = response.data.variedad;
          this.producto[index].nombre = response.data.nombre;
          this.producto[index].descripcion = response.data.descripcion;
          this.producto[index].precio = response.data.precio;
          this.producto[index].portada = response.data.portada;
          this.editado = {};
          console.log(this.producto);
        })
        .catch(error => console.log(error));
      this.show = false;
    }
  }
};
</script>

<style>
</style>