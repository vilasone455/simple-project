import React from "react";

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function TableLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <section id="user">
      <div className=" bg-gray-100 p-5  rounded-lg h-fit  mx-auto mt-5">
        <div className="text-center text-2xl my-5">
          User List
        </div>
        <div className="border rounded-lg divide-y divide-gray-400 dark:border-gray-700 dark:divide-gray-700 bg-white border-gray-400 m-5">
          <div className="overflow-x-auto p-2">{children}</div>
        </div>
      </div>
    </section>
  );
}
