//This function creates a authorized user login page to allow us to use spotify's Oauth system to get the users data
export const authEndpoint = 'https://accounts.spotify.com/authorize'

//Redirects to our localhost after signin 
const redirectUri = "https://https://spotify-higher-lower.netlify.app/#"
//This is app specific key that allows us to use spotify's sign in page
const clientId = '22d8207a20174a40b4cbd24e41cc1424'
//perms for the API request
const scopes = [
    'user-read-private'
]
//This is the url format for spotify's authentication
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`

//Parses url for client token
export const getTokenFromUrl = ()=>{


    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item)=>{
        let parts = item.split('=')
        initial[parts[0]] = decodeURIComponent(parts[1])
        return initial
    },{});
}

