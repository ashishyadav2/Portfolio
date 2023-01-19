import React, { useEffect, useState } from "react";
import "./css/admin.css";
import axios from "axios";
import Card from "./Card";
import CreatePost from "./CreatePost";
import EmailCard from "./EmailCard";
import { Buffer } from "buffer";

function Admin(){
    const [data,setData] = useState(null);
    const [display,setDisplay] = useState({
        display: "none"
    });
    useEffect(()=>{
        axios.get("http://localhost:5000/work")
        .then(res=>{
            setData(res.data);
        })
        .catch(err=>{
            console.log(err);
        });
    },[]);
    const [emailData,setEmailData] = useState(null);
    useEffect(()=>{
        axios.get("http://localhost:5000/email")
        .then(res=>{
            setEmailData(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    },[]);
    function createCard(card) {
        const base64String = new Buffer.from(card.img.data.data).toString('base64');
        return <Card
            key={card._id}
            id={card._id}
            img={base64String}
            workTitle={card.title}
            workContent={card.des}
            date={card.date}
            src={card.yt}
        />;
    }
    function show() {
        setDisplay({
            display: "flex"
        });
    }
    function hide() {
        setDisplay({
            display: "none"
        });
    }
    function createEmail(email) {
        return <EmailCard 
            key={email._id}
            id={email._id}
            name={email.name}
            email={email.email}
            message={email.message}
        />;
    }
    return (
        <div className="adminDiv">
            <div className="postHeading">
                <p>Manage posts</p>
                <a href="/allposts" className="btn">All posts</a>
            </div>
            <div className="posts">
                <button className="createBtn" onClick={show}>
                    Create new post +
                </button>
                <div className="recentPosts">
                    {data!=null?data.slice(0,3).map(createCard):null}
                </div>
            </div>
            <CreatePost style={display} name="New Post" showHide={hide}/>
            <div className="postHeading1 postHeading">Emails</div>
            <div className="posts1">
                {emailData!=null?emailData.map(createEmail):(<h1>Oops.. You have not recevied any email</h1>)}
            </div>
        </div>
    );
}
export default Admin;