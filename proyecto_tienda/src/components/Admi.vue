
<template>
  <div>
    <h1>Bienvenido a la Vista Administrador</h1>
    <div class="container">
      <div class="row">
        <h1>Productos</h1>
        <div class="col-xs-12">
          <b-card class="carta">
            <b-tabs card>
              <b-tab title="Carne" active>
                <b-card-text>
                  <!--Empieza aqui el boton del modal><-->
                  <div align="right" class="col-xs-12">
                    <a href="#openModal" class="btn btn-primary">
                      <strong class="text-light">
                        <b-spinner class="align-middle"></b-spinner>Agregar..
                      </strong>
                    </a>
                    <div id="openModal" class="modalDialog col-xs-12">
                      <div class="tabla col-xs-12 bg-info">
                        <a href="#" title="Close" class="close">X</a>
                        <h3 align="center">Agregar Producto</h3>
                        <div align="center">
                          <img
                            :src="require('../assets/base_datos.jpg')"
                            height="180px"
                            width="150px"
                            class="col-xs-12"
                            alt
                          />
                        </div>
                        <br />
                        <div align="center">
                          <input type="text" placeholder="Nombre" class="inp" />
                          <input type="text" placeholder="Descripcion" class="inp" />
                          <input type="number" placeholder="Precio" class="inp" />
                          <input type="file" placeholder="Portada" class="inp col btb btn-success" />
                          <b-button class="bg-primary">Enviar</b-button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="my-4 col-xs-12">
                    <ul class="list-unstyled col-xs-12">
                      <li class="col-xs-12">
                        <th>
                          <button class="btn btn-warning">Editar</button>
                        </th>
                        <th>
                          <button class="btn btn-danger">Eliminar</button>
                        </th>
                        <img :src="require('../assets/logo.png')" alt height="200px" />
                        <div class="media-body">
                          <h2>Nombre</h2>
                          <h2>Descripcion</h2>
                          <h2>Precio</h2>
                          <h2>Portada</h2>
                        </div>
                      </li>
                      <li class="my-4 col-xs-12">
                        <td>
                          <button class="btn btn-warning">Editar</button>
                        </td>
                        <td>
                          <button class="btn btn-danger">Eliminar</button>
                        </td>
                        <img :src="require('../assets/logo-toro-2.png')" alt height="200px" />
                        <div class="media-body">
                          <h2>Nombre</h2>
                          <h2>Descripcion</h2>
                          <h2>Precio</h2>
                          <h2>Portada</h2>
                        </div>
                      </li>
                    </ul>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="Pollo">
                <b-card-text>
                  <!--Empieza aqui el boton del modal><-->
                  <div align="right" class="col-xs-12">
                    <a href="#openModal-1" class="btn btn-primary">
                      <strong class="text-light">
                        <b-spinner class="align-middle"></b-spinner>Agregar..
                      </strong>
                    </a>
                    <div id="openModal-1" class="modalDialog col-xs-12">
                      <div class="tabla col-xs-12 bg-info">
                        <a href="#" title="Close" class="close">X</a>
                        <h3 align="center">Agregar Producto</h3>
                        <div align="center">
                          <img
                            :src="require('../assets/base_datos.jpg')"
                            height="180px"
                            width="150px"
                            class="col-xs-12"
                            alt
                          />
                        </div>
                        <br />
                        <div align="center">
                          <input type="text" placeholder="Nombre" class="inp" />
                          <input type="text" placeholder="Descripcion" class="inp" />
                          <input type="number" placeholder="Precio" class="inp" />
                          <input type="file" placeholder="Portada" class="inp col" />
                          <b-button class="bg-primary">Enviar</b-button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="my-4 col-xs-12">
                    <ul class="list-unstyled col-xs-12">
                      <li class="col-xs-12">
                        <th>
                          <button class="btn btn-warning">Editar</button>
                        </th>
                        <th>
                          <button class="btn btn-danger">Eliminar</button>
                        </th>
                        <img :src="require('../assets/logo.png')" alt height="200px" />
                        <div class="media-body">
                          <h2>Nombre</h2>
                          <h2>Descripcion</h2>
                          <h2>Precio</h2>
                          <h2>Portada</h2>
                        </div>
                      </li>
                    </ul>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="Huevo" active class="col-xs-12">
                <b-card-text>
                  <!--Empieza aqui el boton del modal><-->
                  <div align="right" class="col-xs-12">
                    <a href="#openModal-2" class="btn btn-primary">
                      <strong class="text-light">
                        <b-spinner class="align-middle"></b-spinner>Agregar..
                      </strong>
                    </a>
                    <div id="openModal-2" class="modalDialog col-xs-12">
                      <div class="tabla col-xs-12 bg-info">
                        <a href="#" title="Close" class="close">X</a>
                        <h3 align="center">Agregar Producto</h3>
                        <div align="center">
                          <img
                            :src="require('../assets/base_datos.jpg')"
                            height="180px"
                            width="150px"
                            class="col-xs-12"
                            alt
                          />
                        </div>
                        <br />
                        <div align="center">
                          <input type="text" placeholder="Nombre" class="inp" />
                          <input type="text" placeholder="Descripcion" class="inp" />
                          <input type="number" placeholder="Precio" class="inp" />
                          <input type="file" placeholder="Portada" class="inp col" />
                          <b-button class="bg-primary">Enviar</b-button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="my-4 col-xs-12">
                    <ul class="list-unstyled col-xs-12">
                      <li class="col-xs-12">
                        <th>
                          <button class="btn btn-warning">Editar</button>
                        </th>
                        <th>
                          <button class="btn btn-danger">Eliminar</button>
                        </th>
                        <img :src="require('../assets/logo.png')" alt height="200px" />
                        <div class="media-body">
                          <h2>Nombre</h2>
                          <h2>Descripcion</h2>
                          <h2>Precio</h2>
                          <h2>Portada</h2>
                        </div>
                      </li>
                    </ul>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="Arroz" active class="col-xs-12">
                <b-card-text>
                  <!--Empieza aqui el boton del modal><-->
                  <div align="right" class="col-xs-12">
                    <a href="#openModal-3" class="btn btn-primary">
                      <strong class="text-light">
                        <b-spinner class="align-middle"></b-spinner>Agregar..
                      </strong>
                    </a>
                    <div id="openModal-3" class="modalDialog col-xs-12">
                      <div class="tabla col-xs-12 bg-info">
                        <a href="#" title="Close" class="close">X</a>
                        <h3 align="center">Agregar Producto</h3>
                        <div align="center">
                          <img
                            :src="require('../assets/base_datos.jpg')"
                            height="180px"
                            width="150px"
                            class="col-xs-12"
                            alt
                          />
                        </div>
                        <br />
                        <div align="center">
                          <input type="text" placeholder="Nombre" class="inp" />
                          <input type="text" placeholder="Descripcion" class="inp" />
                          <input type="number" placeholder="Precio" class="inp" />
                          <input type="file" placeholder="Portada" class="inp col" />
                          <b-button class="bg-primary">Enviar</b-button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="my-4 col-xs-12">
                    <ul class="list-unstyled col-xs-12">
                      <li class="col-xs-12">
                        <th>
                          <button class="btn btn-warning">Editar</button>
                        </th>
                        <th>
                          <button class="btn btn-danger">Eliminar</button>
                        </th>
                        <img :src="require('../assets/logo.png')" alt height="200px" />
                        <div class="media-body">
                          <h2>Nombre</h2>
                          <h2>Descripcion</h2>
                          <h2>Precio</h2>
                          <h2>Portada</h2>
                        </div>
                      </li>
                    </ul>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="Azucar" active class="col-xs-12">
                <b-card-text>
                  <!--Empieza aqui el boton del modal><-->
                  <div align="right" class="col-xs-12">
                    <a href="#openModal-4" class="btn btn-primary">
                      <strong class="text-light">
                        <b-spinner class="align-middle"></b-spinner>Agregar..
                      </strong>
                    </a>
                    <div id="openModal-4" class="modalDialog col-xs-12">
                      <div class="tabla col-xs-12 bg-info">
                        <a href="#" title="Close" class="close">X</a>
                        <h3 align="center">Agregar Producto</h3>
                        <div align="center">
                          <img
                            :src="require('../assets/base_datos.jpg')"
                            height="180px"
                            width="150px"
                            class="col-xs-12"
                            alt
                          />
                        </div>
                        <br />
                        <div align="center">
                          <input type="text" placeholder="Nombre" class="inp" />
                          <input type="text" placeholder="Descripcion" class="inp" />
                          <input type="number" placeholder="Precio" class="inp" />
                          <input type="file" placeholder="Portada" class="inp col" />
                          <b-button class="bg-primary">Enviar</b-button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="my-4 col-xs-12">
                    <ul class="list-unstyled col-xs-12">
                      <li class="col-xs-12">
                        <th>
                          <button class="btn btn-warning">Editar</button>
                        </th>
                        <th>
                          <button class="btn btn-danger">Eliminar</button>
                        </th>
                        <img :src="require('../assets/logo.png')" alt height="200px" />
                        <div class="media-body">
                          <h2>Nombre</h2>
                          <h2>Descripcion</h2>
                          <h2>Precio</h2>
                          <h2>Portada</h2>
                        </div>
                      </li>
                    </ul>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="Fideo" active class="col-xs-12">
                <b-card-text>
                  <!--Empieza aqui el boton del modal><-->
                  <div align="right" class="col-xs-12">
                    <a href="#openModal-5" class="btn btn-primary">
                      <strong class="text-light">
                        <b-spinner class="align-middle"></b-spinner>Agregar..
                      </strong>
                    </a>
                    <div id="openModal-5" class="modalDialog col-xs-12">
                      <div class="tabla col-xs-12 bg-info">
                        <a href="#" title="Close" class="close">X</a>
                        <h3 align="center">Agregar Producto</h3>
                        <div align="center">
                          <img
                            :src="require('../assets/base_datos.jpg')"
                            height="180px"
                            width="150px"
                            class="col-xs-12"
                            alt
                          />
                        </div>
                        <br />
                        <div align="center">
                          <input type="text" placeholder="Nombre" class="inp" />
                          <input type="text" placeholder="Descripcion" class="inp" />
                          <input type="number" placeholder="Precio" class="inp" />
                          <input type="file" placeholder="Portada" class="inp col" />
                          <b-button class="bg-primary">Enviar</b-button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="my-4 col-xs-12">
                    <ul class="list-unstyled col-xs-12">
                      <li class="col-xs-12">
                        <th>
                          <button class="btn btn-warning">Editar</button>
                        </th>
                        <th>
                          <button class="btn btn-danger">Eliminar</button>
                        </th>
                        <img :src="require('../assets/logo.png')" alt height="200px" />
                        <div class="media-body">
                          <h2>Nombre</h2>
                          <h2>Descripcion</h2>
                          <h2>Precio</h2>
                          <h2>Portada</h2>
                        </div>
                      </li>
                    </ul>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="Sal" active class="col-xs-12">
                <b-card-text>
                  <!--Empieza aqui el boton del modal><-->
                  <div align="right" class="col-xs-12">
                    <a href="#openModal-6" class="btn btn-primary">
                      <strong class="text-light">
                        <b-spinner class="align-middle"></b-spinner>Agregar..
                      </strong>
                    </a>
                    <div id="openModal-6" class="modalDialog col-xs-12">
                      <div class="tabla col-xs-12 bg-info">
                        <a href="#" title="Close" class="close">X</a>
                        <h3 align="center">Agregar Producto</h3>
                        <div align="center">
                          <img
                            :src="require('../assets/base_datos.jpg')"
                            height="180px"
                            width="150px"
                            class="col-xs-12"
                            alt
                          />
                        </div>
                        <br />
                        <div align="center">
                          <input type="text" placeholder="Nombre" class="inp" />
                          <input type="text" placeholder="Descripcion" class="inp" />
                          <input type="number" placeholder="Precio" class="inp" />
                          <input type="file" placeholder="Portada" class="inp col" />
                          <b-button class="bg-primary">Enviar</b-button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="my-4 col-xs-12">
                    <ul class="list-unstyled col-xs-12">
                      <li class="col-xs-12">
                        <th>
                          <button class="btn btn-warning">Editar</button>
                        </th>
                        <th>
                          <button class="btn btn-danger">Eliminar</button>
                        </th>
                        <img :src="require('../assets/logo.png')" alt height="200px" />
                        <div class="media-body">
                          <h2>Nombre</h2>
                          <h2>Descripcion</h2>
                          <h2>Precio</h2>
                          <h2>Portada</h2>
                        </div>
                      </li>
                    </ul>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="Aceite" active class="col-xs-12">
                <b-card-text>
                  <!--Empieza aqui el boton del modal><-->
                  <div align="right" class="col-xs-12">
                    <a href="#openModal-7" class="btn btn-primary">
                      <strong class="text-light">
                        <b-spinner class="align-middle"></b-spinner>Agregar..
                      </strong>
                    </a>
                    <div id="openModal-7" class="modalDialog col-xs-12">
                      <div class="tabla col-xs-12 bg-info">
                        <a href="#" title="Close" class="close">X</a>
                        <h3 align="center">Agregar Producto</h3>
                        <div align="center">
                          <img
                            :src="require('../assets/base_datos.jpg')"
                            height="180px"
                            width="150px"
                            class="col-xs-12"
                            alt
                          />
                        </div>
                        <br />
                        <div align="center">
                          <input type="text" placeholder="Nombre" class="inp" />
                          <input type="text" placeholder="Descripcion" class="inp" />
                          <input type="number" placeholder="Precio" class="inp" />
                          <input type="file" placeholder="Portada" class="inp col" />
                          <b-button class="bg-primary">Enviar</b-button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="my-4 col-xs-12">
                    <ul class="list-unstyled col-xs-12">
                      <li class="col-xs-12">
                        <th>
                          <button class="btn btn-warning">Editar</button>
                        </th>
                        <th>
                          <button class="btn btn-danger">Eliminar</button>
                        </th>
                        <img :src="require('../assets/logo.png')" alt height="200px" />
                        <div class="media-body">
                          <h2>Nombre</h2>
                          <h2>Descripcion</h2>
                          <h2>Precio</h2>
                          <h2>Portada</h2>
                        </div>
                      </li>
                    </ul>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="Aderezos" active class="col-xs-12">
                <b-card-text>
                  <!--Empieza aqui el boton del modal><-->
                  <div align="right" class="col-xs-12">
                    <a href="#openModal-8" class="btn btn-primary">
                      <strong class="text-light">
                        <b-spinner class="align-middle"></b-spinner>Agregar..
                      </strong>
                    </a>
                    <div id="openModal-8" class="modalDialog col-xs-12">
                      <div class="tabla col-xs-12 bg-info">
                        <a href="#" title="Close" class="close">X</a>
                        <h3 align="center">Agregar Producto</h3>
                        <div align="center">
                          <img
                            :src="require('../assets/base_datos.jpg')"
                            height="180px"
                            width="150px"
                            class="col-xs-12"
                            alt
                          />
                        </div>
                        <br />
                        <div align="center">
                          <input type="text" placeholder="Nombre" class="inp" />
                          <input type="text" placeholder="Descripcion" class="inp" />
                          <input type="number" placeholder="Precio" class="inp" />
                          <input type="file" placeholder="Portada" class="inp col" />
                          <b-button class="bg-primary">Enviar</b-button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="my-4 col-xs-12">
                    <ul class="list-unstyled col-xs-12">
                      <li class="col-xs-12">
                        <th>
                          <button class="btn btn-warning">Editar</button>
                        </th>
                        <th>
                          <button class="btn btn-danger">Eliminar</button>
                        </th>
                        <img :src="require('../assets/logo.png')" alt height="200px" />
                        <div class="media-body">
                          <h2>Nombre</h2>
                          <h2>Descripcion</h2>
                          <h2>Precio</h2>
                          <h2>Portada</h2>
                        </div>
                      </li>
                    </ul>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="Otros" active class="col-xs-12">
                <b-card-text>
                  <!--Empieza aqui el boton del modal><-->
                  <div align="right" class="col-xs-12">
                    <a href="#openModal-9" class="btn btn-primary">
                      <strong class="text-light">
                        <b-spinner class="align-middle"></b-spinner>Agregar..
                      </strong>
                    </a>
                    <div id="openModal-9" class="modalDialog col-xs-12">
                      <div class="tabla col-xs-12 bg-info">
                        <a href="#" title="Close" class="close">X</a>
                        <h3 align="center">Agregar Producto</h3>
                        <div align="center">
                          <img
                            :src="require('../assets/base_datos.jpg')"
                            height="180px"
                            width="150px"
                            class="col-xs-12"
                            alt
                          />
                        </div>
                        <br />
                        <div align="center">
                          <input type="text" placeholder="Nombre" class="inp" />
                          <input type="text" placeholder="Descripcion" class="inp" />
                          <input type="number" placeholder="Precio" class="inp" />
                          <input type="file" placeholder="Portada" class="inp col" />
                          <b-button class="bg-primary">Enviar</b-button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="my-4 col-xs-12">
                    <ul class="list-unstyled col-xs-12">
                      <li class="col-xs-12">
                        <th>
                          <button class="btn btn-warning">Editar</button>
                        </th>
                        <th>
                          <button class="btn btn-danger">Eliminar</button>
                        </th>
                        <img :src="require('../assets/logo.png')" alt height="200px" />
                        <div class="media-body">
                          <h2>Nombre</h2>
                          <h2>Descripcion</h2>
                          <h2>Precio</h2>
                          <h2>Portada</h2>
                        </div>
                      </li>
                    </ul>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="Enbutidos" active class="col-xs-12">
                <b-card-text>
                  <!--Empieza aqui el boton del modal><-->
                  <div align="right" class="col-xs-12">
                    <a href="#openModal-10" class="btn btn-primary">
                      <strong class="text-light">
                        <b-spinner class="align-middle"></b-spinner>Agregar..
                      </strong>
                    </a>
                    <div id="openModal-10" class="modalDialog col-xs-12">
                      <div class="tabla col-xs-12 bg-info">
                        <a href="#" title="Close" class="close">X</a>
                        <h3 align="center">Agregar Producto</h3>
                        <div align="center">
                          <img
                            :src="require('../assets/base_datos.jpg')"
                            height="180px"
                            width="150px"
                            class="col-xs-12"
                            alt
                          />
                        </div>
                        <br />
                        <div align="center">
                          <input type="text" placeholder="Nombre" class="inp" />
                          <input type="text" placeholder="Descripcion" class="inp" />
                          <input type="number" placeholder="Precio" class="inp" />
                          <input type="file" placeholder="Portada" class="inp col" />
                          <b-button class="bg-primary">Enviar</b-button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="my-4 col-xs-12">
                    <ul class="list-unstyled col-xs-12">
                      <li class="col-xs-12">
                        <th>
                          <button class="btn btn-warning">Editar</button>
                        </th>
                        <th>
                          <button class="btn btn-danger">Eliminar</button>
                        </th>
                        <img :src="require('../assets/logo.png')" alt height="200px" />
                        <div class="media-body">
                          <h2>Nombre</h2>
                          <h2>Descripcion</h2>
                          <h2>Precio</h2>
                          <h2>Portada</h2>
                        </div>
                      </li>
                    </ul>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="Condimentos" active class="col-xs-12">
                <b-card-text>
                  <!--Empieza aqui el boton del modal><-->
                  <div align="right" class="col-xs-12">
                    <a href="#openModal-11" class="btn btn-primary">
                      <strong class="text-light">
                        <b-spinner class="align-middle"></b-spinner>Agregar..
                      </strong>
                    </a>
                    <div id="openModal-11" class="modalDialog col-xs-12">
                      <div class="tabla col-xs-12 bg-info">
                        <a href="#" title="Close" class="close">X</a>
                        <h3 align="center">Agregar Producto</h3>
                        <div align="center">
                          <img
                            :src="require('../assets/base_datos.jpg')"
                            height="180px"
                            width="150px"
                            class="col-xs-12"
                            alt
                          />
                        </div>
                        <br />
                        <div align="center">
                          <input type="text" placeholder="Nombre" class="inp" />
                          <input type="text" placeholder="Descripcion" class="inp" />
                          <input type="number" placeholder="Precio" class="inp" />
                          <input type="file" placeholder="Portada" class="inp col" />
                          <b-button class="bg-primary">Enviar</b-button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="my-4 col-xs-12">
                    <ul class="list-unstyled col-xs-12">
                      <li class="col-xs-12">
                        <th>
                          <button class="btn btn-warning">Editar</button>
                        </th>
                        <th>
                          <button class="btn btn-danger">Eliminar</button>
                        </th>
                        <img :src="require('../assets/logo.png')" alt height="200px" />
                        <div class="media-body">
                          <h2>Nombre</h2>
                          <h2>Descripcion</h2>
                          <h2>Precio</h2>
                          <h2>Portada</h2>
                        </div>
                      </li>
                    </ul>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="Lacteos" active class="col-xs-12">
                <b-card-text>
                  <!--Empieza aqui el boton del modal><-->
                  <div align="right" class="col-xs-12">
                    <a href="#openModal-12" class="btn btn-primary">
                      <strong class="text-light">
                        <b-spinner class="align-middle"></b-spinner>Agregar..
                      </strong>
                    </a>
                    <div id="openModal-12" class="modalDialog col-xs-12">
                      <div class="tabla col-xs-12 bg-info">
                        <a href="#" title="Close" class="close">X</a>
                        <h3 align="center">Agregar Producto</h3>
                        <div align="center">
                          <img
                            :src="require('../assets/base_datos.jpg')"
                            height="180px"
                            width="150px"
                            class="col-xs-12"
                            alt
                          />
                        </div>
                        <br />
                        <div align="center">
                          <input type="text" placeholder="Nombre" class="inp" />
                          <input type="text" placeholder="Descripcion" class="inp" />
                          <input type="number" placeholder="Precio" class="inp" />
                          <input type="file" placeholder="Portada" class="inp col" />
                          <b-button class="bg-primary">Enviar</b-button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="my-4 col-xs-12">
                    <ul class="list-unstyled col-xs-12">
                      <li class="col-xs-12">
                        <th>
                          <button class="btn btn-warning">Editar</button>
                        </th>
                        <th>
                          <button class="btn btn-danger">Eliminar</button>
                        </th>
                        <img :src="require('../assets/logo.png')" alt height="200px" />
                        <div class="media-body">
                          <h2>Nombre</h2>
                          <h2>Descripcion</h2>
                          <h2>Precio</h2>
                          <h2>Portada</h2>
                        </div>
                      </li>
                    </ul>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="Contactos" active class="col-xs-12">
                <b-card-text>
                  <!--Empieza aqui el boton del modal><-->
                  <div align="right" class="col-xs-12">
                    <a href="#openModal-13" class="btn btn-primary">
                      <strong class="text-light">
                        <b-spinner class="align-middle"></b-spinner>Agregar..
                      </strong>
                    </a>
                    <div id="openModal-13" class="modalDialog col-xs-12">
                      <div class="tabla col-xs-12 bg-info">
                        <a href="#" title="Close" class="close">X</a>
                        <h3 align="center">Agregar Producto</h3>
                        <div align="center">
                          <img
                            :src="require('../assets/base_datos.jpg')"
                            height="180px"
                            width="150px"
                            class="col-xs-12"
                            alt
                          />
                        </div>
                        <br />
                        <div align="center">
                          <input type="text" placeholder="Nombre" class="inp" />
                          <input type="text" placeholder="Descripcion" class="inp" />
                          <input type="number" placeholder="Precio" class="inp" />
                          <input type="file" placeholder="Portada" class="inp col" />
                          <b-button class="bg-primary">Enviar</b-button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="my-4 col-xs-12">
                    <ul class="list-unstyled col-xs-12">
                      <li class="col-xs-12">
                        <th>
                          <button class="btn btn-warning">Editar</button>
                        </th>
                        <th>
                          <button class="btn btn-danger">Eliminar</button>
                        </th>
                        <img :src="require('../assets/logo.png')" alt height="200px" />
                        <div class="media-body">
                          <h2>Nombre</h2>
                          <h2>Descripcion</h2>
                          <h2>Precio</h2>
                          <h2>Portada</h2>
                        </div>
                      </li>
                    </ul>
                  </div>
                </b-card-text>
              </b-tab>
            </b-tabs>
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
      nombre: "",
      imagen: ""
    };
  }
};
</script>

<style>
.carta {
  background: rgba(38, 209, 231, 0.26);
}
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
  position: absolute;
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
  background: rgb(255, 255, 255)
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