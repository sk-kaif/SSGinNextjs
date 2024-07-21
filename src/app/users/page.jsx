import Link from "next/link"

export async function fetchAllUsers(){
    const resp = await fetch('https://dummyjson.com/users')
    if(!resp.ok){
        throw new Error('User Compo Error')
    }
    const usersData = await resp.json()
    return usersData.users
}

const UserList = async() => {
    const usersList = await fetchAllUsers()

  return (
    <>
    {usersList &&
        usersList.map(user=>(
            <div key={user.id} className="box">
                <Link href={`/users/${user.id}`}>{user.firstName}</Link>
            </div>
        ))
    }
    </>
  )
}

export default UserList