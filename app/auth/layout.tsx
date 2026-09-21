import { Navbar } from "@/components/navbar";

export default function AuthLayout({children}:any){
    return <div>
        <Navbar/>
        {children}
    </div>
}