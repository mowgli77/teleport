import React, {useEffect, useState} from 'react'
import './App.css'
import {Route, BrowserRouter } from "react-router-dom";

function App() {

    const [url, setUrl] = useState(null)

    const getUrl = async () => {
        try {
            const response = await fetch('/teleport')
            const data = await response.json()
            setUrl(data[0])
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getUrl()
    }, [])

    return (
        <BrowserRouter>
            <div className={"loader"}>
                { url && <Route path='/' component={() => {
                    window.location = url;
                    return null;
                }}/>}
                <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
