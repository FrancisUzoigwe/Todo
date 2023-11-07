import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./router/mainRouter";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const App = () => {
  let client = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={client}>
        <RouterProvider router={mainRouter} />
      </QueryClientProvider>
    </div>
  );
};
9
export default App;
