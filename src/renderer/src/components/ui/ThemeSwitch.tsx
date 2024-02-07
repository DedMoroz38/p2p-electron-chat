import { Switch } from '@mui/material'

type ThemeSwitchProps = {
  handleChange: () => void
  checked: boolean
}

export const ThemeSwitch = ({ handleChange, checked }: ThemeSwitchProps) => {
  return (
    <Switch checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} />
  )
}
