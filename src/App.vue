<template>
  <nav>
    <router-link to="/">Home</router-link> |    <!-- Normal `href` Tag use nah kore `router-link` TAG ta use korle VUE shei Request ke intercept kore and nijei shei route ee niye jabe without Network Call to SERVER -->
    <router-link :to="{ name:'posts' }">Posts</router-link> |
    <router-link to="/jobs">Jobs</router-link>
  </nav>

  <!-- `router-view` TAG ta jei Route ee gese shei Route er COMPONENT ke automatic Import korte pare -->
  <router-view/>

</template>

<script>
export default {
  methods: {

  },
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

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

nav a.router-link-exact-active {
  color: crimson;
  background: #42b983;
}

button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>
