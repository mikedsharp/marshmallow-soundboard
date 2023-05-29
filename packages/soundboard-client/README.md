# Soundboard Client App

## Setup

This project requires NodeJS, please install Node however you prefer. There are many ways, such as running the installer from https://nodejs.org/en or using `nvm` or other package managers.

Minimum supported node version is node version 16

## Before you run the app

Please ensure you have the `soundboard-listener` app running on the machine you want to hear the sounds played, if you're using the soundboard for streaming, this would be whatever device you've set up in your broadcasting software (Such as OBS) and want to capture audio from.

The `soundboard-listener` project can be found here:
https://github.com/programmerinprogress/soundboard-listener

Once you have the `soundboard-listener` project up and running (it will be running by default on port 3000), you need to take the environment variable that the `soundboard-listener` gave you in the console output and add it to a `.env` file at the root of the project.

The `.env` file should now look something like this, but with your local network ip included instead of the placeholder text:

> `VITE_SOUND_SERVER_ADDRESS=http://<YOUR LOCAL IP ADDRESS>:3000`

## installing dependencies

At the root of the project (where the `package.json` is located), run the command in your terminal:

> `npm install`

You should now have all of the NodeJS packages needed to run the soundboard

## Running the app

At the root of the project (where the `package.json` is located), run the command in your terminal:

> `npm run dev -- --host`

This will allow you to host a local version of the soundboard, which you can then access from other devices on your local network (such as a tablet or phone)

The app should now be accessible at `http://localhost:5173`, but if you need to access this from another device, the correct address will be displayed in the console for you to follow (this will start with `http://192.168`, followed by the rest of the IP address on your network)

## Using the soundboard

As the app tries to make a connection with the `soundboard-listener`, you will see a blank screen for a few seconds, but shortly after you should see all of your soundboard tiles, loaded from the listener.

Tap away at the tiles and you should hear lots of different sounds happen almost instantly on your chosen device.

## Not hearing sounds?

Please check the following:

- is your `soundboard-listener` running?
- did you setup your `soundboard-listener` to include and MP3s sounds and did you update the `sound-manifest.json` to pull in your sounds? (no default sounds are added to the `soundboard-listener`, you need to provide those
- is the IP for your `soundboard-listener` correct?
- did you set up your `.env` file correctly as stated in this README?

Happy Soundboarding!
