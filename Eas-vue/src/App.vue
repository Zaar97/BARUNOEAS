<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
    <nav>
      <router-link to="/">Form</router-link>
      <router-link to="/CekStatus">Status</router-link>
    </nav>
    <div class="main-content">
      <router-view></router-view>
    </div>

</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
  nav {
  background-color: #333;
  padding: 10px;
}

router-link {
  margin-right: 10px;
  color: white;
  text-decoration: none;
}

router-link:hover {
  text-decoration: underline;
}


}
</style>
