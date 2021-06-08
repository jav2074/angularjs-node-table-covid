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
    //--------------------------------------------------------------------------------------
    $scope.changeScale = function()
    {
        // debugger;
        var id = $scope.selectedScale.id;
        rotate(id*30);

        $scope.notes = [];
        for (var i=0; i<12; i++)
        {
            var aux = {
                'origin': $scope.arrayCirculoQuintas[dec(id,i)], 
                'neg': $scope.arrayCirculoQuintas[inc(id,i+1)]
            };
            $scope.notes.push(aux);
        };

        console.log("notes");
        console.log($scope.notes);
        // $scope.changeChords();
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
    //--------------------------------------------------------------------------------------
    //--------------------------------------------------------------------------------------
    $scope.arrayChords = [
        {'id': 0,   'name': 'Triada'},
        {'id': 1,   'name': 'con 7°'},
        {'id': 2,   'name': 'con 9°'},
        {'id': 3,   'name': 'con 11°'},
        {'id': 4,   'name': 'con 13°'},
    ];
    $scope.chordsMayorScale = [
        {'id': 0, 'intervals':[0,4,7,11,14,17,21], 'name': 'Imaj7-9-11-13'},     // Imaj7-9-11-13
        {'id': 1, 'intervals':[0,3,7,10,14,17,20], 'name': 'IIm7-9-11-13'},      // IIm7-9-11-13
        {'id': 2, 'intervals':[0,3,7,10,14,17,20], 'name': 'IIIm7-9-11-13'},     // IIIm7-9-11-13
        {'id': 3, 'intervals':[0,4,7,11,14,17,21], 'name': 'IVmaj7-9-11-13'},    // IVmaj7-9-11-13
        {'id': 4, 'intervals':[0,4,7,10,14,17,20], 'name': 'V7-9-11-13'},        // V7-9-11-13
        {'id': 5, 'intervals':[0,3,7,10,14,17,20], 'name': 'VIm7-9-11-13'},      // VIm7-9-11-13
        {'id': 6, 'intervals':[0,3,6,10,14,17,20], 'name': 'VIIm7b5-9-11-13'},   // VIIm7b5-9-11-13
    ];
    //--------------------------------------------------------------------------------------
    $scope.changeChords = function()
    {
        // debugger;
        var id_chords = $scope.selectedChords.id;
        var id_scale = $scope.selectedScale.id;
        $scope.chords = [];
        // for (var i=0; i<7; i++)
        {
            for (var j=0; j<(3+id_chords); j++)
            {
                var id = inc(id_scale,j);
                var aux = {
                    'origin': $scope.notes[id].origin, 
                    'neg': $scope.notes[id].neg
                };
                $scope.chords.push(aux);
                // aux = {
                //     'origin': $scope.arrayCirculoQuintas[dec(id+4,i)], 
                //     'neg': $scope.arrayCirculoQuintas[inc(id+4,i+1)]
                // };
                // $scope.chords.push(aux);
                // aux = {
                //     'origin': $scope.arrayCirculoQuintas[dec(id+7,i)], 
                //     'neg': $scope.arrayCirculoQuintas[inc(id+7,i+1)]
                // };
                // $scope.chords.push(aux);
            };
        };
        console.log("chords");
        console.log($scope.chords);
    };
    //--------------------------------------------------------------------------------------
    //======================================================================================
    //======================================================================================
});