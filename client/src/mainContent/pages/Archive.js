/* global google */
import React, {useEffect, useState} from "react"
import '@googlemaps/extended-component-library/place_overview.js';
import "../../styles/App.css"
  


const Archive = () => {


    const [locations, setLocations] = useState([]);

    const [lat, setLat] = useState(0);
    const [long, setlong] = useState(0);

    const [mainPlace, setMainPlace] = useState("");



    // This will give us the geolocation, of the adventure (client)
    useEffect(() => {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;


                setLat(latitude)
                setlong(longitude)

              },
              (error) => {
                console.error("Error getting geolocation: ", error);
              }
            );
          } else {
            console.error("Geolocation is not supported by this browser.");
          }
    }, [])

    
    // This helps to tell what is the criteria of the sarch that we want to do
    useEffect(() => {


        async function searchNearby () {
            
            const {Place} = await google.maps.importLibrary("places");


            let center = new google.maps.LatLng(lat, long);
            const request = {

            fields: ["displayName", "location", "businessStatus"],
            locationRestriction: {
                center: center,
                radius: 1000,
            },

            includedPrimaryTypes: ["restaurant"],
            maxResultCount: 5,
            // ** REMBER TO ADD THE NEARBY RANK BY PREFERENCE **
            // rankPreference: SearchNearbyRankPreference.POPULARITY,
            language: "en-US",
            region: "us",
            };

            //@ts-ignore
            const { places } = await Place.searchNearby(request);

            setLocations(places);
        };

        searchNearby();

    }, [lat, long]);


    // Here we can do the calculation, to determine, what would be the best location we should use.
    useEffect(() => {


        if(locations.length > 1) {

            setMainPlace(locations[2].id)
        }

    }, [locations]);


    return (
    
        <div className="archive">

            <h1>Go an Enjoy a delicious sandwich, ask for the most popular one 🙌🏼 </h1>


            <div className="mainLocation">
                <gmpx-api-loader 
                    key="AIzaSyCsKxrm6qfKdMr0GkPypc4yrvbKAwkkzu0" 
                    solution-channel="GMP_DOCS_placeoverview_v1"
                ></gmpx-api-loader>

                <gmpx-place-overview place={mainPlace}>

                    <gmpx-place-directions-button slot="action"> Directions</gmpx-place-directions-button>

                </gmpx-place-overview>

            </div>


            
        </div>

    )
}

export default Archive;