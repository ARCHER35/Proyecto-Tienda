<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-img :src="require('../assets/logo-toro-2.png')" height="80px" width="130px"></b-img>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Inicio</b-nav-item>
            <b-nav-item to="/carne">Carne</b-nav-item>
            <b-nav-item-dropdown text="Pollo">
              <b-dropdown-item to="/pollo">Pollo</b-dropdown-item>
              <b-dropdown-item to="/huevo">Huevo</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="Abarrotes">
              <b-dropdown-item to="/arroz">Arroz</b-dropdown-item>
              <b-dropdown-item to="/azucar">Azucar</b-dropdown-item>
              <b-dropdown-item to="/fideo">Fideos</b-dropdown-item>
              <b-dropdown-item to="/sal">Sal</b-dropdown-item>
              <b-dropdown-item to="/aceite">Aceite</b-dropdown-item>
              <b-dropdown-item to="/adereso">Aderesos</b-dropdown-item>
              <b-dropdown-item to="/otro">Otros</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item to="/embutido">Embutidos</b-nav-item>
            <b-nav-item to="/condimento">Condimentos</b-nav-item>
            <b-nav-item to="/lacteo">Lacteos</b-nav-item>
            <b-nav-item to="/contacto">Contactos</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    boton() {
      this.$router.push("/carrito");
    }
  }
};
</script>
<style>
b {
  background: black;
}
</style>
