import { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { auth } from "../../firebase";
import styles from "./AssetsOverview.module.css";

const HoldingsPanel = () => {
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(true);
  const db = getFirestore();

  useEffect(() => {
    const fetchAssets = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          setBalance(userData.balance || 0);
        }
      }
      setLoading(false);
    };

    fetchAssets();
  }, [db]);

  if (loading) {
    return <div>로딩</div>;
  }

  return (
    <div className={styles.assetsOverview}>
      <div>
        {balance !== null ? (
          <span className={styles.balance}>
            잔액: {balance.toLocaleString()} 원
          </span>
        ) : (
          <span>잔액을 불러오지 못했습니다</span>
        )}
      </div>
    </div>
  );
};

export default HoldingsPanel;
