import { Button } from "@/components/ui/button";
import Link from "next/link";
import { navItems } from "@/lib/site-config";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between px-5 py-3 lg:px-52 lg:py-6">
      <div className="text-xl font-extrabold">
        Clarity
        <span className="text-accent">AI</span>
      </div>
      <div className="flex gap-x-4 font-semibold">
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
