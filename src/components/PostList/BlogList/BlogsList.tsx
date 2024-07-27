import Blog from "./Blog/Blog";

import { RootState } from "../../../store/store";
import { useSelector } from "react-redux";

const BlogsList = () => {
  const getDataBlog = useSelector((state: RootState) => state.blogsList);
  // const [blogData, setBlogData] = useState(getDataBlog);

  console.log(getDataBlog);

  const renderBlog = () => {
    return getDataBlog?.map((data) => {
      return (
        <Blog
          key={data.id}
          id={data.id}
          title={data.title}
          url={data.url}
          description={data.description}
          date={data.date}
        />
      );
    });
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-5">{renderBlog()}</div>
    </div>
  );
};

export default BlogsList;
