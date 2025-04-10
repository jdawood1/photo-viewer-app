# Photo Viewer App

This React Native project is a simple photo viewer that uses Redux to manage state. Users can add photos from a predefined list by clicking a button that cycles through each photo. Once all photos are added, the button label changes to "Next" and continues to cycle through the list.

## Features

- Uses Redux for global state management
- Cycles through a fixed set of photos on button press
- Styled using `glamorous-native` components for Album, Title, URL, and ThumbnailURL text
- Photos are displayed with Unsplash image URLs
- Button changes label from "Add Photo" to "Next" after cycling through all photos once

## Setup Instructions

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/photo-viewer-app.git
   cd photo-viewer-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Expo development server:
   ```bash
   npm start
   ```

4. Open the app in an iOS or Android simulator, or scan the QR code using the Expo Go app.

## Dependencies

- React Native
- Redux
- React Redux
- glamorous-native

## File Structure

```
project-root/
├── redux/
│   ├── index.js
│   └── photos/
│       ├── actions.js
│       └── reducers.js
├── components/
│   └── Album/
│       └── StyledText.js
├── App.js
├── README.md
└── .gitignore
```

## Author Note

Created as part of a class assignment.

**- John**
