import Friend from "../Friend/Friend";

export default function FriendList({ list }) {
  return (
    <div>
      {list.map((item) => {
        return <Friend key={item._id} friend={item} />;
      })}
    </div>
  );
}
