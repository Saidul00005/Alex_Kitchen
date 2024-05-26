// app/components/ThemeSwitcher.tsx
"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <div>
      <Dropdown>
      <DropdownTrigger>
        <Button 
         variant="bordered" 
         className="font-mono md:text-lg">
          Change mode
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="light" onClick={() => setTheme('light')}>Light</DropdownItem>
        <DropdownItem key="dark" onClick={() => setTheme('dark')}>Dark</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    </div>
  )
};