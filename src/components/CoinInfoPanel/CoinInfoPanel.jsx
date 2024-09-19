import { useSelector } from "react-redux";
import styles from "./CoinInfoPanel.module.css";

const CoinInfoPanel = () => {
  const selectedCoin = useSelector((state) => state.coin.selectedCoin);
  const coinData = useSelector((state) => state.webSocket.data[selectedCoin]);

  const coins = {
    "KRW-BTC": "비트코인",
    "KRW-ETH": "이더리움",
    "KRW-BCH": "비트코인캐시",
    "KRW-SOL": "솔라나",
    "KRW-AAVE": "에이브",
    "KRW-XRP": "리플",
  };

  const coin = coins[selectedCoin];
  const tradePrice = coinData ? coinData.trade_price.toLocaleString() : "";
  const changeRate = coinData ? (coinData.change_rate * 100).toFixed(2) : "";
  const change = coinData ? coinData.change : null;

  const percentageSign = change === "RISE" ? "+" : change === "FALL" ? "-" : "";
  const changeStyle = change === "RISE" ? styles.rateRise : styles.rateFall;
  const priceStyle =
    change === "RISE"
      ? styles.priceRise
      : change === "FALL"
      ? styles.priceFall
      : "";

  return (
    <div className={styles.coinInfoPanel}>
      <h2 className={styles.coinName}>{coin}</h2>
      <span className={priceStyle}>{tradePrice}원</span>
      <span className={changeStyle}>
        {changeRate ? `${percentageSign}${changeRate}%` : ""}
      </span>
    </div>
  );
};

export default CoinInfoPanel;
