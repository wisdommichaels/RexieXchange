import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import Mobilefooter from "../components/Mobilefooter";
import { useAuthStore } from "../store/authStore";
import { ChangeEvent, useEffect, useState } from "react";
import api from "../utils/api";
import { api_url } from "../utils/constants";
import { toast } from "react-toastify";
import useLogout from "../hooks/useLogOut";

const UserProfile = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };
  useEffect(scrollToTop,[])

  const { user, checkAuth } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const [nameloading, setNameLoading] = useState(false);
  const [detailsloading, setDetailsLoading] = useState(false);
  const [newImage, setNewImage] = useState("");
  const [newUsername, setNewUsername] = useState(user?.username || "");
  const [formData, setFormData] = useState({
    accountName: user?.accountDetails?.accountName || "",
    accountNumber: user?.accountDetails?.accountNumber || "",
    bankName: user?.accountDetails?.bankName || "",
  });

  // Save Image Function
  const saveImage = async () => {
    setLoading(true);
    try {
      await api.post(`${api_url}/auth/updateuserprofile`, {
        profilePic: newImage,
      });
      setNewImage("");
      await checkAuth();
    } catch (e) {
      console.error("Error saving image:", e);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (file: File) => {
    setLoading(true);
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "profilepics");
    data.append("cloud_name", "duwfbyhyq");

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/duwfbyhyq/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );
      const res = await response.json();
      return res.secure_url || null;
    } catch (error) {
      console.error("Image upload failed:", error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === "file" && e.target.files?.length) {
      const imageUrl = await handleImageUpload(e.target.files[0]);
      if (imageUrl) setNewImage(imageUrl);
    }
  };

  const handleAccountDetailsInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const{name, value} = e.target;
    setFormData({ ...formData, [name]: name === 'accountNumber' ? Number(value) || value : value });
    console.log(formData); // for testing purposes, remove before production
    
  };

  // Save Username Function
  const handleUsernameSubmit  = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTimeout(() => {
      if (newUsername) {
        toast.success("Username updated successfully!");
      } else {
        toast.error("Failed to update username. Please try again.");
      }

    }, 2000); // Wait 3 seconds before showing the toast
    setNameLoading(true); //
    
    const formattedUsername = newUsername
    .split(" ") // Split the username into words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
    .join(" "); // Join the words back together

    try {
      await api.post(`${api_url}/auth/updateuserprofile`, {
        username: formattedUsername,
      });

      await checkAuth();
    } catch (err) {
      console.error("Error saving username:", err);
    } finally {
      setNameLoading(false);
    }
  };

  // Save Account Details Function
  const handleAccountDetailsSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTimeout(() => {
      if (formData.accountName && formData.accountNumber && formData.bankName) {
        toast.success("Account details updated successfully!");
      } else {
        toast.error("Failed to update account details. Please try again.");
      }
    }, 2000); // Wait 3 seconds before showing the toast
    setDetailsLoading(true);

    // Format the `accountName` and `bankName` to capitalize the first letter of each word
  const formattedAccountName = formData.accountName
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  .join(" ");

const formattedBankName = formData.bankName
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  .join(" ");

// Update the `formData` with formatted values
const updatedFormData = {
  ...formData,
  accountName: formattedAccountName,
  bankName: formattedBankName,
};
  
    try {
      await api.post(`${api_url}/auth/updateuserprofile`, updatedFormData);
      await checkAuth();
    } catch (e) {
      console.error("Error saving account details:", e);
    } finally {
      setDetailsLoading(false);
    }
  };

    // logout function starts here
