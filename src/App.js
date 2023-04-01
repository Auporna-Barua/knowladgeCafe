import "./App.css";
import Header from "./components/header/Header";
import { ToastContainer } from "react-toastify";
import { useState, useEffect } from "react";
import Article from "./components/article/Article";
import "react-toastify/dist/ReactToastify.css";
import Blog from "./components/blog/Blog";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [bookmarks, setBookMarks] = useState([]);
  const [markRead, setMarkRead] = useState(0);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bookmark"));
    if (data) {
      setBookMarks(data);
    }
  }, []);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <Header />
      <div className="home">
        <div className="left-side">
          {blogs &&
            blogs.map((blog) => (
              <Article
                key={blog.id}
                blog={blog}
                setBookMarks={setBookMarks}
                bookmarks={bookmarks}
                setMarkRead={setMarkRead}
                markRead={markRead}
              />
            ))}
        </div>
        <div className="right-side"></div>
      </div>
      <div className="blogs">
        <h2 className="text-center">All Question & Answer</h2>
        <Blog />
      </div>

      <ToastContainer />
    </div>
  );
}

export default App;
