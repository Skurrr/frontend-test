import React from "react";
import { SWRConfig } from "swr";
import AppRoutes from "../../routes/AppRoutes";
import { defaultFetcher } from "../../api/deafultFetcher";

function App() {
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: defaultFetcher,
      }}
    >
      <AppRoutes />
    </SWRConfig>
  );
}

export default App;
