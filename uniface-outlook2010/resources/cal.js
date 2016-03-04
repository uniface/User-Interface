// JavaScript Document
var mydate = new Date();  
var day = mydate.getDate();
var year = mydate.getFullYear();
var monthw = mydate.getMonth();
var monthNames = ["January","February","March","April","May","June","July","August","September","October","November", "December"]; 
//the code below is triggered by an onclick event within the table; this will pass the date back which can be used in uniface
var curweekcount;
function listdates(){
	
}
function myfunction(theday,themonth,theyear){
	alert(theday+"/"+themonth+"/"+theyear);
	//window.unifaceTriggers('CalendarDate', MapStatus);
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

calendarbuild = "<table class='calendar'>";
calendarbuild += "<tr class='calendar'><th class='monthlink'><span onclick='calendar(mydate.setMonth(mydate.getMonth()-1))' title='Previous Month' alt='Previous Month'>&#9668;</span></th>";
calendarbuild += "<th class='themonth' colspan='5'><span onclick='listdates()'>"+monthNames[mynewmonth]+" "+mynewyear+"</span></th>";
calendarbuild += "<th class='monthlink'><span onclick='calendar(mydate.setMonth(mydate.getMonth()+1))'>&#9658;</span></th></tr>";
calendarbuild += "<tr class='startdays'><td>Mo</td>  <td>Tu</td> <td>We</td> <td>Th</td> <td>Fr</td> <td>Sa</td> <td>Su</td> </tr>";
calendarbuild += "<tr>";

//Getting the total amount of days in the previous month
var prevMonth = (mynewdate.getMonth()-1);
var prevMonthdays = totalDays[prevMonth];
curweekcount = 0;
//////////////////////////////////////////
// If the previous month is December of //
// the following year, setting the 	//
// number of days for December.  Used	//
// for padding the previous month's days//
// to fill in the start of the table	//
//////////////////////////////////////////

if (prevMonth < 0){
 var prevMonthreverse = 31 - startday +1;
}else{
var prevMonthreverse = prevMonthdays - startday + 1;
}
var nextMonth = 1;
//Padding the extra cells before the month's first day.
if (startday != 0){
 while (startday > 0){
  calendarbuild += "<td class='prevmonth'>"+prevMonthreverse+"&nbsp;</td>";
  prevMonthreverse++;
  startday --;
 }
}

var d = 1 //Setting the counter to 1 to loop through the days of the month.

while (d <=totalDays[mynewdate.getMonth()]){
  //Checking to see what day of the week it is.  If Saturday, then create a new row.
  if (w > 6){
   w = 0;
   calendarbuild += "</tr><tr>";
   curweekcount++;
  }
 // If the d is the day value as the day of the month, then the a different CSS class is applied.
 if (d == day && tempmonth == monthw){
 calendarbuild += "<td class='today'>"+d+"</td>";
 }else{
 calendarbuild += "<td><span onclick='myfunction("+d+","+(tempmonth+1)+","+mynewyear+")'>"+d+"</span></td>";
 }
 d++;
 w++;
}

//Finish padding the month with the start of the following month
while (w <= 6){
 calendarbuild += "<td class='prevmonth'>"+nextMonth+"</td>";
 nextMonth++;
 w ++;
}

//Closing the table cleanly.
 calendarbuild += "</tr>";
 if (curweekcount !=5){
 calendarbuild += "<tr class='prevmonth'> <td class='prevmonth'>"+(nextMonth+1)+"</td> <td class='prevmonth'>"+(nextMonth+2)+"</td><td class='prevmonth'>"+(nextMonth+3)+"</td><td class='prevmonth'>"+(nextMonth+4)+"</td><td class='prevmonth'>"+(nextMonth+5)+"</td><td class='prevmonth'>"+(nextMonth+6)+"</td><td class='prevmonth'>"+(nextMonth+7)+"</td>";
calendarbuild += "</tr>";
 }else{
 calendarbuild+="</table>";
 }
document.getElementById('calendar').innerHTML = calendarbuild;
}
