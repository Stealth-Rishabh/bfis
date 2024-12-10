import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { router } from "./route/router";
import bg_img from "@/assets/images/webp/bg_img.webp";

const App = () => {
  return (
    <HelmetProvider>
      <div
        style={{
          backgroundImage: `url(${bg_img})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
  );
};

export default App;
