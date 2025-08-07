import { Button } from '@/common/components/button';
import HomeIcon from '@/assets/icons/HomeIcon';

export const Header = () => {
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
        <div className="">
          <Button size={'sm'}>logout</Button>
        </div>
      </div>
    </header>
  );
};
