## Задание #1

> Напишите и типизируйте функцию, рассчитывающую стоимость с учетом скидки и рассрочки на заданное количество месяцев:

```javascript
const totalPrice = ({ price, discount, isInstallment, months }) => {
  // Your code here...
};

const price = totalPrice({
  price: 100000,
  discount: 25,
  isInstallment: true,
  months: 12,
});
console.log(price); // 6250
```

---

---

## Задание #2

> Напишите и типизируйте функцию, нормализующую входящие данные:

```javascript
const posts = [
  {
    id: "62e69d5a5458aac0ed320b35",
    title: "id labore ex et quam laborum",
    body: "laudantium enim quasi est quidem magnam voluptate ipsam eostempora quo necessitatibusdolor quam autem quasireiciendis et nam sapiente accusantium",
  },
  ...{
    id: "62e69d5a5458aac0ed320b25",
    title: "repellat consequatur praesentium vel minus molestias voluptatum",
    body: "maiores sed dolores similique labore et inventore etquasi temporibus esse sunt id eteos voluptatem aliquamratione corporis molestiae mollitia quia et magnam dolor",
  },
];

const normalizeData = (unnormalizedData) => {
  // Your code here...
};

console.log(normalizeData(posts));
/**
 * {
 *    byId: {
 *      62e69d5a5458aac0ed320b35: { id: '...', title: '...', body: '...' },
 *      62e69d5a5458aac0ed320b1c: { id: '...', title: '...', body: '...' },
 *      ...
 *    },
 *    allIds: ['62e69d5a5458aac0ed320b35', '62e69d5a5458aac0ed320b1c', ...]
 * }
 */
```

---

---

## Задание #3

> Напишите и типизируйте функцию, выполняющую запрос за данными по переданному URL. Выведите их в **консоль** в формате: **_"ID: id, Email: email"_**.

```javascript
const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

const getData = (url) => {
  // Your code here...
};

getData(COMMENTS_URL).then((data) => {
  // Your code here...
});

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
```

---

---
