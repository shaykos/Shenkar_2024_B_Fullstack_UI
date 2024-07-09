import { useEffect, useRef } from "react";
import { CloudinaryCompType } from "../types/props.type";

export default function CloudinaryComp({ setImage }: CloudinaryCompType) {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName: 'shaykos',
      uploadPreset: 'shenkar'
    }, function (error: any, res: any) {
      if (error) {
        console.error({ error });
        return;
      }
      handleWidgetEvents(res);
    });
  }, []);

  function handleWidgetEvents(res: any) {
    if (res.event == "success") {
      console.log(res.info.secure_url);
      setImage(res.info.secure_url);
    }
  }

  return (
    <div>
      <button onClick={() => widgetRef.current.open()}>
        Upload
      </button>
    </div>
  )
}

