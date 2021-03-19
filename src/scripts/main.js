"use strict";

(function () {
    const NAVIGATION_CLASS = '.page-navigation';
    const NAV_MENU_CLASS = '.nav-menu';
    const NAV_MENU_ITEM_CLASS = '.nav-menu__item';
    const NAV_MENU_ITEM_EXPANDED_CLASS_NAME = 'nav-menu__item_expanded';

    const getClosestMenu = (element) => {
        return element.closest(NAV_MENU_CLASS);
    };

    const hasNestedMenu = (element) => {
        return element.querySelector(NAV_MENU_CLASS);
    }

    const getClosestMenuItem = (element) => {
        return element.closest(NAV_MENU_ITEM_CLASS);
    };

    const isMenuInSubMenu = (menu) => {
        return !!getClosestMenu(menu.parentNode);
    };

    const findParentMenuItem = (menuItem) => {
        const parentMenu = getClosestMenu(menuItem);

        if (isMenuInSubMenu(parentMenu)) {
            return getClosestMenuItem(parentMenu);
        }

        return null;
    };

    const navigation = document.querySelector(NAVIGATION_CLASS);

    navigation.addEventListener('click', (event) => {
        const menuItem = getClosestMenuItem(event.target);

        if (!menuItem) return;

        if (hasNestedMenu(menuItem)) {
            menuItem.classList.toggle(NAV_MENU_ITEM_EXPANDED_CLASS_NAME)
        }

        const parentMenuItem = findParentMenuItem(menuItem);

        if (parentMenuItem) {
            const menuItemText = parentMenuItem.querySelector('.nav-menu__item-text').textContent;
            const message = `Parent menu item of current sub-menu is "${menuItemText}"`;

            console.log(`🚀`, message);
        }
    });
})();