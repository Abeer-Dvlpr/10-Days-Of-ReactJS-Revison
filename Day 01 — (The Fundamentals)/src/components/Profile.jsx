// Day 01 Challenge
export const Profile = ({ name, age, skill }) => {
  return (
    <div className="bg-yellow-200 p-4 rounded-md shadow-md mb-4">
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Skill:</strong> {skill}</p>
    </div>
  );
};
