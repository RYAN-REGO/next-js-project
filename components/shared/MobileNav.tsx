import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "@/components/ui/separator"
import NavItems from "./NavItems";

const MobileNav = () => {
  return (
    <nav className="sm:hidden">
      <Sheet>
        <SheetTrigger>
            <Image
            src="assets/icons/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
            />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white sm:hidden">
            <Image
                src="assets/images/logo.svg"
                alt="menu"
                height={38}
                width={128}
            />
            <Separator/>
            <NavItems/>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
