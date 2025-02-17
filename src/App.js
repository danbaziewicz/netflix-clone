import categorias from './api';
import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';

function App() {
  return (
    <div className='App'>
      <Nav/>
      <Banner />
      {categorias.map((category) => {
        return (
          <Row key={category.name} 
          title={category.title} 
          path={category.path}
          isLarge={category.isLarge}
          />
        );
        })}
    </div>
  );
}

export default App;