const {logout} = useLogout()
    // const logout = () => {
    //   localStorage.removeItem('token');
    //   window.location.reload()
    // }
    // logout function ends here


  return (
    <div>
   <nav className="bg-[#161D6F] shadow-lg flex gap-5 items-center py-3">
   <Link
          to={"/"}
          className="back-button sm:rounded-2xl sm:px-4 sm:py-1 flex justify-center sm:ml-6 ml-2 items-center gap-2 text-[11px] p-3 "
        >
        <img src="src/assets/arrow-.png" alt="" />
        </Link>

        <h2 className=" sm:text-[20px] text-[18px] text-white pl-12 sm:pl-0 text-center ">
          Account Settings
        </h2>

        <div className="sm:hidden pl-4">
        <p onClick={logout} className="flex gap-2 items-center text-[18px] w-full px-4 py-2 text-white hover:bg-gray-100 cursor-pointer">
              Logout
              <img className="w-4 h-4" src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1731945322/icons8-logout-50_y7a0cu.png" alt="" />
            </p>
        </div>
    </nav>

    <section className="flex flex-col md:flex-row justify-center p-3 gap-3 pb-10">
  <div className="m-auto sm:w-[40%] w-full mb-1">
    <div className="flex flex-col justify-center items-center shadow-xl bg-gradient-to-r from-[#a2bae3] to-[#668bc2] sm:py-5 py-8 sm:rounded-lg rounded-lg">
      <h1 className="text-center p-6 text-2xl text-[#161D6F]">MY PROFILE</h1>
      <div className="flex justify-center items-center">
        {loading ? (
          <div className="loader w-[120px] h-[120px] rounded-full border-4 border-t-4 border-gradient-to-r from-[#a2bae3] to-[#668bc2] animate-spin"></div>
        ) : (
          <img
            className="h-[130px] w-[130px] rounded-full object-cover mb-2"
            src={
              newImage
                ? newImage
                : user?.profilePic
                ? user.profilePic
                : "https://via.placeholder.com/150"
            }
            alt="Profile"
          />
        )}
      </div>
      <div className="flex justify-center items-center bg-white w-fit mx-auto px-4 py-1 rounded-md">
        <label
          htmlFor="profile-pic-upload"
          className="text-[#161D6F] cursor-pointer flex items-center gap-1"
        >
          Edit profile picture
          <img
            className="w-4 h-4"
            src="src/assets/editicon.png"
            alt="Edit Icon"
          />
        </label>
        <input
          type="file"
          id="profile-pic-upload"
          onChange={handleInputChange}
          className="hidden"
        />
      </div>
      <button
          onClick={saveImage}
          className="btn w-[40%] px-2 py-2 mt-2 flex justify-center items-center"
          disabled={loading}
            >
              Save
            </button>
      <div className="flex flex-col items-center text-center py-3">
        <h1 className="text-[18px] text-[#161D6F]">
          User Name: <span className="font-bold">{user?.username}</span>
        </h1>
        <h2 className="text-[18px] text-[#161D6F] mt-1">
          Email: <span className="font-bold">{user?.email}</span>
        </h2>
      </div>
    </div>

    {/* Username Update Section */}
    <div className="shadow-xl bg-gradient-to-r from-[#a2bae3] to-[#668bc2] sm:rounded-lg rounded-lg mt-4 sm:mt-8 p-8 text-center">
      {/* <h1 className="text-2xl text-[#161D6F]">UPDATE NAME</h1> */}
      <form
        onSubmit={handleUsernameSubmit}
        className="mb-6 w-full flex flex-col items-center"
      >
        <label htmlFor="username" className="block text-[#161D6F] mt-4 text-[20px] pt-5">
          Edit Username
        </label>
        <input
          className="p-4 sm:p-3 input sm:w-[80%] mt-2"
          type="text"
          id="username"
          placeholder="Enter your username"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
        />
           <button
          className="btn px-3 py-3 mt-4 w-[80%]"
            type="submit"
          >
          {nameloading ? (
            <>
            <div className="loader w-[20px] h-[20px] mx-auto rounded-full border-2 border-t-white animate-spin"></div>
            <p className="text-[10px]">loading...</p>
            </>
          ) : (
          <p>Save Changes</p>
        )}
        </button>
      </form>
    </div>
  </div>
  <form
  onSubmit={handleAccountDetailsSubmit}
  className="bg-gradient-to-r from-[#a2bae3] to-[#668bc2] shadow-xl rounded-lg w-full sm:w-[60%] pb-8 px-5 flex flex-col items-center mb-14 sm:mb-0"
>
  <h1 className="text-2xl text-[#161D6F] text-center p-6 pt-10">
    UPDATE ACCOUNT DETAILS
  </h1>
 
  {/* Account Name */}
  <div className="mb-4 w-full sm:w-[80%]">
    <label
      htmlFor="accountName"
      className="block text-[#161D6F] text-xl text-center mb-2"
    >
      Edit Account Name
    </label>
    <input
      className="p-4 sm:p-3 input w-full"
      type="text"
      name="accountName"
      id="accountName"
      value={String(formData.accountName || '')}
      onChange={handleAccountDetailsInputChange}
      placeholder="Enter Account Name"
    />
  </div>
 {/* Account Number */}
  <div className="mb-4 w-full sm:w-[80%]">
    <label
      htmlFor="accountNumber"
      className="block text-[#161D6F] text-xl text-center mb-2"
    >
      Edit Account Number
    </label>
    <input
      className="p-4 sm:p-3 input w-full"
      type="text"
      name="accountNumber"
      id="accountNumber"
      value={String(formData.accountNumber || '')} 
      onChange={handleAccountDetailsInputChange}
      placeholder="Enter Account Number"
    />
  </div>

  {/* Bank Name */}
  <div className="mb-4 w-full sm:w-[80%]">
    <label
      htmlFor="bankName"
      className="block text-[#161D6F] text-xl text-center mb-2"
    >
      Edit Bank Name
    </label>
    <input
      className="p-4 sm:p-3 input w-full"
      type="text"
      name="bankName"
      id="bankName"
      value={String(formData.bankName || '')}
      onChange={handleAccountDetailsInputChange}
      placeholder="Enter Bank Name"
    />
  </div>

  {/* Submit Button */}
  <div className="w-full sm:w-[80%]">
    <button
      type="submit"
      className="btn px-3 py-4 w-full"
    >
     {detailsloading ? (
            <>
            <div className="loader w-[20px] h-[20px] mx-auto rounded-full border-2 border-t-white animate-spin"></div>
            <p className="text-[12px]">loading...</p>
            </>
          ) : (
          <p>Save Changes</p>
        )}
    </button>
  </div>
</form>

</section>



  <div className="hidden sm:block">
  <Footer/>
  </div>
  <Mobilefooter/>
  </div>
  )
}

export default UserProfile