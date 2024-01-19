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

# Task 

Technical Assignment Task:
Build a simple application which provides web services to facilitate group chat and manage data.
Admin APIs (only admin can add users)
- Manage Users (create user, edit user)
Any User (normal user, admin user) –
Authentication APIs (login, logout)
Groups (Normal User) –
Manage groups (create, delete, search and add members, etc). All users are visible to all users.
Group Messages (Normal User)
- Send messages in group
- Likes message, etc
Build simple e2e functional tests with python/nodejs to prove APIs are
working.
Requirements
– Use database of your choice

# As per this task following things are implemented 

1. Real time group chat Web Application with Normal users 
2. User data is managed from Admin, Operation like Add , edit , View users are available for user login
3. For normal / admin user Login/ Logout functionality is created 
4. For normal user Group creation/ deletion/ Search / Add functionality is given 
5. Real time message view functionality is created 
6. All test cases are written in node js for API testing 
