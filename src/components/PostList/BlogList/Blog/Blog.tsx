import { Button } from "antd";
import { deleteBlog } from "../../../../store/reducers/blogSlice";
import moment from "moment";
import { useDispatch } from "react-redux";

export type TypeBlogInit = {
  id: string;
  title: string;
  url: string;
  description: string;
  date: string;
  handleEditingBlog: (id: string) => void;
};

const Blog = ({
  id,
  title,
  url,
  description,
  date,
  handleEditingBlog,
}: TypeBlogInit) => {
  const dispatch = useDispatch();
  const handleDeleteBlog = (blogId: string) => {
    dispatch(deleteBlog(blogId));
  };

  return (
    <div
      key={id}
      className="max-w-[400px] max-h-[400px] bg-sky-300 rounded-xl flex gap-4 shadow-xl"
    >
      <div>
        <img
          className="w-[200px] h-[200px] mx-3 my-3 rounded-xl"
          src={url}
          alt="image"
        />
      </div>
      <div className="flex flex-col justify-around px-5">
        <div>
          <span>{moment(date).format("MM-DD-YYYY")}</span>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        <div className="flex gap-5">
          <Button type="primary" onClick={() => handleEditingBlog(id)}>
            Edit
          </Button>

          <Button type="default" danger onClick={() => handleDeleteBlog(id)}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
