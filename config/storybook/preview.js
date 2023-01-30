import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/decorators/StyleDecorator'
import { ThemeDecorator } from '../../src/shared/config/storybook/decorators/ThemeDecorator'
import { RouterDecorator } from '../../src/shared/config/storybook/decorators/RouterDecorator'
import { SuspenseDecorator } from '../../src/shared/config/storybook/decorators/SuspenseDecorator'
import { ThemeEnum } from '../../src/app/providers/ThemeProvider'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  themes: {
    default: 'light',
    list: [
      { name: 'light', class: ThemeEnum.LIGHT, color: '#fff' },
      { name: 'dark', class: ThemeEnum.DARK, color: '#000' },
      { name: 'violet', class: ThemeEnum.VIOLET, color: '#9c27b0' },
    ]
  }
}

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(ThemeEnum.LIGHT));
addDecorator(RouterDecorator);
addDecorator(SuspenseDecorator);
