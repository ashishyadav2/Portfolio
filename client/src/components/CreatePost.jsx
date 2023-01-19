import React,{useState} from "react";
import FormElement from "./FormElement";
import axios from "axios";

function CreatePost(props) {
    const [data,setData] = useState({
        title : "",
        des : "",
        date : "",
        yt :""
    });
    const [img,setImg] = useState();
    const [errMessage,setErrMessage] = useState("Save");
    var info;
    if(props.type===0) {
        info = {
            title : props.editTitle,
            des : props.editDes,
            date : props.editDate,
            yt : props.editYt
        };
    }
    function handleChange(event) {
        const {name,value} = event.target;
        setData(prevValue=>{
            return {
                ...prevValue,
                [name]: value
            }
        });
    }
    function handleChange2(event) {
        setImg(event.target.files[0]);
    }
    const formData = new FormData();
    formData.append('img',img);
    for(let key in data) {
        formData.append(key,data[key]);
    }
    function postData(event) {
        axios.post("http://localhost:5000/createpost",formData)
        .then(res=>{
            if(res.status===200) {
                setInterval(()=>{
                    setErrMessage("Post Saved");
                },2500);
            }
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        });
        setData({
            title : "",
            des : "",
            date : "",
            yt :""
        });
        setImg();
        event.preventDefault();
    }
    return (
        <div className="createPostDiv" style={props.style}>
            <form className="createForm" method="post" action="/createpost" onSubmit={postData}>
            <div className="divHeading">{props.name}
                <a href="javascript:void(0);" className="btn" onClick={()=> props.showHide()}>&#9932;</a>
            </div>
                <FormElement title="Image" handleChange={handleChange2} name="img"  type="file"/>
                {/* <FormElement title="Image" handleChange={handleChange}type="text" name="img" value={data.img} /> */}
                <FormElement title="Title" handleChange={handleChange} type="text" name="title" value={info.title} placeholder="Title"/>                
                <FormElement title="Date" handleChange={handleChange} type="date" name="date" value={info.date} placeholder="Date"/>
                <FormElement title="Link" handleChange={handleChange} type="text" name="yt" value={info.yt}  placeholder="Link"/>
                
                <div className="formElement">
                    <p>Description</p>
                    <textarea onChange={handleChange} name="des" placeholder="Description" rows="12" columns="30" value={info.des} required></textarea>
                </div>
                <input type="submit" className="submitBtn" value={errMessage}></input>
            </form>
        </div>
    );
}
export default CreatePost;