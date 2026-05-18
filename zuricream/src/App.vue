<template>
  <div id="app">
    <nav>
      <router-link to="/" class="logo">🍦 ZuriCream</router-link>
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/monthly-special">Special</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </nav>

    <main>
      <router-view />
    </main>

    <footer>
      <ul class="footer-links">
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Twitter</a></li>
      </ul>
      <p class="copyright">&copy; 2026 ZuriCream Artisanal Ice Cream. All rights reserved.</p>
    </footer>
  </div>
</template>

<style>
main {
  min-height: calc(100vh - 160px);
}
</style>
