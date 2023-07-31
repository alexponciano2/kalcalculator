import { useState } from 'react';
import Container from './Container/script';
import Header from './Header/script';
import Footer from './Footer/script';
import './App.css';
import JsonDataDisplay from './JsonDataDisplay/script';

function App() {

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  function handleSum() {
    setResult(num1 + num2)
  }

  return (
    <>
      <Header />
      <Container>
        <div>
          <label htmlFor="num1">Caso esteja sozinho, repita seu level nos dois campos.</label>
          <br /><br />
          <label htmlFor="num1">Level do mais noob:</label>
          <input
            className="input1"
            type="number"
            value={num1}
            onChange={e => setNum1(+e.target.value)}
          /><br />
          <label htmlFor="num1">Level do mais forte:</label>
          <input
            className="input2"
            type="number"
            value={num2}
            onChange={e => setNum2(+e.target.value)}
          /><br />
          <button className="calcular" onClick={handleSum}>CALCULAR</button>
        </div>
      </Container>
      <Footer />
    </>
  );
}
export default App;