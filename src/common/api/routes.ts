export const ROUTES = {
  SIGN_UP: '/auth/signUpPage',
  SIGN_IN: '/auth/signInPage',
  PUBLIC: '/',

  CREATE: '/create',
  CREATE_NEW_PASSWORD: '/auth/recovery',
  FAVORITES: '/favorites',
  FORGOT_PASSWORD: '/auth/forgotPasswordPage',
  HOME: '/home',
  MESSENGER: '/messenger',
  PRIVACY_POLICY: '/auth/privacyPolicyPage',
  PROFILE: '/profile',
  SEARCH: '/search',
  SETTINGS: '/profile/settings',
  STATICS: '/statics',
  TERMS_OF_SERVICE: '/auth/termsOfServicePage',
};

export type AppRoutes = typeof ROUTES;

export type AppRoutesValues = AppRoutes[keyof AppRoutes];
