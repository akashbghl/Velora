import React from 'react'
import Faq from '../components/Faq'
import Hero from '../components/Hero'
import Jsection from '../components/Jsection'
import Msection from '../components/Msection'
import PricingSection from '@/components/ui/PricingSection'
import Footer from '@/components/Footer'


function Home() {
    return (
        <div>
            <Hero />
            <Msection />
            <Faq />
            <Jsection />
            <PricingSection/>
            <Footer/>
        </div>
    )
}

export default Home
