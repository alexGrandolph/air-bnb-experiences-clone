import './App.css';
import NavBar from './components/NavBar.js'
import Hero from './components/Hero.js'
import Card from './components/Card.js'


function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      {/* <section className="card-list"> */}
        <Card />
      {/* </section> */}
    </div>
  );
}

export default App;
