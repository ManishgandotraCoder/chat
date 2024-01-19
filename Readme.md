### Steps to set up

# Clone this repository https://github.com/ManishgandotraCoder/chat.git

# For Front end 
    - From directory Go to client-src 
    - Run npm install 
    - Run  npm start 

    Code will start running on Front end 

# For backend 
    - From directory Go to server-src 
    - Run npm install 
    - Run npm start 

    Code will start running on Backend 

# Database 
- For database create one by name coder 
- Create user schema there and add these 2 users 

        {
        "email": "admin@speedstar.com",
        "password": "password",
        "firstName": "Admin",
        "lastName": "User",
        "phone": "7788996655",
        "role": "ADMIN",
        "__v": 0
        }
        {
        "_id": {
            "$oid": "65aa6066c99fc56541d7b8b0"
        },
        "email": "test@gmail.com",
        "password": "password",
        "firstName": "Dummy",
        "lastName": "coder",
        "phone": "8800463103",
        "role": "NORMAL",
        "__v": 0
        }
 Code will start running 4 steps 

# For test cases 
        1. Go to server-src directory 
        2. Run npm test 

Code will start running its all test cases 