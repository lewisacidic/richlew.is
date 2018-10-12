module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: "What is the component's name?"
      },
      {
        type: 'list',
        name: 'kind',
        message: 'What type of component do you need?',
        choices: ['function', 'class', 'styled']
      },
      {
        type: 'confirm',
        name: 'static',
        message: 'Is this a static component?',
        default: false
      }
    ],
    actions: data => {
      let actions = [
        {
          type: 'add',
          path: '../src/components/{{ kebabCase name }}/index.js',
          templateFile: 'templates/index.js.hbs'
        },
        {
          type: 'add',
          path:
            '../src/components/{{ kebabCase name }}/{{ kebabCase name }}.js',
          templateFile: `templates/component.${data.kind}.js.hbs`
        },
        {
          type: 'add',
          path:
            '../src/components/{{ kebabCase name }}/{{ kebabCase name }}.spec.js',
          templateFile: 'templates/component.spec.js.hbs'
        },
        {
          type: 'add',
          path:
            '../src/components/{{ kebabCase name }}/{{ kebabCase name }}.stories.js',
          templateFile: 'templates/component.stories.js.hbs'
        }
      ]
      if (data.static) {
        actions.push({
          type: 'add',
          path: '../src/components/{{ kebabCase name }}/static.js',
          templateFile: 'templates/static.js.hbs'
        })
      }
      return actions
    }
  })
}
