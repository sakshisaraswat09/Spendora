from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import pickle
from catboost import CatBoostRegressor

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Load model from .pkl
with open("catboost_model.pkl", "rb") as f:
    model = pickle.load(f)

# Define categorical encoders
months = [f"Month_{i}" for i in range(1, 13)]
occupation_map = {'Engineer': 0, 'Doctor': 1, 'Artist': 2, 'Entrepreneur': 3}
month_map = {month: i for i, month in enumerate(months)}
city_tier_map = {'Tier_1': 0, 'Tier_2': 1, 'Tier_3': 2}

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    df = pd.DataFrame([data])

    # Apply same preprocessing
    df['Month'] = df['Month'].map(month_map)
    df['Occupation'] = df['Occupation'].map(occupation_map)
    df['City_Tier'] = df['City_Tier'].apply(lambda x: city_tier_map.get(f"Tier_{x}", 0))

    # Make prediction
    prediction = model.predict(df)[0]
    return jsonify({"predicted_expense": round(float(prediction), 2)})

if __name__ == "__main__":
    app.run(debug=True) 


   