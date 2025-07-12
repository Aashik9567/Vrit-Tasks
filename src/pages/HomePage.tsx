
import Button from "../components/ui/Button/Button";
import { useNavigate } from "react-router-dom";
const Homepage = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      <div className="flex flex-col gap-8 items-center">
        <Button onClick={()=>navigate("/taskone")} size="lg" className="w-48"  href="/task1">
          Task 1
        </Button>
        <Button onClick={()=>navigate("/tasktwo")} size="lg" className="w-48"  href="/task2">
          Task 2
        </Button>
        <Button onClick={()=>navigate("/taskthree")} size="lg" className="w-48"  href="/task3">
          Task 3
        </Button>
        <Button onClick={()=>navigate("/video")} size="lg" className="w-48"  href="/video">
          Video Animation
        </Button>
      </div>
    </div>
  );
};

export default Homepage;