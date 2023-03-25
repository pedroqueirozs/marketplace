function Section({ children, title }) {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  );
}
export default Section;
