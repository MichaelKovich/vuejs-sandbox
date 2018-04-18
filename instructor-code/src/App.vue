<template>
  <div id="app">
    <nav>
      <router-link tag="span" to="/">Home</router-link>
      <router-link tag="span" to="/Jedi">Jedi</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: "This is a test",
      message: "This is not the original message"
    };
  },
  name: "app",
  components: {}
};
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  nav {
    display: flex;
    background-color: black;
    color: white;
    justify-content: space-around;
    padding: 10px;
  }
  nav span {
    cursor: pointer;
  }
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
