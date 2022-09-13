import CompoB from "./panels/index";

function CompoA() {
  const Element = <h1>Im A!</h1>;

  return (
    <div className="jsx">
      {Element}
      <CompoB arg1={"Pass from CompoA"} />
    </div>
  );
}

export default CompoA;
