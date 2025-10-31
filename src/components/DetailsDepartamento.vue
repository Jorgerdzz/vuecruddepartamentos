<template>
<!-- Contenedor principal con estilo de tarjeta y margen superior -->
<div class="container mt-5">
<div class="card shadow-lg p-4 mx-auto" style="max-width: 500px;">
<!-- Título centralizado y con acento primario -->
<h1 class="text-center mb-4 text-primary fw-bolder">Detalles Departamento</h1>

        <!-- Estilo mejorado para la lista de detalles -->
        <ul class="list-group list-group-flush mb-4 border rounded">
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span class="fw-semibold text-secondary">Número:</span>
                <span class="fw-bold text-dark">{{$route.params.numero}}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span class="fw-semibold text-secondary">Nombre:</span>
                <span class="fw-bold text-dark">{{$route.params.nombre}}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span class="fw-semibold text-secondary">Localidad:</span>
                <span class="fw-bold text-dark">{{$route.params.localidad}}</span>
            </li>
        </ul>

        <!-- Botón de acción para volver, estilizado como outline-secondary -->
        <router-link to="/" class="btn btn-outline-secondary w-100 fw-bold">
            <i class="bi bi-arrow-left me-2"></i> Volver a departamentos
        </router-link>
    </div>
</div>
</template>

<script>
    export default{
        name: "DetailsDepartamento",
    }
</script>