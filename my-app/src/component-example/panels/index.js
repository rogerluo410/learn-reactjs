function CompoB({ arg1 }) {
  const Element = <h1>Im B!</h1>;

  return (
    <div className="jsx">
      {Element}
      arg: {arg1}
    </div>
  );
}

export default CompoB;
