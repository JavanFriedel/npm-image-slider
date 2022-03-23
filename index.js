function imageSlider(images, timer) {
  const imageArray = images;
  const imageSliderContainer = document.createElement('div');
  const containingBlock = document.createElement('div');

  const dotsContainer = document.createElement('div');
  dotsContainer.style.position = 'absolute';
  dotsContainer.style.bottom = '1em';
  dotsContainer.style.left = '50%';
  dotsContainer.style.transform = 'translateX(-50%)';
  dotsContainer.style.display = 'flex';
  dotsContainer.style.gap = '10px';

  containingBlock.classList.add('containingBlock');
  containingBlock.width = '100%';
  containingBlock.style.overflow = 'hidden';
  containingBlock.style.position = 'relative';

  let intervalTimer = setInterval(function () {
    slideLeft();
  }, timer);

  let imageNumber = imageArray.length;
  let delta = 1;

  function updateDot() {
    const dotArray = dotsContainer.querySelectorAll('div');

    dotArray.forEach((dot) => {
      dot.style.backgroundColor = '#00000000';
    });

    dotArray[delta - 1].style.backgroundColor = 'white';
  }

  function slideLeft() {
    const imageBoxes = document.querySelectorAll('.imageslider-Container > *');
    if (delta >= imageNumber) {
      delta = 0;
      imageBoxes.forEach((image) => {
        image.style.transform = `translateX(-${delta * 100}%)`;
      });
    } else {
      imageBoxes.forEach((image) => {
        image.style.transform = `translateX(-${delta * 100}%)`;
      });
    }

    delta++;
    updateDot();
  }

  function slideRight() {
    const imageBoxes = document.querySelectorAll('.imageslider-Container > *');
    if (delta <= 1) {
      delta = imageNumber;
      updateDot();
      imageBoxes.forEach((image) => {
        image.style.transform = `translateX(-${(delta - 1) * 100}%)`;
      });
    } else {
      delta--;
      updateDot();

      imageBoxes.forEach((image) => {
        image.style.transform = `translateX(-${(delta - 1) * 100}%)`;
      });
    }
  }

  imageArray.forEach((image) => {
    const imageDiv = document.createElement('div');
    const imageNode = document.createElement('img');
    const imageDot = document.createElement('div');

    imageNode.src = image;
    imageNode.style.maxWidth = '100%';

    imageDiv.style.width = '100%';
    imageDiv.style.flex = '0 0 100%';
    imageDiv.style.display = 'flex';
    imageDiv.style.justifyContent = 'center';
    imageDiv.style.transition = 'all 1s ease-in-out';

    imageDot.style.width = '1em';
    imageDot.style.height = '1em';
    imageDot.style.border = '2px solid white';
    imageDot.style.borderRadius = '5px';

    dotsContainer.append(imageDot);
    imageDiv.append(imageNode);

    imageSliderContainer.append(imageDiv);
  });

  imageSliderContainer.style.overflow = 'hidden';
  imageSliderContainer.style.display = 'flex';
  imageSliderContainer.style.position = 'relative';
  imageSliderContainer.classList.add('imageslider-Container');

  const sliderLeft = document.createElement('div');
  sliderLeft.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"/></svg>';
  sliderLeft.style.position = 'absolute';
  sliderLeft.style.left = '20px';
  sliderLeft.style.top = '50%';
  sliderLeft.style.transform = 'translateY(-50%)';
  sliderLeft.style.width = '40px';
  sliderLeft.style.backgroundColor = '#FFFFFF50';
  sliderLeft.style.padding = '5px';
  sliderLeft.style.cursor = 'pointer';

  const sliderRight = document.createElement('div');
  sliderRight.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/></svg>';
  sliderRight.style.position = 'absolute';
  sliderRight.style.right = '10px';
  sliderRight.style.top = '50%';
  sliderRight.style.transform = 'translateY(-50%)';
  sliderRight.style.width = '40px';
  sliderRight.style.backgroundColor = '#FFFFFF50';
  sliderRight.style.padding = '5px';
  sliderRight.style.cursor = 'pointer';

  sliderRight.addEventListener('click', () => {
    clearInterval(intervalTimer);
    intervalTimer = setInterval(function () {
      slideLeft();
    }, timer);
    slideLeft();
  });

  sliderLeft.addEventListener('click', () => {
    clearInterval(intervalTimer);
    intervalTimer = setInterval(function () {
      slideLeft();
    }, timer);
    slideRight();
  });

  updateDot();

  containingBlock.append(
    imageSliderContainer,
    sliderLeft,
    sliderRight,
    dotsContainer
  );
  return containingBlock;
}

// const container = document.querySelector('.container');

// container.append(
//   imageSlider(
//     [
//       'https://picsum.photos/1500/700?random=1',
//       'https://picsum.photos/1500/700?random=2',
//       'https://picsum.photos/1500/700?random=3',
//       'https://picsum.photos/1500/700?random=4',
//     ],
//     5000
//   )
// );

module.exports.imageSlider = imageSlider;
