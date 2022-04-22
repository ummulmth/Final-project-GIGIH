# Gigih Playlist

This project for Final Project Generasi Gigih Batch 2 in FrontEnd track [Generasi Gigih](https://www.anakbangsabisa.org/generasi-gigih/program). This is a music web application that intergated with Spotify API.

## Features

- **Login** using your spotify developers account 🔊
- Search your favorite music using **Search music** feature 🔍
- **Create playlist** from your favorite music 🎧
- **New Realease** for discover new music 💕
- **Switch Theme** Dark/Light mode 🌚🌞

## Build using

- [Create React App](https://create-react-app.dev/) to initialize the project.
- [Typescript](https://typescriptlang.org).
- [Jest](https://jestjs.io/), [react testing-library](https://testing-library.com/) and [msw](https://mswjs.io/) for testing the UI and implementation.
- [Chakra-ui](https://chakra-ui.com/guides/first-steps) and [Framer/motion](https://www.framer.com/motion/) to make the user interface.
- [React redux](https://react-redux.js.org/) for state management (store).
- Deploy using [Vercel](https://vercel.com/).

## Getting Started

This is the step if you want to run this project on your own

### Run App

1. Clone this repository
```
git clone https://github.com/ummulmth/Final-project-GIGIH
```
2. Open the project directory folder from your command prompt or Git Bash
```bash
cd Final-project-GIGIH
```
3. Installing the packages
```
npm install
```
4. Setup the [environment variable]() to run this project.
5. Start the server
```
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result

### Run Test

You can launch the test runner by using
### `npm run test`

## Environment Variable

You have to set the `.env` file to add environment variable to run this project
- Create the `.env` file.
- Update your `.env` 
```
REACT_APP_CLIENT_ID = Your clienT id from [Spotify Developer](https://developer.spotify.com/dashboard/login) account
```
