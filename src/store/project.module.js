// import ProjectService from "@/services/api/project.service";
const state = {
    name: "something"
  };
const getters = {
    getFullName() {
        console.log("something")
        let firstName = "John";
        let lastName = "Doe";
        return `full name : ${firstName} ${lastName}`;
      },
};

export default {
    namespaced: true,
    getters,
    state,
  };