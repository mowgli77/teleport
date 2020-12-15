import React, {useEffect, useState} from 'react'
import './App.css'
import {Route, BrowserRouter} from "react-router-dom";
import axios from "axios";

function App() {

    // const [url, setUrl] = useState(null)

    // const getUrl = async () => {
    //     try {
    //         const response = await axios.get('https://ad.admitad.com/tpt/r889udt5ea7ae3e44f49a499575f91/')
    //         const data = await response.data
    //         setUrl(data[0])
    //         console.log(data)
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    // const getUrl = async () => {
    //     try {
    //         const response = await fetch('https://ad.admitad.com/tpt/r889udt5ea7ae3e44f49a499575f91/')
    //         const data = await response.json()
    //         console.log(data)
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    // useEffect(() => {
    //     getUrl()
    // }, [])


    return (
        <BrowserRouter>
            <div className={"loader"}>
                <Route path='/' component={() => { window.location = 'https://ad.admitad.com/tpt/r889udt5ea7ae3e44f49a499575f91/'; return null;} }/>
                <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                {/*<div>{url}</div>*/}
            </div>
        </BrowserRouter>
    )
}

export default App
