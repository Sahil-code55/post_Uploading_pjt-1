import React from 'react'
import { useNavigate } from "react-router-dom";
import  axios from "axios";

const CreatePost = () => {

  const navigate = useNavigate(); // ✅ correct place


const handleSubmit = async (e)=>{
  e.preventDefault()

const formData = new FormData(e.target)

axios.post("http://localhost:3000/create-post",formData)
    .then((res)=>{
      navigate("/feed")
    })
    .catch((err)=>{
      console.log("error",res)
      alert("Error Create post")
    })
}

  return (
<section className='create-post-section'>
    <h1>Create Post</h1>

<form onSubmit={handleSubmit}>
 
  <input type="file" accept='image/*' name="image" required />
 <input type="text" name='caption' placeholder='Caption' required />

  <button onSubmit={() => navigate("/feed")} type="submit">Submit</button>
</form>

  {/* ✅ Navigation Button */}
      <button onClick={() => navigate("/feed")}>
        Go to Feed
      </button>


</section>
  )
}

export default CreatePost
