$(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() >50) {
      $('.navbar').addClass('solid');
    } else {
      $('.navbar').removeClass('solid');
    }
  });
});


function funcShow() {
  var x = document.getElementById("rm");
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function funcShow2() {
  var x = document.getElementById("sh");
  var y = document.getElementById("hd");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "block";
  }
}


$(function(){
  $("#bandLink").click(function() {
    $('html').animate({scrollTop: $("#band").offset().top},'slow', mandatory_fields)
    function mandatory_fields() {
      alert("All fields are mandatory");
    }
  });
});


$( function(){
  $('.float-input').on({
    focus: function(e){
      var code = (e.keyCode ? e.keyCode : e.which);
      if (code == 9) {
        $(this).closest(".bs-float-label").find('.float-label').addClass("show");
      }
      $(this).closest(".bs-float-label").find('.float-label').addClass("show");
    },
    focusout: function(){
      if(this.value =='' && this.id!='datepicker'){
        $(this).closest(".bs-float-label").find('.float-label').removeClass("show");
      }
      else {
        $(this).closest(".bs-float-label").find('.float-label').addClass("show");
      }
    },
  })
});

$( function() {
  $("#Rform2").datepicker({
    altFormat: "dd-mm-yy",
    changeMonth: true,
    changeYear: true,
    yearRange: "-30:+0",
  });
  $( "#anim" ).on( "change", function() {
    $( "#Rform2" ).datepicker( "option", "showAnim", $( this ).val() );
  });
});

$( function() {
  $(".next_fs").click(function(){
    current_fs = $(this).closest("fieldset");
    next_fs = $(this).closest("fieldset").next();
    backimg_fs = $(this).closest(".Reg");


    current_fs.animate({opacity: 0}, {
      step: function(now, mx) {
        next_fs.css({'opacity': "1"});
        if(current_fs.hasClass("f1")){
          backimg_fs.css({
            "background-image": "linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('images/Background4.jpeg')",
            "background-repeat":"no-repeat",
            "background-attachment": "fixed",
            "background-position": "center",
            "-webkit-background-size": "cover",
            "-moz-background-size": "cover",
            "-o-background-size": "cover",
            "background-size": "cover"
          });
        }
        else{
          backimg_fs.css({
            "background-image": "linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('images/Background5.jpeg')",
            "background-repeat":"no-repeat",
            "background-attachment": "fixed",
            "background-position": "center",
            "-webkit-background-size": "cover",
            "-moz-background-size": "cover",
            "-o-background-size": "cover",
            "background-size": "cover"
          });
        }
      },
      duration: 300,
      complete: function(){
        $('html,body').animate({scrollTop: $("#band").offset().top},'slow');
        current_fs.hide();
        next_fs.show();
      },
    });
  });
});

$( function() {
  $(".prev_fs").click(function(){
    current_fs = $(this).closest("fieldset");
    prev_fs = $(this).closest("fieldset").prev();
    backimg_fs = $(this).closest(".Reg");

    current_fs.animate({opacity: 0}, {
      step: function(now, mx) {
        prev_fs.css({"opacity": "1"});
        if (current_fs.hasClass("f2")){
          backimg_fs.css({
            "background-image": "linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('images/Background3.jpeg')",
            "background-repeat":"no-repeat",
            "background-attachment": "fixed",
            "background-position": "center",
            "-webkit-background-size": "cover",
            "-moz-background-size": "cover",
            "-o-background-size": "cover",
            "background-size": "cover"
          });
        }
        else {
          backimg_fs.css({
            "background-image": "linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('images/Background4.jpeg')",
            "background-repeat":"no-repeat",
            "background-attachment": "fixed",
            "background-position": "center",
            "-webkit-background-size": "cover",
            "-moz-background-size": "cover",
            "-o-background-size": "cover",
            "background-size": "cover"
          });
        }
      },
      duration: 300,
      complete: function(){
        $('html,body').animate({scrollTop: $("#band").offset().top},'slow');
        current_fs.hide();
        prev_fs.show();
      },
    });
  });
});

