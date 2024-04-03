import { PencilIcon } from "lucide-react";

interface ButtonProps {
    size?: number;
    onClick?: () => void;
}

const EditButton: React.FC<ButtonProps> = ({ size = 14, ...rest }) => {
    return (
      <button type='button' className='p-1 bg-green-400 rounded text-retro-white hover:bg-green-300' {...rest}>
        <PencilIcon size={size}/>
      </button>
    )
  }

  export default EditButton;
