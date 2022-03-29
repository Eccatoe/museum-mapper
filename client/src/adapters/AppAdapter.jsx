const AppAdapter ={
    auth:  () =>  fetch('/me').then(res => res.json()),
    getMuseums: ()=>fetch('/museums').then(res => res.json()),
    signup: (example)=>fetch("/signup", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(example),
      }),
    logout: ()=>fetch('/logout', {method: 'DELETE'}),
}

export default AppAdapter