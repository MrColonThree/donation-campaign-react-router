import { NavLink, useRouteError } from "react-router-dom";

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
      <NavLink to="/"><button className="px-3 py-1 text-xl bg-[#FF444A] text-white rounded-md font-semibold mt-5">Go Home</button></NavLink>
     </div>
    </div>
  );
}
