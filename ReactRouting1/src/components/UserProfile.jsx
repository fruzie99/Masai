import UserInfo from "./UserInfo";

function UserProfile() {
  const user = {
    name: "Madhurisha",
    age: 21,
  };

  return (
    <div>
      <h3>User Profile</h3>
      <UserInfo name={user.name} age={user.age} />
    </div>
  );
}

export default UserProfile;
