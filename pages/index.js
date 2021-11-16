// Styling
import styles from "@styles/pages/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1>Kỷ Yếu</h1>
        <h1>25 Năm Năng Khiếu</h1>
        <h2>1993-2021</h2>
        <h3>Trường Phổ Thông Năng Khiếu - Đại học Quốc Gia TP.HCM</h3>
      </div>
    </div>
  );
}
