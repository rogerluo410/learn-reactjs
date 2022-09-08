function Jsx() {
  const user = {
    firstName: "Harper",
    lastName: "Perez",
  };

  const formatName = (user) => {
    return user.firstName + " " + user.lastName;
  };

  const Element = <h1>Hello, {formatName(user)}!</h1>;

  return <div className="jsx">{Element}</div>;
}

export default Jsx;
