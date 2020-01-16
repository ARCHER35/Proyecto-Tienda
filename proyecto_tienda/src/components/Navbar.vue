<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <img
          src="https://edu.glogster.com/proxy?url=http%3A%2F%2Fwww.vender-online.org%2Fblog%2Fwp-content%2Fuploads%2F2014%2F02%2Ftienda.jpg"
          alt
          height="70px"
          width="100px"
        />
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Inicio</b-nav-item>
            <b-nav-item href="#">Carne</b-nav-item>
            <b-nav-item-dropdown text="Pollo">
              <b-dropdown-item href="#">Pollo</b-dropdown-item>
              <b-dropdown-item href="#">Huevo</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="Abarrotes">
              <b-dropdown-item href="#">Arroz</b-dropdown-item>
              <b-dropdown-item href="#">Azucar</b-dropdown-item>
              <b-dropdown-item href="#">Fideos</b-dropdown-item>
              <b-dropdown-item href="#">Sal</b-dropdown-item>
              <b-dropdown-item href="#">Aceite</b-dropdown-item>
              <b-dropdown-item href="#">Aderesos</b-dropdown-item>
              <b-dropdown-item href="#">Otros</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item href="#">Embutidos</b-nav-item>
            <b-nav-item href="#">Condimentos</b-nav-item>
            <b-nav-item href="#">Lacteos</b-nav-item>
            <b-nav-item href="#">Contactos</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>