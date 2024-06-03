import React, { useEffect, useState } from 'react'
import {  Routes, Route, Link } from 'react-router-dom';

export default function SongsList() {

    const [songs, setSongs] = useState([])


    useEffect(function () {
        //1. mount
        //2. re-render
        //3. unmount

        const url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem";
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
            const songs = await result.data
            setSongs(songs)
            console.log(songs)
        }
        fetchData()


    }, [])
    return (
        <div>
            <div className='container pt-4'>
                <h2>Music Player</h2>
                <hr />
                <div className='row'>
                    {(songs.length != 0) ? songs.map(function (item) {

                        return <div key={item.id} className='col-md-3 mb-4'>
                            <Link to={'/song/'+item.id}>
                                <img src={item.album.cover_medium} className='img-fluid mb-2' />
                                <h5 className='fw-bold'>{item.title}</h5>
                                <div className='d-flex justify-content-between'>

                                    <span>{item.artist.name}</span>
                                    <span><img src={item.artist.picture_small} width={30} /></span>
                                </div>
                            </Link>
                        </div>

                    }) : ""}
                </div>
            </div>
        </div>
    )
}
