// app/logout/page.tsx

import { logout } from './actions';

export default async function LogoutPage() {
  await logout();

  // This return statement is just a placeholder since the user will be redirected
  return <p>Logging you out...</p>;
}

