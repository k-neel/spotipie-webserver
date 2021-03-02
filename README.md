# Spotipie-webserver
Node.js API Server for requesting authentication token from Spotify for [Spotipie-bot](https://github.com/NeelPlaysAC/spotipie-bot).

Can be found on telegram as [Spotipiebot](https://t.me/Spotipiebot).

# Getting started
- Install dependencies
```
cd <project_name>
npm install
```
This will install all necessary python packages.

- Getting TypeScript
```
npm install -D typescript
```
- Start your mongoDB server (you'll probably want another command prompt)
```bash
mongod
```
- Environment variables
The following env variables are supported:
 `ENVIRONMENT`: default: 'production'. Anything else is treated as 'dev'
 `MONGODB_URI`: Your database URI.
 `MONGODB_URI_LOCAL`: Your database Local URI (eg. 'mongodb://localhost:27017/your-db-name').
 `MONGODB_URI_LOCAL`: An integer of consisting of your owner ID
```
