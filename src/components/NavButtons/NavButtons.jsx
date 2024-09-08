import { useLocation } from "react-router-dom";
import styles from "./NavButtons.module.css";
import { useEffect } from "react";

const NavButtons = ({ coins, marketData, handleCoinChange }) => {
  const location = useLocation();
  const currentCoin = location.pathname.split("/").pop();

  useEffect(() => {
    console.log("Current Coin on initial render:", currentCoin);
  }, [currentCoin]);

  return (
    <nav className={styles.nav}>
      {coins.map((coin) => {
        const coinData = marketData[coin.code];
        const percentageStyle =
          coinData?.change === "RISE" ? styles.rise : styles.fall;
        const percentageSign = coinData?.change === "RISE" ? "+" : "-";
        const isActive = coin.code === currentCoin ? styles.active : "";

        return (
          <button
            className={`${styles.button} ${isActive}`}
            key={coin.code}
            onClick={() => handleCoinChange(coin.code)}
          >
            <div className={styles.info}>
              <span className={styles.name}>{coin.name}</span>
              <span className={styles.code}>{coin.code}</span>
              <span className={percentageStyle}>
                {marketData[coin.code]?.change_rate
                  ? percentageSign +
                    `${(marketData[coin.code].change_rate * 100).toFixed(2)}%`
                  : ""}
              </span>
            </div>
          </button>
        );
      })}
    </nav>
  );
};

export default NavButtons;
