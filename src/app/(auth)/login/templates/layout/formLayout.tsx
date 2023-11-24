import React from "react";

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function FormLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <main className="w-full max-w-md p-6 mx-auto">
      <div className="bg-white border border-gray-200 shadow-sm mt-7 rounded-xl dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Sign in
            </h1>
          </div>
          <div className="mt-5">{children}</div>
        </div>
      </div>
    </main>
  );
}
