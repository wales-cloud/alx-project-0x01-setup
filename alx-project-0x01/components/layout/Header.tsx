import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-100 py-4 px-6 flex justify-between">
      <h1 className="text-2xl font-bold">ALX Project</h1>
      <nav className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/users">Users</Link>
      </nav>
    </header>
  );
};

export default Header;
