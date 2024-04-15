'use client'
import { useState } from "react";
import EditableImage from "@/components/layout/EditableImage";
import { useProfile } from "../UseProfile";
import AddressInputs from "@/components/layout/AddressInputs";

export default function UserForm({ user, onSave }) {

    const [userName, setUserName] = useState(user?.name || '');
    const [image, setImage] = useState(user?.image || '');
    const [phone, setPhone] = useState(user?.phone || '');
    const [streetAddress, setStreetAddress] = useState(user?.streetAddress || '');
    const [postalCode, setPostalCode] = useState(user?.postalCode || '');
    const [city, setCity] = useState(user?.city || '');
    const [country, setCountry] = useState(user?.country || '');
    const [admin, setAdmin] = useState(user?.admin || false);
    const { data: loggedInUserdata } = useProfile();

    function handleAddressChange(propName, value) {
        if (propName === 'phone') setPhone(value);
        if (propName === 'streetAddress') setStreetAddress(value);
        if (propName === 'postalCode') setPostalCode(value);
        if (propName === 'city') setCity(value);
        if (propName === 'country') setCountry(value);
    }

    return (
        <div className="md:flex gap-4 ">
            <div>
                <div className="p-2 rounded-lg relative max-w-[120px]">
                    <EditableImage link={image} setLink={setImage} />
                </div>
            </div>
            <form className="grow" onSubmit={ev => onSave(ev, { name: userName, image, phone, streetAddress, city, country, postalCode, admin })}>
                <label>Name</label>
                <input type="text" value={userName} onChange={(ev) => setUserName(ev.target.value)} placeholder="your name here" />
                <label>Email</label>
                <input type="email" disabled value={user?.email} />
                <AddressInputs
                    addressProps={{ phone, streetAddress, postalCode, city, country }}
                    setAddressProp={handleAddressChange}
                />

                {loggedInUserdata.admin && (
                    <div className="p-2">
                        <label className="inline-flex items-center gap-2 mb-2" htmlFor="adminCb">
                            <input
                                id="adminCb" type="checkbox" className="" value={'1'}
                                checked={admin} onChange={ev => setAdmin(ev.target.checked)} />
                            <span>Admin</span>
                        </label>
                    </div>
                )}
                <button type="submit">Save</button>
            </form>
        </div>
    )
}