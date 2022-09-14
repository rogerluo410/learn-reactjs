import useFriendStatus from "./hook";

function Hooks() {
  const { isOnline, setIsOnline } = useFriendStatus("Roger");

  return (
    <div className="jsx">
      <p>Friend is {isOnline ? "online" : "offline"}</p>
      <button onClick={() => setIsOnline(!isOnline)}>Join friend</button>
    </div>
  );
}

export default Hooks;
