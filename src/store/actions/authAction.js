export const signIn = cred => {
    console.log('signIn', cred)  
   
}
export const signOut = () => {
return ( dispatch ) => {
    dispatch({ type: 'SIGNOUT' })
}
}