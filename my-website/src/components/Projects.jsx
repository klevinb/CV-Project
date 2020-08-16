import React from "react";
import SingleProject from "./SingleProject";

function Projects() {
  return (
    <>
      <div className='projects'>
        <SingleProject
          title='LinkedIn Mockup'
          description='This was a team project, we used React, Node, Express, MongoDB. 
          For the Backend we created endpoints for Posts, Photos, Experiences (CSV), CV (PDF), log in - sign up pages.
          We used JSON Web Token and socket.io for the chatrooms.'
          repoLink='https://github.com/klevinb/LinkedinBackend_TBW_FE'
          tools=''
          photos={[
            {
              title: "User Page",
              desktopView: "/assets/LinkedInApp/UsersPage.png",
              mobileView: "/assets/LinkedInApp/WorkInProgress.png",
            },
            {
              title: "LinkedIn User",
              desktopView: "/assets/LinkedInApp/OtherUserPage.png",
              mobileView: "/assets/LinkedInApp/WorkInProgress.png",
            },
            {
              title: "Feeds Page",
              desktopView: "/assets/LinkedInApp/FeedsPage.png",
              mobileView: "/assets/LinkedInApp/WorkInProgress.png",
            },
          ]}
        />
        <SingleProject
          title='Spotify App Mockup'
          description='I created a mockup for the Spotify website using React, Redux,
        Bootstrap and later I will implement the login page, and then I will
        use MongoDB to store the data.'
          repoLink='https://github.com/klevinb/CV-Project/tree/master/spotify_alone'
          tools='API : Deezer - RapidAPI.'
          photos={[
            {
              title: "Home Page",
              desktopView: "/assets/SpotifyApp/Home_page.jpg",
              mobileView: "/assets/SpotifyApp/Home_page_mobile.png",
            },
            {
              title: "Album Page",
              desktopView: "/assets/SpotifyApp/Album_page.jpg",
              mobileView: "/assets/SpotifyApp/Album_page_mobile.png",
            },
            {
              title: "Favorite Page",
              desktopView: "/assets/SpotifyApp/Favorite_page.jpg",
              mobileView: "/assets/SpotifyApp/Favorite_page_mobile.png",
            },
            {
              title: "Search Page",
              desktopView: "/assets/SpotifyApp/Search_page.jpg",
              mobileView: "/assets/SpotifyApp/Search_page_mobile.png",
            },
          ]}
        />
        <SingleProject
          title='Weather App'
          description='This was a solo project where I create an weather App using React, TypeScript and 3 APIs to gather the data.'
          repoLink='https://github.com/klevinb/CV-Project/tree/master/spotify_alone'
          tools='APIs : ipstack. (To find the location of the user),
          Open Weather Map - RapidAPI. (Get the weather information),
          Google Maps API. (To show pin on map the location of the search)'
          photos={[
            {
              title: "Main Page",
              desktopView: "/assets/WeatherApp/MainPage.png",
              mobileView: "/assets/WeatherApp/MainPage_mobile.png",
            },
          ]}
        />
      </div>
    </>
  );
}

export default Projects;
