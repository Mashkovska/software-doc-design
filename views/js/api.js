const ENDPOINT = "/api/user/";

class Api {
  static async fetchAllUsers() {
    const response = await fetch(ENDPOINT);

    const result = await response.json();

    allUsers = result;

    return result;
  }

  static async uploadUsers(user) {
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(user),
      });

      await response.text();
    } catch (err) {
      console.log(err);

      alert("Please, check the input params");
    }
  }

  static async editUser(id, user) {
    try {
      const response = await fetch(`${ENDPOINT}${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(user),
      });

      await response.text();
    } catch (err) {
      console.log(err);

      alert("Please, check the input params");
    }
  }

  static async deleteUser(id) {
    const response = await fetch(`${ENDPOINT}${id}`, {
      method: "DELETE",
    });

    await response.text();
  }
}
