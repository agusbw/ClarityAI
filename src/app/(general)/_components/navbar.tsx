import { Button } from "@/components/ui/button";
import Link from "next/link";

const navItems: ReadonlyArray<{
  href: string;
  title: string;
}> = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/how",
    title: "How?",
  },
];

export default function NavBar() {
  return (
    <nav className="lg:px-52 lg:py-6 py-3 px-5 flex items-center justify-between">
      <div className="text-xl font-extrabold">
        Clarity
        <span className="text-teal-500">AI</span>
      </div>
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
