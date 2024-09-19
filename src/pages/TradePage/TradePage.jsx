import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCoin } from "../../features/Coin/Coin";
import styles from "./TradePage.module.css";

import NavButtons from "../../components/NavButtons/NavButtons";
import CandleChart from "../../components/CandleChart/CandleChart";
import TradePanel from "../../components/TradePanel/TradePanel";
import CoinInfoPanel from "../../components/CoinInfoPanel/CoinInfoPanel";

const TradePage = () => {
  const { coinId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const selectedCoin = useSelector((state) => state.coin.selectedCoin);
  const marketData = useSelector((state) => state.webSocket.data);

  useEffect(() => {
    if (coinId) {
      dispatch(setCoin(coinId));
    }
  }, [coinId, dispatch]);

  const handleCoinChange = (coin) => {
    navigate(`/trade/${coin}`);
    dispatch(setCoin(coin));
  };

  const coins = [
    { name: "비트코인", code: "KRW-BTC" },
    { name: "이더리움", code: "KRW-ETH" },
    { name: "비트코인캐시", code: "KRW-BCH" },
    { name: "솔라나", code: "KRW-SOL" },
    { name: "에이브", code: "KRW-AAVE" },
    { name: "리플", code: "KRW-XRP" },
  ];

  return (
    <div className={styles.tradeContainer}>
      <div className={styles.leftSection}>
        <NavButtons
          coins={coins}
          marketData={marketData}
          handleCoinChange={handleCoinChange}
          selectedCoin={selectedCoin}
        />
        <CandleChart coin={selectedCoin} />
      </div>
      <div className={styles.rightSection}>
        <CoinInfoPanel />
        <TradePanel />
      </div>
    </div>
  );
};

export default TradePage;
