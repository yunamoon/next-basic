"use client"

import { useRouter } from "next/navigation";

export default function Create() {

    const router = useRouter();

    return (
    
        <form onSubmit={(e)=>{
            e.preventDefault();
            const title = e.target.title.value;
            const body = e.target.body.value;
            console.log(title, body)
            const options = {
                method : 'POST',
                headers : {
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify({title, body})
            }

            fetch('http://localhost:9999/topics', options)
            .then(res => res.json())
            .then(result => {
               const postId =  result.id;
               router.push(`/read/${postId}`);
            })
        }}>
            <p>
                <input type="text" name="title" placeholder="title"/>
            </p>

            <p>
                <textarea name="body" placeholder="body"/>
            </p>
            <p>
                <input type="submit" value="create"/>
            </p>
        </form>
    
    )
};