import TextArea from "antd/es/input/TextArea";

import { DatePicker, Input } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBlog } from "../../../store/reducers/blogSlice";
import { v4 as uuidV4 } from "uuid";
import ButtonsBlog from "../Button";

const InputsBlog = () => {
  const [titleTxt, setTitleTxt] = useState("");
  const [urlImage, setUrlImage] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

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
  // Dispatch qua Reducer
  const dispatch = useDispatch();
  const handlePostBlog = () => {
    dispatch(
      addBlog({
        id: uuidV4(),
        title: titleTxt,
        url: urlImage,
        description: description,
        date: date,
      })
    );

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
