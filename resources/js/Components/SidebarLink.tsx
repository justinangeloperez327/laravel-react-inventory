import { Button, ButtonProps } from './ui/button'

import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SidebarLinkProps extends ButtonProps {
    icon?: LucideIcon
}

export default function SidebarLink({
    icon: Icon,
    className,
    children,
    ...props
} : SidebarLinkProps) {
  return (
    <Button variant='ghost' className={cn('gap-2 justify-start', className)} {...props}>
        {Icon && <Icon size={20}/>}
        {children}
    </Button>
  )
}
