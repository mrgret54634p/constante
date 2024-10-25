/*import React, {useState} from "react";

function Exponencial(){
    const [numero, setNumero] = useState(0);
    const [resultado, setResultado] = useState(0);
    const [exponente, setExponente] = useState(0);
    //const ExponenteConstante = 3.5;

    function calcularExponencial() {
        const resultadoCalculado = Math.pow(numero,exponente);
        setResultado(resultadoCalculado);
    }
    return (
        <div>
            <h1>Calculadora Exponencial</h1>
            <form onSubmit={(e) => {e.preventDefault(); calcularExponencial(); }}>
            <label htmlFor="numero">Ingrese la Base: </label>
            <input
                type="number"
                id="numero"
                value={numero}
                onChange={(e) => setNumero(Number(e.target.value))}
                placeholder="Ingrese el numero"
            /><br/>
            <label htmlFor="exponente">Ingrese el Exponente: </label>
            <input
                type="number"
                id="exponente"
                value={exponente}
                onChange={(e) => setExponente(Number(e.target.value))}
                placeholder="Ingrese el exponente"
            /><br/>
            <button type="submit">Calculadora Exponencial</button>
            </form>
            {resultado !== 0 && (
                <div>
                    <h3>Resultado: {resultado.toFixed(2)}</h3>
                </div>
            )}
        </div>
    );
}

export default Exponencial;*/
import React, { useState } from 'react';

function Exponencial() {
  const [base, setBase] = useState('');
  const [exponente, setExponente] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularExponencial = () => {
    const baseNumerica = parseFloat(base);
    const exponenteNumerico = parseFloat(exponente);
    if (!isNaN(baseNumerica) && !isNaN(exponenteNumerico)) {
      setResultado(Math.pow(baseNumerica, exponenteNumerico));
    } else {
      setResultado('Entrada inválida');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Calculadora Exponencial</h1>
      <div>
        <input
          type="number"
          placeholder="Ingrese la Base"
          value={base}
          onChange={(e) => setBase(e.target.value)}
        /><br/><br/>
      </div>
      <div>
        <input
          type="number"
          placeholder="Ingrese el Exponente"
          value={exponente}
          onChange={(e) => setExponente(e.target.value)}
        /><br/><br/>
      </div>
      <button onClick={calcularExponencial}>Calcular Exponencial</button>
      {resultado !== null && (
        <div>
          <h2>Resultado: {resultado}</h2>
        </div>
      )}
    </div>
  );
}

export default Exponencial;



///CALCULADORA COCOMO II
/*import React, { useState } from "react";

function CalculadoraCOCOMO() {
    const [loc, setLoc] = useState(0);
    const [esfuerzo, setEsfuerzo] = useState(null);
    const [tiempoDesarrollo, setTiempoDesarrollo] = useState(null);
    const [personal, setPersonal] = useState(null);
    const [productividad, setProductividad] = useState(null);
    const [costo, setCosto] = useState(null);

    const calcularCOCOMO = () => {
        

        // Esfuerzo (personas-mes)
        const LOC = loc / 1000;
        const ESF = 39 * Math.pow(LOC, 1.12);

        // Tiempo de desarrollo (meses)
        const TDES = 2.5 * Math.pow(ESF, 0.35);

        // Personal necesario
        const CP = ESF / TDES;

        // Productividad estimada
        const P = loc / ESF; // L = ML * 1000 para obtener las líneas de código

        // Costo estimado (en Bs)
        const CHM = 3070.60; // Puedes cambiar este valor por el costo por persona-mes
        const C = ESF * CHM;

        // Establecer los estados
        setEsfuerzo(ESF.toFixed(2));
        setTiempoDesarrollo(TDES.toFixed(2));
        setPersonal(CP.toFixed(2));
        setProductividad(P.toFixed(2));
        setCosto(C.toFixed(2));
    };

    return (
        <div className="calculadora-cocomo" class="card" >
            <h1>Calculadora COCOMO I</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    calcularCOCOMO();
                }}
            >
                <label htmlFor="kloc">Tamaño del Proyecto (KLOC): </label>
                <input
                    type="number"
                    id="kloc"
                    value={kloc}
                    onChange={(e) => setKloc(Number(e.target.value))}
                    placeholder="Ingrese KLOC"
                /><br/>
                <button type="submit">Calcular</button>
            </form>
            {esfuerzo && (
                <div className="resultados">
                    <h3>Esfuerzo Estimado: {esfuerzo} personas-mes</h3>
                    <h3>Tiempo de Desarrollo Estimado: {tiempoDesarrollo} meses</h3>
                    <h3>Personal Requerido: {personal} personas</h3>
                    <h3>Productividad Estimada: {productividad} KLOC/persona-mes</h3>
                    <h3>Costo Estimado: {costo} Bs</h3>
                </div>
            )}
        </div>
        //CALCULADORA COCOMO II
        <div class="container" className="calculadora-cocomo">
        
            <div class="row justify-content-center">
                <div class="col-auto card">
                <h1>Calculadora COCOMO II</h1>
                <center><p>Tamanio del Proyecto (LOC) con Visual Studio </p></center>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    calcularCOCOMO();
                }}>
                    
                <input
                    type="number"
                    id="loc"
                    value={loc}
                    onChange={(e) => setLoc(Number(e.target.value))}
                    placeholder="Ingrese KLOC"
                />
                <br/><br></br>
            <button class="btn btn-primary mb-3" type="submit" >Calcular</button>
            </form>
            <center><h3>Esfuerzo Estimado: </h3></center>
            {esfuerzo && (
                <div className="resultados">
                    
                    <p>{esfuerzo} personas-mes</p>
                    
                </div>
            )}
            <center><h3>Tiempo de Desarrollo Estimado:</h3></center>
            {esfuerzo && (
                <div className="resultados">
                    <p>{tiempoDesarrollo} meses</p>
                    
                </div>
            )}
            <center><h3>Personal Requerido: </h3></center>
            {esfuerzo && (
                <div className="resultados">
                    <p>{personal} personas</p>
                    
                </div>
            )}
            <center><h3>Productividad Estimada: </h3></center>
            {esfuerzo && (
                <div className="resultados">
                    <p>{productividad} LOC/persona-mes</p>
                    
                </div>
            )}
            <center><h3>Costo Estimado: </h3></center>
            {esfuerzo && (
                <div className="resultados">
                    <p> {costo} Bs</p>
                </div>
            )}
            </div>
            </div>
            </div>
    );
}

export default CalculadoraCOCOMO;*/


