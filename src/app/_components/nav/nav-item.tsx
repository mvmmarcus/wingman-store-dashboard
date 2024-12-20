import Utils from "src/shared/utils/utils";

interface ContentDataProps {
  title: string;
  path: string;
  icon: React.ReactNode;
  variant?: "active" | "default";
}

const itemVariants = Utils.cva(
  "flex h-[46px] items-center gap-3 rounded-[1200px] p-3 text-lg",
  {
    variants: {
      variant: {
        default: "fill-gray text-gray",
        active: "fill-black text-black bg-secondary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export default function NavItem({
  title,
  path,
  icon,
  variant = "default",
}: ContentDataProps) {
  return (
    <a
      aria-current="page"
      className={Utils.cn(itemVariants({ variant }))}
      href={`/${path}`}
    >
      {icon}
      {title}
    </a>
  );
}
