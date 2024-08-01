import "./Services.css";

function Services() {
  function update() {
    const updateService = document.getElementById("heading-service");
    updateService.innerText = "I am updated now";
  }
  return (
    <div>
      <h1 id="heading-service">I am a service compo....</h1>
      <button onClick={update}>click me</button>
    </div>
  );
}
export default Services;
