function checkDates(){
    let dateStart = document.getElementById("date_start")
    let dateEnd = document.getElementById("projected_end_date")
    let warning = document.getElementById("warningEnd")
   
    if(dateStart.value > dateEnd.value && dateEnd.value != ""){
        dateEnd.value = ""
        warningEnd.innerHTML = "La fecha de finalización debe ser posterior"
        dateEnd.style.border = "1px solid red"
    }
    if(dateStart.value < dateEnd.value){
        warningEnd.innerHTML = ""
    }
}
