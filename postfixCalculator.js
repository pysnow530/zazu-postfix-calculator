const evaluator = require('./evaluator.js')

module.exports = (pluginContext) => {
  let lastExpression = null
  let lastAnswer = null
  return {
    respondsTo: (query) => {
      lastExpression = query
      lastAnswer = evaluator.evalPostfix(lastExpression)
      return lastAnswer !== null
    },
    search: (query, env = {}) => {
      return new Promise((resolve, reject) => {
        const answer = lastExpression === query ? lastAnswer : evaluator.evalPostfix(query)
        const title = answer.join(' ')
        if (title) {
          resolve([
            {
              icon: 'fa-calculator',
              title: title,
              subtitle: 'Select item to copy the value to the clipboard.',
              value: title,
            },
          ])
        } else {
          resolve([])
        }
      })
    },
  }
}
