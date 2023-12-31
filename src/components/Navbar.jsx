import { Navbar,MobileNav,Typography,Button, IconButton} from "@material-tailwind/react";
import {useState} from 'react';
import TabsComp from './Tabs';


const NavbarComp = () =>{
    const [navbar, setNavbar] = useState(false);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <a href="#" className="flex items-center">
                Home
                </a>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <a href="#" className="flex items-center">
                Community
                </a>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <a href="#" className="flex items-center">
                Inbox
                </a>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <a href="#" className="flex items-center">
                Tasks
                </a>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <a href="#" className="flex items-center">
                Projects
                </a>
            </Typography>
        </ul>
    )
    return(
        <div className="max-h-[800px] w-[calc(100%)]">
          <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-medium">
                        Workspace
                    </Typography>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        <Button variant="gradient" size="sm" className="hidden lg:inline-block"><span>Log Out</span></Button>
                        <IconButton onClick={() => setNavbar(!navbar)} variant="text" ripple={false} className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden">
                            {
                                navbar?(
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                )
                                :
                                (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                                    </svg>
                                )
                            }
                        </IconButton>
                    </div>
                </div>
                <MobileNav open={navbar}>
                    <TabsComp />
                    <Button variant="gradient" size="sm" fullWidth className="mb-2 mt-4">
                            <span>Log Out</span>
                    </Button>    
                </MobileNav>
          </Navbar>
        </div>
    )
}

export default NavbarComp;