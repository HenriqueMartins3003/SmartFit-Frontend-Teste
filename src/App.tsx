import { QueryClient, QueryClientProvider } from "react-query";

import Welcome from "./components/welcome";
import Header from "./components/header";
import Filter from "./components/filter";
import Labels from "./components/labels";

const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Welcome />
      <Filter />
      <Labels />
    </QueryClientProvider>
  );
}
