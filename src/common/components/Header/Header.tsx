import { Button } from '@/common/components/button';
import HomeIcon from '@/assets/icons/HomeIcon';
import { ThemeSwitcher } from '@/common/components/themeSwitcher';
import Link from 'next/link';

export type AuthType = {
  auth: boolean;
};

export const Header = ({ auth = false }: AuthType) => {
  return (
    <div
      className={
        'from-nature-beige/50 to-nature-beige/0 border-nature-beige sticky top-0 z-50 w-full border-b-1 bg-gradient-to-r shadow-md'
      }
    >
      <div className="flex h-[var(--header-height)] items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="from-nature-sage to-nature-forest flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br shadow-sm">
            <HomeIcon />
          </div>
          <div className="">
            <h1 className="text-nature-forest text-lg font-bold">Мой Сад</h1>
            <p className="text-nature-earth text-xs">Дневник садовода</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {auth && <p className="text-nature-forest text-lg font-semibold">Пользователь</p>}
          <ThemeSwitcher />
          {auth ? (
            <Button size={'sm'}>logout</Button>
          ) : (
            <div className="flex items-center gap-3">
              <Button variant={'outline'} size={'sm'}>
                <Link href="/login">Log in</Link>
              </Button>
              <Button asChild size={'sm'}>
                <Link href="/auth">Sign up</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
