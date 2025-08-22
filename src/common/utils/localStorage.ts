export class LocalStorage {
  static TOKEN_KEY = 'token';

  static getToken() {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(this.TOKEN_KEY);
    }

    return null;
  }

  static removeToken() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(this.TOKEN_KEY);
      window.dispatchEvent(new Event('storage'));
    }
  }

  static setToken(token: string) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.TOKEN_KEY, token);
      window.dispatchEvent(new Event('storage'));
    }
  }
}
