import './App.css'
import './component/Fonts/Fonts.css'
import Header from './component/Header/Header'

function App() {

  return (
    <><div className="container">
    <Header />
    <div className="hero">
      <div className="desc">
        <h1>Join a Community of Achievers</h1>
        <p>Join a Community of Achievers</p>
        <button>Learn More</button>
      </div>
      <div className="img">
        <img src="../public/girl.png" alt="girl" />
        <div></div>
    </div>
    </div>
    </div>
    </>
  )
}

export default App
