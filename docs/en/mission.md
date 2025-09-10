---
title: Mission
---

<div class="mission-page">
  <section class="mission-hero">
    <div class="container">
      <h1>Our Mission</h1>
      <p>The AgentPsy project is dedicated to assessing and analyzing the personality traits and cognitive stability of large language models through scientific methods. We believe that understanding and mastering the intrinsic characteristics of AI systems is crucial for building safer and more reliable artificial intelligence applications.</p>
    </div>
  </section>

  <section class="core-objectives">
    <div class="container">
      <h2>Core Objectives</h2>
      <div class="objectives-grid">
        <div class="objective">
          <h3>Scientific Assessment</h3>
          <p>Develop and apply scientific evaluation methods to comprehensively analyze the personality traits of large language models.</p>
        </div>
        <div class="objective">
          <h3>Cognitive Stability Research</h3>
          <p>Conduct in-depth research on the cognitive stability and consistency of models in different contexts.</p>
        </div>
        <div class="objective">
          <h3>Open and Transparent</h3>
          <p>Publicize our evaluation methods and results to promote exchange and collaboration between academia and industry.</p>
        </div>
        <div class="objective">
          <h3>Application-Oriented</h3>
          <p>Apply research results to real-world scenarios to enhance the reliability and safety of AI systems.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="vision">
    <div class="container">
      <h2>Vision</h2>
      <p>We hope that through the AgentPsy project, we can contribute to the healthy development of artificial intelligence and promote the construction of a more trustworthy and controllable AI ecosystem.</p>
      <div class="vision-image">
        <img src="/images/design-chart.png" alt="AI Ecosystem Vision" />
      </div>
    </div>
  </section>
</div>

<style scoped>
.mission-page {
  width: 100%;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.mission-hero {
  background: linear-gradient(135deg, #3498db, #2c3e50);
  color: white;
  padding: 4rem 0;
  text-align: center;
}

.mission-hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.mission-hero p {
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
}

.core-objectives {
  padding: 4rem 0;
  background-color: #f8f9fa;
}

.core-objectives h2 {
  text-align: center;
  margin-bottom: 3rem;
  color: #2c3e50;
}

.objectives-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.objective {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  text-align: center;
}

.objective h3 {
  color: #3498db;
  margin-bottom: 1rem;
}

.vision {
  padding: 4rem 0;
  background-color: white;
}

.vision h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.vision p {
  max-width: 800px;
  margin: 0 auto 2rem;
  text-align: center;
  font-size: 1.1rem;
}

.vision-image {
  text-align: center;
  margin-top: 2rem;
}

.vision-image img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

/* Responsive design */
@media (max-width: 768px) {
  .container {
    padding: 0 15px;
  }
  
  .mission-hero h1 {
    font-size: 2rem;
  }
  
  .mission-hero p {
    font-size: 1rem;
  }
  
  .objectives-grid {
    grid-template-columns: 1fr;
  }
}
</style>