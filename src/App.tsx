import { QueryClient, QueryClientProvider } from "react-query";

import Welcome from "./components/welcome";
import Header from "./components/header";
import Filter from "./components/filter";

const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Welcome />
      <Filter />
    </QueryClientProvider>
  );
}
