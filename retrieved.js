<script type="text/javascript">
  function getValues() {
    var wallet_number=localStorage.getItem("wallet_number");
	  var merchantcode=localStorage.getItem("merchantcode");
 
		 
	 
    
if((wallet_number == null || wallet_number == "") || (merchantcode == "" || merchantcode == null)) 
 {
 
$("#message").html("<strong>Your Information </strong>  cannot be retrieved at this time. ");
$("p").addClass("alert alert-warning");

window.location.replace("index.html");
 
 }
 else{
 
        $.ajax({
            type: "POST",
            url: "https://payall.ng/information.php",
            data: {wallet_number:wallet_number,merchantcode:merchantcode},
			async: false,
            dataType: "JSON",
	beforeSend: function() {
                    
		 $("#message").html('Connecting... Please wait...');
		 $("p").addClass("alert alert-warning");
		 
                    },
            success: function(data) {
             
			  var returnValue = JSON.stringify(data);
					 var obj = JSON.parse(data);
					 
					  var resp = obj.resp;   
				  
					  if(resp == "Success")
					  {
				 
			   /*{"resp":"Success", "username":"08105297771", "password":"1111", "usertype":"3", "wallet_number":"0810529777139554", "merchantcode":"39554", "fullname":"TUNDE LAWAL", "phone":"08105297771"}*/
			 
					  // $("#message").html(data);
		// $("p").addClass("alert alert-success");
		 
		 
		 
		 var commission = obj.commission;
		 var wallet = obj.wallet;
		    
					 
					     $("#commission").html(commission);
						   $("#wallet").html(wallet);
		// $("p").addClass("alert alert-success"); 
					  
					
					  }
					  else
					  {
					$("#commission").html("Not Available");
$("p").addClass("alert alert-danger");
					  
					  }
					  
			
			
			
			
            },
            error: function(err) {
          
			$("#commission").html("Not Available");
$("p").addClass("alert alert-danger");
            }
        });
}
 



  
}







 
			 
         

  </script>