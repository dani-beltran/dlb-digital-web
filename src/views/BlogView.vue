<template>
  <div class="blog-container">
    <div v-if="route.params.slug !== 'home'" class="blog-header">
      <router-link to="/blog/home" class="back-link">← Blog Home</router-link>
    </div>
    
    <article class="blog-article">
      <div v-if="loading" class="loading">Loading article...</div>
      <div v-else-if="error" class="error">{{ error }}</div>
      <div v-else class="blog-content" v-html="renderedMarkdown"></div>
    </article>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import MarkdownIt from 'markdown-it'

const route = useRoute()
const markdownContent = ref('')
const loading = ref(true)
const error = ref(null)

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
})

const renderedMarkdown = computed(() => {
  return md.render(markdownContent.value)
})


const loadArticle = async (name) => {
  try {
    loading.value = true
    error.value = null

    // Import the markdown file dynamically
    const article = await import(`../articles/${name}.md?raw`)
    markdownContent.value = article.default
  } catch (err) {
    error.value = 'Article not found'
    console.error('Error loading article:', err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  window.scrollTo(0, 0)
  const slug = route.params.slug || 'home'
  loadArticle(slug)
})

watch(() => route.params.slug, (newSlug) => {
  window.scrollTo(0, 0)
  loadArticle(newSlug || 'home')
})
</script>

<style scoped>
.blog-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  padding: 2rem;
  margin-top: 90px;
}

.blog-header {
  max-width: 800px;
  margin: 0 auto 2rem;
}

.back-link {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  display: inline-block;
  transition: all 0.3s ease;
  cursor: pointer;
}

.back-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateX(-5px);
}

.blog-article {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.blog-content {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.8;
  color: #333;
}

/* Markdown Styling */
.blog-content :deep(h1) {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #1a1a1a;
  border-bottom: 3px solid #667eea;
  padding-bottom: 0.5rem;
}

.blog-content :deep(h2) {
  font-size: 2rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #2a2a2a;
}

.blog-content :deep(h3) {
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  color: #3a3a3a;
}

.blog-content :deep(p) {
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.blog-content :deep(a) {
  color: #667eea;
  text-decoration: none;
  border-bottom: 1px solid #667eea;
  transition: all 0.2s ease;
}

.blog-content :deep(a:hover) {
  color: #764ba2;
  border-bottom-color: #764ba2;
}

.blog-content :deep(ul),
.blog-content :deep(ol) {
  margin-bottom: 1rem;
  padding-left: 2rem;
}

.blog-content :deep(li) {
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.blog-content :deep(code) {
  background: #f5f5f5;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 0.9em;
  color: #e83e8c;
}

.blog-content :deep(pre) {
  background: #2d2d2d;
  color: #f8f8f2;
  padding: 1.5rem;
  border-radius: 8px;
  overflow-x: auto;
  margin-bottom: 1rem;
}

.blog-content :deep(pre code) {
  background: none;
  color: inherit;
  padding: 0;
  font-size: 0.95rem;
}

.blog-content :deep(blockquote) {
  border-left: 4px solid #667eea;
  padding-left: 1.5rem;
  margin: 1.5rem 0;
  color: #555;
  font-style: italic;
  background: #f9f9f9;
  padding: 1rem 1.5rem;
  border-radius: 4px;
}

.blog-content :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 1.5rem 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.blog-content :deep(strong) {
  font-weight: 600;
  color: #1a1a1a;
}

.blog-content :deep(em) {
  font-style: italic;
  color: #444;
}

.blog-content .loading,
.blog-content .error {
  text-align: center;
  font-size: 1.2rem;
  padding: 3rem;
  color: #555;
}

.blog-content .error {
  color: #d32f2f;
}

@media (max-width: 768px) {
  .blog-container {
    padding: 1rem;
  }

  .blog-article {
    padding: 1.5rem;
  }

  .blog-content :deep(h1) {
    font-size: 2rem;
  }

  .blog-content :deep(h2) {
    font-size: 1.5rem;
  }

  .blog-content :deep(h3) {
    font-size: 1.25rem;
  }

  .blog-content :deep(p),
  .blog-content :deep(li) {
    font-size: 1rem;
  }
}
</style>
