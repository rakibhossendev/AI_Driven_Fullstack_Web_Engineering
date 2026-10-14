import Link from "next/link";

const layout = ({ children }: { children: React.ReactNode }) => {
    const links = <>
        <li><Link href="/users">Users</Link></li>
    </>
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {children}
                <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
                    Open drawer
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default layout;