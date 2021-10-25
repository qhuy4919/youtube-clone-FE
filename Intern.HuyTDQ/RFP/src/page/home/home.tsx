import { Header, Sidebar } from "../../component/index";
import HomeContent from "./home-content";

import "./home.scss";
export function Home() {
  // const [playlist, setPlaylist] = useState({});

  return (
    <div className="">
      <Header />
      <Sidebar />
      <div className="home-container">
        <HomeContent />
      </div>
    </div>
  );
}
