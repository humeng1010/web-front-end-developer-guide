import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate()

    function back() {
        navigate(-1)
    }
    function forward() {
        navigate(1)
    }
    return (
        <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
                <h2>React Router Demo</h2>
            </div>
            <button className='btn btn-warning' onClick={back}>←back</button>
            <button className='btn btn-success' onClick={forward}>forward→</button>
        </div>
    )
}
