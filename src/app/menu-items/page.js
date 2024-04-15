'use client'
import { useProfile } from "@/components/UseProfile";
import UserTabs from "@/components/layout/UserTabs";
import Link from "next/link";
import Right from "@/components/icons/Right";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function MenuItemsPage() {
    const [menuItems, setMenuItems] = useState([]);
    const { loading: profileLoading, data: profileData } = useProfile();

    useEffect(() => {
        fetch('api/menu-items').then(res => {
            res.json().then(menuItems => {
                setMenuItems(menuItems)
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
        <section className="mt-8 max-w-2xl mx-auto">

            <UserTabs isAdmin={true} />
            <div className="mt-8">
                <Link className="button" href={'/menu-items/new'}><span>Create new menu item</span> <Right /></Link>
            </div>
            <div className="mt-8">
                <h2 className="text-sm text-gray-500 mt-8">Edit menu item:</h2>
                <div className="grid grid-cols-3 gap-2">
                    {menuItems?.length > 0 && menuItems.map(item => (
                        <Link
                            key={item._id}
                            href={'/menu-items/edit/' + item._id}
                            className="bg-gray-200 rounded-lg p-4"
                        >
                            <div className="relative ">
                                <Image
                                    className="rounded-md "
                                    src={item.image} alt={''} width={200} height={200} />
                            </div>
                            <div className="text-center font-medium">
                                {item.name}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

        </section>
    )
}