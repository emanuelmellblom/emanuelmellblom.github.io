function calc(){
	
	//Values
	var initialGearRatio = document.getElementById("initialGearRatio").value;
	var pinion = document.getElementById("pinion").value;
	var spur = document.getElementById("spur").value;
	var batteryVoltage = document.getElementById("batteryVoltage").value;
	var motorKv = document.getElementById("motorKv").value;
	var wheelDiameter = document.getElementById("wheelDiameter").value;

	//Make calculations
	var finalRatio = spur/pinion
	var engineRevs = batteryVoltage * motorKv;
	var speedMph = (engineRevs/finalRatio)/100; 
	var speedKmh = speedMph * 1.60344;

	//Write output
	document.getElementById("finalRatio").setAttribute('value', Math.round(finalRatio * 100) / 100);
	document.getElementById("engineRevolutions").setAttribute('value', engineRevs);
	document.getElementById("speedKmh").setAttribute('value', Math.round(speedKmh * 100) / 100);
	document.getElementById("speedMph").setAttribute('value', Math.round(speedMph * 100) / 100);
}

