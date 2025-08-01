// Game related types
export interface Game {
  name: string;
  iconUrl: string;
}

// 角色相关类型
export interface Character {
  id: string;
  name: string;
  imageUrl: string;
  category: string;
  tags: string[];
  source: string;
  lastUpdated: string;
}

// 模板相关类型
export interface Template {
  id: string;
  name: string;
  imageUrl: string;
  areas: TemplateArea[];
  width: number;
  height: number;
}

export interface TemplateArea {
  id: string;
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
  description: string;
}

// 画布状态类型
export interface CanvasState {
  template: Template;
  characters: CharacterPlacement[];
  selectedArea: string | null;
  history: CanvasState[];
  historyIndex: number;
}

export interface CharacterPlacement {
  areaId: string;
  character: Character;
  x: number;
  y: number;
  scale: number;
  opacity: number;
  rotation: number;
}

// 编辑器状态类型
export interface EditorState {
  isLoading: boolean;
  error: string | null;
  searchQuery: string;
  selectedCategory: string;
  showCharacterSelector: boolean;
}

// API响应类型
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface WikiApiResponse {
  characters: Character[];
  totalCount: number;
  lastUpdated: string;
  hasMore: boolean;
}

// 工具类型
export interface Point {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}

export interface Transform {
  x: number;
  y: number;
  scale: number;
  rotation: number;
} 