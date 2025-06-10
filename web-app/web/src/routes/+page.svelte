<script>
  import { DarkMode, P, Card, Navbar, NavBrand, NavHamburger, NavUl, NavLi, MegaMenu, Footer, FooterCopyright, FooterLinkGroup, FooterLink } from "flowbite-svelte";
  import favicon from "../static/favicon.png?url"
  const time = new Date();
</script>
<DarkMode  class="text-primary-500 dark:text-primary-600 border dark:border-gray-900 absolute right-0 bottom-18"/>
<Navbar>
  <NavBrand href="/">
    <img src={favicon} class="me-3 h-6 sm:h-9" alt="pIMS Logo" />
    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Pradaya</span>
  </NavBrand>
  <NavHamburger />
  <NavUl>
    <NavLi href="/">Home</NavLi>
    <NavLi href="/docs">Documentation</NavLi>
    <NavLi href="https://github.com/Upcycle-Network/pradaya-ims">GitHub</NavLi>
    <NavLi href="/web">Web Interface</NavLi>
  </NavUl>
</Navbar>

<P size="7xl" height="normal" class="max-w-full text-center" weight="semibold">Pradaya Inventory Management System</P>
<P size="3xl" height="normal" class=" text-center " weight="semibold">Open source tables for all of your thingamabobs.</P>
<br>
<div class="flex justify-center-safe">
<div class="p-4">
  <Card class="p-4 sm:p-6 md:p-8">
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-950 dark:text-white">Simple but versatile.</h5>
  <p class="leading-tight font-normal text-gray-700 dark:text-gray-400">Keep a track of your items: from tools and components to consummables and food.</p>
  <br>
  <p class="font-normal text-gray-700 dark:text-gray-400">Manage your inventory seamlessly and never forget expiry dates.</p>
  </Card>
  </div>
  <div class="p-4">
  <Card class="p-4 sm:p-6 md:p-8">
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-950 dark:text-white">Flexible and Responsive Web Interface</h5>
  <p class="leading-tight font-normal text-gray-700 dark:text-gray-400">The web app is written in Svelte and uses Bun for backend. You can choose between SQLite and MySQL for your database. It's fast, responsive and robust.</p>
  </Card>
  </div>
  <div class="p-4 self-center">
  <Card class="p-4 sm:p-6 md:p-8">
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-950 dark:text-white ">Free, Open Source and Cross-Platform</h5>
  <p class="leading-tight font-normal text-gray-700 dark:text-gray-400">The project is free to use and open source. You can also access your inventory through multiple platforms like Windows, Linux, Android, MacOS and iOS.</p>
  </Card>
  </div>
</div>
<Footer class="absolute start-0 bottom-0 z-20 w-full border-t border-gray-200 bg-white p-4 shadow-sm md:flex md:items-center md:justify-between md:p-6 dark:border-gray-600 dark:bg-gray-800">
  <FooterCopyright href="https://github.com/Upcycle-Network" by="Upcycle Network" year={time.getUTCFullYear()} copyrightMessage=""/>
  <FooterLinkGroup class="mt-3 flex flex-wrap items-center text-sm text-gray-500 sm:mt-0 dark:text-gray-400">
    <FooterLink href="/">About</FooterLink>
    <FooterLink href="/docs">Documentation</FooterLink>
    <FooterLink href="/web">Web Interface</FooterLink>
  </FooterLinkGroup>
</Footer>