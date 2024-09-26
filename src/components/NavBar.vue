<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link d-flex flex-column text-center" to="/"
              >Início</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              class="nav-link d-flex flex-column text-center"
              to="/sobre"
              >Sobre</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              class="nav-link d-flex flex-column text-center"
              to="/projetos"
              >Projetos</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              class="nav-link d-flex flex-column text-center"
              to="/contato"
              >Contatos</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import "../assets/css/style.css";

export default {
  name: "NavBar",
};
</script>
