<template>
  <section id="signature-services">
    <h2 class="section-title">Our Signature Services</h2>
    <p class="section-subtitle">Specialized solutions designed to accelerate your success and overcome technical challenges</p>
    <div class="signature-services-grid">
      <div class="signature-service-card" v-for="service in signatureServices" :key="service.title">
        <div class="service-icon">{{ service.icon }}</div>
        <h3>{{ service.title }}</h3>
        <p>{{ service.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const signatureServices = [
  { 
    icon: '🚀', 
    title: 'Fast-Track Your MVP to Market', 
    desc: 'Launch your startup idea quickly and economically. We specialize in building MVPs that get to market fast, combining streamlined front-end design with efficient back-end architecture. Through rapid iterations and agile development practices, you\'ll have a working product to test and refine without breaking the bank. Perfect for entrepreneurs ready to validate their vision.' 
  },
  { 
    icon: '🔄', 
    title: 'Project Revitalization & Modernization', 
    desc: 'Is your project losing momentum? Is development slowing down due to breaking changes and outdated dependencies? We help teams get unstuck by revitalizing stalled projects and modernizing legacy systems. We handle the technical heavy lifting—removing blockers, updating frameworks, fixing dependency issues, and eliminating technical debt—so your team can ship features again. The result: faster development cycles, reduced team frustration, and a product ready to grow. Get your project back on track and moving forward.' 
  },
  { 
    icon: '🤖', 
    title: 'Unstuck Your AI-Coded Project', 
    desc: 'Built an MVP with AI tools but hit a wall at 90%? You\'ve got a solid foundation, but those last tricky details—edge cases, performance optimization, API integrations, and production-readiness—require hands-on expertise. We specialize in taking AI-generated codebases and polishing them into production-quality applications. We\'ll identify what AI missed, fix the gaps, resolve conflicts, and transform your prototype into a launchable product. Let\'s cross that finish line and get your vision live.' 
  },
  { 
    icon: '🔒', 
    title: 'Security Audit & Hardening', 
    desc: 'Ready to take your app to production but worried about security? Many applications—especially those built quickly or with AI assistance—have vulnerabilities lurking beneath the surface. We conduct thorough security audits to identify risks, then harden your codebase with proper authentication, authorization, encryption, and protection against common attacks. We\'ll ensure your app meets industry standards and keeps user data safe. Ship with confidence knowing your application is secure and protected.' 
  },
  { 
    icon: '🌍', 
    title: 'Global Scaling & High-Demand Optimization', 
    desc: 'Your app is taking off—but can it handle the traffic? We help you architect and scale applications for global audiences and peak demand. From load balancing and CDN optimization to database sharding, caching strategies, and infrastructure design, we ensure your application stays fast and reliable whether you\'re serving 100 users or 100 million. We\'ll design systems that grow with you, handle traffic spikes gracefully, and deliver consistent performance across regions. Turn growth into your advantage, not your bottleneck.' 
  },
  { 
    icon: '⚙️', 
    title: 'Ongoing Support & Maintenance Retainers', 
    desc: 'Launched your product? Don\'t let it stagnate. We offer flexible maintenance retainers that keep your application running smoothly, secure, and up-to-date. From bug fixes and dependency updates to feature additions, performance monitoring, and security patches, we handle the continuous work that keeps your app healthy. Focus on your business while we handle the technical upkeep. With ongoing support, you\'ll have peace of mind knowing your product is in good hands and always ready to evolve.' 
  }
]
</script>

<style scoped>
.signature-services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.signature-service-card {
  padding: 2.5rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border);
  border-radius: 12px;
  transition: all 0.4s;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.signature-service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--accent), var(--accent-hover));
  opacity: 0;
  transition: opacity 0.4s;
}

.signature-service-card:hover::before {
  opacity: 1;
}

.signature-service-card:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: var(--accent);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.1);
}

.service-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--accent), var(--accent-hover));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  transition: transform 0.4s;
}

.signature-service-card:hover .service-icon {
  transform: scale(1.1) rotate(5deg);
}

.signature-service-card h3 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  line-height: 1.3;
  color: var(--text);
}

.signature-service-card p {
  color: #a0a0a0;
  line-height: 1.7;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .signature-services-grid {
    grid-template-columns: 1fr;
  }
  
  .signature-service-card {
    padding: 2rem;
  }
}
</style>
