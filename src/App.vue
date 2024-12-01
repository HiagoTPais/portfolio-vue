<template>
  <NavBar />
  <RouterView />
</template>

<script>
import NavBar from "./components/NavBar.vue";
// import FooterBar from "./components/FooterBar.vue";

export default {
  name: "App",

  components: {
    NavBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background: linear-gradient(
    5deg,
    transparent 30%,
    blue 100%,
    #87ceeb 100%,
    transparent 70%
  );
  background-repeat: no-repeat;
  background-color: #222222;
}

.stripe {
  background-size: 200% 200%;
}
</style>
