interface NavRootProps extends React.PropsWithChildren {}

export default function NavRoot({ children }: NavRootProps) {
  return (
    <nav className="border-border border-b-[1px] px-10 py-6">
      <ul className="flex items-center gap-3">{children}</ul>
    </nav>
  );
}
