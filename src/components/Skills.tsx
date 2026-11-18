import { skillCategories } from "../data/skills";

function Skills() {
  return (
    <section className="mt-24">
      <div className="mt-12 space-y-12">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="grid grid-cols-1 gap-6 md:grid-cols-[180px_1fr]"
          >
            <h3 className="text-sm font-medium text-muted">{category.title}</h3>

            <div className="grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center gap-3"
                >
                  <img
                    src={skill.icon}
                    alt=""
                    className="h-20 w-20 object-contain"
                  />
                  <span className="text-center text-xs text-muted">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
