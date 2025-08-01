import { Game } from "@/types";

interface GameCardProps {
  game: Game;
}

export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <div className="flex flex-row items-center p-2 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer gap-2 min-w-fit flex-shrink-0">
      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
        <img 
          src={game.iconUrl} 
          alt={game.name} 
          className="w-8 h-8 object-cover rounded-lg"
        />
      </div>
      <p className="text-base font-medium text-gray-900">{game.name}</p>
    </div>
  );
};