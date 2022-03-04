import { CoursePart } from '../App';

interface PartProps {
  courseParts: CoursePart[];
}

const Part = (props: PartProps) => {
  const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
  };

  return (
    <div>
      {props.courseParts.map((part, i) => {
        switch (part.type) {
          case 'normal':
            return (
              <div key={i}>
                <h3>
                  {part.name} {part.exerciseCount}
                </h3>
                <p>{part.description}</p>
              </div>
            );
          case 'groupProject':
            return (
              <div key={i}>
                <h3>
                  {part.name} {part.exerciseCount}
                </h3>
                <p>project exercises {part.groupProjectCount}</p>
              </div>
            );
          case 'submission':
            return (
              <div key={i}>
                <h3>
                  {part.name} {part.exerciseCount}
                </h3>
                <p>{part.description}</p>
                <p>submit to {part.exerciseSubmissionLink}</p>
              </div>
            );
          case 'special':
            return (
              <div key={i}>
                <h3>
                  {part.name} {part.exerciseCount}
                </h3>
                <p>{part.description}</p>
                <p>
                  required skills: &nbsp;
                  {part.requirements.join(', ')}
                </p>
              </div>
            );
          default:
            return assertNever(part);
        }
      })}
    </div>
  );
};

export default Part;
