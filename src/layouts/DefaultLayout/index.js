import TopBar from "../components/TopBar";
import SidebarLeft from "../components/SidebarLeft";
import SidebarRight from "../components/SidebarRight";
import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx("wrapper")}>
            {/* Top bar */}
            <div className={cx("top-bar")}>
                <TopBar />
            </div>

            <div className={cx("container")}>
                {/* sidebar left */}
                <div className={cx("sidebar-left")}>
                    <SidebarLeft />
                </div>
                {/* content */}
                <div className={cx("content")}>{children}</div>
                {/* sidebar right */}

                <div className={cx("sidebar-right")}>
                    <SidebarRight />
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
