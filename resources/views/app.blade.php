<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        
        <title>Stiffcode-dev</title>

        <!-- Fonts -->
        <link href="{{ url('css/app.css') }}" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css">
        <link href="{{ url('css/style.css') }}" rel="stylesheet" type="text/css">
    </head>
    <body>
       <div id="app">
            
        <header>

            <nav class="navbar navbar-expand-lg navbar-light bg-primary">
                <a class="navbar-brand" href="#">Stiffcode</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
              
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul class="navbar-nav mr-auto">
                        <li onclick="home()" class="nav-item active">
                            <a class="nav-link text-light" href="#">Home </a>
                        </li>
                        
                        <li onclick="add()" class="nav-item">
                            <a class="nav-link text-light" href="#">New</a>
                        </li>
                        
                        <li class="nav-item">
                            <a onclick="car.exportXLS()" class="nav-link text-light" href="#" >Export XLS</a>
                        </li>
                      </ul>
                  
                </div>
            </nav>
            <div class="info"></div>
        </header>
    
            <div class="content container">
                <!--section list-->
                <section class="mt-5 p-2" id="list-car">
                
                    <h1>List Cars</h1>
                    
                    <div class="table-responsive" >

                        <table class="table table-hover table-curved table-striped" id="table-car">
                            <thead class="bg-primary">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Brand</th>
                                    <th scope="col">Model</th>
                                    <th scope="col">Year</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                
                            </tbody>
                        </table>

                    </div>
    
                    <button onclick="add(this)" class="btn btn-primary btn-new">New Car</button>
                
                </section>
                
                
                <!--section form-->
                <section class="mt-5 hide" id="form">
    
                    <h1>New Car</h1>
    
                    <form id="form-car" onsubmit="return save(this);">
                        <input type="hidden" name="id" id="car_id">
    
                        <div class="form-group">
                            <label class="badge badge-primary" for="exampleFormControlSelect1">Brand</label>
                            <select class="form-control" id="brand_id" name="brand_id">
                                <option value="" >Selected a brand</option>
                            </select>
                        </div>
    
                        <div class="form-group">
                            <label class="badge badge-primary" for="model">Model</label>
                            <input type="text" class="form-control" id="model" name="model" placeholder="Model">
                        </div>
    
                        <div class="form-group">
                            <label class="badge badge-primary" for="model">Year</label>
                            <input type="number" class="form-control" id="year" name="year" placeholder="Year">
                        </div>

                        <div class="form-group">
                            <ul class="errors-list">
                            </ul>
                        </div>

                        <button type="submit" class="btn btn-primary">Save</button>
                        <a onclick="home(this)" href="#">back list</a>
    
                    </form>
    
                </section>
    
                <!--show-->
                <section class='mt-5 hide' id="show-car">
    
                    <h1>Show Car</h1>
    
                    <div class="card mb-2">

                        <div class="card-body">
                            <h5 class="card-subtitle mb-3 text-muted show-model"></h5>
                            <h5 class="card-subtitle mb-3 text-muted show-brand"></h5>
                            <h5 class="card-subtitle text-muted show-year"></h5>
                        </div>
                        
                    </div>
                    <a onclick="home(this)" class="mt-5 mb-5" href="#">back list</a>
                </section>
            
            </div>
            
            <footer class="mt-5">
                <div class="card">
                    <div class="card-header text-center">
                            &copy Savio viana
                    </div>
                </div>
            </footer>

       </div>


       <!-- Modal -->
        <div class="modal fade" id="modalDeleteCar" tabindex="-1" role="dialog" aria-labelledby="modalDeleteCarTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title text-danger" id="modalDeleteCar">Are you sure you want to delete this car?</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <input id="modal_car_id" type="hidden">
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                    <button onclick="remove(this)" type="button" class="btn btn-danger">Yes</button>
                    </div>
                </div>
            </div>
        </div>

    </body>

    <script src="{{ url('js/app.js') }}"></script>
    <script src="https://cdn.jsdelivr.net/npm/alasql@0.4"></script>
    <script src="{{ url('js/config.js') }}"></script>
    <script src="{{ url('js/brand.js') }}"></script>
    <script src="{{ url('js/car.js') }}"></script>
    <script src="{{ url('js/main.js') }}"></script>
    
    <script> 
        $('#modalDeleteCar').on('show.bs.modal', function (event) {

            let button = $(event.relatedTarget) 
            let id = button.data('id') 
            
            let modal = $(this)
            modal.find('input').val(id)
        })
    </script>
</html>