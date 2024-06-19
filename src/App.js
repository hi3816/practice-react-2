import styles from "./index.module.css"
import { useState , useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dolor, setDolor] = useState(0);
  const [inputDolor, setInputDolor] = useState(0);
  const [selectedCoin, setSelectedCoin] = useState('');

  const coinSelect = (e) => {
    setSelectedCoin(e.target.value);
    console.log(e.target);
  };


  const onChange = (e) => {
    setInputDolor(e.target.value);
  }
  const activeEnter = (e) => {
    if(e.key === "Enter") {
      onClick();
      setInputDolor('');
    }
  }

  const onClick = () => setDolor(inputDolor);
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  },[])
  return(
    <div>
      <h1>The Conins!({coins.length})</h1>
      <hr />
      <span>your dolor : </span><input placeholder="입력" type="number" onChange={onChange} onKeyDown={(e) => activeEnter(e)} value={inputDolor}/>
      <button onClick={onClick}>입력</button>
      <div>
      {loading ? <strong>Loading...</strong> : 
        <select onChange={coinSelect} value={selectedCoin}>
          <option>선택해주세요</option>
        {coins.map((coin) => (
          <option key = {coin.id} value ={coin.quotes.USD.price}>{coin.name}({coin.symbol}) : {coin.quotes.USD.price} USD</option>
        ))}
        </select>
        
      }
      </div>
      <h4>당신의 달러는 ${dolor}</h4>
      <h4>코인의 가치는 ${selectedCoin}</h4>
      <h4>당신이 살 수 있는 코인 수는 {dolor / selectedCoin} 개 입니다</h4>
    </div>
  )
}

export default App;
