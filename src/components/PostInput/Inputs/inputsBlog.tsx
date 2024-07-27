import TextArea from "antd/es/input/TextArea";

import { DatePicker, Input } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBlog, editingBlog } from "../../../store/reducers/blogSlice";
import { v4 as uuidV4 } from "uuid";
import ButtonsBlog from "../Button";
import { RootState } from "../../../store/store";

const InputsBlog = () => {
  const [titleTxt, setTitleTxt] = useState("");
  const [urlImage, setUrlImage] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const dispatch = useDispatch();

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleTxt(e.target.value);
  };
  const handleUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrlImage(e.target.value);
  };
  const handleDescript = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleDate = (value: string) => {
    setDate(value);
  };

  // Lấy dữ liệu từ Editing post từ redux
  const editingBlogCheck = useSelector((state: RootState) => {
    const foundBlog = state.blogList.find((blog) => blog.editingPost === true);
    return foundBlog || null; // Trả về null nếu không tìm thấy blog
  });
  useEffect(() => {
    if (editingBlogCheck) {
      setTitleTxt(editingBlogCheck.title);
      setUrlImage(editingBlogCheck.url);
      setDescription(editingBlogCheck.description);
      setDate(editingBlogCheck.date);
    }
  }, [editingBlogCheck]);
  // Dispatch qua Reducer
  const handlePostBlog = () => {
    if (editingBlogCheck) {
      // Cập nhật blog hiện tại
      dispatch(
        editingBlog({
          id: editingBlogCheck.id, // Sử dụng id của blog đang được sửa
          title: titleTxt,
          url: urlImage,
          description: description,
          date: date,
          editingPost: false, // Đặt editingPost về false sau khi cập nhật
        })
      );
    } else {
      dispatch(
        addBlog({
          id: uuidV4(),
          title: titleTxt,
          url: urlImage,
          description: description,
          date: date,
        })
      );
    }
    setTitleTxt("");
    setUrlImage("");
    setDescription("");
    setDate("");
  };

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2>Title</h2>
        <Input placeholder="Title" value={titleTxt} onChange={handleTitle} />
      </div>

      <div>
        <h2>Featured Image</h2>
        <Input placeholder="Url Image" value={urlImage} onChange={handleUrl} />
      </div>

      <div>
        <h2>Description</h2>
        <TextArea
          placeholder="Description"
          value={description}
          onChange={handleDescript}
        />
      </div>

      <div>
        <h2>Public Date</h2>
        <DatePicker
          size="large"
          defaultValue={"mm: dd : yy"}
          value={date}
          onChange={handleDate}
        />
      </div>
      <div>
        <ButtonsBlog handlePostBlog={handlePostBlog} />
      </div>
    </div>
  );
};

export default InputsBlog;
