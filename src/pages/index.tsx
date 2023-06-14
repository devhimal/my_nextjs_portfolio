import React from 'react'
import Layout from "@/layout/Layout"
import Me from '@/components/body/Me'
import About from '@/components/body/About'
import Hackcorruption from '@/components/body/Hackcorruption'
import Skills from '@/components/body/Skills'
import Projects from "@/components/body/Projects"

const index = () => {
  return (
    <>
    <Layout>
      {/* <Me /> */}
      <About />
      <Projects />
      <Hackcorruption />
      <Skills />
    </Layout>
    </>
  )
}

export default index