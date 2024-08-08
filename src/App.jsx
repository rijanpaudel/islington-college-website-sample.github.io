import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Subject from './components/Subject/Subject'
import Programs2 from './components/Programs2/Programs2'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Header />
      <div className="container">
        <Title subTitle='Our Programs' title='What We Offer'/>
        <Subject subject='IT Degree'/>
        <Programs />
        <Subject subject='Business Degree'/>
        <Programs2 />
        <About setPlayState={setPlayState}/>
        <Title subTitle='Gallery' title='Campus Photos'/>
        <Campus />
        <Title subTitle='Testimonials' title='What Student Says'/>
        <Testimonials />
        <Title subTitle='Contact Us' title='Get in Touch'/>
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
