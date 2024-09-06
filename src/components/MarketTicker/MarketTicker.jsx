import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUpbitWebSocket } from "../../services/websocket";
import { clearData } from "../../features/Markets/Markets";
import styles from "./MarketTicker.module.css";

const MarketTicker = () => {
  const dispatch = useDispatch();
  const marketData = useSelector((state) => state.webSocket.data);

  useEffect(() => {
    const ws = createUpbitWebSocket();

    return () => {
      ws.close();
      dispatch(clearData());
    };
  }, [dispatch]);

  return (
    <div>
      <ul className={styles.market}>
        {Object.keys(marketData).map((coin) => {
          const { trade_price, change_rate, change } = marketData[coin];

          const percentageStyle = change === "RISE" ? styles.rise : styles.fall;
          const percentageSign = change > 0 ? "+" : "-";

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
