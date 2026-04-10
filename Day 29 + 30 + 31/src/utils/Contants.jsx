import { FaUsers, FaUserSecret } from "react-icons/fa";
import { MdCategory, MdDashboard, MdLocalMovies, MdOutlinePriceChange } from "react-icons/md";
import { RiVipDiamondFill } from "react-icons/ri";

export const LISTMENU = [
    {
        name: "Metadata",
        icon:  <MdCategory  />,
        subMenu: [
            {
                title: "Categories",
                path: "/categories"
            },
            {
                title: "Category Type",
                path: "/categoriesType"
            }
        ]
    },
    {
        name: "Movies",
        icon:  <MdLocalMovies />,
        subMenu: [
            {
                title: "Movies List",
                path: "/movies"
            },
            {
                title: "Episodes",
                path: "/episodes"
            },
            {
                title: "ShowTimes",
                path: "/showTimes"
            }
        ]
    },
    {
        name: "Community",
        icon: <FaUsers />,
        subMenu: [
            {
                title: "Users",
                path: "/users"
            },
            {
                title: "Reviews",
                path: "/reviews"
            },
            {
                title: "Comments",
                path: "/comments"
            }
        ]
    },
    {
        name: "Entity",
        icon: <FaUserSecret />,
        subMenu: [
            {
                title: "Actors",
                path: "/actors"
            },
            {
                title: "Authors",
                path: "/authors"
            },
            {
                title: "Characters",
                path: "/characters"
            }
        ]
    },
    {
        name: "Billing",
        icon:   <MdOutlinePriceChange />,
        subMenu: [
            {
                title: "Plans",
                path: "/plans"
            },
            {
                title: "Features",
                path: "/features"
            },
            {
                title: "Packages",
                path: "/packages"
            }
        ]
    },
    {
        name: "Vip",
        icon: <RiVipDiamondFill />,
        subMenu: [
            {
                title: "RentMovies",
                path: "/rentMovies"
            },
            {
                title: "Subscriptions",
                path: "/subscriptions"
            }
        ]
    },

]