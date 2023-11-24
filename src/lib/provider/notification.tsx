import React from "react";
import { type NotificationProvider } from "@refinedev/core";
import { toast, type TypeOptions } from "react-toastify";
import { UndoableNoti } from "@/common/components/undoablerNotification";

const createProgressNotification = ({ key, message, undoableTimeout, cancelMutation }:
{ key: string | undefined, message: string, undoableTimeout: number | undefined, cancelMutation: (() => void) | undefined }):
void => {
  const progress = undoableTimeout !== undefined ? (undoableTimeout / 10) * 2 : 0;

  if (toast.isActive(key as React.ReactText)) {
    toast.update(key as React.ReactText, {
      progress,
      render: (
        <UndoableNoti message={message} cancelMutation={cancelMutation} />
      ),
      type: "default",
    });
  } else {
    toast(
      <UndoableNoti message={message} cancelMutation={cancelMutation} />,
      {
        toastId: key,
        updateId: key,
        closeOnClick: false,
        closeButton: false,
        autoClose: false,
        progress,
      },
    );
  }
};

const createNotification = ({ key, message, type }: { key: string | undefined, message: string, type: TypeOptions }): void => {
  if (toast.isActive(key as React.ReactText)) {
    toast.update(key as React.ReactText, {
      render: message,
      closeButton: true,
      autoClose: 5000,
      type,
    });
  } else {
    toast(message, {
      toastId: key,
      type,
    });
  }
};

export const notificationProvider: NotificationProvider = {
  open: ({ key, message, type, undoableTimeout, cancelMutation }) => {
    if (type === "progress") {
      createProgressNotification({ key, message, undoableTimeout, cancelMutation });
    } else {
      createNotification({ key, message, type });
    }
  },
  close: (key) => {
    toast.dismiss(key);
  },
};
