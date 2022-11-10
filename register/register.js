var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    if (currentScrollPos <= 200) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-150px";
    }
  }
  prevScrollpos = currentScrollPos;
};

const validate = (data, checkbox) => {
  let flag = true;
  let errorTags = document.getElementsByClassName('error-tag');

  for (const tag of errorTags) {
    tag.innerHTML = ""
  }

  // Validation (bottom up)

  // payer
  if(!data.payer_name){
    document.getElementById('error-sender').innerHTML = "Required";
    document.getElementById("payer-input").focus();
    flag=false;
  }
  else if (data.payer_name!="" & !(String(data.payer_name).match('^[a-zA-Z ]+$'))){
    document.getElementById('error-sender').innerHTML = "Must be alphabetical";
    document.getElementById("payer-input").focus();
    flag=false;
  }
  
  // url
  if(!data.url){
    document.getElementById('error-link').innerHTML = "Required";
    document.getElementById("url-input").focus();
    flag=false;
  }
  else if (data.url!="" & !(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(data.url))){
    document.getElementById('error-link').innerHTML = "Invalid URL";
    document.getElementById("url-input").focus();
    flag=false;s
  }

  // wa
  if(!data.whatsapp_number){
    document.getElementById('error-wa').innerHTML = "Required";
    document.getElementById("wa-input").focus();
    flag=false;
  }
  else if (data.whatsapp_number!="" & (!((String(data.whatsapp_number).startsWith('0')) | (String(data.whatsapp_number).startsWith('+62')))))   {
    document.getElementById('error-wa').innerHTML = 'Invalid phone number format';
    document.getElementById("wa-input").focus();
    flag=false;
  }
  else if (!(String(data.whatsapp_number).length >= 10 & String(data.whatsapp_number).length <= 14)){
    document.getElementById('error-wa').innerHTML = 'Length between 10-14';
    document.getElementById("wa-input").focus();
    flag=false;
  }

  // line
  if(!data.line_id){
    document.getElementById('error-line').innerHTML = "Required";
    document.getElementById("line-input").focus();
    flag=false;
  }
  else if(/\s/.test(data.line_id)){
    document.getElementById('error-line').innerHTML = 'No whitespace allowed';
    document.getElementById("line-input").focus();
    flag=false;
  }
  
  // member validation
  if(data.member1_nim!="" & !(String(data.member1_nim).match('^[0-9]+$'))){
    if(/\s/.test(String(data.member1_nim))){
      document.getElementById('error-nim2').innerHTML = "No whitespace allowed";
    }
    else{
      document.getElementById('error-nim2').innerHTML = "Must be numerical";
    }

    flag=false;
  }
  if(data.member2_nim!="" & !(String(data.member2_nim).match('^[0-9]+$'))){
    if(/\s/.test(String(data.member2_nim))){
      document.getElementById('error-nim3').innerHTML = "No whitespace allowed";
    }
    else{
      document.getElementById('error-nim3').innerHTML = "Must be numerical & no whitespace";
    }
    
    flag=false;
  }

  // members' names
  if(data.member1_name!="" & !(String(data.member1_name).match('^[a-zA-Z ]+$'))){
    document.getElementById('error-anggota2').innerHTML = "Must be alphabetical";
    flag=false;
  }
  if(data.member2_name!="" & !(String(data.member2_name).match('^[a-zA-Z ]+$'))){
    document.getElementById('error-anggota3').innerHTML = "Must be alphabetical";
    flag=false;
  }

  // leader nim
  if(!data.leader_nim){
    document.getElementById('error-nim1').innerHTML = "Required";
    document.getElementById("leader-nim-input").focus();
    flag=false;
  }
  else if(data.leader_nim!="" & !(String(data.leader_nim).match('^[0-9]+$'))){
    if(/\s/.test(String(data.leader_nim))){
      document.getElementById('error-nim1').innerHTML = "No whitespace allowed";
    }
    else{
      document.getElementById('error-nim1').innerHTML = "Must be numerical";
    } 
    document.getElementById("leader-nim-input").focus();
    flag=false;
  }

  // leader name
  if(!data.leader_name){
    document.getElementById('error-anggota1').innerHTML = "Required";
    document.getElementById("leader-name-input").focus();
    flag=false;
  }
  else if(data.leader_name!="" & !(String(data.leader_name).match('^[a-zA-Z ]+$'))){
    document.getElementById('error-anggota1').innerHTML = "Must be alphabetical";
    document.getElementById("leader-name-input").focus();
    flag=false;
  }

  // university
  if(!data.university){
    document.getElementById('error-universitas').innerHTML = "Required";
    document.getElementById("university-input").focus();
    flag=false;
  }
  else if(data.university!="" & !(String(data.university).match('^[a-zA-Z ]+$'))){
    document.getElementById('error-universitas').innerHTML = "Must be alphabetical";
    document.getElementById("university-input").focus();
    flag=false;
  }
  
  // email
  if(!data.email_address){
    document.getElementById('error-email').innerHTML = "Required";
    document.getElementById("email-input").focus();
    flag=false;
  }
  else if(data.email_address!="" & !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email_address))){
    document.getElementById('error-email').innerHTML = "Invalid Email";
    document.getElementById("email-input").focus();
    flag=false;
  }

  // team
  if(!data.team_name){
    document.getElementById('error-team').innerHTML = "Required";
    document.getElementById("team-name-input").focus();
    flag=false;
  }

  // event
  if(!(data.event_id >= 1 & data.event_id <= 4)){
    document.getElementById('error-event').innerHTML = "Required";
    document.getElementById("event").focus();
    flag=false;
  }


  // Check checkbox
  if(!checkbox){
    document.getElementById('unchecked-box').innerHTML = "Must be checked";
    document.getElementById('doublecheck').focus();
    return false;
  }

  return flag;
}

