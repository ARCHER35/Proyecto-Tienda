<template>
  <div>
    <h1>Bienvenido a la Vista Administrador</h1>
    <h1>Lista de Producctos</h1>
    <h1>Carnes</h1>
    <div>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Precio</th>
            <th scope="col">Imagen</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <button class="btn btn-warning text-light">Editar</button>
            <button class="btn btn-danger">Eliminar</button>
          </tr>
        </tbody>
      </table>
      <form role="form">
        <div class="form-group">
          <label for="email">Email address:</label>
          <input type="email" class="form-control" id="email" />
        </div>
        <div class="form-group">
          <label for="pwd">Password:</label>
          <input type="password" class="form-control" id="pwd" />
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" /> Remember me
          </label>
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
    </div>
    <h1>Pollo</h1>
    <h1>Huevo</h1>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>