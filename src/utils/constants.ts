import { IconType } from "../components/Navbar";

export enum COLORS {
  SEA_GREEN = "#63b6af",
  GRAY = "#999",
  LIGHT_GRAY = "#a6a6a6",
  DARK_GRAY = "#4a4a4a",
  PARROT_GREEN = "#bee58b",
  RED = "#e0666c",
  ICON_GRAY = "#686868",
  MILD_SEA_GREEN = "#f9fbfb",
  MILD_GRAY = "#fefefe"
}

export enum TEXT {
  TITLE_HEADING = "Got bulk or almost similar orders ? Fill the order brief in and excel sheet",
  TITLE_DESCRIPTION = "If you're wondering about an wasy way to place orders in large numbers, we provide a way customized for that. Download our excel sheet, and fill the order brief in prescribed format and submit. In case you need any help, ",
  TITLE_DESCRIPTION_UNDERLINE = "we are just a click away to assist you in placing your order",
  TILE_DESCRIPTION = "Typically 400-450 words, an e-bbok is prefect for your target audience ranging from prospective customers to users"
}

export enum FOOTER {
  COPYRIGHT = "Copyright @ 2019 White Panda Media Pvt. Ltd.",
  RIGHTS = "All rights reserved"
}

export const tileData: { heading: string; price: number }[] = [
  {
    heading: "Blog / Article",
    price: 500
  },
  {
    heading: "Newsletter / E-mailer",
    price: 1000
  },
  {
    heading: "Whitepaper",
    price: 2000
  },
  {
    heading: "e-book",
    price: 1000
  },
  {
    heading: "Report / Guide",
    price: 1000
  },
  {
    heading: "Product Description",
    price: 1000
  },
  {
    heading: "Website Content",
    price: 1000
  },
  {
    heading: "Video Script",
    price: 1000
  },
  {
    heading: "Company Profile / Brochure",
    price: 2000
  },
  {
    heading: "Press Release",
    price: 2000
  }
];

export const icons: IconType[] = ["grid", "search", "store"];
