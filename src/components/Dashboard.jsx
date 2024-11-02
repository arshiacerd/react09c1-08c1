
function Dashboard() {
  const fruits = [
    { name: "apple", price: 100, img: " 🍎" },
    { name: "orange", price: 45, img: "🍊" },
    { name: "banana", price: 30, img: " 🍌" },
    { name: "guava", price: 200, img: " ♥" },
  ];
  console.log(fruits);
  return (
    <>
      <ul>
        {/* {fruits.map(function (fruit) {
          return <li>{fruit.name}  {fruit.price}  {fruit.img}</li>;
        })} */}

        {/* {fruits.map((fruit, index) => (
          <li key={index}>
            {fruit.name} {fruit.price} {fruit.img}
          </li>
        ))} */}
        {
            fruits.filter(fruit=>fruit.price<100).map((data,index)=><li key={index}>
                {data.name} {data.price} {data.img}
              </li>)
        }
      </ul>
    </>
  );
}

export default Dashboard;
