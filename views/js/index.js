// Utils
const getById = (id) => document.getElementById(id);

let allUsers = [];
let isInEditMode = false;

// Main elements
let addButton = getById("add-button");

const usersListContainer = getById("user-list");

// Form input elements
const first_nameInput = getById("first_name");
const last_nameInput = getById("last_name");
const passwordInput = getById("user_password");
const phonenumberInput = getById("phone_number")
const emailInput = getById("email_address");

const renderItem = (values) => {
  return `
  <li class="user-item" id="${values.id}">
    <div class="field">${values.first_name}</div>
    <div class="field">${values.last_name}</div>
    <div class="field">${values.user_password}</div>
    <div class="field">${values.phone_number}</div>
    <div class="field">${values.email_address}</div>
    <button class="filed-edit" onClick="onItemEditClick('${values.id}')">Edit</button>
    <button class="filed-delete" onClick="onItemDeleteClick('${values.id}')">Delete</button>
  </li>
  `;
};

const clearInputs = () => {
  first_nameInput.value = "";
  last_nameInput.value = "";
  passwordInput.value = "";
  phonenumberInput.value = "";
  emailInput.value = "";
};

const clearContainer = () => {
  usersListContainer.innerHTML = "";
};

const renderAllItems = async () => {
  clearContainer();

  const users = await Api.fetchAllUsers();

  users.forEach((user) => {
    usersListContainer.insertAdjacentHTML("afterbegin", renderItem(user));
  });
};

const switchEditAddMode = (isEdit, id) => {
  addButton.innerHTML = isEdit ? "Edit" : "Add";
  isInEditMode = isEdit;

  const updatedButton = addButton.cloneNode(true);
  addButton.parentNode.replaceChild(updatedButton, addButton);
  addButton = updatedButton;

  addButton.addEventListener(
    "click",
    isEdit ? () => onSubmitEditClicked(id) : onAddItemClick
  );
};

const onItemEditClick = (id) => {
  const foundUsers = allUsers.find((user) => +id === +user.id);

  first_nameInput.value = foundUsers.first_name;
  last_nameInput.value = foundUsers.last_name;
  passwordInput.value = foundUsers.user_password;
  phonenumberInput.value = foundUsers.phone_number;
  emailInput.value = foundUsers.email_address;

  switchEditAddMode(true, id);
};

const onItemDeleteClick = (id) => {
  Api.deleteUser(id);

  renderAllItems();
};

const onAddItemClick = () => {
  const item = {
    first_name: first_nameInput.value,
    last_name: last_nameInput.value,
    user_password: passwordInput.value,
    phone_number: phonenumberInput.value,
    email_address: emailInput.value,
  };

  Api.uploadUsers(item);

  clearInputs();

  renderAllItems();
};

const onSubmitEditClicked = (id) => {
  const updatedItem = {
    first_name: first_nameInput.value,
    last_name: last_nameInput.value,
    user_password: passwordInput.value,
    phone_number: phonenumberInput.value,
    email_address: emailInput.value,
  };

  Api.editUser(id, updatedItem);

  clearInputs();

  renderAllItems();

  switchEditAddMode(false);
};

addButton.addEventListener("click", onAddItemClick);
renderAllItems();
