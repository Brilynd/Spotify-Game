# Spotify Higher Lower Game
A website that allows you to compete with other online to determine who knows an artist better by accumulating points by properly guessing the songs popularity vs another song

## Running the program
In the project directory, you can run:

### `npm start`
Runs the app in the development mode.

### `npm run build`
Builds the app for production to the `build` folder.\
Serve the page with your chosen program (i.e. `serve -s build`)

## Using the program
Due to the fact Spotify requires only authorized users to use their Api, in order to be added as an authorized user please email me with your Spotify's account email
so I can add you as an authorized user.

### Gameplay Setup
Sign in - Click the button in the right hand corner that says "Sign-in" to allow you to use the API

Search for Artist - Use the search bar to search for an artist you think you know well

Game Modes - For now we only support one gamemode that allows the user to decided between two songs named "Free Play"

### Gameplay Loop

Gameplay Mechanic - The game loop is to see given two songs by a select artist, how many songs can you seccessfully determine if they are more or less popular.

Points Mechanic - For each song you properly cateogorize you get a point. total points are based on how many songs you got right consecutively.

Loss Condition - If you incorrectly cateogorize the song (Higher or Lower) popularity then the song on the left. you lose and your total points scored in that round are saved.