$( function() {
  $('input:radio[name="Perma"]').change(
    function(){
      if ($(this).is(':checked') && $(this).val() == 'Yes') {
        $(".temp").hide();
        $('#Rform13').val($("#Rform7").val());
        $('#Rform14').val($("#Rform8").val());
        $('#Rform15').val($("#Rform9").val());
        $('#Rform16').val($("#Rform10").val());
        $('#Rform17').val($("#Rform11").val());
      }
      else {
        $(".temp").show();
        $('#Rform13').val("");
        $('#Rform14').val("");
        $('#Rform15').val("");
        $('#Rform16').val("");
        $('#Rform17').val("");
      }
    });
  });

  $( function() {
    $('.relationship').change(function(){
      if (this.value == 'Other') {
        $(".temp2").show();
      }
      else {
        $(".temp2").hide();
        $("#Rform20").val("");
      }
    });
  });

  $( function() {
    var errMessage = "";

    $("input[name='next1']").on('click',function validate1(){
      validateName();
      validateDOB();
      validateCat();
      validateDisable()

      if (errMessage == "") {
      }
      else {
        window.alert(errMessage);
        errMessage = "";
        $("input[name='prev1']" ).trigger( "click" );
      }
    });

    function validateName() {
      var name = document.forms["Rform"]["name"].value;
      if( name == "") {
        errMessage += "Invalid Name\n";
        return false;
      }
    };

    function validateDOB() {
      var dob = document.forms["Rform"]["dob"].value;
      var pattern = new RegExp(/\b\d{1,2}[\/-]\d{1,2}[\/-]\d{4}\b/);
      if(!pattern.test(dob)) {
        errMessage += "Invalid Date Of Birth\n";
        return false;
      }
    };

    function validateCat() {
      var cat = document.forms["Rform"]["cat"].value;
      if(cat == "Category") {
        errMessage += "Invalid Category\n";
        return false;
      }
    };

    function validateDisable() {
      if($('input[name=disability]:checked').length == 0) {
        errMessage += "Disability type not selected\n";
        return false;
      }
    };
  });



  $( function() {
    var errMessage2 = "";

    $("input[name='next2']").on('click',function validate2(){
      validateTel();
      validateEmail();
      validatePerma();
      validatePC();
      validateNull();
      if($('input[name=Perma]:checked').value=='No'){
        validatePC2();
      }

      if (errMessage2 == "") {
      }
      else {
        window.alert(errMessage2);
        errMessage2 = "";
        $("input[name='prev2']" ).trigger( "click" );
      }
    });

    function validateTel() {
      var pattern = new RegExp(/\b\d{10}\b/);
      var tel = document.forms["Rform"]["mobilenumber"].value;
      if(!pattern.test(tel)) {
        errMessage2 += "Invalid mobile number\n";
        return false;
      }
    };

    function validateEmail() {
      var email = document.forms["Rform"]["email"].value;
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if(!pattern.test(email)) {
        errMessage2 += "Invalid Email ID\n";
        return false;
      }
    };

    function validatePerma() {
      if($('input[name=Perma]:checked').length == 0) {
        errMessage2 += "Invalid same address response\n";
        return false;
      }
    };

    function validatePC() {
      var pattern = new RegExp(/\b\d{6}\b/);
      var pc = document.forms["Rform"]["postcode"].value;
      if(!pattern.test(pc)) {
        errMessage2 += "Invalid Postcode\n";
        return false;
      }
    };

    function validatePC2() {
      var pattern = new RegExp(/\b\d{6}\b/);
      var pc2 = document.forms["Rform"]["Cpostcode"].value;
      if(!pattern.test(pc2)) {
        errMessage2 += "Invalid Postcode\n";
        return false;
      }
    };

    function validateNull() {
      var line1 = document.forms["Rform"]["line1"].value;
      var city = document.forms["Rform"]["city"].value;
      var state = document.forms["Rform"]["state"].value;
      var country = document.forms["Rform"]["country"].value;
      if($('input[name=Perma]:checked').value=='No'){
        var ccline1 = document.forms["Rform"]["Cline1"].value;
        var cccity = document.forms["Rform"]["Ccity"].value;
        var ccstate = document.forms["Rform"]["Cstate"].value;
        var cccountry = document.forms["Rform"]["Ccountry"].value;
        if((ccline1=="")||(cccity=="")||(ccstate=="")||(cccountry="")) {
          errMessage2 += "Fill all fields\n";
          return false;
        }
      }
      if((line1=="")||(city=="")||(state=="")||(country="")) {
        errMessage2 += "Fill all fields\n";
        return false;
      }
    };
  });

  var subflg2 = "0";
  var subflg = "0";

  $( function() {
    var errMessage3 = "";

    $("input[name='submit']").on('click',function validate1(){
      validateEName();
      validateRel();
      validateEtel();
      validateEemail()

      if (errMessage3 == "") {
        subflg="0"
      }
      else {
        window.alert(errMessage3);
        errMessage3 = "";
        subflg="1";
      }
    });

    function validateEName() {
      var name = document.forms["Rform"]["Ename"].value;
      if( name == "") {
        errMessage3 += "Invalid Name\n";
        return false;
      }
    };

    function validateRel() {
      var rel = document.forms["Rform"]["relationship"].value;
      if(rel == "Relationship") {
        errMessage3 += "Invalid Relationship\n";
        return false;
      }
    };

    function validateEtel() {
      var pattern = new RegExp(/\b\d{10}\b/);
      var tel = document.forms["Rform"]["Emobilenumber"].value;
      if(!pattern.test(tel)) {
        errMessage3 += "Invalid mobile number\n";
        return false;
      }
    };

    function validateEemail() {
      var email = document.forms["Rform"]["Eemail"].value;
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if(!pattern.test(email)) {
        errMessage3 += "Invalid Email ID\n";
        return false;
      }
    };
  });

  $('#form2').submit(function() {
    if(subflg == "0"){
      if(!alert('Thank you for your registration!')){
        window.location.reload();
        return true;
      }
    }
    else{
      return false;
    }
  });

  $('#form').submit(function() {
    if(subflg2 == "0"){
      if(!alert('Thank you for your query!')){
        window.location.reload();
        return true;
      }
    }
    else{
      return false;
    }
  });

  $( function() {
    var errMessage4 = "";

    $("input[name='submit2']").on('click',function validate1(){
      validateEEName();
      validateEEemail();
      validateEEtel();
      validateMes();

      if (errMessage4 == "") {
        subflg2="0"
      }
      else {
        window.alert(errMessage4);
        errMessage4 = "";
        subflg2="1";
      }
    });

    function validateEEName() {
      var name = document.forms["Eform"]["name"].value;
      if( name == "") {
        errMessage4 += "Invalid Name\n";
        return false;
      }
    };

    function validateEEemail() {
      var email = document.forms["Eform"]["email"].value;
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if(!pattern.test(email)) {
        errMessage4 += "Invalid Email ID\n";
        return false;
      }
    };

    function validateEEtel() {
      var pattern = new RegExp(/\b\d{10}\b/);
      var tel = document.forms["Eform"]["mobilenumber"].value;
      if(!pattern.test(tel)) {
        errMessage4 += "Invalid mobile number\n";
        return false;
      }
    };

    function validateMes() {
      var mes = document.forms["Eform"]["message"].value;
      if(mes=="") {
        errMessage4 += "Invalid Message\n";
        return false;
      }
    };
  });
