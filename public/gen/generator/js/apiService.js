


/** apiService.js **/

function get(api){
    //get some data

    if (api == "MYCLINICALS"){

      //example return  
      var json = `[{"HOSPITAL":"Cleveland Clinic","STUDY":"HE2","RAND_NO":521,"PATIENT":"RR","PROCEDURE_ID":"BE5-16-A-1","HES":55,"FILL":17,"RAC_ID":4884},
      {"HOSPITAL":"Cleveland Clinic","STUDY":"HE2","RAND_NO":521,"PATIENT":"RR","PROCEDURE_ID":"BE5-16-A-1","HES":55,"FILL":17,"RAC_ID":4884},
      {"HOSPITAL":"Cleveland Clinic","STUDY":"HE2","RAND_NO":521,"PATIENT":"RR","PROCEDURE_ID":"BE5-16-A-1","HES":55,"FILL":17,"RAC_ID":4884},
      {"HOSPITAL":"Cleveland Clinic","STUDY":"HE2","RAND_NO":521,"PATIENT":"RR","PROCEDURE_ID":"BE5-16-A-1","HES":55,"FILL":17,"RAC_ID":4884},
      {"HOSPITAL":"Cleveland Clinic","STUDY":"HE2","RAND_NO":521,"PATIENT":"RR","PROCEDURE_ID":"BE5-16-A-1","HES":55,"FILL":17,"RAC_ID":4884},
      {"HOSPITAL":"Cleveland Clinic","STUDY":"HE2","RAND_NO":521,"PATIENT":"RR","PROCEDURE_ID":"BE5-16-A-1","HES":55,"FILL":17,"RAC_ID":4884},
      {"HOSPITAL":"Cleveland Clinic","STUDY":"HE2","RAND_NO":521,"PATIENT":"RR","PROCEDURE_ID":"BE5-16-A-1","HES":55,"FILL":17,"RAC_ID":4884},
      {"HOSPITAL":"Cleveland Clinic","STUDY":"HE2","RAND_NO":521,"PATIENT":"RR","PROCEDURE_ID":"BE5-16-A-1","HES":55,"FILL":17,"RAC_ID":4884},
      {"HOSPITAL":"Cleveland Clinic","STUDY":"HE2","RAND_NO":521,"PATIENT":"RR","PROCEDURE_ID":"BE5-16-A-1","HES":55,"FILL":17,"RAC_ID":4884}]`

      return JSON.parse(json);
    }
    else {
        return `[ "error" : "no results" ]`
    }
  }