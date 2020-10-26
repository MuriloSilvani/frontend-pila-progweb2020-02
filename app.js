var app = angular.module("pilas", []);

app.controller("pilasController", pilasController);

function pilasController($scope, $http) {

  $scope.categories = []
  $scope.launch = []
  $scope.category = ''
  $scope.query = ''

  $scope.id_category = ''
  $scope.type = ''
  $scope.description = ''
  $scope.value = ''

  $scope.update = ''

  
  $scope.listCategories = () => {
    $http.get('back/category_list.php')
      .error((e) => {
        alert('Erro no back')
        console.log(e)
      })
      .success((res) => {
        $scope.categories = res
      })
  }
  $scope.listLaunch = () => {
    $http.get('back/launch_list.php')
      .error((e) => {
        alert('Erro no back')
        console.log(e)
      })
      .success((res) => {
        $scope.launch = res
      })
  }


  $scope.saveCategory = () => {
    $http.post('back/category_insert.php?name=' + $scope.category)
      .error((e) => {
        alert('Erro no back')
        console.log(e)
      })
      .success((res) => {
        res == 0 ?
          alert('erro salvando cat')
        : $scope.listCategories()
      })
  }
  $scope.saveLaunch = () => {
    $http.post(`back/launch_insert.php?id_category=${$scope.id_category}&type=${$scope.type}&description=${$scope.description}&value=${$scope.value}`)
      .error((e) => {
        alert('Erro no back')
        console.log(e)
      })
      .success((res) => {
        res == 0 ?
          alert('erro salvando launch')
        : $scope.listLaunch()
      })
  }
  $scope.deleteLaunch = (id) => {
    $http.delete(`back/launch_delete.php?id=${id}`)
      .error((e) => {
        alert('Erro no back')
        console.log(e)
      })
      .success((res) => {
        res == 0 ?
          alert('erro deletando launch')
        : $scope.listLaunch()
      })
  }
  $scope.updateLaunch = () => {
    $http.delete(`back/launch_update.php?id=${$scope.update._id}&description=${$scope.update.description}&value=${$scope.update.value}`)
      .error((e) => {
        alert('Erro no back')
        console.log(e)
      })
      .success((res) => {
        res == 0 ?
          alert('erro editando launch')
        : $scope.listLaunch()
      })
  }
  $scope.loadLaunch = (launch) => {
    $scope.update = launch
  }


  $scope.listCategories()
  $scope.listLaunch()
}