import EducationSection from "./EducationSection";
import { educationArr } from "@/constants/education";

const EducationWrapper = () => {
  return (
    <section
      id="education"
      className="bg-background-1 relative border-y-8 border-divider px-6 md:px-10 py-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold">Education</h2>

          <p className="mt-3 text-muted-foreground max-w-2xl">
            Formal education and technical training.
          </p>
        </div>

        <div>
          {educationArr.map((item) => (
            <EducationSection
              key={item.institution}
              institution={item.institution}
              qualification={item.qualification}
              period={item.period}
              description={item.description}
              type={item.type}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationWrapper;
