import dotenv from "dotenv";

dotenv.config();

// This function handles the upload of images to Cloudinary
export const handleImageUpload = async (file: File) => {
  console.log("Uploading");
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "projectImages"); // Replace with your Cloudinary upload preset
  data.append("cloud_name", "duwfbyhyq"); // Replace with your Cloudinary upload preset

  try {
    const response = await fetch( process.env.CLOUDNARY_API!,
      {
        method:"POST",
        body:data
      }); // Replace with your Cloudinary cloud name
      const res = await response.json();
      console.log(res); // Log the URL of the uploaded image
    return res.secure_url; // Return the URL of the uploaded image
  } catch (error) {
    console.error("Image upload failed:", error);
    return null; // Handle error appropriately
  }
};