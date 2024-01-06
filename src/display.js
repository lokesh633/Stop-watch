import React from "react";
import "./index.css";


export default function Display({ time}) {

    const { hour,min , sec, millSec } = time;

    return (
        <div>
            <span className="span">
                {hour >= 10 ? (hour) : ("0" + hour)}
            </span>:
            <span className="span">
                {min >= 10 ? (min) : ("0" + min)}
            </span>:
            <span className="span">
                {sec >= 10 ? (sec) : ("0" + sec)}
            </span>:
            <span className="span">
                {millSec >= 10 ? (millSec) : ("0" + millSec)}
            </span>
        </div>
        )
}