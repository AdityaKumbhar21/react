import React, { useState } from "react";
import { useEffect } from "react";


function Github(){

    const [data, setData] = useState([])

    useEffect(()=>{
        fetch("https://api.github.com/users/hiteshchoudhary")
        .then(response => response.json())
        .then(jsonResponse => {
            setData(jsonResponse)
        })
    })
    
    return(
        <>
        <div className=" text-white text-3xl bg-gray-700 p-4">
            <div>Name: {data.login}</div>
            Followers: {data.followers}
            <img src={data.avatar_url} alt="Profile Picture" />
        </div>
        </>
    )
}

export default Github