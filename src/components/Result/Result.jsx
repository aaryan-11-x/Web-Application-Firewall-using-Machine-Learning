import s from "./style.module.css";

export function Result({ isMalicious }) {
  let resultText;
  let resultColor;

  if (isMalicious === "malicious") {
    resultText = "The input is Malicious!!!";
    resultColor = "red";
  } else if (isMalicious === "not malicious") {
    resultText = "The input is not Malicious.";
    resultColor = "green";
  } else if (isMalicious === "no_input") {
    resultText = "No input provided";
    resultColor = "black";
  } else {
    resultText = "Error: Unexpected result";
    resultColor = "black";
  }

  return (
    <div className={s.container} style={{ color: resultColor }}>
      <h2>{resultText}</h2>
    </div>
  );
}
