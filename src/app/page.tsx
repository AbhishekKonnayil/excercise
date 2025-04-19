"use client";
import { useRouter } from "next/navigation";
const Home = () => {
  const router = useRouter();
  const navigate = (page: string) => {
    router.push(`${page}`);
  };
  return (
    <div>
      <button onClick={() => navigate("login")}>Go to login page</button>
      <button onClick={() => navigate("colors")}>Go to Colors</button>
      <button onClick={() => navigate("about")}>Go to About</button>
    </div>
  );
};

export default Home;
