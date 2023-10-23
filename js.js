fetch('data.json')
  .then((response) => response.json())
  .then((data) => {
    console.log(data.title); // Juan
    console.log(data.edad); // 30
    console.log(data.ciudad); // Ejemplo
  })
  .catch((error) => {
    console.error('Error al cargar datos JSON:', error);
  });
