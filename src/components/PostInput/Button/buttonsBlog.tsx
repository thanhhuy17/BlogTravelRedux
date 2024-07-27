import { Button } from "antd";

type TypeBtn = {
  handlePostBlog: () => void;
};

const ButtonsBlog = ({ handlePostBlog }: TypeBtn) => {
  return (
    <div>
      <div>
        <Button
          className="bg-gradient-to-r from-blue-500 via-green-400 to-indigo-400"
          type="primary"
          onClick={handlePostBlog}
        >
          Public Post
        </Button>
        <Button
          className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"
          type="dashed"
        >
          Update Post
        </Button>
        <Button danger>Cancel</Button>
      </div>
    </div>
  );
};

export default ButtonsBlog;
