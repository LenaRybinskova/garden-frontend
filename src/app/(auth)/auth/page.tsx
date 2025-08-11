import { Input } from '@/common/components/input';
import { Button } from '@/common/components/button';
import { Checkbox } from '@/common/components/checkbox';

export default async function Page() {
  return (
    <div
      className={
        'border-nature-beige flex flex-col content-center items-center justify-center gap-3 rounded-lg border-2 shadow'
      }
    >
      <div className={'flex flex-col items-center justify-center'}>
        <p className={'text-nature-forest text-lg font-bold'}>Зарегистрироваться</p>
        <div className={'flex w-full flex-col items-center justify-center gap-3 align-middle'}>
          <div className={'max-w-[310px]'}>
            <Input title={'Имя пользователя'} />
            <Input title={'Почта'} />
            <Input title={'Пароль'} />
            <Input title={'Подтверждение пароля'} />
          </div>
          <Checkbox
            title={'Я согласен с Условия пользования и Политика конфиденциальности'}
            className={'flex items-center justify-center'}
          />
        </div>
        <Button size={'sm'} className={'text-sm'} disabled={false}>
          Зарегистрироваться
        </Button>
      </div>
    </div>
  );
}
