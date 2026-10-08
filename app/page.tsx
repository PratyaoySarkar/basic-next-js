import Link from "next/link";

export default function Home(){
    return (<div className="justify-center items-center flex flex-col gap-3 bg-amber-50 h-screen w-full px-4">
        <h2 className="text-black font-bold">Hello! Let's get started.</h2>
        <Link href="/auth/signin" className="text-shadow-amber-100 bg-blue-900 p-2 rounded-md">Sign In</Link>
        <Link href="/auth/signup" className="text-blue-950 text-md font-bold p-2 border-2 rounded-md">Create an account</Link>
    </div>
    )
}