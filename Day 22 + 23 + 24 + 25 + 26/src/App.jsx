import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ClientRouters from './routers/ClientRouters';

function App() {
  return (
    <div className="App">
        <Header/>
        <ClientRouters />
        <Footer/>
    </div>
  );
}

export default App;
