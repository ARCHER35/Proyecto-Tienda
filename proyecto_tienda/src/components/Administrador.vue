<template>
  <div>
    <div class="container" align=right>
      <button @click="salir()" class="btn btn-danger rounded-pill">Salir de la Vista</button>
    </div>
    <h1>Bienvenido a la Vista Administrador</h1>
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">PRODUCTOS</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Carne</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" @click="carne()">Carne</a>
                <a class="dropdown-item" @click="variedad()">Variedad</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Pollo</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" @click="pollo1()">Pollo Trozado</a>
                <a class="dropdown-item" @click="pollo2()">Pollo Seleccionado</a>
                <a class="dropdown-item" @click="huevo()">Huevo</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Abarrotes</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" @click="arroz()">Arroz</a>
                <a class="dropdown-item" @click="azucar()">Azucar</a>
                <a class="dropdown-item" @click="sal()">Sal</a>
                <a class="dropdown-item" @click="salsasoya()">Salsasaya</a>
                <a class="dropdown-item" @click="carbon()">Carbon</a>
                <a class="dropdown-item" @click="servilletas()">Servilletas</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Fideo</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" @click="fideos1()">Fideo Famosa</a>
                <a class="dropdown-item" @click="fiedo2()">Fideo Lazzaroni</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Aceite</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" @click="acetie1()">Aceite Fino</a>
                <a class="dropdown-item" @click="acetie2()">Aceite Agranel</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Aderesos</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" @click="adereso1()">Mayonesa</a>
                <a class="dropdown-item" @click="adereso2()">Ketchup</a>
                <a class="dropdown-item" @click="adereso3()">Mostaza</a>
                <a class="dropdown-item" @click="adereso4()">Otros</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Embutidos</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" @click="chorizo()">Chorizo</a>
                <a class="dropdown-item" @click="mortadela()">Mortadela</a>
                <a class="dropdown-item" @click="pasta()">Pasta</a>
                <a class="dropdown-item" @click="salsasoya()">Salsasaya</a>
                <a class="dropdown-item" @click="carbon()">Carbon</a>
                <a class="dropdown-item" @click="servilletas()">Servilletas</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Condimentos</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" @click="condimentos()">Condimentos</a>
                <a class="dropdown-item" @click="aji()">Aji</a>
                <a class="dropdown-item" @click="ajo()">Ajo</a>
                <a class="dropdown-item" @click="canela()">Canela</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Lacteo</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" @click="leche()">Leche</a>
                <a class="dropdown-item" @click="queso()">Queso</a>
              </div>
            </li>
          </ul>
        </div>
        <button
          type="button"
          class="btn btn-primary rounded-pill"
          data-toggle="modal"
          data-target="#basicExampleModal"
        >Agregar Producto 2.0</button>

        <!-- Modal -->
        <div
          class="modal fade"
          id="basicExampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <b-card>
                  <h3>Agregar Producto</h3>
                  <form @submit="postProducto" v-if="!show">
                    Variedad:
                    <input
                      type="text"
                      required
                      v-model="newProduc.variedad"
                      class="form-control"
                    />
                    <br />Nombre:
                    <input
                      type="text"
                      required
                      v-model="newProduc.nombre"
                      class="form-control"
                    />
                    <br />Descripcion:
                    <input
                      type="text"
                      required
                      v-model="newProduc.descripcion"
                      class="form-control"
                    />
                    <br />Portada
                    <input
                      type="text"
                      required
                      v-model="newProduc.portada"
                      class="form-control"
                    />
                    <br />Precio
                    <input
                      type="text"
                      required
                      v-model="newProduc.precio"
                      class="form-control"
                    />
                    <br />
                    <button type="submit" class="btn btn-primary">Agregar</button>
                  </form>
                </b-card>
              </div>
              <div class="modal-footer"></div>
            </div>
          </div>
        </div>
      </nav>
      <br />
    </div>
    <div class="container">
      <div class="row">
        <div v-for="(p,index) of newobjeto" :key="index" class="col-md-4">
          <b-card
            v-bind:title="p.nombre"
            v-bind:img-src="require('../assets/'+p.portada)"
            img-height="220px"
            img-width="100px"
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>{{p.descripcion}}</b-card-text>
            <h3>Bs {{p.precio}}</h3>
            <div class="row">
              <div class="col-md-6">
                <b-button
                  :class="p.estado ? null : 'collapsed'"
                  :aria-expanded="p.estado ? 'true' : 'false'"
                  aria-controls="collapse-4"
                  @click="p.estado = !p.estado"
                >Editarlo</b-button>
              </div>
              <b-collapse id="collapse-4" v-model="p.estado" class="mt-2">
                <b-card>
                  <button class="btn btn-warning" @click="edit(p)">Editar</button>
                  <form @submit="putProducto(editado)">
                    Variedad:
                    <input type="text" v-model="editado.variedad" />
                    <br />Nombre:
                    <input type="text" v-model="editado.nombre" />
                    <br />Descripcion:
                    <input type="text" v-model="editado.descripcion" />
                    <br />Portada
                    <input type="text" v-model="editado.portada" />
                    <br />Precio
                    <input type="text" v-model="editado.precio" />
                    <br />
                    <button
                      type="submit"
                      class="btn btn-primary"
                      @click="p.estado=false"
                    >Enviar Cambios</button>
                    <button @click="p.estado=false" class="btn btn-success">Cancelar</button>
                  </form>
                </b-card>
              </b-collapse>

              <div class="col-md-6">
                <button class="btn btn-danger" @click="deleteProducto(p)" align="rigth">Eliminar</button>
              </div>
            </div>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import firebase from 'firebase'
