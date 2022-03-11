function setup()
{
    canvas = createCanvas(400,300);
    canvas.position(500,250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 50, 50, 300, 200);
    fill("red");
    stroke("red");
    circle(30, 30, 50);
    circle(40, 40, 50);
    circle(30, 30, 50);
    circle(30, 30, 50);
}

function take_snapshot()
{
    save('phone.png');
}

