import { useEffect, useState, useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "@/components/home/Loader";
import Island from "@/components/models/Island";
import Sky from "@/components/models/Sky";
import Bird from "@/components/models/Bird";
import Plane from "@/components/models/Plane";
import HomeInfo from "@/components/home/HomeInfo";

export default function Home() {
  const [islandScale, setIslandScale] = useState([1, 1, 1]);
  const [islandPosition, setIslandPosition] = useState([0, -3, -43]);
  const [islandRotation, setIslandRotation] = useState([0.1, 4.7, 0]);
  const [planeScale, setPlaneScale] = useState([1.5, 1.5, 1.5]);
  const [planePosition, setPlanePosition] = useState([0, -4, -4]);
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    function adjustForScreenSize() {
      if (typeof window !== "undefined") {
        if (window.innerWidth > 768) {
          setIslandScale([0.9, 0.9, 0.9]);
          setPlaneScale([1.5, 1.5, 1.5]);
          setPlanePosition([0, -1.5, 0]);
        } else {
          setIslandScale([1, 1, 1]);
          setPlaneScale([3, 3, 3]);
          setPlanePosition([0, -4, -4]);
        }
      }
    }

    adjustForScreenSize(); // Initial adjustment

    const handleResize = () => {
      adjustForScreenSize(); // Adjust when window resizes
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="h-screen">
      {/* All Three.js 3D components will be rendered in this Canvas component */}
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`bg-transparent absolute top-0 ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}>
        {/* Suspense component used as a loading indicator while the data is loading */}
        {/* So you render your data that may be late in this Suspense component */}
        <Suspense fallback={<Loader />}>
          {/* A light that comes from a distance source like the sun */}
          <directionalLight position={[1, 1, 1]} intensity={2} />
          {/* Dealing with shadow a little */}
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            scale={islandScale}
            position={islandPosition}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            currentStage={currentStage}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            scale={planeScale}
            position={planePosition}
            isRotating={isRotating}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
}
