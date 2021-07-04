# musify

![Logo](https://github.com/Lanuvelza/spotify-clone/blob/main/musify/docs/logo.png?raw=true)

musify is a single page platform that enables users to quickly find out what their favourite music artist has been up to recently across Spotify, Youtube and Instagram medias.


## Features

* Catch up or discover your artist across Spotify, Youtube and Instagram platforms with a single search
* Listen to an artist's lastest album or songs from previous albums on the web or even on your pc
* Watch an artist's most recent upload on their Youtube channel or browse other recent videos related to the them
* Read and find an artist's most recent post on Instagram or look for older posts to see what they have done
* Navigate between different artists on different platform medias such as finding out the latest release on Spotify for artist A and watching the latest Youtube video for artist B

## Stack

Front: React, MUI, JS, ContentAPI, Spotify Web API, Youtube API 
\
Back: Express, Axios, Instagram Web API 

## Screenshots

![Login](https://github.com/Lanuvelza/spotify-clone/blob/main/musify/docs/login.png?raw=true)
\
*Login with Spotify User Authentication*

![Search](https://github.com/Lanuvelza/spotify-clone/blob/main/musify/docs/search.png?raw=true)
\
*Search and find your artist within a single query across multiple social medias*

![Home Page 1](https://github.com/Lanuvelza/spotify-clone/blob/main/musify/docs/home1.png?raw=true)
![Home Page 2](https://github.com/Lanuvelza/spotify-clone/blob/main/musify/docs/home2.png?raw=true)
\
*The Home Page that displays the latest updates from an artist*


\
![Spotify 1](https://github.com/Lanuvelza/spotify-clone/blob/main/musify/docs/spotify1.png?raw=true)
![Spotify 2](https://github.com/Lanuvelza/spotify-clone/blob/main/musify/docs/spotify2.png?raw=true)
\
*Listen to your favourite artist's latest album or dive into their past albums if you are feeling nostalgic*

![Youtube 1](https://github.com/Lanuvelza/spotify-clone/blob/main/musify/docs/youtube1.png?raw=true)
![Youtube 2](https://github.com/Lanuvelza/spotify-clone/blob/main/musify/docs/youtube2.png?raw=true)
\
*Watch their latest uploads on their Youtube channels or dig deeper into other content and related videos*


![Instagram 1](https://github.com/Lanuvelza/spotify-clone/blob/main/musify/docs/instagram1.png?raw=true)
![Instagram 2](https://github.com/Lanuvelza/spotify-clone/blob/main/musify/docs/instagram2.png?raw=true)
\
*Find out their latest Instagram post or browse for older posts in the past*



## Setup for Local Running & Testing

1. You will need an instagram account or create an account at https://www.instagram.com/
2. Go to https://developer.spotify.com/dashboard/ to generate a Spotify client ID with a Spotify account. Ensure that the Redirect URIs is set to http://localhost:3000/ in "Edit Settings" 
3. Navigate to https://console.developers.google.com to obtain a Google Cloud API Key with a Google account. In the dashboard, you will also have to enable the Youtube Data API v3 by clicking "+ ENABLE APIS AND SERVICES"
4. `npm i` in both the frontend and backend directories
5. create a .env file based off the example given in both the backend and frontend directory
6. `npm start` in the backend to run the server, then the frontend to start the react app


## To-Dos 

* migrate all frontend api to backend 
* personalization such as allowing users to set their favourite artists  
* responsive design 
