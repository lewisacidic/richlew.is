module.exports = plop => {
  plop.setGenerator('page', {
    description: 'Page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: "What is the page's name?"
      },
      {
        type: 'list',
        name: 'kind',
        message: 'What type of component do you need?',
        choices: ['function', 'class']
      },
      {
        type: 'number',
        name: 'precedence',
        message: 'What precedence does the page have in the nav?',
        default: 5
      },
      {
        type: 'confirm',
        name: 'static',
        message: 'Does this page require a static query?',
        default: false
      }
    ],
    actions: data => [
      {
        type: 'add',
        path: '../src/pages/{{ kebabCase name }}.js',
        templateFile: `templates/page.${data.kind}.js.hbs`
      }
    ]
  })
}
