import React from "react"
export default function MyButton({onClick, label}){
    return <button onClick={onClick}>{label}</button>
}