var nameReg=new RegExp('^[A-Za-z]*$');
var passReg=new RegExp('[*#^]{5}');
var pinCodeReg=new RegExp('[0-9]{6}');
var goodsList=["5% Off","10% Off", "An Amazon Coupon"]
function Validate(x)
{
	flag=true;

    //Validating Name Field
    var fname= document.getElementsByName('fname');
    if(fname[0].value.length==0){
        alert("First Name cannot be Empty");
        flag=false;
    }


    //Validating Address Field
    var add= document.getElementsByName('add');
    if(add[0].value.length==0){
        alert("Address Line 1 cannot be Empty");
        flag=false;
    }



    //Validating City Field
    var city= document.getElementById('city');
    if(city.value.length==0 || !nameReg.test(city.value)){
        alert("Please Mention City Correctly");
        flag=false;
    }

    //Validating Pincode Field
    var pin=document.getElementById('pin');
    if(!pinCodeReg.test(pin.value)){
        alert('Pin Code is Invalid');
        flag=false;
    }

    //Validating Consignment Type Field
	var Coption=document.getElementsByName('tc');
	if (!(Coption[0].checked || Coption[1].checked || Coption[2].checked)) {
    	alert("Please Select Type of Consignment");
    	flag=false;
  		}

    //Validating Payment Method Type Field
    var option=document.getElementsByName('pmethod');
    console.log("I came In");
    if (!(option[0].checked || option[1].checked || option[2].checked)) {
        alert("Please Select Mode of Payment");
        flag=false;
        }

    //Validating Location Field
	var e = document.getElementById("Loc");
	var strUser = e.options[e.selectedIndex].value;
	var strUser1 = e.options[e.selectedIndex].text;
	if(strUser==0)
	{
	alert("Please select a Location");
	flag=false;
	}

    //Validating Agreement Field
 	if (x.Agree.checked == false){
        	alert ('You didn\'t Agree to terms and Conditions check that box!');
            flag=false;
    	}
    return flag;
}

//Validating Name Field
function checkFName(){
    val= document.getElementsByName('fname');
    if(val[0].value.length==0){
        alert("You Sure Have a First Name right");
    }
    if(!nameReg.test(val[0].value)){
        alert("You Sure Have a Non alphabetic Characters in your name");
    }
}
//Validating Name Field
function checkLName(){
    val= document.getElementsByName('lname');
    if(!nameReg.test(val[0].value)){
        alert("You Sure Have a Non alphabetic Characters in your name");
    }

}

//Validating Address Field
function checkAdd(){
    val= document.getElementsByName('add');
    if(val[0].value.length==0){
        alert("Address Line 1 cannot be Empty");
    }

}

//Validating PassCode Field
function checkPass(){
    otp=document.getElementById('otp')
    if(passReg.test(otp.value)){
        var rnd = Math.random() *2;
        var mix = Math.random();
        var good=rnd * (1 - mix) + 2 * mix
        good=Math.round(good);
        console.log(good)
        alert("You've Unlocked a gift as a promo "+goodsList[good]+" !!!!!!!" );

    }
}