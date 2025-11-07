import "./blog.css"
import Myimage from "./download.jpg"
 export function Blog(){

const title = "10 Tips for Effective Time Management";
const author = "John Doe";
const description = "In today's fast-paced world, effective time management is crucial for success. Learn 10 tips to improve your time management skills and boost productivity.";




return(
    <div className="container">
  <div><h1>{title}</h1></div>
   <div><h3>By {author}</h3></div> 
  <div><p>{description}</p></div>  
<div><img src={Myimage} alt={"BlogThumbnail"}/></div>
<div><h1 className="title">{title}</h1></div>
<p className="author" style={{backgroundColor:"red"}}></p>
<div><p className="description"></p></div>

</div>

);
}