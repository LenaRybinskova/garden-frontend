'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/common/components/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/common/components/dropdown-menu';

export type ThemeType = 'light' | 'dark';

export function ThemeSwitcher() {
  const { setTheme } = useTheme();

  const handleTheme = (newTheme: ThemeType) => {
    setTheme(newTheme);
    // TODO пост запрос на сервер, для сохр темы в профиле. При логине будем в куках получать значение темы, по дефолту светлая.
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className={'h-9'}>
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-auto min-w-[unset] px-2 will-change-transform">
        <DropdownMenuItem onClick={() => handleTheme('light')}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleTheme('dark')}>Dark</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
