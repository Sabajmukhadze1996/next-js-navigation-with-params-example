import React from 'react'

export type UsersObjType = {
    name: string,
    username: string,
    email: string,
    address: {
     city: string,  
    }
}


const Users = ({data}: any) => {
  return (
    <div>
       {
         data.map((user: UsersObjType, index: any) => {
            return (
               <div key={index} style={{marginTop: "1rem"}}>
                 <h3>{user.name}</h3>
                 <hr />
               </div>
            )
         })
       } 
    </div>
  )
}

export default Users

export const getStaticProps = async () => {
    try {
      const resp = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await resp.json();
      return {
        props: {
            data,
        }
      }
    } catch (err: any) {
       console.log("Please try again,", err.message);
    }
}
