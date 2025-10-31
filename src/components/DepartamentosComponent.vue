<template>
  <!-- Contenedor principal con estilo de tarjeta (similar al formulario) -->
  <div class="container mt-5">
    <div class="card shadow-lg p-4">
      <!-- Título centralizado con color primario -->
      <h1 class="text-center mb-4 text-primary fw-bolder">Departamentos</h1>
      <div v-if="status">
        <!-- Tabla con estilo rayado, hover y encabezado oscuro para mejor contraste -->
        <table class="table table-striped table-hover border">
          <thead class="table-dark">
            <tr>
              <th scope="col">NÚMERO</th>
              <th scope="col">NOMBRE</th>
              <th scope="col">LOCALIDAD</th>
              <th scope="col">ACCIONES</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="dept in departamentos" :key="dept" class="align-middle">
              <th scope="row" class="fw-semibold">{{ dept.numero }}</th>
              <td>{{ dept.nombre }}</td>
              <td>{{ dept.localidad }}</td>
              <td>
                <router-link :to="'/details/' + dept.numero + '/' + dept.nombre + '/' + dept.localidad" class="btn btn-sm btn-success fw-semibold text-dark me-3">DETAILS</router-link>
                <router-link :to="'/update/' + dept.numero" class="btn btn-sm btn-warning fw-semibold text-dark me-3">UPDATE</router-link>
                <button @click="deleteDepartamento()" :v-model="numeroDepartamento" class="btn btn-sm btn-danger fw-semibold text-dark">DELETE</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else class="text-center p-5">
        <!-- Indicador de carga centralizado y grande -->
        <img
          src="../assets/images/loading-white.gif"
          alt="Cargando datos"
          style="width: 80px; height: 80px"
        />
        <p class="text-secondary mt-3">Cargando departamentos...</p>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceDepartamentos from "../services/ServiceDepartamentos";
const service = new ServiceDepartamentos();
export default {
  name: "DepartamentosComponent",
  data() {
    return {
      departamentos: [],
      status: null,
      numeroDepartamento: 0
    };
  },
  methods:{
    loadDepartamentos(){
        service.getDepartamentos().then((result) => {
            this.departamentos = result;
            this.status = true;
        });
    },
    deleteDepartamento(){
        service.deleteDepartamento(this.numeroDepartamento).then(()=>{
            console.log("Eliminado")
            this.loadDepartamentos();
        })
    }
  },
  mounted() {
    this.loadDepartamentos();
  },
};
</script>
