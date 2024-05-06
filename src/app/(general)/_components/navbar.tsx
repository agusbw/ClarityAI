import { Button } from "@/components/ui/button";
import Link from "next/link";

const navItems: ReadonlyArray<{
  href: string;
  title: string;
}> = [
  {
    href: "#",
    title: "How?",
  },
  {
    href: "#",
    title: "Contact",
  },
];

export default function NavBar() {
  return (
    <nav className="px-16 py-4 border border-muted-foreground/20 flex items-center justify-between">
      <div className="text-lg font-bold text-gradient">SummareaseAI</div>
      <div className="gap-x-4 flex font-semibold">
        {navItems.map((item) => (
          <Button
            asChild
            variant={"link"}
            className="w-fit p-0"
            key={item.title}
          >
            <Link href={item.href}>{item.title}</Link>
          </Button>
        ))}
      </div>
    </nav>
  );
}
