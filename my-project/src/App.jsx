import Destination from './components/Destination'
import Features from './components/Features'
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
            </main>
        </div>
    )
}

export default App
