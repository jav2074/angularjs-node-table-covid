// https://documenter.getpostman.com/view/11144369/Szf6Z9B3?version=latest#184b39a9-3e42-40ff-801e-c90c149bd1af
// https://corona.lmao.ninja/v2/historical/Argentina?lastdays=1000
// https://corona.lmao.ninja/v2/countries/Argentina
// var app1 = angular.module('myApp1', []);
app.controller('myCtrl1', function($scope, $http)
{
    // ------------------------------------------------------------------------
    // var sampleObject = { id:0, name:'Pepe' };    
    // var jsonse = JSON.stringify(sampleObject);
    // $http({
    //     url: 'http://localhost:5503/json',
    //     method: "POST",
    //     data: sampleObject, // jsonse, //'DATA-data-DATA',
    //     header: 'Content-Type: application/json'
    // })
    // .then(function(response)
    // {
    //     console.log("response: ");
    //     console.log(response);
    // });
    // ------------------------------------------------------------------------

    $scope.loading = true;

    $scope.arrAvgDays = [3, 5, 7, 10, 12, 14, 21, 28, 35, 42, 49, 56, 63, 70];
    
    // Obtener el arreglo de localStorage
    var auxLS = localStorage.getItem('selectedAvgDays');
    if (auxLS === null ) $scope.selectedAvgDays = $scope.arrAvgDays[2];
    else $scope.selectedAvgDays = parseInt(auxLS);

    var arrayCritical = {
    "8/6/20":1150  ,
    "8/7/20":1293  ,
    "8/8/20":1502  ,
    "8/9/20":1565  ,
    "8/10/20":1569 ,
    "8/11/20":1585 ,
    "8/12/20":1585 ,
    "8/13/20":1585 ,
    "8/14/20":1718 ,
    "8/15/20":1716 ,
    "8/16/20":1708 ,
    "8/17/20":1749 ,
    "8/18/20":1799 ,
    "8/19/20":1795 ,
    "8/20/20":1832 ,
    "8/21/20":1853 ,
    "8/22/20":1907 ,
    "8/23/20":1922 ,
    "8/24/20":1960 ,
    "8/25/20":1990 ,
    "8/26/20":2022 ,
    "8/27/20":2075 ,
    "8/28/20":2114 ,
    "8/29/20":2192 ,
    "8/30/20":2232 ,
    "8/31/20":2273 ,
    "9/1/20":2314  ,
    "9/2/20":2359  ,
    "9/3/20":2394  ,
    "9/4/20":2425  ,
    "9/5/20":2456  ,
    "9/6/20":2512  ,
    "9/7/20":2698  ,
    "9/8/20":2719  ,
    "9/9/20":2719  ,
    "9/10/20":2880 ,
    "9/11/20":3093 ,
    "9/12/20":2962 ,
    "9/13/20":2984 ,
    "9/14/20":2992 ,
    "9/15/20":3049 ,
    "9/16/20":3118 ,
    "9/17/20":3108 ,
    "9/18/20":3225 ,
    "9/19/20":3213 ,
    "9/20/20":3261 ,
    "9/21/20":3387 ,
    "9/22/20":3362 ,
    "9/23/20":3511 ,
    "9/24/20":3527 ,
    "9/25/20":3595 ,
    "9/26/20":3633 ,
    "9/27/20":3604 ,
    "9/28/20":3678 ,
    "9/29/20":3768 ,
    "9/30/20":3792 ,
    "10/1/20":3799 ,
    "10/2/20":3828 ,
    "10/3/20":3889 ,
    "10/4/20":3950 ,
    "10/5/20":3978 ,
    "10/6/20":4007 ,
    "10/7/20":3997 ,
    "10/8/20":4043 ,
    "10/9/20":4092 ,
    "10/10/20":4137,
    "10/11/20":4182,
    "10/12/20":4226,
    "10/13/20":4271,
    "10/14/20":4316,
    "10/15/20":4334,
    "10/16/20":4352,
    "10/17/20":4369,
    "10/18/20":4387,
    "10/19/20":4419,
    "10/20/20":4451,
    "10/21/20":4573,
    "10/22/20":4611,
    "10/23/20":4718,
    "10/24/20":4825,
    "10/25/20":4931,
    "10/26/20":5038,
    "10/27/20":4952,
    "10/28/20":4967,
    "10/29/20":4981,
    "10/30/20":5027,
    "10/31/20":5073,
    "11/1/20":5119 ,
    "11/2/20":4922 ,
    "11/3/20":4854 ,
    "11/4/20":4816 ,
    "11/5/20":4742 ,
    "11/6/20":4667 ,
    "11/7/20":4593 ,
    "11/8/20":4608 ,
    "11/9/20":4551 ,
    "11/10/20":4494,
    "11/11/20":4418,
    "11/12/20":4397,
    "11/13/20":4372,
    "11/14/20":4346,
    "11/15/20":4334,
    "11/16/20":4322,
    "11/17/20":4295,
    "11/18/20":4267,
    "11/19/20":4292,
    "11/20/20":4212,
    "11/21/20":4132,
    "11/22/20":4149,
    "11/23/20":4166,
    "11/24/20":4148,
    "11/25/20":4054,
    "11/26/20":3960,
    "11/27/20":3986,
    "11/28/20":4011,
    "11/29/20":4037,
    "11/30/20":4062,
    "12/1/20":3946 ,
    "12/2/20":3983 ,
    "12/3/20":3921 ,
    "12/4/20":3859 ,
    "12/5/20":3797 ,
    "12/6/20":3735 ,
    "12/7/20":3723 ,
    "12/8/20":3715 ,
    "12/9/20":3676 ,
    "12/10/20":3636,
    "12/11/20":3597,
    "12/12/20":3557,
    "12/13/20":3518,
    "12/14/20":3478,
    "12/15/20":3475,
    "12/16/20":3457,
    "12/17/20":3439,
    "12/18/20":3421,
    "12/19/20":3403,
    "12/20/20":3385,
    "12/21/20":3367,
    "12/22/20":3399,
    "12/23/20":3382,
    "12/24/20":3365,
    "12/25/20":3347,
    "12/26/20":3330,
    "12/27/20":3313,
    "12/28/20":3319,
    "12/29/20":3345,
    "12/30/20":3440,
    "12/31/20":3438,
    "1/1/21":3437  ,
    "1/2/21":3435  ,
    "1/3/21":3433  ,
    "1/4/21":3502  ,
    "1/5/21":3460  ,
    "1/6/21":3510  ,
    "1/7/21":3559  ,
    "1/8/21":3571  ,
    "1/9/21":3583  ,
    "1/10/21":3594 ,
    "1/11/21":3606 ,
    "1/12/21":3619 ,
    "1/13/21":3627 ,
    "1/14/21":3634 ,
    "1/15/21":3605 ,
    "1/16/21":3576 ,
    "1/17/21":3547 ,
    "1/18/21":3564 ,
    "1/19/21":3581 ,
    "1/20/21":3599 ,
    "1/21/21":3616 ,
    "1/22/21":3612 ,
    "1/23/21":3607 ,
    "1/24/21":3603 ,
    "1/25/21":3598 ,
    "1/26/21":3601 ,
    "1/27/21":3604 ,
    "1/28/21":3607 ,
    "1/29/21":3600 ,
    "1/30/21":3593 ,
    "1/31/21":3586 ,
    "2/1/21":3579  ,
    "2/2/21":3571  ,
    "2/3/21":3564  ,
    "2/4/21":3557  ,
    "2/5/21":3550  ,
    "2/6/21":3550  ,
    "2/7/21":3550  ,
    "2/8/21":3551  ,
    "2/9/21":3553  ,
    "2/10/21":3561 ,
    "2/11/21":3565 ,
    "2/12/21":3569 ,
    "2/13/21":3573 ,
    "2/14/21":3577 ,
    "2/15/21":3581 ,
    "2/16/21":3585 ,
    "2/17/21":3589 ,
    "2/18/21":3593 ,
    "2/19/21":3597 ,
    "2/20/21":3601 ,
    "2/21/21":3605 ,
    "2/22/21":3591 ,
    "2/23/21":3576 ,
    "2/24/21":3562 ,
    "2/25/21":3548 ,
    "2/26/21":3534 ,
    "2/27/21":3519 ,
    "2/28/21":3505 ,
    "3/1/21":3501  ,
    "3/2/21":3497  ,
    "3/3/21":3493  ,
    "3/4/21":3489  ,
    "3/5/21":3485  ,
    "3/6/21":3495  ,
    "3/7/21":3505  ,
    "3/8/21":3515  ,
    "3/9/21":3525  ,
    "3/10/21":3529 ,
    "3/11/21":3532 ,
    "3/12/21":3536 ,
    "3/13/21":3540 ,
    "3/14/21":3544 ,
    "3/15/21":3547 ,
    "3/16/21":3551 ,
    "3/17/21":3555 ,
    "3/18/21":3558 ,
    "3/19/21":3562 ,
    "3/20/21":3566 ,
    "3/21/21":3570 ,
    "3/22/21":3573 ,
    "3/23/21":3577 ,
    "3/24/21":3581 ,
    "3/25/21":3585 ,
    "3/26/21":3588 ,
    "3/27/21":3592 ,
    "3/28/21":3596 ,
    "3/29/21":3599 ,
    "3/30/21":3603 ,
    "3/31/21":3607 ,
    "4/1/21": 3611 ,
    "4/2/21": 3614 ,
    "4/3/21": 3618 , 
    "4/4/21": 3626,
    "4/5/21": 3652,
    "4/6/21": 3642,
    "4/7/21": 3642,
    "4/8/21": 3742,
    "4/9/21": 3718,
    "4/10/21": 3761,
    "4/11/21": 3789,
    "4/12/21": 3819,
    "4/13/21": 3879,
    "4/14/21": 3889,
    "4/15/21": 3900,
    "4/16/21": 3975,
    "4/17/21": 4025,
    "4/18/21": 4105,
    "4/19/21": 4304,
    "4/20/21": 4366,
    "4/21/21": 4791,
    "4/22/21": 4791,
    "4/23/21": 4805,
    "4/24/21": 4858,
    "4/25/21": 4942,
    "4/26/21": 5036,
    "4/27/21": 5134,
    "4/28/21": 5178,
    "4/29/21": 5317,
    "4/30/21": 5369,
    "5/1/21": 5370,
    "5/2/21": 5371,
    "5/3/21": 5426,
    "5/4/21": 5389,
    "5/5/21": 5342,
    "5/6/21": 5299,
    "5/7/21": 5268,
    "5/8/21": 5294,
    "5/9/21": 5321,
    "5/10/21": 5348,
    "5/11/21": 5375,
    "5/12/21": 5394,
    "5/13/21": 5420,
    "5/14/21": 5498,
    "5/15/21": 5576,
    "5/16/21": 5654,
    "5/17/21": 5732,
    "5/18/21": 5813,
    "5/19/21": 5877,
    "5/20/21": 5951,
    "5/21/21": 6049,
    "5/22/21": 6148,
    "5/23/21": 6214,
    "5/24/21": 6383,
    "5/25/21": 6552,
    "5/26/21": 6644,
    "5/27/21": 6802,
    "5/28/21": 6872,
    "5/29/21": 7039,
    "5/30/21": 7206,
    "5/31/21": 7325,
    "6/1/21": 7417,
    "6/2/21": 7614,
    "6/3/21": 7641,
    "6/4/21": 7668,
    "6/5/21": 7722,
    "6/6/21": 7776,
    "6/7/21": 7785,
    "6/8/21": 7794,
    };
    var dataJson = [];
    var vaccineJson = [];
    var arrCritical = '{}';

    $http.get("https://corona.lmao.ninja/v2/countries/Argentina")
    .then(function(response)
    {
        var argentina = response.data;

        // debugger;
        var to_day = format(new Date(argentina.updated - (1000 * 60 * 60 * 24)), 'M/d/yy');

        // Obtener el arreglo de localStorage
        var strArrCritical = localStorage.getItem('arrCritical');

        if (strArrCritical == null ) strArrCritical = '{}';

        // Se parsea para poder ser usado en js con JSON.parse :)
        arrCritical = JSON.parse(strArrCritical);

        if (strArrCritical.indexOf(to_day) < 0)   // existe?
        {
            arrCritical[to_day] = argentina.critical;

            // Guardar el array en el localStorage
            // Se guarda en localStorage despues de JSON stringificarlo 
            localStorage.setItem('arrCritical', JSON.stringify(arrCritical));
            // console.log(arrCritical);
        }
        else
        {
            if (arrCritical[to_day] < argentina.critical)
                arrCritical[to_day] = argentina.critical;
        }

        // debugger;
        // arrayCritical = arrayCritical + arrCritical
        for (var key in arrCritical)
        {
            arrayCritical[key] = arrCritical[key];
        };
    });

    var to_day = new Date();
    var firts_day = new Date('Mar 02, 2020');
    const diff_time = Math.abs(to_day - firts_day);
    const diff_days = Math.ceil(diff_time / (1000 * 60 * 60 * 24));

    // VACUNADOS - https://disease.sh/v3/covid-19/vaccine/coverage/countries/Argentina?lastdays=4
    $http.get("https://disease.sh/v3/covid-19/vaccine/coverage/countries/Argentina?lastdays=" + diff_days)
    .then(function(response)
    {
        vaccineJson = response.data.timeline;

        //------------------------------------------------------------------------------------------------------------------------
        $http.get("https://corona.lmao.ninja/v2/historical/Argentina?lastdays=" + diff_days)
        .then(function(response)
        {
            dataJson = response.data.timeline;

                                                    //arrCritical
            buildJsonObjCovid(dataJson, vaccineJson, arrayCritical, '#idTable', 'table table-hover header_fijo', 'de-DE', $scope.selectedAvgDays);

            $scope.loading = false;
        });
        //------------------------------------------------------------------------------------------------------------------------
    });
    //---------------------------------------------------------------------------------------------------------------------------
    $scope.updateAvgDays = function()
    {
        // Se guarda en localStorage despues de JSON stringificarlo 
        localStorage.setItem('selectedAvgDays', $scope.selectedAvgDays);

        // reinicio todo
        window.location.reload();
    };
    //---------------------------------------------------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------------------------------------------------


    //---------------------------------------------------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------------------------------------------------
    function buildJsonObjCovid(array, vaccine, critical, selector, _class, locale, avg) 
    {
    // debugger;
    var jsonObj = [];
    var i=0;
    var ytd_key;
    var acumObj = [];
    acumObj["avg_cases"] = [];
    acumObj["avg_infected"] = [];
    acumObj["avg_deaths"] = [];
    acumObj["avg_recovered"] = [];
    acumObj["avg_infected"] = [];
    acumObj["avg_vaccine"] = [];
    acumObj["avg_critical"] = [];
    acumObj["avg_daily_cases"] = [];
    acumObj["avg_daily_deaths"] = [];
    acumObj["avg_daily_recovered"] = [];
    acumObj["avg_daily_vaccine"] = [];

    for ( var key in array.cases )
    {
        var dateKey = new Date(key)
        var d = format(dateKey, 'yyyy-MM-dd');  // dateKey.toISOString().substr(0, 10);     // YYYY-MM-DD
        var weekday = new Array(7);
        weekday[0] = "Su";  // "Sunday";  // 
        weekday[1] = "Mo";  // "Monday";
        weekday[2] = "Tu";  // "Tuesday";
        weekday[3] = "We";  // "Wednesday";
        weekday[4] = "Th";  // "Thursday";
        weekday[5] = "Fr";  // "Friday";
        weekday[6] = "Sa";  // "Saturday";
        var n = weekday[dateKey.getDay()];

        var infected = Math.abs(array.cases[key] - array.deaths[key] - array.recovered[key]);
        var daily_cases = Math.abs(array.cases[key] - array.cases[ytd_key]);
        var daily_deaths = Math.abs(array.deaths[key] - array.deaths[ytd_key]);
        var daily_recovered = Math.abs(array.recovered[key] - array.recovered[ytd_key]);
        var daily_vaccine = Math.abs(vaccine[key] - vaccine[ytd_key]);

        var aux = { 
                    "id":                 i, 
                    "date":               d,
                    "day":                n,
                    "cases":              array.cases[key],
                    "avg_cases":          movingAverage(i, acumObj["avg_cases"], avg, array.cases[key]),
                    "deaths":             array.deaths[key], 
                    "avg_deaths":         movingAverage(i, acumObj["avg_deaths"], avg, array.deaths[key]),
                    "recovered":          array.recovered[key],
                    "avg_recovered":      movingAverage(i, acumObj["avg_recovered"], avg, array.recovered[key]),
                    "infected":           infected,
                    "avg_infected":       movingAverage(i, acumObj["avg_infected"], avg, infected),
                    "vaccine":            Math.abs(vaccine[key] - 0),
                    "avg_vaccine":        movingAverage(i, acumObj["avg_vaccine"], avg, Math.abs(vaccine[key] - 0)),
                    "critical":           Math.abs(critical[key] - 0),
                    "avg_critical":       movingAverage(i, acumObj["avg_critical"], avg, Math.abs(critical[key] - 0)),

                    "daily_cases":          daily_cases,
                    "avg_daily_cases":      movingAverage(i, acumObj["avg_daily_cases"], avg, daily_cases),
                    "daily_deaths":         daily_deaths,
                    "avg_daily_deaths":     movingAverage(i, acumObj["avg_daily_deaths"], avg, daily_deaths),
                    "daily_recovered":      daily_recovered,
                    "avg_daily_recovered":  movingAverage(i, acumObj["avg_daily_recovered"], avg, daily_recovered),
                    "daily_vaccine":        daily_vaccine,
                    "avg_daily_vaccine":    movingAverage(i, acumObj["avg_daily_vaccine"], avg, daily_vaccine),
                };
        jsonObj.push(aux);

        ytd_key = key;
        i++;
    };
    // Function to calculate n-Day Simple moving average
    function movingAverage(index, arrAcum, numOfDays, data)
    {
        //--------------------------------------------------------------
        var i = index % numOfDays;
        arrAcum[i] = data;
        var auxAcum = 0;
        for (var j = 0; j < numOfDays; j++)
        {
            auxAcum += arrAcum[j];
        };
        //--------------------------------------------------------------
        return Math.abs((auxAcum/numOfDays).toFixed());
    }
    // buildHtmlTable(jsonObj, selector, _class, locale);
    //------------------------------------------------------------------------------------------
    $scope.arrayData = jsonObj;
    $scope.arrayTags = [];
    for (var key in jsonObj[0])
    {
        if(key != "day" && key.indexOf('avg')<0)
            $scope.arrayTags.push(key);
    };
    // console.log(jsonObj);
    //------------------------------------------------------------------------------------------
    buildHtmlGraph(jsonObj, "#grafica");
    };
    //---------------------------------------------------------------------------------------------------------------------------
    // format(new Date('Sun May 11,2014'), 'yyyy-MM-dd')
    format = function date2str(x, y)
    {
        var z = {
            M: x.getMonth() + 1,
            d: x.getDate(),
            h: x.getHours(),
            m: x.getMinutes(),
            s: x.getSeconds()
        };
        y = y.replace(/(M+|d+|h+|m+|s+)/g, function(v) {
            return ((v.length > 1 ? "0" : "") + z[v.slice(-1)]).slice(-2)
        });

        return y.replace(/(y+)/g, function(v) {
            return x.getFullYear().toString().slice(-v.length)
        });
    }
    //---------------------------------------------------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------------------------------------------------


    //---------------------------------------------------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------------------------------------------------
    // Builds the HTML Table out of myList.
    function buildHtmlTable(myList, selector, _class, locale) 
    {
        // debugger;
        $(selector).html('');
        var matrix = $('<table class="' + _class + '"/>');
        var columns = addAllColumnHeaders(myList);
        var thead = $('<thead/>');
        thead.append(columns.hdr);
        matrix.append(thead);
        var tbody = $('<tbody/>');
        for (var i = 0; i < myList.length; i++) 
        {
            var row$ = $('<tr/>');
            for (var colIndex = 0; colIndex < columns.col.length; colIndex++) 
            {
            var cellValue = myList[i][columns.col[colIndex]];
            if (cellValue == null) cellValue = "";
            cellValue = cellValue.toLocaleString(locale);
            //--------------------------------------------
            row$.append($('<td/>').html(cellValue));
            //--------------------------------------------
            }
            tbody.append(row$);
        }
        matrix.append(tbody);
        $(selector).append(matrix);
    }
    // Adds a header row to the table
    function addAllColumnHeaders(myList) 
    {
        var columnSet = [];
        var headerTr$ = $('<tr/>');
        for (var i = 0; i < myList.length; i++) 
        {
            var rowHash = myList[i];
            for (var key in rowHash) 
            {
            if ($.inArray(key, columnSet) == -1) 
            {
                columnSet.push(key);
                headerTr$.append($('<th/>').html(key.replace(/_/gi, " ")));
            }
            }
        }
        return {col: columnSet, hdr: headerTr$};
    }
    //--------------------------------------------------------------------------------------
    //--------------------------------------------------------------------------------------

    //--------------------------------------------------------------------------------------
    //--------------------------------------------------------------------------------------
    function buildHtmlGraph(myJson, selector) 
    {
        // Obtener una referencia al elemento canvas del DOM
        const $grafica = document.querySelector(selector);

        // Las etiquetas son las que van en el eje X. 
        // const etiquetas = myJson.date;
        var etiquetas = [];
        // const etiquetas = ["Enero", "Febrero", "Marzo", "Abril"]

        // Podemos tener varios conjuntos de datos
        var datos = [];
        for (var key in myJson[0])
        {
            if ( key == 'date' )
            {
                var arr_etiquetas = [];
                for (var i = 0; i < myJson.length; i++) 
                {
                    arr_etiquetas.push(myJson[i][key]);
                };
                etiquetas = arr_etiquetas;
            }
            else if ( key != 'id' &&  key != 'day')
            {
                var arr_datos = [];
                for (var i = 0; i < myJson.length; i++) 
                {
                    arr_datos.push(myJson[i][key]);
                };
                var aux = {
                    label:            key.replace(/_/gi, " "),
                    data:             arr_datos,          // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
                    backgroundColor:  (key.indexOf('avg')<0)? randomColor(0.2):'rgba(0,0,0, 0)',   // 'rgba(211,93,110, 0.2)', // Color de fondo
                    borderColor:      (key.indexOf('avg')<0)? randomColor(0.2):'rgba(0,0,0, 1)',   // 'rgba(211,93,110, 1)',   // Color del borde
                    borderWidth:      1,                  // Ancho del borde
                };
                datos.push(aux);
            }
        };

        // new Chart($grafica, {
        var chart = new Chart($grafica, {
            type: 'line', // Tipo de gráfica
            data: {
                labels: etiquetas,
                datasets: datos
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                },
            }
        });
    };
    //--------------------------------------------------------------------------------------
    function randomColor(opac)
    {
        var r = Math.floor((Math.random() * 255) + 1);
        var g = Math.floor((Math.random() * 255) + 1);
        var b = Math.floor((Math.random() * 255) + 1);
        return 'rgba(' + r + ',' + g + ',' + b + ',' + opac + ')';
    };
    //--------------------------------------------------------------------------------------
    //--------------------------------------------------------------------------------------



    //======================================================================================
    $scope.export2Excel = function ()
    {
        var aux_arrayTags = [];
        var aux_arrayData = angular.copy( $scope.arrayData );
        for (var key in aux_arrayData[0])
        {
            var res = key.replace("avg", "avg" + $scope.selectedAvgDays + "d");
            aux_arrayTags.push(res);
        };
        exportToExcel_Orign (aux_arrayTags, aux_arrayData, 'Covid-19_Argentina');
    };
    //======================================================================================
    //======================================================================================
    function exportToExcel_Orign(arrayHeader, jsonData, filename)
    {
        // Specify file name
        filename = filename ? filename+'.xls' : 'my_excel_data.xls';

        // Elimina - $$hashKey
        //----------------------------------------------------------
        for(var i=0; i<jsonData.length; i++)
        {
            delete jsonData[i]['$$hashKey'];
            for (var key in jsonData[i])
            {
                if (isNaN(jsonData[i][key]))
                {
                    if (typeof jsonData[i][key] === 'number' || jsonData[i][key] instanceof Number)
                        jsonData[i][key] = 0; // null; // cambio de NaN por CERO // null
                }
            };
        };
        //----------------------------------------------------------

        /* make the worksheet */
        var ws = XLSX.utils.json_to_sheet(jsonData);   // jsonData

        //----------------------------------------------------------
        for(var i=0; i<arrayHeader.length; i++)
        {
            var aux = String.fromCharCode(65+i);
            ws[aux+'1'].v = arrayHeader[i].replace(new RegExp('_', 'g'), ' ').toUpperCase();
        };
        //----------------------------------------------------------

        /* add to workbook */
        var wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, filename);

        /* write workbook (use type 'binary') */
        XLSX.writeFile(wb, filename);
    };
    //======================================================================================
    //======================================================================================
});

//------------------------------------------------------------------------------------------
// {{ addText | strReplace:'_':' ' }}
app.filter('strReplace', function ()
{
    return function (input, from, to) {
        input = input || '';
        from = from || '';
        to = to || '';
        return input.replace(new RegExp(from, 'g'), to);
    };
});
// {{data[tag] | numLocale:'de-DE'}}
app.filter('numLocale', function ()
{
    return function (input, locale) {
    // debugger;
    if(typeof input === 'number') 
        return input.toLocaleString(locale);
    else 
        return input;
    };
});
//------------------------------------------------------------------------------------------
