import { useSelector } from "react-redux";
import styles from "./MarketTicker.module.css";

const MarketTicker = () => {
  const marketData = useSelector((state) => state.webSocket.data);

  return (
    <div>
      <ul className={styles.market}>
        {Object.keys(marketData).map((coin) => {
          const { trade_price, change_rate, change } = marketData[coin];

          const percentageStyle = change === "RISE" ? styles.rise : styles.fall;
          const percentageSign = change === "RISE" ? "+" : "-";

          return (
            <li key={coin} className={styles.coin}>
              <div className={styles.name}>{coin}</div>
              <div className={styles.price}>
                {trade_price ? trade_price.toLocaleString() : "로딩중..."}
              </div>
              <div className={percentageStyle}>
                {change_rate
                  ? percentageSign + (change_rate * 100).toFixed(2) + "%"
                  : "로딩중..."}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MarketTicker;
