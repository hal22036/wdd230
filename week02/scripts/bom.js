const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');



button.addEventListener('click', () => {
    if(input.value != ''){
      const li =document.createElement('li');
      const deleteButton = document.createElement('button');  
      li.textContent = input.value;
      deleteButton.textContent = '❌';
      li.append(deleteButton);
      list.append(li);
      deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        input.focus();
    });
    }
    else {
        input.focus();
        alert('Input is Empty')
    };
});

input.focus();
input.value = '';