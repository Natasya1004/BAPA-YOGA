onload = () =>{
    document.body.classList.remove("container");
};
document.querySelector('.click-hint').addEventListener('click', function() {
    document.querySelector('.intro-text').style.display = 'none';
    document.querySelector('.flower-animation').style.display = 'block';
  });
  