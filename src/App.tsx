import { QueryClient, QueryClientProvider } from "react-query";

import Welcome from "./components/welcome";
import Header from "./components/header";
import Filter from "./components/filter";
import Labels from "./components/labels";
import Location from "./components/location";
import { ErrorBoundary } from "./components/errorBoundary";

const queryClient = new QueryClient();
export default function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Welcome />
        <Filter />
        <Labels />
        <Location />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}
