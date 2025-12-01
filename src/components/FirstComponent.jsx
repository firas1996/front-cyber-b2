const FirstComponent = ({ theName, x, getData }) => {
  // const {theName} = props
  let abc = 123;
  getData(abc);
  return (
    <div>
      <h1>
        Bonjour, {theName} {x}
      </h1>
    </div>
  );
};

export default FirstComponent;
