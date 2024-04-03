import { InertiaLinkProps, Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }: InertiaLinkProps & { active: boolean }) {
    const baseClasses = 'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ';
    const activeClasses = 'border-retro-teal text-retro-grey focus:border-teal ';
    const inactiveClasses = 'border-transparent text-gray-500 hover:text-grey hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 ';

    return (
        <Link {...props} className={baseClasses + (active ? activeClasses : inactiveClasses) + className}>
            {children}
        </Link>
    );
}
