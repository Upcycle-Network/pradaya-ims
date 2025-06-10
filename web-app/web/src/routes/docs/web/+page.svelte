<script lang="ts">
  import { DarkMode, Sidebar, SidebarGroup, SidebarItem, SidebarButton, uiHelpers, SidebarBrand, CloseButton } from "flowbite-svelte";
   import { page } from "$app/state";
  let activeUrl = $state(page.url.pathname);
  const spanClass = "flex-1 ms-3 whitespace-nowrap";
  const activeClass = "flex items-center p-2 text-base font-normal text-primary-900 bg-primary-200 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-primary-100 dark:hover:bg-gray-700";
  const nonActiveClass = "flex items-center p-2 text-base font-normal text-primary-900 rounded-lg dark:text-white hover:bg-red-100 dark:hover:bg-red-700";
  const demoSidebarUi = uiHelpers();
  let isDemoOpen = $state(false);
  const closeDemoSidebar = demoSidebarUi.close;
  $effect(() => {
    isDemoOpen = demoSidebarUi.isOpen;
    activeUrl = page.url.pathname;
  });
  import favicon from "../../../static/favicon.png?url"
  var select = 0;
</script>
<DarkMode  class="text-primary-500 dark:text-primary-600 border dark:border-gray-900 absolute right-0 bottom-0"/>
<SidebarButton onclick={demoSidebarUi.toggle} class="mb-2" />
<div class="flex grow">
  <Sidebar {activeUrl} backdrop={false} isOpen={isDemoOpen} closeSidebar={closeDemoSidebar} params={{ x: -50, duration: 0 }} position="absolute" {activeClass} {nonActiveClass} class="z-50 h-full">
    <SidebarGroup borderClass="pt-4 mt-4 border-t border-gray-200 dark:border-primary-700">
       <SidebarBrand>
        <img src={favicon} alt="Pradaya" class="h-6 w-6" />
        <span class="ml-2 self-center text-xl font-semibold whitespace-nowrap dark:text-white">Pradaya IMS Docs</span>
      </SidebarBrand>
      <SidebarItem label="Getting Started" {spanClass} href="/docs/quickstart" active={false}>
      </SidebarItem>
      <SidebarItem label="Using the Web Interface" {spanClass} href="/docs/web" active>
      </SidebarItem>
    </SidebarGroup>
  </Sidebar>
</div>