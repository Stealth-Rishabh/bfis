import { RouterProvider } from "react-router-dom";
import { router } from "./route/router";
import bg_img from "@/assets/images/webp/bg_img.webp";

const App = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg_img})`, // Corrected here
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
