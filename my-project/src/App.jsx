import About from './components/About'
import Contact from './components/Contact'
import Destination from './components/Destination'
import Features from './components/Features'
import Footer from './components/Footer'
import Home from './components/Home'
import NavBar from './components/NavBar'

const App = () => {
    return (
        <div>
            <NavBar />

            <main>
                <div id='home'>
                    <Home />
                </div>
                <div id='features'>
                    <Features />
                </div>
                <div id='destination'>
                    <Destination />
                </div>
                <div id='about'>
                    <About />
                </div>
                <div id='contact'>
                    <Contact />
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default App
