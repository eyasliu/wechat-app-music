import shallowEqual from './shallowEqual.js'
import warning from './warning.js'
import wrapActionCreators from './wrapActionCreators.js'

const defaultMapStateToProps = state => ({}) // eslint-disable-line no-unused-vars
const defaultMapDispatchToProps = dispatch => ({dispatch})

function connect(mapStateToProps, mapDispatchToProps) {
  const shouldSubscribe = Boolean(mapStateToProps)
  const mapState = mapStateToProps || defaultMapStateToProps
  const app = getApp();

  let mapDispatch
  if (typeof mapDispatchToProps === 'function') {
    mapDispatch = mapDispatchToProps
  } else if (!mapDispatchToProps) {
    mapDispatch = defaultMapDispatchToProps
  } else {
    mapDispatch = wrapActionCreators(mapDispatchToProps)
  }

  return function wrapWithConnect(pageComponent) {

    function handleChange(options) {
      if (!this.unsubscribe) {
        return
      }

      const state = this.store.getState()
      const mappedState = mapState(state, options);
      if (!this.data || shallowEqual(this.data, mappedState)) {
        return;
      }
      this.setData(mappedState)
    }

    function onLoad(options) {
      this.store = app.store;
      if (!this.store) {
        warning("Store对象不存在!")
      }
      if(shouldSubscribe){
        this.unsubscribe = this.store.subscribe(handleChange.bind(this, options))
        handleChange.apply(this)
      }
      // pageComponent.prototype.onLoad.call(options)
    }

    function onUnload() {
      typeof this.unsubscribe === 'function' && this.unsubscribe()
    }

    function injectMethod(fun, options){
      return function(...args) {
        options.before && options.before.apply(this, args)
        const result = fun && fun.apply(this, args)
        options.after && options.after.apply(this, args)
        return result;
      }
    }
    const originMethod = {
      onLoad: pageComponent.prototype.onLoad,
      onUnload: pageComponent.prototype.onUnload
    }
    
    pageComponent.prototype.onLoad = injectMethod(pageComponent.prototype.onLoad, {
      before(args){onLoad.apply(this, args)}
    })
    pageComponent.prototype.onUnload = injectMethod(pageComponent.prototype.onUnload, {
      before(args){onUnload.apply(this, args)}
    })

    return pageComponent
  }
}

module.exports = connect