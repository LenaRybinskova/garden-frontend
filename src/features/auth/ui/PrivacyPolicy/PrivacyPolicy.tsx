'use client';

import SvgArrowIosBack from '@/assets/icons/ArrowBack';
import Link from 'next/link';
import { ROUTES } from '@/common/api/routes';

export const PrivacyPolicy = () => {
  return (
    <div className="bg-card border-border w-full max-w-2xl rounded-lg border p-8 shadow-sm">
      <div className={'flex justify-start gap-4 pb-4'}>
        <div className={'flex items-center hover:cursor-pointer hover:rounded-lg hover:shadow-lg'}>
          <Link href={ROUTES.SIGN_UP}>
            <SvgArrowIosBack width="2em" height="2em" />{' '}
          </Link>
        </div>
        <div className="text-primary text-2xl font-bold">{'Политика конфиденциальности'}</div>
      </div>

      <p className="text-foreground bg-muted mb-8 rounded-md p-4 leading-relaxed font-medium">
        Это учебный пет-проект, созданный исключительно в учебных целях чтобы разобраться в
        принципах работы Next.js, Nest.js, RTK Query и др библиотек.
      </p>
      <p className={'pb-2 text-sm'}>
        Рекомендуем не использовать реальные персональные данные при тестировании функционала
      </p>

      <div className="flex flex-col gap-5">
        <div className="bg-nature-light-green border-nature-forest rounded-lg p-4">
          <h4 className="mb-3 font-semibold text-[var(--color-nature-forest)]">
            {'Категории обрабатываемых данных:'}
          </h4>
          <ul className="text-foreground space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-1 text-[var(--color-nature-forest)]">•</span>
              {'Идентификационные данные (имя/псевдоним)'}
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-[var(--color-nature-forest)]">•</span>
              {'Контактные данные (адрес электронной почты)'}
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-[var(--color-nature-forest)]">•</span>
              {'Учетные данные (хэшированный пароль)'}
            </li>
          </ul>
        </div>

        <div className="rounded-lg border-[var(--color-nature-sage)] bg-[var(--color-nature-beige)] p-6">
          <h4 className="mb-3 font-semibold text-[var(--color-nature-earth)]">
            {'Цели обработки:'}
          </h4>
          <ul className="text-foreground space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-1 text-[var(--color-nature-sage)]">•</span>
              {'Обеспечение безопасности учетных записей'}
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-[var(--color-nature-sage)]">•</span>
              {'Техническая поддержка функционирования данного пет-проекта'}
            </li>
          </ul>
        </div>

        <div className="bg-accent border-primary rounded-lg p-6">
          <h4 className="text-primary mb-3 font-semibold">{'Меры защиты:'}</h4>
          <ul className="text-foreground space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              {'Пароли хэшируются с использованием алгоритма Argon2id'}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              {
                'Однако ни один метод передачи данных через интернет не является полностью безопасным'
              }
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
