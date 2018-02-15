# Sugerencia comunicación Ajax
Endpoint con parametro name
https://putsreq.com/D9dXIKH2P0tMtCqDWxVl
Configurado
```
var msg = { 'alumnos': [
        {"nombre": 'mario', 'apellidos': 'ferrer nieto'},
        {"nombre": 'rafael', 'apellidos': 'carmona arrabal'},
        {"nombre": 'rafael', 'apellidos': 'carmona luque'},
        {"nombre": 'jose', 'apellidos': 'lucena otro'},
        {"nombre": 'soledad', 'apellidos': 'cruz moleon'},
        {"nombre": 'david', 'apellidos': 'mateo cuenca'},
        {"nombre": 'victoriano', 'apellidos': 'sevillano vega'},
        {"nombre": 'daniel', 'apellidos': 'gestino notario'},
        {"nombre": 'pablo', 'apellidos': 'leon alcaide'},
        {"nombre": 'rafael', 'apellidos': 'delgado peña'},
        {"nombre": 'test', 'apellidos': 'sin parametro'}
      ] };

if(request.params.name) {
    alt = msg.alumnos.filter(function(data){return (new RegExp(request.params.name).test(data.nombre) || new RegExp(request.params.name).test(data.apellidos) || new RegExp(request.params.name).test(data.nombre +' '+ data.apellidos)) && request.params.name.length > 0 }); //new RegExp(JSON.stringify(request.params.name)).test(data.nombre)
    msg = { 'alumnos': alt };
    if (alt.length === 0){
        response.status  = 204;
    }
}
response.body = msg;
```
