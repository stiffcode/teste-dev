
const API = 'http://127.0.0.1:8000/api/'

class Car {

    constructor() {
        console.log('carro criado');
    }

    list() {
       
        fetch(API + 'cars', {
            method: 'get',
           // body: new FormData(document.querySelector('#my-form'))
        }).then(function(response){
            response.json().then(function(data){
                data.data.forEach(car => {

                    let tbody = document.querySelector('#table-car tbody')
                    let node = document.createElement('tr');

                    let th = document.createElement('th');
                    th.append(car.id);

                    let td1 = document.createElement('td');
                    td1.append(car.brand[0].name);

                    let td2 = document.createElement('td');
                    td2.append(car.model);

                    let td3 = document.createElement('td');
                    td3.append(car.year);
                    let td_options = document.createElement('td');
                    td_options.classList.add('text-right');

                    let btn_edit = document.createElement('button');
                    btn_edit.classList.add('btn', 'btn-success', 'mr-3', 'btn-edit');
                    btn_edit.setAttribute('onclick', `edit(this, ${car.id})`);
                    btn_edit.append('Edit');

                    let btn_show = document.createElement('button');
                    btn_show.classList.add('btn', 'btn-info', 'mr-3');
                    btn_show.setAttribute('onclick', `show(this, ${car.id})`);
                    btn_show.append('Show');

                    let btn_delete = document.createElement('button');
                    btn_delete.classList.add('btn', 'btn-danger', 'mr-3');
                    btn_delete.setAttribute('onclick', `remove(this, ${car.id})`);
                    btn_delete.append('Delete');
                    
                    td_options.append(btn_edit, btn_show, btn_delete);
                    node.append(th, td1, td2, td3, td_options );

                    tbody.appendChild(node);
                    
                });
            

            })
            
            // trate a resposta aqui
        }).catch(function(err) {
            console.log(err);
        });
        
    }

    create(formData) {
        console.log('car created');
        
        fetch(API + 'cars', {
            method: 'post',
            headers: new Headers({
                "Content-Type": "application/json",
                //"X-Requested-With": "XMLHttpRequest",
              }),
            body: formData
        }).then(function(response){
            console.log(response);
            /*
            response.json().then(function(data){
                console.log(data);
            });*/
        }).catch(function(err) {
            console.log(err);
        });
        
    }

    update() {
        console.log('car updated');
    }

    exportXLS() {
        console.log('car xls');
    }

    addEvents() {
        console.log(document.querySelector('.btn-edit'));

    }
}

var car = new Car();

car.list();

function home(element) { 
    document.querySelector('#form').classList.add('hide');
    document.querySelector('#list-car').classList.remove('hide');
    document.querySelector('#show-car').classList.add('hide');
}

function add(element) {
    document.querySelector('#form').classList.remove('hide');
    document.querySelector('#list-car').classList.add('hide');
}

function edit(element, id) {
    console.log(id);
    document.querySelector('#form').classList.remove('hide');
    document.querySelector('#list-car').classList.add('hide');
}

function show(element, id) {
    document.querySelector('#form').classList.add('hide');
    document.querySelector('#list-car').classList.add('hide');
    document.querySelector('#show-car').classList.remove('hide');
}


function remove(element, id) {
    console.log(id);
}


function save(form) {
    let formData = new FormData(form);
    if (formData.get('id')) {
        
        console.log(formData.get('id'))
    } else {
        car.create(formData);
    }
    return false;
}
