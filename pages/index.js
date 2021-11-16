// Components
import Image from "next/image";

// Styling
import styles from "@styles/pages/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <Image
          src={"/images/home_artwork.png"}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="PTNK"
          className={styles.artwork}
        ></Image>
        <div className={styles.title}>
          <h1>
            Kỷ Yếu <br />
            25 Năm Năng Khiếu <br />
            <h2>1993 - 2021</h2>
            <h3>
              Trường Phổ Thông Năng Khiếu - Đại học Quốc Gia TP.HCM
            </h3>
          </h1>
        </div>
      </div>
    </div>
  );
}
