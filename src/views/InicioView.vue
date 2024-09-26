<template>
  <div class="container">
    <div class="d-flex justify-content-between whiteboard">
      <div class="ta-left">
        <p class="hello">Hello, Welcome</p>
        <p class="nome">My name is Hiago Pais</p>

        <p class="apresentacao">
          I’m a passionate fullstack developer dedicated to creating innovative
          and functional solutions. With 6 years of experience, I’ve worked
          across various areas of web development, both frontend and backend,
          which allows me to have a comprehensive and integrated view of
          projects.
        </p>

        <p class="apresentacao">
          I’m excited to tackle new challenges and contribute to projects that
          make a difference. Let’s discuss how I can add value to your team or
          your next project!
        </p>

        <button type="button" class="btn-contact">
          <RouterLink class="td-none" to="/contato">Contact Me</RouterLink>
        </button>
      </div>
      <div>
        <img class="foto" src="../assets/img/foto.png" />
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/css/style.css";

export default {
  name: "InicioView",
};
</script>