var app = angular.module("pilas", []);

app.controller("pilasController", pilasController);

function pilasController($scope, $http) {

  $scope.categories = []
  $scope.launch = []
  $scope.category = ''
  $scope.query = ''

  
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


  $scope.listCategories()
  $scope.listLaunch()
}