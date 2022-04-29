import React from "react";
import { ErrorBoundary as EB } from "react-error-boundary";
import useBrowser from "../hooks/useBrowser";

type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

export function ErrorFallback({
  error,
  resetErrorBoundary,
}: ErrorFallbackProps) {
  const browser = useBrowser();
  return (
    <div
      className="m-auto flex flex-col justify-center rounded-xl bg-slate-500 p-10 align-middle shadow-lg lg:max-w-[50%]"
      role="alert"
    >
      <p className="text-center text-[64px]">😧</p>
      <p className="flex flex-col text-center text-lg">
        {browser === "Brave" ? (
          <>
            <span className="pb-2">
              Something went wrong and it looks like you&apos;re using Brave.
            </span>
            <span className="text-md">
              This is probably because you have <em>strict</em> fingerprinting
              enabled.
            </span>
          </>
        ) : (
          <>
            <span>Something went wrong!</span>
            <pre className="pb-2">{error.message}</pre>
            <button className="" onClick={resetErrorBoundary}>
              Try again?
            </button>
          </>
        )}
      </p>
    </div>
  );
}

const errorLogger = (error: Error, info: { componentStack: string }) =>
  console.error(error, info);

const ErrorBoundary: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <EB FallbackComponent={ErrorFallback} onError={errorLogger}>
      {children}
    </EB>
  );
};

export default ErrorBoundary;
