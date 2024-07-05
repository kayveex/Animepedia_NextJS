import Link from "next/link";
// Import from auth-libs
import { authUserSession } from "@/libs/auth-libs";


const UserActionBtn = async() => {
    const user = await authUserSession();
    const actionLabel = user ? "Sign Out" : "Sign In";
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

    return (
        <>
            <div className="flex flex-row gap-2 justify-between">
                {user ? <Link className="py-1 px-2" href="/user/dashboard">Dashboard</Link> : null}
                <Link href={actionURL} className="bg-dark text-accent py-1 px-12 inline-block" >{actionLabel}</Link>
            </div>

        </>
    )

}

export default UserActionBtn;