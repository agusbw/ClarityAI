import Link from "next/link";
import { navItems } from "@/lib/site-config";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="py-4 mt-4 flex flex-col-reverse items-center md:flex-row md:justify-between">
      <p className="text-sm text-muted-foreground">
        @2024 ClarityAI. All right reserved.
      </p>
      <div className="flex gap-3">
        {navItems.map((item) => (
          <Button
            asChild
            variant={"link"}
            className="p-0"
            key={item.href}
          >
            <Link href={item.href}>{item.title}</Link>
          </Button>
        ))}
      </div>
    </footer>
  );
}
