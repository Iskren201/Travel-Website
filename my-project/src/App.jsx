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
            </main>
        </div>
    )
}

export default App
