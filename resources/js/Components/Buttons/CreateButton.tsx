import { PlusIcon } from "lucide-react";

interface ButtonProps {
    size?: number;
    onClick: () => void;
}

const CreateButton: React.FC<ButtonProps> = ({ size = 14, ...rest }) => {
    return (
        <button type='button' className='p-1 bg-blue-400 rounded text-retro-white hover:bg-blue-300' {...rest}>
            <PlusIcon size={size}/>
        </button>
    )
};

  export default CreateButton;
