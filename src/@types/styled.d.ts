import 'styled-components'
import { defaultTheme } from '../themes/themeDefault'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
