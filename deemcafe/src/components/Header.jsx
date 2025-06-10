"use client";

import { useRouter } from "next/navigation";
import LoginButton from "./LoginButton";

export default function Header() {
  const router = useRouter();

  // Function to navigate to different pages
  const navigate = (path) => {
    router.push(path);
  };

  return (
    <header className="bg-gray-800 p-4 text-white">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-bold cursor-pointer" onClick={() => navigate("/")}>
          MyApp
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6">
            <li className="cursor-pointer hover:text-gray-400" onClick={() => navigate("/")}>Home</li>
            <li className="cursor-pointer hover:text-gray-400" onClick={() => navigate("/about")}>About Us</li>
            <li className="cursor-pointer hover:text-gray-400" onClick={() => navigate("/community")}>Community</li>
            <li className="cursor-pointer hover:text-gray-400" onClick={() => navigate("/debit-card")}>Debit Card</li>
            <li className="cursor-pointer hover:text-gray-400" onClick={() => navigate("/menu")}>Menu</li>
            <li className="cursor-pointer hover:text-gray-400" onClick={() => navigate("/events")}>Events</li>
          </ul>
        </nav>

        {/* Login Button */}
        <div>
          <LoginButton />
        </div>
      </div>
    </header>
  );
}
