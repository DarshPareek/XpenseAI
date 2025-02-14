import requests
from datetime import datetime

# The API endpoint (Make sure Django is running on this port)
url = "http://127.0.0.1:8000/api/products/"

# Data to be sent (Ensure fields match Django model)
data = {
    "name": "Lunch",
    "price": 15.50,  # Correct field name
    "category": "Food",
    "date": datetime.today().strftime('%Y-%m-%d')  # Ensure date format
}

# Send POST request
response = requests.post(url, json=data)

# Handle response
if response.status_code in [200, 201]:  # Accept both success codes
    try:
        data = response.json()
        print("Success:", data)
    except requests.exceptions.JSONDecodeError:
        print("Response is not in JSON format.")
else:
    print(f"Error: {response.status_code}, Response: {response.text}")
