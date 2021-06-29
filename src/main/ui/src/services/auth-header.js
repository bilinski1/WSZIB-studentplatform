export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('studentid'));
    const token = localStorage.getItem('token');
    if (user && token) {
      return { Authorization: 'token' };
    } else {
      return {};
    }
  }