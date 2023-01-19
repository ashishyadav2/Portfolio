import React,{useState,useEffect} from "react";
import CardLite from "./CardLite";
import axios from "axios";
import { Buffer } from "buffer";
import "./css/allposts.css";
import CreatePost from "./CreatePost";
function AllPosts(){
    const [data,setData] = useState(null);
    const [singleData,setSingleData] = useState(null);
    useEffect(()=>{
        axios.get("http://localhost:5000/work")
        .then(res=>{
            setData(res.data);
        })
        .catch(err=>{
            console.log(err);
        });
    },[]);
    function getPostData(postId) {
        axios.get(`http://localhost:5000/findPost/${postId}`)
        .then(res=>{
            setSingleData(res.data);
            console.log(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    function createCard(card) {
        const base64String = new Buffer.from(card.img.data.data).toString('base64');
        return <CardLite
            key={card._id}
            id={card._id}
            img={base64String}
            workTitle={card.title}
            getPostData = {getPostData}
        />;
    }
    return (
        <div className="allPostsDiv">
            <div className="allPostsHeading">
                <p>All Posts</p>
            </div>
            <main>
                <div className="sideDiv">
                    {data!=null?data.map(createCard):null}
                </div>
                <div className="editDiv">
                {singleData!=null?<CreatePost name="Edit Post" editTitle={singleData.title} editDes={singleData.des} editDate={singleData.date} editYt={singleData.yt} type={0}/>:null}
                    
                </div>
            </main>
        </div>
    );
}
export default AllPosts;