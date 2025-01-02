# Setup
Before installing everything, this project requires ```npm v8.19.4```  and ```node v16.20.2```. Node Version Manager or NVM is recommended. See this [link](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/) for installation instructions.
### ENV
```
PORT=5000
HOST=localhost
HOST_URL=http://localhost:5000
API_KEY=732d15a9
```

# How to install
After downloading the required version of node and npm, it's time to install the project. In your terminal run the command ```nvm use 16``` and install the package dependencies using the command ```npm install```.

### Dependencies
```json
"dependencies": {
    "axios": "^1.7.9",
    "cors": "^2.8.5",
    "dotenv": "^16.4.7",
    "express": "^4.21.2",
    "typescript": "^5.7.2"
},
"devDependencies": {
    "@types/cors": "^2.8.17",
    "@types/express": "^5.0.0",
    "@types/jest": "^29.5.14",
    "@types/node": "^22.10.2",
    "@types/supertest": "^6.0.2",
    "jest": "^29.7.0",
    "supertest": "^7.0.0",
    "ts-jest": "^29.2.5",
    "ts-node": "^10.9.2"
}
```

Run the program using the command ```npm run start```. You will see ```Server is live: http://localhost:5000```.