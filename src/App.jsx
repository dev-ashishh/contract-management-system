import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";

import DashboardPage from "./pages/DashboardPage";
import BlueprintsPage from "./pages/BlueprintsPage";
import CreateContractPage from "./pages/CreateContractPage";
import ViewContractPage from "./pages/ViewContractPage";
import UseBlueprintsPage from "./pages/UseBlueprintsPage"; 

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/blueprints" element={<BlueprintsPage />} />
        <Route path="/create-contract" element={<CreateContractPage />} />
        <Route path="/contract/:id" element={<ViewContractPage />} />
        <Route
          path="/use-blueprint/:blueprintId"
          element={<UseBlueprintsPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
