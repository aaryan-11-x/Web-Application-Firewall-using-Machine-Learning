import { useState } from "react";
import { Header } from "./components/Header/Header";
import { InputComponent } from "./components/InputComponent/InputComponent";
import { Result } from "./components/Result/Result";
import { checkInputAPI } from "./api"; // Import the API function
import "./App.css";

export function App() {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const checkInput = async () => {
    setHasSubmitted(true);

    if (inputText.trim() === "") {
      setResult("no_input");
      return;
    }

    setLoading(true);

    const apiResult = await checkInputAPI(inputText);

    setResult(apiResult);
    setLoading(false);
  };

  return (
    <>
      <Header />
      <div className="main_body">
        <InputComponent
          inputText={inputText}
          setInputText={setInputText}
          checkInput={checkInput}
        />
        {loading && <p>Loading...</p>}
        {!loading && hasSubmitted && <Result isMalicious={result} />}
      </div>
    </>
  );
}
