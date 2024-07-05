import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";

const Page = async() => {

    const user = await authUserSession();

    return(
        <>
            <div className="p-4 text-primary">
                <h1>Dashboard</h1>
                <p>Welcome, {user?.name}</p>
                <Image src={user?.image} alt={user?.name} width={250} height={250} />
            </div>
        </>
    )

}

export default Page;