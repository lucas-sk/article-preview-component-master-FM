const socialMedia = document.querySelector('.social-media');
const socialMediaBtn = document.querySelector('.social-media button');
const perfil = document.querySelector('.perfil')
const perfilBtn = document.querySelector('.perfil button');

function showSocialMedia(){
  if (window.matchMedia("(min-width: 501px)").matches) {
    
    if (socialMedia.classList.contains('hidden')){
      socialMedia.classList.remove('hidden');
      perfilBtn.classList.add('share-btn-active');
    }
    else{
      socialMedia.classList.add('hidden');
      perfilBtn.classList.remove('share-btn-active');
    } 
  } 
  else {
    if (socialMedia.classList.contains('hidden')){
      socialMedia.classList.remove('hidden');
      perfil.classList.add('hidden');
      socialMediaBtn.classList.remove('hidden');
      socialMediaBtn.classList.add('share-btn-active');
    }
    else{
      socialMedia.classList.add('hidden');
      perfil.classList.remove('hidden');
      
    }
    
  }
}