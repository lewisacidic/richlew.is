module.exports = plop => {
  plop.setGenerator('generator', {
    description: 'Generator',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: "What is the generator's name?"
      },
      {
        type: 'input',
        name: 'path',
        message: 'What is the path in which to generate files?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: './{{ kebabCase name }}/templates/index.js.hbs',
        templateFile: 'templates/templates/index.js.hbs'
      },
      {
        type: 'add',
        path: './{{ kebabCase name }}/index.js',
        templateFile: 'templates/index.js.hbs'
      },
      {
        type: 'modify',
        path: './index.js',
        pattern: /()\}\n$/g,
        template: "  plop.load('./{{ kebabCase name }}')\n}\n"
      }
    ]
  })
}
