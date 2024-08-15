
# BangaloreHousePriceEstimator

## Description
BangaloreHousePriceEstimator is a machine learning project aimed at predicting house prices in Bangalore based on features like the number of bedrooms, number of bathrooms, area in square feet, and location. By leveraging data from a Kaggle 2016 dataset, this project demonstrates the application of various machine learning techniques to solve a real-world problem.

The project highlights skills in data preprocessing, model training, and deployment using a Flask server. It's an example of how machine learning can be used to provide actionable insights in the real estate market.

## Problem it Solves
In a rapidly growing city like Bangalore, accurately estimating property prices can be challenging due to the diverse range of factors influencing the market. This project helps in predicting the price of a house based on several key inputs, providing potential buyers and real estate agents with a valuable tool to make informed decisions.

## Technologies Used
- **Python**: The core programming language used for developing the project.
- **Pandas**: For data manipulation and analysis.
- **Matplotlib**: For visualization
- **Jupyter Notebook**: For interactive development and data exploration.
- **scikit-learn (SKlearn)**: The library used for implementing machine learning models.
- **Flask**: To create a simple web application for serving predictions.
- **HTML, CSS, JavaScript**: For the frontend interface.

## Dataset
[Source](https://www.kaggle.com/datasets/amitabhajoy/bengaluru-house-price-data)

The dataset used in this project is sourced from a Kaggle 2016 dataset containing real estate data for Bangalore. It includes the following key features:
- **Number of Bedrooms**
- **Number of Bathrooms**
- **Area in Square Feet**
- **Location** 
- **Availability**
- **Price**
- **Etc**

## Data Preprocessing
The data preprocessing steps involved:
- Handling missing values by either imputing them or removing affected rows.
- Encoding categorical variables, such as location, into numerical values.
- Scaling numerical features to ensure uniformity for model training.

## Model Training
A machine learning model was trained using the processed data. The following steps were involved:
- **Model Selection**: A linear regression model was chosen due to its simplicity and effectiveness for this type of problem.
- **Hyperparameter Tuning**: Grid search and cross-validation techniques were used to fine-tune the model.
- **Evaluation Metrics**: The model was evaluated using metrics like Root Mean Squared Error (RMSE) and R^2 to measure its performance.
- **Score**: The model scored 84.5%

## Web UI
The project includes a web interface where users can input the required features and get an estimated house price. Below is the screenshots of the web UI:

<img src="https://github.com/Sameer-kallurkar/Banglore-price-estimator-ML-project/blob/main/project%201%20(%20Estate%20price%20predictor)/client/images/UI.png" alt="User Interface" width="500">

## Usage
The trained model is deployed using a Flask server, allowing users to input features and receive an estimated house price. While detailed usage instructions are omitted, the project is designed to be intuitive for those familiar with Python and web development.
