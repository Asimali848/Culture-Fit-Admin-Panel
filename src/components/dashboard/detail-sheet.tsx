import type { Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface DetailSheetProps {
  id?: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const DetailSheet = ({ open, setOpen }: DetailSheetProps) => {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="w-full min-w-2xl">
        <SheetHeader>
          <SheetTitle className="font-semibold text-lg">Company Details</SheetTitle>
          <SheetDescription>View all information about this company</SheetDescription>
        </SheetHeader>

        <div className="flex flex-col gap-5 p-3">
          <div className="grid grid-cols-3 items-start gap-2 border-b pb-3">
            <p className="text-muted-foreground text-sm">Company Name</p>
            <p className="col-span-2 font-medium text-foreground text-sm">DigiMark Developer</p>
          </div>

          <div className="grid grid-cols-3 items-start gap-2 border-b pb-3">
            <p className="text-muted-foreground text-sm">Email</p>
            <p className="col-span-2 font-medium text-foreground text-sm">digimark@gmail.com</p>
          </div>

          <div className="grid grid-cols-3 items-start gap-2 border-b pb-3">
            <p className="text-muted-foreground text-sm">Password</p>
            <p className="col-span-2 font-medium text-foreground text-sm">••••••••</p>
          </div>

          <div className="grid grid-cols-3 items-start gap-2 border-b pb-3">
            <p className="text-muted-foreground text-sm">Owner Name</p>
            <p className="col-span-2 font-medium text-foreground text-sm">John Doe</p>
          </div>

          <div className="grid grid-cols-3 items-start gap-2 border-b pb-3">
            <p className="text-muted-foreground text-sm">Owner Email</p>
            <p className="col-span-2 font-medium text-foreground text-sm">owner@example.com</p>
          </div>

          <div className="grid grid-cols-3 items-start gap-2 border-b pb-3">
            <p className="text-muted-foreground text-sm">Website</p>
            <p className="col-span-2 font-medium text-foreground text-sm">www.digimark.com</p>
          </div>

          <div className="grid grid-cols-3 items-start gap-2 border-b pb-3">
            <p className="text-muted-foreground text-sm">Company Address</p>
            <p className="col-span-2 font-medium text-foreground text-sm">123 Main St, New York, NY</p>
          </div>

          <div className="grid grid-cols-3 items-start gap-2">
            <p className="text-muted-foreground text-sm">Description</p>
            <p className="col-span-2 font-medium text-foreground text-sm leading-relaxed">
              DigiMark Developer is a leading provider of innovative web and mobile solutions. We help businesses scale
              with modern technology and creative design.
            </p>
          </div>
        </div>

        <SheetFooter className="mt-auto">
          <SheetClose asChild>
            <Button variant="outline" className="w-full">
              Close
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default DetailSheet;
