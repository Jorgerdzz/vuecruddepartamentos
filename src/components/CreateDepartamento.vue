<template>
  <!-- Contenedor principal con estilo de tarjeta -->
  <div class="container mt-5">
    <div class="card shadow-lg p-4 mx-auto" style="max-width: 500px">
      <!-- Título centralizado con color primario -->
      <h1 class="text-center mb-4 text-primary fw-bolder">
        Crear Departamento
      </h1>
      <form v-on:submit.prevent="crearDepartamento()">
        <div class="mb-3">
          <label class="form-label fw-semibold text-secondary">Número:</label>
          <!-- Inputs con foco y borde primario -->
          <input
            type="number"
            v-model="departamento.numero"
            class="form-control border-primary shadow-sm"
          />
        </div>
        <div class="mb-3">
          <label class="form-label fw-semibold text-secondary">Nombre:</label>
          <input
            type="text"
            v-model="departamento.nombre"
            class="form-control border-primary shadow-sm"
          />
        </div>
        <div class="mb-4">
          <label class="form-label fw-semibold text-secondary"
            >Localidad:</label
          >
          <input
            type="text"
            v-model="departamento.localidad"
            class="form-control border-primary shadow-sm"
          />
        </div>
        <!-- Botón de acción principal, grande y llamativo -->
        <button class="btn btn-primary w-100 py-2 fw-bold text-uppercase">
          <i class="bi bi-floppy me-2"></i> Insertar
        </button>
      </form>
      <!-- Mensaje de éxito/error, centralizado y en color de éxito (azul) -->
      <h2 class="text-primary mt-3 text-center fw-normal">{{ mensaje }}</h2>
    </div>
  </div>
</template>

<script>
import ServiceDepartamentos from "../services/ServiceDepartamentos";
const service = new ServiceDepartamentos();
export default {
  name: "CreateDepartamento",
  methods: {
    crearDepartamento() {
      service.createDepartamento(this.departamento).then((result) => 
        this.mensaje = "Insertado" + result,
        setTimeout(()=>{
            this.$router.push("/")
        }, 3000)
        
      );
    },
  },
  data() {
    return {
      departamento: {
        numero: 0,
        nombre: "",
        localidad: "",
      },
      mensaje: "",
    };
  },
};
</script>
