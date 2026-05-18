<script setup>
import { ref } from 'vue'
import heroImg from '../assets/hero.png'

const flavors = ref([
  {
    name: 'Strawberry Dream',
    description: 'A sweet and creamy blend of fresh summer strawberries.',
    color: '#ff8fab'
  },
  {
    name: 'Minty Fresh',
    description: 'Cool peppermint with decadent dark chocolate chips.',
    color: '#caffbf'
  },
  {
    name: 'Vanilla Velvet',
    description: 'Classic Madagascar vanilla with a smooth, buttery finish.',
    color: '#fffdfa'
  },
  {
    name: 'Blueberry Bliss',
    description: 'Wild blueberries swirled into a rich, creamy base.',
    color: '#bde0fe'
  },
  {
    name: 'Chocolate Heaven',
    description: 'Intense Belgian chocolate for the ultimate cocoa experience.',
    color: '#7b3f00'
  },
  {
    name: 'Pistachio Paradise',
    description: 'Roasted Sicilian pistachios for a nutty, elegant taste.',
    color: '#d4e157'
  }
])
</script>

<template>
  <div>
    <header class="hero">
      <div class="hero-content">
        <h1>Happiness in Every Scoop!</h1>
        <p>Experience the magic of handcrafted ice cream made with organic ingredients and a pinch of love. Treat yourself to a moment of pure joy.</p>
        <a href="#flavors" class="btn">Explore Flavors</a>
      </div>
      <div class="hero-image">
        <img :src="heroImg" alt="Delicious Ice Cream" />
      </div>
    </header>

    <section id="flavors" class="section">
      <h2 class="section-title">Our Magical Flavors</h2>
      <div class="flavors-grid">
        <div v-for="flavor in flavors" :key="flavor.name" class="flavor-card">
          <div class="flavor-color" :style="{ backgroundColor: flavor.color }"></div>
          <h3>{{ flavor.name }}</h3>
          <p>{{ flavor.description }}</p>
          <button class="btn" style="padding: 0.5rem 1.5rem; font-size: 0.9rem;">Order Now</button>
        </div>
      </div>
    </section>

    <section class="about-teaser">
      <div class="section" style="background: var(--secondary); padding: 4rem 5%; text-align: center;">
        <h2>Want to know our story?</h2>
        <p style="margin-bottom: 2rem;">Discover the heart and soul behind ZuriCream.</p>
        <router-link to="/about" class="btn">Read Our Story</router-link>
      </div>
    </section>
  </div>
</template>
