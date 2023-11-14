import React, { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){

    // const [data, setData] = useState([])

    // useEffect(()=>{
    //     fetch("https://api.github.com/users/hiteshchoudhary")
    //     .then(response => response.json())
    //     .then(jsonResponse => {
    //         setData(jsonResponse)
    //     })
    // })
    
    const data = useLoaderData()

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
export const githubInfoPage = async ()=>{
    const response = await fetch("https://api.github.com/users/hiteshchoudhary")

    return response.json()
}