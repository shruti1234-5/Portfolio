function changeText(){
    // const aboutmeText = ["Web Developer","defg","efhuor"]
    const aboutmeText = "Web Developer"
    const typingSpeed = 100;
    const eraseSpeed = 50;
    const pauseTime = 1500;
    const aboutMeElement = document.querySelector('.about-me');
    let textIndex = 0;
    let charIndex =0;
    let isDeleting = false;
    
    function type(){
        const Text = aboutmeText;
        if (!isDeleting  && charIndex < Text.length )
        {
            aboutMeElement.textContent += Text[charIndex];
            charIndex++;
            setTimeout(type,typingSpeed); 
        }
        else if (isDeleting && charIndex > 0)
                 {
                    aboutMeElement.textContent = Text.substring(0, charIndex - 1);
                    charIndex--;
                    setTimeout(type,eraseSpeed);
                 }
        else
              {
            isDeleting = !isDeleting;
            if(!isDeleting){
                textIndex = (textIndex + 1) % aboutmeText.length;
            }
            setTimeout(type,pauseTime);
             }
    }
type();
}

document.addEventListener('DOMContentLoaded',function(){
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    darkModeToggle.addEventListener('click',()=>{
        body.classList.toggle('dark-mode');
        const currentMode = body.classList.contains('dark-mode')?'Dark':'Light';
        darkModeToggle.querySelector('i').classList.toggle('fa-sun');
        darkModeToggle.querySelector('i').classList.toggle('fa-moon');
        darkModeToggle.querySelector('i').classList.toggle('light-mode');
    });
});

changeText();

document.addEventListener('DOMContentLoaded',function(){
    const observer = new IntersectionObserver(entries=>{
        entries.forEach(entry => {
            if(entry.isIntersecting)
            {
                const progressBar = entry.target.querySelector('.progress-bar');
                const progress = progressBar.dataset.progress;
                progressBar.style.setProperty('--progress',`${progress}%`);
                progressBar.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    });
    const programmingLang = document.querySelectorAll('#programming-lang .skill');
    programmingLang.forEach(skill=>{
        observer.observe(skill);
    });
}
);











// function type()
    // {
    //      const currentText = aboutmeText[textIndex];

    //      if (!isDeleting && charIndex < currentText.length)
    //      {
    //         aboutMeElement.textContent += currentText[charIndex];
    //         charIndex++;
    //         setTimeout(type,typingSpeed);
    //      }
    //      else if (isDeleting && charIndex > 0)
    //      {
    //         aboutMeElement.textContent = currentText.substring(0, charIndex - 1);
    //         charIndex--;
    //         setTimeout(type,eraseSpeed);
    //      }
    //      else
    //       {
    //     isDeleting = !isDeleting;
    //     if(!isDeleting){
    //         textIndex = (textIndex + 1) % aboutmeText.length;
    //     }
    //     setTimeout(type,pauseTime);
    //      }
    // }
