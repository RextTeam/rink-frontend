import axios from 'axios';
import { API_URL } from 'lib';
import { setCookie } from 'nookies'
import RootPage from '../components/root'


export default function accountCreate() {
  async function handleSubmit(event) {
    const r = await axios.post(`${API_URL}/v1/accounts`, {
      data: {
        email: event.target.email.value,
        id: event.target.id.value,
        password: event.target.password.value,
      }
    });
    setCookie(null, "token", r.data);
  }
  return (
    <RootPage>
      <h2>アカウント作成</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userid">ユーザーID</label>
        <input type="text" id="userid" name="id" required />
        
        <label htmlFor="email">メールアドレス</label>
        <input type="text" id="email" name="email" required />
        
        <label htmlFor="password">パスワード</label>
        <input type="password" id="password" name="password" required />
        
        <button type="submit">作成</button>
      </form>
    </RootPage>
  );
}
