import Header from "../components/Header";
import SidebarLeft from "../components/SidebarLeft";
import SidebarRight from "../components/SidebarRight";

function DefaultLayout({ children }) {
    return (
        <div>
            {/* header */}
            <Header />
            
            <div>
                {/* sidebar left */}
                <SidebarLeft />
                {/* content */}
                {children}
                {/* sidebar right */}
                <SidebarRight />
            </div>
        </div>
    );
}

export default DefaultLayout;
