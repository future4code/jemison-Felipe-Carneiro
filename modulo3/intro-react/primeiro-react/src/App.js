import logo from './img/lipe1.jpeg';
import './App.css';

function App() {

  const topo = 'Olá! Eu sou o Felipe!'
  const enviarMensagem =()=>{
    alert('Olá! Boa noite!')
  }

  return (
    <div className="App">
      
      <header className="App-header">
        <h1>{topo}</h1>
        <img src={logo} className="App-logo" alt="foto de perfil" />
        <p>Este é o meu primeiro site React</p>
        <button onClick={enviarMensagem}>Aperte este botão</button>
     
       
      </header>
    </div>
  );
}

export default App;
