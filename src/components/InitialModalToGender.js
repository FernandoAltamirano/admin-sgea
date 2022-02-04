import "./styles/InitialModalToGender.css";
export default function InitialModalToGender({ selectOption }) {
  const handleSelectOption = () => {
    const radioButtons = Array.from(document.getElementsByName("gender"));
    // console.log(radioButtons);
    const selected = radioButtons.filter((radio) => radio.checked);
    selectOption(selected[0].value);
  };
  return (
    <div className="modal modal_gender">
      <div>
        <h2>Seleccione su género</h2>
        <div>
          <input hidden id="male" type="radio" name="gender" value="M" />
          <label htmlFor="male">Masculino</label>
          <input id="female" hidden type="radio" name="gender" value="F" />
          <label htmlFor="female">Femenino</label>
          <input id="other" hidden type="radio" name="gender" value="N" />
          <label htmlFor="other">Otro</label>
        </div>
        <div className="container_btn">
          <button onClick={handleSelectOption}>Continuar</button>
        </div>
      </div>
    </div>
  );
}
