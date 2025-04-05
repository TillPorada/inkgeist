export const isAuthenticated = (): boolean => {
    return !!localStorage.getItem('authToken');
  };
  
  export const getAuthToken = (): string | null => {
    return localStorage.getItem('authToken');
  };
  
  export const logout = (): void => {
    localStorage.removeItem('authToken');
    window.location.href = '/login';
  };
  