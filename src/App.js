import './App.css';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Footer(){
  return <footer> {new Date().toLocaleDateString()}. We're curruently open!</footer>;
}

function Pizza(props){
  const {name, ingredient, photoName, price} = props;
  return (
    <div className='pizza'>
      <img src={photoName} alt={name} />
      <h3>{name}</h3>
      <p>{ingredient}</p>
      <span>{price + 3}</span>
    </div>
  )
}

function Menu(){
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      <Pizza 
      name='Pizza Spinaci'
      ingredient='Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsam libero minus iure! Itaque quae in enim eligendi sunt ipsa distinctio laborum repellat. Iusto inventore, eaque repellendus recusandae reiciendis qui!'
      photoName='pizzas/spinaci.jpg'
      price={10}/>
    </main> 
  );
}

function Header(){
  return( 
    <header>
        <h1 className='header'>Fast React Pizza .co</h1>
    </header> 
  );
}

function App() {
  return (
    <div className="container">
      <Header/>
      <h1>Hello React</h1>
      <Menu/>
      <Footer/>
    </div>
  );
}

export default App;
