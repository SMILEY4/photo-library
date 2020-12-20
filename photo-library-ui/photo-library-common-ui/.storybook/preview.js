import "../src/components/basestyle.css"


export const parameters = {
  actions: {argTypesRegex: "^on[A-Z].*"},
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
    default: 'light-0',
    values: [
      {
        name: 'light-0',
        value: 'var(--background-color-light-0)',
      },
      {
        name: 'light-1',
        value: 'var(--background-color-light-1)',
      },
      {
        name: 'dark-0',
        value: 'var(--background-color-dark-0)',
      },
      {
        name: 'dark-1',
        value: 'var(--background-color-dark-1)',
      }
    ]
  }
}
