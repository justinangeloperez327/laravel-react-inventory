import { Trash2Icon } from "lucide-react";

interface ButtonProps {
    size?: number;
    onClick?: () => void;
}

const DeleteButton: React.FC<ButtonProps> = ({ size = 14, ...rest }) => {
    return (
        <button type='button' className='p-1 bg-red-400 rounded text-retro-white hover:bg-red-300' {...rest}>
            <Trash2Icon size={size}/>
        </button>
    )
};

  export default DeleteButton;
