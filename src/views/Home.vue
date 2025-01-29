<template>
  <main>
    <Hero></Hero>
    <Works></Works>
    <About></About>
    <Skills></Skills>
    <Services></Services>
    <Footer></Footer>
  </main>
</template>

<script>
import About from '../components/About'
import Footer from '../components/Footer'
import Services from '../components/Services'
import Skills from '../components/Skills'
import Works from '../components/Works'
import Hero from '../components/Hero'
// @ is an alias to /src


export default {
  components: {
    About,
    Footer,
    Services,
    Skills,
    Works,
    Hero,

  }
}
</script>
