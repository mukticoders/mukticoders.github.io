import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <Layout>
                <div className="w-full min-h-[60vh] bg-linear-to-r from-blue-300 to-blue-100">
                  <div className="max-w-7xl p-4 py-8 mx-auto grid items-center grid-cols-2 gap-5">
                    <div>
                      <div className="bg-white w-full px-8 py-12 rounded-lg">
                        <h1 className="text-4xl font-medium">
                          Coding. Programming. Web Development.
                        </h1>
                        <p className="text-lg mt-4 text-gray-800">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Fuga doloribus voluptatem minima in voluptatum
                          molestiae recusandae libero doloremque vitae. Itaque
                          vel nihil ad mollitia velit qui praesentium fuga vitae
                          molestiae!
                        </p>
                        <button className="mt-8 px-5 py-2 bg-blue-700 text-white cursor-pointer rounded-lg">
                          Learn more
                        </button>
                      </div>
                    </div>
                    <div>
                      <img src="./src/assets/images/coding-hand.png" alt="BANNER" className="w-full h-full max-h-[450px] object-contain" />
                    </div>
                  </div>
                </div>
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
