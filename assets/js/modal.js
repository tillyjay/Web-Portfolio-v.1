//open a modal
const openModal = (modalId, cardId, spanClassIndex) => {
  const modal = document.getElementById(modalId);
  const card = document.getElementById(cardId);
  const span = document.getElementsByClassName("close")[spanClassIndex];

  //open modal on card click
  card.onclick = () => modal.style.display = "block";

  //close modal on X click
  span.onclick = () => modal.style.display = "none";
};

//modal card one
openModal("modalWindowOne", "cardOne", 0);

//modal card two
openModal("modalWindowTwo", "cardTwo", 1);

//modal card three
openModal("modalWindowThree", "cardThree", 2);

//modal card four
openModal("modalWindowFour", "cardFour", 3);

//modal card five
openModal("modalWindowFive", "cardFive", 4);

//modal card six
openModal("modalWindowSix", "cardSix", 5);

//event listener for card image click to show modal section
document.querySelector('.card-img').addEventListener('click', () => {
  document.getElementById('modalsSection').style.display = 'block';
  document.getElementById('modalsSectionCont').style.display = 'block';
});
