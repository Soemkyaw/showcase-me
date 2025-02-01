<template>
  <main class=" dark:bg-gray-900">
    <Navbar></Navbar>
    <Hero></Hero>
    <Works></Works>
    <About></About>
    <Skills></Skills>
    <Services></Services>
    <Footer></Footer>
  </main>
</template>

<script>
import Navbar from '../components/Navbar'
import About from '../components/About'
import Footer from '../components/Footer'
import Services from '../components/Services'
import Skills from '../components/Skills'
import Works from '../components/Works'
import Hero from '../components/Hero'
// @ is an alias to /src


export default {
  components: {
    Navbar,
    About,
    Footer,
    Services,
    Skills,
    Works,
    Hero,

  }
}
</script>
