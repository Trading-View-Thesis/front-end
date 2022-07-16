import Header from "../components/Header";
import SidebarLeft from "../components/SidebarLeft";
import SidebarRight from "../components/SidebarRight";
import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx("wrapper")}>
            {/* header */}
            <Header />

            <div className={cx("container")}>
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
