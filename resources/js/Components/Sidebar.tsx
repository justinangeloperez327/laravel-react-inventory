import NavLink from './NavLink'
import { SidebarItems } from '@/types'
import SidebarLink from './SidebarLink'

interface SidebarProps {
    sidebarItems: SidebarItems
}

export default function Sidebar( props: SidebarProps ) {
  return (
    <aside className='w-[270px] bg-retro-white text-retro-black max-w-xs h-screen fixed left-0 top-0 z-40 border-r'>
        <div className="h-full px-3 py-4">
            <h3 className="text-lg text-foreground font-black text-center uppercase ">
                {import.meta.env.VITE_APP_NAME || 'Laravel'}
            </h3>
            <div className="mt-5">
                <div className="flex flex-col gap-1 w-full">
                    {props.sidebarItems.links.map((link, index) => (
                        <NavLink key={index} href={route(link.href)} active={route().current(link.href)}>
                            <SidebarLink  icon={link.icon} className='capitalize'>{link.label}</SidebarLink>
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    </aside>
  )
}
