// JavaScript Document
var mydate = new Date();  
var day = mydate.getDate();
var year = mydate.getFullYear();
var monthw = mydate.getMonth();
var monthNames = ["January","February","March","April","May","June","July","August","September","October","November", "December"]; 
//the code below is triggered by an onclick event within the table; this will pass the date back which can be used in uniface
var curweekcount;
var pmonthcss;
var nmonthcss;
var tabindex = 1;
var firstmonth;
var secondmonth;
var thisrdmonth;
var shortmonthnames = ["Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov", "Dec","Jan",""]; 
function listdates(){
	
}
function myfunction(theday,themonth,theyear){
	(theday+"/"+themonth+"/"+theyear);
}

function calendar(month){

var daysinWeek = 7; //Used to create a loop for the days in the week.
var calendarbuild;  //Variable used later to create the calendar.

// Setting the value of the date if user has choosen a different month.
if (month){
 mynewdate = new Date(month + day + year);
}else{
 mynewdate = new Date();
}

 var tempyear = mynewdate.getFullYear();  //Getting the year based on the month and year the user is on
 var tempdate = new Date((mynewdate.getMonth()+1) +' 1 ,'+tempyear);  //Finding what day the first day of the month is
 var startday = tempdate.getDay()-1;
 if (startday == -1)
 {
	 startday = 6;
 }
 var w = startday; //copying startday value for use in while loop to build the calendar.
 var tempmonth = tempdate.getMonth();
 var mynewmonth = mynewdate.getMonth();
 var mynewyear = mynewdate.getFullYear();

 //Determing if Feb has 28 or 29 days in it for the year.  
if ((tempyear%100!=0) && (tempyear%4==0) || (tempyear%400==0)){
  var totalFeb = 29;
 }else{
  var totalFeb = 28;
 }
 var totalDays = ["31", ""+totalFeb+"","31","30","31","30","31","31","30","31","30","31"]  //Array of the days in each month.

calendarbuild = "<table align='right'>";
calendarbuild += "<tr><th width='1%'></th><th width='14%'>Monday</th><th width='14%'>Tuesday</th><th width='14%'>Wednesday</th><th width='14%'>Thursday</th><th width='14%'>Friday</th><th width='14%'>Saturday</th><th width='14%'>Sunday</th></tr> <tr class='header'> <td>&nbsp;</td>"

//Getting the total amount of days in the previous month
var prevMonth = (mynewdate.getMonth()-1);
var prevMonthdays = totalDays[prevMonth];
curweekcount = 0;

//my vars 
var daycountrow = 7;
var pmonthcss = startday;
var pmonthcss2 = daycountrow - pmonthcss;
var ww = 0;
var xx =0;
var passbool = 1;

if (prevMonth < 0){
 var prevMonthreverse = 31 - startday +1;
}else{
var prevMonthreverse = prevMonthdays - startday + 1;
}
var nextMonth = 1;
//Padding the extra cells before the month's first day.
if (startday != 0){
	var qq = prevMonthreverse;
	firstmonth = tempmonth;
 while (startday > 0){
  calendarbuild += "<td tabindex='"+(tabindex+1)+"'>"+prevMonthreverse+"&nbsp;"+shortmonthnames[firstmonth]+"</td>";
  prevMonthreverse++;
  startday --;
  firstmonth = 14;
 }
}
var d = 1 //Setting the counter to 1 to loop through the days of the month.
firstmonth = tempmonth+1

while (d <=totalDays[mynewdate.getMonth()]){
  //Checking to see what day of the week it is.  If Saturday, then create a new row.
  if (w > 6){
   w = 0;
   if (pmonthcss > 0 && passbool == 1){
		   calendarbuild += "<tr><td class='weekdet'><p>"+(qq)+"&nbsp;-"+(tempmonth)+"</p></td>";
		   while(xx != pmonthcss){
			   calendarbuild += "<td class='othermonth' tabindex='"+(tabindex+1)+"'></td>";
			   xx++
			   }
			while(ww != pmonthcss2){
			   calendarbuild += "<td tabindex='"+(tabindex+1)+"'></td>";
			   ww++;
			   var zz = ww +1;
			   }
			   passbool = 0;
		   }
		   else{
			   var zz = ww +1
	   calendarbuild += "<tr><td class='weekdet'><p>"+zz+"&nbsp;-"+(zz+5)+"/"+(tempmonth+1)+"</p></td>";
	   	x=0;
		while (x !=7){
			calendarbuild+="<td id='"+zz+"/"+(tempmonth+1)+"' tabindex='"+(tabindex+1)+"'></td>";
			x++;
			zz ++;
			ww++;
	   }
	   calendarbuild +="</tr>"
		   }
   
   calendarbuild += "</tr><tr class='header'><td>&nbsp;</td>";
   curweekcount++;
  }
 // If the d is the day value as the day of the month, then the a different CSS class is applied.
 if (d == day && tempmonth == monthw){
 calendarbuild += "<td class='today'>"+d+"</td>";
 }else{
 ;
 calendarbuild += "<td onclick='myfunction("+d+","+(tempmonth+1)+","+mynewyear+")'>"+d+"&nbsp;"+shortmonthnames[firstmonth]+"</td>";
 firstmonth = 14;
 }
 d++;
 w++;
 
}
var qq = 7 - w;
var ee = 7 - qq;
firstmonth = tempmonth +2;

//Finish padding the month with the start of the following month
while (w <= 6){
 calendarbuild += "<td>"+nextMonth+"&nbsp;"+shortmonthnames[firstmonth]+"</td>";
 nextMonth++;
 w ++;
 firstmonth=14;
}
//Closing the table cleanly.
 calendarbuild += "</tr>";
 calendarbuild += "<tr><td class='weekdet'><p>"+zz+"/"+(tempmonth+1)+"</p></td>";
 while (ee != 0){
	 calendarbuild += "<td id='"+zz+"/"+(tempmonth+1)+"' tabindex='"+(tabindex+1)+"'></td>";
	 ee --;
	 zz++;
	 }
 while (qq !=0){
	 calendarbuild += "<td class='othermonth' id='"+zz+"/"+(tempmonth+1)+"' tabindex='"+(tabindex+1)+"'>&nbsp;</td>";
	 qq--;
 }
 
 
 calendarbuild+="</table>";
document.getElementById('calendar').innerHTML = calendarbuild;
document.getElementById('month').innerHTML = "&nbsp;&nbsp;<input name='imageField' type='image' class='arrowl' id='imageField' onclick='calendar(mydate.setMonth(mydate.getMonth()-1))' src='icos/left.gif'><input name='imageField2' type='image' class='arrowr' id='imageField2' onclick='calendar(mydate.setMonth(mydate.getMonth()+1))' src='icos/right.gif'>&nbsp;"+monthNames[mynewmonth]+" "+mynewyear;
document.getElementById(day+"/"+(monthw+1)).className += "todaycell";

}
