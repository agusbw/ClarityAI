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
        <div className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors gap-x-2 items-center">
          <Icon.type
            {...Icon.props}
            className="text-muted-foreground size-5"
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
              "file:border-0 file:bg-background file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0  disabled:cursor-not-allowed disabled:opacity-50 border-none w-full h-full",
              className
            )}
            ref={ref}
            {...props}
          />
          {type === "password" ? (
            <div>
              {isPasswordVisible ? (
                <Eye
                  size={14}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => {
                    setIsPasswordVisible(false);
                  }}
                />
              ) : (
                <EyeOff
                  size={14}
                  className="text-muted-foreground hover:text-primary transition-colors"
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
      <div className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors gap-x-2 items-center">
        <input
          type={
            type !== "password" ? type : isPasswordVisible ? "text" : "password"
          }
          className={cn(
            "file:border-0 file:bg-background file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 border-none w-full h-full",
            className
          )}
          ref={ref}
          {...props}
        />
        {type === "password" ? (
          <div>
            {isPasswordVisible ? (
              <Eye
                size={14}
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={() => {
                  setIsPasswordVisible(false);
                }}
              />
            ) : (
              <EyeOff
                size={14}
                className="text-muted-foreground hover:text-primary transition-colors"
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
);
Input.displayName = "Input";

export { Input };
