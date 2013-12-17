function getLayers(thisStage, thisLayer, callback) {
    for (var i=1;i<111;i++)
    {
        $.ajax({
            type: "GET",
            dataType: "json",
            url: "http://10.74.48.98:3000/status/" + i.toString(),
            success: function(ws){
//               console.log(ws);
                if (ws === null)
                {
                    // no entry
                    r = 0;
                } else {
//                   var status = $(ws).find('Status').text();
                    var status = ws.Status;
//                    console.log(status);
                    if (status === "Errors") {
                        r=1;
                    } else if (status === "Running") {
                        r=2;
                    } else {
                        r=3;
                    }
//                    console.log(status, r);
                }
//                console.log(stage, layer);
                drawEntry(thisStage, thisLayer, i, r);
            }
        });
    }
    callback(thisLayer);
};

window.onload = function() {
    var r = 0;
    var stage = new Kinetic.Stage({
        container: 'draw',
        width: 1000,
        height: 800
    });

    var layer = new Kinetic.Layer();

    getLayers(stage, layer, function(){
        console.log(stage, layer);
        stage.add(layer);
    });
}


  //      var r = Math.floor(Math.random() * 5);
  //      drawEntry(stage, layer, i, r);
