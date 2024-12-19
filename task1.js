// Задание 1 

export const task1 = function () {
    const newForm = document.querySelector("body");
  
    const badExample = function () {
      newForm.innerHTML = ` <form class="create-user-form"> <label> Имя <input type="text" name="userName" placeholder="Введите ваше имя"> </label> <label> Пароль <input type="password" name="password" placeholder="Придумайте Пароль"> </label> <button type="submit"> Подтвердить </button> <button type='button' class='button'>Очистить форму</button></form> `;
  
      function clearForm() {
        const $userName = document.querySelector("input[name='userName']");
        const $userPassword = document.querySelector("input[name='password']");
        const $resetButton = document.querySelector(".button[type='button']");
        console.log($userName, $userPassword, $resetButton);
  
        $resetButton.addEventListener("click", (event) => {
          console.log(event);
          $userName.value = "";
          $userPassword.value = "";
        });
      }
      clearForm();
    };
  
    // badExample();
  
    const goodExample = function () {
      const createForm = function () {
        const $form = document.createElement("form");
        $form.className = "create-user-form";
  
        const $labelName = document.createElement("label");
        $labelName.textContent = "Имя";
  
        const $inputName = document.createElement("input");
        $inputName.type = "text";
        $inputName.name = "userName";
        $inputName.placeholder = "Введите ваше имя";
  
        $labelName.appendChild($inputName);
  
        const $labelPassword = document.createElement("label");
        $labelPassword.textContent = "Пароль";
  
        const $inputPassword = document.createElement("input");
        $inputPassword.type = "password";
        $inputPassword.name = "password";
        $inputPassword.placeholder = "Придумайте Пароль";
  
        $labelPassword.appendChild($inputPassword);
  
        const $button = document.createElement("button");
        $button.type = "submit";
        $button.textContent = "Подтвердить";
  
        const $resetButton = document.createElement("button");
        $resetButton.type = "button";
        $resetButton.textContent = "Очистить форму";
  
        $form.append($labelName,$labelPassword,$button,$resetButton);
  
        document.body.appendChild($form);
  
        return {$inputName, $inputPassword, $resetButton}
      };
      const $formElements = createForm();
      console.log($formElements)
      
      const clearForm = function($formElements) {
        console.log($formElements)
        $formElements.$inputName.value = ''
        $formElements.$inputPassword.value = ''
      }
  
      const attachListeners = function($formElements) {
          $formElements.$resetButton.addEventListener('click', (event) => {
          clearForm($formElements)
        })
      } 
      attachListeners($formElements)
    };
    goodExample();
  };
