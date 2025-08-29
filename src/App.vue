<template>
  <div id="app">
    <nav>
      <!-- Use router-link instead of plain <a> -->
      <router-link to="/privacy">Privacy Policy</router-link> |
      <router-link to="/terms">Terms of Service</router-link> |
      <router-link to="/delete">User Data Deletion</router-link>
    </nav>

    <!-- This is where the routed pages render -->
    <router-view />
  </div>
</template>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  color: #222;
  margin: 0;
  padding: 0;
}

#app {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
}

nav {
  margin-bottom: 2rem;
}

nav a {
  text-decoration: none;
  color: #0077cc;
  margin: 0 0.5rem;
}

nav a.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
