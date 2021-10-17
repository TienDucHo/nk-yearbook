import homeSectionStyles from "@styles/components/HomeSection.module.scss";

const HomeSection = ({ tagline, children }) => {
  return (
    <div className={homeSectionStyles.sections}>
      <p className={homeSectionStyles.taglines}>{tagline}</p>
      <div className={homeSectionStyles.contents}>{children}</div>
    </div>
  );
};

export default HomeSection;
