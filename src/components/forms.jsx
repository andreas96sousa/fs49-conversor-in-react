import "./form.css";
import logo from "../assets/react.svg";

conversor.addEventListener("click", () => {
    const valorInserido = parseFloat(valor.value);
  });
  
function Form() {
  const valor = document.querySelector("#valor");
  const de = document.querySelector("#de");
  const para = document.querySelector("#para");
  const switchButton = document.querySelector("#switch");
  const conversor = document.querySelector("#conversor");

  const taxas = {
    brl: { brl: 1, usd: 0.18, eur: 0.16 },

    usd: { brl: 5.47, usd: 1, eur: 0.86 },

    eur: { brl: 6.37, usd: 1.16, eur: 1 },
  };

  
  function converter() {}

  function switchSelector() {}

  return (
    <>
      <main>
        <form>
          <h1>Conversor de Moedas</h1>

          <div class="caixa-valor">
            <label for="valor">Insira o valor:</label>
            <input type="number" id="valor" />
          </div>

          <div class="caixa-moedas">
            <div class="moeda">
              <label for="de">De</label>
              <select id="de">
                <option value="brl">BRL</option>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
              </select>
            </div>

            <button type="button" id="switch">
              <img src={logo} />
            </button>

            <div class="moeda">
              <label for="para">Para</label>
              <select id="para">
                <option value="brl">BRL</option>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
              </select>
            </div>
          </div>

          <span id="resultado">Digite um valor válido!</span>

          <button type="button" id="conversor">
            Converter
          </button>
        </form>
      </main>
    </>
  );
}

export default Form;
