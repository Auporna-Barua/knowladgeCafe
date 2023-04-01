import React, { useEffect } from "react";
import { BsBookmark } from "react-icons/bs";
import { toast } from "react-toastify";
const Article = ({ blog, setBookMarks, bookmarks, setMarkRead, markRead }) => {
  const handleBookMark = (blog) => {
    const check = bookmarks.some((item) => item.id === blog.id);
    console.log(check);
    if (check) {
      return toast.error("This blog already bookmarked.");
    } else {
      setBookMarks([...bookmarks, blog]);
    }
  };

  const handleReadTime = (time) => {
    const readTime = (markRead += time);
    setMarkRead(readTime);
    localStorage.setItem("readTime", readTime);
  };
  return (
    <div className="card">
      <img src={blog.image} className="card-img-top cover" alt="..." />
      <div className="card-body">
        <div className="info_head">
          <div className="author">
            <img src={blog.author_photo} alt="" />
            <div className="author_info">
              <span>{blog.author}</span>
              <span>{blog.publish}</span>
            </div>
          </div>
          <div className="read-time">
            {blog.read_time} <span>Min read</span>
            <BsBookmark onClick={() => handleBookMark(blog)} />
          </div>
        </div>
        <h5 className="card-title">{blog.title}</h5>

        <a
          className="card-link"
          style={{ cursor: "pointer" }}
          onClick={() => handleReadTime(blog.read_time)}
        >
          Mark is read
        </a>
      </div>
    </div>
  );
};
export default Article;
