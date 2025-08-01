import { Game } from "@/types";
import { GameCard } from "./GameCard";

interface GameSelectorProps {
  games?: Game[];
}

export const GameSelector: React.FC<GameSelectorProps> = ({ games = [] }) => {
  // 默认游戏数据
  const defaultGames: Game[] = [
    {
      name: "原神",
      iconUrl: "/game-icons/genshin-icon.png"
    },
    {
      name: "崩坏：星穹铁道",
      iconUrl: "/game-icons/star-rail-icon.png"
    },
    {
      name: "明日方舟",
      iconUrl: "/game-icons/arknights-icon.png"
    },
    {
      name: "placeholder",
      iconUrl: "/game-icons/placeholder-icon.png"
    },
    {
      name: "placeholder",
      iconUrl: "/game-icons/placeholder-icon.png"
    },
    {
      name: "placeholder",
      iconUrl: "/game-icons/placeholder-icon.png"
    },
    {
      name: "placeholder",
      iconUrl: "/game-icons/placeholder-icon.png"
    },
    {
      name: "placeholder",
      iconUrl: "/game-icons/placeholder-icon.png"
    },
    {
      name: "placeholder",
      iconUrl: "/game-icons/placeholder-icon.png"
    },
    {
      name: "placeholder",
      iconUrl: "/game-icons/placeholder-icon.png"
    },
  ];

  const displayGames = games.length > 0 ? games : defaultGames;

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">选择游戏模板</h2>
        <div className="flex flex-row gap-4 overflow-x-auto bg-gray rounded-lg p-2 border border-gray-200 min-w-0">
          {displayGames.map((game) => (
            <GameCard key={game.name} game={game} />
          ))}
        </div>
    </div>
  );
};