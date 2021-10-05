import Link from "next/link";

const MainNavigation = () => {
    console.log("MainNavigation");
    return (
        <header>
            <div className="w-full flex justify-between items-center p-5 bg-gray-700 text-white">
                <div className="text-2xl ml-20">NEXT Blog</div>
                <nav>
                    <ul className="flex">
                        <li className="mr-10">
                            <Link href="/">Posts</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default MainNavigation;
