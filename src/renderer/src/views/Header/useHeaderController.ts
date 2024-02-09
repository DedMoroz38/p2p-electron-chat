import { ThemeMode } from '@renderer/enums/ThemeMode'
import { useStores } from '@renderer/hooks/useStores'

export const useHeaderController = () => {
  const { toggleTheme, themeMode } = useStores().themeStore
  const checked = themeMode === ThemeMode.Dark

  return {
    toggleTheme,
    checked
  }
}
