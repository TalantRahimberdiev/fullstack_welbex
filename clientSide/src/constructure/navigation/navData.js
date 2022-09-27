
const navData = [
   { label: 'FAQ', link: 'FAQ' },
   { label: 'Добавить', link: 'add' },
   {
      label: 'Сортировка',
      children: [
         { label: 'по названию', link: 'title' },
         { label: 'по количеству', link: 'quantity' },
         { label: 'по расстоянию', link: 'distance' },
      ]
   },
   { label: 'Фильтр', link: 'filter' },
]

export default navData