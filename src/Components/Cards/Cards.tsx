// Card.tsx
interface CardProps {
    name: string;
    ingredients: string[];
    
   
  }

 
  
  const Card: React.FC<CardProps> = ({ name, ingredients}) => {  
   
    
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-yellow">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{ingredients.join(", ")} </p>
        
      </div>
    </div>
    )
    
    
  };
  

  export default Card;

