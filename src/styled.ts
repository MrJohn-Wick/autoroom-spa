import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`

  /* :root {
    --max-width: 1100px;
    --border-radius: 12px;
    --font-mono: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',
      'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',
      'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;

    --foreground-rgb: 0, 0, 0;
    --background-start-rgb: 214, 219, 220;
    --background-end-rgb: 255, 255, 255;

    --primary-glow: conic-gradient(
      from 180deg at 50% 50%,
      #16abff33 0deg,
      #0885ff33 55deg,
      #54d6ff33 120deg,
      #0071ff33 160deg,
      transparent 360deg
    );
    --secondary-glow: radial-gradient(
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0)
    );

    --tile-start-rgb: 239, 245, 249;
    --tile-end-rgb: 228, 232, 233;
    --tile-border: conic-gradient(
      #00000080,
      #00000040,
      #00000030,
      #00000020,
      #00000010,
      #00000010,
      #00000080
    );

    --callout-rgb: 238, 240, 241;
    --callout-border-rgb: 172, 175, 176;
    --card-rgb: 180, 185, 188;
    --card-border-rgb: 131, 134, 135;
  } */

  /* body {
    font-family: 'Roboto', sans-serif;
    background-color: '#fff';
    color: '#000';
  } */

  @font-face {
    font-family: "Montserrat";
    src: url(../fonts/Montserrat-Black.ttf) format("truetype");
    font-weight: 900;
  }
  @font-face {
    font-family: "Montserrat";
    src: url(../fonts/Montserrat-ExtraBold.ttf) format("truetype");
    font-weight: 800;
  }
  @font-face {
    font-family: "Montserrat";
    src: url(/assets/fonts/Montserrat-Bold.ttf) format("truetype");
    font-weight: 700;
  }
  @font-face {
    font-family: "Montserrat";
    src: url(/assets/fonts/Montserrat-SemiBold.ttf) format("truetype");
    font-weight: 600;
  }
  @font-face {
    font-family: "Montserrat";
    src: url(/assets/fonts/Montserrat-Medium.ttf) format("truetype");
    font-weight: 500;
  }
  @font-face {
    font-family: "Montserrat";
    src: url(/assets/fonts/Montserrat-Regular.ttf) format("truetype");
    font-weight: 400;
  }
  @font-face {
    font-family: "Montserrat";
    src: url(/assets/fonts/Montserrat-Light.ttf) format("truetype");
    font-weight: 300;
  }
  @font-face {
    font-family: "Montserrat";
    src: url(/assets/fonts/Montserrat-Light.ttf) format("truetype");
    font-weight: 300;
  }
  @font-face {
    font-family: "Open Sans";
    src: url(/assets/fonts/OpenSans-Light.ttf) format("truetype");
    font-weight: 300;
  }
  @font-face {
    font-family: "Open Sans";
    src: url(/assets/fonts/OpenSans-Regular.ttf) format("truetype");
    font-weight: 400;
  }
  @font-face {
    font-family: "Open Sans";
    src: url(/assets/fonts/OpenSans-Medium.ttf) format("truetype");
    font-weight: 500;
  }
  @font-face {
    font-family: "Open Sans";
    src: url(/assets/fonts/OpenSans-SemiBold.ttf) format("truetype");
    font-weight: 600;
  }
  @font-face {
    font-family: "Open Sans";
    src: url(/assets/fonts/OpenSans-Bold.ttf) format("truetype");
    font-weight: 700;
  }
  @font-face {
    font-family: "Open Sans";
    src: url(/assets/fonts/OpenSans-ExtraBold.ttf) format("truetype");
    font-weight: 800;
  }

  :root {
    --font-montserrat: "Montserrat",sans-serif;
    --font-open-sans: "Open Sans",sans-serif;
    --white-color: #fff;
    --black-color: #000;
    --black-color2: #1d1d1d;
    --title-color: #13141a;
    --text-color: #5e5e5e;
    --primary-color1: #46d993;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
  }

  html,
  body {
    /* max-width: 100vw; */
    /* overflow-x: hidden; */
  }

  body {
    /* color: rgb(var(--foreground-rgb));
    background: linear-gradient(
        to bottom,
        transparent,
        rgb(var(--background-end-rgb))
      )
      rgb(var(--background-start-rgb)); */
    
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    padding: 0px 6.3%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  /* header.style-5 .header-logo {
    padding: 15px 0;
  }
  @media (max-width: 576px) {
    header.style-5 .header-logo img {
      max-width: 165px;
      width: 100%;
    }
  }
  header.style-5 .menu-close-btn i {
    color: var(--white-color);
  }
  header.style-5 .nav-right {
    gap: 45px;
  }
  @media (max-width: 991px) {
    header.style-5 .nav-right {
      gap: 0px;
    }
  }
  header.style-5 .nav-right .modal-btn {
    font-family: var(--font-montserrat);
    font-weight: 600;
    font-size: 13px;
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--title-color);
    background-color: transparent;
    padding: 0;
    transition: 0.35s;
  }
  header.style-5 .nav-right .modal-btn i {
    line-height: 1;
    transition: 0.35s;
  }
  header.style-5 .nav-right .modal-btn:hover {
    color: var(--primary-color1);
  }
  header.style-5 .nav-right .modal-btn:hover i {
    color: var(--primary-color1);
  }
  header.style-5 .nav-right .dropdown .cart-menu {
    min-height: 10rem;
    background-color: var(--white-color);
    box-shadow: 0px 30px 80px rgba(8, 0, 42, 0.08);
    border-radius: 0 0 10px 10px;
    position: absolute;
    right: 0;
    top: 45px;
    padding: 20px;
    z-index: 99;
    display: none;
    transform: scaleY(0);
    transform-origin: top;
    margin-right: -2.5rem;
  }
  header.style-5 .nav-right .dropdown .cart-menu.active {
    display: block;
    transform: scaleY(1);
    animation: fade-down 0.3s linear;
  }
  header.style-5 .nav-right .dropdown .cart-body {
    padding: 0px 0 20px;
  }
  header.style-5 .nav-right .dropdown .cart-body ul {
    margin: 0;
    padding: 0;
    list-style: none;
    height: 221px;
    overflow-y: auto;
  }
  header.style-5 .nav-right .dropdown .cart-body ul::-webkit-scrollbar {
    width: 5px;
  }
  header.style-5 .nav-right .dropdown .cart-body ul::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  header.style-5 .nav-right .dropdown .cart-body ul::-webkit-scrollbar-thumb {
    background: var(--text-color);
  }
  header.style-5 .nav-right .dropdown .cart-body ul .single-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
  }
  header.style-5 .nav-right .dropdown .cart-body ul .single-item:last-child {
    margin-bottom: 0;
  }
  header.style-5 .nav-right .dropdown .cart-body ul .single-item .item-area {
    display: flex;
    align-items: center;
    gap: 20px;
    position: relative;
  }
  header.style-5 .nav-right .dropdown .cart-body ul .single-item .item-area .close-btn {
    background: transparent;
    transition: 0.5s;
  }
  header.style-5 .nav-right .dropdown .cart-body ul .single-item .item-area .close-btn i {
    color: rgb(255, 72, 32);
    line-height: 1;
    font-size: 20px;
    transition: 0.5s;
  }
  header.style-5 .nav-right .dropdown .cart-body ul .single-item .item-area .main-item {
    display: inline-flex;
    gap: 15px;
    min-width: 290px;
    width: 100%;
  }
  @media (max-width: 767px) {
    header.style-5 .nav-right .dropdown .cart-body ul .single-item .item-area .main-item {
      gap: 12px;
    }
  }
  header.style-5 .nav-right .dropdown .cart-body ul .single-item .item-area .main-item .item-img {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  header.style-5 .nav-right .dropdown .cart-body ul .single-item .item-area .main-item .item-img img {
    height: 60px;
    max-width: 60px;
    min-width: 60px;
  }
  @media (max-width: 767px) {
    header.style-5 .nav-right .dropdown .cart-body ul .single-item .item-area .main-item .item-img img {
      width: 45px;
      height: unset;
    }
  }
  header.style-5 .nav-right .dropdown .cart-body ul .single-item .item-area .main-item .content {
    line-height: 1;
    margin-bottom: 10px;
  }
  header.style-5 .nav-right .dropdown .cart-body ul .single-item .item-area .main-item .content span {
    font-family: var(--font-montserrat);
    font-weight: 600;
    font-size: 15px;
    color: var(--title-color);
    display: inline-block;
  }
  header.style-5 .nav-right .dropdown .cart-body ul .single-item .item-area .main-item .content h6 {
    margin-bottom: 0;
    line-height: 1;
  }
  header.style-5 .nav-right .dropdown .cart-body ul .single-item .item-area .main-item .content h6 a {
    font-family: var(--font-montserrat);
    font-weight: 500;
    font-size: 14px;
    line-height: 1.5;
    color: var(--title-color);
  }
  header.style-5 .nav-right .dropdown .cart-body ul .single-item .item-area .main-item .content h6 a strong {
    font-weight: 600;
  }
  @media (max-width: 767px) {
    header.style-5 .nav-right .dropdown .cart-body ul .single-item .item-area .main-item .content h6 a {
      font-size: 14px;
    }
  }
  header.style-5 .nav-right .dropdown .cart-body ul .single-item .quantity-area .quantity {
    display: flex;
    gap: 5px;
  }
  header.style-5 .nav-right .dropdown .cart-body ul .single-item .quantity-area .quantity a {
    height: 24px;
    width: 34px;
    border-radius: 4px;
    background: #F3F3F3;
    border: 1px solid rgba(238, 238, 238, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: var(--title-color);
    font-weight: 600;
    cursor: pointer;
    transition: 0.35s;
  }
  header.style-5 .nav-right .dropdown .cart-body ul .single-item .quantity-area .quantity a:hover {
    background: var(--primary-color1);
    border: 1px solid --primary-color1;
  }
  header.style-5 .nav-right .dropdown .cart-body ul .single-item .quantity-area .quantity input {
    height: 24px;
    width: 34px;
    border-radius: 4px;
    background: #F3F3F3;
    border: 1px solid rgba(238, 238, 238, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: var(--title-color);
    font-weight: 600;
    text-align: center;
  }
  header.style-5 .nav-right .dropdown .cart-footer {
    justify-content: flex-start;
    padding: 0;
    border-top: 1px solid rgba(238, 238, 238, 0.933333);
    position: sticky;
    width: 100%;
    left: 0;
    bottom: 0;
  }
  header.style-5 .nav-right .dropdown .cart-footer .pricing-area {
    width: 100%;
  }
  header.style-5 .nav-right .dropdown .cart-footer .pricing-area ul {
    margin: 0;
    padding: 0;
    list-style: none;
    border-bottom: 1px solid rgba(238, 238, 238, 0.933333);
    width: 100%;
    padding: 10px 0px 10px;
  }
  header.style-5 .nav-right .dropdown .cart-footer .pricing-area ul li {
    font-family: var(--font-montserrat);
    font-weight: 600;
    font-size: 13px;
    color: var(--title-color);
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  header.style-5 .nav-right .dropdown .cart-footer .pricing-area ul.total li {
    font-weight: 700;
  }
  header.style-5 .nav-right .dropdown .cart-footer .footer-button {
    padding-top: 20px;
    width: 100%;
  }
  header.style-5 .nav-right .dropdown .cart-footer .footer-button ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    gap: 15px;
  }
  header.style-5 .nav-right .dropdown .cart-footer .footer-button ul li {
    width: 100%;
  }
  header.style-5 .nav-right .dropdown .cart-footer .footer-button ul li a {
    width: 100%;
    justify-content: center;
    border-radius: 5px;
    background-color: var(--primary-color1);
    font-family: var(--font-open-sans);
    font-weight: 600;
    font-size: 15px;
    color: #13141A;
    border: 1px solid transparent;
    padding: 8px 20px;
    display: flex;
    transition: 0.5s;
    position: relative;
    overflow: hidden;
    z-index: 1;
  }
  header.style-5 .nav-right .dropdown .cart-footer .footer-button ul li a svg {
    fill: var(--title-color);
    transition: 0.5s;
  }
  header.style-5 .nav-right .dropdown .cart-footer .footer-button ul li a::after {
    position: absolute;
    content: "";
    display: block;
    left: 15%;
    right: -20%;
    top: -4%;
    height: 150%;
    width: 150%;
    bottom: 0;
    border-radius: 2px;
    background-color: #0A1019;
    transform: skewX(45deg) scale(0, 1);
    z-index: -1;
    transition: all 0.5s ease-out 0s;
  }
  header.style-5 .nav-right .dropdown .cart-footer .footer-button ul li a:hover {
    color: var(--white-color);
  }
  header.style-5 .nav-right .dropdown .cart-footer .footer-button ul li a:hover svg {
    fill: var(--white-color);
  }
  header.style-5 .nav-right .dropdown .cart-footer .footer-button ul li a:hover::after {
    transform: skewX(45deg) scale(1, 1);
  }
  header.style-5 .nav-right .dropdown .cart-footer .footer-button ul li:first-child a {
    background-color: var(--title-color);
    color: var(--white-color);
    border-color: var(--title-color);
  }
  header.style-5 .nav-right .dropdown .cart-footer .footer-button ul li:first-child a::after {
    background-color: var(--white-color);
  }
  header.style-5 .nav-right .dropdown .cart-footer .footer-button ul li:first-child a:hover {
    color: var(--title-color);
  }
  header.style-5 .nav-right .dropdown .cart-footer .footer-button ul li:first-child a:hover svg {
    fill: var(--title-color);
  }
  header.style-5 .nav-right .dropdown .cart-footer .footer-button ul li:first-child a:hover::after {
    transform: skewX(45deg) scale(1, 1);
  }
  @keyframes fade-down {
    0% {
      opacity: 0;
      transform: scaleY(0);
      visibility: hidden;
    }
    100% {
      opacity: 1;
      transform: scaleY(1);
      visibility: visible;
    }
  }
  header.style-5 .nav-right .hotline-area {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  header.style-5 .nav-right .hotline-area .content {
    position: relative;
    line-height: 1;
  }
  header.style-5 .nav-right .hotline-area .content::after {
    content: "";
    height: 32px;
    width: 1px;
    background-color: rgba(19, 20, 26, 0.2);
    position: absolute;
    left: -10px;
    top: 50%;
    transform: translateY(-50%);
  }
  header.style-5 .nav-right .hotline-area .content span {
    font-family: var(--font-open-sans);
    font-weight: 600;
    font-size: 14px;
    line-height: 1;
    color: var(--text-color);
    margin-bottom: 5px;
    display: inline-block;
  }
  header.style-5 .nav-right .hotline-area .content h6 {
    margin-bottom: 0;
    line-height: 1;
  }
  header.style-5 .nav-right .hotline-area .content h6 a {
    font-family: var(--font-montserrat);
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: var(--title-color);
    transition: 0.5s;
  }
  header.style-5 .nav-right .hotline-area .content h6 a:hover {
    color: var(--primary-color1);
  }
  header.style-5 .nav-right .primary-btn1 {
    font-family: var(--font-montserrat);
    padding: 5px 16px;
  }
  @media (max-width: 991px) {
    header.style-5 .nav-right .primary-btn1 {
      display: none;
      visibility: hidden;
    }
  }
  header.style-5 .nav-right .modal-dialog {
    min-height: 100vh;
    max-width: 620px;
    margin: 0 0 0 auto;
  }
  @media (max-width: 767px) {
    header.style-5 .nav-right .modal-dialog {
      max-width: unset;
      width: 100%;
    }
  }
  header.style-5 .nav-right .modal-dialog .modal-content {
    padding: 65px 60px;
    min-height: 100vh;
    position: relative;
  }
  @media (max-width: 767px) {
    header.style-5 .nav-right .modal-dialog .modal-content {
      padding: 50px 20px;
    }
  }
  header.style-5 .nav-right .modal-dialog .modal-content .modal-header {
    padding: 0;
    padding-bottom: 15px;
    border-bottom: 1px solid rgba(238, 238, 238, 0.933333);
  }
  header.style-5 .nav-right .modal-dialog .modal-content .modal-header .modal-title {
    font-family: var(--font-montserrat);
    font-weight: 700;
    font-size: 24px;
    color: var(--title-color);
    margin-bottom: 0;
  }
  header.style-5 .nav-right .modal-dialog .modal-content .modal-header .close-btn {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background: rgba(255, 72, 32, 0.14);
    transition: 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  header.style-5 .nav-right .modal-dialog .modal-content .modal-header .close-btn i {
    color: rgb(255, 72, 32);
    line-height: 1;
    font-size: 20px;
    transition: 0.5s;
  }
  header.style-5 .nav-right .modal-dialog .modal-content .modal-header .close-btn:hover {
    background: rgb(255, 72, 32);
  }
  header.style-5 .nav-right .modal-dialog .modal-content .modal-header .close-btn:hover i {
    color: var(--white-color);
  }
  header.style-5 .nav-right .modal-dialog .modal-content .modal-body {
    padding: 40px 0;
  }
  header.style-5 .nav-right .modal-dialog .modal-content .modal-body ul {
    margin: 0;
    padding: 0;
    list-style: none;
    min-height: 500px;
  }
  header.style-5 .nav-right .modal-dialog .modal-content .modal-body ul .single-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
  }
  header.style-5 .nav-right .modal-dialog .modal-content .modal-body ul .single-item:last-child {
    margin-bottom: 0;
  }
  header.style-5 .nav-right .modal-dialog .modal-content .modal-body ul .single-item .item-area {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  @media (max-width: 767px) {
    header.style-5 .nav-right .modal-dialog .modal-content .modal-body ul .single-item .item-area {
      gap: 10px;
    }
  }
  header.style-5 .nav-right .modal-dialog .modal-content .modal-body ul .single-item .item-area .close-btn {
    height: 28px;
    min-width: 28px;
    border-radius: 50%;
    background: rgba(255, 72, 32, 0.14);
    transition: 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  header.style-5 .nav-right .modal-dialog .modal-content .modal-body ul .single-item .item-area .close-btn i {
    color: rgb(255, 72, 32);
    line-height: 1;
    font-size: 20px;
    transition: 0.5s;
  }
  header.style-5 .nav-right .modal-dialog .modal-content .modal-body ul .single-item .item-area .close-btn:hover {
    background: rgb(255, 72, 32);
  }
  header.style-5 .nav-right .modal-dialog .modal-content .modal-body ul .single-item .item-area .close-btn:hover i {
    color: var(--white-color);
  }
  header.style-5 .nav-right .modal-dialog .modal-content .modal-body ul .single-item .item-area .main-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    min-width: 350px;
    width: 100%;
  }
  @media (max-width: 767px) {
    header.style-5 .nav-right .modal-dialog .modal-content .modal-body ul .single-item .item-area .main-item {
      gap: 12px;
      min-width: 100%;
    }
  }
  header.style-5 .nav-right .modal-dialog .modal-content .modal-body ul .single-item .item-area .main-item .item-img {
    background: #F3F3F3;
    border-radius: 5px;
    min-width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 767px) {
    header.style-5 .nav-right .modal-dialog .modal-content .modal-body ul .single-item .item-area .main-item .item-img {
      height: 60px;
      min-width: 55px;
    }
  }
  header.style-5 .nav-right .modal-dialog .modal-content .modal-body ul .single-item .item-area .main-item .item-img img {
    height: 60px;
    width: 55px;
  }
  @media (max-width: 767px) {
    header.style-5 .nav-right .modal-dialog .modal-content .modal-body ul .single-item .item-area .main-item .item-img img {
      width: 45px;
      height: unset;
    }
  }
  header.style-5 .nav-right .modal-dialog .modal-content .modal-body ul .single-item .item-area .main-item .content {
    line-height: 1;
    padding-right: 40px;
  }
  header.style-5 .nav-right .modal-dialog .modal-content .modal-body ul .single-item .item-area .main-item .content span {
    font-family: var(--font-montserrat);
    font-weight: 600;
    font-size: 18px;
    color: var(--title-color);
    display: inline-block;
    margin-bottom: 3px;
  }
  header.style-5 .nav-right .modal-dialog .modal-content .modal-body ul .single-item .item-area .main-item .content h6 {
    margin-bottom: 0;
    line-height: 1;
  }
  header.style-5 .nav-right .modal-dialog .modal-content .modal-body ul .single-item .item-area .main-item .content h6 a {
    font-family: var(--font-montserrat);
    font-weight: 500;
    font-size: 15px;
    line-height: 1.5;
    color: var(--title-color);
  }
  header.style-5 .nav-right .modal-dialog .modal-content .modal-body ul .single-item .item-area .main-item .content h6 a strong {
    font-weight: 600;
  }
  @media (max-width: 767px) {
    header.style-5 .nav-right .modal-dialog .modal-content .modal-body ul .single-item .item-area .main-item .content h6 a {
      font-size: 14px;
    }
  }
  header.style-5 .nav-right .modal-dialog .modal-content .modal-body ul .single-item .quantity-area .quantity {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  header.style-5 .nav-right .modal-dialog .modal-content .modal-body ul .single-item .quantity-area .quantity a {
    height: 24px;
    width: 34px;
    border-radius: 4px;
    background: #F3F3F3;
    border: 1px solid rgba(238, 238, 238, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: var(--title-color);
    font-weight: 600;
    cursor: pointer;
    transition: 0.35s;
  }
  header.style-5 .nav-right .modal-dialog .modal-content .modal-body ul .single-item .quantity-area .quantity a:hover {
    background: var(--primary-color1);
    border: 1px solid --primary-color1;
  }
  header.style-5 .nav-right .modal-dialog .modal-content .modal-body ul .single-item .quantity-area .quantity input {
    height: 24px;
    width: 34px;
    border-radius: 4px;
    background: #F3F3F3;
    border: 1px solid rgba(238, 238, 238, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: var(--title-color);
    font-weight: 600;
    text-align: center;
  }
  header.style-5 .nav-right .modal-dialog .modal-content .modal-footer {
    justify-content: flex-start;
    padding: 0;
    border-top: 1px solid rgba(238, 238, 238, 0.933333);
    position: sticky;
    width: 100%;
    left: 0;
    bottom: 0;
  }
  header.style-5 .nav-right .modal-dialog .modal-content .modal-footer .pricing-area {
    border-bottom: 1px solid rgba(238, 238, 238, 0.933333);
    width: 100%;
    padding: 10px 0px 15px;
  }
  header.style-5 .nav-right .modal-dialog .modal-content .modal-footer .pricing-area ul {
    margin: 0;
    padding: 0;
    list-style: none;
    width: 100%;
  }
  header.style-5 .nav-right .modal-dialog .modal-content .modal-footer .pricing-area ul li {
    font-family: var(--font-montserrat);
    font-weight: 500;
    font-size: 15px;
    color: var(--title-color);
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  header.style-5 .nav-right .modal-dialog .modal-content .modal-footer .footer-button {
    padding-top: 40px;
    width: 100%;
  }
  header.style-5 .nav-right .modal-dialog .modal-content .modal-footer .footer-button ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 30px;
  }
  @media (max-width: 576px) {
    header.style-5 .nav-right .modal-dialog .modal-content .modal-footer .footer-button ul {
      flex-wrap: wrap;
      gap: 15px;
    }
  }
  header.style-5 .nav-right .modal-dialog .modal-content .modal-footer .footer-button ul li {
    width: 100%;
  }
  header.style-5 .nav-right .modal-dialog .modal-content .modal-footer .footer-button ul li a {
    width: 100%;
    justify-content: center;
  }
  header.style-5 .nav-right .modal-dialog .modal-content .modal-footer .footer-button ul li:first-child a {
    background-color: var(--title-color);
    color: var(--white-color);
  }
  header.style-5 .nav-right .mobile-menu-btn {
    display: none;
    visibility: hidden;
  }
  @media (max-width: 991px) {
    header.style-5 .nav-right .mobile-menu-btn {
      display: flex;
      margin-left: 50px;
      flex-direction: column;
      align-items: end;
      visibility: visible;
      justify-content: center;
      position: relative;
    }
    header.style-5 .nav-right .mobile-menu-btn span {
      height: 2px;
      width: 25px;
      background-color: var(--title-color);
      display: flex;
      transition: transform 0.5s ease-in;
      position: absolute;
      top: 0px;
    }
    header.style-5 .nav-right .mobile-menu-btn span::before {
      transition-duration: 0.5s;
      position: absolute;
      width: 35px;
      height: 2px;
      background-color: var(--title-color);
      content: "";
      top: -10px;
      right: 0;
    }
    header.style-5 .nav-right .mobile-menu-btn span::after {
      transition-duration: 0.5s;
      position: absolute;
      width: 15px;
      height: 2px;
      right: 0;
      background-color: var(--title-color);
      content: "";
      top: 10px;
    }
    header.style-5 .nav-right .mobile-menu-btn.active span {
      background-color: transparent;
    }
    header.style-5 .nav-right .mobile-menu-btn.active span::before {
      transform: rotateZ(45deg) translate(8px, 6px);
      width: 35px;
    }
    header.style-5 .nav-right .mobile-menu-btn.active span::after {
      transform: rotateZ(-45deg) translate(8px, -6px);
      width: 35px;
    }
  }
  header.style-5 .main-menu {
    display: inline-block;
    position: relative;
  }
  header.style-5 .main-menu .mobile-menu-logo {
    display: none;
  }
  header.style-5 .main-menu ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  header.style-5 .main-menu ul > li {
    display: inline-block;
    position: relative;
    padding: 0 8px;
  }
  header.style-5 .main-menu ul > li.position-inherit {
    position: inherit;
  }
  @media (max-width: 991px) {
    header.style-5 .main-menu ul > li.position-inherit {
      position: relative;
    }
  }
  header.style-5 .main-menu ul > li.position-inherit > a::after {
    content: "\f282";
    font-family: "bootstrap-icons";
    font-weight: 500;
    position: absolute;
    top: 15px;
    right: 2px;
    font-size: 14px;
    color: var(--text-color);
    transition: all 0.55s ease-in-out;
  }
  @media (max-width: 1199px) {
    header.style-5 .main-menu ul > li.position-inherit > a::after {
      right: 2px;
    }
  }
  @media (max-width: 991px) {
    header.style-5 .main-menu ul > li.position-inherit > a::after {
      display: none;
      visibility: hidden;
    }
  }
  header.style-5 .main-menu ul > li:hover i {
    color: var(--black-color2);
    font-size: 20px;
  }
  @media (min-width: 992px) {
    header.style-5 .main-menu ul > li:first-child {
      padding-left: 0;
    }
    header.style-5 .main-menu ul > li:first-child a {
      padding-left: 0;
    }
  }
  header.style-5 .main-menu ul > li a {
    color: var(--title-color);
    display: block;
    text-transform: capitalize;
    padding: 15px 20px;
    position: relative;
    font-family: var(--font-montserrat);
    text-transform: uppercase;
    font-weight: 600;
    font-size: 13px;
    transition: all 0.5s ease-out 0s;
    position: relative;
  }
  @media (max-width: 991px) {
    header.style-5 .main-menu ul > li a {
      padding: 32px 9px;
    }
  }
  header.style-5 .main-menu ul > li i {
    font-size: 20px;
    text-align: center;
    color: var(--text-color);
    font-style: normal;
    position: absolute;
    right: -5px;
    top: 35px;
    z-index: 999;
    cursor: pointer;
    display: none;
    transition: all 0.5s ease-out 0s;
    opacity: 0;
  }
  @media (max-width: 991px) {
    header.style-5 .main-menu ul > li i {
      opacity: 1;
    }
  }
  header.style-5 .main-menu ul > li i.active {
    color: var(--primary-color1);
  }
  header.style-5 .main-menu ul > li i.active::before {
    content: "\f2ea";
  }
  header.style-5 .main-menu ul > li ul.sub-menu {
    position: absolute;
    left: 0;
    right: 0;
    top: auto;
    margin: 0;
    display: none;
    min-width: 220px;
    background: var(--white-color);
    box-shadow: 0px 30px 80px rgba(8, 0, 42, 0.08);
    text-align: left;
    transform-origin: top;
  }
  @media (max-width: 1199px) {
    header.style-5 .main-menu ul > li ul.sub-menu {
      box-shadow: none;
    }
  }
  header.style-5 .main-menu ul > li ul.sub-menu > li {
    padding: 0;
    display: block;
    position: relative;
  }
  header.style-5 .main-menu ul > li ul.sub-menu > li i {
    position: absolute;
    top: 14px;
    right: 6px;
    display: block;
    color: var(--title-color);
    font-size: 14px;
  }
  header.style-5 .main-menu ul > li ul.sub-menu > li .dropdown-icon {
    color: var(--title-color);
    opacity: 1;
    top: 14px;
    font-size: 14px;
    right: 10px;
  }
  @media (max-width: 991px) {
    header.style-5 .main-menu ul > li ul.sub-menu > li .dropdown-icon {
      font-size: 20px;
      top: 8px;
      right: 0;
    }
  }
  header.style-5 .main-menu ul > li ul.sub-menu > li a {
    display: block;
    padding: 15px 15px;
    color: var(--text-color1);
    font-weight: 600;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 1;
    transition: all 0.4s ease-out 0s;
    position: relative;
    border-bottom: 1px solid rgba(233, 228, 228, 0.5);
  }
  header.style-5 .main-menu ul > li ul.sub-menu > li a::before {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    background: linear-gradient(90deg, #fff, #06D889, #fff);
    width: 100%;
    height: 1px;
    transform: scaleX(0);
    transform-origin: left;
    transition: 0.4s ease-in;
    z-index: 1;
  }
  @media (max-width: 991px) {
    header.style-5 .main-menu ul > li ul.sub-menu > li a {
      border-color: rgba(233, 228, 228, 0.5);
    }
    header.style-5 .main-menu ul > li ul.sub-menu > li a::before {
      background: linear-gradient(90deg, #ddd, #06D889, #ddd);
    }
  }
  header.style-5 .main-menu ul > li ul.sub-menu > li a:hover {
    color: var(--primary-color1);
  }
  header.style-5 .main-menu ul > li ul.sub-menu > li a:hover::before {
    transform: scale(1);
  }
  header.style-5 .main-menu ul > li ul.sub-menu > li a.active {
    color: var(--primary-color1);
  }
  header.style-5 .main-menu ul > li ul.sub-menu > li a.active::before {
    transform: scale(1);
  }
  header.style-5 .main-menu ul > li ul.sub-menu > li:last-child a {
    border-bottom: none;
  }
  header.style-5 .main-menu ul > li ul.sub-menu > li:last-child a::before {
    display: none;
  }
  header.style-5 .main-menu ul > li ul.sub-menu > li:hover > a {
    color: var(--primary-color1);
  }
  header.style-5 .main-menu ul > li ul.sub-menu > li:hover .dropdown-icon {
    color: var(--primary-color1);
  }
  header.style-5 .main-menu ul > li ul.sub-menu > li.active > a {
    color: var(--primary-color1);
  }
  header.style-5 .main-menu ul > li ul.sub-menu > li.active .dropdown-icon {
    color: var(--primary-color1);
  }
  header.style-5 .main-menu ul > li ul.sub-menu > li .sub-menu {
    left: 220px;
    position: absolute;
    max-width: 230px;
    min-width: 215px;
    background: var(--white-color);
    box-shadow: 0px 30px 80px rgba(8, 0, 42, 0.08);
    top: 0;
  }
  @media (max-width: 1199px) {
    header.style-5 .main-menu ul > li ul.sub-menu > li .sub-menu {
      box-shadow: none;
    }
  }
  header.style-5 .main-menu ul > li ul.sub-menu > li .sub-menu::before {
    display: none;
    visibility: hidden;
  }
  @media only screen and (max-width: 991px) {
    header.style-5 .main-menu ul > li ul.sub-menu > li .sub-menu {
      margin-left: 10px;
      position: unset;
      max-width: 230px;
      min-width: 215px;
      background: transparent;
      top: 0;
    }
  }
  header.style-5 .main-menu ul > li ul.sub-menu > li .sub-menu > li i {
    display: block;
  }
  header.style-5 .main-menu ul > li ul.sub-menu > li:last-child {
    border-bottom: none;
  }
  header.style-5 .main-menu ul > li .mega-menu {
    display: none;
    position: absolute;
    left: 0;
    right: 0;
    top: auto;
    margin: 0;
    min-width: 1040px;
    background: var(--white-color);
    box-shadow: 0px 30px 80px rgba(8, 0, 42, 0.08);
    text-align: left;
    padding: 45px 40px;
    border-radius: 0 0 10px 10px;
    transform-origin: top;
  }
  @media (max-width: 1199px) {
    header.style-5 .main-menu ul > li .mega-menu {
      min-width: 935px;
    }
  }
  @media (max-width: 991px) {
    header.style-5 .main-menu ul > li .mega-menu {
      position: static;
      min-width: 200px;
      background: 0 0;
      border: none;
      opacity: 1;
      visibility: visible;
      box-shadow: none;
      transform: none;
      transition: none;
      display: none;
      margin-top: 0 !important;
      transform: translateY(0px);
      padding: 0;
      padding-left: 10px;
    }
  }
  header.style-5 .main-menu ul > li .mega-menu .menu-row {
    display: flex;
  }
  @media (max-width: 991px) {
    header.style-5 .main-menu ul > li .mega-menu .menu-row {
      display: block;
    }
  }
  header.style-5 .main-menu ul > li .mega-menu .menu-row .menu-single-item {
    display: block;
    padding: 0;
    padding-right: 70px;
    position: relative;
    flex-basis: 33.33%;
  }
  @media (max-width: 1199px) {
    header.style-5 .main-menu ul > li .mega-menu .menu-row .menu-single-item {
      padding-right: 55px;
    }
  }
  @media (max-width: 991px) {
    header.style-5 .main-menu ul > li .mega-menu .menu-row .menu-single-item {
      padding-right: 0px;
      margin-bottom: 15px;
      flex-basis: unset;
    }
    header.style-5 .main-menu ul > li .mega-menu .menu-row .menu-single-item:last-child {
      margin-bottom: 0;
    }
  }
  header.style-5 .main-menu ul > li .mega-menu .menu-row .menu-single-item::after {
    content: "";
    height: 100%;
    width: 1px;
    background-color: #eee;
    position: absolute;
    right: 27px;
    top: 0;
  }
  @media (max-width: 1199px) {
    header.style-5 .main-menu ul > li .mega-menu .menu-row .menu-single-item::after {
      right: 18px;
    }
  }
  @media (max-width: 991px) {
    header.style-5 .main-menu ul > li .mega-menu .menu-row .menu-single-item::after {
      display: none;
      visibility: hidden;
    }
  }
  header.style-5 .main-menu ul > li .mega-menu .menu-row .menu-single-item:last-child {
    padding-right: 0;
  }
  header.style-5 .main-menu ul > li .mega-menu .menu-row .menu-single-item:last-child::after {
    display: none;
    visibility: hidden;
  }
  header.style-5 .main-menu ul > li .mega-menu .menu-row .menu-single-item h6 {
    margin-bottom: 10px;
    color: var(--title-color);
    font-family: var(--font-montserrat);
    font-size: 15px;
    font-weight: 600;
  }
  @media (max-width: 991px) {
    header.style-5 .main-menu ul > li .mega-menu .menu-row .menu-single-item h6 {
      color: #b5b5b5;
      position: relative;
      padding-left: 15px;
    }
    header.style-5 .main-menu ul > li .mega-menu .menu-row .menu-single-item h6::before {
      height: 8px;
      width: 8px;
      background-color: #b5b5b5;
      border-radius: 50%;
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  header.style-5 .main-menu ul > li .mega-menu .menu-row .menu-single-item > ul li {
    display: block;
    line-height: 1;
    padding: 0;
  }
  header.style-5 .main-menu ul > li .mega-menu .menu-row .menu-single-item > ul li a {
    color: var(--title-color);
    font-family: var(--font-montserrat);
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    line-height: 1;
    padding: 12px 0;
  }
  header.style-5 .main-menu ul > li .mega-menu .menu-row .menu-single-item > ul li a:hover {
    color: var(--primary-color1);
  }
  @media (max-width: 991px) {
    header.style-5 .main-menu ul > li .mega-menu .menu-row .menu-single-item > ul li a {
      font-size: 12px;
      font-weight: 600;
      border-bottom: 1px solid rgba(233, 228, 228, 0.5);
    }
    header.style-5 .main-menu ul > li .mega-menu .menu-row .menu-single-item > ul li a img {
      display: none;
      visibility: hidden;
    }
  }
  header.style-5 .main-menu ul > li .mega-menu .menu-row .menu-single-item .explore-more-btn {
    padding-top: 20px;
  }
  header.style-5 .main-menu ul > li .mega-menu .menu-row .menu-single-item .explore-more-btn a {
    padding: 0;
    display: flex;
    align-items: center;
    gap: 7px;
    border-bottom: none;
    font-weight: 600;
  }
  header.style-5 .main-menu ul > li .mega-menu .menu-row .menu-single-item .explore-more-btn a i {
    font-size: 20px;
    text-align: center;
    color: var(--text-color);
    font-style: normal;
    position: relative;
    right: unset;
    top: unset;
    cursor: pointer;
    display: flex;
    transition: all 0.5s ease-out 0s;
    opacity: 1;
  }
  header.style-5 .main-menu ul > li .mega-menu .menu-row .menu-single-item .explore-more-btn a:hover {
    color: var(--primary-color1);
  }
  header.style-5 .main-menu ul > li .mega-menu .menu-row .menu-single-item .explore-more-btn a:hover i {
    color: var(--primary-color1);
  }
  header.style-5 .main-menu ul > li.menu-item-has-children::after {
    content: "\f282";
    font-family: "bootstrap-icons";
    font-weight: 500;
    position: absolute;
    top: 15px;
    right: 10px;
    font-size: 14px;
    color: var(--text-color);
    transition: all 0.55s ease-in-out;
  }
  @media (max-width: 1199px) {
    header.style-5 .main-menu ul > li.menu-item-has-children::after {
      right: 2px;
    }
  }
  @media (max-width: 991px) {
    header.style-5 .main-menu ul > li.menu-item-has-children::after {
      display: none;
      visibility: hidden;
    }
  }
  @media (min-width: 992px) {
    header.style-5 .main-menu ul > li:hover > ul.sub-menu {
      display: block;
      animation: fade-down 0.45s linear;
    }
  }
  @media (min-width: 992px) {
    header.style-5 .main-menu ul > li:hover .mega-menu {
      display: block;
      animation: fade-down 0.45s linear;
    }
  }
  @keyframes fade-down {
    0% {
      opacity: 0;
      transform: scaleY(0);
      visibility: hidden;
    }
    100% {
      opacity: 1;
      transform: scaleY(1);
      visibility: visible;
    }
  }
  header.style-5 .main-menu ul > li:hover > a {
    color: var(--primary-color1);
  }
  header.style-5 .main-menu ul > li:hover::after {
    color: var(--primary-color1);
  }
  header.style-5 .main-menu ul > li:hover .dropdown-icon2 {
    color: var(--primary-color1);
  }
  header.style-5 .main-menu ul > li:hover.position-inherit > a::after {
    color: var(--primary-color1);
  }
  header.style-5 .main-menu ul > li.active > a {
    color: var(--primary-color1);
  }
  header.style-5 .main-menu ul > li.active::after {
    color: var(--primary-color1);
  }
  header.style-5 .main-menu ul > li.active .dropdown-icon2 {
    color: var(--primary-color1);
  }
  header.style-5 .main-menu ul > li.active.position-inherit > a::after {
    color: var(--primary-color1);
  }
  header.style-5 .main-menu ul li.menu-item-has-children > i {
    display: block;
  }
  header.style-5 .main-menu .topbar-right {
    padding-top: 40px;
    padding-bottom: 50px;
    border-bottom: 1px solid rgba(238, 238, 238, 0.93);
  }
  header.style-5 .main-menu .topbar-right .primary-btn3 {
    justify-content: center;
    width: 100%;
  }
  header.style-5 .main-menu .topbar-right .primary-btn3 svg {
    fill: var(--title-color);
  }
  header.style-5 .main-menu .topbar-right a {
    display: flex;
    align-items: center;
    gap: 5px;
    font-family: var(--font-open-sans);
    font-weight: 600;
    font-size: 13px;
    color: #13141A;
    margin-bottom: 25px;
  }
  header.style-5 .main-menu .topbar-right a:last-child {
    margin-bottom: 0;
  }
  header.style-5 .main-menu .topbar-right a svg {
    fill: var(--primary-color1);
  }
  header.style-5 .main-menu .topbar-right a:hover {
    color: var(--primary-color1);
  }
  header.style-5 .main-menu .topbar-right a:hover svg {
    fill: var(--primary-color1);
  }
  header.style-5 .main-menu .topbar-right .sell-btn {
    display: flex;
    align-items: center;
    gap: 5px;
    font-family: var(--font-open-sans);
    font-weight: 600;
    font-size: 13px;
    color: #13141A;
    margin-bottom: 25px;
    background-color: transparent;
  }
  header.style-5 .main-menu .topbar-right .sell-btn:last-child {
    margin-bottom: 0;
  }
  header.style-5 .main-menu .topbar-right .sell-btn svg {
    fill: var(--primary-color1);
  }
  header.style-5 .main-menu .topbar-right .sell-btn.primary-btn3 {
    justify-content: center;
  }
  header.style-5 .main-menu .topbar-right .sell-btn.primary-btn3 svg {
    fill: var(--title-color);
  }
  header.style-5 .main-menu .topbar-right .sell-btn:hover {
    color: var(--primary-color1);
  }
  header.style-5 .main-menu .topbar-right .sell-btn:hover svg {
    fill: var(--primary-color1);
  }
  header.style-5 .main-menu .hotline-area {
    display: flex;
    align-items: center;
    gap: 20px;
    padding-top: 40px;
  }
  header.style-5 .main-menu .hotline-area .content {
    position: relative;
    line-height: 1;
  }
  header.style-5 .main-menu .hotline-area .content::after {
    content: "";
    height: 32px;
    width: 1px;
    background-color: rgba(19, 20, 26, 0.2);
    position: absolute;
    left: -10px;
    top: 50%;
    transform: translateY(-50%);
  }
  header.style-5 .main-menu .hotline-area .content span {
    font-family: var(--font-open-sans);
    font-weight: 600;
    font-size: 14px;
    line-height: 1;
    color: var(--text-color);
    margin-bottom: 5px;
    display: inline-block;
  }
  header.style-5 .main-menu .hotline-area .content h6 {
    margin-bottom: 0;
    line-height: 1;
  }
  header.style-5 .main-menu .hotline-area .content h6 a {
    font-family: var(--font-montserrat);
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: var(--title-color);
    transition: 0.5s;
  }
  header.style-5 .main-menu .hotline-area .content h6 a:hover {
    color: var(--primary-color1);
  }
  @media only screen and (max-width: 991px) {
    header.style-5 .mobile-logo-area {
      justify-content: center !important;
    }
    header.style-5 .dropdown-icon {
      color: var(--white-color);
    }
    header.style-5 .main-menu {
      position: fixed;
      top: 0;
      left: 0;
      width: 280px;
      padding: 30px 20px !important;
      z-index: 99999;
      height: 100%;
      overflow: auto;
      background: #fff;
      border-right: 1px solid #eee;
      transform: translateX(-100%);
      transition: transform 0.3s ease-in;
      box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.03);
    }
    header.style-5 .main-menu.show-menu {
      transform: translateX(0);
    }
    header.style-5 .main-menu .mobile-menu-logo {
      text-align: left;
      padding-top: 20px;
      display: block;
      padding-bottom: 8px;
    }
    header.style-5 .main-menu .menu-list {
      padding-top: 50px;
      padding-bottom: 30px;
    }
    header.style-5 .main-menu ul {
      float: none;
      text-align: left;
      padding: 5px 0px 20px 0;
    }
    header.style-5 .main-menu ul li {
      display: block;
      position: relative;
      padding: 0 5px;
    }
    header.style-5 .main-menu ul li i {
      display: block;
    }
    header.style-5 .main-menu ul li a {
      padding: 10px 0;
      display: block;
    }
    header.style-5 .main-menu ul li ul.sub-menu {
      position: static;
      min-width: 200px;
      background: 0 0;
      border: none;
      opacity: 1;
      visibility: visible;
      box-shadow: none;
      transform: none;
      transition: none;
      display: none;
      margin-top: 0 !important;
      transform: translateY(0px);
    }
    header.style-5 .main-menu ul li ul.sub-menu > li {
      border-bottom: 1px solid transparent;
    }
    header.style-5 .main-menu ul li ul.sub-menu > li a {
      color: var(--title-color);
      padding: 12px 0px;
    }
    header.style-5 .main-menu ul li ul.sub-menu > li a:hover {
      color: var(--primary-color1);
      margin-left: 10px;
    }
    header.style-5 .main-menu ul li ul.sub-menu > li a.active {
      color: var(--primary-color1);
    }
    header.style-5 .main-menu ul li ul.sub-menu > li i {
      color: var(--primary-color1);
      right: -13px;
    }
    header.style-5 .main-menu ul li .bi {
      top: 8px;
      font-size: 20px;
      color: var(--title-color);
    }
  } */
`;
