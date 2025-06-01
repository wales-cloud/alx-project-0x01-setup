import Header from "@/components/layout/Header";

const PostsPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-semibold mb-4">Posts</h1>
        <p>This is where the list of posts will go.</p>
      </main>
    </>
  );
};

export default PostsPage;
