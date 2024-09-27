// import logo from './logo.svg';
import './App.css';
import HeaderPart from './Components/HeaderPart';
import Product from './Components/Product';
import Products from './Components/Products';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    
      <Products />
      <HeaderPart />
      <h1>welcome to our webiste</h1>
      <Product />
   
    </div>
  );
}

export default App;
