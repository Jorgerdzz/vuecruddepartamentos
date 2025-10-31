<template>
    <!-- Contenedor principal con estilo de tarjeta -->
    <div class="container mt-5">
        <div class="card shadow-lg p-4 mx-auto" style="max-width: 500px;">
        <!-- Título centralizado con color primario -->
        <h1 class="text-center mb-4 text-primary fw-bolder">Modificar Departamento</h1>
            <form v-on:submit.prevent="updateDepartamento()">
                <div class="mb-3">
                <label class="form-label fw-semibold text-secondary">Número:</label>
                <!-- Input deshabilitado ya que el número de departamento suele ser clave primaria -->
                <input type="number" class="form-control border-secondary bg-light" v-model="departamento.numero" disabled/>
                </div>
                <div class="mb-3">
                <label class="form-label fw-semibold text-secondary">Nombre:</label>
                <!-- Inputs con foco y borde primario -->
                <input type="text" class="form-control border-primary shadow-sm" v-model="departamento.nombre"/>
                </div>
                <div class="mb-4">
                <label class="form-label fw-semibold text-secondary">Localidad:</label>
                <input type="text" class="form-control border-primary shadow-sm" v-model="departamento.localidad">
                </div>
                <!-- Botón de acción principal, grande y con estilo de modificación (warning) -->
                <button class="btn btn-warning w-100 py-2 fw-bold text-uppercase text-dark">
                <i class="bi bi-pencil-square me-2"></i> Modificar
                </button>
            </form>
        </div>
    </div>
</template>
<script>
import ServiceDepartamento from '../services/ServiceDepartamentos';
const service = new ServiceDepartamento();
    export default{
        name: "UpdateDepartamento",
        data(){
            return{
                departamento: {}
            }
        },
        mounted(){
            service.findDepartamento(this.$route.params.numero).then(result=>
                this.departamento = result
            )
        },
        methods:{
            updateDepartamento(){
                let departamento = {
                    numero: this.departamento.numero,
                    nombre: this.departamento.nombre,
                    localidad: this.departamento.localidad
                }
                service.updateDepartamento(departamento).then(()=>{
                    this.$router.push("/details/" + departamento.numero + "/" + departamento.nombre + "/" + departamento.localidad)
                })
            }
        }
    }
</script>