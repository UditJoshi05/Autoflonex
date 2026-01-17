
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import ServiceCards from './components/ServiceCards'
import ProcessSteps from './components/ProcessSteps'
import WhyAutoFlonex from './components/WhyAutoFlonex'
import UseCases from './components/UseCases'
import CTASection from './components/CTASection'
import MeetingScheduler from './components/MeetingScheduler'
import About from './components/About'
import Footer from './components/Footer'

function App() {
    return (
        <HelmetProvider>
            <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-purple-900 selection:text-white">
                <Navbar />
                <Hero />
                <TrustStrip />
                <ServiceCards />
                <ProcessSteps />
                <WhyAutoFlonex />
                <UseCases />
                <CTASection />
                <MeetingScheduler />
                <About />
                <Footer />
            </div>
        </HelmetProvider>
    )
}

export default App
