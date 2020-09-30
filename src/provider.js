// import React, {useState} from 'react';

// export const inViewContext = React.createContext();

// const Provider = ({ children }) => {
//     const [ inViewState, setInViewState ] = useState()

//     return(
//         <inViewContext.Provider
//             value={{
//                 inViewState,
//                 toggleInView: () => {
//                     console.log('Provider Function Called!')
//                     setInViewState(!inViewState)
//                 }
//             }}
//         >
//             {children}
//         </inViewContext.Provider>
//     )
// };


// exports.wrapRootElement = ({ element }) => (
//     <Provider>
//         {element}
//     </Provider>
// )