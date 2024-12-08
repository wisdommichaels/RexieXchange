import { useRef } from "react";


const FooterO = () => {
    const topRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the very top of the page
  };
  return (
    <div ref={topRef}>
        <div className="w-full text-center m-auto sm:flex justify-between items-center bg-[#161D6F] pb-4 text-white pt-5">
<p className="sm:ml-20 text-[13px]">Copyright © 2024 REXIE XCHANGE. All Rights Reserved.</p>
{/* <div className="flex gap-8 sm:mr-24 justify-center pt-2 ">
<Link to={'/'}> Terms of Service</Link>
<Link to={'/'}>Privacy Policy</Link>
</div> */}
<button onClick={scrollToTop} className="w-8 h-8 bg-[#bcbccd] rounded-sm p-1 flex justify-center items-center mr-14">
<img className="w-4"  src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1733488961/icons8-up-arrow-24_kuf7y2.png" alt="Scroll to top" />
</button>
</div>
    </div>
  )
}

export default FooterO