// Card.tsx
interface CardProps {
    title: string;
    content: string;
  }

  //pris, beskrivning, bild, 
  
  const Card: React.FC<CardProps> = ({ title, content }) => (
    
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-yellow">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-red text-base">
          {content} </p>
      </div>
    </div>
    
  );
  
  export default Card;