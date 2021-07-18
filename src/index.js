const onClickAdd = () => {
  //inputを取得する
  const inputText = document.getElementById('add_text').value;
  document.getElementById('add_text').value = '';

  //create div
  const li = document.createElement('li');
  li.className = 'list-row';

  const div = document.createElement('div');
  div.innerHTML = inputText;

  const completeButton = document.createElement('button');
  completeButton.innerText = 'Fin';
  completeButton.addEventListener('click', () => {
    deleteFromIncompleteList(completeButton.parentNode);
  });

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.addEventListener('click', () => {
    //親のliを削除する
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //liのなかにdivを定義
  li.appendChild(div);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById('incomplete_list').appendChild(li);
};

document.getElementById('add-button').addEventListener('click', () => {
  onClickAdd();
});

const deleteButtonList = document.getElementsByClassName('delete_task');
for (let i = 0; i < deleteButtonList.length; i++) {
  const deleteButtonTag = deleteButtonList[i];
  deleteButtonTag.addEventListener('click', () => {
    deleteFromIncompleteList(deleteButtonTag.parentNode);
  });
}

const finButtonList = document.getElementsByClassName('finish_task');

//削除する部分を共通化
const deleteFromIncompleteList = (target) => {
  document.getElementById('incomplete_list').removeChild(target);
};
