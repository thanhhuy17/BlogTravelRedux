// import ButtonsBlog from "./Button";
import Header from "./Header";
import InputsBlog from "./Inputs";

const PostInput = () => {
  return (
    <div className="px-[30%] bg-sea-image bg-cover bg-center">
      <div className="py-5 flex flex-col gap-5 ">
        <Header />
        <InputsBlog />
        {/* <ButtonsBlog /> */}
      </div>
    </div>
  );
};

export default PostInput;
