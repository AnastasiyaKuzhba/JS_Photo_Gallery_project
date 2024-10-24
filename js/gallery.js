/*Name this external file gallery.js*/

const previewImages = document.querySelectorAll('.preview');

/*
console.log("previewImages = " + previewImages + " size = " + previewImages.length);
*/

previewImages.forEach(image => {
    image.addEventListener('focus', () => {
        image.classList.add('focused');
        upDate(image);
    });

    image.addEventListener('blur', () => {
        image.classList.remove('focused');
        unDo();
    });
});


//previewImages[0].focus();

function upDate(previewPic){
  let mainDiv = document.querySelector('#image');
  const url = previewPic.src;
  mainDiv.innerHTML = previewPic.alt; //We can use here innerHTML or textContent
  mainDiv.style.backgroundImage = `url('${url}')`;
	}

	function unDo(){
    const mainDiv = document.querySelector('#image');
    mainDiv.textContent = "Hover over an image below to display the description here."; //We can use here innerHTML or textContent
    mainDiv.style.backgroundImage = "";
	}

  function onLoad() {
    setTimeout(showGreetings, 1000); // heavy loading imitation
    const previewImages = document.querySelectorAll('.preview');
    // Loop through each image and set a tabindex attribute dynamically
    previewImages.forEach((img, index) => {
        img.setAttribute('tabindex', index + 1); // Assign tabindex starting from 1
    });
  }

  function showGreetings() {
    const textGreetings = document.getElementById('greetings');
    textGreetings.style.visibility = 'visible'
  }

  /*
  const imageElement = document.querySelectorAll('.preview');

  imageElement.addEventListener('focus', () => {
    const border = imageElement.style.borderColor = "green";
    console.log('border');
  });

  imageElement.addEventListener('blur', () => {
    imageElement.style.borderColor = "black";
  });
  */