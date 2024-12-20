import Utils from "src/shared/utils/utils";
import * as React from "react";

export interface FormButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const FormButton = React.forwardRef<HTMLButtonElement, FormButtonProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        type={type}
        className={Utils.cn(
          "flex items-center gap-2 whitespace-nowrap rounded bg-black px-3 py-2 text-sm font-medium text-secondary transition-colors hover:bg-zinc-300 dark:bg-zinc-50 dark:text-zinc-900",
          className,
        )}
      />
    );
  },
);

FormButton.displayName = "FormButton";

export { FormButton };