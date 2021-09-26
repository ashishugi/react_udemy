const API_ROOT = `http://codeial.codingninjas.com:8000/api/v2`;

export const APIUrls = {
    login: () => `${API_ROOT}/users/login`,
    signup: () => `${API_ROOT}/users/signup`,
}