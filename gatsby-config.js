module.exports = {
  siteMetadata: {
    title: 'Rich Lewis',
    author: 'Rich Lewis',
    siteUrl: 'https://richlew.is',
    description:
      'A PhD student at Cambridge University developing Deep Learning applications in Chemistry',
    keywords: [
      'rich lewis',
      'rich',
      'lewis',
      'chemistry',
      'cheminformatics',
      'chemoinformatics',
      'molecular informatics',
      'machine learning',
      'deep learning',
      'artificial intelligence',
      'data science',
      'computer science',
      'software engineering',
      'ml',
      'ai',
      'ds',
      'cs',
      'phd',
      'cambridge',
      'london',
      'united kingdom',
      'uk'
    ].join()
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'typography.config.js'
      }
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/layout.js')
      }
    }
  ]
}
