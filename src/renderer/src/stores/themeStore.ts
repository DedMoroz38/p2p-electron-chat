import { ThemeMode } from '@renderer/enums/ThemeMode'
import { Theme, theme } from '@renderer/styles/theme'
import { makeAutoObservable } from 'mobx'

export class ThemeStore {
  private _theme: Theme = theme.light

  private _themeMode: ThemeMode = ThemeMode.Light

  toggleTheme() {
    const newThemeMode = this._themeMode === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light
    this._themeMode = newThemeMode
    if (newThemeMode === ThemeMode.Light) {
      this._theme = theme.light
    } else {
      this._theme = theme.dark
    }
  }

  get theme() {
    return this._theme
  }

  get themeMode() {
    return this._themeMode
  }

  constructor() {
    makeAutoObservable(this)
    this.toggleTheme = this.toggleTheme.bind(this)
  }
}
