"use client";

import React from "react";
import { type UseFormRegister, type FieldValues } from "react-hook-form";

interface InputProps {
  register: UseFormRegister<FieldValues>
  name: string
  type: string
  id: string
  label: string
}
// eslint-disable-next-line @typescript-eslint/naming-convention
const Input: React.FC<InputProps> = ({ register, name, type, id, label }) => {
  return (
    <div>
      <label htmlFor="username" className="block mb-2 text-sm dark:text-white">
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          id={id}
          className="block w-full px-4 py-3 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-400 dark:border-gray-800 dark:text-white"
          required
          aria-describedby="username-error"
          {...register(name)}
        />
        <div className="absolute inset-y-0 right-0 flex items-center hidden pr-3 pointer-events-none"></div>
      </div>
      <p className="hidden mt-2 text-xs text-red-600" id="username-error">
        Please include a valid username
      </p>
    </div>
  );
};
export default Input;
