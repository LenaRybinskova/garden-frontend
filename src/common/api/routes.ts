export const ROUTES = {
  SIGN_UP: '/auth/signUpPage',
  SIGN_IN: '/auth/signInPage',
  PUBLIC: '/',
  PRIVACY_POLICY: '/auth/privacyPolicy',

  CREATE: '/create',
  CREATE_NEW_PASSWORD: '/auth/recovery',
  FAVORITES: '/favorites',
  FORGOT_PASSWORD: '/auth/forgotPasswordPage',
  HOME: '/home',
  MESSENGER: '/messenger',
  PROFILE: '/profile',
  SEARCH: '/search',
  SETTINGS: '/profile/settings',
  STATICS: '/statics',
};

export type AppRoutes = typeof ROUTES;

export type AppRoutesValues = AppRoutes[keyof AppRoutes];
