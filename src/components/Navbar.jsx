import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar as TopBar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Button,
} from "@nextui-org/react";
import Logo from "./Logo";
const Navbar = () => {
  return (
    <div className="fixed  w-[70%] ml-[15%] shadow-lg rounded-3xl mt-4 bg-[rgba(0,0,0,0.1)]">
      <TopBar isBlurred={false} className="bg-[rgba(0,0,0,0)]  rounded-3xl ">
        <NavbarBrand>
          <Link href="/" className="text-white">
            <div className="mr-2">
              <Logo />
            </div>
          </Link>
        </NavbarBrand>

        <NavbarContent as="div" justify="end">
          {/* <Dropdown placement="bottom-end" className="bg-[#2B2B2B]">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src={"../assets/logo.png"}
              />
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Profile Actions"
              variant="flat"
              className="text-white bg-[#2B2B2B]"
            >
              <DropdownItem
                key="profile"
                className="h-14 gap-2 hover:bg-[#2B2B2B]"
              >
                <p className="font-semibold text-white">Signed in as</p>
                <p className="font-semibold text-white">check</p>
              </DropdownItem>
              <DropdownItem key="system">
                <Link href={"/dashboard"}>
                  <div className="text-white w-full h-full">Dashboard</div>
                </Link>
              </DropdownItem>
              <DropdownItem key="configurations">
                <Link href={"/account"}>
                  <div className="text-white w-full h-full">Account</div>
                </Link>
              </DropdownItem>
              <DropdownItem key="help_and_feedback">Contact Us</DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown> */}
          <NavbarItem>
            <Button
              size="md"
              className="bg-white font-semibold text-grey-600"
              variant="light"
            >
              <Link to="/login">
                <span>Login</span>
              </Link>
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Link href="/register">
              <Button
                color="secondary"
                className="text-white font-bold hover:bg-[#6B33CC]"
                variant="flat"
              >
                <span>Sign Up</span>
              </Button>
            </Link>
          </NavbarItem>
        </NavbarContent>
      </TopBar>
    </div>
  );
};

export default Navbar;
