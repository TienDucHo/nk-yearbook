// Components
import HomeSection from "@components/HomeSection";

// Styling
import styles from "@styles/pages/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <HomeSection tagline={"You're Welcome"}>
        <div className={styles.columns}>
          <h2 className={styles.titles}>
            25 năm, 2 cơ sở, 1 Năng Khiếu
          </h2>
        </div>
        <div className={styles.columns}>
          <div>
            <p>
              Trường Phổ Thông Năng Khiếu thuộc Đại học Quốc Gia Thành
              Phố Hồ Chí Minh được thành lập vào ngày 4/7/1996. Trải
              qua 25 năm vận hành và phát triển, trường Năng Khiếu tự
              hào với 3 giá trị và 1 nền tảng giữ vững đến ngày hôm
              nay.
            </p>
            <p>
              3 giá trị: Tự do - Trực thuộc Đại Học - Năng Khiếu đều
              dựa trên 1 nền tảng cốt lõi: Con người. Thành công hiện
              nay của trường đều nhờ vào sự góp sức của con người 25
              năm thế hệ Năng Khiếu.
            </p>
            <p>
              Cơ sở giáo dục trực thuộc đại học <br />
              Tính từ ngày thành lập, tới nay trường PTNK đã có một
              đội ngũ giáo viên vô cùng đa dạng đến từ nhiều trường
              đại học thuộc khối ĐHQG như ĐHKHTN, ĐHKHXH&amp;NV cũng
              như một số thầy cô có uy tín chuyên môn đến từ các
              trường PTTH trong thành phố.
            </p>
          </div>
        </div>
      </HomeSection>
      <HomeSection tagline={"Điều làm nên sự khác biệt"}>
        <div className={styles.columns}>
          <h2 className={styles.titles}>
            25 năm, 2 cơ sở, 1 Năng Khiếu
          </h2>
        </div>
        <div className={styles.columns}>
          <p>
            Tự do ở năng khiếu - từ sự tò mò đến những ý tưởng lớn: cơ
            hội để dám thử và dám sai, trưởng thành trong những trải
            nghiệm. &quot;Tự do&quot; của mỗi thế hệ có thể khác nhau,
            và có thể thay đổi khác trước, nhưng ở Năng Khiếu, ta kiến
            tạo tự do.
          </p>
          <blockquote className={styles.quotes}>
            &quot;Năng Khiếu không có nội quy.
            <br /> Nội quy của Năng Khiếu là lòng tự trọng.&quot;
          </blockquote>
        </div>
      </HomeSection>
      <HomeSection tagline={"Điều làm nên sự khác biệt"}>
        <div className={styles.columns}>
          <h2 className={styles.titles}> Năng Khiếu - Be Gifted</h2>
        </div>
        <div className={styles.columns}>
          <p>
            Trong NH 21-22, trường PTNK có ... học sinh, đang theo học
            tại ... lớp thuộc 3 khối 10,11,12 chia đều vào 7+ khối
            chuyên khác nhau, trong đó khoảng x% học sinh thuộc các
            tỉnh ngoại thành TPHCM. Những năm qua, nhà trường cũng đã
            đào tạo x học sinh tốt nghiệp thpt, hiện đã tốt nghiệp
            hoặc đang theo học bậc đại học và các chương trình sau đại
            học ở các trường danh tiếng trong và ngoài nước, trải dài
            trên nhiều quốc gia và châu lục (Hoa kỳ, Anh, Úc, Nhật,
            Pháp, Hàn Quốc, Singapore…)
          </p>
        </div>
      </HomeSection>
    </div>
  );
}
