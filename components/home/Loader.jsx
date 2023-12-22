import { Html } from "@react-three/drei";

export default function Loader() {
  return (
    // We'll switch the regular html to a Three.js component so we won't have a problem with the Canvas component
    <Html>
      <div className="flex items-center justify-center">
        <div className="w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    </Html>
  );
}
