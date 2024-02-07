export type Theme = {
  bgColor: string
}

export const theme = {
  light: {
    bgColor: 'white'
  },
  dark: {
    bgColor: 'black'
  }
} satisfies Record<string, Theme>
