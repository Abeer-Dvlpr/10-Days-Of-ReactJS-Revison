
import { createContext, useContext } from 'react';

const CardContext = createContext();


const Card = ({ children, user }) => {
  return (
    <CardContext.Provider value={user}>
      <div className="border p-4 rounded">{children}</div>
    </CardContext.Provider>
  );
};



const Title = () => {
  const user = useContext(CardContext);
  return <h2>{user.name}</h2>;
};


const Body = () => {
  const user = useContext(CardContext);
  return <p>{user.email}</p>;
};

Card.Title = Title;
Card.Body = Body;

export default Card