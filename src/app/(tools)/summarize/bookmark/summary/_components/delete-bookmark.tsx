"use client";

import { Button } from "@/components/ui/button";
import { useLocalStorage } from "usehooks-ts";
import { Trash } from "lucide-react";
import { BookmarkLocalStorageType } from "@/lib/types";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

export default function DeleteBookmark() {
  const [bookmark, setBookmark] = useLocalStorage<BookmarkLocalStorageType>(
    "bookmark",
    [],
  );
  const searchParams = useSearchParams();
  const fileName = searchParams.get("fileName");

  const handleDeleteBookmark = () => {
    const del = confirm("Delete this bookmark?");
    if (!del) return;
    setBookmark((prev) =>
      prev.filter((b) => {
        return b.fileName !== fileName + ".pdf";
      }),
    );
    toast.success("Bookmark deleted successfully.");
  };

  return (
    <Button
      variant={"destructive"}
      size={"icon"}
      onClick={handleDeleteBookmark}
    >
      <Trash size={20} />
    </Button>
  );
}
