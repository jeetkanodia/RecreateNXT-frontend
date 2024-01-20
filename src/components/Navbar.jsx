import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useUserState from "../store/userStore";
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
  const navigate = useNavigate();
  const user = useUserState((state) => state.user);
  const removeUser = useUserState((state) => state.removeUser);
  return (
    <div className="fixed  w-[70%] ml-[15%] shadow-lg rounded-3xl mt-4 bg-[rgba(0,0,0,0.1)]">
      <TopBar isBlurred={true} className="bg-[rgba(0,0,0,0)]  rounded-3xl ">
        <NavbarBrand>
          <Link to="/main" className="text-white">
            <div className="mr-2">
              <Logo />
            </div>
          </Link>
        </NavbarBrand>

        <NavbarContent as="div" justify="end">
          {user ? (
            <Dropdown placement="bottom-end" className="bg-[#2B2B2B]">
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
                  <Link to={"/profile"}>
                    <div className="text-white w-full h-full">Profile</div>
                  </Link>
                </DropdownItem>
                <DropdownItem key="help_and_feedback">Contact Us</DropdownItem>
                <DropdownItem
                  key="logout"
                  color="danger"
                  onClick={() => {
                    removeUser();
                    navigate("/");
                  }}
                >
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <>
              <NavbarItem>
                <Button
                  size="md"
                  className="bg-white font-semibold text-grey-600"
                  variant="light"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  <span>Login</span>
                </Button>
              </NavbarItem>

              <NavbarItem>
                <Button
                  color="secondary"
                  className="text-white font-bold hover:bg-[#6B33CC]"
                  variant="flat"
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  <span>Sign Up</span>
                </Button>
              </NavbarItem>
            </>
          )}
        </NavbarContent>
      </TopBar>
    </div>
  );
};

export default Navbar;
