import requests
from datetime import datetime

# The API endpoint 
url = "http://127.0.0.1:8000/api/products/"

data = {
    "name": "momo  ",
    "price": 150, 
    "category": "Food",
    "date": datetime.today().strftime('%Y-%m-%d')
}

response = requests.post(url, json=data)


if response.status_code in [200, 201]: 
    try:
        data = response.json()
        print("Success:", data)
    except requests.exceptions.JSONDecodeError:
        print("Response is not in JSON format.")
else:
    print(f"Error: {response.status_code}, Response: {response.text}")
