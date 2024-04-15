'use client';
import UserTabs from "@/components/layout/UserTabs"
import { useProfile } from "@/components/UseProfile";
import { useState , useEffect} from "react";
import Link from "next/link";

export default function UsersPage() {

    const { loading: profileLoading, data: profileData } = useProfile();
    const [users,setUsers]=useState([])

    useEffect(() => {
        fetch('/api/users').then(response=>{
            response.json().then(users=>{
                setUsers(users)
            })
        })
    }, [])
    

    if (profileLoading) {
        return (
            <div className="text-xl font-semibold text-center text-gray-400">
                Loading user info...
            </div>
        )
    }

    if (!profileData.admin) {
        return <div className="text-xl font-semibold text-center text-gray-400">
            Not an admin
        </div>
    }
    return (
        <section className="max-w-2xl mx-auto mt-8">
            <UserTabs isAdmin={true} />
            <div className="mt-8">
                {users?.length > 0 && users.map(user=>(
                    <div  key={user._id} className="bg-gray-100 rounded-xl mb-2 p-1 px-4 flex items-center gap-4">
                       <div className="grid grid-cols-2 md:grid-cols-3 grow gap-4">
                       <div className="text-gray-900">
                        {!!user.name && (<span>{user.name}</span>)}
                        {!user.name && (<span className="italic">No name</span>)}
                       </div>
                       <span className="text-gray-400">{user.email}</span>
                       </div>
                       <div>
                        <Link href={'/users/'+user._id} className="button">Edit</Link>
                       </div>
                    </div>
                ))}
            </div>
        </section>
    )
}