type NavLinkProps = {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export default function NavLink({ href, children, onClick, className }: NavLinkProps) {
    return (
        <a href={href} onClick={onClick} className={className}>
            {children}
        </a>
    )
}