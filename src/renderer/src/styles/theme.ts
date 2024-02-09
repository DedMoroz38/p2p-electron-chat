export type Theme = {
  bgColor: {
    primary: string
    secondary: string
  }
}

export const theme = {
  light: {
    bgColor: {
      primary: 'white',
      secondary: 'white'
    }
  },
  dark: {
    bgColor: {
      primary: '#20232c',
      secondary: '#16171c '
    }
  }
} satisfies Record<string, Theme>
