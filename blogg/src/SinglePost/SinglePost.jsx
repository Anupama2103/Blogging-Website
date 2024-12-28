import "./SinglePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>John</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
      </div>
      <p className="singlePostDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Obcaecati tenetur praesentium saepe minus, nam natus magni volupt
        ate ipsum labore amet porro fuga possimus veniam corporis! 
        Id in saepe labore consequatur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Obcaecati tenetur praesentium saepe minus, nam natus magni volupt</p>
      </div>
    </div>
  )
}
