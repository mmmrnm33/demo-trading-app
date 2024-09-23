import styles from "./SignupPage.module.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    nickname: "",
    password: "",
    confirmPassword: "",
    initialBalance: 1000000,
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      setSuccess("회원가입이 완료되었습니다.");
      setError("");
      console.log(formData);
    } catch (error) {
      setError(error.message);
      setSuccess("");
    }
  };

  return (
    <div className={styles.container}>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
      {!error && !success && (
        <div className={styles.formWrapper}>
          <h2 className={styles.title}>회원가입</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label className={styles.label}>
              <span className={styles.labelText}>이메일</span>
              <input
                className={styles.input}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>

            <label className={styles.label}>
              <span className={styles.labelText}>비밀번호</span>
              <input
                className={styles.input}
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </label>

            <label className={styles.label}>
              <span className={styles.labelText}>비밀번호 확인</span>
              <input
                className={styles.input}
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </label>

            <label className={styles.label}>
              <span className={styles.labelText}>닉네임</span>
              <input
                className={styles.input}
                type="text"
                name="nickname"
                value={formData.nickname}
                onChange={handleChange}
                required
              />
            </label>

            <label className={styles.label}>
              <span>초기 자금</span>
              <select
                className={styles.select}
                name="initialBalance"
                value={formData.initialBalance}
                onChange={handleChange}
                required
              >
                <option value="1000000">1,000,000</option>
                <option value="5000000">5,000,000</option>
                <option value="10000000">10,000,000</option>
                <option value="50000000">50,000,000</option>
                <option value="100000000">100,000,000</option>
              </select>
            </label>

            <button type="submit" className={styles.submitButton}>
              회원가입
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignUpPage;
