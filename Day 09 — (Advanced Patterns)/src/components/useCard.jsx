import { createContext,useContext } from "react";

const CardContext = createContext();

const Card = ({ children }) => {
    const myValue = "This is card context value";
    return (
        <CardContext.Provider value={myValue}>
            {children}
        </CardContext.Provider>
    )
}

const Title = () => <h1 className="p-4 text-center  text-xl">React Card</h1>
const Body = () => {
  const value = useContext(CardContext);  
  return <p className="p-4 text-center  text-xl">{value}</p>; 
};

Card.Title = Title;
Card.Body = Body;

export default Card;