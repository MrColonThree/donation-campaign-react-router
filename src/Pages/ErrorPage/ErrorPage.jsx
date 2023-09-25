import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="max-w-screen-xl mx-auto flex justify-center items-center h-screen text-center" id="error-page">
     <div>
     <h1 className="text-4xl md:text-5xl mb-5">Oops!</h1>
      <p className="text-2xl">Sorry, this page is not available.</p>
      <p className="text-2xl">
        <i>{error.statusText || error.message}</i>
      </p>
     </div>
    </div>
  );
}
