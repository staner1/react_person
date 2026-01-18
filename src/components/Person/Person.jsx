export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  let personAge = null;

  if (age !== undefined) {
    personAge = <p className="Person__age">{`I am ${age}`}</p>;
  }

  const personStatus = () => {
    let result = <p className="Person__partner">I am not married</p>;

    if (isMarried === true) {
      result = (
        <p className="Person__partner">{`${partnerName} is my ${sex === 'm' ? 'wife' : 'husband'}`}</p>
      );
    }

    return result;
  };

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {personAge}
      {personStatus()}
    </section>
  );
};
