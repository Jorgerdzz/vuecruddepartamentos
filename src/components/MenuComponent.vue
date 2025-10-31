<template>
  <!-- Navbar: Tema Oscuro y Profundo -->
  <nav
    class="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg border-bottom border-primary"
  >
    <div class="container-fluid">
      <!-- Marca con énfasis en color primary -->
      <router-link class="navbar-brand fw-bold text-primary" to="#"
        >Gestión Deptos</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <!-- Enlaces en color blanco/claro -->
            <router-link
              class="nav-link active text-white"
              aria-current="page"
              to="/"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-light" to="/create"
              >New departamento</router-link
            >
          </li>
          <li class="nav-item dropdown">
            <router-link
              class="nav-link dropdown-toggle text-light"
              to="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </router-link>
            <!-- Dropdown con tema oscuro -->
            <ul class="dropdown-menu dropdown-menu-dark">
              <li>
                <router-link class="dropdown-item" to="#">Action</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="#"
                  >Another action</router-link
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <router-link class="dropdown-item" to="#"
                  >Something else here</router-link
                >
              </li>
            </ul>
          </li>
        </ul>
        <!-- Formulario de búsqueda con botón azul primario -->
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-primary fw-bold" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MenuComponent",
};
</script>
