class Car {

    constructor() {
        
    }

    single(id) {

        return new Promise(function(resolve, reject) {
            fetch(API + 'cars/'+id, {
                method: 'get',
            }).then(function(response){
                response.json().then(function(data){
                   
                    if (data.success) {
                        resolve(data);
                    } else{
                        reject(data.message);
                    }
                    
                });
                
            });

        });
        
    }

    list() {
       
        fetch(API + 'cars', {
            method: 'get',
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
                    let edit_icon = document.createElement('i');
                    edit_icon.classList.add('far', 'fa-edit');
                    btn_edit.appendChild(edit_icon);

                    let btn_show = document.createElement('button');
                    btn_show.classList.add('btn', 'btn-info', 'mr-3');
                    btn_show.setAttribute('onclick', `show(this, ${car.id})`);
                    let show_icon = document.createElement('i');
                    show_icon.classList.add('far', 'fa-eye');
                    btn_show.appendChild(show_icon);

                    let btn_delete = document.createElement('button');
                    btn_delete.classList.add('btn', 'btn-danger', 'mr-3');
                    btn_delete.setAttribute('data-toggle','modal');
                    btn_delete.setAttribute('data-target', "#modalDeleteCar");
                    btn_delete.setAttribute('data-id', car.id)
                    let delete_icon = document.createElement('i');
                    delete_icon.classList.add('far', 'fa-trash-alt')
                    btn_delete.appendChild(delete_icon);
                    
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

    create(form) {

        return new Promise(function(resolve, reject) {
            fetch(API + 'cars', {
                method: 'post',
                headers: new Headers({
                    "X-Requested-With": "XMLHttpRequest",
                }),
                body: form
            }).then(function(response){
                response.json().then(function(data){
                    
                    let errors = data.errors;

                    if (errors) {

                        reject(errors);
                    
                    } else {

                        resolve(data);

                    }
                });
                
            });

        });
        
    }

    update(form) {

        return new Promise(function(resolve, reject) {
            fetch(API + 'cars/'+form.get('id'), {
                method: 'put',
                headers: new Headers({
                    "X-Requested-With": "XMLHttpRequest",
                    'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }),
                body: new URLSearchParams(form)
            }).then(function(response){
                response.json().then(function(data){
                    
                    let errors = data.errors;

                    if (errors) {

                        reject(errors);
                    
                    } else {

                        resolve(data);

                    }
                });
                
            });

        });
    }

    destroy(id) {

        return new Promise(function(resolve) {
            fetch(API + 'cars/'+id, {
                method: 'delete',
            }).then(function(response){
                response.json().then(function(data){
                   
                    resolve(data);
                    
                });
            });

        });
    }

    exportXLS() {
        
        fetch(API + 'cars', {
            method: 'get',
        }).then(function(response){
            response.json().then(function(data){
                
                var cars = [] ;

                data.data.forEach(car => {

                    cars.push ( 
                        {
                            "id": car.id,
                            "model": car.model,
                            "brand": car.brand[0].name,
                            "year": car.year
                        }
                    );
                    
                });
                
                alasql('SELECT * INTO XLS("cars.xls", {headers: true}) FROM ?', [cars]);

            })
        })
    }

}