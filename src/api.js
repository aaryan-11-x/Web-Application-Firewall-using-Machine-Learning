const API_URL = "http://127.0.0.1:8000/predict";

export const checkInputAPI = async (inputText) => {
  console.log("Sending input to API:", inputText);
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input: inputText }),
    });
    console.log("API response status:", response.status);

    const data = await response.json();
    console.log("Received data from API:", data);

    if (response.ok) {
      return data.result;
    } else {
      console.error(data.error);
      return null;
    }
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};
