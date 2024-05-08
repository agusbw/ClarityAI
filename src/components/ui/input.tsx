"use client";

import * as React from "react";
import { Eye, EyeOff, icons } from "lucide-react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  Icon?: React.ReactElement;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, Icon, ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] =
      React.useState<boolean>(false);

    if (Icon) {
      return (
        <div className="flex h-9 w-full items-center gap-x-2 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors">
          <Icon.type
            {...Icon.props}
            className="size-5 text-muted-foreground"
          />
          <input
            type={
              type !== "password"
                ? type
                : isPasswordVisible
                  ? "text"
                  : "password"
            }
            className={cn(
              "h-full w-full border-none file:border-0 file:bg-background file:text-sm file:font-medium  placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50",
              className,
            )}
            ref={ref}
            {...props}
          />
          {type === "password" ? (
            <div>
              {isPasswordVisible ? (
                <Eye
                  size={14}
                  className="text-muted-foreground transition-colors hover:text-primary"
                  onClick={() => {
                    setIsPasswordVisible(false);
                  }}
                />
              ) : (
                <EyeOff
                  size={14}
                  className="text-muted-foreground transition-colors hover:text-primary"
                  onClick={() => {
                    setIsPasswordVisible(true);
                  }}
                />
              )}
            </div>
          ) : null}
        </div>
      );
    }

    return (
      <div className="flex h-9 w-full items-center gap-x-2 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors">
        <input
          type={
            type !== "password" ? type : isPasswordVisible ? "text" : "password"
          }
          className={cn(
            "h-full w-full border-none file:border-0 file:bg-background file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          ref={ref}
          {...props}
        />
        {type === "password" ? (
          <div>
            {isPasswordVisible ? (
              <Eye
                size={14}
                className="text-muted-foreground transition-colors hover:text-primary"
                onClick={() => {
                  setIsPasswordVisible(false);
                }}
              />
            ) : (
              <EyeOff
                size={14}
                className="text-muted-foreground transition-colors hover:text-primary"
                onClick={() => {
                  setIsPasswordVisible(true);
                }}
              />
            )}
          </div>
        ) : null}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
