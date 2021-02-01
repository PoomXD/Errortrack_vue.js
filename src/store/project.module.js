// import ProjectService from "@/services/api/project.service";

const getters = {
    getFullName() {
        console.log("something")
        let firstName = "John";
        let lastName = "Doe";
        return `full name : ${firstName} ${lastName}`;
      },
};

export const project = {
    namespaced: true,
    getters,
  };