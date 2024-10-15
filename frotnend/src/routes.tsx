import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import NewReleases from "./pages/NewReleases";
import BookDetails from "./pages/BookDetails";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  { path: "browse", element: <Browse /> },
  { path: "new-releases", element: <NewReleases /> },
  { path: "book", element: <BookDetails /> },
]);

export default router;
