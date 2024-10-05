# Spotify Stats Dashboard

## Context data / gloabl state

- Spotify API Context Provider
    - async reducer
        - endpoints for the data we want handled in the switch statemnet 
        - save endpoint responses to state

- CSS Theme context provider
    - dark theme

## Routes
- `localhost:3000/`
    - homepage
    - Tiles for different stats:
        - top 5 songs
        - top 5 albums
        - top 5 artists
        - currently listening
        - most listened to genre (based on top 5 songs)
        - larger list of followed artists 
        - users saved or top audiobooks 
        - recommneded content 
- `localhost:3000/search/{userId}/`
    - search page to get status of other users
    - "nice to have" not a main thing to focus on or build first

## App Features

- User profile data
    -  Different API endpoints for self/current user and for user by id/username 
- User's top items
- User's currently playing
- Form to check if user follows an artist 

## FrontEnd UI Frameworks 

- Chakra UI 
- [Material UI ](google.com)
- [UI ShadCN](https://ui.shadcn.com/)

## Deployment & Security

- Netlify env variable

## Usefule resources

- [Spotify Dev Docs] (https://developer.spotify.com/documentation/web-api)



# Spotify Usage Flow

1. User clicks button to sign in via Spotify
2. App redirects to Spotify's signin page
3. User clicks on Spotify to sign in
4. Spotify finishes the sign in, and redirects to our designed "ReDirect URI"
5. React app detects Spotify's signin result and processes it
6. Save the processed result to state and/or local storage and/or context
7. Components throughout the React app reach up to grab the access token and use that in fetch requests

