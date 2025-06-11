import React from "react";
import SidebarFilter from "../components/SidebarFilter";





export default function ProductListingPage () {
    return (
        <div className="flex flex-col lg:flex-row gap-6 px-4">
            <aside className="w-[250px]">
                <SidebarFilter />
            </aside>
        </div>
    )
}