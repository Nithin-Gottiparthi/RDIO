
import React from "react";

interface LogoProps {
  variant?: "color" | "gearCap";
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const Logo: React.FC<LogoProps> = ({ 
  variant = "color", 
  className = "", 
  size = "md" 
}) => {
  // Size classes based on the size prop
  const sizeClasses = {
    sm: "h-8",
    md: "h-12",
    lg: "h-16",
    xl: "h-20",
  };

  // Determine which logo to show based on the variant
  if (variant === "gearCap") {
    return (
      <img
        src="/images/logo0.png"
        alt="RDIO - Research Design Implement Operate"
        className={`${sizeClasses[size]} ${className}`}
      />
    );
  }
  
  // Default is the color logo
  return (
    <img
      src="/images/logo2.png"
      alt="RDIO - Research Design Implement Operate"
      className={`${sizeClasses[size]} ${className}`}
    />
  );
};

export default Logo;
