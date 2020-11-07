function calEbill()
{
	var unit=document.getElementById("a").value;
	var amount=0;
	
	if(unit<=30)
	{
		amount=7.85*unit;
	}
	else if(unit>30 && unit<=60)
	{
		amount=(30*7.85)+((unit-30)*7.85);
	}
	else if(unit>60 && unit<=90)
	{
		 amount=(30*7.85)+(30*7.85)+((unit-60)*10);
	}
	else if(unit>90 && unit<=120)
	{
		amount=(30*7.85)+(30*7.85)+(30*10)+((unit-90)*27.75);
	}
	else
	{
		amount=(30*7.85)+(30*7.85)+(30*10)+(30*27.75)+((unit-120)*32);
	}
	
	var txtResult=document.getElementById("EBillAmount");
	txtResult.innerHTML =amount;
}
