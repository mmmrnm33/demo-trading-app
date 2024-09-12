import styles from "./NavButtons.module.css";

const NavButtons = ({ coins, marketData, handleCoinChange, selectedCoin }) => {
  return (
    <nav className={styles.nav}>
      {coins.map((coin) => {
        const coinData = marketData[coin.code];
        const percentageStyle =
          coinData?.change === "RISE" ? styles.rise : styles.fall;
        const percentageSign = coinData?.change === "RISE" ? "+" : "-";
        const isActive = coin.code === selectedCoin ? styles.active : "";

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
