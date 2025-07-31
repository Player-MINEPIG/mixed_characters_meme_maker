import axios from 'axios'
import { Character, ApiResponse, WikiApiResponse } from '@/types'

const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-api-domain.com/api' 
  : 'http://localhost:3001/api'

/**
 * 获取角色列表
 */
export const getCharacters = async (): Promise<Character[]> => {
  try {
    const response = await axios.get<ApiResponse<Character[]>>(`${API_BASE_URL}/characters`)
    return response.data.data
  } catch (error) {
    console.error('获取角色列表失败:', error)
    return []
  }
}

/**
 * 搜索角色
 */
export const searchCharacters = async (query: string): Promise<Character[]> => {
  try {
    const response = await axios.get<ApiResponse<Character[]>>(`${API_BASE_URL}/characters/search`, {
      params: { q: query }
    })
    return response.data.data
  } catch (error) {
    console.error('搜索角色失败:', error)
    return []
  }
}

/**
 * 获取角色分类
 */
export const getCharacterCategories = async (): Promise<string[]> => {
  try {
    const response = await axios.get<ApiResponse<string[]>>(`${API_BASE_URL}/characters/categories`)
    return response.data.data
  } catch (error) {
    console.error('获取角色分类失败:', error)
    return []
  }
}

/**
 * 从Wiki同步角色数据
 */
export const syncCharactersFromWiki = async (): Promise<WikiApiResponse> => {
  try {
    const response = await axios.post<ApiResponse<WikiApiResponse>>(`${API_BASE_URL}/characters/sync`)
    return response.data.data
  } catch (error) {
    console.error('同步角色数据失败:', error)
    throw error
  }
}

/**
 * 检查角色数据是否需要更新
 */
export const checkCharacterDataStatus = async (): Promise<{
  needsUpdate: boolean
  localCount: number
  wikiCount: number
}> => {
  try {
    const response = await axios.get<ApiResponse<{
      needsUpdate: boolean
      localCount: number
      wikiCount: number
    }>>(`${API_BASE_URL}/characters/status`)
    return response.data.data
  } catch (error) {
    console.error('检查角色数据状态失败:', error)
    return {
      needsUpdate: false,
      localCount: 0,
      wikiCount: 0
    }
  }
} 