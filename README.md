# weather-openweathermap-react-native
This app is build to display weather forecast data

Note: Assuming you have local env setup for both iOS and Android

Step 1:
Clone the repo<br/>
Open it in your favorite editor<br/>
Open a terminal in your editor and run yarn install<br/>

Step 2:
Head over to https://openweathermap.org to get an API key. (You will have to sign up)<br/>
Change src/Config/index file with below keys:<br/>
OPENWEATHER='change it to your openweathermap key'<br/>

How To Run The App in an Android Emulator (Assuming that emulator is properly setup with android sdk home path)

Step 3:
From terminal navigate to project root dir and run yarn android (this will start your metro server) (Please also setup adb to open emulator)

How To Run The App in an iOS Simulator (Assuming that Simulator is properly setup with latest version of xcode)

Step 4:
From terminal navigate to project and run cd ios then run pod install

Step 5:
After that run yarn ios (this will start your metro server and open the simulator)
