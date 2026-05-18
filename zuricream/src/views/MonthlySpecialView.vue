<template>
  <div class="special-page">
    <section class="section-special">
      <div class="special-container">
        <div class="special-badge">Ice Cream of the Month</div>
        <div class="special-content">
          <div class="special-image">
            <div class="scoop-animation">
              <span class="scoop" style="background-color: #ffc107;"></span>
              <span class="scoop" style="background-color: #ffeb3b;"></span>
              <span class="scoop" style="background-color: #fbc02d;"></span>
            </div>
            <div class="cone">🍦</div>
          </div>
          <div class="special-details">
            <h1>Golden Honeycomb Crunch</h1>
            <p class="description">
              Our May special is a breathtaking fusion of organic wildflower honey, 
              creamy churned milk, and actual shards of homemade honeycomb candy. 
              It's a golden symphony of sweetness and crunch that tastes like sunshine in a bowl.
            </p>
            <div class="ingredients">
              <span>🍯 Wildflower Honey</span>
              <span>🐝 Real Honeycomb</span>
              <span>🥛 Organic Cream</span>
            </div>
            <button class="btn">Order a Scoop</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.special-page {
  padding-top: 80px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--cream);
}

.section-special {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 5%;
}

.special-container {
  background: white;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  overflow: hidden;
  position: relative;
  border: 8px solid var(--secondary);
}

.special-badge {
  position: absolute;
  top: 20px;
  right: -40px;
  background: #ff4081;
  color: white;
  padding: 10px 50px;
  transform: rotate(45deg);
  font-weight: bold;
  z-index: 10;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
}

.special-content {
  display: flex;
  align-items: center;
  gap: 4rem;
  padding: 4rem;
  flex-wrap: wrap;
}

.special-image {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  position: relative;
}

.scoop-animation {
  position: relative;
  width: 150px;
  height: 150px;
}

.scoop {
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  bottom: 0;
  left: 25px;
  transition: transform 0.3s ease;
  box-shadow: inset -10px -10px 20px rgba(0,0,0,0.1);
}

.scoop:nth-child(2) {
  transform: translateY(-40px) translateX(10px);
  z-index: 2;
}

.scoop:nth-child(3) {
  transform: translateY(-80px) translateX(-10px);
  z-index: 3;
}

.cone {
  font-size: 6rem;
  margin-top: -20px;
  z-index: 1;
}

.special-details {
  flex: 1;
  min-width: 300px;
}

.special-details h1 {
  font-size: 3rem;
  color: var(--primary-dark);
  margin-bottom: 1.5rem;
  font-family: 'Fredoka', sans-serif;
}

.description {
  font-size: 1.2rem;
  color: var(--text-dark);
  line-height: 1.8;
  margin-bottom: 2rem;
}

.ingredients {
  display: flex;
  gap: 1rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
}

.ingredients span {
  background: var(--secondary);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--primary-dark);
}

@media (max-width: 768px) {
  .special-content {
    flex-direction: column;
    padding: 2rem;
    text-align: center;
  }
  
  .ingredients {
    justify-content: center;
  }
  
  .special-details h1 {
    font-size: 2rem;
  }
}
</style>
