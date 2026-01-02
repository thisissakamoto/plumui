// import type { StoryDefault } from "@ladle/react";
// import { For } from "../for";
// import { Icon } from "../icon";
// import { Menu } from ".";

// export default {
//   title: "Components/Menu",
// } satisfies StoryDefault

// const items = [
//   {
//     icon_name: "ShoppingBagIcon",
//     label: "Shop",
//     value: "shop",
//   },
//   {
//     icon_name: "MoneyWavyIcon",
//     label: "Billing",
//     value: "billing",
//   },
//   {
//     icon_name: "GearFineIcon",
//     label: "Settings",
//     value: "settings",
//   },

//   {
//     icon_name: "PaperclipIcon",
//     label: "Docs",
//     value: "docs",
//   },
// ];



// export const Base = () => {
//   return (
//     <For each={items} spaceY="2">
//       {(item: (typeof items)[number]) => (
//         <Menu.Item key={item.value} value={item.value}>
//           <Menu.ItemIndicator>
//             <Icon name={item.icon_name as any} boxSize="20">
//           </Menu.ItemIndicator>
//           <Menu.ItemText flex="1">{item.label}</Menu.ItemText>
//         </Menu.Item>
//       )}
//     </For>
//   );
// };
