import pymysql

# Database credentials
HOST = "localhost"  # Change if using a remote database
USER = "your_user"
PASSWORD = "your_password"
DATABASE = "your_database"
PORT = 3306  # Default MySQL port

try:
    # Establish connection
    connection = pymysql.connect(
        host=HOST,
        user=USER,
        password=PASSWORD,
        database=DATABASE,
        port=PORT
    )
    
    print(" Successfully connected to MySQL!")
    
    # Create a cursor object
    cursor = connection.cursor()

    # Execute a simple query
    cursor.execute("SHOW DATABASES;")

    # Fetch and print results
    databases = cursor.fetchall()
    print(" Available Databases:")
    for db in databases:
        print(f"  - {db[0]}")

    # Close connection
    cursor.close()
    connection.close()
except pymysql.MySQLError as e:
    print(f" Database connection failed: {e}")
