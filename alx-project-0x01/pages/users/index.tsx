import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const UsersPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-semibold mb-4">Users</h1>
        <p>This is where the list of users will go.</p>
      </main>
      <Footer />
    </>
  );
};

export default UsersPage;
