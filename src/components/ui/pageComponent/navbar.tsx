"use client"
import Image from 'next/image';
import { useState } from 'react';
import { Button } from "@/components/ui/button"


import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from 'next/link';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={50} height={50} />
                </Link>
            </div>
            <div className="block lg:hidden">
                <Button onClick={() => setOpen(!open)}>
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </Button>
            </div>
            <div className={`${open ? '' : 'hidden'} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
                {/* <Menu>
                    <MenuButton>Dropdown</MenuButton>
                    <MenuDropdown>
                        <MenuGroup>
                            <MenuItem onSelect={() => router.push('/page1')}>Page 1</MenuItem>
                            <MenuItem onSelect={() => router.push('/page2')}>Page 2</MenuItem>
                        </MenuGroup>
                    </MenuDropdown>
                </Menu> */}
            </div>
        </nav>
    );
};

export default Navbar;

