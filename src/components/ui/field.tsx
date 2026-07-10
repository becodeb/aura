import * as React from "react";
import { cn } from "@/lib/utils";

const fieldBase =
  "peer w-full border-0 border-b border-ink/20 bg-transparent px-0 py-4 text-[16px] text-ink placeholder-transparent outline-none transition-colors duration-300 focus:border-ink";

type FieldWrapperProps = {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
};

export function FieldWrapper({ label, htmlFor, children, className }: FieldWrapperProps) {
  return (
    <div className={cn("relative", className)}>
      {children}
      <label
        htmlFor={htmlFor}
        className="pointer-events-none absolute left-0 top-4 text-[16px] text-stone transition-all duration-300 peer-focus:-top-3 peer-focus:text-[11px] peer-focus:tracking-[0.2em] peer-focus:uppercase peer-focus:text-champagne peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:tracking-[0.2em] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-stone"
      >
        {label}
      </label>
    </div>
  );
}

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input ref={ref} className={cn(fieldBase, className)} placeholder=" " {...props} />
  )
);
Input.displayName = "Input";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea ref={ref} className={cn(fieldBase, "resize-none", className)} placeholder=" " {...props} />
));
Textarea.displayName = "Textarea";

export const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(({ className, children, ...props }, ref) => (
  <select
    ref={ref}
    className={cn(
      "w-full appearance-none border-0 border-b border-ink/20 bg-transparent px-0 py-4 text-[16px] text-ink outline-none transition-colors duration-300 focus:border-ink",
      className
    )}
    {...props}
  >
    {children}
  </select>
));
Select.displayName = "Select";
