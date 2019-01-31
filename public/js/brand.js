class Brand {

    setSelect(id=null) {

        fetch(API + 'brands', {
            method: 'get',
        }).then(function(response){
            response.json().then(function(data){

                let select = document.querySelector('#form-car').querySelector('#brand_id');

                data.data.forEach(brand => {

                    let option = document.createElement('option');
                    option.innerHTML = brand.name;
                    option.value = brand.id;
                    select.appendChild(option);

                    if (id && id == brand.id) {
                        option.selected = "selected"
                    }
                    
                });
            });
        }) 
    }
}