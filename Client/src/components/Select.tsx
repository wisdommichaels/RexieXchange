import { useNavigate } from "react-router-dom";

const Select = () => {
    const navigate = useNavigate();

    // Handle the change event for the select input
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedValue = event.target.value;
  
      // Check the selected value and navigate accordingly
      switch (selectedValue) {
        case 'Razer':
          navigate('/razergold');
          break;
        case 'Amazon':
          navigate('/amazon');
          break;
        case 'iTunes':
          navigate('/apple');
          break;
        case 'Google Play':
          navigate('/google');
          break;
        case 'Steam':
          navigate('/steam');
          break;
        case 'Walmart':
          navigate('/walmart');
          break;
        case 'MasterCard':
          navigate('/mastercard');
          break;
        case 'PlayStation':
          navigate('/playstation');
          break;
        case 'eBay':
          navigate('/ebay');
          break;
        case 'American Express':
          navigate('/american');
          break;
        case 'Vanilla':
          navigate('/vanilla');
          break;
        case 'Visa':
          navigate('/visa');
          break;
        default:
          break;
      }
    };

  return (
    <div>
         <select
      id="category"
      name="category"
      className="custom-select custom-arrow w-full"
      onChange={handleChange}
    >
      <option value="">Select Category</option>
      <option value="Razer">Razer Gift Card</option>
      <option value="Amazon">Amazon</option>
      <option value="iTunes">Apple&iTunes</option>
      <option value="Google Play">Google Play</option>
      <option value="Steam">Steam</option>
      <option value="Walmart">Walmart</option>
      <option value="MasterCard">MasterCard</option>
      <option value="PlayStation">PlayStation</option>
      <option value="eBay">eBay Gift card</option>
      <option value="American Express">American Express</option>
      <option value="Vanilla">Vanilla</option>
      <option value="Visa">Visa</option>
    </select>
    </div>
  )
}

export default Select