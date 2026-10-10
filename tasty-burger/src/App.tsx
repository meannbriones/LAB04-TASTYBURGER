import './App.css';

function BurgerBox(props) {
  return (
    <div className="box">
      <img src={props.image} alt={props.name} />
      
      <div className="info">
        <p>⭐⭐⭐⭐⭐</p>
        <h3>{props.name}</h3>
        <p className="price">Price: ₱{props.price}</p>
        
        {}
        <button onClick={() => alert(props.name + ' added!')}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

function App() {
  const burgers = [
    { id: 1, name: 'Crispy Chicken Burger', price: '135', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAU9SxzLf5KfeZP4VBSRuJlVcEqg5vtbYHwU1bmj1kfA&s=10' },
    { id: 2, name: 'Italian Special Burger', price: '150', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE8medrC_NG5VRlKsDg9PneC-4cA8wbo7G8a5bdeBRWA&s=10' },
    { id: 3, name: 'Cheesy Classic Burger', price: '120', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa7drEValYG__ZFXwkXga56ogvCg3je99HG61mH8NJxQ&s=10' },
  ];

  return (
    <div>
        <header>
        <h2>🍔 TASTY BURGER</h2>
        <p>ABOUT | MENU | SHOP | CONTACT | 🛒 </p>
      </header>

      <div className="title">
        <h1>OUR CRAZY BURGERS</h1>
        <p>Our burgers are loaded with juicy patties and bold toppings!</p>
      </div>

      <div className="list">
        {burgers.map((b) => (
          <BurgerBox 
            key={b.id}
            name={b.name}
            price={b.price}
            image={b.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;