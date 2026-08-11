import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import ShowCreators from "./pages/ShowCreators";
import ViewCreator from "./pages/ViewCreator";
import AddCreator from "./pages/AddCreator";
import EditCreator from "./pages/EditCreator";

function App() {
  return (
    <BrowserRouter>

      <main>

        <Routes>

          <Route path="/" element={<ShowCreators />} />
          <Route path="/creator/:id" element={<ViewCreator />} />
          <Route path="/new" element={<AddCreator />} />
          <Route path="/edit/:id" element={<EditCreator />} />

        </Routes>

      </main>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
