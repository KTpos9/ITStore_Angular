import { INavbarData } from "./nav-datastructure";

export const navbarData: INavbarData[] = [
    {
        routelink: 'dashboard',
        icon: 'fa-solid fa-house',
        label: 'Dashboard'
    },
    {
        routelink: 'products',
        icon: 'fa fa-box-open',
        label: 'Products',
        items: [
            {
                routelink: 'product',
                label: 'Product list'
            },
            {
                routelink: 'products/add',
                label: 'Add Product'
            }
        ]
    },
    {
        routelink: 'members',
        icon: 'fa-solid fa-user',
        label: 'Members',
        items: [
            {
                routelink: 'members/list',
                label: 'Member list'
            },
            {
                routelink: 'members/add',
                label: 'Add Member'
            }
        ]
    },
    {
        routelink: 'settings',
        icon: 'fa-solid fa-gears',
        label: 'Settings',
        items: [
            {
                routelink: 'settings',
                label: 'Back to shop'
            }
        ]
    },
];