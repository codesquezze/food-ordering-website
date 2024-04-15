import Image from "next/image";
import Right from "../icons/Right";
import Link from "next/link";

export default function Hero() {
    return (
        <>
            <section className="hero mt-4">
                <div className="my-8 md:py-12">
                    <h1 className="text-4xl font-semibold">Everything <br />is better <br />with a
                        <span className="text-primary"> Pizza</span>
                    </h1>
                    <p className="my-6 text-gray">Pizza is everything that makes  everyone's day complete,
                        a simple yet delicious joy in life
                    </p>
                    <div className="flex gap-4 text-sm">
                        <Link className="bg-primary text-white font-semibold px-6 py-2 rounded-full flex gap-4 items-center text-nowrap" href={'/menu'}>
                            ORDER NOW <Right />
                        </Link>
                        <Link className="flex gap-4 px-6 py-2 text-gray-600 font-semibold border-solid border-2 rounded-full items-center" href={'#about'}>
                            Learn more <Right />
                        </Link>
                    </div>
                </div>

                <div className="relative hidden md:block">
                    <Image src={'/pizza.png'} layout={'fill'} objectFit={'contain'} alt={'pizza'} />
                </div>
            </section>
        </>
    );
}
