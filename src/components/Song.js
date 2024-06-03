import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Song() {

    const [song,setSong] = useState(null)

    const { id } = useParams()

   
    useEffect(function () {


        const url = "https://deezerdevs-deezer.p.rapidapi.com/track/"+id;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '264ac24b5dmsh88a135a3899dbd4p1f7309jsnb38dd9011f97',
                'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
            }
        }
    

        async function fetchData() {
            const response = await fetch(url, options)
           const result = await response.json()
            setSong(result)
            console.log(result)
        }
        fetchData()
    }, [])

    return (
        <div>
            {(song!=null)?
            
            <div className='container pt-4'>
            <img src={song.album.cover_medium} />
            <h1>{song.title}</h1>
            <audio src={song.preview} controls></audio>

        </div>
        :"Loading..."
        }
        </div>
    )
}
