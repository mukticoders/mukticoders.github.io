import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <h1 class="text-3xl font-bold underline"> Hello world! </h1>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
