import React from 'react'
const LangStateContext = React.createContext()
const LangDispatchContext = React.createContext()

const langReducer = (state, action) => {
  switch (action.type) {
    case 'english':
      return { lang: 'en' }
    case 'french':
      return { lang: 'fr' }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

const LangProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(langReducer, {lang: 'en'})

  return (
    <LangStateContext.Provider value={state}>
      <LangDispatchContext.Provider value={dispatch}>
        {children}
      </LangDispatchContext.Provider>
    </LangStateContext.Provider>
  )
}

const useLangState = () => React.useContext(LangStateContext)
const useLangDispatch = () => React.useContext(LangDispatchContext)

export { LangProvider, useLangState, useLangDispatch }