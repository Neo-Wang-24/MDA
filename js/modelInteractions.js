//adapted from example code 'benskitchen.com'

var spinning = false;

function spin()
{
	spinning = !spinning;
	document.getElementById('model__Rotation_Timer').setAttribute('enabled', spinning.toString());
}

function stopRotation()
{
	spinning = false;
	document.getElementById('model__Rotation_Timer').setAttribute('enabled', spinning.toString());
}

function animateModel()
{
    if(document.getElementById('model__Rotation_Timer').getAttribute('enabled')!= 'true')
        document.getElementById('model__Rotation_Timer').setAttribute('enabled', 'true');
    else
        document.getElementById('model__Rotation_Timer').setAttribute('enabled', 'false');
}

function wireframe()
{
	var e = document.getElementById('model');
	e.runtime.togglePoints(true);
	e.runtime.togglePoints(true);
}

var lightOn = true;

function headlight()
{
	lightOn = !lightOn;
	document.getElementById('model__headlight').setAttribute('headlight', lightOn.toString());
}

function cameraView()
{
	document.getElementById('model__Camera_View').setAttribute('bind', 'true');
}

function cameraFront()
{
	document.getElementById('model__Camera_Front').setAttribute('bind', 'true');
}

function cameraBack()
{
	document.getElementById('model__Camera_Back').setAttribute('bind', 'true');      ////Back
}

function cameraSide()
{
	document.getElementById('model__Camera_Side').setAttribute('bind', 'true');
}

function cameraTop()
{
	document.getElementById('model__Camera_Top').setAttribute('bind', 'true');
}

function cameraBottom()
{
	document.getElementById('model__Camera_Bottom').setAttribute('bind', 'true');
}