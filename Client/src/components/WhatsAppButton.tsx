

const WhatsAppButton: React.FC = () => {

  const marginRight = 20; // Space between button and the right edge of the screen
  const marginBottom = 250; // Space between button and the bottom edge of the screen

  
  return (
    <div
    style={{
      position: "fixed",
      bottom: marginBottom,
      right: marginRight,
      zIndex: 1000,
      cursor: "pointer",
      }}
      className="flex items-center justify-center sm:w-fit px-4 py-2 bg-green-600 rounded-md shadow-lg"
    >
      <a
        href="https://wa.me/+2349030995027?text=Hi!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center gap-1"
      >
        <div className="text-white sm:text-3xl text-2xl">
          <i className="fab fa-whatsapp"></i>
        </div>
        <p className="sm:text-md text-sm font-bold text-white">24/7 Support</p>
      </a>
    </div>
  );
};

export default WhatsAppButton;
