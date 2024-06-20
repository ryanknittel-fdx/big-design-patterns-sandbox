export interface Category {
  id: number;
  value: number;
  label: string;
  children?: Category[];
}
const Categories = [
  { id: 0, value: 0, label: "Shop all" },
  { id: 1, value: 1, label: "New" },
  {
    id: 2,
    value: 2,
    label: "Accessories",
    children: [
      { id: 3, value: 3, label: "Mugs" },
      { id: 4, value: 4, label: "Stickers" },
      { id: 5, value: 5, label: "Duffle Bags" },
      { id: 6, value: 6, label: "Backpacks" },
    ],
  },
  { id: 7, value: 7, label: "Classics" },
  { id: 8, value: 8, label: "Clearance" },
  {
    id: 9,
    value: 9,
    label: "Hats",
    children: [
      { id: 10, value: 10, label: "Baseball caps" },
      { id: 11, value: 11, label: "Beanies" },
      { id: 12, value: 12, label: "Snapbacks" },
    ],
  },
  {
    id: 13,
    value: 13,
    label: "Tops",
    children: [
      { id: 14, value: 14, label: "Tanks" },
      { id: 15, value: 15, label: "Shirts" },
      { id: 16, value: 16, label: "Hoodies" },
    ],
  },
  { id: 17, value: 17, label: "ERG Merch" },
];

export default Categories;
