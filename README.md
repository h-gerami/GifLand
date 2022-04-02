# Gif_Land_App
React Native app to provide random gif and list of searched gifs for the clients to keep the url and use it :)

## Features
- Written by Typescript.
- Powered by Hermes Engine.
- All UI Components are Created and there are no UI kit packages inside the app.
- All net Images load lazily for best performance with react-native-fast-image.
- Errors like network are handled.
- There are tests for APIs and snapshots for HOC Components.
- Beautiful font used.
- Principles, component-based architecture, etc.
- No crashes and No memory leaks.
- The app runs on both iOS and Android phones.

## Screen Shots
Random Gif           |  Searched Gif List
:-------------------------:|:-------------------------:
![](https://user-images.githubusercontent.com/30626411/161376556-c933a411-4034-4cce-b218-8c6c031fe8bb.png)  |  ![](https://user-images.githubusercontent.com/30626411/160277288-b9b4f241-aa3b-459f-9d5f-8551dea5cb99.png)

## Installation
- Clone the project
- Go to root folder
- In terminal => yarn
- cd ios => pod install
- cd ..
- npx react-native run-ios
- npx react-native run-android

## Written language
- I use typescript because I have a good sense of type checking and inteligay of it,
it makes development slower but cleaner and more reliable, and also in the future if the application wants to take on a larger scale,
typescript is a better choice than javascript

## State Managing
- I did not use any state manager in this app, I love using redux for managing state instead of every other package of react functional hooks, but in this version of the app we do not have that much complexity or props drilling or sth that makes us use redux, even for our async api call funcions.

## Design Pattern
- I used Container-View pattern that which is the most efficient and widely used feature building pattern in react environment

## ARCHITECTURE
- /src: all react native codes are here.
- /src/common: all UI kit and hoc components that were created without any third-party except lazyload image (created by react-native-fast-image) are here.
- /src/global: it can cover all global features inside but in this case just a style file.
- src/hooks: i have created custom hooks for our 2 endpoints (search and random), it makes the app cleaner and more readable
- src/navigation: all the routing and their configs are here.
- src/pages: we have 2 pages the HomeScreen (random gif and list of gifs) and the GifDetailScreen.
- src/pages/home/component: i have created 2 separate components for search and list, i think it is a better approach instead of having all of them in one tsx file.
- src/services: we have GifService file here that is an instance of base details of our API call that was created by Axios, It will make the program more integrated.
- src/utils: all the helper methods and global types of any variables are going to be inside, but in this case, we have just one types of file.
- src/App.tsx: it is the begining of our application


