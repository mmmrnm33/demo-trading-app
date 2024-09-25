import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      setSuccess("로그인에 성공했습니다.");
      setError("");

      setTimeout(() => {
        navigate("/");
      }, 1000);
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
          <h2 className={styles.title}>로그인</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label className={styles.label}>
              <span className={styles.labelText}>이메일</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </label>

            <label className={styles.label}>
              <span className={styles.labelText}>비밀번호</span>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </label>

            <button type="submit" className={styles.submitButton}>
              로그인
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
