interface UndoableNotification {
  message: string
  cancelMutation?: () => void
  closeToast?: () => void
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const UndoableNoti: React.FC<UndoableNotification> = ({
  closeToast,
  cancelMutation,
  message,
}) => {
  return (
    <div>
      <p>{message}</p>
      <button
        onClick={() => {
          cancelMutation?.();
          closeToast?.();
        }}
      >
        Undo
      </button>
    </div>
  );
};
