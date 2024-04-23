import Header from "./_components/Header";
// import Hero from "./_components/Hero";
import TestComponent from "./_components/TestComponent";

export default function Home() {

  return (
    <div className="bg-white dark:bg-zinc-900">
      <Header/>
      {/* <Hero/> */}
      <TestComponent/>
    </div>
  );
}