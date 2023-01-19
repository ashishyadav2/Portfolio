import React,{useEffect, useState} from "react";
import Card from "./Card";
import "./css/work.css";
import axios from "axios";
import { Buffer } from 'buffer';
function Work() {
    const [resData,setData] = useState(null);
    useEffect(()=>{
        axios.get("http://localhost:5000/work")
        .then(res=>{
            setData(res.data);
        })
        .catch(err=>{
            console.log(err);
        });
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
    return(
        <div className="workDiv">
            <div className="workHeading">
                <p>My Work</p>
            </div>
            <div className="filterOptions">

            </div>
            <div className="workCards">
                {resData!=null?resData.map(createCard):null}
            </div>
        </div>
    );
}
export default Work;