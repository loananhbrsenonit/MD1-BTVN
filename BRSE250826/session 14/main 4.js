const original = {
  name: 'Bob',
  age: 30,
  address: {
    city: 'Hà nội',
  },
};

// copy object
const copy = JSON.parse(JSON.stringify(original));

original.address.city = 'Hải phòng cháy';

// thay đổi thuộc tính name ở đối tượng copy
copy.name = 'Charlie';

// in cả 2 đối tượng
console.log(original);
console.log(copy);
