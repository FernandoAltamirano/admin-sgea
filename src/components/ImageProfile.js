import { AiOutlineCamera } from "react-icons/ai";
export default function ImageProfile({
  user,
  imageUploaded,
  handleUploadImage,
}) {
  return (
    <label className="Image-User">
      <img
        className="user-icon"
        src={imageUploaded ? imageUploaded.data : user?.foto}
        alt=""
      />
      <div className="iconToChangePhoto">
        {/* <input type="file" hidden onChange={handleUploadImage} /> */}
        <AiOutlineCamera color="white" size="30" />
      </div>
    </label>
  );
}
