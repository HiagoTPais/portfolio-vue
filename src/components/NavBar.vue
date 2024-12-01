<template>
  <nav class="nav-container">
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <RouterLink activeClass="icon-gradient" class="nav-link d-flex flex-column text-center" to="/">
          <div class="d-flex justify-content-center">
            <BsFillHouseFill class="nav-icon" />
          </div>
        </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink activeClass="icon-gradient" class="nav-link d-flex flex-column text-center" to="/sobre">
          <div class="d-flex justify-content-center">
            <BsFillPersonFill class="nav-icon" />
          </div>
        </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink activeClass="icon-gradient" class="nav-link d-flex flex-column text-center" to="/projetos">
          <div class="d-flex justify-content-center">
            <BsFillPenFill class="nav-icon" />
          </div>
        </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink activeClass="icon-gradient" class="nav-link d-flex flex-column text-center" to="/contato">
          <div class="d-flex justify-content-center">
            <BsWechat class="nav-icon" />
          </div>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
<script>
import {
  BsFillHouseFill,
  BsFillPersonFill,
  BsFillPenFill,
  BsWechat 
} from "vue-icons-plus/bs";
import "../assets/css/style.css";

export default {
  name: "NavBar",
  components: {
    BsFillHouseFill,
    BsFillPersonFill,
    BsFillPenFill,
    BsWechat
  },
};
</script>
