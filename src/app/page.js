import LeftAside from "@/components/layouts/LeftAside";
import Main from "@/components/layouts/Main";
import A from "@/components/UI/A";

function Home() {
  return (
    <>
      <div className="flex-container p-0">
        <main className="flex-container">
          <LeftAside />
          <Main />
          
        </main>
      </div>
    </>
  );
}

export default Home;
