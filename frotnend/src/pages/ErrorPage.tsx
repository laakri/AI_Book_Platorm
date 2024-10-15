import React from "react";
import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

const ErrorPage: React.FC = () => {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage =
      error.statusText ||
      error.data?.message ||
      "An unexpected error occurred.";
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = "An unknown error occurred.";
  }

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] text-center">
      <div className="p-8 rounded-lg shadow-md max-w-md w-full">
        <div className="flex items-center  space-x-2 text-red-600 mb-4">
          <AlertCircle className="h-6 w-6" />
          <h1 className="text-2xl font-bold">Oops! Something went wrong</h1>
        </div>
        <p className="text-lg mb-4 text-gray-400">
          We apologize for the inconvenience.
        </p>
        <p className="text-gray-500 mb-6">{errorMessage}</p>
        <div className="flex space-x-4 justify-center ">
          <Button asChild variant="default">
            <Link to="/">Go Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/browse">Browse Books</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