const eventSelector = document.getElementById("event");

eventSelector.addEventListener('change', () => {
  document.getElementById('total-price').innerHTML = 'Rp. 75.000,00';
});

const btn = document.getElementById("submit-btn");

btn.addEventListener('click', () => {
  const formData = new FormData(document.getElementById('regist-form'));

  let data = {
    event_id: formData.get('event'),
    team_name: formData.get('tim'),
    email_address: formData.get('email'),
    leader_nim: formData.get('nim1'),
    leader_name: formData.get('anggota1'),
    member1_nim: formData.get('nim2'),
    member1_name: formData.get('anggota2'),
    member2_nim: formData.get('nim3'),
    member2_name: formData.get('anggota3'),
    university: formData.get('universitas'),
    line_id: formData.get('line'),
    whatsapp_number: formData.get('wa'),
    url: formData.get('link'),
    payer_name: formData.get('sender')
  };

  if(data.event_id === 'techexpo'){
    data.event_id = 1;
  }
  else if(data.event_id === 'techtalk') {
    data.event_id = 2;
  }
  else if(data.event_id === 'uiux') {
    data.event_id = 3;
  }
  else if(data.event_id === 'mobile') {
    data.event_id = 4;
  }

  if(validate(data, formData.get('doublecheck'))){
    fetch('https://api.techfest.himtibinus.or.id/api/register', {
      method: 'POST',
      body: JSON.stringify(data),
	    headers: {
    		'Content-type': 'application/json; charset=UTF-8'
    	}
    }).then(function(response) {
        // console.log(response.json());
        return response.json();
    }).then(function(data) {
        console.log(data);
        if(data.message === 'Success'){
          alert(
            "Terima kasih sudah menyelesaikan registrasi competition TECHFEST 2022! \nPanita akan melakukan validasi berdasarkan data yang kamu kirimkan, dan informasi selanjutnya akan kami kirim melalui e-mail. So, pastikan lagi email kamu valid ya!");
          window.location.href = "https://techfest.himtibinus.or.id/";
        }
        else{
          if('email_address' in data){
            document.getElementById('error-email').innerHTML ="Email address already exists!";
            document.getElementById("email-input").focus();
          }
          if('team_name' in data){
            document.getElementById('error-team').innerHTML ="Team name already exists!";
            document.getElementById("team-name-input").focus();
          }
        }
    });
  }
  else {
    // document.documentElement.scrollTop=0;
  }
});