# Marshmallow Soundboard

An all-purpose cross-platform customizable soundboard, written in Node.js.

## Why Marshmallow?

When I wrote the animation for when you push the sound buttons, I made it squishy like a marshmallow.

## For people who just want to run the soundboard

Please check out the [Releases](https://github.com/mikedsharp/soundboard/releases) page. You can download the executable for your platform (Windows, Linux, MacOS are all supported!)

Once you've unzipped the release, here's how to get started:

## Supported sound formats

.wav, .mp3, .ogg, .flac

### running the soundboard

NOTE: In Windows and MacOS, the OS Will block the app from runnning, and you'll need to allow the application, instructions for each OS below:
- MacOS - Go to https://support.apple.com/en-gb/HT202491#:~:text=In%20System%20Preferences%2C%20click%20Security,%E2%80%9CAllow%20apps%20downloaded%20from%E2%80%9D and read the instructions in the "If you want to open an app that hasn’t been notarised or is from an unidentified developer" section
- Windows - A Microsoft SmartScreen window will appear, click "more info", then click the "run anyway" button that appears, the app should now run.

1. On the computer you want the sounds to play from, run the `soundboard-listener` executable (either by double-clicking it from Explorer/Finder etc or by running from the command line in your OS terminal app). This will start a server that will provide the soundboard web app to whatever handheld device you want to use the soundboard
2. The very first time you run the soundboard, you may get a message box from your OS asking if you'd like to allow the app to run on your local network, you need to allow this so that the soundboard is available on your local network, so select "allow" or "yes", so that the soundboard is available on your local network.
3. Follow the on-screen instructions that show up in the command prompt/terminal window that appeared when you ran the app. The instructions should give you what you need to connect the touch device you want to use to control the soundboard with to the soundboard listener app
4. On the computer running the `soundboard-listener` app, grab some Sound files (see "Supported sound formats") and drop them into the `media` folder that came as part of the unzipped folder, you can drag sounds in and out of the `media` folder and the soundboard will automatically update.
5. You're all set up to use the soundboard, there are more customisation options, but this should get you started. Have fun!

## For people who want to modify the soundboard or run from source

1. Clone this repository
2. In a terminal, navigate to the root of the repo, if you're in the right place, you will see a `packages` folder
3. Make sure you have NodeJS installed, running this app from source requires node version `18`, you can find the NodeJS install at the [NodeJS Website](https://nodejs.org/) or by using your operating systems compatible node version selector (e.g NVM) if you need to have multiple versions installed at once
4. if you're using Node Version Manager, run `nvm use` in order to select the correct Node verison, otherwise move to next step
5. run the command `npm i`, this will install all of the dependencies you need to run the project
6. You're now set up to modify the source and build and run the soundboard (see instructions below for running locally in dev mode and building the soundboard for your platform)
