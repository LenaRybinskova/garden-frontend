import { test, expect } from '@playwright/test';

test('тест регистрации от главной страницы c редиректом на / в случаем успеха, когда проблем вообще нет', async ({
  page,
}) => {
  await page.goto('http://localhost:3000'); //перейти

  await expect(page).toHaveURL('http://localhost:3000'); //текущий урл должег быть

  const signInButton = page.locator('[data-testid="header-signup-button"]'); // найти кн signup
  await expect(signInButton).toBeVisible(); // она должна быть видимой
  await signInButton.click(); //клик

  await page.waitForURL('**/auth/signUpPage'); //ОЖИДАЕМ перехода

  const registrationForm = page.locator('[data-testid="registration-form"]'); // находим элемент формы, он адолжна быть вдимой
  await expect(registrationForm).toBeVisible();

  //  Заполняем форму
  await page.fill('[data-testid="login-input"]', 'lena333');
  await page.fill('[data-testid="email-input"]', 'lena333@gmail.com');
  await page.fill('[data-testid="password-input"]', 'qwerty123');
  await page.fill('[data-testid="confirm-password-input"]', 'qwerty123');
  await page.locator('[data-testid="checkBoxTerms"]').check();
  await expect(page.locator('[data-testid="checkBoxTerms"]')).toBeChecked(); // чекбокс должен быть щелкнут

  await page.click('[data-testid="submit-button"]'); // нажим на сабмит

  await page.waitForURL('**/'); // если все ОК то должен быть редирект
});
