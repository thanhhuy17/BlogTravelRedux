import Blog from "./Blog/Blog";
import { RootState } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { editingBlog } from "../../../store/reducers/blogSlice";

const BlogsList = () => {
  const getDataBlog = useSelector((state: RootState) => state.blogList);

  const dispatch = useDispatch();

  // Chuyển dữ liệu blog vào InputsBlog
  const handleEditingBlog = (blogId: string) => {
    // Tìm blog dựa vào id
    const foundBlog = getDataBlog.find((blog) => blog.id === blogId);

    // Kiểm tra xem blog có tồn tại hay không
    if (foundBlog) {
      // Truyền dữ liệu blog vào InputsBlog
      dispatch(editingBlog(foundBlog));
    }
  };

  // console.log(blogData);

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
          handleEditingBlog = {handleEditingBlog}
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
