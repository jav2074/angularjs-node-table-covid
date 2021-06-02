app.controller('myCtrl2', function($scope)
{
    //======================================================================================
    //======================================================================================
    $scope.arrayCirculoQuintas = [
        {'id': 0, 'order': 0, 'name': 'Do'},
        {'id': 1, 'order': 7, 'name': 'Sol'},
        {'id': 2, 'order': 2, 'name': 'Re'},
        {'id': 3, 'order': 9, 'name': 'La'},
        {'id': 4, 'order': 4, 'name': 'Mi'},
        {'id': 5, 'order': 11, 'name': 'Si'},
        {'id': 6, 'order': 6, 'name': 'Fa#/Solb'},
        {'id': 7, 'order': 1, 'name': 'Reb'},
        {'id': 8, 'order': 8, 'name': 'Lab'},
        {'id': 9, 'order': 3, 'name': 'Mib'},
        {'id': 10, 'order': 10, 'name': 'Sib'},
        {'id': 11, 'order': 5, 'name': 'Fa'},
    ];
    $scope.selectedEscala = {};   // default Do
    $scope.selectedMayorMenor = 0;  // 0 = Mayor, -3 = Menor 
    //--------------------------------------------------------------------------------------
    $scope.changeEscala = function()
    {
        // debugger;
        console.log($scope.selectedEscala);
        rotate($scope.selectedEscala.id*30);
    };
    //--------------------------------------------------------------------------------------
    function rotate(value)
    {
        document.getElementById('imgArrows').style.webkitTransform="rotate(" + value + "deg)";
        document.getElementById('imgArrows').style.msTransform="rotate(" + value + "deg)";
        document.getElementById('imgArrows').style.transform="rotate(" + value + "deg)";
    };
    //======================================================================================
    //======================================================================================
});