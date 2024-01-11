import React, { useEffect, useReducer, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

// const initialState = {
//   activeMenu: "",
//   activeSubMenu: "",
//   isSidebarOpen: false,
//   isLeftSidebarOpen: false,
// };

// function reducer(state: any, action: any) {
//   switch (action.type) {
//     case "TOGGLE_MENU":
//       return {
//         ...state,

//         activeMenu: state.activeMenu === action.menu ? "" : action.menu,
//         activeSubMenu:
//           state.activeMenu === action.menu ? state.activeSubMenu : "",
//       };
//     case "TOGGLE_SUB_MENU":
//       return {
//         ...state,
//         activeSubMenu:
//           state.activeSubMenu === action.subMenu ? "" : action.subMenu,
//       };
//     case "TOGGLE_SIDEBAR":
//       return {
//         ...state,
//         isSidebarOpen: !state.isSidebarOpen,
//       };
//     case "setScrollY":
//       return { ...state, scrollY: action.payload };
//     case "TOGGLE_LEFT_SIDEBAR":
//       return {
//         ...state,
//         isLeftSidebarOpen: !state.isLeftSidebarOpen,
//       };
//     default:
//       return state;
//   }
// }

export function Header() {

  // const [state, dispatch] = useReducer(reducer, initialState);
  // const headerRef = useRef(null);
  // const handleScroll = () => {
  // const { scrollY } = window;
  //   dispatch({ type: "setScrollY", payload: scrollY });
  // };
  // const currentRoute = useLocation().pathname;
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  // const toggleMenu = (menu: any) => {
  //   dispatch({ type: "TOGGLE_MENU", menu });
  // };

  // const toggleSubMenu = (subMenu: any) => {
  //   dispatch({ type: "TOGGLE_SUB_MENU", subMenu });
  // };
  // const toggleSidebar = () => {
  //   dispatch({ type: "TOGGLE_MENU", menu: "" });
  //   dispatch({ type: "TOGGLE_SUB_MENU", subMenu: "" });
  //   dispatch({ type: "TOGGLE_SIDEBAR" });
  // };

  return (
    <header>#HEADER</header>
  )
}
