const socialMedia = document.querySelector('.social-media');
const shareBtn = document.querySelector('.share-btn');
const perfil = document.querySelector('.perfil')

function createButton(className){
  let button = document.createElement('button');
  button.className = className + ' share-btn-active'
  button.setAttribute('onClick', 'showSocialMedia()')
  let img = document.createElement('img');
  img.setAttribute('src', './images/icon-share.svg')
  img.setAttribute('alt', 'icon share')
  button.appendChild(img)

  return button
}

if (window.matchMedia("(max-width: 500px)").matches) { 
  socialMedia.appendChild(createButton('share-btn'))
}

function showSocialMedia(){
  if (window.matchMedia("(max-width: 500px)").matches) { 
    if (socialMedia.classList.contains('hidden')){
      socialMedia.classList.remove('hidden');
      perfil.classList.add('hidden');
      shareBtn.classList.add('share-btn-active');
    }
    else{
      socialMedia.classList.add('hidden');
      perfil.classList.remove('hidden');
      shareBtn.classList.remove('share-btn-active');
    }
  } 
  else {
    if (socialMedia.classList.contains('hidden')){
      socialMedia.classList.remove('hidden');
      shareBtn.classList.add('share-btn-active');
    }
    else{
      socialMedia.classList.add('hidden');
      shareBtn.classList.remove('share-btn-active');
    }
  }
}