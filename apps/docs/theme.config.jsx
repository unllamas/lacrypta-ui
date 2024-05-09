export default {
  logo: <span>lacrypta-ui</span>,
  head: (
    <head>
      <meta property="og:title" content="La CryptaUI Documentation" />
      <meta property="og:description" content="The official ui documentation for LaCrypta UI." />
      <meta property="og:image" content="/favicon.ico" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="shortcut icon" href="/favicon.ico" />
    </head>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s – LaCrypta UI Docs',
    };
  },
  project: {
    link: 'https://github.com/unllamas/lacrypta-ui',
  },
  // ... other theme options
};
