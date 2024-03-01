const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

interface Data {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

const getData = (url: string): Promise<Data[]> => {
  return fetch(url)
    .then((dataRes) => dataRes.json())
    .then((data) => data as Data[]);
};

getData(COMMENTS_URL).then((data) => {
  data.forEach((item) => {
    console.log(`ID: ${item.id}, Email: ${item.email}`);
  });
});

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