export default {
  data() {
    return {
      visible: true,
      newobjeto: [],
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
    salir(){
      firebase.auth().signOut().then(() => this.$router.replace('login'))
    },
    carne() {
      console.log(this.producto);
      let prueba = [];
      this.newobjeto = this.producto;
      this.newobjeto = this.newobjeto.filter(p => {
        return p.variedad === "CARNE";
      });
      console.log(prueba);
    },
    variedad() {
      console.log(this.producto);
      let prueba = [];
      this.newobjeto = this.producto;
      this.newobjeto = this.newobjeto.filter(p => {
        return p.variedad === "VARIEDAD";
      });
      console.log(prueba);
    },
    pollo1() {
      this.newobjeto = this.producto;
      this.newobjeto = this.newobjeto.filter(p => {
        return p.variedad == "POLLO TROZADO";
      });
    },
    pollo2() {
      this.newobjeto = this.producto;
      this.newobjeto = this.newobjeto.filter(p => {
        return p.variedad == "POLLO SELECCIONADO";
      });
    },
    huevo() {
      this.newobjeto = this.producto;
      this.newobjeto = this.newobjeto.filter(p => {
        return p.variedad == "HUEVO";
      });
    },
    arroz() {
      this.newobjeto = this.producto;
      this.newobjeto = this.newobjeto.filter(p => {
        return p.variedad == "ARROZ";
      });
    },
    azucar() {
      this.newobjeto = this.producto;
      this.newobjeto = this.newobjeto.filter(p => {
        return p.variedad == "AZUCAR";
      });
    },
    fideos1() {
      this.newobjeto = this.producto;
      this.newobjeto = this.newobjeto.filter(p => {
        return p.variedad == "FIDEOS FAMOSA";
      });
    },
    fiedo2() {
      this.newobjeto = this.producto;
      this.newobjeto = this.newobjeto.filter(p => {
        return p.variedad == "FIDEOS LAZZARONI";
      });
    },
    sal() {
      this.newobjeto = this.producto;
      this.newobjeto = this.newobjeto.filter(p => {
        return p.variedad == "SAL";
      });
    },
    acetie1() {
      this.newobjeto = this.producto;
      this.newobjeto = this.newobjeto.filter(p => {
        return p.variedad == "ACEITE FINO";
      });
    },
    acetie2() {
      this.newobjeto = this.producto;
      this.newobjeto = this.newobjeto.filter(p => {
        return p.variedad == "ACEITE AGRANEL";
      });
    },
    adereso1() {
      this.newobjeto = this.producto;
      this.newobjeto = this.newobjeto.filter(p => {
        return p.variedad == "MAYONESA";
      });
    },
    adereso2() {
      this.newobjeto = this.producto;
      this.newobjeto = this.newobjeto.filter(p => {
        return p.variedad == "KETCHUP";
      });
    },
    adereso3() {
      this.newobjeto = this.producto;
      this.newobjeto = this.newobjeto.filter(p => {
        return p.variedad == "MOSTAZA";
      });
    },

    adereso4() {
      this.newobjeto = this.producto;
      this.newobjeto = this.newobjeto.filter(p => {
        return p.variedad == "OTROS ADEREZOS";
      });
    },
    salsasoya() {
      this.newobjeto = this.producto;
      this.newobjeto = this.newobjeto.filter(p => {
        return p.variedad == "SALSA SOYA";
      });
    },
    limonero() {
      this.newobjeto = this.producto;
      this.newobjeto = this.newobjeto.filter(p => {
        return p.variedad == "HARRY EL LIMONERO";
      });
    },
    vinagres() {
      this.newobjeto = this.producto;
      this.newobjeto = this.newobjeto.filter(p => {
        return p.variedad == "VINAGRE";
      });
    },

    carbon() {
      this.newobjeto = this.producto;
      this.newobjeto = this.newobjeto.filter(p => {
        return p.variedad == "CARBON";
      });
    },
    servilletas() {
      this.newobjeto = this.producto;
      this.newobjeto = this.newobjeto.filter(p => {
        return p.variedad == "SERVILLETAS";
      });
    },
    chorizo() {
      this.newobjeto = this.producto;
      this.newobjeto = this.newobjeto.filter(p => {
        return p.variedad == "CHORIZO";
      });
    },
    mortadela() {
      this.newobjeto = this.producto;
      this.newobjeto = this.newobjeto.filter(p => {
        return p.variedad == "MORTADELA";
      });
    },
    pasta() {
      this.newobjeto = this.producto;
      this.newobjeto = this.newobjeto.filter(p => {
        return p.variedad == "PASTA";
      });
    },
    condimentos() {
      this.newobjeto = this.producto;
      this.newobjeto = this.newobjeto.filter(p => {
        return p.variedad == "CONDIMENTOS";
      });
    },
    aji() {
      this.newobjeto = this.producto;
      this.newobjeto = this.newobjeto.filter(p => {
        return p.variedad == "AJI";
      });
    },
    ajo() {
      this.newobjeto = this.producto;
      this.newobjeto = this.newobjeto.filter(p => {
        return p.variedad == "AJO";
      });
    },
    canela() {
      this.newobjeto = this.producto;
      this.newobjeto = this.newobjeto.filter(p => {
        return p.variedad == "CANELA";
      });
    },
    leche() {
      this.newobjeto = this.producto;
      this.newobjeto = this.newobjeto.filter(p => {
        return p.variedad == "LECHE";
      });
    },
    queso() {
      this.newobjeto = this.producto;
      this.newobjeto = this.newobjeto.filter(p => {
        return p.variedad == "QUESO";
      });
    },

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
.modalDialog {
  position: fixed;
  font-family: Arial, Helvetica, sans-serif;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 99999;
  opacity: 0;
  -webkit-transition: opacity 400ms ease-in;
  -moz-transition: opacity 400ms ease-in;
  transition: opacity 400ms ease-in;
  pointer-events: none;
}
.modalDialog:target {
  opacity: 1;
  pointer-events: auto;
}
.modalDialog > div {
  width: 70%;
  position: relative;
  margin: 10% auto;
  padding: 5px 20px 13px 20px;
  border-radius: 10px;
  background: #fff;
  background: -moz-linear-gradient(#fff, #999);
  background: -webkit-linear-gradient(#fff, #999);
  background: -o-linear-gradient(#fff, #999);
  -webkit-transition: opacity 400ms ease-in;
  -moz-transition: opacity 400ms ease-in;
  transition: opacity 400ms ease-in;
}
.close {
  background: #606061;
  color: #ffffff;
  line-height: 25px;
  position: relative;
  right: -12px;
  text-align: center;
  top: -10px;
  width: 24px;
  text-decoration: none;
  font-weight: bold;
  -webkit-border-radius: 12px;
  -moz-border-radius: 12px;
  border-radius: 12px;
  -moz-box-shadow: 1px 1px 3px #000;
  -webkit-box-shadow: 1px 1px 3px #000;
  box-shadow: 1px 1px 3px #000;
}
.close:hover {
  background: #00d9ff;
}
.tabla {
  font-family: sans-serif;
}
.tabla h3 {
  background: rgb(255, 255, 255);
}
.inp {
  padding: 10px;
  border-bottom: 2px solid #ff851b;
  width: 60%;
  font-size: 14px;
  padding: 12px;
  margin-bottom: 20px;
  border-radius: 2px;
}
.media-body h2 {
  text-align: center;
}
</style>