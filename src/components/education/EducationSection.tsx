import React from "react";
import { BookOpen, GraduationCap } from "lucide-react";

interface EducationSectionProps {
  institution: string;
  qualification: string;
  period: string;
  description: string;
  type: string;
}

const EducationSection: React.FC<EducationSectionProps> = ({
  institution,
  qualification,
  period,
  description,
  type,
}) => {
  const Icon = type === "degree" ? GraduationCap : BookOpen;

  return (
    <article className="relative flex gap-5 md:gap-7">
      {/* Timeline */}
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center w-11 h-11 rounded-full border-2 border-divider bg-background text-divider shrink-0">
          <Icon size={21} />
        </div>

        <div className="w-px grow bg-divider/30 mt-2" />
      </div>

      {/* Content */}
      <div className="pb-10 md:pb-12">
        <p className="text-sm font-semibold text-divider">{period}</p>

        <h3 className="text-xl font-bold mt-1">{institution}</h3>

        <p className="font-medium mt-1">{qualification}</p>

        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-4 max-w-3xl">
          {description}
        </p>
      </div>
    </article>
  );
};

export default EducationSection;
