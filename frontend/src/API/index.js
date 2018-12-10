import axios from 'axios';

const hostname = 'http://localhost/nuevoPventa/backend/';

export function readProduct() {
  let listproduct = [];
  axios.get(`${hostname}pedidos/read.php`)
    .then(response => {
      const register = response.data.registro;
      register.forEach((data) => {
        listproduct.push(data)
      })

  })
  .catch(e => {
    console.log(e);
  })
  return listproduct;
}
