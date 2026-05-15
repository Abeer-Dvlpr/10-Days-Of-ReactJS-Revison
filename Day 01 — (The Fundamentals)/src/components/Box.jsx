// Practice 2
function Box({ title, description }) {
  return (
    <div className="box p-2 rounded-md">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Box;
