import React, { useEffect, useState } from 'react'
import { fetchAllGenres } from '../../services/api_user';

function Genres() {
    const [Genres, setGenres] = useState([]);
    const [isLoading,setIsLoading]=useState(true)
    useEffect(() => {
        const fetchGenres = async () => {
            const { data:{genres} } = await fetchAllGenres();
            setTimeout(() => {
                setIsLoading(false)
            }, 2000)
            setGenres(genres);
        } 
        fetchGenres();
    }, [])
  return (
    <div>Genres</div>
  )
}

export default Genres