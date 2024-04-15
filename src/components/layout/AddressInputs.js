export default function AddressInputs({ addressProps, setAddressProp, disabled=false}) {

    const {phone,streetAddress,postalCode,city,country}=addressProps;
    
    return (
        <>
            <label>Phone</label>
            <input disabled={disabled} type="tel" value={phone || ''} onChange={(ev) => setAddressProp('phone',ev.target.value)} placeholder="Phone number" />
            <label>Address</label>
            <input disabled={disabled} type="text" value={streetAddress || ''} onChange={(ev) => setAddressProp('streetAddress',ev.target.value)} placeholder="street" />
            <div className="grid grid-cols-2 gap-2">
                <div>
                    <label>City</label>
                    <input disabled={disabled} type="text" value={city || ''} onChange={(ev) => setAddressProp('city',ev.target.value)} placeholder="city" />
                </div>
                <div>
                    <label>Postal Code</label>
                    <input disabled={disabled} type="text" value={postalCode || ''} onChange={(ev) => setAddressProp('postalCode',ev.target.value)} placeholder="postal code" />
                </div>
            </div>
            <label>Country</label>
            <input disabled={disabled} type="text" value={country || ''} onChange={(ev) => setAddressProp('country',ev.target.value)} placeholder="country" />
        </>
    );
}