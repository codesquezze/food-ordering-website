'use client';
import UserTabs from "@/components/layout/UserTabs"
import { useProfile } from "@/components/UseProfile";
import UserForm from "@/components/layout/UserForm";
import { useState, useEffect } from "react";
import { useParams, redirect } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";
import Left from "@/components/icons/Left";

export default function EditUserPage() {

    const { loading: profileLoading, data: profileData } = useProfile();
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [redirectToUsers, setRedirectToUsers] = useState(false);

    useEffect(() => {
        fetch('/api/profile?_id=' + id).then(res => {
            res.json().then(user => {
                setUser(user);
            })
        })
    })

    async function handleSaveButtonClick(ev, data) {
        ev.preventDefault();
        const promise = new Promise(async (resolve, reject) => {
            const res = await fetch('/api/profile', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...data, _id: id }),
            });
            if (res.ok)
                resolve();
            else
                reject();
        });

        await toast.promise(promise, {
            loading: 'Saving user...',
            success: 'User saved',
            error: 'An error has occurred while saving the user',
        });
        setRedirectToUsers(true);
    }
    if (redirectToUsers) {
        return redirect('/users');
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
    return (
        <section className="max-w-2xl mx-auto mt-8">
            <UserTabs isAdmin={true} />
            <Link href={'/users'} className="button mt-6 mb-8">
                <Left />
                <span>Show all users</span>
            </Link>
            <UserForm user={user} onSave={handleSaveButtonClick} />

        </section>
    )
}