'use client';

import './../../styles/global.scss';
import { Providers } from '@/common/api/ApiProvider';
import { ThemeProvider } from 'next-themes';
import Header from '@/common/components/Header/Header';
import AuthLayout from '@/features/auth/ui/AuthLayout/AuthLayout';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  /*const theme = await getTheme()*/

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen">
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <AuthLayout>
              {(isAuthenticated) => (
                <div className="from-nature-beige to-nature-light-green relative flex min-h-screen flex-col bg-gradient-to-br px-50">
                  <header className={'flex w-full flex-col items-center'}>
                    <Header auth={isAuthenticated} />
                  </header>
                  <main className="flex w-full flex-1 justify-center">
                    <div className="flex flex-col content-center items-center justify-center">
                      {children}
                    </div>
                  </main>
                </div>
              )}
            </AuthLayout>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}

/*
content-height */
