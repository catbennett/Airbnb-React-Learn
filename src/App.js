import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Card from "./components/Card"
import cardData from "./data.js"

function App() {
  const cards = cardData.map(card =>{
    return (
      <Card
            key = {card.id}
            {...card}
      />
    )
  })

  return (
    <div className="App">
      <Nav />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
