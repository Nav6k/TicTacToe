const reactDescription = ["Fundamental", "Crutial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function HandleComponents() {
  return (
    <header>
      <h1>React essentials</h1>
      <p>
        {reactDescription[genRandomInt(2)]}React concept you will need for going
        to build!
      </p>
    </header>
  );
}
export default HandleComponents;
