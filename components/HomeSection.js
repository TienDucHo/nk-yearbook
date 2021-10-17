const HomeSection = ({ tagline, title, children }) => {
  return (
    <div>
      <h6>{tagline}</h6>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default HomeSection;
