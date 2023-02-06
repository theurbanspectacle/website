module.exports = function (api) {
    api.cache.forever(true);
    return {
      plugins: ['macros'],
    }
  }