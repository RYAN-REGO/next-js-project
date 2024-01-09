import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
    return(
        <header className="w-full border-b h-[50px]">
            <div className="wrapper flex justify-between items-center h-full">
                <Link href="/" className="w-36px justify-center pl-3">
                    <Image src="/assets/images/logo.svg" width={128} height={38} alt="Evently logo"/>
                </Link> 

                <SignedIn>
                    <nav className="md:flex-between max-sm:hidden w-full max-w-xs">
                        <NavItems/>    
                    </nav>  
                </SignedIn>

                <div className="flex w-32 justify-end gap-3 pr-3">
                    <SignedIn>
                        <UserButton afterSignOutUrl="/" />
                        <MobileNav/>
                    </SignedIn>
                    <SignedOut>
                        <Button asChild className="rounded-full" size="lg">
                            <Link href='sign-in'>
                                Login 
                            </Link>
                        </Button>
                    </SignedOut>
                </div>
            </div>
        </header>
    )
}

export default Header;