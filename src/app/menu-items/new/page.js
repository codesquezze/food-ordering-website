'use client'
import UserTabs from "@/components/layout/UserTabs";
import { useProfile } from "@/components/UseProfile";
import { useState } from "react";
import toast from "react-hot-toast";
import Left from "@/components/icons/Left";
import Link from "next/link";
import { redirect } from "next/navigation";
import MenuItemForm from "@/components/layout/MenuItemForm";

export default function NewMenuItemPage(){

    const { loading: profileLoading, data: profileData } = useProfile();
    const[redirectToItems,setRedirectToItems]=useState(false);
    
    async function handleFormSubmit(ev,data) {
        ev.preventDefault();
        const savingPromise = new Promise(async (resolve, reject) => {
          const response = await fetch('/api/menu-items', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
          });
          if (response.ok)
            resolve();
          else
            reject();
        });
    
        await toast.promise(savingPromise, {
          loading: 'Saving this tasty item',
          success: 'Saved',
          error: 'Error',
        });
    
        setRedirectToItems(true);
      }
      if(redirectToItems){
        return redirect('/menu-items');
      }

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
    return(
        <section className="mt-8 max-w-2xl mx-auto">
            <UserTabs isAdmin={true}/>
            <Link href={'/menu-items'} className="button mt-6 ">
                <Left />
                <span>Show all menu items</span>
            </Link>
            <MenuItemForm menuItem={null} onSubmit={handleFormSubmit}/>
        </section>
    )
}