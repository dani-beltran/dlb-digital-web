export const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId)
  if (section) {
    const navHeight = document.getElementById('nav').offsetHeight
    const sectionTop = section.offsetTop - navHeight - 20 // 20px extra offset
    
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    })
  }
}