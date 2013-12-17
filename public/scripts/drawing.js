/**
 * Created with JetBrains WebStorm.
 * User: Mortoni
 * Date: 11/07/13
 * To change this template use File | Settings | File Templates.
 */
function drawEntry(stage, layer, id, status) {

//    var layer = new Kinetic.Layer();
    var colWidth = 30;
    var gap = 3;
    var margin = 10;
//    console.log(stage, layer);
    var areaWidth = stage.content.clientWidth - (2 * margin) - (colWidth * gap);
    var rWidth =  Math.floor(areaWidth / colWidth);
//    console.log(areaWidth);

    var rHeight = rWidth * 0.8;
    var xx = margin + (rWidth + gap) * ((id-1) % colWidth);
    var yy = margin + (rHeight + gap) * Math.floor((id-1)/colWidth);

//    console.log(xx.toString() + "," + yy.toString());
    console.log(status);

    var rect = new Kinetic.Rect({
        x: xx,
        y: yy,
        width: rWidth,
        height: rHeight,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 2
    });

    switch(status)
    {
        case 0:
            console.log("zero");
            rect.setFill('cyan')
            break;
        case 1:
            console.log("one");
            rect.setFill('green')
            break;
        case 2:
            console.log("two");
            rect.setFill('red')
            break;
        case 3:
            console.log("three");
            rect.setFill('orange')
            break;
        default:
            console.log("default");
            rect.setFill('yellow')
    };

    var simpleText = new Kinetic.Text({
        x: xx + rWidth/2,
        y: yy + rHeight/2,
        text: '',
        fontSize: 16,
        fontFamily: 'Calibri',
        fill: 'black',
        align: 'center'
    });

    simpleText.setText(id)
    simpleText.setOffset({
        x: simpleText.getWidth() / 2,
        y: simpleText.getHeight() / 2
    });

    layer.add(rect);
    layer.add(simpleText);

 //   stage.add(layer);

    /*

     var json = '{"attrs": {"width": 578,"height": 200},"className": "Stage","children": ' +
     '[{"attrs": {"id": "redButton"},"className": "Layer",' +
     '"children": [{"attrs": {"x": 250,"y": 100,"sides": 6,' +
     '"radius": 70,"fill": "blue","stroke": "black","strokeWidth": 4,' +
     '"id": "redPoly"},"className": "RegularPolygon"},' +
     '{ "attrs": {"stroke": "black","strokeWidth": 10,"lineJoin": "round",' +
     '"lineCap": "round","points": [{ "x": 250,"y": 60 },{"x": 250,"y": 80}]},' +
     '"className": "Line"}]}]}';

     var ctx = $('#draw')[0].getContext("2d");
    //draw a circle
    ctx.beginPath();
    ctx.arc(Math.random()*75, Math.random()*75, 10, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
*/

}