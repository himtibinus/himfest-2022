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

  // Check checkbox
  if(!checkbox){
    document.getElementById('unchecked-box').innerHTML = "Must be checked";
    return false;
  }

  // Check Blank  
  if(!(data.event_id >= 1 & data.event_id <= 4)){
    document.getElementById('error-event').innerHTML = "Required";
    flag=false;
  }
  if(!data.team_name){
    document.getElementById('error-team').innerHTML = "Required";
    flag=false;
  }
  if(!data.email_address){
    document.getElementById('error-email').innerHTML = "Required";
    flag=false;
  }
  if(!data.leader_nim){
    document.getElementById('error-nim1').innerHTML = "Required";
    flag=false;
  }
  if(!data.leader_name){
    document.getElementById('error-anggota1').innerHTML = "Required";
    flag=false;
  }
  if(!data.university){
    document.getElementById('error-universitas').innerHTML = "Required";
    flag=false;
  }
  if(!data.line_id){
    document.getElementById('error-line').innerHTML = "Required";
    flag=false;
  }
  if(!data.whatsapp_number){
    document.getElementById('error-wa').innerHTML = "Required";
    flag=false;
  }
  if(!data.url){
    document.getElementById('error-link').innerHTML = "Required";
    flag=false;
  }
  if(!data.payer_name){
    document.getElementById('error-sender').innerHTML = "Required";
    flag=false;
  }
  
  if(data.email_address!="" & !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email_address))){
    document.getElementById('error-email').innerHTML = "Invalid Email";
    flag=false;
  }

  if(data.url!="" & !(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(data.url))){
    document.getElementById('error-link').innerHTML = "Invalid URL";
    flag=false;
  }

  if(data.leader_name!="" & !(String(data.leader_name).match('^[a-zA-Z ]+$'))){
    document.getElementById('error-anggota1').innerHTML = "Must be alphabetical";
    flag=false;
  }
  if(data.member1_name!="" & !(String(data.member1_name).match('^[a-zA-Z ]+$'))){
    document.getElementById('error-anggota2').innerHTML = "Must be alphabetical";
    flag=false;
  }
  if(data.member2_name!="" & !(String(data.member2_name).match('^[a-zA-Z ]+$'))){
    document.getElementById('error-anggota3').innerHTML = "Must be alphabetical";
    flag=false;
  }
  if(data.university!="" & !(String(data.university).match('^[a-zA-Z ]+$'))){
    document.getElementById('error-universitas').innerHTML = "Must be alphabetical";
    flag=false;
  }
  if(data.payer_name!="" & !(String(data.payer_name).match('^[a-zA-Z ]+$'))){
    document.getElementById('error-sender').innerHTML = "Must be alphabetical";
    flag=false;
  }

  if(data.leader_nim!="" & !(String(data.leader_nim).match('^[0-9]+$'))){
    if(/\s/.text(String(data.leader_nim))){
      document.getElementById('error-nim1').innerHTML = "No whitespace allowed";
    }
    else{
      document.getElementById('error-nim1').innerHTML = "Must be numerical";
    } 
    flag=false;
  }
  if(data.member1_nim!="" & !(String(data.member1_nim).match('^[0-9]+$'))){
    if(/\s/.text(String(data.member1_nim))){
      document.getElementById('error-nim2').innerHTML = "No whitespace allowed";
    }
    else{
      document.getElementById('error-nim2').innerHTML = "Must be numerical";
    }
    flag=false;
  }
  if(data.member2_nim!="" & !(String(data.member2_nim).match('^[0-9]+$'))){
    if(/\s/.text(String(data.member2_nim))){
      document.getElementById('error-nim3').innerHTML = "No whitespace allowed";
    }
    else{
      document.getElementById('error-nim3').innerHTML = "Must be numerical & no whitespace";
    }
    
    flag=false;
  }

  if(/\s/.test(data.line_id)){
    document.getElementById('error-line').innerHTML = 'No whitespace allowed';
    flag=false;
  }

  if(data.whatsapp_number!="" & (!((String(data.whatsapp_number).startsWith('0')) | (String(data.whatsapp_number).startsWith('+62')))))   {
    document.getElementById('error-wa').innerHTML = 'Invalid phone number format';
    flag=false;
  }
  else if (!(String(data.whatsapp_number).length >= 10 & String(data.whatsapp_number).length <= 14)){
    document.getElementById('error-wa').innerHTML = 'Length between 10-14';
    flag=false;
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

  console.log(JSON.stringify(data));

  if(validate(data, formData.get('doublecheck'))){
    fetch('https://api.techfest.himtibinus.or.id/api/register', {
      method: 'POST',
      body: JSON.stringify(data),
	    headers: {
    		'Content-type': 'application/json; charset=UTF-8'
    	}
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        console.log(data);
        if(data.message === 'Success'){
          alert(
            "Terima kasih sudah menyelesaikan registrasi competition TECHFEST 2022! \nPanita akan melakukan validasi berdasarkan data yang kamu kirimkan, dan informasi selanjutnya akan kami kirim melalui e-mail. So, pastikan lagi email kamu valid ya!");
          window.location.reload();
        }
    });
  }
});