import styles from "./TradePanel.module.css";

const TradePanel = () => {
  return (
    <div className={styles.tradePanel}>
      <div className={styles.inputWrapper}>
        <span className={styles.inputText}>수량</span>
        <input type="number" className={styles.amountInput} />
        <span className={styles.percentageSign}>%</span>
      </div>
      <div className={styles.amountButton}>
        <button className={styles.percentage}>25%</button>
        <button className={styles.percentage}>50%</button>
        <button className={styles.percentage}>100%</button>
      </div>
      <div className={styles.tradeButton}>
        <button className={styles.buy}>매수</button>
        <button className={styles.sell}>매도</button>
      </div>
    </div>
  );
};

export default TradePanel;
