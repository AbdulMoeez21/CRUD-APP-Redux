import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

const Post = () => {
    const [id,setId]=useState()
  return (
    <>
    
      <div className="row mt-4 d-flex justify-content-center align-items-center">
        <div className="col-md-8">
        <form action="">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Search By ID:
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
             
          </div>
          <button type="submit" className="btn btn-primary">Fetch Post</button>
          <button type="button" className="btn btn-warning ms-4">Create Post</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Post;
