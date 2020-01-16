<template>
  <div class="hello">
    <h3 class="bg-danger">Tiendas 2222</h3>
    <Footer/>
  </div>
</template>

<script>
import Footer from '../components/Footer'
export default {
  name: 'HelloWorld',
  components: {
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
