// TODO: answer here
import axios from "axios";
import { useState } from "react";
import { API_URL } from "../api/config";

export default function UploadForm({onSubmit}) {
  // TODO: answer here
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState("");

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("content", caption);
    formData.append("image", file);

    await axios.post(`${API_URL}/post/create`, formData, {withCredentials : true})
    .then(res => { console.log(res) })
    .catch(err => { console.log(err) });
  }

  return (
    <div aria-label="Upload Form">
      <form onSubmit={handleSubmit}>
        <input
          aria-label="Caption Input"
          onChange={(e) => setCaption(e.target.value)}
        />
        <input
          type="file"
          accept="image/png, image/jpg, image/gif"
          aria-label="Image Input"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <input aria-label="Submit Button" type="submit" value="Submit" />
      </form>
    </div>
  );
}