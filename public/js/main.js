
var car = new Car();
var brand = new Brand();

car.list();

function home(element) { 
    document.querySelector('#form').classList.add('hide');
    document.querySelector('#list-car').classList.remove('hide');
    document.querySelector('#show-car').classList.add('hide');
}

function add(element) {

    let form = document.querySelector('#form');
    form.querySelector('h1').innerHTML = "New Car"
    form.querySelector('#model').value = '';
    form.querySelector('#year').value = '';
    form.querySelector('#car_id').value = '';

    document.querySelector('#form').classList.remove('hide');
    document.querySelector('#list-car').classList.add('hide');
    brand.setSelect();
}

function edit(element, id) {
    
    car.single(id).then(function(data){
        
        let form = document.querySelector('#form');
        form.querySelector('h1').innerHTML = "Edit Car"
        form.querySelector('#model').value = data.data.model;
        form.querySelector('#year').value = data.data.year;
        form.querySelector('#car_id').value = data.data.id;

        document.querySelector('#form').classList.remove('hide');
        document.querySelector('#list-car').classList.add('hide');
        brand.setSelect(data.data.brand_id);
        
    }); 
}

function show(element, id) {

    car.single(id).then(function(data){
        
        let sectionShow = document.querySelector('#show-car');

        sectionShow.querySelector('.show-model').innerHTML = `<strong>Model: </strong> ${data.data.model}`;
        sectionShow.querySelector('.show-brand').innerHTML = `<strong>Brand: </strong> ${data.data.brand[0].name}`;
        sectionShow.querySelector('.show-year').innerHTML = `<strong>Year: </strong> ${data.data.year}`;

        document.querySelector('#form').classList.add('hide');
        document.querySelector('#list-car').classList.add('hide');
        document.querySelector('#show-car').classList.remove('hide');

    }).catch(function(err){
        myAlert(err, false);
    });

}


function remove(element) {

    let id = element.parentElement.parentElement.querySelector('#modal_car_id').value;

    car.destroy(id).then(function(data){
        myAlert(data.message);
        $('#modalDeleteCar').modal('hide');
        car.list();
        home();
    });
}


function save(form) {
    
    let formData = new FormData(form);

    if (formData.get('id')) {
        
        car.update(formData).then(function(data){

            if (data.success) {
                car.list();
                home();
                //alert(data.message);
                myAlert(data.message);
            }else{
                alert('Error');
            }            

        }).catch(function(errors){

            validatorCar(errors);

        });

    } else {
        
        car.create(formData).then(function(data){

            if (data.success) {
                car.list();
                home();
                myAlert(data.message);
            }else{
                alert('Error');
            }

        }).catch(function(errors){
            
            validatorCar(errors);
            
        })
    }
    return false;
}


function validatorCar(errors) {

    let elemt_err = document.querySelector('.errors-list');

    elemt_err.innerHTML = '';

    if (errors.brand_id) {
        let li = document.createElement('li');
        li.classList.add('text-danger');
        li.append(errors.brand_id);
        elemt_err.appendChild(li);
    }
    
    if (errors.model) {
        let li = document.createElement('li');
        li.classList.add('text-danger');
        li.append(errors.model);
        elemt_err.appendChild(li);
    }

    if (errors.year) {
        let li = document.createElement('li');
        li.classList.add('text-danger');
        li.append(errors.year);
        elemt_err.appendChild(li);
    }

}


function myAlert(msg, isSuccess=true) {
    
    let info = document.querySelector('.info');
    
    let classType  = (isSuccess) ? 'alert-success' : 'alert-danger';

    info.innerHTML = `
                <div class="alert ${classType} alert-dismissible fade show" role="alert">
                    ${msg}
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
    `

}