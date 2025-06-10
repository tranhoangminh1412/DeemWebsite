// components/LoginButton.js
"use client";

import { useAuthContext } from "@/contexts/authContext";

export default function LoginButton() {
  const { authenticated, setAuthenticated } = useAuthContext();

  const handleLogin = () => {setAuthenticated(true)
    console.log(authenticated)
    console.log("through");
  }; // Set authenticated to true
  const handleLogout = () =>{setAuthenticated(false)
    console.log(authenticated);
  }; // Set authenticated to false

  return (
    <button onClick={authenticated ? handleLogout : handleLogin} className="cursor-pointer">
      {authenticated ? "Logout" : "Login"}
    </button>
  );
}
