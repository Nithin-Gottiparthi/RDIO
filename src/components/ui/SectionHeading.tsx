
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

const SectionHeading = ({
  title,
  subtitle,
  center = false,
  className,
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        "mb-12",
        center ? "text-center" : "",
        className
      )}
    >
      <h2 className="heading-lg text-gray-900 mb-3">{title}</h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`h-1 bg-rdio-teal mt-4 ${center ? "mx-auto w-20" : "w-20"}`}></div>
    </div>
  );
};

export default SectionHeading;
