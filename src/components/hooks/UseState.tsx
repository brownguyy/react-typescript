import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};
export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const handleLogin = () => {
    setUser({
      name: "Sanket",
      email: "sanket@gmail.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Log In</button>
      <button onClick={handleLogout}>Logout</button>
      <p>Name is {user?.name} </p>
      <p>Email is {user?.email} </p>
    </div>
  );
};
