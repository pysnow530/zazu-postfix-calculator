const evaluator = require('./evaluator.js')

module.exports = (pluginContext) => {
  return {
    respondsTo: (query) => {
      return evaluator.evalPostfix(query)
    },
    search: (query, env = {}) => {
      return new Promise((resolve, reject) => {
        const answer = evaluator.evalPostfix(query)
        if (answer !== null) {
          resolve([
            {
              icon: 'fa-calculator',
              title: title,
              subtitle: 'Select item to copy the value to the clipboard.',
              value: value,
            },
          ])
        }
      })
    },
  }
}
