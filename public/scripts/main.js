function getLayers(thisStage, thisLayer, callback) {
    var MAX = 390;
    var count = 0;
    for (var i=1;i<=MAX;i++)
    {
        $.ajax({
            type: "GET",
            dataType: "json",
            url: "http://10.74.48.98:3000/status/" + i.toString(),
            success: function(ws){
//               console.log("SS:" + ws);
                count++;
                if (ws === null)
                {
                    // no entry
                    r = 0;
                } else {
//                   var status = $(ws).find('Status').text();
                    var status = ws.Status;
//                    console.log(status);
                    /*
                     "Unknown",
                     "Updating",
                     "Starting",
                     "Running",
                     "Errors",
                     "Stopping",
                     "Stopped",
                     "Rebooting",
                     "OVER LIMIT"
                     */

                    if (status === "Errors") {
                        r=4;
                    } else if (status === "Running") {
                        r=3;
                    } else if (status === "Starting") {
                        r=2;
                    } else if (status === "Updating") {
                        r=1;
                    } else if (status === "Rebooting") {
                        r=7;
                    } else if (status === "Stopped") {
                        r=6;
                    } else if (status === "Stopping") {
                        r=5;
                    } else {
                        r=0;
                    }
//                    console.log(status, r);
                }
//                console.log("XX:" + count, thisStage, thisLayer);
                drawEntry(thisStage, thisLayer, count, r);
                if (count === MAX) {
                    console.log("finished")
                    thisStage.add(thisLayer);
                }
            }
        });
    }
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
        // stage.add(layer);
    });
}


  //      var r = Math.floor(Math.random() * 5);
  //      drawEntry(stage, layer, i, r);
