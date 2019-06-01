# Haversine App (React, Node.js)

This project is calculate distance between two points
Frontend: React to capture User Inputs as latitude and longitude
Backend: Node.js to recieve api call from Forntend and calculate the distance and send it to UI as response.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). Then an Express server was added in the `server` directory. The server is proxied via the `proxy` key in `package.json`.

## Using this project

Clone the project, change into the directory and install the dependencies.

```bash
git clone https://github.com/gauravs08/haversine-app.git
cd haversine-app
npm install
```

Create a `.env` file for environment variables in your server.

You can start the server on its own with the command:

```bash
npm run server
```

Run the React application on its own with the command:

```bash
npm start
```

Run both applications together with the command:

```bash
npm run dev
```

Run testcases to check the business functionality of haversine formula with various input.

```bash
npm run dtest
```

The React application will run on port 3000 and the server port 3001.

## Demo
