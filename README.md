# Soundboard listener

## Setup

This project requires NodeJS, please install Node however you prefer. There are many ways, such as running the installer from https://nodejs.org/en or using `nvm` or other package managers.

Minimum supported node version is node version 16

## Install dependencies

Please run `npm install` at the root of the project to install all of the required dependencies to run the project.

## Before you run the app

The `soundboard-listener` project does not come pre-loaded with any soundboard sounds, you need to add sounds to the project and then update the `sound-manifest.json`, either manually or by running a command to make the soundboard sounds available to the `soundboard-client`.

Please add all of your `.mp3` file to the `/media` directory in the project before attempting to run the app.

Once you've added your `.mp3` files, you need to set up your `sound-manifest.json`, you can do this manually by creating a file called `sound-manifest.json` and adding your sounds in the following format.

```
{
  "sounds": [
    { "name": "doh", "label": "doh", "color": "#0f0" },
    { "name": "i-am-so-smart", "label": "i-am-so-smart", "color": "#fff" },
    { "name": "woohoo", "label": "woohoo", "color": "#770" }
  ]
}

```

The `name` field must match the name of your `.mp3` file name.
`color` will set the color of soundboard tile and `label` is just the friendly name that will show on the tile when you run the `soundboard-client`

You can also run the command `npm run build-manifest` and the applicatio will build you a barebones manifest that you can modify if you want to (you can change the color of the soundboard tiles and the name that shows on the soundboard, but this command will get you started)

## Running the app

To run the app, run the following command in your terminal at the project root (where `package.json` is located):

> `npm start`

The `soundboard-listener` will begin running and will keep running until you terminate the process in the terminal (usually you would do Ctrl+C to do this if you haven't before)

In the console, you will see a message printed out telling you to copy the environment variable on the screen, the environment variable will be in the format shown below:

VITE_SOUND_SERVER_ADDRESS=http://<YOUR LOCAL NETWORK IP ADDRESS>:3000

Now you have that URL good and ready, please follow the instructions for getting the `soundboard-client` up and running. You can find the `soundboard-client` at `https://github.com/programmerinprogress/soundboard-client`

When you have the client and the listener all setup, have a great time using the soundboard!
