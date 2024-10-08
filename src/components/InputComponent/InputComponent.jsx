import s from "./style.module.css";

export function InputComponent({ inputText, setInputText, checkInput }) {
  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className={s.container}>
      <p className={s.text}>Test for malicious payload. Insert Payload below</p>
      <div className={s.inputButtonContainer}>
        <input type="text" value={inputText} onChange={handleInput} />
        <button onClick={checkInput}>Check Payload</button>
      </div>
    </div>
  );
}
