const characters = [
  { id: 1, name: "Arya", house: "Stark" },
  { id: 4, name: "Sansa", house: "Stark" },
  { id: 16, name: "Eddard", house: "Stark" },
  { id: 17, name: "Catelyn", house: "Stark" },
  { id: 20, name: "Robb", house: "Stark" },
  { id: 28, name: "Rickon", house: "Stark" },
  { id: 40, name: "Jaime", house: "Lannister" },
  { id: 41, name: "Cersei", house: "Lannister" },
  { id: 42, name: "Tyrion", house: "Lannister" },
  { id: 50, name: "Tywin", house: "Lannister" },
  { id: 53, name: "Kevan", house: "Lannister" },
  { id: 75, name: "Daenerys", house: "Targaryen" },
  { id: 77, name: "Viserys", house: "Targaryen" },
  { id: 81, name: "Rhaegar", house: "Targaryen" },
  { id: 83, name: "Theon", house: "Greyjoy" },
  { id: 84, name: "Yara", house: "Greyjoy" },
  { id: 87, name: "Davos", house: "Seaworth" },
  { id: 88, name: "Brienne", house: "Tarth" },
];

const mapNameFamily = (characters) => {
  const people = characters.map(
    (item) => `${item.name}, of House ${item.house}`
  );

  return people;
};

const filterFamily = (characters, house) => {
  const starks = characters.filter((item) => item.house === house);
  return starks;
};

const reduceHouses = (characters) => {
  const houses = characters.reduce((total, item) => {
    total.hasOwnProperty(item.house)
      ? total[item.house]++
      : (total[item.house] = 1);

    return total;
  }, {});

  return houses;
};

console.log(mapNameFamily(characters));

console.log(filterFamily(characters, "Stark"));

console.log(filterFamily(characters, "Greyjoy"));

console.log(reduceHouses(characters));
