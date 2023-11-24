import React from "react";

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Badge = ({
  choice,
  children,
}: { choice: boolean, children: React.ReactNode }): JSX.Element => {
  if (choice) {
    return (<span
      className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border border-teal-500 text-teal-500">
      {children}
    </span>);
  }
  return (<span
    className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border border-red-500 text-red-500">
    {children}
  </span>);
};
