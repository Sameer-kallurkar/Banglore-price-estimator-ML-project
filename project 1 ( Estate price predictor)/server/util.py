import joblib
import json
import numpy as np

__locations = None
__data_columns = None
__model = None

def get_estimated_price(location, sqft, bhk, bath):
    try:
        loc_index = __data_columns.index(location.lower())
    except ValueError:
        loc_index = -1

    x = np.zeros(len(__data_columns))
    x[0] = sqft
    x[1] = bath
    x[2] = bhk
    if loc_index >= 0:
        x[loc_index] = 1

    try:
        return round(__model.predict([x])[0], 2)
    except Exception as e:
        print(f"Error during prediction: {e}")
        return None

def load_saved_artifacts():
    print("Loading saved artifacts...start")
    global __data_columns
    global __locations

    try:
        with open("/Users/sameerkallurkar/PycharmProjects/ML_exec/project 1 ( Estate price predictor)/server/artifacts/columns.json", "r") as f:
            __data_columns = json.load(f)['data_columns']
            __locations = __data_columns[3:]  # Adjust according to your data
    except FileNotFoundError:
        print("columns.json file not found.")
        __data_columns = []
        __locations = []

    global __model
    if __model is None:
        try:
            with open('/Users/sameerkallurkar/PycharmProjects/ML_exec/project 1 ( Estate price predictor)/server/artifacts/Linear_model_price_estimator.pkl', 'rb') as f:
                __model = joblib.load(f)
        except FileNotFoundError:
            print("Model file not found.")
            __model = None

    print("Loading saved artifacts...done")

def get_location_names():
    return __locations

def get_data_columns():
    return __data_columns

if __name__ == '__main__':
    load_saved_artifacts()
    # print(get_location_names())
    print(get_estimated_price('1st Phase JP Nagar', 1000, 3, 3))
    print(get_estimated_price('1st Phase JP Nagar', 1000, 2, 2))
    print(get_estimated_price('Kalhalli', 1000, 2, 2))  # Example location
    print(get_estimated_price('Ejipura', 1000, 2, 2))  # Another example location
