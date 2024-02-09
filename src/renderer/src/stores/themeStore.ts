import { ThemeMode } from '@renderer/enums/ThemeMode'
import { Theme, theme } from '@renderer/styles/theme'
import { makeAutoObservable } from 'mobx'

export class ThemeStore {
  private themeKey = 'theme'

  private _theme: Theme = theme.dark

  private _themeMode: ThemeMode = ThemeMode.Dark

  get theme() {
    return this._theme
  }

  get themeMode() {
    return this._themeMode
  }

  constructor() {
    makeAutoObservable(this)
    this.toggleTheme = this.toggleTheme.bind(this)

    this.applyThemeFromLocalStorage()
  }

  public toggleTheme() {
    const newThemeMode = this._themeMode === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light
    this._themeMode = newThemeMode
    if (newThemeMode === ThemeMode.Light) {
      this._theme = theme.light
    } else {
      this._theme = theme.dark
    }
    this.saveThemeModeToLocalStorage(newThemeMode)
  }

  private applyThemeFromLocalStorage() {
    const themeFromLS = localStorage.getItem(this.themeKey)
    if (!themeFromLS) return

    const parsedThemeMode = JSON.parse(themeFromLS) as ThemeMode
    if (parsedThemeMode === ThemeMode.Dark) {
      this._themeMode = ThemeMode.Dark
      this._theme = theme.dark
    }
  }

  private saveThemeModeToLocalStorage(newThemeMode: ThemeMode) {
    localStorage.setItem(this.themeKey, JSON.stringify(newThemeMode))
  }
}
