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
    alert();
  });

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.addEventListener('click', () => {
    //親のliを削除する
    const deleteTarget = deleteButton.parentNode; //parentNodeで親要素を取得する
    document.getElementById('incomplete_list').removeChild(deleteTarget);
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
    const deleteTargetDef = deleteButtonTag.parentNode;
    document.getElementById('incomplete_list').removeChild(deleteTargetDef);
  });
}
