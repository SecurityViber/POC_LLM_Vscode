<template>
  <div class="about-page">
    <section class="section-about">
      <div class="about-container">
        <div class="profile-section">
          <div class="profile-pic">👩🏾‍🍳</div>
          <h1>Our Founder</h1>
        </div>
        <div class="story-content">
          <h2>From Dreams to scoops in Zürich</h2>
          <p>
            Welcome to ZuriCream! I am the heart and soul behind this sweet venture. 
            As an <strong>Italo-African-American</strong>, my life has been a beautiful journey of blending cultures, tastes, and traditions.
          </p>
          <p>
            Today, I am living my absolute dream right here in the vibrant heart of <strong>Zürich downtown</strong>. 
            Bringing a touch of my heritage and a passion for artisanal treats to the streets of Switzerland has been an 
            incredible experience.
          </p>
          <p>
            ZuriCream isn't just about ice cream—it's about the joy of connection and the sweetness of achieving 
            one's goals, no matter where in the world you start. Every scoop we serve is a piece of my journey, 
            crafted with love and a commitment to the highest quality ingredients.
          </p>
          <div class="signature">
            <p>With love and sweetness,</p>
            <p class="founder-name">The ZuriCream Founder</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-page {
  padding-top: 80px; /* Offset for sticky nav */
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--cream);
}

.section-about {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 5%;
}

.about-container {
  display: flex;
  align-items: center;
  gap: 4rem;
  background: white;
  padding: 4rem;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  flex-wrap: wrap;
}

.profile-section {
  text-align: center;
  flex: 1;
  min-width: 250px;
}

.profile-pic {
  font-size: 8rem;
  background: var(--secondary);
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  border: 5px solid white;
}

.profile-section h1 {
  font-size: 2rem;
  color: var(--primary-dark);
}

.story-content {
  flex: 2;
  min-width: 300px;
}

.story-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--primary-dark);
}

.story-content p {
  font-size: 1.1rem;
  margin-bottom: 1.2rem;
  color: var(--text-dark);
  line-height: 1.8;
}

.signature {
  margin-top: 2rem;
  font-style: italic;
}

.founder-name {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--primary);
  margin-top: 0.5rem;
}

@media (max-width: 768px) {
  .about-container {
    flex-direction: column;
    padding: 2rem;
    text-align: center;
  }
  
  .story-content {
    text-align: center;
  }

  .signature {
    text-align: center;
  }
}
</style>
