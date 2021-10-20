import React from "react"

function BlogPost(props) {
    console.log(props)

return (
< div className="blog-post">
<h3>{props.title}</h3>
<h4>{props.subTitle}</h4>
<p>Author: {props.author}  Posted on: {props.date}
</p>


</div>

);

}

export default BlogPost