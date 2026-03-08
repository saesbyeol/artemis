import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, label, id, ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium text-graphite-700"
          >
            {label}
          </label>
        )}
        <input
          type={type}
          id={id}
          className={cn(
            "flex h-10 w-full border border-graphite-300 bg-white px-3 py-2 text-sm text-graphite-900 placeholder:text-graphite-400 transition-colors duration-150",
            "focus:outline-none focus:ring-2 focus:ring-graphite-400 focus:ring-offset-1 focus:border-graphite-400",
            "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-graphite-50",
            error && "border-danger focus:ring-danger",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="text-xs text-danger mt-1">{error}</p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
