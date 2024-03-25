// Card.tsx
interface CardProps {
    title: string;
    content: string;
    price: number;
    imageUrl: string;
  }
  
  const Card: React.FC<CardProps> = ({ title, content, price, imageUrl }) => (
    
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-yellow">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{content} </p>
        <p className="text-gray-700 text-base">{price}kr</p>
        <img className="w-40" src={imageUrl} alt="" />
      </div>
    </div>
    
  );
  
  export default Card;