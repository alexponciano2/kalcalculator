import React, { useState } from 'react';

function Container() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);

    function handleSum() {
        setResult(num1 + num2);
    }

    return (
        <div>
            <label htmlFor="num1">Caso esteja sozinho, repita seu level nos dois campos.</label>
            <br/><br/>
            <label htmlFor="num1">Level do mais noob:</label>
            <input
                type="number"
                value={num1}
                onChange={e => setNum1(+e.target.value)}
            /><br />
            <label htmlFor="num1">Level do mais forte:</label>
            <input
                type="number"
                value={num2}
                onChange={e => setNum2(+e.target.value)}
            /><br/>
            <button onClick={handleSum}>Somar</button>
            <p>Resultado: {result}</p>
        </div>
    );
}

export default Container;
