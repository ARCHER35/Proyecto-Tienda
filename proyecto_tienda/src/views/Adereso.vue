<template>
  <div>
    <h1>vista Aderesos</h1>
    <div class="card">
      <div class="card">
        <img src="" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p
            class="card-text"
          >This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div class="card">
        <img src="" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p
            class="card-text"
          >This card has supporting text below as a natural lead-in to additional content.</p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div class="card">
        <img src="" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p
            class="card-text"
          >This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ketchup: [
        {
          nombre: "Ketchup",
          descripcion: "Cant",
          precio: 0,
          portada: ""
        }
      ],
      mayonesa: [
        {
          nombre: "Mayonesa",
          descripcion: "Cant",
          precio: 0,
          portada: ""
        }
      ],
      mostaza: [
        {
          nombre: "Mostaza",
          descripcion: "Cant",
          precio: 0,
          portada: ""
        }
      ],
      extracto: [
        {
          nombre: "Extracto de Tomato",
          descripcion: "Cant",
          precio: 0,
          portada: ""
        }
      ]
    };
  }
};
</script>

<style>
.container {
  display: grid;
  grid-template-columns: auto auto;
}
.card {
  margin-bottom: 20px;
}
</style>