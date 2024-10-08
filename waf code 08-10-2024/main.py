from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import joblib

app = FastAPI()


origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    # allow_origins=["*"],  # Allow all origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


model = joblib.load("random_forest_model.pkl")
vectorizer = joblib.load("tfidf_vectorizer.pkl")


@app.post("/predict")
async def predict(input_text: dict):
    input_text = input_text.get("input")
    if not input_text:
        return {"error": "No input provided"}

    vectorized_input = vectorizer.transform([input_text])
    prediction = model.predict(vectorized_input)

    result = "malicious" if prediction[0] == 1 else "not malicious"
    return {"result": result}


@app.get("/")
async def root():
    return {"message": "Welcome to the Malicious Input Detection API!"}