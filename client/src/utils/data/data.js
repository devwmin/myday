const data = [
   {
      id: 0,
      longitude: 14134621.428594515,
      latitude: 4517358.857898443,
      text: "very cool place",
   },
   {
      id: 1,
      longitude: 14131501.912154328,
      latitude: 4515507.745215407,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, adipisci! Nesciunt repellendus vero veniam illo!",
   },
   {
      id: 2,
      longitude: 14130875.243808664,
      latitude: 4516104.284585974,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At dolorum obcaecati corporis debitis tempore. Illo amet eveniet accusamus veniam. Necessitatibus architecto aliquid iure temporibus deleniti fugit expedita recusandae maxime, voluptate unde voluptatibus labore tempora suscipit reprehenderit quaerat facilis, dicta nemo quod voluptatem ea adipisci! Eligendi quaerat quos repellat corrupti accusamus!",
   },
   {
      id: 3,
      longitude: 14131849.636572547,
      latitude: 4517366.194607797,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At dolorum obcaecati corporis debitis tempore. Illo amet eveniet accusamus veniam. Necessitatibus architecto aliquid iure temporibus deleniti fugit expedita recusandae maxime, voluptate unde voluptatibus labore tempora suscipit reprehenderit quaerat facilis, dicta nemo quod voluptatem ea adipisci! Eligendi quaerat quos repellat corrupti accusamus!",
   },
   {
      id: 4,
      longitude: 14133328.420841062,
      latitude: 4518972.261470682,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At dolorum obcaecati corporis debitis tempore. Illo amet eveniet accusamus veniam. Necessitatibus architecto aliquid iure temporibus deleniti fugit expedita recusandae maxime, voluptate unde voluptatibus labore tempora suscipit reprehenderit quaerat facilis, dicta nemo quod voluptatem ea adipisci! Eligendi quaerat quos repellat corrupti accusamus!",
   },
   {
      id: 5,
      longitude: 14135034.120421302,
      latitude: 4520122.293991273,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At dolorum obcaecati corporis debitis tempore. Illo amet eveniet accusamus veniam. Necessitatibus architecto aliquid iure temporibus deleniti fugit expedita recusandae maxime, voluptate unde voluptatibus labore tempora suscipit reprehenderit quaerat facilis, dicta nemo quod voluptatem ea adipisci! Eligendi quaerat quos repellat corrupti accusamus!",
   },
   {
      id: 6,
      longitude: 14135902.593751393,
      latitude: 4521137.214118072,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At dolorum obcaecati corporis debitis tempore. Illo amet eveniet accusamus veniam. Necessitatibus architecto aliquid iure temporibus deleniti fugit expedita recusandae maxime, voluptate unde voluptatibus labore tempora suscipit reprehenderit quaerat facilis, dicta nemo quod voluptatem ea adipisci! Eligendi quaerat quos repellat corrupti accusamus!",
   },
   {
      id: 7,
      longitude: 14136699.554842403,
      latitude: 4520515.567016757,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At dolorum obcaecati corporis debitis tempore. Illo amet eveniet accusamus veniam. Necessitatibus architecto aliquid iure temporibus deleniti fugit expedita recusandae maxime, voluptate unde voluptatibus labore tempora suscipit reprehenderit quaerat facilis, dicta nemo quod voluptatem ea adipisci! Eligendi quaerat quos repellat corrupti accusamus!",
   },
   {
      id: 8,
      longitude: 14137611.362182327,
      latitude: 4521104.299838436,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At dolorum obcaecati corporis debitis tempore. Illo amet eveniet accusamus veniam. Necessitatibus architecto aliquid iure temporibus deleniti fugit expedita recusandae maxime, voluptate unde voluptatibus labore tempora suscipit reprehenderit quaerat facilis, dicta nemo quod voluptatem ea adipisci! Eligendi quaerat quos repellat corrupti accusamus!",
   },
   {
      id: 9,
      longitude: 14142154.537733965,
      latitude: 4515701.53058387,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At dolorum obcaecati corporis debitis tempore. Illo amet eveniet accusamus veniam. Necessitatibus architecto aliquid iure temporibus deleniti fugit expedita recusandae maxime, voluptate unde voluptatibus labore tempora suscipit reprehenderit quaerat facilis, dicta nemo quod voluptatem ea adipisci! Eligendi quaerat quos repellat corrupti accusamus!",
   },
   {
      id: 10,
      longitude: 14144759.822601384,
      latitude: 4502213.937361525,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At dolorum obcaecati corporis debitis tempore. Illo amet eveniet accusamus veniam. Necessitatibus architecto aliquid iure temporibus deleniti fugit expedita recusandae maxime, voluptate unde voluptatibus labore tempora suscipit reprehenderit quaerat facilis, dicta nemo quod voluptatem ea adipisci! Eligendi quaerat quos repellat corrupti accusamus!",
   },
   {
      id: 11,
      longitude: 14149585.553240348,
      latitude: 4488877.487967305,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At dolorum obcaecati corporis debitis tempore. Illo amet eveniet accusamus veniam. Necessitatibus architecto aliquid iure temporibus deleniti fugit expedita recusandae maxime, voluptate unde voluptatibus labore tempora suscipit reprehenderit quaerat facilis, dicta nemo quod voluptatem ea adipisci! Eligendi quaerat quos repellat corrupti accusamus!",
   },
   {
      id: 12,
      longitude: 14367454.83835977,
      latitude: 4191505.0067429915,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At dolorum obcaecati corporis debitis tempore. Illo amet eveniet accusamus veniam. Necessitatibus architecto aliquid iure temporibus deleniti fugit expedita recusandae maxime, voluptate unde voluptatibus labore tempora suscipit reprehenderit quaerat facilis, dicta nemo quod voluptatem ea adipisci! Eligendi quaerat quos repellat corrupti accusamus!",
   },
];
export const getTestData = () => data;
export const insertData = (rating, longitude, latitude, text, imgFile) => {
   data.push({
      id: data.length,
      rating,
      longitude,
      latitude,
      text,
      imgFile,
   });
};
