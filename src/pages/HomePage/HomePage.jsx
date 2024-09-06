import MarketTicker from "../../components/MarketTicker/MarketTicker";
import styles from "./HomePage.module.css";

import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <section className={styles.firstSection}>
        <h1 className={styles.title}>데모 트레이딩</h1>
        <p className={styles.description}>
          실제 거래에 앞서 데모 계정에서 가상 자금을 활용하여 거래 경험을 쌓고
          전략을 테스트해보세요
        </p>
        <Link to="/" className={styles.link}>
          데모 계정으로 시작하기
        </Link>
      </section>
      <section className={styles.secondSection}></section>
      <MarketTicker />
    </>
  );
};

export default HomePage;
