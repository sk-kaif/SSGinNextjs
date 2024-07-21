import Swip from "@/components/Swip"

const fetchSingleUser = async({params})=>{
    const res = await fetch(`https://dummyjson.com/users/${params.userdetail}`, {cache: 'no-cache'})
    const singleUser = await res.json()
    return singleUser
}

export default async function User({ params }) {
    const singleUser = await fetchSingleUser({ params })


  return (
    <>
        <div className="box">
            <p>{singleUser?.firstName}</p>
            <p>{singleUser?.lastName}</p>
            <p>{singleUser?.age}</p>
        </div>
        <Swip />
    </>
  )
}


export const generateStaticParams = async()=>{
    const res = await fetch('https://dummyjson.com/users')
    const apiResp = await res.json()

    return apiResp.users.map(user=>({
        userdetail : user.id.toString()
    }))
}