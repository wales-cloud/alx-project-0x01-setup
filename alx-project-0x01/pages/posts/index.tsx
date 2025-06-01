import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const PostsPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-semibold mb-4">Posts</h1>
        <p>This is where the list of posts will go.</p>
      </main>
      <Footer />
    </>
  );
};

export default PostsPage;
