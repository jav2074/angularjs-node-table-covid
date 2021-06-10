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
        var order = $scope.selectedScale.order;
        rotate(id*30);

        $scope.notes = [];
        for (var i=0; i<12; i++)
        {
            var aux = {
                'order': dec($scope.arrayCirculoQuintas[dec(id,i)].order, order),
                'origin': $scope.arrayCirculoQuintas[dec(id,i)], 
                'neg': $scope.arrayCirculoQuintas[inc(id,i+1)]
            };
            debugger;
            $scope.notes.push(aux);
        };
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
        {'id': 0,   'name': 'Triad'},
        {'id': 1,   'name': '7th'},
        {'id': 2,   'name': '9th'},
        {'id': 3,   'name': '11th'},
        {'id': 4,   'name': '13th'},
    ];
    $scope.chordsMayorScale = [
        {'id': 0, 'intervals':[0,4,7,11,2,5,9], 'name': 'Imaj7-9-11-13'},     // Imaj7-9-11-13
        {'id': 1, 'intervals':[2,5,9,0,4,7,11], 'name': 'IIm7-9-11-13'},      // IIm7-9-11-13
        {'id': 2, 'intervals':[4,7,11,2,5,9,0], 'name': 'IIIm7-9-11-13'},     // IIIm7-9-11-13
        {'id': 3, 'intervals':[5,9,0,4,7,11,2], 'name': 'IVmaj7-9-11-13'},    // IVmaj7-9-11-13
        {'id': 4, 'intervals':[7,11,2,5,9,0,4], 'name': 'V7-9-11-13'},        // V7-9-11-13
        {'id': 5, 'intervals':[9,0,4,7,11,2,5], 'name': 'VIm7-9-11-13'},      // VIm7-9-11-13
        {'id': 6, 'intervals':[11,2,5,9,0,4,7], 'name': 'VIIm7b5-9-11-13'},   // VIIm7b5-9-11-13
    ];
    //--------------------------------------------------------------------------------------
    $scope.changeChords = function()
    {
        // debugger;
        var id_chords = $scope.selectedChords.id;
        var id_scale = $scope.selectedScale.order;
        $scope.chords = [];
        for (var i=0; i<7; i++)
        {
            var auxArr = [];
            for (var j=0; j<(3+id_chords); j++)
            {
                // debugger;
                var order = inc(id_scale,$scope.chordsMayorScale[i].intervals[j]);
                var note = getFilteredByKey($scope.notes, 'origin', 'order', order);
                var aux = {
                    'origin': note[0].origin, 
                    'neg': note[0].neg,
                };
                auxArr.push(aux);
            };
            $scope.chords.push(auxArr);
        };
    };
    //---------------------------------------------------------------------------
	function getFilteredByKey(array, key, key1, value)
	{
        // debugger;
		return array.filter(function(e) {
			// return ( e[key].indexOf(value) !== -1 );
            // return ( e[key].includes(value) );
            return ( e[key][key1] == value );
		});
	};
    //--------------------------------------------------------------------------------------
    //======================================================================================
    //======================================================================================
});