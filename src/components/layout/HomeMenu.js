'use client'
import Image from "next/image";
import SectionHeaders from "./SectionHeaders";
import { useEffect, useState } from "react";
import MenuItem from "@/components/menu/MenuItem";

export default function HomeMenu() {
    const [bestsellers,setBestsellers]=useState([]);

    useEffect(() => {
        fetch('/api/menu-items').then(res=>{
            res.json().then(menuItems=>{
                const bestsellers=menuItems.slice(-3);
                setBestsellers(bestsellers);
            })
        })
    }, [])
    
    return (
        <>
            <section className="">
                <div className="absolute w-full left-0 right-0 justify-start">
                    <div className="absolute left-0 -top-[70px] text-left -z-10">
                        <Image src={'/sallad1.png'} width={109} height={189} alt={'sallad'} />
                    </div>
                    <div className="absolute -top-[100px] right-0 -z-10">
                        <Image src={'/sallad2.png'} width={109} height={189} alt={'sallad'} />
                    </div>
                </div>

                <div className="text-center mb-4">
                    <SectionHeaders
                        subHeader={'Check Out'}
                        mainHeader={'Our bestsellers'} />
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                    {bestsellers?.length>0 && bestsellers.map(item=>(
                        <MenuItem key={item._id} {...item}/>
                    ))}
                </div>
            </section>
        </>
    );
}
