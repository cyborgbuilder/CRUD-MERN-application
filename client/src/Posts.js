import axios from 'axios'
import { useEffect } from 'react'

function Posts() {
    useEffect(() => {
        axios.get("/posts").then((res) => console.log(res))
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }, []);
    
    return  (
        <div>
            <h1>postSchema</h1>
        </div>
    )
}

export default Posts;