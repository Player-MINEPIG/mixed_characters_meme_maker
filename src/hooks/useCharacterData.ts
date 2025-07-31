import { useState, useEffect } from 'react'
import { Character } from '@/types'
import { getCharacters, checkCharacterDataStatus, syncCharactersFromWiki } from '@/services/characterApi'

export const useCharacterData = () => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [needsUpdate, setNeedsUpdate] = useState(false)

  useEffect(() => {
    loadCharacters()
  }, [])

  const loadCharacters = async () => {
    try {
      setIsLoading(true)
      setError(null)
      
      // 检查是否需要更新数据
      const status = await checkCharacterDataStatus()
      setNeedsUpdate(status.needsUpdate)
      
      if (status.needsUpdate) {
        // 自动同步数据
        await syncCharactersFromWiki()
      }
      
      // 加载角色数据
      const data = await getCharacters()
      setCharacters(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : '加载角色数据失败')
    } finally {
      setIsLoading(false)
    }
  }

  const refreshCharacters = async () => {
    await loadCharacters()
  }

  const syncCharacters = async () => {
    try {
      setIsLoading(true)
      await syncCharactersFromWiki()
      await loadCharacters()
    } catch (err) {
      setError(err instanceof Error ? err.message : '同步角色数据失败')
    } finally {
      setIsLoading(false)
    }
  }

  return {
    characters,
    isLoading,
    error,
    needsUpdate,
    refreshCharacters,
    syncCharacters
  }
} 