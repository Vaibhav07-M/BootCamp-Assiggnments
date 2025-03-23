# Weather App

A user-friendly weather application built with **React Native**, allowing users to view real-time weather data for multiple cities. The app provides features such as city search, favorites management, customizable settings, and seamless navigation.

---

## Features

- **Splash Screen**: A welcome screen displayed upon launch before transitioning to the main app.
- **Home Screen**: Fetch and display weather details for a default or user-entered city.
- **Search Screen**: Find weather information by city name.
- **Favorites Screen**: Save and manage a list of favorite cities for quick access.
- **Settings Screen**: Toggle between Celsius and Fahrenheit for temperature units.
- **Navigation**: Smooth navigation using Stack and Tab navigators.

---

## Tech Stack

This app utilizes the following technologies:
- **React Native**: Framework for cross-platform mobile app development.
- **React Navigation**: To manage screen navigation.
- **Axios**: For making API requests to WeatherAPI.
- **WeatherAPI**: The service used for fetching real-time weather data.
- **React Native Vector Icons**: For rendering tab and screen icons.

---

## Prerequisites

Before running this app, ensure the following are installed:

- Node.js (LTS version recommended)  
- React Native CLI or Expo CLI  
- Android Studio / Xcode for Android or iOS development  
- npm or yarn for dependency management  

---

## Installation

1. **Clone this repository**:
   ```bash
   git clone https://github.com/your-repo/weather-app.git
   cd weather-app

# Install dependencies
npm install
# or
yarn install

# Set up the environment
# Obtain your WeatherAPI key by signing up at WeatherAPI and generating an API key.
# Add your WeatherAPI key in App.tsx:
const API_KEY = "your_api_key_here";

# Run the app
npx react-native run-android   # For Android devices
npx react-native run-ios       # For iOS devices

# Start the Metro bundler
npx react-native start

## Navigation Overview

### Stack Navigator:
- The Splash Screen is displayed upon launch and automatically transitions to the main app after 2 seconds.

### Tab Navigator:
Accessible screens via the bottom tab bar:
1. **Home Screen**: View weather details for a specific city.
2. **Search Screen**: Search weather data by city name.
3. **Favorites Screen**: Manage and display a list of favorite cities.
4. **Settings Screen**: Toggle temperature units between Celsius and Fahrenheit.

## API Integration
This app integrates with WeatherAPI to fetch real-time weather data.

### Example API Call:
```bash
https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=CityName

## Screenshots

1. **Splash Screen**  
   ![alt text](image.png)

2. **Home Screen**  
   ![alt text](image-1.png)

3. **Foreast Screen**
   ![alt text](image-2.png)

4. **Search Screen**  
   ![alt text](image-3.png)

5. **Favorites Screen**  
   ![alt text](image-4.png)

6. **Settings Screen**  
   ![alt text](image-5.png)

## Contributing
We welcome contributions! Feel free to fork this repository, make changes, and submit pull requests. If you find any bugs or issues, please report them via GitHub.

## License
This project is licensed under the MIT License. Feel free to use, modify, and share.

## Developer Contact
- **Name:** Developer  
- **Email:** your-email@example.com  
- **GitHub:** [Your GitHub Profile](https://github.com/your-username)
