import { Button } from '@/common/components/button';
import HomeIcon from '@/assets/icons/HomeIcon';
import { ThemeSwitcher } from '@/common/components/themeSwitcher';

export type AuthType = {
  auth: boolean;
};

export const Header = ({ auth = false }: AuthType) => {
  return (
    <header
      className={
        'bg-nature-beige border-nature-sage sticky top-0 z-50 w-full rounded-md border-b-2'
      }
    >
      <div className="flex h-16 items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="from-nature-sage to-nature-forest flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br shadow-sm">
            <HomeIcon />
          </div>
          <div className="">
            <h1 className="text-nature-forest text-lg font-bold">Мой Сад</h1>
            <p className="text-nature-earth text-xs">Дневник садовода</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          {auth && <p className="text-nature-forest text-lg font-semibold">Пользователь</p>}
          <ThemeSwitcher />
          {auth ? (
            <Button size={'sm'}>logout</Button>
          ) : (
            <div className="flex items-center gap-3">
              <Button variant={'outline'} size={'sm'}>
                Log in
              </Button>
              <Button size={'sm'}>Sign up</Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
