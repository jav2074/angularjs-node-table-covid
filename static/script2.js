app.controller('myCtrl2', function($scope)
{
    //======================================================================================
    //======================================================================================
    $scope.arrayCirculoQuintas = [
        {'id': 0,   'order': 0,     'name': 'Do',       'ciph': 'C'},
        {'id': 1,   'order': 7,     'name': 'Sol',      'ciph': 'G'},
        {'id': 2,   'order': 2,     'name': 'Re',       'ciph': 'D'},
        {'id': 3,   'order': 9,     'name': 'La',       'ciph': 'A'},
        {'id': 4,   'order': 4,     'name': 'Mi',       'ciph': 'E'},
        {'id': 5,   'order': 11,    'name': 'Si',       'ciph': 'B'},
        {'id': 6,   'order': 6,     'name': 'Fa#/Solb', 'ciph': 'F#/Gb'},
        {'id': 7,   'order': 1,     'name': 'Do#/Reb',  'ciph': 'C#/Db'},
        {'id': 8,   'order': 8,     'name': 'Lab',      'ciph': 'Ab'},
        {'id': 9,   'order': 3,     'name': 'Mib',      'ciph': 'Eb'},
        {'id': 10,  'order': 10,    'name': 'Sib',      'ciph': 'Bb'},
        {'id': 11,  'order': 5,     'name': 'Fa',       'ciph': 'F'},
    ];
    // $scope.selectedEscala = $scope.arrayCirculoQuintas[0];   // default Do
    $scope.selectedMayorMenor = 0;  // 0 = Mayor, -3 = Menor 
    //--------------------------------------------------------------------------------------
    $scope.changeEscala = function()
    {
        // debugger;
        // console.log($scope.selectedEscala);
        var id = $scope.selectedEscala.id;
        rotate(id*30);
        var aux = $scope.arrayCirculoQuintas[id].ciph + " <--> " + $scope.arrayCirculoQuintas[inc(id,1)].ciph + "\n";
        aux += $scope.arrayCirculoQuintas[dec(id,1)].ciph + " <--> " + $scope.arrayCirculoQuintas[inc(id,2)].ciph + "\n";
        aux += $scope.arrayCirculoQuintas[dec(id,2)].ciph + " <--> " + $scope.arrayCirculoQuintas[inc(id,3)].ciph + "\n";
        aux += $scope.arrayCirculoQuintas[dec(id,3)].ciph + " <--> " + $scope.arrayCirculoQuintas[inc(id,4)].ciph + "\n";
        aux += $scope.arrayCirculoQuintas[dec(id,4)].ciph + " <--> " + $scope.arrayCirculoQuintas[inc(id,5)].ciph + "\n";
        aux += $scope.arrayCirculoQuintas[dec(id,5)].ciph + " <--> " + $scope.arrayCirculoQuintas[inc(id,6)].ciph + "\n";
        $scope.Notas = aux;
    };
    //--------------------------------------------------------------------------------------
    function inc(value, plus)
    {
        var limit = 11;
        value += plus;
        if((value)>limit) value -= (limit+1);
        return value;
    };
    //--------------------------------------------------------------------------------------
    function dec(value, minus)
    {
        var limit = 11;
        value -= minus;
        if((value)<0) value += (limit+1);
        return value;
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