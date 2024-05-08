"use client";

import { Button } from "@/components/ui/button";
import { Bookmark, FileCog } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { generateBreadcrumbs } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import * as React from "react";
import { type BreadcrumbItem as BreadcrumbItemType } from "@/lib/types";

export default function Header() {
  const pathname = usePathname();
  const [breadcrumb, setBreadcrumb] = React.useState<
    BreadcrumbItemType[] | null
  >(null);

  React.useEffect(() => {
    setBreadcrumb(() => {
      return generateBreadcrumbs(pathname);
    });
  }, [pathname]);

  return (
    <div className="flex w-full flex-col gap-y-4 md:flex-row md:items-center md:justify-between md:gap-y-0">
      <div>
        <h2 className="text-4xl font-bold">
          Clarity<span className="text-accent">AI</span>
        </h2>
        <p className="pb-2">
          Upload your <span className="font-semibold">PDF</span> and let{" "}
          <span className="font-semibold">AI</span> make your life{" "}
          <span className="font-semibold">easier</span>.
        </p>
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumb ? (
              breadcrumb.map((b, index) => (
                <React.Fragment key={b.path}>
                  <BreadcrumbItem>
                    {index < breadcrumb.length - 1 ? (
                      <BreadcrumbLink asChild>
                        <Link href={b.path}> {b.label}</Link>
                      </BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage>{b.label}</BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                  {index < breadcrumb.length - 1 ? (
                    <BreadcrumbSeparator />
                  ) : null}
                </React.Fragment>
              ))
            ) : (
              <Skeleton className="h-5 w-36 rounded-none" />
            )}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <Button
        variant={"accent"}
        className="w-fit"
        asChild
      >
        <Link
          href={
            pathname === "/summarize" ? "/summarize/bookmark" : "/summarize"
          }
        >
          {pathname === "/summarize" ? (
            <>
              See Bookmark
              <Bookmark
                size={20}
                className="ml-2"
              />
            </>
          ) : (
            <>
              Generate Summary
              <FileCog
                size={20}
                className="ml-2"
              />
            </>
          )}
        </Link>
      </Button>
    </div>
  );
}
