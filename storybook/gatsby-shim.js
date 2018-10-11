import { action } from '@storybook/addon-actions'

global.__PATH_PREFIX__ = ''

global.___loader = {
  enqueue: () => {},
  hovering: () => {}
}

window.___navigate = action('NavigateTo')
