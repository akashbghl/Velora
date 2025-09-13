import React from 'react'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Jsection from '../components/Jsection'
import Msection from '../components/Msection'

function Home() {
    return (
        <div>
            <Hero />
            <Msection />
            <Faq />
            <Jsection />
            <Footer />
        </div>
    )
}

export default Home
