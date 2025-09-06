import "./form.css";
import logo from "../assets/react.svg";
import { useState } from "react";

function Form() {
  const [valor, setValor] = useState();
  const [de, setDe] = useState("");
  const [para, setPara] = useState("");
  const [resultado, setResultado] = useState("Digite um valor válido!");

  const taxas = {
    brl: { brl: 1, usd: 0.18, eur: 0.16 },

    usd: { brl: 5.47, usd: 1, eur: 0.86 },

    eur: { brl: 6.37, usd: 1.16, eur: 1 },
  };

  function converter() {
    if (!valor || isNaN(valor)) {
      setResultado("Digite um valor válido!");
      return;
    }

    const convertido = (valor * taxas[de][para]).toFixed(2);
    setResultado(`${valor} ${de.toUpperCase()} = ${convertido} ${para.toUpperCase()}`);
  }

 function trocarMoedas() {
    setDe(para);
    setPara(de);
  }
  return (
    <>
      <main>
        <form>
          <h1>Conversor de Moedas</h1>

          <div className="caixa-valor">
            <label htmlFor="valor">Insira o valor:</label>
            <input type="number" id="valor" value={valor} onChange={
              (e) => setValor(parseFloat(e.target.value))
            }/>
          </div>

          <div className="caixa-moedas">
            <div className="moeda">
              <label htmlFor="de">De</label>
              <select id="de" value={de} onChange={
                (e) => setDe(e.target.value)
              }>
                <option value="brl">BRL</option>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
              </select>
            </div>

            <button type="button" id="switch" onClick={trocarMoedas}>
              <img src={logo} />
            </button>

            <div className="moeda">
              <label htmlFor="para">Para</label>
              <select id="para" value={para} onChange={
                (e) => setPara(e.target.value)
              }>
                <option value="brl">BRL</option>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
              </select>
            </div>
          </div>

          <span id="resultado">{resultado}</span>

          <button onClick={converter} type="button" id="conversor">
            Converter
          </button>
        </form>
      </main>
    </>
  );
}

export default Form;
