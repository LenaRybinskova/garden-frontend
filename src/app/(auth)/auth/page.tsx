import { Input } from '@/common/components/input';
import { Button } from '@/common/components/button';

export default async function Page() {
  return (
    <div className={'flex w-full flex-col items-center justify-center gap-3 align-middle'}>
      <div>Зарегистрироваться</div>
      <div className={'flex flex-col items-center justify-center align-middle'}>
        <Input title={'Имя пользователя'} />
        <Input title={'Почта'} />
        <Input title={'Пароль'} />
        <Input title={'Подтверждение пароля'} />
        <Input type={'checkbox'} title={'Подтверждение пароля'} />
        <Button size={'sm'} className={'text-sm'} disabled={false}>
          Зарегистрироваться
        </Button>
      </div>
    </div>
  );
}
