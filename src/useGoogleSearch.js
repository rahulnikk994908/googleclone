import React, { useState } from 'react'
import { useEffect } from 'react'



const useGoogleSearch =(term) =>{
    const [data,setData] = useState(null)

    useEffect(()=>{
        const fetchdata = async() =>{
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=AIzaSyACbVYZutf9MuiLLyoPDEm5dZLZPwutYRQ&cx=b9a90c7e7026ffdd3&q=${term}`
            )
            .then(response =>response.json())
            .then(result =>{
                setData(result)
            })
        }
        fetchdata();


    },[term])
    return{ data }
}

export default useGoogleSearch