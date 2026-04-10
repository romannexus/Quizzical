export default function StartSection(props) {
  return (
    <section className="start-section">
      <h1>Quizzical</h1>
      <p>Some decription if needed</p>
      <button onClick={props.onClick}>Start quiz</button>
    </section>
  );
}
