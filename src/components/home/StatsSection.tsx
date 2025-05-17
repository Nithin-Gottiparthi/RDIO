
import { useEffect, useState, useRef } from "react";

interface StatItemProps {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
}

const StatItem = ({ value, label, suffix = "", duration = 2000 }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let requestId: number;
    
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * value));
      
      if (progress < 1) {
        requestId = requestAnimationFrame(step);
      }
    };
    
    requestId = requestAnimationFrame(step);
    
    return () => {
      cancelAnimationFrame(requestId);
    };
  }, [value, duration, isInView]);

  return (
    <div ref={elementRef} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-rdio-teal mb-2">
        {count}{suffix}
      </div>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    { value: 500, label: "Research Projects", suffix: "+" },
    { value: 20, label: "Innovation Labs" },
    { value: 3000, label: "Students Empowered", suffix: "+" },
    { value: 150, label: "Industry Partners" },
  ];

  return (
    <section className="section-padding bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">RDIO Impact</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our commitment to practical education and innovation has made a significant impact across India
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
