import './style.css'; 
import Post from './post'
const postsJSON = require("../../posts.json")
    
export default function MyPosts() {
    return (
        <div>
     
            <div className='back'>
            {postsJSON.posts.map((element,index)=>{
                return( 
                    <Post
                        key= {index}
                        tittle= {element.tittle}
                        body= {element.body}
                        link= {element.link}
                        date= {element.date}
                    />
                )
            })}
            </div>
        
        </div>
    )
}