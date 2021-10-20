import React from "react"

function BlogPost(props) {

return (
< div className="posts">
<h3>{props.title}</h3>
<h4>{props.subTitle}</h4>
<p>Author: {props.author}  Posted on: {props.date}
</p>


</div>

)

}

export default BlogPost