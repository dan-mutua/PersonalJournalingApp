# Journal App

This is a React Native app for managing journal entries, including features like adding, editing, deleting, and viewing entries. It also supports user authentication and provides a summary view of journal entries over selected periods.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Environment Variables](#environment-variables)


## Features

- User authentication (login and registration)
- Add, edit, delete journal entries
- View all journal entries
- Categorize entries (e.g., Personal, Work, Travel)
- Summary view of entries over selected periods
- User profile management (update username, password)
- Responsive UI using React Native Paper
- Error handling and alerts for better user experience

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Expo CLI (if using Expo)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/journal-app.git
   cd journal-app
   ```

2. **Install dependencies:

Using npm:

```bash
npm install
```


## Running the App
-Using Expo:
```bash
npx expo start
```

-Using react-native-cli (requires an emulator or physical device):

```bash
npx react-native run-android # for Android
npx react-native run-ios # for iOS
```

# Open the app on your device

- For Expo, scan the QR code with the Expo Go app.
- For react-native-cli, the app should open automatically on the emulator or connected device.

## Environment Variables


1. Create a .env file in the root directory:

```bash
API_URL=https://your-backend-api
```

2. Make sure to add the .env file to your .gitignore to prevent it from being committed to version control.