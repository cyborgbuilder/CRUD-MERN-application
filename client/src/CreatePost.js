import {Button, Form} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';


function CreatePost(){

    const [post, setPost] = useState({
        title: "",
        description: ""
    })
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;

        setPost((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        });
    };

    const handleClick = (event) => {
        event.preventDefault();

         axios.post("/create", post)
         .then((res) => console.log(res))
         .catch((err) => console.log(err));

         navigate("posts");
    }

 

    return(
        <div>
            <h1>Create a post</h1>
            <Button onClick={() => navigate(-1)}>BACK</Button>

            <Form>
                <Form.Group>
                    <Form.Control 
                    name="title"
                    placeholder='Title'
                    value={post.title}
                    style={{margin: '1rem'}}
                    onChange={handleChange}
                    />

                    <Form.Control 
                    name="description"
                    value={post.description}
                    placeholder='Description'
                    style={{margin: '1rem'}}
                    onChange={handleChange}
                    />

                    <Button onClick={handleClick}>Save</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default CreatePost;