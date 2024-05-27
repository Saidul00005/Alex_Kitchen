"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu
} from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { ChevronDown } from "@/app/components/utils/Icons/chevron-down";


const Navigationbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = ["Home", "About us", "Menu",];

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
  };

  return (
    <>
      <Navbar onMenuOpenChange={setIsMenuOpen} isBlurred={true}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
          <Button
              as={Link}
              disableRipple
              className="p-0 bg-transparent data-[hover=true]:bg-transparent font-mono text-lg md:text-xl"
              radius="sm"
              variant="light"
              href="/"
            >
              Alex Kitchen
            </Button>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Button
              as={Link}
              disableRipple
              className="p-0 bg-transparent data-[hover=true]:bg-transparent font-mono md:text-lg"
              radius="sm"
              variant="light"
              href="/"
            >
              Home
            </Button>
          </NavbarItem>

          {/* Dropdown Section 1 */}

          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent font-mono md:text-lg"
                  endContent={icons.chevron}
                  radius="sm"
                  variant="light"
                >
                  About us
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="Blog type"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="Blog type 1"
                description="Learn about our restaurant's story, from humble beginnings to becoming a beloved culinary destination, and the passion that drives us to serve exceptional food."
                startContent="🔥"
              >
                Our journey
              </DropdownItem>
              <DropdownItem
                key="Blog type 2"
                description="Visit our offline restaurant where you can enjoy our delicious dishes in a cozy and welcoming atmosphere."
                startContent="🗺️"
              >
                Our Offline Restaurant address
              </DropdownItem>
              <DropdownItem
                key="Blog type 3"
                description="Get in touch with us for inquiries or reservations."
                startContent="📧"
              >
                Contact
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          {/* Dropdown Section 2 */}

          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent font-mono md:text-lg"
                  endContent={icons.chevron}
                  radius="sm"
                  variant="light"
                >
                  🍔Menu
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="Project type"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="Project type 1"
                href="/menuItems/vegetarianMenu"
                description="Explore a delightful range of vegetarian dishes, crafted to satisfy your taste buds with fresh and flavorful ingredients."
                startContent="🥔🥕"
              >
              Vegetarian
              </DropdownItem>
              <DropdownItem
                key="Project type 2"
                href="/menuItems/nonVegetarianMenu"
                description="Discover a variety of non-vegetarian dishes, featuring hearty and delicious options made with premium meats and seafood."
                startContent="🍗🥩"
              >
                 Non-vegetarian
              </DropdownItem>
              <DropdownItem
                key="Project type 3"
                href="/menuItems/petFoodMenu"
                description="Browse our selection of nutritious and tasty food options, specially formulated to keep your pet healthy and happy."
                startContent="🐶🐱"
              >
                Pet Food Items
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={"foreground"}
              className="w-full"
              href={item === 'Home' ? '/' : item ==='About us' ? '/aboutUs' : item === 'Menu' ? '/menuItems': '#'}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
        
      </Navbar>
      <div className="flex justify-center">
        <div className="hidden md:block dark:bg-green-800 bg-slate-800  dark:opacity-75 opacity-15 h-1 w-3/4"></div>
      </div>
    </>
  );
};

export default Navigationbar;
