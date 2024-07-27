
import BlogsList from "./BlogList";
import HeaderPostList from "./Header";

const PostList = () => {
  return <div className="flex flex-col justify-center items-center">
    <HeaderPostList />
    <BlogsList/>
  </div>;
};

export default PostList;
