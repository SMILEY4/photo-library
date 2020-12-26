import "../src/components/basestyle.css"
import React from "react";

export const decorators = [(Story) => <div style={{ gap: '1em' }}><Story/></div>];

export const parameters = {
  actions: {argTypesRegex: "^on[A-Z].*"},
  layout: 'centered',
  themes: [
    {
      name: 'light',
      class: 'theme-light',
      color: '#ffffff',
      default: true
    },
    {
      name: 'dark',
      class: 'theme-dark',
      color: '#5e6366'
    }
  ],
  backgrounds: {
    default: 'background-0',
    values: [
      {
        name: 'background-0',
        value: 'var(--background-color-0)'
      },
      {
        name: 'background-1',
        value: 'var(--background-color-1)'
      }

    ]
  }
}
