<template>
  <navbar>
  </navbar>
  <router-view/>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: { Navbar }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
body{
  background-color: rgb(174, 201, 77);
  background-image:
    url("./assets/buero-einrichten-t.jpg");
  background-repeat: no-repeat;
  -webkit-background-size : cover;
  -moz-background-size: cover;
  -moz-background-size: cover;
}
</style>
